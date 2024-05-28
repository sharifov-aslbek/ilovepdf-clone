<template>
   <div class="card">
      <img :src="img" alt="#">
      <h3 class="card-title">{{ title }}</h3>
      <p class="subtitle">
         {{ subtitle }}         
      </p>
</div>

</template>


<script>
export default {
   name: 'Instrument',
   props: {
      img: [String],
      subtitle: [String],
      title: [String],
   }
}
</script>

<style scoped>
.card {
   width: 100%;
   max-width: 320px;
   display: flex;
   align-items: flex-start;  
   flex-direction: column;
   margin: 0px 0px 32px;
   padding: 32px 32px 48px;
   -webkit-box-shadow: 0 5px 30px 0 hsla(0, 0%, 9%, .1);
    box-shadow: 0 5px 30px 0 hsla(0, 0%, 9% , .1);
   height: 100%;
   min-height: 420px;
    border-radius: 7px;
    gap: 20px;    
}
.card .card-title {
   font-weight: 500;
   font-size: 20px;
   line-height: 28px;
   color: #33333b;
}

.card .subtitle {
   line-height: 28px;
   font-size: 16px;
   color: #707078;
   width: 100%;
   max-width: 310px;
}
</style>