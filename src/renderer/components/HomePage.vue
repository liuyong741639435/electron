<template>
  <div>
    <!-- head -->
    <div class="head">
      <homeHead></homeHead>
    </div>
    <!-- search -->
    <div class="search">
      <homeSearch></homeSearch>
    </div>
    <!-- body -->
    <div class="body">
      <homeBody></homeBody>
    </div>
    <!-- bottom -->
    <div class="bottom"></div>
  </div>
</template>
<script>
import homeHead from './HomePage/HeadPage.vue'
import homeSearch from './HomePage/SearchPage.vue'
import homeBody from './HomePage/BodyPage.vue'
export default {
  data () {
    return {}
  },
  components: {
    homeHead,
    homeSearch,
    homeBody
  }
}
</script>
<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: default;
  .head {
    width: 100%;
    height: 110px;
  }
  .search {
    height: 30px; 
  }
  .body {
    width: 100%;
    height: 490px;
  }
  .bottom {
    width: 100%;
    height: 50px;
  }
}
</style>