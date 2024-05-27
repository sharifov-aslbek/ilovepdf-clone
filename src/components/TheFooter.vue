<template>
   <footer class="footer">
      <div class="container">
         <div class="text-content">
            <div class="content">
               <h3 class="title">
                  ILOVEPDF
               </h3>

               <router-link to="">Главная страница</router-link>
               <router-link :to="{name: 'features'}">Характеристики</router-link>
               <router-link to="">Расценки</router-link>
               <router-link to="">Инструменты</router-link>
               <router-link to="">Вопросы-Ответы</router-link>
            </div>
            <div class="content">
               <h3 class="title">
                  ПРОДУКТ
               </h3>

               <router-link to="">iLovePDF Desktop</router-link>
               <router-link :to="{name: 'mobile'}">iLovePDF Mobile</router-link>
               <router-link to="">Разработчики</router-link>
               <router-link to="">Плагин для WordPress</router-link>
               <router-link to="">iloveimg.com</router-link>
            </div>
            <div class="content">
               <h3 class="title">
                  РЕШЕНИЯ
               </h3>

               <router-link to="">Бизнес</router-link>
               <router-link to="">Образование</router-link>
               
            </div>
            <div class="content">
               <h3 class="title">
                  КОМПАНИЯ
               </h3>

               <router-link to="history">Наша история</router-link>
               <router-link to="">Блог</router-link>
               <router-link to="">О нас</router-link>
               <router-link to="">Юридическая информация & Конфиденциальность</router-link>
               <router-link to="">Связь</router-link>
            </div>
         </div>
         
         <div class="advertising">
               <img src="../assets/images/google-play.png" alt="err">
               <img src="../assets/images/app-store.png" alt="err">
         </div>

         <hr>
         <div class="menu-language" v-show="languageMenu"  @mouseenter="languageMenu = !languageMenu" @mouseleave="languageMenu = !languageMenu">
               <Language/>
         </div>
         
         <div class="foot">
            <div class="language" @mouseenter="languageMenu = true" @mouseleave="languageMenu = !languageMenu">
               <i class="fa-solid fa-globe"></i>
               <p>Pусский</p>
               <i class="fa-solid fa-caret-down"></i>
            </div>
            
            
            <div class="editor">
               <p>© iLovePDF 2024 ® - Ваш PDF Редактор</p>
               <div class="companies">
                  <a href="https://x.com/ilovepdf_com">
                     <img src="../assets/images/twitter-footer.png" alt="">
                  </a>
                  <a href="https://www.facebook.com/people/ilovepdfcom/100064134576573/">
                     <img src="../assets/images/facebook-footer.jpg" alt="">
                  </a>
                  <a href="https://www.linkedin.com/company/ilovepdf/">
                     <img src="../assets/images/in-footer.jpg" alt="">
                  </a>
                  <a href="https://www.instagram.com/ilovepdf_official/">
                     <img src="../assets/images/instagram-footer.avif" alt="">
                  </a>
                  <a href="https://www.tiktok.com/@ilovepdf_official">
                     <img src="../assets/images/tiktok-footer.webp" alt="">
                  </a>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>


<script>
export default {
   data() {
      return {
      languageMenu: false,
      }
   },  
}
</script>

<style>
   .footer {
      position: relative;
      background: white;
   }
   
   .footer .container {
      display: flex;
      flex-direction: column;
      position: relative;
   }

   .footer .container .text-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      /* justify-content: center; */
   }

   .footer .container .menu-language {
      /* height: 0px;
      overflow: hidden; */
      transition: 0.4s;
      top: 80px;
      position: absolute;
   }

   .footer .container .text-content .content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      max-width: 260px;
   }

   
   
   .footer .container .text-content .content .title {
      color: #e5322d;
      font-size: 16px;
   }
   
   .footer .container .text-content .content a {
      color: #47474f;
      transition: 0.4s;
   }
   
   .footer .container .text-content .content a:hover {
      color: #e5322d;
   }
   
   .footer .container .advertising {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 30px;
   }

   .footer .container .advertising img {
      width: 120px;
   }
   
   .footer .container .foot {
      display: flex;
      justify-content: space-between;
   }
   
   .footer .container .foot .language {
      display: flex;
      align-items: center;
      gap: 7px;
      cursor: pointer;
      padding: 30px auto;
      color: #47474f;
   }
   
   
   .footer .container .foot .editor {
      display: flex;
      align-items: center;
      margin-top: 30px;
   }
   
   .footer .container .foot .editor p {
      color: #47474f;
      margin-right: 15px;
      font-size: 16px;
   }
   
   .footer .container .foot a img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      opacity: 0.6;
      transition: 0.5s;
   }
   
   .footer .container .foot a img:hover {
      opacity: 1;
   }
   
   hr {
      height: 0.6px;
      background: rgb(225, 216, 216);
      width: 100%;
      margin-top: 25px;
   }
   @media (max-width:1300px) {
      .footer .container .menu-language {
         top: 120px;
      }
   }
   @media (max-width:1259px) {
      .footer .container .text-content {
         justify-content: center;
         gap: 15px;
      }

      .footer .container .foot .editor p {
         font-size: 13px; 
      }
   }

   @media (max-width:1225px)  {
      .footer .container .menu-language {
         top: 340px;
      }
   }
   @media (max-width:625px) {
      .footer .container .text-content .content {
         width: 190px;
      }
      .footer .container .text-content .content .title {
         font-size: 14px;
      }

      .footer .container .text-content .content a {
         font-size: 13px; 
      }

      .footer .container .foot .editor {
         flex-direction: column;
      }
   }

   @media (max-width:467px) {
      .footer .container .text-content {
         justify-content: flex-start;
         gap: 2px;
      }

      .footer .container .text-content .content {
         width: 150px;
      }
      .footer .container .text-content .content .title {
         font-size: 13px;
      }

      .footer .container .text-content .content a {
         font-size: 11px; 
      }
      .footer .container .menu-language {
         top: 280px;
      }
      .footer .container .foot .language {
         justify-content: center;
      }
      .footer .container .foot {
         flex-direction: column;
      }
   
   }

   @media (max-width:365px) {
      .footer .container .text-content .content {
         width: 250px;
      }
      .footer .container .text-content .content .title {
         font-size: 17px;
      }

      .footer .container .text-content .content a {
         font-size: 13px; 
      }
      .footer .container .advertising {
         flex-direction: column;
      }

      .footer .container .menu-language {
         top: 700px;
      }
   }
</style>