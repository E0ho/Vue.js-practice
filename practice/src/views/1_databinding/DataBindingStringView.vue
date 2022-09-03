<!-- 문자열 databinding : {{ data에 정의한 key }} -->
<template>
    <div>
        <h1>Name {{ userName }}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'John Doe'
    }
  }
}
</script>

<style scoped>
.text-red{
    color: red;
}
</style>
