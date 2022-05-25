<template>
  <div class="header-container wrapper">
    <router-link to="/"><h1></h1></router-link>
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="#">美食</router-link>
      <router-link to="#">餐厨</router-link>
      <router-link to="#">电器</router-link>
      <router-link to="#">居家</router-link>
      <router-link to="#">洗护</router-link>
      <router-link to="#">孕婴</router-link>
      <router-link to="#">服装</router-link>
      <router-link to="#">杂货</router-link>
    </div>
    <div class="search-car">
      <div class="search">
        <input type="text" placeholder="搜一搜">
        <span></span>
      </div>
      <div class="car">
        <span>2</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader'
}
</script>

<style lang="less" scoped>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    h1 {
      width: 200px;
      height: 130px;
      background: url('@/assets/images/logo.png') no-repeat 50%;
      background-size: contain;
    }
    .nav {
      a {
        margin: 0 20px;
        padding-bottom: 7px;
        &:hover {
          color: #27ba9b;
          border-bottom: 2px solid #27ba9b;
        }
      }
    }
    .search-car {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search {
        position: relative;
        width: 172px;
        height: 30px;
        border-bottom: 2px solid #e7e7e7;
        input {
          width: 172px;
          height: 28px;
          padding-left: 30px;
          outline: none;
        }
        span {
          position: absolute;
          left: 2px;
          top: 0;
          width: 18px;
          height: 18px;
          background: url('../assets/images/sprites.png') -79px -69px;
        }
      }
      .car {
        position: relative;
        width: 23px;
        height: 23px;
        margin: 0 15px;
        background: url('@/assets/images/sprites.png') -119px -69px;
        span {
          position: absolute;
          top: -7px;
          right: -12px;
          width: 20px;
          height: 15px;
          border-radius: 8px;
          background-color: #e26237;
          color: #fff;
          font-size: 13px;
          text-align: center;
          line-height: 15px;
        }
      }
    }
  }
</style>
