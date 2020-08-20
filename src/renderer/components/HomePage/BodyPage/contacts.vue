<template>
  <div class='cont'>
     <div class='nameList' v-for='(item, index) of FriendsList' :key='`no`+index+item.code' @click='openList(item)'>
       <i class="el-icon-arrow-right"></i><span>{{item.nameList}}</span>
       <div class='userList' v-show='item.show'>
        <div class='user' v-for='(userItem, userIndex) of item.list' :key='`no`+index+userIndex+userItem.uname'>
          <img :src="userItem.iocnUrl" alt="">
          <div>
            <span>{{userItem.uname}}</span>
            <p>{{userItem.personalSign}}</p>
          </div>
        </div> 
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      FriendsList: [
        {
          code: 1,
          nameList: '我的好友',
          list: [
            {
              uname: 'XX1',
              iconUrl: require('../../../assets/icon.jpg'),
              personalSign: 'XXXXXXX'
            },
            {
              uname: 'XX2',
              iconUrl: require('../../../assets/icon.jpg'),
              personalSign: 'XXXXXXX'
            }
          ]
        },
        {
          code: 2,
          nameList: '我的好友2',
          list: [
            {
              uname: 'XX1',
              iconUrl: require('../../../assets/icon.jpg'),
              personalSign: 'XXXXXXX'
            },
            {
              uname: 'XX2',
              iconUrl: require('../../../assets/icon.jpg'),
              personalSign: 'XXXXXXX'
            }
          ]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    openList (item) {
      if (item.show === undefined) {
        this.$set(item, 'show', true)
      } else {
        item.show = !item.show
      }
    }
  }
}
</script>
<style lang='less' scoped>
.cont {
  // 
  overflow: auto;
  .nameList {
    &:hover{
      background-color: aliceblue;
    }
  }
}
</style>