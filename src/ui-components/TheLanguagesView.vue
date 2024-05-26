<template>
   <div class="languages">
      <div class="category">
         <router-link to="">English</router-link>
         <router-link to="">Español</router-link>
         <router-link to="">Français</router-link>
         <router-link to="">Deutsch</router-link>
         <router-link to="">Italiano</router-link>
         <router-link to="">Português</router-link>
         <router-link to="">日本語</router-link>
         <router-link to="ru">Pусский</router-link>
         <router-link to="">한국어</router-link>
      </div>
      <div class="category">
         <router-link to="">中文 (简体)</router-link>
         <router-link to="">中文 (繁體)</router-link>
         <router-link to="">العربية</router-link>
         <router-link to="">Български</router-link>
         <router-link to="">Català</router-link>
         <router-link to="">Nederlands</router-link>
         <router-link to="">Ελληνικά</router-link>
         <router-link to="">हिन्दी</router-link>
      </div>
      <div class="category">
         <router-link to="">Bahasa Indonesia</router-link>
         <router-link to="">Bahasa Melayu</router-link>
         <router-link to="">Polski</router-link>
         <router-link to="">Svenska</router-link>
         <router-link to="">ภาษาไทย</router-link>
         <router-link to="">Türkçe</router-link>
         <router-link to="">Українська</router-link>
         <router-link to="">Tiếng Việt</router-link>
      </div>
   </div>
</template>



<script>
export default {
   name: 'Language'
}
</script>


<style>
   .languages {
      display: flex;
      justify-content: flex-start;
      gap: 50px;
      width: 100%;
      max-width: 450px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid rgb(177, 177, 177);
   }

   .languages .category {
      display: flex;
      flex-direction: column;
      padding: 8px 16px 5px;
      color: #161616;
      font-size: 13px;
      gap: 10px;
   }

   a.router-link-exact-active {
  color: #161616;
   }


   .languages .category a:hover {
      color: #e5322d;
   }

   
   @media (max-width:467px) {
      .languages {
         gap: 25px;   
      }
      .languages .category {
         font-size: 10px; 
      }

   }

   @media (max-width:370px) {
      .languages {
         gap: 6px;
      }
   }
</style>