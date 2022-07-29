<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="(item, index) in List" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="deleteFn(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
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
    return {}
  },
  methods: {
    deleteFn(index) {
      this.List.splice(index, 1)
      localStorage.setItem('list', JSON.stringify(this.List))
    }
  },
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {
    ...mapState(['List'])
  },
  watch: {}
}
</script>
<style lang="less" scoped></style>
