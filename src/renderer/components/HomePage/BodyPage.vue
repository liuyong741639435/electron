<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="联系人" name="first">联系人</el-tab-pane>
    <el-tab-pane label="群聊" name="second">联系人</el-tab-pane>
    <el-tab-pane label="空间" name="third">联系人</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
<style lang="less" scoped>
.cont {
  height: 100%;
  background-color: #BBFFEE;
}
</style>