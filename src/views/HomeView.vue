<template>
    <app-slide/>
    <app-body/>
</template>

<script>


import AppSlide from "@/components/AppSlider/AppSlide";
import AppBody from "@/components/AppBody/AppBody";
export default {
  name: 'HomeView',
    components: {AppBody, AppSlide},
}
</script>
