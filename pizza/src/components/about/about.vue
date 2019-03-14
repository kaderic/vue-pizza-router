<template>
  <div class="row mb-5 about">
    <div class="col-4">
      <ul class="list-group mb-5">
          <li><router-link to="/about/news" class="list-group-item list-group-item-action"> 新闻动态</router-link></li> <br>
          <li><router-link to="/about/contact" class="list-group-item list-group-item-action"> 联系方式 </router-link></li> <br>
          <li><router-link to="/about/history" class="list-group-item list-group-item-action">历史纪录</router-link></li> <br>
          <li><router-link to="/about/delivery" class="list-group-item list-group-item-action">快递信息</router-link></li> <br>
      </ul>
    </div>
    <div class="col-8">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about ul{list-style:none}

</style>
