<template>
    <div class="container-fluid">
        <div class="row">
            <!-- <SideBar /> -->
            <div class="col">
                <SideBar />
            </div>
            <div class="col-10 my-2 my-1">
                <div class="row">
                    <div class="col">
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">EDIT TIME</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    <div class="col p-4 justify-content-center d-flex ">
                        <div class="row bg-light p-2 w-75 align-items-center border border-dark">
                            <div class="col border border-dark w-100">
                                <div class="py-3">
                                    <h3 class="text-center" style="font-weight: 800;">EDIT TIME TO WORK</h3>
                                </div>


                                    <div class="row p-2 row p-2 justify-content-center align-items-center">

                                        <div class="col-sm-4 col-lg-3 col-mb-5 mx-2">
                                            <label for="title input">Department
                                            </label>
                                            <select class="form-select  p-2" aria-label=".form-select-sm example"
                                                v-model="depart_id">

                                                <option v-for="item in department" :key="item" :value="item.department_id">
                                                    {{ item.department_name }}
                                                </option>
                                            </select>
                                        </div>

                                        <div class="col-sm-4 col-lg-3 col-mb-5 mx-2">
                                            <label for="date">Role
                                            </label>
                                            <select class="form-select  p-2" aria-label=".form-select-sm example" v-model="role_id">

                                                <option v-for="item in role" :key="item" :value="item.ro.role_id">
                                                    {{ item.ro.position }}
                                                </option>
                                            </select>
                                        </div>


                                    </div>
      

                                <div class="row p-2 mt-2">
                                    <div class="col-2 mx-2"></div>
                                    <div class="col mx-2">
                                        <label for="time start">Time Start
                                            <input type="time" class="input mx-3" v-model="time_start">
                                        </label>
                                    </div>
                                    <div class="col mx-2">
                                        <label for="time end">Time End
                                            <input type="time" class="input mx-3" v-model="time_end">
                                        </label>
                                    </div>
                                    <div class="col-2 mx-2"></div>
                                </div>


                                <div class="row p-2 my-2">
                                    <div class="col d-flex justify-content-center mx-4">
                                        <button class="btn btn-md btn-success" style="width: 25%;" @click="savetime(role_id)">SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/NavigationBar.vue';
import axios from 'axios';
export default {
    components: {
        SideBar
    },
    data() {
        return {
            department: [],
            role: [],
            access_token: '',
            depart_id: '',
            role_id:'',
            time_start:'',
            time_end:''
        }
    },
    created() {
        this.access_token = localStorage.getItem("token");
        const _env = process.env;
// ${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}
        axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Edittime/getdepart`, {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
        })
            .then((res) => {
                //console.log(res.data)
                this.department = res.data;
            })
            .catch((error) => {
                console.error(error)
            })
    },
    methods: {
        select_roles(id) {
            console.log(id);
            const _env = process.env;
            axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Edittime/getrole/` + id, {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then((res) => {
                    //console.log(res.data)
                    this.role = res.data;
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        select_time(id){
            console.log(id);
            const _env = process.env;
            axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Edittime/gettime/` + id, {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then((res) => {
                    console.log(res.data)
                    this.time = res.data;
                    this.time_start = res.data.time_start
                    this.time_end = res.data.time_end
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        savetime(rid){
            console.log(rid);
            const _env = process.env;
            const time = {id:rid,time_start:this.time_start,time_end:this.time_end};
            axios.put(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Edittime/updatetime/`,time, {
                headers:{
                    'Authorization': `token ${this.access_token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
            console.log(response.data);
            alert("Update status for Roles success");
            location.reload();
        })
        .catch(error => {
            console.log(error);
            alert("Failed to update status for Roles. Please try again later."); // แจ้งเตือนให้ผู้ใช้ทราบ
        });
        }
    },
    watch: {
        depart_id(newVal) {
            this.select_roles(newVal)
        },
        role_id(newVal){
            this.select_time(newVal)
        }

    }


}
</script>

<style scoped></style>