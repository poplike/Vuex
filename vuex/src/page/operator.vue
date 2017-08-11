<template>
  <div>
    <p>{{msg}}</p>
    <button @click="fn1">数组</button>
    <button @click="fn2">对象</button>
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'在ES6中用...来表示展开运算符，它可以将数组方法或者对象进行展开。'
    }
  },
  methods: {
    fn1() {
      const arr1 = [1, 2, 3];
      const arr2 = [...arr1, 10, 20, 30];
      console.log(arr2)
    },
    fn2() {
      const obj1 = {
        a: 2
      }
      const obj2 = {
        ...obj1
      }
      console.log(obj2)
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
