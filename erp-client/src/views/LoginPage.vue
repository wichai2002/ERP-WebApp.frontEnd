<template>
    <div class="container-fluid mt-5 pt-5">
        <div class="row" style="padding: 5%;">
            <div class="col-12 col-sm-8 col-md-6 m-auto">
                <div class="card py-4">
                    <!-- <img class="rounded" src="../assets/hrms_logo.png" alt="Title" width="200" /> -->
                    <div class="card-body py-4 ">
                        <img src="../assets/hrms_logo.png" class="" alt="" width="100">
                        <h1 style="text-align: center; font-weight: 700;" class="p-3">HRMS</h1>
                        <div class="">
                            <div class="mx-5 px-2">
                                <div class="input-group flex-nowrap my-4">
                                    <span class="input-group-text" id="addon-wrapping"><i
                                            class="bi bi-person-fill"></i></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                     v-model="emp_gen_id"   aria-describedby="addon-wrapping">
                                </div>
                                <div class="input-group flex-nowrap mb-4">
                                    <span class="input-group-text" id="addon-wrapping"><i
                                            class="bi bi-lock-fill"></i></span>
                                    <input type="password" class="form-control" placeholder="Password" aria-label="Username"
                                      v-model="password"  aria-describedby="addon-wrapping">
                                </div>
                            </div>
                            <div class="text-center p-2">
                                <button class="btn btn-lg" @click="login()"
                                    style="background-color: #2BC48A; color: aliceblue;">Login</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            emp_gen_id : "",
            password: ""
        }
    },
    methods:{
      async login(){
            const hrAccount = {
                hr_id: 0,
                emp_gen_id: Number(this.emp_gen_id),
                password: this.password
            };
            // console.log(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Authentication`);
            const _env = process.env;
            const authen = await axios.post(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Authentication`, hrAccount);
            
            if (authen.status == 200){
                if (localStorage.getItem("emp_gen_id") || localStorage.getItem("token")){
                    localStorage.clear();
                }
                localStorage.setItem("emp_gen_id", authen.data.emp_gen_id);
                localStorage.setItem("token", authen.data.authen_token);

                console.log("Go to Dashbord!");

                window.location.href = window.location.hostname + "/dashboard";
                // this.$router.push('/dashboard')
            }else{
                console.log(authen.status);
            }
            
        }
    }
}
</script>

<style >
html {
    background-color: #263540;
}

.container-fluid {
    background-color: #263540;
}</style>