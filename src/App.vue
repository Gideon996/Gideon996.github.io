<template>
  <div id="app">
    <b-navbar toggleable="md" sticky class="navbar-expand-md">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="navbar-items">
        <b-navbar-nav>
          <b-nav-item class="item" to="home" active>HomePage</b-nav-item>
          <b-nav-item class="item" to="cv">CV</b-nav-item>
          <b-nav-item class="item" to="contatti">Contatti</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <h1>SITO IN COSTRUZIONE</h1>
      <img
        src="https://giffiles.alphacoders.com/141/14109.gif"
        alt="Worm Dance"
      />
    </div>

    <footer class="footer-class">
      <CustomFooter />
    </footer>
  </div>
</template>

<script>
import CustomFooter from "@/components/CustomFooter.vue"
export default {
  name: "App",
  components: {
    CustomFooter,
  },
};
</script>

<style>
:root {
  --black: #222831;
  --dark_grey: #393e46;
  --grey: #eeeeee;
  --teal: #00adb5;
}

html,
body {
  background-color: var(--grey) !important;
  position: relative;
  min-height: 100%;
  min-height: 100vh;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark_grey);
}

@media (min-width: 760px) {
  .main {
    max-width: 80%;
    margin: auto;
  }

  .navbar-items {
    max-width: 80%;
    margin: auto;
  }
}

.main {
  margin-top: 20px;
}

.navbar-expand-md {
  background-color: var(--teal);
  font-size: 20px;
  font-weight: bolder;
}

.item {
  margin-right: 15px;
  margin-left: 15px;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--dark_grey) !important;
}

.navbar-light .navbar-toggler {
  color: var(--dark_grey) !important;
  border-color: var(--dark_grey) !important;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: white !important;
  transform: scale(1.05);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%23daf5f5' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

.navbar-light .navbar-nav .active {
  color: white !important;
  transform: scale(1.15);
}

.conteiner {
  height: auto !important;
}

footer {
  position: absolute;
  clear: both;
  width: 100%;
  bottom: 0;
  background: var(--teal);
  text-align: left;
}
</style>
