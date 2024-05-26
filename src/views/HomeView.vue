

<template>
  <section class="hero">
    <div class="pattern-bg">

    </div>
    <div class="container">
      <h1 class="title">
        Онлайн - инструменты для любителей PDF
      </h1>

      <p class="subtitle">
        Полностью бесплатные онлайн-инструменты для объединения, разделения, сжатия PDF-файлов, преобразования документов Office в PDF-файлы, преобразования PDF-файлов в JPG и JPG в PDF. Без необходимости установки.
      </p>
      <div class="cards">
        <Card v-for="content in card" :key="content.title" :article="content" />
      </div>

      <div class="solution">
        <h2 class="title">Ищете другое решение?</h2>
        <div class="categorys">
          <div class="category">
            <h4 class="title">iLovePDF Desktop</h4>
            <p>Загрузите приложение <router-link :to="{name: 'desktop'}">iLovePDF Desktop</router-link> и работайте с привычными PDF-инструментами на компьютерах с Mac и Windows. Это удобное приложение для работы с PDF-файлами поможет вам быстро обрабатывать многостраничные документы в автономном режиме.</p>
          </div>
          <div class="category">
            <h4 class="title">iLovePDF Mobile</h4>
            <p>Используйте мобильное приложение <router-link to="">iLovePDF</router-link> для удаленного управления документами или на ходу. Превратите свое устройство Android или iPhone в редактор и сканер PDF-файлов, чтобы с легкостью комментировать, подписывать и обмениваться документами.</p>
          </div>
          <div class="category">
            <h4 class="title">iLoveIMG</h4>
            <p><a href="https://www.iloveimg.com/">iLoveIMG</a> это веб-приложение, которое позволяет вам выполнять групповое редактирование изображений совершенно бесплатно. Вы получаете возможность обрезать, изменить размер, сжимать, преобразовывать любые свои изображения. Все инструменты, необходимые для редактирования ваших изображений прямо под рукой.</p>
          </div>
        </div>
      </div>

      <div class="users">
       <div class="text">
        <h2 class="title">
          Программное обеспечение для работы с PDF-файлами, которому доверяют миллионы пользователей
        </h2>

        <p class="subtitle">iLovePDF — лучшее веб-приложение для быстрого и удобного редактирования PDF-файлов. Здесь собраны все инструменты, необходимые для эффективной работы с цифровыми документами, без риска для безопасности данных.</p>
       </div>

        <div class="images">
          <img src="../assets/images/users-img1.svg" alt="">
          <img src="../assets/images/users-img2.svg" alt="">
          <img src="../assets/images/users-img3.svg" alt="">
        </div>
      </div>

    </div>
    <div class="premium">
      <div class="content">
        <div class="text-content">
        <h2 class="title">
        Получите больше возможностей с планом Premium
      </h2>

      <p class="subtitle">
        Выполняйте работу еще быстрее с помощью функции пакетной обработки файлов, конвертируйте отсканированные документы с помощью оптического сканирования (OCR) и подписывайте соглашения в электронной форме.
      </p>

      <button class="btn" @click="$router.push({name: 'register'})">
        Премиум-аккаунт
      </button>
      </div>

      <div class="img-content">
        <img src="../assets/images/premium-img.png" alt="">
      </div>
      </div>
    </div>
  </section>
</template>



<script>
import Card from '../arrays/Card.js'
export default {
  data() {
    return {
      card: Card,
    }
  },  
}
</script>


<style scoped>
.hero {
  margin-top: 20px;
}

.hero .pattern-bg {
  height: 100vh;
width: 100vw;
position: fixed;
background: url('../assets/images/background.svg');
background-position: center center;
background-size: 100% auto;
z-index: -1;
}
.hero .container .title {
  font-weight: 600;
  color: #33333b;
  text-align: center;
  font-size: 42px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
.hero .container .subtitle {
  font-size: 22px;
  color: #47474f;
  line-height: 32px;
  font-weight: 400;
  width: 100%;
  max-width: 980px;
  text-align: center;
  margin: 15px auto;
}
.hero .container .cards {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-start;
  margin-top: 50px;
}

.hero .container .solution {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 80px;
}

.hero .container .solution .categorys {
  display: flex;
  margin-top: 50px;
  gap: 45px;
}

.hero .container .solution .categorys .category {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
}

.hero .container .solution .categorys .category .title {
  font-size: 28px;
  color: #33333b;
  margin-bottom: 12px;
  text-align: start;
} 

.hero .container .solution .categorys .category p {
  color: #707078;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
}

.hero .container .solution .categorys .category p a {
  color: #e5322d;
  font-weight: 600;
  text-decoration: underline;
}

.hero .container .users {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero .container .users .text .title {
  font-size: 42px;
  font-weight: 600;
  color: #33333b;
}


.hero .container .users .text .subtitle {
  line-height: 32px;
  font-size: 22px;
  font-weight: 400;
  color: #47474f;
  width: 100%;
  max-width: 83%;
  margin-bottom: 50px;
}

.hero .container .users .images {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
  margin-bottom: 80px;
}

.hero .container .users .images img {
  width: 70px;
  height: 30px;
}

.hero .premium {
  background: #47474f;
  margin-bottom: 60px;
}

.hero .premium .content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 86%;
  padding: 65px 15px 85px;
  margin: 0 auto;
}

.hero .premium .content .text-content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
}

.hero .premium .content .text-content .title {
  color: #f5f5fa;
  font-size: 40px;
  line-height: 52px;
  font-weight: 600;
  width: 100%;
  max-width: 680px;
  text-align: start;
}

.hero .premium .content .text-content .subtitle {
  width: 100%;
  max-width: 720px;
  line-height: 32px;
  font-size: 22px;
  color: #f5f5fa;
  margin-top: 20px;
  margin-bottom: 40px;
}

.hero .premium .content .text-content .btn {
  outline: none;
  border: none;
  background: #ffc233;
  color: #33333b;
  padding: 9px 25px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
}

.hero .premium .content .text-content .btn:hover {
  background: #dc9b05;
  cursor: pointer;
}
</style>