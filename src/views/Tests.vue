<template>
  <div>
    <div>Кол-во тестов: {{countMass()}}{{cd_count}}</div>
    <div class="main-test-container">
      <test-block
        v-for="test in cd_test"
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
    
  }),
  components: {
    TestBlock
  },
  computed: {
    cd_count(){
      return this.$store.state.count
    },
    cd_test(){
      return this.$store.state.tests
    }
  },
  methods: {
    countMass(){
     this.$store.commit('countMass')
    }
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