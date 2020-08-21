<template>
  <div class='topContent'>
     <div class='uname'>喵喵</div>
     <div class='icon'>
       <i class='el-icon-arrow-down'></i>
       <i class='el-icon-minus'></i>
       <i class='el-icon-rank'></i>
       <i class='el-icon-close'></i>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.topContent {
  width: 100%;
  height: 40px;
  color: #fff;
  background: #996666;
  position: relative;
  .uname {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .icon {
    position: absolute;
    right: 5px;
    i {
      line-height: 40px;
    }
  }
}
</style>