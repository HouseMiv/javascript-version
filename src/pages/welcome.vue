

<template>
  <link
    rel="stylesheet"
    href="src/styles/bootstrap.min.css"
    type="text/css"
    media="all"
  >
  <link
    rel="stylesheet"
    href="src/styles/style.css"
    type="text/css"
    media="all"
  >
  
  <section
    id="home"
    class="home d-flex align-items-center"
  >
    <div class="container">
      <!-- intro -->
      <div class="intro">
        <!-- avatar image -->
        <img
          src="src/assets/images/maj.svg"
          alt="Majestic"
          class="mb-4"
        >
        <!-- info -->
        <h1 class="mb-2 mt-0">
          FAQ для Администрации
        </h1>
        <span>Здесь вы можете узнать о
          <span class="text-rotating">
            ключевых вопросах и ответах, правилах и наказаниях: разъяснения,
            амнистии: правила и условия, процедурах выдачи наказаний,
            взаимодействии с игроками, нецензурных и запрещенных терминах,
            разделах семей, полезной информации и советах, командах
            Администратора, инструкции для использования биндера</span></span>
      </div>
      <!-- parallax layers -->
      <div
        class="parallax"
        data-relative-input="true"
      >
        <img
          src="src/assets/images/parallax/p1.png"
          width="27"
          height="29"
          data-depth="0.3"
          class="layer p1"
        >
        <img
          src="src/assets/images/parallax/p2.png"
          width="27"
          height="29"
          data-depth="0.2"
          class="layer p2"
        >
        <img
          src="src/assets/images/parallax/p3.png"
          width="27"
          height="29"
          data-depth="0.3"
          class="layer p3"
        >
        <img
          src="src/assets/images/parallax/p4.png"
          width="27"
          height="29"
          data-depth="0.6"
          class="layer p4"
        >
        <img
          src="src/assets/images/parallax/p5.png"
          width="27"
          height="29"
          data-depth="0.2"
          class="layer p5"
        >
        <img
          src="src/assets/images/parallax/p1.png"
          width="27"
          height="29"
          data-depth="0.5"
          class="layer p6"
        >
        <img
          src="src/assets/images/parallax/p2.png"
          width="27"
          height="29"
          data-depth="0.4"
          class="layer p7"
        >
        <img
          src="src/assets/images/parallax/p3.png"
          width="27"
          height="29"
          data-depth="0.3"
          class="layer p8"
        >
        <img
          src="src/assets/images/parallax/p4.png"
          width="27"
          height="29"
          data-depth="0.3"
          class="layer p9"
        >
        <img
          src="src/assets/images/parallax/p5.png"
          width="27"
          height="29"
          data-depth="0.2"
          class="layer p10"
        >
        <img
          src="src/assets/images/parallax/p1.png"
          width="27"
          height="29"
          data-depth="0.5"
          class="layer p11"
        >
      </div>
    </div>
    <div style="position: fixed; bottom: 20px; width: 100%; text-align: center;">
      <a
        href="discord-auth.vue"
        style="display: inline-block; padding: 15px 30px; border: 2px solid #fff; border-radius: 8px; background-color: #fff; color: #black; cursor: pointer; font-size: 16px; font-weight: bold; text-align: center; text-decoration: none; transition: background-color 0.3s, color 0.3s;"
        onmouseover="this.style.backgroundColor='#141414'; this.style.color='#ffffff';"
        onmouseout="this.style.backgroundColor='#ffffff'; this.style.color='#141414';"
      >
        Авторизация
      </a>
    </div>
  </section>
</template>

