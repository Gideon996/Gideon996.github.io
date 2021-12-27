<template>
  <div class="summary">
    <h1 class="summary-title">Chi Sono</h1>
    <div class="summary-description">
      <p>
        Mi chiamo Adriano Tumino e sono uno studente magistrale di Ingegneria
        Informatica presso l'
        <a href="https://www.units.it/" target="_blank">
          Università degli Studi di Trieste
        </a>
        . Al momento sto completando i miei studi.
      </p>

      <p>Il sito nasce principalmente per poter imparare ad usare VueJS.</p>
    </div>
  </div>
</template>

<style scoped>
.summary {
  padding: 1em;
  width: 80%;
  justify-content: center;
}
.summary-title {
  font-size: 3em;
  color: teal;
}

.summary-description {
  font-size: 1.5em;
  text-align: left;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}
</style>
