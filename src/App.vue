<template>
  <Navbar></Navbar>
  <router-view/>
  <Copyrightfooter/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Copyrightfooter from "./components/Copyrightfooter.vue"
export default {
  components:{Navbar, Copyrightfooter},
  setup(){}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
