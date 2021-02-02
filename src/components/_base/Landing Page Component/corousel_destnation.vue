<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="(items, index) in setDataCard"
      :key="index"
      class="card_destination py-5"
    >
      <b-card
        :img-src="items.image"
        img-alt="Image"
        img-top
        class="mb-2 px-2 pt-2 image_destination"
      >
        <b-card-text class="title_card">
          <h5 class="mt-lg-3 mt-2">{{items.nameDestination}}</h5>
          <div class="title_card_destination d-flex align-items-center">
            <h3>{{ items.nameCountry }}</h3>
            <span class="badge ml-auto"
              ><img src="../../../assets/Images/Logo/btnback.png" alt=""
            /></span>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </VueSlickCarousel>
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
          image:
            'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          nameDestination: 'Jeonju',
          nameCountry: 'Korea'
        },
        {
          image:
            'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          nameDestination: 'Fujiyoshida',
          nameCountry: 'Japan'
        },
        {
          image:
            'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
          nameDestination: 'Bali',
          nameCountry: 'Indonesia'
        },
        {
          image:
            'https://images.unsplash.com/photo-1601712373547-4a997d1ebbf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
          nameDestination: 'Paralayang, Malang',
          nameCountry: 'Indonesia'
        },
        {
          image:
            'https://images.unsplash.com/photo-1583807232206-0ed21ff95843?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          nameDestination: 'Padar Island, Komodo',
          nameCountry: 'Indonesia'
        },
        {
          image:
            'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1961&q=80',
          nameDestination: 'Sydney Harbour Bridge',
          nameCountry: 'Sydney'
        }
      ],

      settings: {
        centerMode: true,
        centerPadding: '10px',
        infinite: true,
        slidesToShow: 5,
        arrows: false,
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
              centerPadding: '-40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '-6px',
              slidesToShow: 4
            }
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.card {
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.15);
  border-radius: 20px;
  width: 200px;
}
.card img.card-img-top {
  border-radius: 20px;
  height: 150px;
  object-fit: cover;
  object-position: 45%;
}
.title_card {
  font-family: 'Poppins', sans-serif;
}
.title_card h5 {
  font-weight: 600;
  font-size: 14px;
}
.card-body {
  padding: 0;
}
.title_card_destination h3 {
  font-weight: 600;
  font-size: 24px;
}
.badge {
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 10px 13px;
  margin-bottom: 10px;
  background: rgba(35, 149, 255, 0.1);
  border-radius: 50%;
}
</style>
