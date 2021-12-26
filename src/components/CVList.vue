<template>
  <ul>
    <li class="cv-list" v-for="element in cv_list" v-bind:key="element.id">
      <div class="element">
        <p class="element-title">{{ element.titolo }}</p>
        <p class="element-details"> {{ element.luogo }} - {{ element.data }} </p>
        <p class="element-tdescription">{{ element.descrizione }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import json from "../json/cv.json";

export default {
  data() {
    return {
      cv_list: json,
    };
  },
  components: {},
};
</script>

<style scoped>
.cv-list{
    width: 80%;
    padding: 0.5em;
}
.element-title{
    font-size: 1.3em;
    color: blue;
    border-bottom: 2px solid black;
}

.element-details{
    margin: auto;
    margin-top: -0.5em;
    font-size: 0.8em;
}
</style>