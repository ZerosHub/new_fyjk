<template>
    <div class="viewWrap fl">
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'content'
  }
</script>

<style scoped lang="less">
  .viewWrap{
    height: 100%;
    width: calc(100% - 294px);
    box-sizing: border-box;
  }
</style>
