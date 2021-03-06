<template>
  <div class="about">
    <h1>Help Page</h1>
  </div>

  <body>
    <div>  
      <ul class="headers">
        <h2>New User</h2>
        <li>Signing up is easy, you just need to click on <router-link  round v-if="!user" :to="{ name: 'Registration'}">Register</router-link></li>
        <h2>Already a User</h2>
        <li>If you are already registered, just click on <router-link round v-if="!user" :to="{ name: 'Login'}">Login</router-link></li>
        <li>If you forgot your password, you can click on <router-link to="/forgot-password">Forgot password ?</router-link></li>
        <h2>After Logging in</h2>
        <li>Once you are logged in, you can use the dropdown on the right side to navigate to different pages</li>
        <li>In My Account page, you can see all your details</li>
        <li>If you head to the My graphs Page you can see all the graphs that you have added</li>
        <h2>Using the Website</h2>
        <li>Using the search page is easy, just head to <router-link :to="{ name: 'Search'}">Search</router-link> and search for ids that are already provided on that page</li>
        <li>On the <router-link :to="{ name: 'GraphData'}">Data</router-link> page the graphs will be shown if you are signed in</li>
         

        






        <li>For any other queries you can <router-link :to="{ name: 'ContactUs'}">Contact Us</router-link>  and talk to any person in the team</li>
      </ul>
    </div>
  </body>
</template>

<script>

// import {ref} from 'vue';

export default {
  setup(){

  }
}
</script>

<style scoped>
.headers{
  text-align: left;
}
</style>