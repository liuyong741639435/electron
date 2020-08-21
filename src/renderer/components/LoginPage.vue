<template>
    <div class="content">
        <h1>XX应用</h1>
        <div>
            <span>账号：</span>
            <input type="text" v-model="uname">
        </div>
        <div>
            <span>密码：</span>
            <input type="text" v-model="upwd">
        </div>
        <div class="btn">
            <button @click="login">登录</button>
            <button >注册</button>
        </div>
    </div>
</template>
<script>
import {ipcRenderer} from 'electron'
export default {
  data () {
    return {
      uname: 'root',
      upwd: '123456'
    }
  },
  methods: {
    login () {
      //  账号密码认证
      //  页面大小调整以及路由跳转
      this.toHome()
      // this.win = new this.$electron.remote.BrowserWindow({width: 900, height: 600})
      // console.log(this.win)
      // this.win.on('close', function () {
      //   console.log('close eve')
      //   this.win = null
      // })
      // this.win.loadURL(window.location.href)
    },
    toHome () {
      //  登录成功之后的调整
      ipcRenderer.send('changWindowSize', 'ping')
      // 路由跳转
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less" scoped>
.content {
    width: 100%;
    height:100%;
    border:1px solid #eee;
    background-color: #fff;
    h1,div {
        text-align: center;
    }
    div.btn{
        margin-top:10px;
    }
}
</style>


