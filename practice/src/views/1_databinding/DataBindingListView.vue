<template>
    <div>
        <select>
            <option :value="city.num" :key="city.num" v-for="city in list">
                {{city.title}}
            </option>
        </select>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { title: '서울', num: '02' },
        { title: '경기', num: '031' },
        { title: '부산', num: '051' }
      ]

    }
  }
}
</script>
