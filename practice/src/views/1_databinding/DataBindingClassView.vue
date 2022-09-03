<template>
    <div>
      <div :class="{ a:error, b:login }">class databinding</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      error: 'false',
      login: 'true'
    }
  }
}
</script>
<style scoped>
    .a{
        background-color: red;
    }
    .b{
        background-color: blue;
    }
  </style>
