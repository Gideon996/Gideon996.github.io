<template>
  <ul class="icons-list">
    <li class="li-icon" v-for="icon in icons" v-bind:key="icon.id">
      <a target="_blank" :href="icon.link">
        <div class="icon-element">
          <v-icon :name="icon.icon" class="icon" />
          <p class="icon-text">{{ icon.name }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterIcon",
  data() {
    return {
      icons: [
        {
          id: 1,
          name: "Mail",
          icon: "envelope",
          link: "mailto:adrianotumino@gmail.com",
          alt: "Send mail Icon",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "brands/instagram",
          link: "https://www.instagram.com/adrianotumino/",
          alt: "Instagram Icon",
        },
        {
          id: 3,
          name: "Linkedin",
          icon: "brands/linkedin",
          link: "https://www.linkedin.com/in/adriano-tumino-97ba51197",
          alt: "Linkedin Icon",
        },
        {
          id: 4,
          name: "GitHub",
          icon: "brands/github",
          link: "https://github.com/adriano-tumino",
          alt: "Github Icon",
        },
      ],
    };
  },
};
</script>

<style>
/*Aggiungere MEDIA control*/

@media (max-width: 760px) {
  .icons-list {
    float: none !important;
    margin: auto;
    display: block !important;
    padding: 1em 0 0 0;
  }

  .li-icon {
    display: block;
    transition: transform 0.2s;
  }
}

.icons-list {
  list-style-type: none;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1em 0 0 0;
}

.li-icon {
  display: inline-block;
  text-align: center;
  transition: transform 0.2s;
}

.fa-icon {
  color: white;
  width: auto;
  height: 1.3em;
  max-width: 100%;
  max-height: 100%;
  margin-right: 2em;
  margin-left: 2em;
  text-decoration: none;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}

.icon-text {
  color: white;
}

.icon-element:hover {
  transform: scale(1.3);
  color: grey;
}
</style>
