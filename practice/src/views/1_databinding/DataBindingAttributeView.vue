<template>
    <div>
        <div>
            <input type="text" v-model="txt1" />
            <button v-bind:disabled=" txt1 === '' ">조회</button>
            <br/>
            <input type="text" v-model="txt2" />
            <button :disabled=" txt2 === '' ">조회</button>
        </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      txt1: '',
      txt2: ''
    }
  }
}
</script>
