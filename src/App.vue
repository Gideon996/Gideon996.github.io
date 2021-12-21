<template>
  <div id="app">
    <!-- main menu -->
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
    <!-- website content -->
    <div class="content">
      <p> CIAO </p>
    </div>

    <!-- footer -->
    <footer>
      <p>INFO</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>
:root{
  --black: #222831;
  --dark_grey: #393E46;
  --grey: #EEEEEE;
  --teal: #00ADB5;
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
@media (min-width: 769px) {
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
  margin-top: 1.2em;
}

.navbar-expand-md {
  background-color: #1abab5;
  font-size: 1.2em;
  font-weight: bolder;
}
.item {
  margin-right: 1em;
  margin-left: 1em;
}
.navbar-light .navbar-nav .nav-link {
  color: #daf5f5 !important;
}
.navbar-light .navbar-toggler {
  color: #daf5f5 !important;
  border-color: #daf5f5 !important;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: white !important;
  transform: scale(1.05);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%23daf5f5' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

.navbar-light .navbar-nav .active{
  color: white !important;
  transform: scale(1.15);
}


.content {
  height: auto !important;
}

footer{
  position: absolute;
  clear: both;
  width: 100%;
  bottom: 0;
  background: var(--teal);
}

</style>
