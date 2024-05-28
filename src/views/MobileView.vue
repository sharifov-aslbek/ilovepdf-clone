<template>
   <section class="mobile">

         <div class="content">
            <div class="top-content">
            <h1 class="title">
            iLovePDF Mobile
         </h1>

         <div class="advestring">
            <img src="../assets/images/google-play.png" alt="err">
            <img src="../assets/images/app-store.png" alt="err">
         </div>
         </div>

         <div class="hero-img">
            <img src="../assets/images/mobile-page-heroimg.png" alt="err" :class="{'active': heroimg}">
         </div>

         <div class="text">
            <h2 class="uptitle">Сканируйте, редактируйте и обменивайтесь документами со своего смартфона и планшета</h2>
            <p class="paragraph">Превратите свое мобильное устройство или планшет в портативный редактор PDF-файлов. Поддерживайте динамику проектов и всегда оставайтесь в курсе дел, используя любимые PDF-инструменты в любое время и в любом месте.</p>
         </div>
         </div>

      <div class="container">
         <div class="cards-hero">
            <div class="text">
               <h2 class="uptitle">PDF-инструменты для занятых людей</h2>
            </div>

            <div class="cards" :class="{'active': cardOpener}">
               <Instrument :img="'src/assets/images/mobile-card-img1.svg'" :title="'Редактор PDF'" 
               :subtitle="'Включайте красочные комментарии и аннотации в Ваш PDF-документ, чтобы выделить важную информацию.'" />

               <Instrument :img="'src/assets/images/mobile-card-img2.svg'" :title="'Электронная подпись и сканер'" 
               :subtitle="'Подписывайте любые документы на смартфонах и планшетах — печатать ничего не нужно. Используйте электронную подпись и отправляйте заполненные файлы в формате PDF быстро и без труда.'" />

               <Instrument :img="'src/assets/images/mobile-card-img3.svg'" :title="'Файловый менеджер'"
                :subtitle="'Организуйте свои файлы на своем устройстве. Хранение документов еще никогда не было таким легким и простым.'" />
            </div>
         </div>

         <div class="about">
            <div class="text-content">
               <h2 class="uptitle">Превратите свое мобильное устройство в портативный редактор и инструмент просмотра PDF-файлов</h2>

            <div class="advestring">
            <img src="../assets/images/google-play.png" alt="err">
            <img src="../assets/images/app-store.png" alt="err">
         </div>
            </div>

            <div class="img" :class="{'active': aboutImg}">
               <img src="../assets/images/view-mobile-blog.png" alt="#">
            </div>
         </div>
      </div>

      <div class="optimization">
         <h2 class="uptitle">Оптимизируйте свой рабочий процесс с документами</h2>
         <div class="good-sides">
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>
               <div class="text-content">
                  <h3 class="title">Отправляйте большие файлы</h3>
                  <p>Возникли проблемы с отправкой PDF-файлов по электронной почте? Используйте инструмент «Сжать PDF-файл», чтобы уменьшить размер файла для облегчения обмена без потери качества.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Аннотирование и разметка PDF</h3>
                  <p>Иногда случается, что вам нужно быстро дать отзыв о документе. Нажмите «Изменить», чтобы начать создать комментарии прямо в PDF-файле. Вы можете выделять абзацы и добавлять комментарии или заметки.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Выполняйте электронную подпись документов</h3>
                  <p>Нет принтера под рукой? Без проблем. Чтобы подписать документ, просто используйте инструмент «Подписать PDF-файл». Он позволяет добавлять свою подпись в электронном виде без необходимости распечатки документа.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Оцифруйте свои документы</h3>
                  <p>Чтобы оцифровать свои документы, контракты, отчеты и записи перейдите к инструменту JPG в PDF в своем приложении. Это самый простой и эффективный способ создать цифровой архив ваших личных документов.</p>
               </div>
            </div>
         </div>
      </div>

      <div class="apps">
         <h2 class="title">Ищете другое решение?</h2>

         <div class="app" :class="{'active': appOpener}">
            <div class="ios" @click="$router.push({name: 'mobile'})">
               <img src="../assets/images/ios-mobile.svg" alt="">
               <p>iOS</p>
            </div>

            <div class="androd" @click="$router.push({name: 'mobile'})">
               <img src="../assets/images/android-mobile.svg" alt="">
               <p>Android</p>
            </div>

            <div class="macos" @click="$router.push({name: 'desktop'})">
               <img src="../assets/images/macos-mobile.svg" alt="">
               <p>MacOS</p>
            </div>

            <div class="windows" @click="$router.push({name: 'desktop'})">
               <img src="../assets/images/windows.svg" alt="">
               <p>Windows</p>
            </div>

            <div class="web" @click="$router.push({name: 'home'})">
               <img src="../assets/images/web.svg" alt="">
               <p>Web</p>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         heroimg: false,
         cardOpener: false,
         aboutImg: false,
         appOpener: false,
      }
   },
   methods: {
      checkWindowScroll() {
         window.addEventListener("scroll" , () => {
            let scrollY = window.scrollY
            if(scrollY > 0 ) {
               this.heroimg = true
            }

            if(scrollY > 790) {
               this.cardOpener = true
            } else {
               this.cardOpener = false
            }
            if(scrollY > 1560) {
               this.aboutImg = true
            } else {
               this.aboutImg = false
            }

            if(scrollY > 2900) {
               this.appOpener = true
            } else {
               this.appOpener = false
            }
         })
      }
   },
   mounted(){
      this.checkWindowScroll()
   }
}
</script>

