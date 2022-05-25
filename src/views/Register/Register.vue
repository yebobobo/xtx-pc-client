<template>
  <div class="register">
    <div class="wrapper">
      <div class="xtx-card">
        <h3>新用户注册</h3>
        <form class="xtx-form">
          <div class="xtx-form-item">
            <span class="iconfont icon-jurassic_user"></span>
            <input type="text" placeholder="设置用户名称">
          </div>
          <div class="xtx-form-item">
            <span class="iconfont icon-phone"></span>
            <input type="text" placeholder="输入手机号码">
          </div>
          <div class="xtx-form-item">
            <span class="iconfont icon-xiaoxi"></span>
            <input type="text" placeholder="短信验证码">
            <a href="javascript:;" class="code">发送验证码</a>
          </div>
          <div class="xtx-form-item">
            <span class="iconfont icon-jiesuo"></span>
            <input type="password" placeholder="设置6至20位字母、数字和符号组合">
          </div>
          <div class="xtx-form-item">
            <span class="iconfont icon-jiesuo"></span>
            <input type="password" placeholder="请再次输入上面密码">
          </div>
          <div class="xtx-form-item">
            <div class="agree">
              <label class="xtx-checkbox">
                <input type="checkbox"/>
                <i class="iconfont icon-yixuanze"></i>
                <i class="iconfont icon-weixuanze"></i>
              </label>
              已阅读并同意
              <a href="javascript:;">《用户服务协议》</a>
            </div>
          </div>
          <div class="xtx-form-item">
            <button class="submit" disabled>立即注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyRegister'
}
</script>

<style lang="less" scoped>
  .register {
    padding: 50px 0;
    background-color: #f5f5f5;
    .xtx-card {
      width: 100%;
      min-height: 800px;
      background-color: #fff;
      h3 {
        height: 180px;
        padding-left: 50px;
        font-size: 26px;
        font-weight: 400;
        color: #999;
        line-height: 180px;
      }
      .xtx-form {
        padding-left: 460px;
        .xtx-form-item {
          position: relative;
          padding-bottom: 24px;
          span {
            &.iconfont {
              position: absolute;
              left: 15px;
              top: 13px;
              font-size: 18px;
              color: #999;
            }
          }
          &:nth-child(-n+5) {
            input {
              width: 300px;
              height: 50px;
              border: 1px solid #e4e4e4;
              padding-left: 40px;
            }
          }
          .code {
            position: absolute;
            left: 210px;
            top: 16px;
            font-size: 14px;
            color: #27ba9b;
          }
          .agree {
            display: inline-block;
            width: 300px;
            font-size: 14px;
            text-align: center;
            line-height: 50px;
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
                  display: none;
                  color: #999;
                }
              }
            }
            a {
              font-size: 14px;
              color: #27ba9b;
            }
          }
          .submit {
            width: 300px;
            height: 50px;
            border-radius: 4px;
            font-size: 16px;
            color: #fff;
            border: none;
            &:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
</style>
