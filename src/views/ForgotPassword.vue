<template>
    <div class="vue-tempalte">
        <form @submit.prevent="forgetPassword">
            <h2>Forgot your password? </h2>
            <h3>Type your email address below and we will send you a verification email to reset your password!</h3>

            <div class="form">
                <label>Email:  </label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

            <button type="submit">Reset password</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>
<style scoped>
button {
    background-color: #c1272d;
    width: 35%;
    color: white;
    padding: 15px;
    margin: 10px 0px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.7;
  }
  form {
    border: 3px solid #f1f1f1;
  }
  input{
    width: 50%;
    margin: 8px 0;
    padding: 12px 20px;
    display: inline-block;
    border: 2px solid #c1272d;
    box-sizing: border-box;
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

  #capsLock{
    margin:30px;
    display:none;
  }


</style>