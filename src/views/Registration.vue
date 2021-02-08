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
        placeholder="...Type password again"
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
        placeholder="...your institution"
        required
        autocomplete="off"
        v-model="institution"
        ></el-input>
      </el-form-item>

      <!-- Address -->
      <el-form-item label="Address: ">
        <el-input 
        type="text"
        placeholder="...full name(s)"
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
        <el-button type="success" @click="register">Register</el-button>
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

</style>