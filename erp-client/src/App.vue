<template>
  <div class="">
    <router-view v-if="isLogin"></router-view>
    <Login v-else></Login>
  </div>

</template>

<script>
import Login from './views/LoginPage.vue'
export default {
  name: 'App',
  components: {
    Login
  },
  data(){
    return{
      isLogin: false
    }
  },
  created(){
    const emp_gen_id = localStorage.getItem("emp_gen_id");
    const token = localStorage.getItem('token');

    if (emp_gen_id && token){
      this.isLogin = true;
      // this.$router.push('/dashboard');
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
