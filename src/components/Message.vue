<template>
  <div>{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Yahoo"
    }
  }
};
</script>

<style scoped>
div {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>