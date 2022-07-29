<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <!-- 自己封装组件 -->
    <buttonVue></buttonVue>
    <buttonVue type="success" title="成功按钮"></buttonVue>
    <buttonVue type="danger" title="危险按钮"></buttonVue>
  </div>
</template>

<script>
import buttonVue from './components/buttonVue.vue'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue'
// shift + alt + 下
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    buttonVue
  },

  created() {
    this.changeColor()
  },

  methods: {
    changeColor() {
      const getRandomColor = function () {
        return (
          'rgb(' +
          Math.round(Math.random() * 255) +
          ',' +
          Math.round(Math.random() * 255) +
          ',' +
          Math.round(Math.random() * 10) +
          ')'
        )
      }

      this.$store.commit('setting/changeColorFn', getRandomColor())
    }
  }
}
</script>

<style scoped></style>
