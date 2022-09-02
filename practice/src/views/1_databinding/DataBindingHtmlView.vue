<!-- html databinding : v-html="key값" 사용 -->
<template>
    <div>
        <div>{{ htmlString }}</div>   <!-- html로서 databinding한것이아닌 string값으로 databinding 한 결과 -->
        <div v-html="htmlString"></div> <!-- html로서 databinding -->
    </div>

</template>
<script>
export default {
  data() {
    return {
      htmlString: ' <p style="color:red;"> 빨간색 문자 </p> '
    }
  }
}
</script>
