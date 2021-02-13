<template>
  <div style="margin:auto; text-align:center;"><h2>Add Data to Database</h2></div>

  <el-form label-width="120px">
    
      <el-form-item label="Title">
        <el-input type="text" v-model="title" placeholder="Enter title" autocomplete="off" required></el-input>
      </el-form-item>

      <el-form-item label="Description">
        <el-input type=" text" v-model="description" placeholder="Enter description" autocomplete="off" required></el-input>
      </el-form-item>

      <el-form-item label="Content">
        <el-input type="text" v-model="content" placeholder="Enter content" autocomplete="off" required></el-input>
      </el-form-item>

      <el-form-item label="Tags">
        <el-input type="text" v-model="tags" placeholder="Enter tags" autocomplete="off" required></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="success" @click="addPost">Add Data</el-button>
       
      </el-form-item>
  </el-form>
</template>

<script>

 import {ref} from 'vue';

export default {
  setup(){

    const title = ref("");
    const description = ref("")
    const content = ref("")
    const tags = ref("")
    return {title, description, content, tags}
  }
}
</script>

<style scoped>

</style>