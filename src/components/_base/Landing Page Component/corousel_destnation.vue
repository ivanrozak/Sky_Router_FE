<template>
  <VueSlickCarousel v-bind="settings">
    <div
      v-for="(items, index) in data"
      :key="index"
      class="card_destination py-5"
    >
      <b-card
        img-src="https://images.unsplash.com/photo-1596455123891-2a1a691b17de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
        img-alt="Image"
        img-top
        class="mb-2 px-2 pt-2 image_destination"
      >
        <b-card-text class="title_card">
          <h5 class="mt-lg-3">Tokyo,</h5>
          <div class="title_card_destination d-flex align-items-center">
            <h3>Japan</h3>
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
      data: 7,
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
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2
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
