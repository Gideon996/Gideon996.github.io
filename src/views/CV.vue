<template>
  <b-container class="cv-container">
    <b-row>
      <b-col md="4" sm="12"> <Biography /> </b-col>
      <b-col md="8" sm="12" class="cv-list"> <CVList /></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CVList from "../components/CVList.vue";
import Biography from "../components/Biography.vue";

export default {
  name: "cv",
  title() {
    return `AT - ${this.page_title}`;
  },
  data() {
    return {
      page_title: "CV",
    };
  },
  components: {
    CVList,
    Biography,
  },
};
</script>

<style scoped>
.cv-container {
  margin-top: 1.2em;
}
.cv-list {
  text-align: left;
  margin-bottom: 3em;
}
</style>
