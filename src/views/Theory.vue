<template>
  <div>
    <div class="section">
      <div class="button" @click="open">
        <div>Первый раздел</div>
        <div>SVG</div>
      </div>
      <div class="b-toggle ul">
        <div>Молекула</div>
        <div>Клетка</div>
        <div>Ткань</div>
        <div>Орган</div>
        <div>Организм</div>
        <div>Популяция</div>
        <div>Биоциноз</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    open: () => {
      const button = document.querySelector("button");

      let ul = document.querySelector(".ul");
      if (ul.classList.contains("expanded")) {
        ul.classList.remove("expanded");
      } else {
        ul.classList.add("expanded");
      }
      
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  border: 2px solid rgb(99, 0, 192);
  max-width: 500px;
  margin: 2em auto; //  Поправить цвет
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 20px; // Поменять радиус как у тест блоков ?

  padding: 1em 0.8em;
  display: flex;
  // align-items: center;
  flex-direction: column;
  max-width: 750px;

  color: rgba(0, 12, 177, 0.61);
  .button {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  .ul{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 1em;
    div{
      margin: 0.2em;
    }
  }
}

.b-toggle {
  // Поменять название классов
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.7s, max-height 1s;
  // transition: display 1s;
  // visibility: hidden;
  // _display: none;
}
.expanded {
  max-height: 500px;
  opacity: 1;
  // visibility: visible;
  // _display: block;
}
</style>