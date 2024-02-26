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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Add Training</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    <div class="col p-4 justify-content-center d-flex ">
                        <div class="row bg-light p-2 w-75 align-items-center border border-dark">
                            <div class="col border border-dark">
                                <div class="py-3">
                                    <h3 class="text-center" style="font-weight: 800;">ADD NEW TRANING</h3>
                                </div>

                                <div class="row p-2">
                                    <div class="col mx-2">
                                        <label for="title input">Training Title
                                            <input type="text" class="input mx-3" v-model="title">
                                        </label>
                                    </div>
                                    <div class="col mx-2">
                                        <label for="date">Traning Date
                                            <input type="date" class="input mx-3" v-model="date">
                                        </label>
                                    </div>
                                </div>

                                <div class="row p-2 mt-2">
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
                                </div>

                                <div class="row p-2 mt-2">
                                    <div class="col-6 d-flex mx-2">
                                        <label for="department">Department</label>

                                        <select class="form-select mx-4" aria-label="Default select example" v-model="department_id">
                                            <option selected :value=0>Open this select menu</option>
                                            <option v-for="(item, index) in departmentList" :key="index" :value="item.department_id" >
                                                {{ item.department_name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row p-2 my-2 d-flex justify-content-center">
                                    <div class="col-lg-4 col-mb-3 col-sm-2 ">
                                        <button class="btn btn-md btn-success" @click="createEmp_training()">SAVE</button>
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

function clearStore() {
    localStorage.clear();
    const port = window.location.port
    window.location.href = `${process.env.VUE_APP_PROTOCAL}://${process.env.VUE_APP_HOST}:${port}/login`;
}

export default {
    components: {
        SideBar
    },
    data() {
        return {
            title: '',
            date: '',
            time_start: '',
            time_end: '',
            department_id: 0,
            departmentList: []
        }
    },
    created() {
        const token = localStorage.getItem("token");
        const _env = process.env;
        if (token) {
            const departmentList = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Department/list`
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            departmentList.then(item => {
                if (item.status == 200) {
                    console.log(item.data);
                    this.departmentList = item.data
                } else if (item.status == 401) {
                    clearStore();
                }
            }).catch(error => {
                console.log(error);
            });

        }
    },
    methods:{
       async createEmp_training(){
            const _env = process.env;
            if (this.department_id != 0){
                const data = {
                    title: this.title,
                    date: this.date,
                    time: this.time_start + " - " + this.time_end,
                    department_id: this.department_id
                }
                console.log(data);
                const create = await axios.post(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Training`,data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                console.log(create.status);

                if (create.status == 201){
                    alert("Create Training Seccessfuly");
                    this.title = ""
                    this.date = ""
                    this.time_start = ""
                    this.time_end = ""
                    this.department_id = ""
                }
            }

        }
    }
}
</script>

<style scoped></style>