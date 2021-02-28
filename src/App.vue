<template>

  <div class="layout">
    <appHeader :user="user" @logout="logout"/>

    <router-view :user="user" @logout="logout" class="globalfont center" v-slot="{Component}"  >
      <transition :name="transition" :mode="mode" >
        <component :is="Component">
        </component>
      </transition>
    </router-view>

    <appFooter></appFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import footer from "@/components/footer.vue";
import header from "@/components/header.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  firebaseAuthentication,
  // firebaseFireStore,
  // timestamp,
} from "@/firebase/database";

export default {
  components: {
    appFooter: footer,
    appHeader: header,
  },
  setup() {
    const user = ref("");
    const errorLogout = ref(null);

    firebaseAuthentication.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        user.value = currentUser.email;
        console.log(user.value);
      } else {
        user.value == null;
      }
    });

    const router = useRouter();

    function logout() {
      firebaseAuthentication.signOut().then(
        () => {
          router.push("login");
          user.value = null;
        },
        (error) => {
          errorLogout.value = error.message;
        }
      );
    }

    const transition = ref("fade");
    const mode = ref("out-in");
    
    router.beforeEach((to, from, next) => {
      transition.value = "fade";
      if(to.meta && to.meta.transition){
        transition.value = to.meta.transition
      }
      next();
    });

    return {
      user,
      logout,
      mode,
      transition,
    };
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

.mainContent {
  margin: auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

/**Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

.el-button {
  width: 80%;
  height: auto;
  margin: 50px auto 0;
  position: relative;
  padding: 16px;
  background-color: #ffff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

</style>
