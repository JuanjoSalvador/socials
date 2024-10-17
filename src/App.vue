<template>
  <div class="container">
    <h1 class="title is-1">
      Mis redes sociales...
    </h1>
    <h2 class="subtitle is-2">...y otras formas de localizarme en Internet</h2>
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <SocialItem 
          website="Mastodon" 
          url="#" 
          username="@jsalvador" 
          description="¿Te apuntas al fediverso? Contenido principalmente tech, pero también personal.">
        </SocialItem>

        <SocialItem 
          website="Bluesky" 
          url="#" 
          username="@jsalvador.me" 
          description="Únete a la revolución de AT Protocol. Diario, reflexiones y alguna chorrada que se me ocurre.">
        </SocialItem>
        
        <SocialItem 
          website="Instagram" 
          url="#" 
          username="@OperatorIron" 
          description="A veces subo fotos cuando me voy de viaje.">
        </SocialItem>
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </div>
</template>

<script>
import SocialItem from './components/SocialItem.vue'

export default {
  name: 'App',
  components: {
    SocialItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
