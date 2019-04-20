<template>
  <div class="home">
    <div>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
    <AAA></AAA>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AAA from '../components/ApolloExample'
// import ApollExample from '@/components/ApollExample.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    AAA
    
  }
}
</script>
