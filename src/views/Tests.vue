<template>
  <div class="main-container">
    <div class="main-test-container">
      <div class="test-block" v-for="test in tests" :key="test.h">
        <div>
          <div class="test-block-h">{{test.h}}</div>
          <div class="test-block-des">
            <div class="qq">{{test.questions}} вопросов</div>
          </div>
        </div>
        <div class="test-block-footer">
          <div>Награда: {{test.price}}</div>
          <button class="my-custom-button">начать</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    tests: [
      {
        h: "Биология как наука. Методы научного познания",
        questions: 10,
        price: 250
      },
      { h: "Тест 2", questions: 6 },
      { h: "Тест 3", questions: 8 }
    ]
  })
};
</script>
<style lang="scss" scoped>
.main-test-container {
  display: flex;
  max-width: 1100px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
}
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
    .qq{
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