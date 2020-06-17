<template>
  <div class="focus-test">
    <div class="side-bar">
      <div class="contents">
        Вопросы
      </div>
    </div>
    <div class="main-block">
      <div class="heading">Название теста</div>
      <div class="test">
        <question-block></question-block>
      </div>
    </div>
    
  </div>
</template>

<script>
import QuestionBlock from "@/components/QuestionBlock";
export default {
  computed: {
    cd_test() {
      return this.$store.state.tests;
    }
  },
  components: {
    QuestionBlock
  }
};
</script>

<style lang="scss" scoped>
.focus-test{
  display: flex;
}
.main-block{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .heading{
    font-size: 1.4rem;
    margin: 1em;
  }
}
.test{
  border: 1px solid grey;
  margin: 0 auto;
  display: flex;
  padding: 1em;
  max-width: min-content;
  // height: 1000px;
}
.side-bar{
  min-height: calc(100vh - 50px);
  // position: relative;
  // height: 100;
  background-color: indianred;
  width: 250px;
  .contents{
    position: sticky;
    top: 1em;
    margin: 1em;
  }
}
</style>
