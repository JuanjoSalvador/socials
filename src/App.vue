<template>
  <div class="container">
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
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
