<template>
  <div class="info" id="vueContent">
    <div class="top">
      <div class="inner clearfix">
        <div class="left fl">
          <div class="title stu_icon">张小明生病就诊情况</div>
        </div>
        <div class="right fr">
          <a class="btn-back" @click="$router.go(-1)" href="javascript:;">返回列表<i></i></a>
        </div>
      </div>
    </div>
    <div class="view">
      <div class="viewInner">
        <ul class="clearfix">
          <li>
            <div class="item">
              <div class="itemInfo">
                <div class="year">2020年</div>
                <div class="detail clearfix">
                  <div class="left fl"><img src="../../assets/images/img_icon_gm.png" alt=""></div>
                  <div class="right fl">
                    <div class="text clearfix">
                      <div class="type fl">发烧</div>
                      <div class="date fr">8/19</div>
                    </div>
                    <div class="hospital">温州医科大学附属第一医院</div>
                  </div>
                </div>
              </div>
              <div class="btn"><a href="" class="btn-detail">详情</a></div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="itemInfo">
                <div class="year">2020年</div>
                <div class="detail clearfix">
                  <div class="left fl"><img src="../../assets/images/img_icon_gm.png" alt=""></div>
                  <div class="right fl">
                    <div class="text clearfix">
                      <div class="type fl">发烧</div>
                      <div class="date fr">8/19</div>
                    </div>
                    <div class="hospital">温州医科大学附属第一医院</div>
                  </div>
                </div>
              </div>
              <div class="btn"><a href="" class="btn-detail">详情</a></div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="itemInfo">
                <div class="year">2020年</div>
                <div class="detail clearfix">
                  <div class="left fl"><img src="../../assets/images/img_icon_gm.png" alt=""></div>
                  <div class="right fl">
                    <div class="text clearfix">
                      <div class="type fl">发烧</div>
                      <div class="date fr">8/19</div>
                    </div>
                    <div class="hospital">温州医科大学附属第一医院</div>
                  </div>
                </div>
              </div>
              <div class="btn"><a href="" class="btn-detail">详情</a></div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="itemInfo">
                <div class="year">2020年</div>
                <div class="detail clearfix">
                  <div class="left fl"><img src="../../assets/images/img_icon_gm.png" alt=""></div>
                  <div class="right fl">
                    <div class="text clearfix">
                      <div class="type fl">发烧</div>
                      <div class="date fr">8/19</div>
                    </div>
                    <div class="hospital">温州医科大学附属第一医院</div>
                  </div>
                </div>
              </div>
              <div class="btn"><a href="" class="btn-detail">详情</a></div>
            </div>
          </li>
        </ul>

        <!--页码-->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :total="400"
            layout="total, prev, pager, next, jumper ">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
        currentPage1: 6,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

  }
</script>

<style scoped lang="less">
  .top{
    .right{
      padding:10px 0;
      .btn-back{
        font-size: 13px;
        color: #1581c2;
        display: block;
        width: 92px;
        height: 28px;
        border: 1px solid #94c5e3;
        border-radius: 40px;
        text-align: center;
        line-height: 28px;
        i{
          display: inline-block;
          width: 6px;
          height: 11px;
          background: url("../../assets/images/img_jty.png") no-repeat;
          background-size: 100% 100%;
          vertical-align: middle;
          margin-left: 5px;
          margin-top: -3px;
        }
      }
    }
  }
  .view{
    padding:20px 38px;
    box-sizing: border-box;
    .viewInner{
      max-width: 1224px;
    }
    ul{
      li{
        float: left;
        padding:26px 22px;
        .item{
          width: 364px;
          background: #fff;
          box-shadow: 0px 0px 5px 0px rgba(171, 171, 171, 0.42);
          border-radius: 4px;
          .itemInfo{
            height: 130px;
            border-bottom: 1px solid #f1f1f1;
            padding:12px 12px 12px 26px;
            box-sizing: border-box;
            .year{
              font-size: 14px;
              color: #878787;
              text-align: right;
            }
            .detail{
              .left{
                width: 64px;
                height: 64px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .right{
                width: calc(100% - 64px);
                box-sizing: border-box;
                padding:5px 0 5px 14px;
                .text{
                  margin-bottom: 8px;
                  .type{
                    font-size: 16px;
                    color: #262626;
                    font-weight: bold;
                  }
                  .date{
                    font-size: 20px;
                    color: #4e6067;
                  }
                }

              }
            }
          }
          .btn{
            padding:14px 0;
            text-align: center;
            .btn-detail{
              display: inline-block;
              width: 86px;
              height: 28px;
              background: #06a3e2;
              border-radius: 3px;
              text-align: center;
              line-height: 28px;
              color: #fff;
            }
          }
        }
      }
    }
    .block{
      padding:0 22px;
    }

  }

  /deep/ .el-pagination button, .el-pagination span:not([class*=suffix]){
    min-width: 30px;
  }

  /deep/ .el-pager li{
    padding:0;
    margin: 0 4px;
    border-radius: 3px;
    min-width: 30px;
  }

  /deep/ .el-pagination button{
    padding: 0;
    margin: 0 4px;
    border-radius: 3px;
  }

  @media screen and (max-width: 1593px) {
    .view{
      .viewInner{
        max-width: 816px;
      }
    }
  }
</style>
