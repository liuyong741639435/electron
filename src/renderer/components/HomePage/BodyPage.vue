<template>
  <el-tabs class='cont' v-model="activeName">
    <el-tab-pane label="联系人" name="first">
      <contacts></contacts>
    </el-tab-pane>
    <el-tab-pane label="群聊" name="second">
      <information></information>
    </el-tab-pane>
    <el-tab-pane label="空间" name="third">空间</el-tab-pane>
  </el-tabs>
</template>
<script>
import contacts from './BodyPage/contacts.vue'
import information from './BodyPage/information.vue'
export default {
  components: { contacts, information },
  props: {},
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>
<style lang="less" scoped>
.cont{
  height: 100%;
  background-color: #BBFFEE;
  /deep/.el-tabs__header{
    margin: 0;
    .el-tabs__nav {
      width: 100%;
      height: 40px;
      .el-tabs__item {
        text-align: center;
        width: 33%;
        height: 100%;
      }
    }
  }
}
</style>