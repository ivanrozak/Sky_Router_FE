<template>
  <div class="">
    <VueSlickCarousel class="top_carousel" ref="carousel" v-bind="settings">
      <div
        v-for="(items, index) in setDataCard"
        :key="index"
        class="card_destination py-5"
      >
        <div class="image_destination">
          <img class="image_details" :src="items.images" alt="image_desti" />
        </div>
        <h5 class="text-center mt-3 mr-3 mr-lg-4 mr-xl-3">
          {{ items.nameCountry }}
        </h5>
      </div>
    </VueSlickCarousel>
    <div class="btnNextnPrev">
      <button class="px-4 mr-lg-3 mr-3 py-2 btn_prev" @click="showPrev">
        <img src="../../../assets/Images/Logo/btnbackleft.png" alt="prev" />
      </button>
      <button class="px-4 py-2 btn_next" @click="showNext">
        <img src="../../../assets/Images/Logo/btnback.png" alt="next" />
      </button>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Card-Corousel',
  components: { VueSlickCarousel },
  data() {
    return {
      setDataCard: [
        {
          images:
            'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',

          nameCountry: 'Korea'
        },
        {
          images:
            'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',

          nameCountry: 'Japan'
        },
        {
          images:
            'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',

          nameCountry: 'Indonesia'
        },
        {
          images:
            'https://images.unsplash.com/photo-1601712373547-4a997d1ebbf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
          nameCountry: 'Indonesia'
        },
        {
          images:
            'https://images.unsplash.com/photo-1583807232206-0ed21ff95843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          nameCountry: 'Indonesia'
        },
        {
          images:
            'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1961&q=80',
          nameCountry: 'Sydney'
        }
      ],
      settings: {
        centerMode: true,
        arrows: false,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 5,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerPadding: '-8px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '-8px',
              slidesToShow: 4
            }
          }
        ]
      }
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    }
  }
}
</script>
<style scoped>
.btn_prev img,
.btn_next img {
  width: 10px;
  object-fit: contain;
}
.btn_prev {
  background: none;
  border-radius: 10px;
  border: 1px solid #ffffff;
  outline: none;
}
.btn_next {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #ffffff;
  outline: none;
}
.image_details {
  border-radius: 50%;
  border: 5px solid #ffffff;
  padding: 10px;
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: 45%;
}
.btnNextnPrev {
  text-align: center;
}
.card_destination h5 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: #ffffff;
}
.top_carousel {
  padding: 0 10%;
}
@media (max-width: 576px) {
  .top_carousel {
    padding: 0 3%;
  }
}
</style>
