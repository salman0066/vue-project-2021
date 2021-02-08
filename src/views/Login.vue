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

</style>