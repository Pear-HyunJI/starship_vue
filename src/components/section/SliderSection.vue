<template>
    <section id="sliderSection">
        <div class="slide__inner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(slider, index) in sliders" :key="index">
                    <img :src="slider.image" :alt="slider.alt">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from "vue-awesome-swiper"
    import "swiper/css/swiper.css"

    export default {
        name:"SliderSection",
        components:{
            Swiper,
            SwiperSlide
        },
        data(){
            return {
                sliders : [
                    { image:"./image/main_slide_crvt_24205_pc_02.jpg", alt:"이미지1" },
                    { image:"./image/main_slide_crvt_240111_pc.jpg", alt:"이미지2" },
                    { image:"./image/main_slide_jsw_231212_pc.jpg", alt:"이미지3" }
                ],
                swiperOption:{
                    slidePerView:1,
                    spaceBetween:0,
                    autoplay:{
                        delay : 1000
                    },
                    loop:true,
                    pagination: { 
                        el: '.swiper-pagination', 
                        clickable: true 
                    }, 
                    navigation: { 
                        nextEl: '.swiper-button-next', 
                        prevEl: '.swiper-button-prev' 
                    } 
                }
            }
        },
    }
</script>

<style scoped>
    .swiper-button-prev,
    .swiper-button-next {
        color:red;
    }
    
</style>