<style>

body {
   overflow-x: hidden;
}

.mobile .content {
   width: 100%;
   background: #f5f5fa;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 80px 0px;
}


.mobile .content .top-content {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 30px;
}

.mobile .content .top-content .title {
   font-weight: 600;
   font-size: 60px;
   color: #33333b;
}

.mobile .content .hero-img img {
   width: 100%;
   max-width: 1100px;
   margin-top: 60px;
   transform: translateY(10%);
   opacity: 0;
   transition: 1s;
}

.mobile .content .hero-img img.active {
   opacity: 1;
   transform: translateY(0%);
}

.mobile .content .text {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 100%;
   max-width: 1000px;
   margin: 50px auto 0px;
   text-align: center;
}

.mobile .content .text .paragraph {
   font-size: 22px;
   line-height: 32px;
   font-weight: 400;
   color: #47474f;
   margin-top: 20px;
}

.mobile h2 {
   font-weight: 600;
   font-size: 42px;
   line-height: 52px;
   color: #33333b;
}

.mobile .container .cards-hero {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-top: 100px;
}
.mobile .container .cards-hero .cards {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 30px;
   margin-top: 50px;
   opacity: 0;
   transition: 1.4s;
}

.mobile .container .cards-hero .cards.active {
   opacity: 1;
}

.mobile .container .about {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 120px 0px;
}

.mobile .container .about .text-content {
   width: 100%;
   max-width: 600px;
}

.mobile .container .about .advestring {
   margin-top: 40px;
}

.mobile .container .about .advestring img {
   width: 150px;
}

.mobile .container .about .img {
   transform: translateX(50%);
   opacity: 0;
   transition: 1s;
}

.mobile .container .about .img.active {
   transform: translateX(0%);
   opacity: 1;
}

.mobile .optimization {
   width: 100%;
   background: #f5f5fa;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 100px 0px;
   margin-bottom: 110px;
}

.mobile .optimization .uptitle {
   width: 100%;
   max-width: 850px;
   text-align: center;
}

.mobile .optimization .good-sides {
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-wrap: wrap;
   gap: 20px;
   margin-top: 50px;
}

.mobile .optimization .good-sides .sides {
   width: 100%;
   display: flex;
   gap: 10px;
   max-width: 550px;
}

.mobile .optimization .good-sides .sides .icon {
   color: mediumspringgreen;
   font-size: 22px;
}

.mobile .optimization .good-sides .sides .text-content .title {
   font-weight: 500;
   font-size: 20px;
   color: #33333b;
   margin-bottom: 20px;
}

.mobile .optimization .good-sides .sides .text-content p {
   font-size: 16px;
   font-weight: 400;
   line-height: 28px;
   color: #707078;
}

.mobile .apps {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
}

.mobile .apps .title {
   text-align: center;
}

.mobile .apps .app {
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   max-width: 70%;
   text-align: center;
   margin-top: 70px;
   margin-bottom: 100px;
   transform: translateY(50%);
   opacity: 0;
   transition: 1.2s;
   flex-wrap: wrap;
}

.mobile .apps .app.active {
   transform: translateY(0%);
   opacity: 1;
}
.mobile .apps .app div {
   width: 100px;
}
.mobile .apps .app div:hover {
   color: #e5322d;
   cursor: pointer;
}

@media (max-width:730px) {
   .mobile .apps .app {
      justify-content: center;
      gap: 30px;
   }
}

@media (max-width:535px) {
   .mobile .apps .app {
      flex-direction: column;
   }
}
</style>