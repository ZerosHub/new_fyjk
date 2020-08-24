<template>
  <div class="nav fl">
    <div class="innerNav">
      <ul class="list_1">
        <li v-for="item in navMenu" >
          <a href="javascript:;" class="item item_1" :class="[item.icon,!item.isShow ? 'active' : '']"  @click="clickTab(item)">{{item.navName}}</a>
          <ul class="list_2">
            <li v-for="sub in item.subMenu" v-if="item.isShow">
              <router-link :to="{path:sub.path}" class="item item_2">{{sub.subName}}</router-link>
            </li>
          </ul>
        </li>
        <!--<li>-->
          <!--<a href="javascript:;" class="item item_1 datas">应用趋势</a>-->
          <!--<ul class="list_2">-->
            <!--<li>-->
              <!--<router-link to="/datas" class="item item_2">统计数据</router-link>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="javascript:;"  class="item item_1 students">学生情况</a>-->
          <!--<ul>-->
            <!--<li>-->
              <!--<router-link to="/studentsInfo" class="item item_2">学生详情</router-link>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data(){
      return {
        navMenu:[
          {
            navName: '应用趋势',
            icon:'datas',
            isShow: true,
            subMenu : [
              {
                subName : '统计数据',
                path:'/datas'
              }
            ]
          },
          {
            navName: '学生情况',
            icon:'students',
            isShow: true,
            subMenu : [
              {
                subName : '学生详情',
                path:'/studentsInfo'
              }
            ]
          }
        ]
      }
    },
    mounted(){

    },
    methods:{
      clickTab(item){
        item.isShow = !item.isShow

      }
    }
  }
</script>

<style scoped lang="less">
  .nav{
    width: 294px;
    padding:0 30px;
    box-sizing: border-box;
    .innerNav{
      background: rgba(0,0,0,.05);
      border-radius: 4px;
      min-height: 500px;
      .list_1{
        >li{
          .item{
            display: block;
            height: 54px;
            line-height: 54px;
            color: #fff;
            &.item_1{
              padding:0 42px 0 52px;
              font-size: 16px;
              font-weight: bold;
              position: relative;
              background: url("../../assets/images/img_jt1.png") no-repeat;
              background-size: 14px 8px;
              background-position: right 25px center;
              &:before{
                content:'';
                width: 32px;
                height: 32px;
                position: absolute;
                left: 15px;
                top:50%;
                transform: translateY(-50%);
              }
              &.datas{
                &:before{
                  background: url("../../assets/images/img_nav_yyqs.png") no-repeat;
                  background-size: 23px 23px;
                  background-position: center center;
                }
              }
              &.students{
                &:before{
                  background: url("../../assets/images/img_nav_xsqk.png") no-repeat;
                  background-size: 25px 25px;
                  background-position: center center;
                }
              }
              &.active{
                background: url("../../assets/images/img_jt2.png") no-repeat;
                background-size: 14px 8px;
                background-position: right 25px center;
              }
            }
            &.item_2{
              padding:0 42px 0 65px;
              font-size: 15px;
              &.active{
                background: rgba(47,150,210,.7);
                position: relative;
                &:before{
                  content:'';
                  width: 3px;
                  height: 100%;
                  background: #fff;
                  position: absolute;
                  left: 0;
                  top:0;
                }
                &:after{
                  content:'';
                  width: 11px;
                  height: 17px;
                  background: url("../../assets/images/img_jiao.png") no-repeat;
                  background-size: 100% 100%;
                  position: absolute;
                  left: 0;
                  top:50%;
                  transform: translateY(-50%);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
