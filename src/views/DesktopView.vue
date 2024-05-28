<template>
   <section class="desktop">
      <div class="head">
        <div class="download-text">
          <h1 class="title">iLovePDF Desktop</h1>
          <button class="btn"><i class="fa-solid fa-download"></i> Скачать для Windows</button>

          <p>Нажимая кнопку "Скачать", вы соглашаетесь с нашими <router-link to="">Условиями и положениями, а также Политикой конфиденциальности</router-link></p>
        </div>

        <div class="downloads">
          <router-link to="">Windows (64 и 32 бита)</router-link>
          <router-link to="">macOS (Mac App Store)</router-link>
          <router-link to="">macOS (DMG)</router-link>
        </div>

        <div class="img">
          <img src="../assets/images/desktop-head.png" :class="{'active': heroImg}" alt="">
        </div>

        <div class="text">
          <h2>Полный набор инструментов для работы с PDF</h2>
          <p>Загрузите настольное <span>Приложение iLovePDF</span> для работы с вашими любимыми PDF-инструментами на Mac или Windows. Используйте простое в работе приложение для работы с PDF-файлами, которое поможет вам быстро обрабатывать ресурсоемкие задачи в <span>автономном режиме</span>.</p>
        </div>
      </div>
      <div class="container">
        <div class="cards-hero">
          <div class="text">
            <h2>Ваше быстрое, безопасное и доступное решение для работы с PDF-файлами</h2>
          </div>

          <div class="cards" :class="{'active' : cardOpener}">
            <Instrument :img="'src/assets/images/save-time-desktop.svg'" :title="'Сэкономьте свое время'"
             :subtitle="'Откажитесь от печати и сканирования и повысьте эффективность удаленной команды, используя цифровые инструменты, необходимые для быстрой работы с документами.'" />

             <Instrument :img="'src/assets/images/reduce-costs.svg'" :title="'Снижайте свои бизнес-расходы'"
              :subtitle="'Благодаря простому лицензированию и доступным ценам, наконец, появилась возможность пользоваться инструментами повышения эффективности работы с PDF-файлами и электронной подписью для улучшения цифровых рабочих процессов.'" />

              <Instrument :img="'src/assets/images/privacy.svg'" :title="'Обеспечьте максимальную конфиденциальность'"
               :subtitle="'Для обеспечения максимальной конфиденциальности и соответствия вашим бизнес-процессам при обработке файлов на вашем компьютере, воспользуйтесь теми же функциями, которые предоставляет онлайн-сервис.'" />
          </div>
        </div>

        <div class="safety">
          <div class="text">
            <h2>Безопасно обрабатывайте файлы на вашем компьютере и сохраняйте максимальный уровень конфиденциальности</h2>
          <button class="btn" @click='scrollToTop'>Скачать</button>
          </div>

          <div class="img">
            <img src="../assets/images/safety-img-desktop.png" alt="#">
          </div>
        </div>
      </div>

      <!-- containerdan tashqarida -->
      <div class="optimization">
         <h2 class="uptitle">Оптимизируйте свой документооборот</h2>
         <div class="good-sides">
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>
               <div class="text-content">
                  <h3 class="title">Преобразование форматов файла</h3>
                  <p>Преобразовывайте файлы в формат PDF и обратно одним щелчком мыши. Вы можете обрабатывать документы Word, Excel и PowerPoint, а также изображения JPG или PNG.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Бесплатная программа для чтения PDF-файлов</h3>
                  <p>Хотите просматривать PDF-документы без подключения к сети Интернет? Используйте надежное приложение для просмотра PDF-файлов, которое позволяет вам просматривать PDF-документы в любое время.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Групповая обработка документов</h3>
                  <p>Легко и быстро редактируйте несколько документов одновременно. Настольная версия iLovePDF Desktop повышает эффективность работы с PDF-файлами.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Преобразования одним щелчком мыши</h3>
                  <p>Самый быстрый способ конвертиртации и сжатия файлов. Щелкните правой кнопкой мыши на свой PDF-файл, выберите нужный инструмент и обработайте файл, не открывая приложение.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Подтверждение файлов PDF/A для долгосрочного архивирования</h3>
                  <p>Преобразовывайте бизнес-документы в формат PDF/A - стандартизированную ISO версию формата PDF, предназначенную для хранения цифровых документов.</p>
               </div>
            </div>
            <div class="sides">
               <div class="icon">
                  <i class="fa-solid fa-check"></i>
               </div>

               <div class="text-content">
                  <h3 class="title">Защита документов</h3>
                  <p>Храните свои документы в безопасности. Шифруйте и защищайте PDF-файлы паролем для защиты конфиденциальной информации.</p>
               </div>
            </div>
         </div>
      </div>
      
      <!-- containerdan tashqari -->
      <div class="pricing">
          <div class="card">
            <h4 class="title">Настольная версия Инструмент просмотра</h4>
            <hr>

            <p class="subtitle">Наслаждайтесь простой и надежной работой нашего Инструмента для просмотра PDF-файлов</p>
            <h3 class="price">Бесплатно</h3>

            <button class="btn">Оставайтесь свободными</button>

            <div class="opportunities">
              <div class="icons">
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-xmark"></i>
                <i class="fa-solid fa-xmark"></i>
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="text">
                <span>PDF READER</span>
                <p>Все доступные инструменты</p>
                <p>Неограниченная обработка документов</p>
                <p>Работайте в сети Интернет, на мобильных устройствах и компьютерах</p>
              </div>
            </div>
          </div>
      </div>
   </section>
