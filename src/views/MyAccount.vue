<template>
  <div class="about">
    <h1>Your Account</h1>
    
  </div>
<h2 class = "header">Welcome to your Profile</h2>

  <body>
    
    <div class = "profile">
      <div>Your Details are as Below. If you wish to change them please fill the change of details form</div>

      <div>
        <el-card class="box-card">

          <div v-if="user"> 
            <div>
            Welcome Back
            <span style = "color: green; font-weight: bold"> {{ user }} </span> <br>
            <el-button type="text" icon="el-icon-user" @click="$emit('logout')">Logout</el-button>
            </div>
          </div> 

        </el-card>
        </div>

<div>Username : </div>
<div>Name :</div>
<div>Institution:</div>
<div>Address:</div>
<div>Contact Detail: </div>
</div>
<b>
<div><h1>Change of Detail Form</h1></div>
  </b>
<div>To edit your details please fill out the form below</div>
<el-form >
      <el-form-item label="Username">
        <el-input v-model="username" placeholder="Enter username" autocomplete="off" required></el-input>
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="fullName" placeholder="name" autocomplete="off" required></el-input>
      </el-form-item>
        <el-form-item label="Institution">
        <el-input v-model="institution" placeholder="Enter title" autocomplete="off" required></el-input>
      </el-form-item>
        <el-form-item label="Address">
        <el-input v-model="address" placeholder="Enter title" autocomplete="off" required></el-input>
      </el-form-item>
        <el-form-item label="Contact Details">
        <el-input v-model="contact_details" placeholder="Enter title" autocomplete="off" required></el-input>
      </el-form-item>
<el-button>Update Details</el-button>
    </el-form>
<h1> {{ user }} </h1>
  </body>
</template>

<script>
// import { firebaseFireStore } from "@/firebase/database";
import {ref} from 'vue';

export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  setup(){

    // const user = ref(null);
    // //testing if user is retrieved
    // firebaseFireStore
    //     .collection("users")
    //     .doc("9GzkrH8mC8uN8fGhfVq4")
    //     .get()
    //     .then((snapshot) => {
    //     user.value = snapshot.data().name;
    //     });
    // return { user };

    const username = ref("");
    const fullName = ref("")
    const institution = ref("")
    const address = ref("")
    const contact_details= ref("")
    return {username, fullName, institution, address, contact_details}
  }
}
</script>

<style scoped>
.profile{
  text-align: left;
}
.about{
  text-align: middle;
  font-size: 20px;
}
.header{
  text-align: left;
}

button:hover {   
        opacity: 0.9;   
    }  
button {   
  display: inline-block;
       background-color:black;   
       width: 50%;  
        color: white;   
        padding: 15px;   
        margin: 10px 0px;     
        cursor: pointer;   
         }   

</style>