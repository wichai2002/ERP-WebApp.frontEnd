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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Edit</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->

                    <div class="col-11 bg-white py-4 mx-4">
                        <div class="row">

                            <!-- Employee Info -->
                            <div class="col-5 bg-white mx-4"
                                style="border: 1px solid black; text-align: center; height: 20rem;">
                                <div class="bg-white" style="position: absolute; top: 7rem; width: 10%;">
                                    <h4>Employee Info</h4>
                                </div>
                                <div class="row" style="display: flex;">
                                    <div class="col-3 mx-1 py-5"
                                        style="justify-content: center; align-items: center; margin-top: 10%;">
                                        <img src="../assets/image 1.png" alt="">
                                    </div>
                                    <div class="col-8 py-4">
                                        <form action="" class="from1">
                                            <div class="row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Employee ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputEmail3" v-model="emp_id" readonly>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Department</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputEmail3" v-model="department">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Roles</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputEmail3" v-model="role">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 28%;">Phone number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3" v-model="phone">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Nationality</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3" v-model="nation">
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>


                            <!-- Main info -->
                            <div class="col-5" style="border: 1px solid black; text-align: center;">
                                <div class="bg-white" style="position: absolute; top: 7rem; width: 10%;">
                                    <h4>Main Info</h4>
                                </div>
                                <div class="row py-4">
                                    <div class="col-12 py-2">
                                        <form action="" class="from1">
                                            <div class="row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Fullname</label>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="inputEmail3" v-model="first_name">
                                                </div>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" id="inputEmail3" v-model="last_name">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Nickname</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3" v-model="nickname">
                                                </div>
                                            </div>
                                            <div style="display: flex;" class="col mx-4">
                                                <div class="row mb-3" style="margin-right: 10%;">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Gender</label>
                                                    <div class="col-sm-8">
                                                        <select name="" id="" class="form-control" v-model="gender">
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mx-3">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%;">Birth Day</label>
                                                    <div class="col-sm-8">
                                                        <input type="date" class="form-control" id="inputPassword3" v-model="birth" readonly>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 28%;">Email Personal</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3" v-model="email">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Address</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3" v-model="address">
                                                </div>
                                            </div>
                                            <div style="display: flex;" class="col mx-4">
                                                <div class="row mb-3 mx-1">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%; color: #2ECD99;">Hire Date</label>
                                                    <div class="col-sm-8">
                                                        <input type="date" class="form-control" id="inputPassword3" v-model="start_date" readonly>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: flex;" class="col mx-4 ">
                                                <div class="row mb-3 mx-1" style="margin-right: 10%;">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%; color: #2ECD99;">Time Start</label>
                                                    <div class="col-sm-8">
                                                        <input type="time" class="form-control" id="inputPassword3" v-model="time_start">
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mx-4">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                        style="width: 28%; color: red;">Time End</label>
                                                    <div class="col-sm-8">
                                                        <input type="time" class="form-control" id="inputPassword3" v-model="time_end">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <!-- Other Info -->
                            <div class="col-10 mx-4 my-5" style="border: 1px solid black;">
                                <div class="bg-white" style="position: absolute; top: 39rem; width: 10%; text-align: center;">
                                    <h4>Other Info</h4>
                                </div>
                                <div class="row">
                                    <div class="col-6 py-5">
                                        <form action="" class="from1">
                                            <div class="row" style="display: flex;">
                                                <div class="row mb-3 col-6">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 25%;">Married</label>
                                                    <div class="col-sm-8 my-2">
                                                        <input type="checkbox" v-model="marry">
                                                    </div>
                                                </div>
                                                <div class="row mb-3 col-6">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 25%;">Children</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control" id="inputEmail3" v-model="child">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-6">
                                        <div class="col-12 my-3">
                                            <form action="" class="from1">
                                                <div class="row mb-3 col-12">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Banking</label>
                                                    <div class=" col-12 px-2 py-2">
                                                        <table class="tt">
                                                            <tr>
                                                                <th>Account Name</th>
                                                                <th>Account Number</th>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="text" v-model="account_name" readonly></td>
                                                                <td><input type="text" v-model="account_id"></td>
                                                            
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="col-12">
                                            <form action="" class="from1">
                                                <div class="row mb-3 col-12">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Univesity</label>
                                                    <div class=" col-12 px-2 py-2">
                                                        <table class="tt">
                                                            <tr>
                                                                <th>University</th>
                                                                <th>Degree</th>
                                                                <th>Program</th>
                                                                <th>GPA</th>
                                                                <th>Graduration Year</th>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="text" v-model="university" readonly style="font-size: 12px;"></td>
                                                                <td><input type="text" v-model="degree" readonly style="font-size: 12px;"></td>
                                                                <td><input type="text" v-model="program" readonly style="font-size: 12px;"></td>
                                                                <td><input type="text" v-model="gpa" readonly style="font-size: 12px;"></td>
                                                                <td><input type="text" v-model="gra_year" readonly style="font-size: 12px;"></td>

                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5 mx-4" style="border: 1px solid black;">
                                <div class="bg-white"
                                    style="position: absolute; top: 62rem; width: 10%; text-align: center;">
                                    <h4>Leave Day</h4>
                                </div>
                                <div class="col-12 py-5">
                                    <form action="" class="from1">
                                        <div class="row mb-3">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                style="width: 25%;">Sick leave</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" id="inputEmail3" v-model="sick_leave" >
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                style="width: 25%;">Personal leave</label>
                                            <div class="col-sm-8" style="display: flex;">
                                                <input type="text" class="form-control" id="inputEmail3" v-model="per_leave">
                                                /30
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                style="width: 25%;">Vacation leave</label>
                                            <div class="col-sm-8" style="display: flex;">
                                                <input type="text" class="form-control" id="inputEmail3" v-model="va_leave" >/30
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div class="col-12 my-4">
                               <div class="row" style="justify-content: center;">
                                    <div class="col-1"> <button class="btn btn-success" @click="summit_form()">SAVE</button></div>
                                    <div class="col-1"> <button class="btn btn-danger" @click="reject(this.emp_id)">REJECT</button></div>
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
import  axios from "axios";
export default {
    components: {
        SideBar
    },
    data(){
        return{
            birth:"2002-09-30",
            emp_id:'',
            department:'',
            role:'',
            phone:'',
            nation:'',
            first_name:'',
            last_name:'',
            nickname:'',
            gender:'Male',
            email:'',
            address:'',
            start_date:'2002-09-30',
            time_start:'',
            time_end:'',
            marry:true,
            child:0,
            account_name:'',
            account_id:'',
            university:'',
            degree:'',
            program:'',
            gpa:'',
            gra_year:'',
            sick_leave:'',
            per_leave:'',
            va_leave:'',
            access_token:'',
            em_info:[],
            main_info:[],
            other_info:[],
            leave_day:[]

        }
    },
    methods: {
        summit_form(){
            const id = {id: this.emp_id, department: this.department,role:this.role,phone:this.phone,nation:this.nation,first_name:this.first_name,last_name:this.last_name,nick_name:this.nickname,email:this.email,address:this.address,married:this.marry,children:this.child,account_number:this.account_id,sickleave:this.sick_leave,personalleave:this.per_leave,vacationleave:this.va_leave,time_start:this.time_start,time_end:this.time_end};
            //const aa = {first_name:this.first_name,last_name:this.last_name,emp_gen_id:1} 
            axios.put("http://localhost:5257/api/Emp_general_information/update_emp/",id, {
                headers:{
                    'Authorization': `token ${this.access_token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
            console.log(response.data);
            alert("Update status for Roles success");
            //location.reload();
        })
        .catch(error => {
            console.log(error);
            alert("Failed to update status for Roles. Please try again later."); // แจ้งเตือนให้ผู้ใช้ทราบ
        });
        },
        reject(eid){
            console.log(eid);
            axios.put("http://localhost:5257/api/Emp_general_information/reject/" + eid, {
                headers:{
                    'Authorization': `token ${this.access_token}`
                }
            })
            .then(response => {
            console.log(response);
            alert("Update status for Roles success");
            location.reload();
        })
        .catch(error => {
            console.log(error);
            alert("Failed to update status for Roles. Please try again later."); // แจ้งเตือนให้ผู้ใช้ทราบ
        });
}
    },
    async created() {
        const urlParams = new URLSearchParams(window.location.search);
        this.emp_id = await urlParams.get("emp_id")
        this.access_token = localStorage.getItem("token");

        axios.get('http://localhost:5257/api/Emp_general_information/em_info/'+this.emp_id, {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            this.em_info = res.data.employee_if[0];
            this.main_info  = res.data.main_info[0];
            this.other_info = res.data.other_info[0];
            this.leave_day = res.data.leave_day[0];

                //employee info
                this.department = this.em_info.departmentName;
                this.role = this.em_info.roleName;
                this.phone = this.em_info.phone;
                this.nation = this.em_info.nation

                //main info
                this.first_name = this.main_info.first_name;
                this.last_name = this.main_info.last_name;
                this.nickname = this.main_info.nickname;
                this.gender = this.main_info.gender;
                this.birth = this.main_info.birth;
                this.email = this.main_info.email;
                this.address = this.main_info.address;
                this.start_date = this.main_info.hire_date;
                this.time_start = this.main_info.start_time;
                this.time_end = this.main_info.end_time;

                //other 
                this.marry = this.other_info.married;
                this.child = this.other_info.children;
                this.account_name = this.other_info.fullname;
                this.account_id = this.other_info.bankingNumber;
                this.university = this.other_info.university;
                this.degree = this.other_info.degree;
                this.program = this.other_info.program;
                this.gpa = this.other_info.gpa;
                this.gra_year = this.other_info.graduration

                //leave
                this.sick_leave = this.leave_day.sick_leave;
                this.per_leave = this.leave_day.personal_leave;
                this.va_leave = this.leave_day.vacation_leave; 
            })
            .catch((error) => {
            console.error(error)
            })
    },
}
</script>

<style scoped>
.from1 input {
    height: 70%;

}

.from1 select {
    height: 70%;
    font-size: 12px;
}


.from1 label {
    font-size: 12px;


}

.tt tr,
td,
th {
    border: 1px solid black;
    text-align: center;
}

.tt input {
    height: 10px;
}

.tt td,
th {
    padding: 10px;
    font-size: 12px;
}
</style>