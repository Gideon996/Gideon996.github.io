<template>
  <b-container class="footer_container">
    <b-row>
      <b-col md="8" sm="12" class="icon-column"> <FooterIcon /> </b-col>
      <b-col md="4" sm="12" class="author-column"> Adriano Tumino <br/>&copy; 2021</b-col>
    </b-row>
  </b-container>
</template>

<script>
import FooterIcon from "@/components/FooterIcon.vue";

export default {
  name: "CustomFooter",
  components: {
    FooterIcon,
  },
};
</script>

<style>
@media (max-width: 760px) {
  .author-column{
    text-align: center !important;
    justify-content: center;
    display: flex;
  }
}

.author-column{
  padding: 1em 0 0 0;
  text-align: right;
  color: whitesmoke;
  font-size: 15px;
}
</style>
