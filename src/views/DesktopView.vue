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

          <div class="cards">
            <Instrument :img="'src/assets/images/save-time-desktop.svg'" :title="'Сэкономьте свое время'"
             :subtitle="'Откажитесь от печати и сканирования и повысьте эффективность удаленной команды, используя цифровые инструменты, необходимые для быстрой работы с документами.'" />

             <Instrument :img="'src/assets/images/reduce-costs.svg'" :title="'Снижайте свои бизнес-расходы'"
              :subtitle="'Благодаря простому лицензированию и доступным ценам, наконец, появилась возможность пользоваться инструментами повышения эффективности работы с PDF-файлами и электронной подписью для улучшения цифровых рабочих процессов.'" />

              <Instrument :img="'src/assets/images/privacy.svg'" :title="'Обеспечьте максимальную конфиденциальность'"
               :subtitle="'Для обеспечения максимальной конфиденциальности и соответствия вашим бизнес-процессам при обработке файлов на вашем компьютере, воспользуйтесь теми же функциями, которые предоставляет онлайн-сервис.'" />
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
  }
</style>