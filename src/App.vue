<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
html,body,p,div,h1,h2,h3,h4,h5,tr,td,th,thead,table,ul,ol,li,tt{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  
  font-size: 23px;
  
  a {
    font-weight: bold;
    color: #2c4650;
    text-decoration: none;
   
  }
   .el-icon-arrow-down {
        display: inline;
    }
}
</style>
