<!-- Select dataBinding : value속성을 이용하여 key값에 대한 databinding이 가능하다. -->
<!-- v-model='' 사용가능하다. -->
<template>
    <div>
        <select v-model="tele">
            <option value="02">서울</option>
            <option value="031">경기</option>
            <option value="051">부산</option>
        </select>
        <div>선택한 지역 번호 : {{tele}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tele: '02'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
