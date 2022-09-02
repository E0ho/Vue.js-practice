<!-- Input databinding : v-model="key값"-->
<!-- v-model : 양방향 databinding 가능하게 해주는 속성 -->
<!-- v-model.number : 숫자로 v-model databinding이 이루어짐  -->
<template>
    <div>
        <input type="text" v-model="UserId"/>
        <button @click="myFunction();">실시간 값 입력,저장(양방향 통신)</button>
        <button @click="changeData();">정해진 값으로 변경(양방향 통신)</button>
        <br/>
        <input type="text" v-model="num1"/> +
        <input type="text" v-model="num2"/> =
        <span>{{ num1+num2 }}</span>
        <br/>
        <input type="text" v-model.number="num3"/> +
        <input type="text" v-model.number="num4"/> =
        <span>{{ num3+num4 }}</span>
    </div>
</template>
<script>
export default {
  data() {      //구현할 data 모두 return값으로 받기
    return {
      UserId: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {        //구현할 함수 모두 methods {}에 등록하기
    myFunction(){      //함수에 function 생략가능
        console.log(this.UserId)       //object안 정의된 함수에서 그 object안의 ket값을 사용하려면 특정 key값 접근할 때는 this 를 사용해야한다.
    },
    changeData(){
        this.UserId = "LEE"
    }
  }       
}
</script>
