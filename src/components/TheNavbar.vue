<template>
   <header class="head">
      <nav class="navbar">
           <div class="logo">
            <img src="../assets/images/logo.svg" alt="err" @click="toHome">
           </div>

           <div class="menu">
            <router-link class="convert-a" to="">Объединить PDF</router-link>
            <router-link class="convert-a" to="" >Разделить PDF</router-link>
            <router-link class="convert-a" to="home">Сжать PDF</router-link>
            <div class="convert">
               <a href="#" class="convert-link" @mouseenter="convertMenuOpen">КОНВЕРТИРОВАТЬ PDF <i class="fa-solid fa-chevron-down"></i></a>
               <div class="converter-menu" v-show="convertMenu" @mouseleave="convertMenuOpen">
                  <div class="arrow-up"></div>
                  <ConvertMenuLeft />
                  <ConvertMenuRight />
               </div>
            </div>
            <div class="all-instruments">
               <a href="#" class="convert-link" @mouseenter="allMenuOpen">ВСЕ ИНСТРУМЕНТЫ PDF <i class="fa-solid fa-chevron-down"></i></a>
               <div class="all-menu" @mouseleave="allMenuOpen" v-show="allInstruments">
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
              <a href="#" @click="toDesktop" @mouseenter="onDesktopHover = !onDesktopHover" @mouseleave="onDesktopHover = !onDesktopHover">
                 <i class="fa-solid fa-desktop" ></i>
              </a>
            <router-link :to="{name: 'login'}" class="login">Вход</router-link>
            <router-link :to="{name: 'register'}" class="register">Регистрация</router-link>
            <div class="menu-navigation">
               <a href="#">
               <i class="fa-solid fa-bars"></i>
               </a>
            <div class="navigation">
               <div class="home">
                  <router-link :to="{name: 'home'}"><i class="fa-solid fa-heart-circle-check"></i> Главная страница</router-link>
               </div>

               <div class="products">
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
               <hr>
               <div class="language">
                  <i class="fa-solid fa-globe"></i>
                  <p>Язык</p>
               </div>

               <div class="question">
                  <i class="fa-solid fa-circle-question"></i>
                  <p>Помощь</p>
               </div>
               <hr>
               <div class="iloveimg">
                  <a href="https://www.iloveimg.com/ru"> <i class="fa-solid fa-heart-circle-bolt"></i> iLoveIMG</a>
               </div>
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
      }
   },
   methods: {
      toHome() {
         return this.$router.push({name: 'home'})
      },
      toDesktop() {
         return this.$router.push({name: 'desktop'})
      },
      convertMenuOpen() {
         this.convertMenu = !this.convertMenu
      },
      allMenuOpen() {
         this.allInstruments = !this.allInstruments
      }
   }  
}
</script>


<style scoped>
.head {
   position: sticky;
   top: 0;
}
.head .navbar {
   display: flex;
   align-items: center;
   justify-content: space-around;
   box-shadow: -1px 3px 5px 0px rgba(205, 205, 205, 0.75);
   -webkit-box-shadow: -1px 3px 5px 0px rgba(200, 200, 200, 0.75);
   -moz-box-shadow: -1px 3px 5px 0px rgba(204, 204, 204, 0.75);
   background: white;
   height: 50px;
   
}

.head .navbar .menu .convert-a {
   font-size: 13px;
   text-transform: uppercase;
}
.logo {
   cursor: pointer;
}

.logo img {
   width: auto;
   height: 30px;
}

.head .navbar .menu {
   display: flex;
   align-items: center;
   gap: 30px;
   justify-content: center;
}

.head .navbar .menu .convert {
   display: flex;
   align-items: center;
   flex-direction: column;
}
.head .navbar .menu .all-instruments {
   display: flex;
   align-items: center;
   flex-direction: column;
}

.head .navbar .menu .all-instruments .organization {
   display: flex;
   gap: 7px;
   flex-direction: column;
}
.head .navbar .menu .all-instruments .optimization {
   display: flex;
   gap: 7px;
   flex-direction: column;
}

.head .navbar .menu .all-instruments .edit {
   display: flex;
   gap: 7px;
   flex-direction: column;
}
.head .navbar .menu .all-instruments .protection {
   display: flex;
   flex-direction: column;
   gap: 7px;
}



.head .navbar .menu .all-instruments .all-menu .title-text {
   color: #707078;
   font-size: 13px;
}

.head .navbar .menu .all-instruments .all-menu a {
   display: flex;
   align-items: center;
   gap: 4px;
}

.head .navbar .menu .all-instruments .all-menu a:hover {
   color: red;
}


.head .navbar .menu .all-instruments .all-menu p {
   font-size: 11px;  
   font-weight: 600;
}

.head .navbar .menu .convert-link {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   font-size: 13px;
}

.head .navbar .menu .convert-link i {
   font-size: 10px;
}

.head .navbar .menu .convert-link:hover {
   color: red;
}
.head .navbar .menu .converter-menu {
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
   position: absolute;
   margin-top: 45px;
   gap: 20px;
   width: 530px;
   height: 320px;
   box-shadow: 3px 2px 18px 4px rgba(191, 191, 191, 0.75);
   -webkit-box-shadow: 3px 2px 18px 4px rgba(194, 194, 194, 0.75);
   -moz-box-shadow: 3px 2px 18px 4px rgba(194, 194, 194, 0.75);
   padding-top: 20px;
   background: white;
   border-radius: 10px;
}
.head .navbar .menu .all-instruments .all-menu {
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
   position: absolute;
   margin-top: 45px;
   gap: 20px;
   width: 91%;
   position: absolute;
   left: 50px;
   height: 320px;
   box-shadow: 3px 2px 18px 4px rgba(191, 191, 191, 0.75);
   -webkit-box-shadow: 3px 2px 18px 4px rgba(194, 194, 194, 0.75);
   -moz-box-shadow: 3px 2px 18px 4px rgba(194, 194, 194, 0.75);
   padding-top: 20px;
   background: white;
   border-radius: 10px;
}


.head .navbar .menu .converter-menu .arrow-up {
   width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  position: absolute;
  /* bottom: 55px; */
  left: 240px;
  top: -8px;
  border-bottom: 8px solid #ffffff;
}
.head .navbar .menu .all-instruments .all-menu .arrow-up {
   width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  position: absolute;
  /* bottom: 55px; */
  left: 710px;
  top: -8px;
  border-bottom: 8px solid #ffffff;
}

.head .navbar .actions {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
}

.head .navbar .actions .menu-navigation {
   display: flex;
   flex-direction: column;
}

.head .navbar .actions .menu-navigation .navigation {
   position: absolute;
   top: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
}


.head .navbar .actions i {
   font-size: 20px;
}

.head .navbar .actions .onHover {
   position: absolute;
   top: 55px;
   text-align: center;
   right: 155px;
   width: 250px;
   padding: 0 15px;
   font-size: 10px;
   background: rgb(61, 61, 61);
   color: #fff;
   border-radius: 7px;
}

.head .navbar .actions .onHover .arrow-up {

  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  bottom: 55px;
  left: 125px;
  border-bottom: 5px solid black;

}
.head .navbar .actions a {
   font-size: 13px;
}

.head .navbar .actions .login:hover {
   color: red;
}

.head .navbar .actions .register {
   padding: 7px 18px;
   background: red;
   color: #fff;
   font-weight: 600;
   border-radius: 8px;
}


.head .navbar .actions .register:hover {
   background: rgb(191, 39, 39);
}

a {
   color: black;
   text-decoration: none;
}

a.router-link-exact-active {
   color: red;
}
</style>