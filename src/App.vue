<template>
  <app-header/>
  <router-view/>
</template>

<script>
  import AppHeader from "@/components/AppHeader/AppHeader";
  import { mapActions } from 'vuex'
  export default {
    components: {AppHeader},
    methods: {
      ...mapActions(['fetchCards'])
    },
    mounted() {
      this.fetchCards()
    }
  }
</script>

<style lang="scss">
  *{padding: 0;margin: 0;border: 0; font-family: 'Montserrat', sans-serif;}
  *,*:before,*:after{-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{height:100%;width:100%;line-height:24px;font-size:16px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
  body{min-height: 100%;overflow-x: hidden; background: #F7F9FF;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner{padding:0;border:0;}
  a,a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
  .container {
    max-width: 1200px;
    padding: 0 16px;
    margin: 0 auto;
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #0050EF;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
</style>
