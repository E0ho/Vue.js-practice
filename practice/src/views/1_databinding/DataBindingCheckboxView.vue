<!-- checkbox databinding : value값을 갖고 배열에 넣어준다.-->
<!-- checkbox의 경우 여러개를 고를수 있어 data저장값을 배열로 선언한다. -->
<template>
    <div>
        <input type="checkbox" id="html" value="HTML" v-model="array" /> <!-- label태그의 적용할 id값 필요 -->
        <label for="html">HTML</label>

        <input type="checkbox" id="css" value="CSS" v-model="array" />
        <label for="css">CSS</label>

        <input type="checkbox" id="js" value="JS"  v-model="array"/>
        <label for="js">JS</label>
        <div>선택한 언어: {{array}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      array: []
    }
  }
}
</script>
