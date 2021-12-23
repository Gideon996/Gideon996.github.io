<template>
  <div class="progetto">
    <h3 class="titolo">
      <a :href="progetto.html_url" target="_blank"> {{ progetto.name }} </a>
    </h3>
    <p class="altro">Linguaggio: {{ progetto.language }}</p>
    <a :href=getDownloadUrl(progetto.html_url) target="_blank">
      Download
    </a>
  </div>
</template>

<style></style>

<script>
export default {
  name: "Progetto",
  props: ["progetto"],
  methods: {
    getDownloadUrl(project_url) {
      let second_part = "/archive/refs/heads/main.zip";
      return project_url + second_part;
    },
  },
};
</script>
