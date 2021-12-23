<template>
  <div class="home">
    <!-- Lista contenente nome (link) + Descrizione-->
    <div v-for="progetto in progetti" :key="progetto.id">
      <Progetto :progetto="progetto" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Progetto from "@/components/Progetto.vue";

export default {
  name: "progetti",
  title() {
    return `AT - ${this.page_title}`;
  },
  components: {
    Progetto,
  },
  data() {
    return {
      page_title: "Progetti",
      progetti: [],
    };
  },
  methods: {
      getJsonFromUrl(url){
          fetch(url)
          .then(response => response.json())
          .then(data => (this.progetti = data))
      }
  },
  beforeMount(){
    this.getJsonFromUrl("https://api.github.com/users/adriano-tumino/repos")
 }
};
</script>
