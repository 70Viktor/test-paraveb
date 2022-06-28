<template>
    <app-slide/>
<!--    <app-body/>-->
<!--    <app-footer/>-->
</template>

<script>


import AppSlide from "@/components/AppSlider/AppSlider";
import AppBody from "@/components/AppBody/AppBody";
import AppFooter from "@/components/AppFooter/AppFooter";
export default {
  name: 'HomeView',
    components: {AppFooter, AppBody, AppSlide},
}
</script>
