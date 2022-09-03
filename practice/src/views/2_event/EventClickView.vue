<template>
    <div>
      <button @click="increase" >increase 1</button>
      <button @click="decrease" >decrease 1</button>
      <p>{{counter}}</p>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increase() {
      this.counter += 1
    },
    decrease() {
      this.counter -= 1
    }
  }
}
</script>
