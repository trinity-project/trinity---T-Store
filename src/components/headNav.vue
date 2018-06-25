<template>
  <nav class="navbar">
    <div class="container-fluid">
        <h1 v-if="isTestNet"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>{{ title }} For Test Network</h1>
        <h1 v-if="!isTestNet"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>{{ title }} For Main Network</h1>
        <span v-if="isTestNet" @click="ChangeNetFun()" style="font-size: 17px;margin: 8px;float:right;cursor: pointer;" class="label label-default">Main Network</span>
        <span v-if="!isTestNet" @click="ChangeNetFun()" style="font-size: 17px;margin: 8px;float:right;cursor: pointer;" class="label label-default">Test Network</span>
    </div>
  </nav>
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'headNav',
  data () {
    return {
      isTestNet:true
    }
  },
  props:["title"],
  mounted() {
     Bus.$on('flag', (e) => {
         this.LoginFlag = e
     })
  },
  methods:{
    ChangeNetFun:function(){
      this.isTestNet === true ? this.isTestNet = false : this.isTestNet = true;
      Bus.$emit('ChangeNetFun', this.isTestNet);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
  float: left;
  font-size: 24px;
  margin: 7px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #343a40;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}
span{
  margin-right: 10px;
}
.container-fluid{
  width: 100%;
  float: left;
  height: 56px;
  padding: 8px 16px;
}
@media (max-width: 768px){
  .navbar {
      margin:0;
  }
}
</style>
