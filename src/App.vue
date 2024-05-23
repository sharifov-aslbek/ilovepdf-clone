
<template>
  <TheNavbar />
  <RouterView class="view" />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
export default {
    components: {
      TheNavbar
    }
}
</script>


<style>
.view {
   margin-top: 50px;
}
</style>