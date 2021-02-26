<template>
   <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png">
         <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <h1 id="welcomeMessage">Welcome to myoCardio</h1>
      <div class="text-block">
         <el-row>
            <el-col style="text-align:justify" :span="24">
               <b style="color:red" >myoCardio</b> is a website for sharing data associated with cardiomyopathies. 
               The website is primarily used by clinicians, cardiologists and medical investigators. 
               However, we welcome academic researchers, medical students or people with only an interest in cardiomyopathy data.
            </el-col>
         </el-row>
      </div>

      
      <div round v-if="!user" class="text-block">
         <el-row>
            <el-col @click="gotoRegister" :offset="1" :span="10" class="login-or-register">
               If this is your first time 'Register' to get started!<br>
               <!-- <router-link :to="{ name: 'Registration'}"><span>Registration</span></router-link> -->
            </el-col>
            <el-col @click="gotoLogin" :offset="2" :span="10" class="login-or-register">
               OR: 'Login' to your existing account<br>
               <!-- <router-link :to="{ name: 'Login'}"><span>Login</span></router-link> -->
            </el-col>
         </el-row>

         <h3>


         </h3>
      </div>
   </div>
</template>

<script>

import {useRouter} from 'vue-router';
export default {
   name: 'Home',
      components: {
      
   },
   props: {
      user: {
         type: Object,
         default: () => {},
      },
   },
   setup(){
      const router = useRouter();

      function gotoLogin(){
         router.push('login');
      }
      function gotoRegister(){
         router.push('registration');
      }

      return{
         gotoRegister,
         gotoLogin
      }
   }

}

</script>


<style>
#welcomeMessage{
   transition: transform .2s;
}
#welcomeMessage:hover{
   transform:scale(1.1);
}
.text-block{
   font-size:14pt;
   font-family:Avenir, Helvetica, Arial, sans-serif;
   margin:20px;
   margin-top:50px;
}
.login-or-register{
   border: 1px solid black;
   border-radius: 2px 20px 2px 20px;
   cursor: pointer;
   transition: transform .2s;
}

.login-or-register:hover{
   transform:scale(1.2);
}

</style>