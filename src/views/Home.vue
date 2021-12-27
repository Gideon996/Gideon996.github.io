<template>
  <b-container class="home-container">
    <b-row>
      <b-col md="4" sm="12">
        <img
          class="home-image"
          src="https://i.pinimg.com/originals/ab/7d/a3/ab7da3269b3b8430b4ba8430039ad4ca.gif"
          alt="christmass tree gif"
        />
      </b-col>
      <b-col md="8" sm="12" class="home-bio"> <SummaryBio /></b-col>
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
.home-image{
  padding: 1em;
}
</style>