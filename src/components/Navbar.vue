<template>
  <nav>
    <div>
      <router-link tag="span" :to="'/theory'">Теория</router-link>
      <router-link tag="span" :to="'/tests'">Тесты</router-link>
    </div>
    <div>
      <router-link tag="span" :to="'/login'">Вход</router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  min-height: 50px;

  span:not(:first-child) {
    padding-left: 1.5em;
  }
  span {
    cursor: pointer;
  }
}
</style>