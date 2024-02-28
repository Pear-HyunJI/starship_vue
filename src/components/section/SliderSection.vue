<template>
    <section id="sliderSection">
        <div class="slide__inner">
            <Swiper :options="swiperOption" class="swiper">
                <SwiperSlide v-for="(slider, index) in sliders" :key="index">
                    <img :src="slider.image" :alt="slider.alt">
                </SwiperSlide>
            </Swiper>
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
                    slidesPerView : 1,
                    // spaceBetween : 30,
                    autoplay:{
                       delay:1000
                    },
                    loop : true,
                    pagination:{
                        el: '.swiper-pagination',
                        clickable : true
                    },
                    navigation : {
                        nextEl : '.swiper-button-next',
                        prevEl : '.swiper-button-prev'
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>