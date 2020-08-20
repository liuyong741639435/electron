<template>
  <div class="cont">
    <div class="demo-input-suffix">
      <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="searchInput"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      searchInput: ''
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
.cont {
  height: 100%;
  /deep/.demo-input-suffix{
    height: 100%;
    .el-input{
      height: 100%;
      
      input {
        height: 100%;
        border: none;
        border-radius: 0;
        background-color: #E6A23C;
        font-size: 16px;
        color: #fff;
      }
      span {
        font-size: 16px;
        color: #fff;
        i {
          line-height: 30px;
        }
      }
    }
  }
}
</style>