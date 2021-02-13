<template>
<el-row>
  <el-col :span="11" class="mainContent">
    <el-form ref="form" label-width="auto">
      <h2>Register</h2>
      <!-- Username field -->
      <el-form-item label="** Username: ">
        <el-input 
        type="text"
        placeholder="Create username"
        required
        autocomplete="off"
        v-model="username"
        ></el-input>
      </el-form-item>

      <!-- Password field -->
      <el-form-item label="** Password: ">
        <el-input 
        type="password"
        placeholder="Create a strong password"
        required
        autocomplete="off"
        v-model="password"
        ></el-input>
      </el-form-item>

      <!-- PW confirmation field -->
      <el-form-item label="** Password Confirmation: ">
        <el-input 
        type="password"
        placeholder="...re-type password again"
        required
        autocomplete="off"
        v-model="password"
        ></el-input>
      </el-form-item>

      <!-- full name -->
      <el-form-item label="** Name(s): ">
        <el-input 
        type="text"
        placeholder="...full name(s)"
        required
        autocomplete="off"
        v-model="fullName"
        ></el-input>
      </el-form-item>

      <!-- Institution name -->
      <el-form-item label="** Institution(s): ">
        <el-input 
        type="text"
        placeholder="...research/education organisations etc"
        required
        autocomplete="off"
        v-model="institution"
        ></el-input>
      </el-form-item>

      <!-- Address -->
      <el-form-item label="Address: ">
        <el-input 
        type="text"
        placeholder="...any level of detail appreciated"
        autocomplete="off"
        v-model="fullName"
        ></el-input>
      </el-form-item>

      <!-- Phone Number -->
      <el-form-item label="Phone Number: ">
        <el-input 
        type="text"
        placeholder="...with no spaces"
        autocomplete="off"
        v-model="phoneNumber"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-row>
      <el-col :span="14">
        <el-button type="primary" @click="register">Register</el-button>
      </el-col></el-row>
      </el-form-item>
      <div id="message">
        {{fullName}}
      </div>
      
    </el-form>
  </el-col></el-row>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'Login',
  setup(){
      const username = ref("");
      const password = ref("");
      const passwordConfirmation = ref("");
      const fullName = ref("");
      const institution = ref("");
      const address = ref("");
      const phoneNumber = ref("");

      function detailsToString(username, password, passwordConfirmation, fullName, institution, address, phoneNumber){
          return "Username: ", username, 
          "Password: ", password, 
          "PW Confiramtion: ", passwordConfirmation, 
          "Name: ", fullName, 
          "Institution: ", institution, 
          "Address: ", address, 
          "Number: ", phoneNumber, ".";
      }

      return {detailsToString, username, password, passwordConfirmation, fullName, institution, address, phoneNumber}
  }

}
</script>
<style scoped>
.mainContent{
  margin:auto;

}

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