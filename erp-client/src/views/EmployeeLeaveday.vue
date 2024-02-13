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
                               <h5 style="margin-bottom: 20px;">{{em_info.employee_name}}</h5>
                               <h5 style="margin-bottom: 20px;">{{em_info.department}}</h5>
                               <h5 style="margin-bottom: 20px;">{{ em_info.employee_role }}</h5>
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
                                <td v-if="day.sick_leave >= 30" style="color: red;">{{day.sick_leave}}/30</td>
                                <td v-if="day.sick_leave < 30">{{day.sick_leave}}/30</td>
                            </tr>
                            <tr>
                                <td>Leave of absence</td>
                                <td v-if="day.Leave_of_absence < 30">{{day.Leave_of_absence}}/30</td>
                                <td v-if="day.Leave_of_absence >= 30" style="color: red;">{{day.Leave_of_absence}}/30</td>
                            </tr>
                            <tr>
                                <td>take annual leave</td>
                                <td style="color: red;" v-if="day.take_annual_leave >= 30">{{day.take_annual_leave}}/30</td>
                                <td  v-if="day.take_annual_leave < 30">{{day.take_annual_leave}}/30</td>
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
                        <tbody v-for="item in leave" :key="item">
                            <tr >
                                    <td>{{item.type}}</td>
                                    <td>{{item.start_date}}</td>
                                    <td>{{item.end_date}}</td>
                                    <td>{{item.summary_type}}</td>
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
        list_em:[]
    }
},
methods: {

},
async created(){
    const urlParams = new URLSearchParams(window.location.search);
    this.em_id = urlParams.get("emp_id")

    
}

}
</script>

<style scoped>
 tr{
        border: 1px solid black;
    }
</style>