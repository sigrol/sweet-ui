<template>
  <header class="page-header">
    <div class="header-container">
      <router-link :to="{name: 'index'}">
        <span style="font-size: 20px;padding-left: 100px">SWEET-UI</span>
        <img src="../assets/images/logo.jpg" width="80px">
      </router-link>
      <div class="header-container-github" @click="openGithub" style="font-size: 20px;padding-right: 100px">
        <img style="width:48px;" src="../assets/images/github.jpg"/>github
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      openGithub(){
        window.open("https://github.com/sigrol/sweet-ui/tree/master","blank")
      }
    }
  }
</script>

<style type="text/less" lang="less">
  .page-header {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 0;
    background-color: #fff;
    box-shadow: 0 10px 30px 0 rgba(96, 96, 97, 0.07);
    opacity: 0.98;
    left: 0;
    height: 80px;
    transition: all .3s;
    .header-container{
      width: 96%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
      overflow: hidden;
      &-github{
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
</style>