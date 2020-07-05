<template>
  <nav>
    <div>
      <router-link tag="span" :to="'/'" :class="{active: name == 'theory'}">Теория</router-link>
      <router-link
        tag="span"
        :to="'/tests'"
        :class="{active: (name == 'focustest' || name == 'tests')}"
      >Тесты</router-link>
    </div>
    <div class="right-block">
      <span v-if="on">{{localName}}</span>
      <router-link
        tag="span"
        :to="'/login'"
        :class="{active: (name == 'login' || name == 'registry')}"
        v-else-if="!on"
      >Вход</router-link>
      <span tag="span" class="exit" @click="logout" v-show="on">Выход</span>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["name"],
  data: function() {
    return { onSite: true };
  },
  computed: {
    localName: function() {
      return localStorage.name;
    },
    on: function() {
      console.log(localStorage.name);
      if (localStorage.name == undefined) {
        return (this.onSite = !this.onSite);
      } else {
        return this.onSite;
      }
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  mounted() {}
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
  .exit {
    color: #462c6d;
  }
}

.active {
  // text-decoration: underline;
  border-bottom: 1.5px solid white;
  color: #ffffff;
}
</style>