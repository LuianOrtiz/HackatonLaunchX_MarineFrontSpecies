<template>
  <div id="app">
    <PageHeader proyecto="Marine Well"/>
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/species">Animales</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    -->
    <router-view/>
    <PageFooter 
      equipo="Leones Monarcas"
      desc="Que tal LaunchX, esperamos que les guste nuestra propuesta! A continuación pueden encontrar nuestros perfiles de GitHub."
      
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #CBF3F0;
}
/*
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
