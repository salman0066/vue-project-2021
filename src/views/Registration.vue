<template>
  <div class="about">
    <h1>This is an registration page</h1>
  </div>
  <form>  
        <div class="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required>
            <label>Re-type Your Password : </label>   
            <input type="password" placeholder="Re-type Your Password" name="password" required> <br>
            <label>Full Name: </label>   
            <input type="text" placeholder="Your Full Name" name="fullname" required>  
            <label>Institution : </label>   
            <input type="text" placeholder="Your Institution" name="institution" required>  
            <label>Address : </label>   
            <input type="text" placeholder="Enter Your Address" name="address" required>  
            <label>Phone Number : </label>   
            <input type="text" placeholder="Enter Your Number" name="phonenumber" required>     
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"> Remember me   
            <button type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>   
    </form>
</template>

<script>

// import {ref} from 'vue';

export default {
  setup(){

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