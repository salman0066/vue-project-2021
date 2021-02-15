<template>
  <el-row>
    <el-col :span="23" class="mainContent">
      <el-form ref="form" label-width="auto">
        <h2>Login</h2>
        <!-- Username field -->
        <el-form-item label="Email: ">
          <el-input 
          type="text"
          placeholder="Input username"
          required
          autocomplete="off"
          v-model="email"
          ></el-input>
        </el-form-item>

        <!-- Password field -->
        <el-form-item label="Password: ">
          <el-input 
          type="password"
          placeholder="Input password"
          required
          autocomplete="off"
          v-model="password"
          ></el-input>
        </el-form-item>

        <el-form-item v-if="errorFirebase">
          <el-button plain disabled icon="el-icon-error">
            {{ errorFirebase }}
          </el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
   

</template>

<script>
import {ref} from 'vue';
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";

export default {
  name: "login",
  emits: ["login-clicked"],

  setup() {
    const email = ref("");
    const password = ref("");
    const errorFirebase = ref(null);

    const router = useRouter();

      function login() {
        const info = {
          email: email.value,
          password: password.value,
        };

        firebaseAuthentication
        .signInWithEmailAndPassword(info.email,info.password)
        .then(() => {
          router.push("/");
        }, error => {
          errorFirebase.value = error.message;
        });
      }

      return {email, password, errorFirebase, login};
      },
  };


</script>
<style scoped>
button {   
       background-color: #C1272D;   
       width: 100%;  
        color: white;   
        padding: 15px;   
        margin: 10px 0px;   
        border: none;   
        cursor: pointer;   
         }   
 form {   
        border: 3px solid #f1f1f1;   
    }   
 input[type=text], input[type=password] {   
        width: 100%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;   
        border: 2px solid #C1272D;   
        box-sizing: border-box;   
        
    }  
 button:hover {   
        opacity: 0.7;   
    }   
  .cancelbtn {   
        width: auto;   
        padding: 10px 18px;  
        margin: 10px 5px;  
    }   
        
     
 .container {   
        padding: 25px;   
        background-color: lightblue;  
    }
</style>