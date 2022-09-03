<template>
    <div>
        <input type="radio" id="html" value="HTML" v-model="string" />
        <label for="html">HTML</label>

        <input type="radio" id="css" value="CSS" v-model="string" />
        <label for="css">CSS</label>

        <input type="radio" id="js" value="JS" v-model="string" />
        <label for="js">JS</label>

        <div>선택한 언어: {{string}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      string: ''
    }
  }
}
</script>
