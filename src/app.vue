<template>
  <div>
    <div class="header">
      <h1>Hello Vue App of {{nodeEnv}}</h1>
      <p>
        <router-link to="/">Home</router-link> | 
        <router-link to="/detail">Detail</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/mine">Mine</router-link>
      </p>
    </div>
    <router-view />
  </div>
</template>
<script>
import { add, env, filePath, opt } from './commons/util.js'
export default {
  data() {
    return {
      text: '我来了',
      nodeEnv: '121212'
    }
  },
  mounted() {
    console.log(add(1, 4))
    console.log(env())
    console.log(filePath())
    console.log(opt())
  }
}
</script>
<style lang="stylus" scoped>
  .header
    color: red
    text-align: center
</style>


