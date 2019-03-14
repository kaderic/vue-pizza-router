<template>
  <div class="index">
    <h1>首页主页</h1>
    <button @click="gotoMenu" class="btn btn-success">回退到上页面</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
 
  methods: {
    gotoMenu:function(){
      this.$router.go(-1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
