<template>
  <div class="about">
    <h1>Your Account</h1>
    
  </div>
<h2 class = "header">Welcome to your Profile</h2>

  <body>
    
    <div class = "profile">
      <div>Your Details are as Below. If you wish to change them please fill the change of details form</div>
<div>Email:</div>
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
    <div><label>Email</label>
    <input required type="email" placeholder="email">
    </div>
<div>

  <label>Username</label>
  <input required type="userName" placeholder="username"> </div>


<div>
  <label>First Name</label>
  <input required type="firstName" placeholder="first name">
</div>
<div>
  <label>Last Name</label>
  <input placeholder="last name">
</div>


<div>
  <label>Institution</label>
  <input placeholder="institution">
</div>


<div>
  <label>Address</label>
  <input placeholder="address">
</div>


<div> 
  <label>Contact Details</label>
  <input placeholder="Contact Details">
</div>


</div>
<input class="submitBtn" type="submit" value="Submit">
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
.submitBtn{
  place-content: left;
}

</style>