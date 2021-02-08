<template>
  <div id="nav">
    <router-link v-bind:to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link> |
    <router-link :to="{ name: 'MyGraphs'}">My Graphs</router-link> |
    <router-link :to="{ name: 'MyAccount'}">My Account</router-link> | 
    <router-link :to="{ name: 'Registration'}">Registration</router-link> |
    <router-link :to="{ name: 'Login'}">Login</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-button{
    width:80%;
    height:auto;
    margin:50px auto 0;
    position:relative;
    padding:16px;
    background-color:#ffff;
    border-radius:2px;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);
    box-sizing:border-box;
}
</style>
