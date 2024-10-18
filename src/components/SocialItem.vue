<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h2 class="title">{{ website }}</h2>
        <p>{{ description }}</p>
        <a class="button is-fullwidth is-primary" :href="url + username" target="_blank">
          Encuentrame en {{ website }}
        </a>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialItem',
  props: {
    website: String,
    url: String,
    username: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  text-align: left;
}

a {
  color: whitesmoke;
  font-weight: bold;
}
</style>
