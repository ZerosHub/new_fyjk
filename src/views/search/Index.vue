<template>
    <div class="vueBody">
      <div class="wrap">
        <div class="top clearfix">
          <div class="topL fl">
            <div class="logo"><a href="/home"><img src="../../assets/images/img_search_logo.png" alt=""></a><span class="text">选择学校</span></div>
          </div>
          <div class="topR fr">
            <div class="search fl">
              <div class="inputWrap fl">
                <i></i>
                <input type="text" placeholder="搜索关键字">
              </div>
              <div class="btn fr"><a href="" class="btn-search">搜索</a></div>
            </div>
            <div class="back fr"><a class="btn-back" href="">返回></a></div>
          </div>
        </div>
        <div class="content">
          <div class="searchBar">
            <div class="inner">
              <div class="left">拼音检索</div>
              <div class="right">
                <ul class="clearfix">
                  <li><a href="javascript:;" class="active">全部</a></li>
                  <li><a href="javascript:;" >A</a></li>
                  <li><a href="javascript:;" >B</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div class="result">
            <div class="total">共 <span>8</span> 所学校</div>
            <ul>
              <li><a href="">温州第二高级中学（温州二高）</a></li>
              <li><a href="">温州第二高级中学（温州二高）</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Index',
  }
</script>

<style scoped lang="less">
  #vueBody{
    background: #fff;
  }

  .wrap{
    max-width: 1100px;
    min-width: 1024px;
    margin: 0 auto;
    padding:48px 0;
    .top{
      .topL{
        padding:8px 0;
        .logo{
          a{
            display: inline-block;
            border-right: 1px solid #c9c9c9;
          }
          img{
            width: 223px;
            height: 31px;
            vertical-align: middle;
            margin-right: 15px;
            position: relative;
          }
          .text{
            vertical-align: middle;
            font-size: 15px;
            color: #424243;
            margin-left: 15px;
          }
        }
      }
      .topR{
        .search{
          width: 618px;
          /*height: 46px;*/
          border: 1px solid #dddddd;
          border-radius: 6px;
          box-sizing: border-box;
          /*padding:7px 0;*/
          .inputWrap{
            width: calc(100% - 116px);
            position: relative;
            i{
              vertical-align: middle;
              display: inline-block;
              width: 42px;
              height: 46px;
              background: url("../../assets/images/img_search.png") no-repeat;
              background-size: 19px 18px;
              background-position: right center;
              /*position: absolute;*/

            }
            input{
              vertical-align: middle;
              width: calc(100% - 48px);
              height: 46px;
              padding:0 25px 0 5px ;
              box-sizing: border-box;
              font-size: 14px;
              &::placeholder{
                color: #bbbdc2;
              }
            }
          }
          .btn{
            padding: 7px 12px;
            .btn-search{
              display: block;
              width: 92px;
              height: 32px;
              background: #06a3e2;
              border-radius: 3px;
              font-size: 14px;
              color: #fff;
              text-align: center;
              line-height: 32px;
            }
          }
        }
        .back{
          margin-left: 30px;
          padding:13px 0;
          .btn-back{
            font-size: 14px;
            color: #167ec0;
          }
        }
      }
    }
    .searchBar{
      /*padding:0 25px 0 0;*/
      padding:45px 0 25px;
      border-bottom: 1px dashed #eeeeee;
      .inner{
        /*padding:45px 0 25px;*/
        /*border-bottom: 1px dashed #eeeeee;*/
        position: relative;
        .left{
          font-size: 15px;
          color: #1b1b1b;
          position: absolute;
          left: 0;
          top:50%;
          transform: translateY(-50%);
        }
        .right{
          padding-left: 5em;
          font-size: 14px;
          li{
            float: left;
            padding:0 6px;
            a{
              color: #167ec0;
              display: block;
              padding:2px 7px;
              &.active{
                background: #009bd7;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .result{
      padding:25px 0;
      font-size: 15px;
      .total{
        margin-bottom: 20px;
        span{
          color: #06a3e2;
        }
      }
      ul{
        li{
          padding:7px 0;
          a{
            color: #003d99;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
