<script>
export default {
  mounted() {
    this.loadScript("src/js/jquery-1.12.3.min.js")
    this.loadScript("src/js/parallax.min.js")
    this.loadScript("src/js/custom.js")
    this.loadScript("src/js/button.js")
  },
  methods: {
    loadScript(src) {
      const script = document.createElement('script')

      script.src = src
      script.async = true
      document.head.appendChild(script)
    },
  },
}
</script>

<template>
  <div>
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
    <link
      rel="stylesheet"
      href="css/animate.css"
      type="text/css"
      media="all"
    >
    <link
      rel="stylesheet"
      href="css/info.css"
      type="text/css"
      media="all"
    >
    
    <link
      rel="stylesheet"
      href="css/all.min.css"
      type="text/css"
      media="all"
    >
    
    <link
      rel="stylesheet"
      href="css/magnific-popup.css"
      type="text/css"
      media="all"
    >

    <link
      rel="stylesheet"
      href="css/slick.css"
      type="text/css"
      media="all"
    >

    <link
      rel="stylesheet"
      href="css/simple-line-icons.css"
      type="text/css"
      media="all"
    >
    

    
    <section
      id="home"
      class="home d-flex align-items-center"
    >
      <div class="container">
        <div style="position: relative; z-index: 1;">
          <!-- Added z-index to the container -->
          <!-- intro -->
          <div class="intro">
            <img
              src="src/assets/images/maj.svg"
              alt="Majestic"
              class="mb-4"
            >
          </div>

          <div style="position: relative; z-index: 2; bottom: 20px; width: 100%; text-align: center;">
            <a
              href="discord-auth.vue"
              class="auth-button"
              style="display: inline-block; padding: 15px 30px; border-radius: 8px; background-color: #fff; color: #000; cursor: pointer; font-size: 16px; font-weight: bold; text-align: center; text-decoration: none; transition: background-color 0.3s, color 0.3s;"
              onmouseover="this.style.backgroundColor='#ff004a'; this.style.color='#fff';"
              onmouseout="this.style.backgroundColor='#fff'; this.style.color='#141414';"
            >
              Авторизация
            </a>
          </div>
          <!-- parallax layers -->
        </div>

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
    </section>
  </div>
</template>

