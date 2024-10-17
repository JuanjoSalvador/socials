<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h2 class="title">{{ website }}</h2>
        <p>{{ description }}</p>
        <button class="button is-fullwidth is-primary" href="{{ url }}">
          Encuentrame en {{ website }}
        </button>
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

button {
  color: whitesmoke;
  font-weight: bold;
}
</style>
