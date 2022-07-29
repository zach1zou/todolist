<template>
  <header class="header">
    <h1 :style="{ color: $store.state.setting.changeColor }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="appendListFn"
      v-model="todomainValue"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapStateList } = createNamespacedHelpers('user')

export default {
  props: {
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      todomainValue: '',
      TodoHeaderlist: []
    }
  },
  methods: {
    appendListFn() {
      this.TodoHeaderlist = this.List
      console.log(this.List)
      this.TodoHeaderlist.unshift({
        name: this.todomainValue,
        done: false,
        id: this.List.length + 1
      })

      this.$store.commit('user/SetList', this.TodoHeaderlist)
    }
  },
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {
    ...mapStateList(['List'])
  },
  watch: {}
}
</script>
<style lang="less" scoped></style>
