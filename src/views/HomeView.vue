<template>
  <main>
    <slider-section />
    <slider-section2 />
    <new-arrival />
  </main>
</template>

<script>
import SliderSection from "../components/section/SliderSection.vue";
import SliderSection2 from "../components/section/SliderSection2.vue";
import NewArrival from "../components/section/NewArrival.vue";
export default {
  name: "HomeView",
  components: {
    SliderSection,
    SliderSection2,
    NewArrival,
  },
};
</script>

<style lang="scss" scoped></style>
