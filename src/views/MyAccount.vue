<template>
  <div class="about">
    <h1>Your Account</h1>
    
  </div>
<h2 class = "header">Welcome to your Profile</h2>

  <body>
    
    <div class = "profile">
      <div>Your Details are as Below. If you wish to change them please fill the change of details form</div>
<div>Username : </div>
<div>Name :</div>
<div>Institution:</div>
<div>Address:</div>
<div>Contact Detail: </div>
</div>
<b>
<div><h1 class = "change">Change of Detail Form</h1></div>
  </b>
<div class="edit">To edit your details please fill out the form below</div>
<form >
  <div class= "editForm">
    

<div>
  <label>Username:</label>
  <input  type="text" placeholder="Enter your username" required> 
</div>

<div>
  <label>Full Name:</label>
  <input  type="text" placeholder="Enter your full name" required>
</div>




<div>
  <label>Institution:</label>
  <input type="text" placeholder="Enter your institution name" required>
</div>


<div>
  <label>Address:</label>
  <input type="text" placeholder="Enter your address" required>
</div>


<div>
  <label>Contact Details:</label>
  <input type= "int" placeholder="Enter Contact Details">
</div>
<button type="submit">Submit</button>


</div>

</form>
    
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
.edit{
  text-align: left;
}
.editForm{
  text-align: left;
}
.change{
  text-align: left;
  font-size: 25px;
}
.editForm {   
        padding: 25px;   
        background-color: lightblue;  
    }
     form {   
        border: 3px solid white;   
    }   
     button:hover {   
        opacity: 0.9;   
    }  
    button {   
       background-color:red;   
       width: 100%;  
        color: white;   
        padding: 15px;   
        margin: 10px 0px;   
        border: none;   
        cursor: pointer;   
         }   
input[type=text],input[type=int], input[type=password] {   
        width: 100%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;   
        border: 2px solid red;   
        box-sizing: border-box;   
    }  

</style>