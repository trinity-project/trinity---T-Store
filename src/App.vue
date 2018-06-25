<template>
  <div id="app">
    <head-nav :title="title"/>
    <index :title="title"/>
  </div>
</template>

<script>
import headNav from './components/headNav'
import index from './components/index'

export default {
  name: 'App',
  data () {
    return {
      title: 'T Store',
      version:"0.2.2"
    }
  },
  mounted:function(){
    this.$nextTick(function(){
      this.LogVersion();
    })
  },
  components: {
    headNav,
    index
  },
  methods:{
    LogVersion:function(){
      console.log("Version: " + this.version);
    }
  }
}
</script>

<style>
body{
  height: 100vh;
  width: 100%;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
