<template>
  <div class="home">
    <span class="text">asdfghj</span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.text {
  font-size: px2rem(20);
}
</style>
