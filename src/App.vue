<template>

  <div class="layout">
    <appHeader :user="user" @logout="logout" />

    <router-view
        :user="user"
        @logout="logout"
        class="globalfont center"
      />

    <appFooter></appFooter>
  </div>

 

</template>
<script>
// @ is an alias to /src
import footer from '@/components/footer.vue'
import header from '@/components/header.vue'
import { ref } from "vue";
import {
  firebaseAuthentication,
  // firebaseFireStore,
  // timestamp,
} from "@/firebase/database";
 import { useRouter } from "vue-router";

export default {
  components: {
    appFooter: footer,
    appHeader: header
  },
  setup() {
  const user = ref(null);
  const errorLogout = ref(null);
    


    firebaseAuthentication.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        user.value = currentUser.email;
        console.log(currentUser.email);
        
      } else {
        user.value == null;
      }
    });

    const router = useRouter();

    function logout() {
      firebaseAuthentication.signOut().then(
        () => {
          user.value = null;
          router.push("login");
        },
        (error) => {
          errorLogout.value = error.message;
        }
      );
    }

    return { user,logout };
    
  },
  
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout {
  justify-content: space-between;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-button{
    width:80%;
    height:auto;
    margin:50px auto 0;
    position:relative;
    padding:16px;
    background-color:#ffff;
    border-radius:2px;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);
    box-sizing:border-box;
}

.mainContent{
  margin:auto;
}

</style>
