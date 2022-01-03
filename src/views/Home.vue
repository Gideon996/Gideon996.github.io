<template>
  <b-container class="home-container">
    <b-row>
      <b-col md="6" sm="12">
        <a href="https://www.instagram.com/usgmen_gif/" target="_blank">
          <img
            class="home-image"
            :src="require('../static/new_year.gif')"
            alt="home gif"
          />
        </a>
      </b-col>
      <b-col md="6" sm="12" class="home-bio"> <SummaryBio /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import SummaryBio from "../components/SummaryBio.vue";
export default {
  name: "Home",
  title() {
    return `AT - ${this.page_title}`;
  },
  data() {
    return {
      page_title: "Home",
    };
  },
  components: {
    SummaryBio,
  },
};
</script>

<style scoped>
.home-image {
  padding: 1em;
}
</style>
