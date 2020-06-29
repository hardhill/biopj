<template>
  <nav>
    <div>
      <router-link tag="span" :to="'/theory'" :class="{active: name == 'theory'}">Теория</router-link>
      <router-link
        tag="span"
        :to="'/tests'"
        :class="{active: (name == 'focustest' || name == 'tests')}"
      >Тесты</router-link>
    </div>
    <div class="right-block">
      <span
        style="display: none;"
        tag="span"
        @click="logout"
      >Выход</span>
      <router-link
        tag="span"
        :to="'/login'"
        :class="{active: (name == 'login' || name == 'registry')}"
      >Вход</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["name"],
  computed: {
    classActiveCheck: function() {}
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    } 
  }
};
</script>>

<style lang="scss" scoped>
nav {
  background-color: #7952b3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  min-height: 50px;
  color: #ffffff;
  span:not(:first-child) {
    margin-left: 1.5em;
  }
  span {
    cursor: pointer;
  }
}

.active {
  // text-decoration: underline;
  border-bottom: 1.5px solid white;
  color: #ffffff;
}
</style>