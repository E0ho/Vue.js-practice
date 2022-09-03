<template>
    <div>
      <select @change="changeCity()" v-model="selectedCity">
        <option value="">도시 선택</option>
        <option :value="city.num" :key="city.num" v-for="city in cityList">
            {{city.title}}
        </option>
      </select>

      <select>
        <option :value="dong.num" :key=i v-for="(dong, i) in selectedDongList">{{dong.title}}</option>
      </select>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [
        {
          title: '서울',
          num: '02'
        },
        {
          title: '경기',
          num: '031'
        },
        {
          title: '부산',
          num: '051'
        }
      ],
      selectedCity: '',
      dongList: [
        { title: '서울 1동', num: '02' },
        { title: '서울 2동', num: '02' },
        { title: '서울 3동', num: '02' },
        { title: '경기 1동', num: '031' },
        { title: '경기 2동', num: '031' },
        { title: '부산 1동', num: '051' },
        { title: '부산 2동', num: '051' }
      ],
      selectedDongList: []

    }
  },
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.num === this.selectedCity
      )
    }
  }
}
</script>
