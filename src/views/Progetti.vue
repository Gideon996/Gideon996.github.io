<template>
  <div class="home">
    <ul class="projects_list">
      <li class="project" v-for="progetto in progetti" v-bind:key="progetto.id">
        <a class="project_link" :href="progetto.html_url" target="_blank">
          {{ progetto.name }}
        </a>
        <p class="project_description">{{ progetto.description }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "progetti",
  title() {
    return `AT - ${this.page_title}`;
  },
  components: {},
  data() {
    return {
      page_title: "Progetti",
      progetti: [],
    };
  },
  methods: {
    getJsonFromUrl(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => (this.progetti = data));
    },
    getDownloadUrl(project_url) {
      let second_part = "/archive/refs/heads/main.zip";
      return project_url + second_part;
    },
    dataParser(project_date) {
      let component = project_date.split("T");
      let date = component[0];
      component = date.split("-");
      let new_date =
        "" + component[2] + "/" + component[1] + "/" + component[0];
      return new_date;
    },
  },
  beforeMount() {
    this.getJsonFromUrl("https://api.github.com/users/adriano-tumino/repos");
  },
};
</script>

<style>
.home {
  clear: both;
  margin: auto;
  justify-content: center;
  padding: 1em 0 0 0;
}

.projects_list {
  list-style-type: none;
  text-align: center;
}

.project {
  text-align: center;
  transition: transform 0.2s;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}

a.project_link {
  margin-top: 1.5em;
  color: teal;
  font-size: 2em;
}

.project_description {
  margin: auto;
  text-align: center;
  width: 60%;
  color: rgb(61, 61, 61);
  font-size: 1.2;
}
</style>
