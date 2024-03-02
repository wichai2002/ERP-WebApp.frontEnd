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
                                <input type="text" id="inputPassword6" class="form-control" v-model="name"/>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Department</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="department"/>
                                </div>

                                <div class="col-auto" style="margin-left: 10%;">
                                    <label for="inputPassword6" class="col-form-label">Roles</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="role"/>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Salary</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="salary"/>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">DISCOUNT</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="discount"/>
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                    %
                                    </span>
                                </div>

                                <div class="col-auto" style="margin-left: 8%;">
                                    <label for="inputPassword6" class="col-form-label">MOUNT DISCOUNT</label>
                                </div>
                                <div class="col-auto">
                                    <input type="date" id="inputPassword6" class="form-control" v-model="mount"/>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Bonus</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" v-model="Bonus"/>
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                    % per year
                                    </span>
                                </div>
                                <div class="col-auto" style="margin-left: 40%;">
                                   <button class="btn btn-success">SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- edit salary base -->
                    <div class="col-10 bg-white py-4 ms-5" style="border-radius: 10px; padding-left: 3%; padding-right: 3%; margin-bottom: 5%;">
                        <div class="col-4 bg-white" style="position: absolute; top: 48em; width: 25rem; text-align: center;">
                            <h3>EDIT BASE SALARY ROLES</h3>
                        </div>

                        <div class="row g-3 align-items-center" style="border: 1px solid black; margin-top: 1%; padding-top: 3%; border-radius: 10px; padding-bottom: 3%;">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Roles</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" />
                            </div>

                            <div class="col-auto" style="margin-left: 10%;">
                                <label for="inputPassword6" class="col-form-label">Salary Base</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" />
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Discount</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>

                                <div class="col-auto" style="margin-left: 10%;">
                                    <label for="inputPassword6" class="col-form-label">MOUNT DISCOUNT</label>
                                </div>
                                <div class="col-auto">
                                    <input type="DATE" id="inputPassword6" class="form-control" />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Bonus</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>
                                <div class="col-auto" style="margin-left: 40%;">
                                   <button class="btn btn-success">SAVE</button>
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
import SideBar from "../components/NavigationBar.vue";
import axios from "axios";
export default {
    components: {
        SideBar,
    },
    data() {
        return {
            id:'1000000000',
            dataPer:[],
            name:'',
            department:'',
            role:'',
            discount:0,
            mount:'',
            Bonus:0,
            access_token:'',
            salary:0
        }
    },
    async created() {
        this.access_token = localStorage.getItem("token");

            await axios.get('http://localhost:5257/api/Payroll/idPer/'+ this.id, {
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
};
</script>

<style scoped></style>