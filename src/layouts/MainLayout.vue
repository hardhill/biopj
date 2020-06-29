<template>
  <div>
    <navbar :name="navbarActive"></navbar>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "main-layout",
  computed: {
    navbarActive() {
      console.log(this.$route.name);
      return this.$route.name;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError);
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
input,
button,
textarea,
select {
  font: inherit;
  outline: none;
}

</style>