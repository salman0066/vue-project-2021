<template>
  <div class="about">
    <h1>Your Account</h1>
    
  </div>
<h2 class = "header">Welcome to your Profile</h2>

  <body>
    
    <div class = "profile">
      <div>Your Details are as Below. If you wish to change them please fill the change of details form</div>
<div><b>Email:</b></div>
<div><b>Username :</b> </div>
<div><b>Name :</b></div>
<div><b>Institution:</b></div>
<div><b>Address:</b></div>
<div> <b>Contact Detail: </b></div>
</div>
<b>
<div><h1 class = "change">Change of Detail Form</h1></div>
  </b>
<div class="edit">To edit your details please fill out the form below</div>
    <div class= "editForm"><div><b>Email:</b></div>
<div><b>Username :</b> </div>
<div><b>Name :</b></div>
<div><b>Institution:</b></div>
<div><b>Address:</b></div>
<div> <b>Contact Detail: </b></div>
</div>
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

</style>