const array = [
   {
      title: 'Объединить PDF',
      text: 'Объединяйте PDF файлы и упорядочите их легко и быстро в любом порядке, который вам нравится.',
      src: 'src/assets/images/organization-img1.png',
      route: 'desktop'
   },
   {
      title: 'Разделить PDF',
      text: 'Выбирайте диапазон страниц, одну страницу или преобразовывайте каждую страницу документа в независимый PDF-файл.',
      src: 'src/assets/images/organization-img2.png',
      route: 'login'
   },
   {
      title:'Сжать PDF',
      text: 'Уменьшайте размер вашего PDF файла, и при этом сохраняйте качество. Оптимизируйте ваши PDF файлы.',
      src: 'src/assets/images/optimization-img1.png',
      route: ''
   },
   {
      title: 'PDF в Word',
      text: 'Конвертируйте ваши PDF файлы в легко редактируемые DOC и DOCX документы. Преобразованный WORD документ будет точным почти на 100%.',
      src: 'src/assets/images/convertor-img7.png',
      route: ''
   },
   {
      title: 'PDF в PowerPoint',
      text: 'Конвертируйте ваши PDF файлы в легко редактируемые PPT и PPTX слайд-шоу',
      src: 'src/assets/images/convertor-img8.png',
      route: ''
   },
   {
      title: 'PDF в Excel',
      text: 'Извлекайте данные прямо из PDF-файлов в электронные таблицы EXCEL, всего через несколько секунд.',
      src: 'src/assets/images/convertor-img9.png',
      route: ''
   },
   {
      title: 'Word в PDF',
      text: 'Конвертировать ваши документы в PDF-файл, который будет таким же самым как и оригинальный DOC или DOCX.',
      src: 'src/assets/images/convertor-img2.png',
      route: ''
   },
   {
      title: 'PowerPoint в PDF',
      text: 'Конвертировать ваши презентации в PDF-файл, который будет таким же самым как и оригинальный PPT или PPTX.',
      src: 'src/assets/images/convertor-img3.png',
      route: ''
   },
   {
      title: 'Excel в PDF',
      text: 'Преобразование ваших таблиц с колонками в PDF файл, с учетом ширины PDF. Книжная или альбомная ориентация. Ваш выбор',
      src: 'src/assets/images/convertor-img4.png',
      route: ''
   },
   {
      title: 'Редактировать PDF',
      text: 'Добавить текст, изображения, формы или рукописные аннотации в PDF-документ. Измените размер, шрифт и цвет содержимого',
      src: 'src/assets/images/edit-img4.png',
      route: ''
   },
   {
      title: 'PDF в JPG',
      text: 'Извлекайте все изображения, содержащиеся в PDF или конвертируйте каждую страницу в файл JPG.',
      src: 'src/assets/images/convertor-img6.png',
      route: ''
   },
   {
      title: 'JPG в PDF',
      text: 'Конвертируйте ваши изображения в формат PDF. Регуляция ориентации и полей.',
      src: 'src/assets/images/jpg-pdf-cardimg.png',
      route: ''
   },
   {
      title: 'Подписать PDF',
      text: 'Подписывайте сами или запрашивайте электронные подписи у других.',
      src: 'src/assets/images/protatection-img3.png',
      route: ''
   },
   {
      title: 'Водяной знак',
      text: 'Выберите изображение или текст, которые вы хотите вставить в ваш PDF. Выберите положение, прозрачность и шрифт.',
      src: 'src/assets/images/edit-img3.png',
      route: ''
   },
   {
      title: 'Повернуть PDF',
      text: 'Вращайте ваш PDF, как только хотите. Вращайте несколько PDF файлов одновременно!',
      src: 'src/assets/images/edit-img1.png',
      route: ''
   },
   {
      title: 'HTML в PDF',
      text: 'Преобразуйте веб-страницы в HTML в PDF-файл. Скопируйте и вставьте URL-адрес нужной страницы и конвертируйте его в формат PDF одним щелчком мыши.',
      src: 'src/assets/images/html-pdf-card-img.png',
      route: ''
   },
   {
      title: 'Открыть PDF',
      text: 'Снимите пароль безопасности для свободного использования файла.',
      src: 'src/assets/images/protatection-img1.png',
      route: ''
   },
   {
      title: 'Защита PDF',
      text: 'Защитите PDF файлы паролем. Шифруйте PDF документы для предотвращения несанкционированного доступа. ',
      src: 'src/assets/images/protatection-img2.png',
      route: ''
   },
   {
      title: 'Организовать PDF',
      text: 'Сортируйте страницы вашего PDF-файла, как вам угодно. Удаляйте или добавляйте PDF-страницы в документ по своему усмотрению.',
      src: 'src/assets/images/organization-img5.png',
      route: ''
   },
   {
      title: 'PDF в PDF/A',
      text: 'Преобразуйте ваш PDF-файл в PDF/A, соответствующую стандарту ISO версию PDF для долгосрочного хранения. Формат вашего PDF-файла будет сохранен.',
      src: 'src/assets/images/convertor-img10.png',
      route: ''
   },
   {
      title: 'Восстановить PDF',
      text: 'Восстановите поврежденный PDF файл и восстановите данные из поврежденного PDF файла. Исправляйте PDF файлы с помощью нашего инструмента восстановления.',
      src: 'src/assets/images/vosstanovlenie-pdf-card.png',
      route: ''
   },
   {
      title: 'Номера страниц',
      text: 'Легко добавляйте номера страниц в PDF документы. Выберите положение, размеры, формат и шрифт!',
      src: 'src/assets/images/edit-img2.png',
      route: ''
   },
   {
      title: 'Сканировать в PDF',
      text: 'Создавайте сканы документов с помощью мобильного устройства и сразу же отправляйте их в браузер.',
      src: 'src/assets/images/organization-img6.png',
      route: ''
   },
   {
      title: 'OCR PDF',
      text: 'Без труда превращайте сканированные PDF в документы, в которых можно искать и выделять содержимое.',
      src: 'src/assets/images/optimization-img3.png',
      route: ''
   },
   {
      title: 'Сравнение PDF-файлов',
      text: 'Просматривайте документы параллельно, чтобы выявить различия между их версиями.',
      src: 'src/assets/images/protatection-img4.png',
      route: ''
   },
]

export default array