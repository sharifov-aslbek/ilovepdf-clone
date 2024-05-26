<template>
   <section class="hero-content">
      <div class="functions">
         <div class="content">
            <div class="text-content">
            <h2 class="head-title">
               Наши функции
            </h2>
            <p class="subtitle">
               Не очень разбираетесь в компьютерах? Нет проблем. Даже если вы впервые используете iLovePDF, мы сделали работу с приложением очень простой. Пользовательский интерфейс чрезвычайно прост в использовании, а наши инструменты легко справляться с задачами. Таким образом, вы не должны сталкиваться с какими-то особыми проблемами.
            </p>
         </div>

         <div class="img-content">
            <img src="../assets/images/features-hero-img1.svg" alt="err">
         </div>
         </div>
      </div>
      <div class="container">
         <div class="safety-service">
            <h2 class="title">
               Ваши проблемы являются нашим приоритетом
            </h2>
            <p class="subtitle">
               Когда дело доходит до работы с вашими файлами, наша задача и обязанность - предоставить наилучший сервис
            </p>

            <div class="cards">
               <div class="card">
                  <img src="../assets/images/safe-features-img1.svg" alt="err">
                  <h3 class="card-title">Приоритет файла</h3>
                  <p class="card-subtitle">Мы стремимся предоставить вам файл наименьшего размера, сохраняя при этом максимально высокое качество.</p>
               </div>
               <div class="card">
                  <img src="../assets/images/safe-features-img2.svg" alt="err">
                  <h3 class="card-title">Ваша безопасность - наша забота</h3> 
                  <p class="card-subtitle">
                     В целях избежания краж ваших файлов мы автоматически удаляем все архивы в течение двух часов.
                  </p>
               </div>
            </div>
         </div>

      </div>

      <div class="statics">
         <div class="content">
            <div class="img-content">
               <img src="../assets/images/features-statics-img.svg" alt="">
            </div>

            <div class="text-content">
               <h2 class="title">Используйте свое время с пользой</h2>
               <p class="subtitle">Мы создали целый набор надежных инструментов, которые ускорят ваши процессы документооборота</p>

               <h4 class="uptitle">
                  Мы поможем вам сэкономить ваше драгоценное время
               </h4>

               <p class="paragraph">
                  Вы можете выполнить массовое редактирование ваших файлов вместо того, чтобы мучительно работать с ними по очереди. Ваши файлы будут обработаны максимально быстро при условии, что вы используете высокоскоростное подключение к Интернету.
               </p>

               <h4 class="uptitle">
                  Свобода управления файлами
               </h4>

               <p class="paragraph">
                  Расположите их по алфавиту или в обратном алфавитном порядке. Забыли добавить файлы? Вы можете добавить, удалить или повернуть их после загрузки. Иногда работа с файлами может быть неприятной.
               </p>

               
            </div>
         </div>
      </div>

      <div class="platforms">
         <div class="text-content">
            <h2 class="title">Свобода выбора платформы</h2>
            <p class="subtitle">Следите за своей работой с вашего любимого устройства. Наши инструменты доступны онлайн, а также для мобильных устройств и настольных компьютеров</p>
            <h4 class="uptitle">Выполняйте работу прямо с облака</h4>
            <p class="paragraph">Мы интегрированы с Google Drive и Dropbox. Это позволяет вам загружать файлы прямо из облака и после обработки сохранять их обратно в свои облачные хранилища.</p>
            <h4 class="uptitle">Редактировать на ходу</h4>
            <p class="paragraph">Поскольку работа бизнеса не останавливается, пока вы находитесь в пути, вы можете редактировать и конвертировать свои PDF-файлы на своем смартфоне с помощью <router-link to=""> мобильного 
               приложения iLovePDF Mobile.</router-link> Доступно для iOS и
                Android.</p>
            <h4 class="uptitle">Используйте наши инструменты в Настольной версии</h4>
            <p class="paragraph">Сжимайте, объединяйте, разделяйте, конвертируйте и редактируйте PDF-файлы в автономном режиме для обеспечения максимальной конфиденциальности с помощью <router-link :to="{name: 'desktop'}">iLovePDF Desktop</router-link>. Обрабатывайте файлы прямо на своем компьютере и ускоряйте их редактирование.</p>
         </div>

         <div class="img-content">
            <img src="../assets/images/features-platform-img.svg" alt="err">
         </div>
      </div>
   </section>
</template>

<script>
export default {
   
}
</script>

<style scoped>
      @import url('../assets/styles/features.css');
</style>