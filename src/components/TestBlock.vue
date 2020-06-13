<template>
  <div class="test-block">
    <div>
      <div class="test-block-h">{{h}}</div>
      <div class="test-block-des">
        <div class="qq">{{questions}} вопросов</div>
      </div>
    </div>
    <div class="test-block-footer">
      <div>Награда: {{price}}</div>
      <router-link tag="button" to="/focustest" class="my-custom-button">начать</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["h", "price","questions"]
};
</script>

<style lang="scss" scoped>
.test-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;
  padding: 0.7em;
  width: 300px;
  // height: 160px;
  background-color: rgb(236, 236, 236);
  border-radius: 5px;
  &-h {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    font-size: 1.3rem;
    height: 50px;
  }
  &-des {
    display: flex;
    justify-content: flex-start;
    height: 100px;
    .qq {
      margin-left: 1em;
      margin-top: 0.5em;
    }
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
  }
}
@mixin button-reset {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

.my-custom-button {
  @include button-reset;
  border-radius: 5px;
  padding: 3px;
  background-color: rgba(126, 16, 216, 0.685);
}
</style>
