<template>
  <div id="vueBody">
    <div class="wrap">
      <div class="loginWrap">
        <div class="login">
          <div class="logo"><img src="../assets/images/img_logo.png" alt=""></div>
          <div class="inner">
            <div class="inputWrap">
              <div class="right">
                <div class="title">用户登录</div>
                <div class="login_wrap">
                  <div class="input">
                    <div class="box userName">
                      <input type="text" placeholder="请输入用户名">
                    </div>
                    <p class="tip" style="visibility: hidden">用户名格式不正确</p>
                  </div>
                  <div class="input">
                    <div class="box pwd">
                      <input type="text" placeholder="请输入用户名">
                    </div>
                    <p class="tip">账号或密码不正确</p>
                  </div>
                  <router-link to="/home" class="btn_login">登录</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
    height: 100%;
    display: table;
  }
  .loginWrap{
    display: table-cell;
    vertical-align: middle;
    .login{
      width: 1007px;
      height: 543px;
      margin: 0 auto;
      background: url("../assets/images/img_login_bg.png") no-repeat;
      position: relative;
      .logo{
        position: absolute;
        top:-15px;
        left: 50%;
        transform: translateX(-50%);
        img{
          width: 299px;
          height: 60px;
        }
      }
      .inner{
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 10px 59px 0px rgba(4, 0, 0, 0.3);
        width: 915px;
        height: 441px;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .inputWrap{
          height: 100%;
          padding-left: 500px;
          background: #f5f5f5 url("../assets/images/img_login_dl.jpg") no-repeat;
          background-size: 500px 100%;
          .right{
            .title{
              font-size: 23px;
              color: #06a3e2;
              font-weight: 500;
              padding: 40px 0 25px;
              text-align: center;
              font-family: syht;
            }
            .login_wrap{
              width: 315px;
              margin: 0 auto;
              .input{
                .box{
                  border: 1px solid #cccccc;
                  background: #fff;
                  position: relative;
                  &:before{
                    content:'';
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top:0px;
                    left: 0px;
                  }
                  &:after{
                    content:'';
                    width: 1px;
                    height: 20px;
                    background: #cdcccc;
                    position: absolute;
                    top:50%;
                    left: 50px;
                    transform: translateY(-50%);
                  }
                  input{
                    padding-left: 60px;
                    width: 100%;
                    height: 50px;
                    box-sizing: border-box;
                  }
                  &.userName{
                    &:before{
                      background: url("../assets/images/img_login_yhm.png") no-repeat;
                      background-size: 32px 32px;
                      background-position: center center;
                    }
                  }
                  &.pwd{
                    &:before{
                      background: url("../assets/images/img_login_mm.png") no-repeat;
                      background-size: 32px 32px;
                      background-position: center center;
                    }
                  }


                }
                .tip{
                  height: 32px;
                  line-height: 32px;
                  font-size: 12px;
                  color: #ff0707;
                  position: relative;
                  padding-left: 17px;
                  &:before{
                    content:'';
                    width: 14px;
                    height: 14px;
                    background: url("../assets/images/img_tip.png") no-repeat;
                    background-size: 14px 14px;
                    position: absolute;
                    left: 0;
                    top:50%;
                    transform: translateY(-50%);
                  }
                }
              }
              .btn_login{
                display: block;
                width: 100%;
                height: 50px;
                border-radius: 3px;
                background: #06a3e2;
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                text-align: center;
                line-height: 50px;
                margin: 45px 0;
              }
            }
          }

        }
      }
    }

  }
</style>
