<template>
  <div class="hello">
    <h2 class="title">{{ website }}</h2>
    <p>{{ description }}</p>
    <p><a href="{{ url }}">{{ username }}</a></p>
    <br/>
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

</style>
