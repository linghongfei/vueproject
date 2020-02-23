<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      age:30,
      data:'1'
    }
  },
  mounted(){
    let url = "/search/hotwords";
    jsonp(url,(err,res)=>{
      let result = res;
      this.data = result;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
