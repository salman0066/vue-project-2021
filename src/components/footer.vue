<template>
  <div class="container-fluid footer">
    <footer id="footer">
        <router-link :to="{ name: 'About'}">Help | </router-link> 
        <router-link :to="{ name: 'ContactUs'}">Contact Us</router-link> 
        <p><a href="https://github.com/AWD-Group-6/vue-project-2021">Check the app out on GitHub</a></p>
  </footer>
  </div>
</template>

<style scoped>
#footer {
  padding: 60px;
   margin: 0;
  overflow: hidden;
    bottom: 0;

}

#footer a {
  font-weight: bold;
  color:#C1272D;
}

#footer a.router-link-exact-active {
  color: #42b983;
}
</style>