
<template>
  <TheNavbar />
  <RouterView class="view" />
  <TheFooter />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue'
export default {
    components: {
      TheNavbar , TheFooter
    }
}
</script>


<style>
.view {
   margin-top: 50px;
}
</style>