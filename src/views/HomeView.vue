<template>
    <app-body/>
    <app-footer/>
</template>

<script>

import AppBody from "@/components/AppBody/AppBody";
import AppFooter from "@/components/AppFooter/AppFooter";
export default {
  name: 'HomeView',
    components: {AppFooter, AppBody},
}
</script>
