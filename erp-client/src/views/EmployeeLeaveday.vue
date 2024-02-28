<template>
    <div class="container-fluid">
    <div class="row">
        <!-- <SideBar /> -->
        <div class="col">
            <SideBar />
        </div>
        <div class="col-10 my-2 my-1">

            <div class="row">
                <!-- content here -->
                <!-- block detail -->
                <div class="row" style="margin-left: 1%;">
 
                    <div class="col-4 bg-white my-4" style="border: 1px solid black; height: 15rem; width: 30%; align-items: center; justify-content: center; margin-left: 30%; border-radius: 10px;">
                        <div class="row">
                            <div class="col-4" style="margin-top: 5rem">
                                <img src="../assets/image 1.png" alt="" style="margin-left: 15px;">
                            </div>
                            <div class="col-4 my-5">
                               <h5 style="margin-bottom: 20px;  "><b>Employee_id</b> </h5>
                               <h5 style="margin-bottom: 20px; "><b>Fullname</b> </h5>
                               <h5 style="margin-bottom: 20px; "><b>Department</b> </h5>
                               <h5 style="margin-bottom: 20px; "><b>Roles</b></h5>
                            </div>
                            <div class="col-4 my-5">
                               <h5 style="margin-bottom: 20px;">{{em_id}}</h5>
                               <h6 style="margin-bottom: 20px;">{{data2.first_name}} {{data2.last_name}}</h6>
                               <h5 style="margin-bottom: 20px;">{{data3._Roles.position}}</h5>
                               <h5 style="margin-bottom: 20px;">{{ data3._department.department_name }}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- table summary -->
                <div class="col-12 p-4">
                        <div class="col">
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">SUMMARY LEAVE</h1>
                        </div>
                    <table class="table " style="text-align: center;">
                        <thead class="table-dark table-active">
                            <tr>
                                <th scope="col">TYPE</th>
                                <th scope="col">DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sick leave</td>
                                <td v-if="data1.sick_leave >= 30" style="color: red;">{{data1.sick_leave}}/30</td>
                                <td v-if="data1.sick_leave < 30">{{data1.sick_leave}}/30</td>
                            </tr>
                            <tr>
                                <td>Leave of absence</td>
                                <td v-if="data1.personal_leave < 30">{{data1.personal_leave}}/30</td>
                                <td v-if="data1.personal_leave >= 30" style="color: red;">{{data1.personal_leave}}/30</td>
                            </tr>
                            <tr>
                                <td>take annual leave</td>
                                <td style="color: red;" v-if="data1.vacation_leave >= 30">{{data1.vacation_leave}}/30</td>
                                <td  v-if="data1.vacation_leave < 30">{{data1.vacation_leave}}/30</td>
                            </tr>



                        </tbody>
                    </table>
                </div>

                <div class="col-12 p-4">
                        <div class="col">
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">HISTORY LEAVE</h1>
                        </div>
                    <table class="table " style="text-align: center;">
                        <thead class="table-dark table-active">
                            <tr>
                                <th scope="col">TYPE</th>
                                <th scope="col">START_DATE</th>
                                <th scope="col">END_DATE</th>
                                <th scope="col">SUMMARY_TYPE</th>
                            </tr>
                        </thead>
                        <tbody v-for="(item,index) in date_day.le" :key="item">
                            <tr>
                                    <td>{{item.type}}</td>
                                    <td>{{date_day.start_leave[index]}}</td>
                                    <td>{{date_day.end_leave[index]}}</td>
                                    <td>{{date_day.diff[index]}}</td>
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

import SideBar from '../components/NavigationBar.vue';
import axios from 'axios';
export default {
components: {
    SideBar
},
data(){
    return{
        em_info: 
            {
                employee_id: 10000000,
                employee_name: "Captain Pang",
                employee_role: "Member",
                department:"Member"
            },
        day:
            {
                sick_leave: 10,
                Leave_of_absence:5,
                take_annual_leave:31 
            },
            leave:[
                {
                    type:'sick',
                    start_date:'01.21.22',
                    end_date:'02.33.44',
                    summary_type:10
                },
                {
                    type:'Leave',
                    start_date:'01.21.22',
                    end_date:'02.33.44',
                    summary_type:5
                },
                {
                    type:'take',
                    start_date:'01.21.22',
                    end_date:'02.33.44',
                    summary_type:20
                },
                {
                    type:'take',
                    start_date:'01.21.22',
                    end_date:'02.33.44',
                    summary_type:100
                },

            ],

        check:0,
        em_id:'',
        list_em:[],
        access_token:'',
        data1:[],
        data2:[],
        data3:[],
        role_id:'',
        date_day:[],
        diff_day:0
    }
},
methods: {

},
async created(){
    const urlParams = new URLSearchParams(window.location.search);
    this.em_id = urlParams.get("emp_id")
    this.role_id = urlParams.get("role_id")

    this.access_token = localStorage.getItem("token");

        axios.get('http://localhost:5257/api/Leave/day/'+this.em_id, {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            this.data1 = res.data[0];
            })
            .catch((error) => {
            console.error(error)
            })



        axios.get('http://localhost:5257/api/Leave/dayper/'+this.em_id, {
        headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            
            this.data2 = res.data[0];
            })
            .catch((error) => {
            console.error(error)
            })


        await axios.get('http://localhost:5257/api/Leave/department/'+this.role_id, {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
            .then((res) => {
            
            this.data3 = res.data[0];

            })
            .catch((error) => {
            console.error(error)
            })


        axios.get('http://localhost:5257/api/Leave/diffdate/'+this.em_id ,{
            headers: {
                'Authorization': `token ${this.access_token}`
                }
            })
            .then((res) => {
            
            this.date_day = res.data;
            console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })



    
}

}
</script>

<style scoped>
 tr{
        border: 1px solid black;
    }
</style>