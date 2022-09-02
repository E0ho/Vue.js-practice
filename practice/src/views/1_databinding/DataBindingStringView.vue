<!-- dataBinding : 서버, 사용자로 부터 받아오는 data들을 결합  -->
<!-- 문자열 databinding : {{ data에 정의한 key }} -->
<template>
    <!-- vue의 경우 최상위 레벨에 태그가 container역활을 해야한다. -->
    <div>
        <h1>Name {{ userName }}</h1>
        <p>본문</p>
    </div>
</template>

<script>
export default {
  /* vue에 경우 함수, html 태그에서 사용하려는 data는 모두 data라는 함수의
    return 되는 object안에 작성되었어야한다. 이곳에 선언된 data만 사용이 가능하다. */
  /* vue에서는 함수생성 때 function 사용하지 않아도 된다. */
  data() {
    return {
      userName: 'John Doe',
      message: 'hello',
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped>      /* 이 component에만 적용될 css는 scoped 속성을 사용하여 따로 작성할 수 있다. */
.text-red{          /* 그 외 공통으로 사용되는 css는 assets 폴더에 css파일을 생성하여 작성한다. */
    color: red;
}
</style>
