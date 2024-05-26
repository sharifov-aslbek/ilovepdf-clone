<template>
   <div class="card" @click="routePush(article.route)">
      <img :src="article.src" alt="err">
      <h3 class="title-text">{{ article.title }}</h3>
      <p class="description">{{ article.text }}</p>
   </div>
</template>


<script>
export default {
   name: 'Card',
   props: {
      article: [Object , String] ,
      newCategorys: [Object , String]   
   },
   methods: {
      routePush(route) {
         return this.$router.push({name: route})
      }
   }
}
</script>

<style scoped>
.card {
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   padding: 22px;
   background: white;
   border-radius: 10px;
   width: 100%;
   max-width: 260px;
   margin: 0 auto;
   height: 250px;
   cursor: pointer;
}

.card:hover {
   background: #f5f5fa;
}

.card h3 {
   font-size: 20px;
   font-weight: 600;
   color: #33333b;
   margin-bottom: 8px;
   margin-top: 5px;
}

.card:hover p {
   color: #47474f;
}

.card p {
   font-size: 13px;
   color: #707078;
   width: 100%;
   max-width: 200px;
   line-height: 18px;
}

.card:hover img {
   transform: scale(1.2);
}
img {
   transform: scale(1);
   transition: 0.2s;
   width: 50px;
   height: 50px;
}
</style>