</template>


<script>
export default {
  data() {
    return {
      heroImg: false,
      cardOpener: false,
    }
  },
   methods: {
    checkWindowScroll() {
      window.addEventListener("scroll" , () => {
        let scrollY = window.scrollY
        if(scrollY > 0) {
          this.heroImg = true
        } else {
          this.heroImg = false
        } 
        if(scrollY > 1170) {
          this.cardOpener = true
        } else {
          this.cardOpener = false
        }
      })
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
   },
   mounted(){
    this.checkWindowScroll()
   }
}
</script>

<style>
  .desktop .head {
    width: 100%;
    background-color: #f5f5fa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 110px;
  }
  .desktop .head .download-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .desktop .head .download-text .title {
    font-size: 60px;
    font-weight: 600;
    color: #33333b;
    margin-bottom: 20px;
  }

  .desktop .head .download-text .btn {
    border: 0;
    background: 0;
    outline: 0;
    background: #e5322d;
    padding: 10px 23px;
    border-radius: 8px;
    color: #fff;

  }

  .desktop .head .download-text .btn:hover {
    background: #c82924;
    cursor: pointer;
  }

  .desktop .head .download-text p {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: .3px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 900px;
  }

  .desktop .head .download-text p a {
    color: #e5322d;
    text-decoration: underline;
  }

  .desktop .head .download-text p a:hover {
    color: #33333b;
  }

  .desktop .head .downloads {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .desktop .head .downloads a {
    color: #e5322d;
    text-decoration: underline;
  }

  .desktop .head .img img {
    width: 100%;
    max-width: 1100px;
    transform: translateY(20%);
    transition: 1s;
    opacity: 0;
  }

  .desktop .head .img img.active {
    transform: translateY(0%);
    opacity: 1;
  }

  .desktop .head .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 120px;
  }

  .desktop .head .text h2 {
    font-weight: 600;
    font-size: 42px;
    line-height: 52px;
    color: #33333b;
  }

  .desktop .head .text p {
    line-height: 32px;
    font-size: 22px;
    font-weight: 400;
    color: #47474f;
    text-align: center;
    width: 100%;
    max-width: 1100px;
    margin-top: 16px;
  }

  .desktop .head .text p span {
    font-weight: 6  00;
  }

  .desktop .container .cards-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px; 
  }

  .desktop .container .cards-hero .text h2 {
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 42px;
    color: #33333b;
    text-align: center;
    width: 100%;
    max-width: 1050px;
  }

  .desktop .container .cards-hero .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px; 
    opacity: 0;
    transition: 1s; 
  }

  .desktop .container .cards-hero .cards.active {
    opacity: 1;
  }

  .desktop .container .safety {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0px;
    gap: 15px;
  }


  .desktop .container .safety .text h2 {
    font-weight: 600;
    font-size: 42px;
    line-height: 52px;
    color: #33333b;
    width: 100%;
    max-width: 620px;
    margin-bottom: 30px;
  }

  .desktop .container .safety .text .btn {
    background: #e5322d;
    color: #fff;
    border: 0;
    padding: 10px 23px;
    border-radius: 7px;
    outline: 0;
  }

  .desktop .container .safety .text .btn:hover {
    background: #c82924;
    cursor: pointer;
  }

  .desktop .container .safety .img img {
    width: 100%;
    max-width: 600px;
  }

  
.desktop .optimization {
   width: 100%;
   background: #f5f5fa;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 100px 0px;
   margin-bottom: 110px;
}

.desktop .optimization .uptitle {
   width: 100%;
   max-width: 850px;
   font-weight: 600;
   font-size: 42px;
   color: #33333b;
   text-align: center;
}

.desktop .optimization .good-sides {
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-wrap: wrap;
   gap: 70px;
   margin-top: 50px;
}

.desktop .optimization .good-sides .sides {
  display: flex;
   width: 100%;
   gap: 10px;
   max-width: 550px;
}

.desktop .optimization .good-sides .sides .icon {
   color: mediumspringgreen;
   font-size: 22px;
}

.desktop .optimization .good-sides .sides .text-content .title {
   font-weight: 500;
   font-size: 20px;
   color: #33333b;
   margin-bottom: 20px;
   width: 100%;
   max-width: 460px;
}

.desktop .optimization .good-sides .sides .text-content p {
   font-size: 16px;
   font-weight: 400;
   line-height: 28px;
   color: #707078;
   width: 100%;
   max-width: 470px;
}

.desktop .pricing .card .opportunities {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: column; */
  gap: 20px;
}

.desktop .pricing .card .opportunities .icons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
}

.desktop .pricing .card .opportunities .text {
  display: flex;
  /* align-items: center; */
  flex-direction: column;
}
  @media (max-width:960px) {
    .desktop .container .safety {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
    }
  }
</style>