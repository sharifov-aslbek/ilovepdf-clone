<template>
   <div class="card" @click="routePush(router)">
      <img :src="src" alt="err">
      <h3 class="title-text">{{ title }}</h3>
      <p class="description">{{ text }}</p>
   </div>
</template>


<script>
export default {
   props: {
      src: [String],
      title: [String],
      text: [String],
      router: [String]
   },
   name: 'Card',
   methods: {
      routePush(route) {
         return this.$router.push({name: route})
      }
   }
}
</script>

<style></style>