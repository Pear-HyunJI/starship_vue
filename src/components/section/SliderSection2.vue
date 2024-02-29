<template>
  <section id="sliderSection2" class="row">
    <div class="slide__inner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(slider, index) in sliders" :key="index">
          <img
            :src="slider.currentImage"
            :alt="slider.alt"
            @mouseover="changeImage(index, true)"
            @mouseout="changeImage(index, false)"
          />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "SliderSection2",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliders: [
        {
          currentImage: "./image/p_cravity_g.jpg",
          image1: "./image/p_cravity_g.jpg",
          image2: "./image/p_cravity.jpg",
          alt: "크래비티",
        },
        {
          currentImage: "./image/p_ive_g.jpg",
          image1: "./image/p_ive_g.jpg",
          image2: "./image/p_ive.jpg",
          alt: "아이브",
        },
        {
          currentImage: "./image/p_jeongsewoon_g.jpg",
          image1: "./image/p_jeongsewoon_g.jpg",
          image2: "./image/p_jeongsewoon.jpg",
          alt: "정세운",
        },
        {
          currentImage: "./image/p_cravity_g.jpg",
          image1: "./image/p_cravity_g.jpg",
          image2: "./image/p_cravity.jpg",
          alt: "크래비티",
        },
        {
          currentImage: "./image/p_ive_g.jpg",
          image1: "./image/p_ive_g.jpg",
          image2: "./image/p_ive.jpg",
          alt: "아이브",
        },
        {
          currentImage: "./image/p_jeongsewoon_g.jpg",
          image1: "./image/p_jeongsewoon_g.jpg",
          image2: "./image/p_jeongsewoon.jpg",
          alt: "정세운",
        },
        {
          currentImage: "./image/p_cravity_g.jpg",
          image1: "./image/p_cravity_g.jpg",
          image2: "./image/p_cravity.jpg",
          alt: "크래비티",
        },
        {
          currentImage: "./image/p_ive_g.jpg",
          image1: "./image/p_ive_g.jpg",
          image2: "./image/p_ive.jpg",
          alt: "아이브",
        },
        {
          currentImage: "./image/p_jeongsewoon_g.jpg",
          image1: "./image/p_jeongsewoon_g.jpg",
          image2: "./image/p_jeongsewoon.jpg",
          alt: "정세운",
        },
      ],
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    changeImage(index, isMouseOver) {
      const slider = this.sliders[index];
      slider.currentImage = isMouseOver ? slider.image2 : slider.image1;
      //   if (isMouseOver) {
      //     this.sliders[index].currentImage = this.sliders[index].image2;
      //   } else {
      //     this.sliders[index].currentImage = this.sliders[index].image1;
      //   }
    },
  },
};
</script>

<style lang="scss" scoped>
#sliderSection2 {
  margin: 100px auto;
  .swiper {
    img {
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>
