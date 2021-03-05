<template >
  <el-row v-on:keyup="checkCapsLock">
    <el-col :span="23" class="mainContent">
      <el-form ref="form" label-width="auto"
        @keyup.enter="login()"
      >
        <h2>Login</h2>
        <!-- Username field -->
        <el-form-item label="Email: ">
          <el-input
            id="emailInput"
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
            id="passwordInput"
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

        
        <el-row id="capsLock">
          <el-col :offset="4" :span="10">
              <span style="color:red;font-size:10pt">Warning: Caps lock is on...</span>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
            <h2>
              <router-link to="/forgot-password">Forgot password ?</router-link>
            </h2>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";

export default {
  name: "login",
  emits: ["login-clicked"],

  setup() {
    const email = ref("");
    const password = ref("");
    const errorFirebase = ref(null);

    function checkCapsLock(){
      const capsLock = document.getElementById('capsLock');
      const emailInput = document.getElementById('emailInput');
      emailInput.addEventListener("keyup", (e) => {
        if(e.getModifierState("CapsLock")){
          capsLock.style.display = "block";
        }
        else{
          capsLock.style.display = "none";
        }
      });
      const passwordInput = document.getElementById('passwordInput');
      passwordInput.addEventListener("keyup", (e) => {
        if(e.getModifierState("CapsLock")){
          capsLock.style.display = "block";
        }
        else{
          capsLock.style.display = "none";
        }
      });
    }

    const router = useRouter();
    
    
    function login() {

      const info = {
        email: email.value,
        password: password.value,
      };

      firebaseAuthentication
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            router.push("/");
          },
          (error) => {
            errorFirebase.value = error.message;
          }
        );
    }

    return {
      email,
      password,
      errorFirebase,
      login,
      checkCapsLock
    };
  },
};
</script>
<style scoped>
  button {
    background-color: #c1272d;
    width: 100%;
    color: white;
    padding: 15px;
    margin: 10px 0px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.7;
  }
  form {
    border: 3px solid #f1f1f1;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    margin: 8px 0;
    padding: 12px 20px;
    display: inline-block;
    border: 2px solid #c1272d;
    box-sizing: border-box;
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

  #capsLock{
    margin:30px;
    display:none;
  }
</style>