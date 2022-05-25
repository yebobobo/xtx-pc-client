<template>
  <div class="login-main">
    <div class="wrapper">
      <div class="box">
        <div class="tab-nav">
          <a href="javascript:;" class="active">账户登录</a>
          <a href="javascript:;">二维码登录</a>
        </div>
        <div class="login-form">
          <div class="link">
            <a href="javascript:;">手机验证码登录</a>
          </div>
          <div class="input">
            <i class="iconfont icon-jurassic_user"></i>
            <input type="text" placeholder="请输入用户名">
          </div>
          <div class="input">
            <i class="iconfont icon-jiesuo"></i>
            <input type="password" placeholder="请输入密码">
          </div>
          <div class="agree">
            <label class="xtx-checkbox">
              <input type="checkbox" />
              <i class="iconfont icon-yixuanze"></i>
              <i class="iconfont icon-weixuanze"></i>
            </label>
            <span>我已同意</span>
            <a href="javascript:;">《隐私条款》</a>
            <span>和</span>
            <a href="javascript:;">《服务条款》</a>
          </div>
          <div class="button">
            <a href="javascript:;" class="btn">登录</a>
            <div class="other">
              <router-link to="/home/forget">忘记密码?</router-link>
              <a href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback">
                <img src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png" alt="">
              </a>
              <router-link to="/home/register">免费注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginMain'
}
</script>

<style lang="less" scoped>
  .login-main {
    height: 488px;
    background-image: url('@/assets/images/login-bg.png');
    .wrapper {
      position: relative;
      .box {
        position: absolute;
        top: 60px;
        right: 100px;
        width: 380px;
        padding: 20px 40px;
        background-color: #fff;
        box-shadow: 0 0 25px 0 rgb(3 3 3 / 14%);
        .tab-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
            display: block;
            font-size: 18px;
            height: 35px;
            line-height: 35px;
            &.active {
              border-bottom: 2px solid #17bb9b;
            }
          }
        }
        .login-form {
          .link {
            text-align: right;
            padding-top: 12px;
            a {
              color: #17bb9b;
              font-size: 14px;
            }
          }
          .input {
            margin-top: 17px;
            position: relative;
            line-height: 34px;
            i {
              position: absolute;
              top: 1px;
              left: 1px;
              width: 34px;
              height: 34px;
              background-color: #cfcdcd;
              color: #fff;
              text-align: center;
              font-size: 20px;
            }
            input {
              width: 100%;
              height: 36px;
              padding: 0 49px;
              border: 1px solid #ccc;
            }
          }
          .agree {
            padding: 17px 0;
            color: #b3b3b3;
            font-size: 14px;
            .xtx-checkbox {
              color: #999;
              cursor: pointer;
              margin-right: 3px;
              margin-bottom: 2px;
              input {
                display: none;
              }
              i {
                vertical-align: middle;
                &.icon-yixuanze {
                  color: #27ba9b;
                }
                &.icon-weixuanze {
                  color: #999;
                  display: none;
                }
              }
            }
            a {
              font-size: 14px;
              color: #0673b1;
            }
          }
          .button {
            .btn {
              display: block;
              height: 40px;
              margin-bottom: 17px;
              background-color: #ccc;
              color: #fff;
              text-align: center;
              line-height: 40px;
            }
            .other {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
