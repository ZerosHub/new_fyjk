<template>
  <div class="info" id="vueContent">
    <div class="top">
      <div class="inner">
        <div class="left">
          <div class="title stu_icon">学生详情</div>
        </div>
      </div>
    </div>
    <div class="view">
      <div class="innerView">
        <div class="viewTop clearfix">
          <div class="topL fl">学生列表</div>
          <div class="topR fr">
            <div class="stuInfo fl">
              <el-input v-model="input" placeholder="请输入学生姓名、ID、学籍号"></el-input>
            </div>
            <div class="grade fl">
              <span>班级：</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="date fl">
              <span>日期：</span>
              <el-date-picker
                v-model="startDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
              <span class="line"> - </span>
              <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
        <div class="viewDatas">
          <div class="btn"><a href="" class="btn-export"><i></i>批量导出</a></div>
          <table>
            <thead>
            <tr>
              <td><label><input type="checkbox">全选<i></i></label></td>
              <td>用户ID</td>
              <td>学生姓名</td>
              <td>学籍号</td>
              <td>班级</td>
              <td>就诊次数</td>
              <td>操作</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><label><input type="checkbox"><i></i></label></td>
              <td>0035432</td>
              <td>学生姓名</td>
              <td>学籍号</td>
              <td>班级</td>
              <td>就诊次数</td>
              <td><router-link to="/studentsInfo/detail" class="btn-info">查看详情</router-link></td>
            </tr>
            <tr>
              <td><label><input type="checkbox"><i></i></label></td>
              <td>0035432</td>
              <td>学生姓名</td>
              <td>学籍号</td>
              <td>班级</td>
              <td>就诊次数</td>
              <td><router-link to="/studentsInfo/detail" class="btn-info">查看详情</router-link></td>
            </tr>
            <tr>
              <td><label><input type="checkbox"><i></i></label></td>
              <td>0035432</td>
              <td>学生姓名</td>
              <td>学籍号</td>
              <td>班级</td>
              <td>就诊次数</td>
              <td><router-link to="/studentsInfo/detail" class="btn-info">查看详情</router-link></td>
            </tr>
            </tbody>
          </table>

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
    </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        startDate: '',
        endDate: '',
        value:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        },],
        currentPage1: 5,
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
  .view {
    padding: 22px 52px;
    box-sizing: border-box;

    .innerView {
      max-width: 1140px;
      box-shadow: 0px 0px 5px 0px rgba(171, 171, 171, 0.42);
      background: #fff;
      border-radius: 4px;
      .viewTop {
        /*padding: 15px 22px;*/
        padding:0 22px;
        /*height: 60px;*/
        box-sizing: border-box;
        border-bottom: 1px solid #f1f1f1;

        .topL {
          padding: 0 16px;
          margin: 15px 0;
          position: relative;
          line-height: 30px;
          &:before {
            content: '';
            width: 4px;
            height: 20px;
            background: #06a3e2;
            font-size: 16px;
            color: #333333;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 20px;
          }
        }
        .topR{
          padding: 15px 0;
        }
      }
      .viewDatas{
        padding:20px 34px 30px;
        .btn{
          text-align: right;
          margin-bottom: 22px;
          .btn-export{
            display: inline-block;
            width: 110px;
            height: 34px;
            text-align: center;
            line-height: 34px;
            font-size: 15px;
            color: #464646;
            border: 1px solid #d9d9d9;
            border-radius: 3px;
            i{
              display: inline-block;
              width: 18px;
              height: 14px;
              background: url("../../assets/images/img_dc.png") no-repeat;
              background-size: 18px 14px;
              vertical-align: middle;
              margin-top: -3px;
            }
          }
        }
        table{
          margin-bottom: 30px;
          width: 100%;
          border: 1px solid #06a3e2;
          border-radius: 3px;
          font-size: 14px;
          td{
            text-align: center;
            padding:0 10px;
            height: 42px;
            line-height: 42px;
            label{
              cursor: pointer;
              input{
                display: none;
              }
              i{
                display: inline-block;
                vertical-align: middle;
                width: 16px;
                height: 16px;
                border: 1px solid #b8b8b8;
                border-radius: 2px;
                box-sizing: border-box;

              }

            }
          }
          thead{
            td{
              color: #fff;
              background: #06a3e2;
              font-weight: bold;
              label{
                position: relative;
                padding-left: 20px;
                i{
                  background: #fff;
                  /*margin-top: -4px;*/
                  position: absolute;
                  left: 0;
                  top:50%;
                  transform: translateY(-50%);
                }
                input:checked{
                  + i{
                    background: #fff url("../../assets/images/img_checked1.png") no-repeat;
                    background-position: center center;
                    background-size: 10px 8px;
                  }
                }
              }
            }
          }
          tbody{
            td{
              label{
                input:checked{
                  + i{
                    background: #06a3e2 url("../../assets/images/img_checked.png") no-repeat;
                    background-position: center center;
                    background-size: 10px 8px;
                    border-color: #06a3e2;
                  }
                }
              }
            }
            tr:nth-child(even){
              background: #f6fcfe;
            }
            td + td{
              border-left: 1px solid #d5effb;
            }
            .btn-info{
              color: #177cca;
            }
          }
        }
      }
    }
  }

  .viewTop{
    /deep/ .el-date-editor.el-input{
      width: 140px;
    }
    /deep/ .el-input__inner{
      height: 30px;
      line-height: 30px;
      width: 140px;
    }
    /deep/ .el-input__icon{
      line-height: 30px;
    }
    /deep/ .el-button--primary{
      background-color: #06a3e2;
      border-color: #06a3e2;
    }
    /deep/ .el-button{
      width: 78px;
      height: 30px;
      line-height: 30px;
      padding:0;
    }
    .stuInfo{
      margin-right: 20px;
      /deep/ .el-input__inner{
        width: 220px;
      }
    }
    .grade{
      margin-right: 15px;
    }
    .date{
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 1440px) {
    .view{
      .innerView{
        .viewTop{
          .topL{
            margin-bottom: 0;
          }
          .topR{
            float: left;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1336px) {
    .view{
      .innerView{
        .viewTop{
          .topL{
            margin-bottom: 0;
          }
          .topR{
            float: left;
            /deep/ .el-button{
              margin-top: 10px;
              /*margin-left: calc(50% - 39px);*/
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1258px) {
    .view{
      .innerView{
        .viewTop{
          .topL{
            margin-bottom: 0;
          }
          .topR{
            float: left;
            .date{
              margin-top: 15px;
            }
            /deep/ .el-button{
              margin-top: 0;
            }
          }
        }
      }
    }
  }






</style>
