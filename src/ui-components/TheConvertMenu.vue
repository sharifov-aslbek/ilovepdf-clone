<template>
      <div class="left">

            <h3 class="title-text">КОНВЕРТАЦИЯ В PDF</h3>

            <router-link to='about'>
            <img src="../assets/images/convertor-img1.png" alt="">
            <p>JPG в PDF</p>
            </router-link>

            <router-link to='word-to-pdf'>
            <img src="../assets/images/convertor-img2.png" alt="">
            <p>WORD в PDF</p>
            </router-link>

            <router-link to=''>
            <img src="../assets/images/convertor-img3.png" alt="">
            <p>POWERPOINT в PDF</p>
            </router-link>

            <router-link to=''>
            <img src="../assets/images/convertor-img4.png" alt="">
            <p>EXCEL в PDF</p>
            </router-link>

            <router-link to=''>
            <img src="../assets/images/html-pdf-card-img.png" alt="">
            <p>HTML в PDF</p>
            </router-link>
</div>

</template>

<script>
export default {
   name: 'ConvertMenuLeft'
}
</script>


<style scoped>
.left p {
   font-size: 11px;  
   font-weight: 600;
}

.left {
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 20px;
}

.left .title-text {
   color: #707078;
   font-size: 13px;
}

.left a {
   display: flex;
   align-items: center;
   gap: 5px;
}

.left a img {
   width: 30px;
   /* height: 45px; */
}

.left a:hover {
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