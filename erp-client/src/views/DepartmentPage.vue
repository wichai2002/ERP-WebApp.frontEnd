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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">EMPLOYEE IN DEPARTMENTS</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 px-3 mx-1">
                        <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example" v-model="department_select_id" @change="FilerRoleList(department_select_id)">
                            <option selected :value=0>Open this select Department</option>
                            <option v-for="(item, index) in departmentList" :key="index" :value="item.department_id" >
                                <span>{{ item.department_name }}</span>
                            </option>
                        </select>
                    </div>

                    <div class="col-3 px-3 mx-1" v-if="department_select_id == 0">
                        <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example" v-model="role_selec_id" >
                            <option selected :value=0>Open this select Role</option>
                            <option v-for="(item, index) in roleList" :key="index" :value="item.role_id" >
                                {{ item.position }}
                            </option>
                        </select>
                    </div>
                    <div class="col-3 px-3 mx-1" v-if="department_select_id != 0">
                        <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example" v-model="role_selec_id" >
                            <option  :value=0>Open this select Role</option>
                            <option v-for="(item, index) in role_fitered" :key="index" :value="item.role_id">
                                {{ item.position }}
                            </option>
                        </select>
                    </div>

                    <!-- <div class="col d-flex flex-row-reverse mx-2 text-white">
                        <h4>Number of people: {{ emp_gen_info_List.length }} people</h4>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col p-4">
                        <table class="table">
                            <!-- blue-800 -->
                            <thead class="table-dark table-active">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">E-MAIL</th>
                                    <th scope="col">Hire-Date</th>
                                </tr>
                            </thead>
                            <tbody v-if="department_select_id == 0 && role_selec_id == 0">
                                <tr v-for="(item, index) in emp_gen_info_List" :key="index">
                                    <td>{{ item.emp_gen_id }}</td>
                                    <td>{{ item.first_name }} {{ item.last_name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.hire_date }}</td>
                                </tr>
                            </tbody>
                            <tbody v-if="department_select_id != 0 && role_selec_id == 0">
                                <tr v-for="(item, index) in emp_gen_info_List" :key="index">
                                    <td v-if="FindDepartmentIDByRoleID(item.role_id) == department_select_id">{{ item.emp_gen_id }}</td>
                                    <td v-if="FindDepartmentIDByRoleID(item.role_id) == department_select_id">{{ item.first_name }} {{ item.last_name }}</td>
                                    <td v-if="FindDepartmentIDByRoleID(item.role_id) == department_select_id">{{ item.email }}</td>
                                    <td v-if="FindDepartmentIDByRoleID(item.role_id) == department_select_id">{{ item.hire_date }}</td>
                                </tr>
                            </tbody>
                            <tbody v-if="role_selec_id != 0 && department_select_id != 0">
                                <tr v-for="(item, index) in emp_gen_info_List" :key="index">
                                    <td v-show="item.role_id == role_selec_id">{{ item.emp_gen_id }}</td>
                                    <td v-show="item.role_id == role_selec_id">{{ item.first_name }} {{ item.last_name }}</td>
                                    <td v-show="item.role_id == role_selec_id">{{ item.email }}</td>
                                    <td v-show="item.role_id == role_selec_id">{{ item.hire_date }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/NavigationBar.vue";
import axios from "axios";

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
            departmentList: [],
            department_select_id: 0,
            roleList: [],
            role_selec_id: 0,
            emp_gen_info_List: [],
            select_all: true,
            role_fitered: []
        };
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

            const roleList = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Role/list`
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            roleList.then(item => {
                if (item.status == 200) {
                    console.log(item.data);
                    this.roleList = item.data
                } else if (item.status == 401) {
                    clearStore();
                }
            }).catch(error => {
                console.log(error);
            });

            const emp_gen_info_List = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Emp_general_information/list`
            ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            emp_gen_info_List.then(item =>{


                if (item.status == 200){
                    console.log(item.data);
                    this.emp_gen_info_List = item.data;
                }else if (item.status == 401){
                    clearStore();
                }
            }).catch(error =>{
                console.log(error);
            });

        }
    },
    methods: {
       FindDepartmentIDByRoleID(role_id){
            var dep = this.roleList.find(role => role_id == role.role_id);
            return dep.department_id;
        },
       FilerRoleList(department_id){
            this.role_fitered = [];
            this.roleList.forEach(role =>{
                if (department_id == role.department_id){
                    this.role_fitered.push(role);
                    // console.log(this.role_fitered);
                }
            })

            console.log(this.role_fitered);
        }
    }

}
</script>

<style scoped>
thead {
    background-color: blue !important;
}
.noShow {
    display: none;
}
</style>