<template>
  <div>
    <div>Кол-во тестов: {{count}}</div>
    <div class="main-test-container">
      <test-block
        v-for="test in tests"
        :key="test.h"
        :h="test.h"
        :questions="test.questions"
        :price="test.price"
      ></test-block>
    </div>
  </div>
</template>
<script>
import TestBlock from "@/components/TestBlock";
export default {
  
  data: () => ({
    tests: [
      {
        h: "Биология как наука. Лучше ее не изучать",
        questions: 10,
        price: 250
      },
      { h: "Тест 2", questions: 6 },
      { h: "Тест 3", questions: 8 }
    ]
  }),
  components: {
    TestBlock
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.main-test-container {
  display: flex;
  max-width: 1100px;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
}
</style>