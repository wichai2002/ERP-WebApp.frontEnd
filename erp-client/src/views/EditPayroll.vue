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
                        <h1 class="text-align-center py-2 mx-2" style="color: #2ecd99">
                            EDIT PAYROLL
                        </h1>
                        <hr style="color: aliceblue" />
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->

                    <div class="col-10 bg-white py-4 ms-5" style="border-radius: 10px; padding-left: 3%; padding-right: 3%; margin-bottom: 5%;">
                        <div class="col-4 bg-white" style="position: absolute; top: 8rem; width: 25rem; text-align: center;">
                            <h3>EDIT PAYROLL PERSONAL</h3>
                        </div>

                        <div class="row g-3 align-items-center" style="border: 1px solid black; margin-top: 1%; padding-top: 3%; border-radius: 10px; padding-bottom: 3%;">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">EmployeeId</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" v-model="id"/>
                            </div>

                            <div class="col-auto" style="margin-left: 10%;">
                                <label for="inputPassword6" class="col-form-label">Fullname</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" v-model="name" readonly/>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Department</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="department" readonly/>
                                </div>

                                <div class="col-auto" style="margin-left: 10%;">
                                    <label for="inputPassword6" class="col-form-label">Roles</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="role" readonly/>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Salary</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="salary"/>
                                </div>
                                <div class="col-auto" style="margin-left: 30rem;">
                                   <button class="btn btn-success" style="text-align: center; align-items: center;" @click="save_perem(this.id)">SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- edit salary base -->
                    <div class="col-10 bg-white py-4 ms-5" style="border-radius: 10px; padding-left: 3%; padding-right: 3%; margin-bottom: 5%;">
                        <div class="col-4 bg-white" style=" top: 35em; width: 25rem; text-align: center;">
                            <h3>EDIT BASE SALARY ROLES</h3>
                        </div>

                        <div class="row g-3 align-items-center" style="border: 1px solid black; margin-top: 1%; padding-top: 3%; border-radius: 10px; padding-bottom: 3%;">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Roles</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" v-model="role2"/>
                            </div>

                            <div class="col-auto" style="margin-left: 10%;">
                                <label for="inputPassword6" class="col-form-label">Salary Base</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" v-model="salary_base"/>
                            </div>

                            <div class="col-auto" style="margin-left: 10rem;">
                                   <button class="btn btn-success" @click="save_role()">SAVE</button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "../components/NavigationBar.vue";
import axios from "axios";
export default {
    components: {
        SideBar,
    },
    data() {
        return {
            id:'0',
            dataPer:[],
            name:'',
            department:'',
            role:'',
            access_token:'',
            salary:0,
            role2:'',
            salary_base:0,
            dataRole:[],
            departmentId: 0
        }
    },
    async created() {
        this.access_token = localStorage.getItem("token");
    },
    methods: {
        async getInfo(id){
            await axios.get('http://localhost:5257/api/Payroll/idPer/'+ id, {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            this.dataPer = res.data[0];
            this.name = res.data[0].emId;
            this.department = res.data[0].departName;
            this.role = res.data[0].roleName;
            this.salary = res.data[0].payInfo;
            })
            .catch((error) => {
            console.error(error)
            })
        },
        async save_perem(pid){
            console.log(pid);
            await axios.put("http://localhost:5257/api/Payroll/updateEm/" + pid + "/" + this.salary)
        .then(response => {
            console.log(response);
            alert("Update payroll for employee success");
            location.reload();
        })
        .catch(error => {
            console.log(error);
            alert("Failed to update payroll for employee. Please try again later."); // แจ้งเตือนให้ผู้ใช้ทราบ
        });
        },
        async get_role(rid){
            console.log(rid);
            await axios.get('http://localhost:5257/api/Payroll/getrole/'+ this.role2, {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            this.dataRole = res.data[0];
            this.salary_base = res.data.salaryBase;
            this.departmentId = res.data.departmentId;
            })
            .catch((error) => {
            console.error(error)
            })
        },
         save_role(){
             axios.put("http://localhost:5257/api/Payroll/updatepayRole/" + this.departmentId + "/" + this.salary_base)
        .then(response => {
            console.log(response);
            alert("Update payroll for Roles success");
            location.reload();
        })
        .catch(error => {
            console.log(error);
            alert("Failed to update payroll for Roles. Please try again later."); // แจ้งเตือนให้ผู้ใช้ทราบ
        });
        }
    },
    watch:{
        id(newVal){
            this.getInfo(newVal);
        },
        role2(newVal){
            this.get_role(newVal)
        }
        
    }
};
</script>

<style scoped></style>