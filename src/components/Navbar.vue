<template>
  <nav>
    <div>
      <router-link tag="span" :to="'/theory'">Теория</router-link>
      <router-link tag="span" :to="'/tests'">Тесты</router-link>
    </div>
    <div class="right-block">
      <!-- <div>250</div> -->
      <router-link class="active" tag="span" :to="'/login'">Вход</router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #7952b3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  min-height: 50px;
  color: #ffffff;
  .right-block {
    display: flex;
    color: #d497ff;
  }
  span:not(:first-child) {
    padding-left: 1.5em;
  }
  span {
    cursor: pointer;
  }
}

.active{
  // text-decoration: underline;
  border-bottom: 1.5px solid white;
  color: #ffffff;
}
</style>