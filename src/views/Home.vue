<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <h1>Welcome to myoCardio</h1>
  <h3>myoCardio is a data-sharing web application platform for cardiomyopathies. The website is primarily used by clinicians, cardiologists and 
    medical investigators. However, we also welcome academic researchers, medical students 
    and even people with an interest in cardiomyopathy data.</h3>
    <h3>
  If this is your first time please register to get started!<br>
  <router-link :to="{ name: 'Registration'}">Registration</router-link> <br><br>
  or please log in to your existing account here<br>
  <router-link :to="{ name: 'Login'}">Login</router-link>
  </h3>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>
