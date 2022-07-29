<template>
  <div>
    <button :class="`button-${type}`">{{ title }}</button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '主要按钮'
    },
    type: {
      type: String,
      default: () => 'primary',
      validator(val) {
        return ['primary', 'success', 'danger', 'warning'].includes(val)
      }
    }
  },
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style lang="less" scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 18px 44px;
  border-radius: 4px;
  font-size: 18px;
}
.button-primary {
  background-color: skyblue;
}
.button-success {
  background-color: greenyellow;
}
.button-danger {
  background-color: red;
}
.button-warning {
  background-color: yellow;
}
</style>
