<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // 本地集成mock
    this.axios.get('/login').then((res)=>{
      this.res = res;
    });
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
