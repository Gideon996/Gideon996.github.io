<template>
  <div class="biography-container">
    <b-avatar
      class="avatar"
      :src="require('../static/cv_image.jpg')"
      size="20em"
      rounded
    ></b-avatar>
    <p class="name">Adriano Tumino</p>
    <p class="data-nascita">Data di nascita: 27/05/1996</p>
    <a href="mailto:adrianotumino@gmail.com" class="mail">Mail: adrianotumino@gmail.com</a>
    <ConcactsIcon />
  </div>
</template>

<script>
import ConcactsIcon from '../components/ConctactsIcon.vue'
export default {
  components: {
      ConcactsIcon,
  },
};
</script>

<style scoped>
.avatar {
  background-color: teal;
  padding: 3px;
}

.name {
  margin-top: 0.1em;
  font-size: 3em;
  color: teal;
}
.data-nascita {
  font-size: 1.2em;
  color: var(--dark_grey);
}

.mail{
    font-size: 1.2em;
}
</style>
