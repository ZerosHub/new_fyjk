<template>
    <div id="vueBody">
      <Header></Header>

      <div class="content clearfix">
        <Nav></Nav>

        <Content></Content>
      </div>
    </div>
</template>

<script>
  import Header from "@/components/common/Header"
  import Nav from "@/components/common/Nav"
  import Content from "@/components/common/Content"

  export default {
    name: 'Home',
    components:{Header,Nav,Content}
  }
</script>

<style scoped lang="less">
  #vueBody{
    background: url("../assets/images/img_page_bg.jpg") no-repeat;
    background-size: cover;
    background-position: center 0;
  }
  .content{
    height: calc(100% - 95px);
  }
</style>
