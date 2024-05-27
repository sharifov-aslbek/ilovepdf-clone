<template>
   <header class="head">
      <nav class="navbar">
           <div class="logo">
            <img src="../assets/images/logo.svg" alt="err" @click="toPage('home')">
           </div>

           <div class="menu">
            <router-link class="convert-a" to="">Объединить PDF</router-link>
            <router-link class="convert-a" to="" >Разделить PDF</router-link>
            <router-link class="convert-a" to="home">Сжать PDF</router-link>
            <div class="convert">
               <a href="#" class="convert-link" @mouseenter="convertMenu = true" @mouseleave="convertMenu = !convertMenu">КОНВЕРТИРОВАТЬ PDF <i class="fa-solid fa-chevron-down"></i></a>
               <div class="converter-menu" v-show="convertMenu" @mouseenter="convertMenu = !convertMenu" @mouseleave="convertMenu = !convertMenu">
                  <div class="arrow-up"></div>
                  <ConvertMenuLeft />
                  <ConvertMenuRight />
               </div>
            </div>
            <div class="all-instruments">
               <a href="#" class="convert-link" @mouseenter="allInstruments = true" @mouseleave="allInstruments = !allInstruments">ВСЕ ИНСТРУМЕНТЫ PDF <i class="fa-solid fa-chevron-down"></i></a>
               <div class="all-menu" @mouseenter="allInstruments = !allInstruments" @mouseleave="allInstruments = !allInstruments" v-show="allInstruments">
                  <div class="arrow-up"></div>
                  <div class="organization">
                     <h3 class="title-text">ОРГАНИЗОВАТЬ PDF</h3>
                     <router-link to="register">
                        <img src="../assets/images/organization-img1.png" alt="err">
                        <p>Объединить PDF</p>
                     </router-link>

                     <router-link to="home">
                        <img src="../assets/images/organization-img2.png" alt="err">
                        <p>Разделить PDF</p>
                     </router-link>

                     <router-link to="">
                        <img src="../assets/images/organization-img3.png" alt="err">
                        <p>Удалить страницы</p>
                     </router-link>

                     <router-link to="">
                        <img src="../assets/images/organization-img4.png" alt="err">
                        <p>Извлечь изображения</p>
                     </router-link>
                     
                     <router-link to="">
                        <img src="../assets/images/organization-img5.png" alt="err">
                        <p>Организовать PDF</p>
                     </router-link>

                     <router-link to="">
                        <img src="../assets/images/organization-img6.png" alt="err">
                        <p>Сканировать в PDF</p>
                     </router-link>
                  </div>

                  <div class="optimization">
                     <h3 class="title-text">ОПТИМИЗАЦИЯ PDF</h3>
                     <router-link to="" >
                        <img src="../assets/images/optimization-img1.png" alt="err">
                        <p>Сжать PDF</p>
                     </router-link>
                     <router-link to="" >
                        <img src="../assets/images/optimization-img2.png" alt="err">
                        <p>Восстановить PDF</p>
                     </router-link>
                     <router-link to="" >
                        <img src="../assets/images/optimization-img3.png" alt="err">
                        <p>OCR PDF</p>
                     </router-link>
                  </div>

                  <ConvertMenuLeft />
                  <ConvertMenuRight />

                  <div class="edit">
                     <h3 class="title-text">РЕДАКТИРОВАТЬ PDF</h3>
                     <router-link to="">
                        <img src="../assets/images/edit-img1.png" alt="err">
                        <p>Повернуть PDF</p>
                     </router-link>
                     <router-link to="">
                        <img src="../assets/images/edit-img2.png" alt="err">
                        <p>Добавить номера страниц</p>
                     </router-link>
                     <router-link to="">
                        <img src="../assets/images/edit-img3.png" alt="err">
                        <p>Добавить водяной знак</p>
                     </router-link>
                     <router-link to="">
                        <img src="../assets/images/edit-img4.png" alt="err">
                        <p>Редактировать PDF</p>
                     </router-link>
                  </div>

                  <div class="protection">
                     <h3 class="title-text">ЗАЩИТА PDF</h3>
                     <router-link to="">
                        <img src="../assets/images/protatection-img1.png" alt="err">
                        <p>Открыть PDF</p>
                     </router-link>
                     <router-link to="">
                        <img src="../assets/images/protatection-img2.png" alt="err">
                        <p>Защита PDF</p>
                     </router-link>
                     <router-link to="">
                        <img src="../assets/images/protatection-img3.png" alt="err">
                        <p>Подписать PDF</p>
                     </router-link>
                     <router-link to="">
                        <img src="../assets/images/protatection-img4.png" alt="err">
                        <p>Сравнение PDF-файлов</p>
                     </router-link>
                  </div>
               </div>
            </div>
           </div>

           <div class="actions">
              <div class="onHover" v-show="onDesktopHover">
                  <div class="arrow-up"></div>
                 <h3>iLovePDF Desktop, работайте в автономном режиме</h3>
              </div>
              <button class="desk-btn" @click="toPage('desktop')" @mouseenter="onDesktopHover = !onDesktopHover" @mouseleave="onDesktopHover = !onDesktopHover">
                 <i class="fa-solid fa-desktop" ></i>
              </button>
              
            <router-link :to="{name: 'login'}" class="login">Вход</router-link>
            <router-link :to="{name: 'register'}" class="register">Регистрация</router-link>
            <div class="menu-product" :class="{'active': toggleMenuProduct}" @mouseenter="toggleMenuProduct = true" @mouseleave='menuClose'>
                     <router-link :to="{name: 'desktop'}">
                        <i class="fa-solid fa-desktop"></i>
                        <p>Настольная версия</p>
                     </router-link>

                     <router-link to="">
                      <i class="fa-solid fa-mobile"></i>
                        <p>Мобильная версия</p>
                     </router-link>

                     <router-link to="">
                      <i class="fa-solid fa-sliders"></i>
                        <p>Характеристики</p>
                     </router-link>

                     <router-link to="">
                        <i class="fa-solid fa-code"></i>
                        <p>REST API</p>
                     </router-link>

                     <router-link to="">
                        <i class="fa-brands fa-wordpress"></i>
                        <p>Плагин для WordPress</p>
                     </router-link>
                  </div>
               <!-- <div class="menu-solutions">
                  <router-link to="shopping">
                     <i class="fa-solid fa-bag-shopping"></i>
                     <p>Бизнес</p>
                  </router-link>
                  <router-link to="">
                     <i class="fa-solid fa-graduation-cap"></i>
                     <p>Образование</p>
                  </router-link>
                  <router-link to="">
                     <i class="fa-solid fa-mobile"></i>
                     <p>Разработчики</p>
                  </router-link>
               </div> -->
               <!-- <div class="menu-language">
                  <Language />
               </div> -->
               <div class="menu-faq">

               </div>
            <div class="menu-navigation">
               <div id="bars" @mouseenter="AllMenuOpen = true" @mouseleave="AllMenuOpen = !AllMenuOpen">
                  <i class="fa-solid fa-bars"></i>
               </div>
            <div class="navigation" :class="{'active': AllMenuOpen}" @mouseenter="AllMenuOpen = !AllMenuOpen" @mouseleave="allMenuOpenBig">
               <!-- for mouse leave navigation @mouseleave="allMenuOpenBig" -->
               <div class="home">
                  <router-link :to="{name: 'home'}"><i class="fa-solid fa-heart"></i> Главная страница</router-link>
               </div>

               <div class="products" @mouseenter="toggleMenuProduct = true" @mouseleave="toggleMenuProduct = false">
                  <i class="fa-solid fa-box"></i>
                  <p>Продукт</p>
               </div>
               <div class="solutions">
                  <i class="fa-solid fa-lightbulb"></i>
                  <p>Решения</p>
               </div>

               <div class="definition">
                  <router-link to="">
                     <i class="fa-solid fa-tag"></i>
                     <p>Расценки</p>
                  </router-link>
               </div>
               <div class="language">
                  <i class="fa-solid fa-globe"></i>
                  <p>Язык</p>
               </div>

               <div class="question">
                  <i class="fa-solid fa-circle-question"></i>
                  <p>Помощь</p>
               </div>
                  <a class="iloveimg" href="https://www.iloveimg.com/ru"> <i class="fa-solid fa-heart-circle-bolt"></i> iLoveIMG</a>
            </div>
            </div>
           </div>
      </nav>
   </header>


</template>

<script>
export default {
   data() {
      return {
         convertMenu: false,
         allInstruments: false,
         onDesktopHover: false,
         toggleMenuProduct: false,
         AllMenuOpen: false
      }
   },
   methods: {
      toPage(router) {
         return this.$router.push({name: router})
      },
      toggleMenuProductFunc() {
         this.toggleMenuProduct = !this.toggleMenuProduct
      },
      menuClose() {
         this.toggleMenuProduct = false
         this.AllMenuOpen = false
      },
      allMenuOpenBig() {
         if(this.toggleMenuProduct) {
            this.AllMenuOpen = true
         }
      }
   }, 
}
</script>


<style scoped>
   @import url('../assets/styles/navbar.css');
</style>