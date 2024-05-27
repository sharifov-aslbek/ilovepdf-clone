<template>
   <div class="right">

         <h3 class="title-text">ПРЕОБРАЗОВАТЬ ИЗ PDF</h3>

         <router-link to='home-handler'>
         <img src="../assets/images/convertor-img6.png" alt="">
         <p>PDF в JPG</p>
         </router-link>

         <router-link to=''>
         <img src="../assets/images/convertor-img7.png" alt="">
         <p>PDF в WORD</p>
         </router-link>

         <router-link to=''>
         <img src="../assets/images/convertor-img8.png" alt="">
         <p>PDF в POWERPOINT</p>
         </router-link>

         <router-link to="">
         <img src="../assets/images/convertor-img9.png" alt="">
         <p>PDF в EXCEL</p>
         </router-link>

         <router-link to=''>
         <img src="../assets/images/convertor-img10.png" alt="">
         <p>PDF в PDF/A</p>
         </router-link>
</div>
</template>


<script>
export default {
   name: 'ConvertMenuRight'
}
</script>


<style>
.right {
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 20px;
}

.right p {
   font-size: 11px;  
   font-weight: 600;
}

.right .title-text {
   color: #707078;
   font-size: 13px;
}

.right a {
   display: flex;
   align-items: center;
   gap: 5px;
}

.right a img {
   width: 30px;
}

.right a:hover {
   color: red;
}

a {
   color: black;
   text-decoration: none;
}

a.router-link-exact-active {
   color: red;
}
</style>