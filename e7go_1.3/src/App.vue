<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/our">Our</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ApolloExample from './components/ApolloExample.vue'

export default {
  name: 'app',
  components: {
    ApolloExample
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
