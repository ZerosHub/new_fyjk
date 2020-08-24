<template>
  <div class="header">
    <div class="headerL fl">
      <div class="logo"><img src="../../assets/images/img_logo1.png" alt=""></div>
      <router-link to="/search" class="btn_search">温州市第十二中学</router-link>
    </div>
    <div class="headerR fr">
      <div class="user">admin</div>
      <a href="" class="btn_exit"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="less">
  .header{
    height: 95px;
    padding:0 20px 0 30px;
    .headerL{
      .logo{
        display: inline-block;
        vertical-align: middle;
        padding:25px 0;
        margin-right: 16px;
        img{
          width: 264px;
          height: 41px;
        }
      }
      .btn_search{
        display: inline-block;
        padding:0 14px 0 28px;
        height: 30px;
        line-height: 30px;
        background: rgba(0,0,0,.2) url("../../assets/images/img_dw.png") no-repeat;
        background-size: 13px 15px;
        background-position: 12px center;
        color: #fff;
        font-size: 13px;
        border-radius: 20px;
      }
    }
    .headerR{
      /*line-height: 94px;*/
      .user{
        padding:38px 0;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        color: #fff;
        padding-left: 25px;
        background: url("../../assets/images/img_yh.png") no-repeat;
        background-size: 19px 22px;
        background-position: 0 center;
        margin-right: 12px;
      }
      .btn_exit{
        display: inline-block;
        vertical-align: middle;
        width: 21px;
        height: 21px;
        background: url("../../assets/images/img_tc.png") no-repeat;
        background-size: 21px 21px;
        margin-left: 16px;
        position: relative;
        &:before{
          content: '';
          width: 1px;
          height: 21px;
          background: rgba(255,255,255,.3);
          position: absolute;
          left: -16px;
          top:50%;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
