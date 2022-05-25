<template>
  <div class="login-header wrapper">
    <h1></h1>
    <router-link to="/home">
      进入网站首页
      <i class="iconfont icon-angleright"></i>
      <i class="iconfont icon-angleright"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang="less" scoped>
  .login-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    h1 {
      width: 200px;
      height: 100%;
      background: url('@/assets/images/logo.png') no-repeat 50%;
      background-size: contain;
    }
    a {
      display: inline-block;
      margin-top: 50px;
      i {
        color: #17bb9b;
        font-size: 12px;
        letter-spacing: -.5em;
        &:last-child {
          opacity: .5;
        }
      }
    }
  }
</style>
