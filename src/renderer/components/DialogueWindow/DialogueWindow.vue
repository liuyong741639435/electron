<template>
  <div class="cont">
    <!--  页面顶部 -->
    <div class='top'>
      <topComp></topComp>
    </div>
    <div class='body'>
      <div class='left'>
        <leftComp></leftComp>
      </div>
      <div class='right'>
        <rightComp>></rightComp>
      </div>
    </div>
  </div>
</template>
<script>
import topComp from './top.vue'
import leftComp from './left.vue'
import rightComp from './right.vue'
export default {
  components: {
    topComp, leftComp, rightComp
  },
  data () {
    return {
      uid: ''
    }
  },
  mounted () {
    this.uid = this.$route.params.uid
  }
}
</script>
<style lang="less" scoped>
.cont{
  width: 610px;
  height: 610px;
  .top{
    width: 100%;
    height: 40px;
  }
  .body{
    width: 100%;
    height: 450px;
    z-index: 1;
    display: flex;
    .left {
      width: 460px;
      height: 100%;
      background: #fff;
    }
    .right {
      width: 150px;
      height:  100%;
      background: #eee;
    }
  }
}
</style>