<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->


<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  computed: {
    layout() {
      // console.log(this.$route.meta)
      // return (this.$route.meta.layout || 'empty') + '-layout'
      return "main-layout";
    }
  },
  components: {
    MainLayout
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

* {
  margin: 0;
}


</style>
