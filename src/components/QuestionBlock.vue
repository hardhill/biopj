<template>
  <div class="question-answer-block">
    <div class="question-block">Какой-то вопрос</div>
    <div class="answer-block">
      <div class="answer">
        <input class="checkbox" type="radio" name="1234" />
        <div class="text">Какой-то ответ</div>
      </div>
      <div class="answer">
        <input class="checkbox" type="radio" name="1234" />
        <div class="text">Какой-то ответ</div>
      </div>
      <div class="answer">
        <input class="checkbox" type="radio" name="1234" />
        <div class="text">Какой-то ответ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.question-answer-block {
  width: 900px;
  height: 300px;
  background-color: grey;
  border-radius: 10px;
  .answer {
    display: flex;
    padding: 1em;
    align-items: center;
    .checkbox{
        
    }
    .text{
        margin-left: 1em;
    }
  }
}
</style>
