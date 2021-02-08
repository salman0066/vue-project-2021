<template>
  <el-form ref="form" label-width="auto">
    <!-- Username field -->
    <el-form-item label="Username: ">
      <el-input 
      type="text"
      placeholder="Input username"
      required
      autocomplete="off"
      v-model="username"
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

    <el-form-item>
      <el-button type="success" @click="login">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'Login',
  setup(){
      const username = ref("");
      const password = ref("");

      return {username, password}
  }

}
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