<template>
  <div class="headCont">
    <!-- 头部图标 -->
    <div class="top">
      <i class="el-icon-platform-eleme"></i>
      <i class="el-icon-water-cup"></i>
      <i class="el-icon-watermelon"></i>
      <i class="el-icon-s-tools"></i>
      <i class="el-icon-minus"></i>
      <i class="el-icon-close"></i>
    </div>
    <div class='body'>
      <div class='icon'><img :src="iconUrl" alt=""></div>
      <div class='personal'>
        <span class='name'>lion</span>
        <span class='lv'>LV77</span>
        <!-- <span class='{vip:1}'></span> -->
        <p class='personalSign'>XXXXXXXXXX</p>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      iconUrl: require('../../assets/icon.jpg')
    }
  }
}
</script>
<style lang="less" scpoed>
.headCont {
  width: 100%; 
  height: 100%; // 110px
  background: #409EFF;
  .top{   
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: flex-end;
    line-height: 34px;
    font-size:24px;
    i{
      //  修改父元素组件的字体大小
      float: left;
      padding: 2px 3px;
      &:hover{
        background-color: #eee;
      }
    }
  }
  .body{
    display: flex;
    .icon{
      width: 76px;
      height: 76px;
      img {
        width: 70%;
        height: 70%;
        border-radius: 50%;
      }
    }
  }
}
</style>