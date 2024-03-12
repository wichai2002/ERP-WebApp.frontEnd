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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Recuitment</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    <div class="col p-4">
                        <table class="table " style="text-align: center;">
                            <thead class="table-dark table-active">
                                <tr>
                                    <th scope="col">Application date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Birth</th>
                                    <th scope="col">Resume</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in applicant" :key="index">
                                    <!-- <th scope="row">1</th> -->
                                    <td>{{ item.application_date }}</td>
                                    <td>
                                        <a :href="'/recuitment/profile/' + item.applicant_id"
                                            style="font-weight: 600; color: black;">
                                            {{ item.first_name }} {{ item.last_name }}
                                        </a>
                                    </td>
                                    <td>{{ item.role }}</td>
                                    <td>{{ item.date_of_birth }}</td>
                                    <!-- https://71pv22u6vl.execute-api.ap-southeast-2.amazonaws.com/s3-test/test-s3-20392/{filename} -->
                                    <td><a :href="'https://71pv22u6vl.execute-api.ap-southeast-2.amazonaws.com/s3-test/test-s3-20392/'+item.resume_file">Download</a></td>
                                    <td :class="{ isInterviewed: isInterviewed(item.status), isAppointmented: isAppointmented(item.status) }"
                                        style="font-weight: 600;">
                                        {{ item.status }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col mx-2">
                        <h3 style="color: #2ECD99; font-weight: 600;">APPOINTMENT FOR INTERVIEW</h3>

                        <table class="table " style="text-align: center;">
                            <thead class="table-dark table-active">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Role</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in appointments" :key="index">
                                    <!-- <th scope="row">1</th> -->
                                    <td>{{ item.first_name }} {{ item.last_name }}</td>
                                    <td>{{ item.date }} </td>
                                    <td>{{ item.time }}</td>
                                    <td>{{ item.role }}</td>
                                    <td>
                                        <button class="btn btn-success" @click="select_appilcantFunc(item);OpenCloseFun(true);">
                                            Finish
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Modal -->
                        <div class="modal fade show" id="exampleModal" tabindex="-1" v-if="OpenClose"
                            aria-labelledby="exampleModalLabel" aria-hidden="true" style="display:block">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h class="modal-title" id="exampleModalLabel">Create Appointment</h>
                                        <button type="button" class="close col-1" data-dismiss="modal" aria-label="Close"
                                            @click="OpenCloseFun(false)">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p><b>Fullname:</b> {{ applicant[0].first_name }} {{ applicant[0].last_name }}</p>
                                        <p><b>Role:</b> {{ applicant[0].role }}</p>
                                        <div class="row pb-3">
                                            <div class="col">
                                                <label for="date"><b>Hire date:</b> <input type="date" class="mx-2" v-model="hire_date"></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-7 col-mb-5 col-sm-3 d-flex">
                                                <p><b>Status</b></p>
                                                <div class="form-check form-check-inline mx-3">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                        id="inlineRadio1" :value=true v-model="select_status">
                                                    <label class="form-check-label" for="inlineRadio1">Pass</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                        id="inlineRadio2" :value=false v-model="select_status">
                                                    <label class="form-check-label" for="inlineRadio2">Not pass</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer d-flex justify-content-center row">
                                        <button type="button" class="btn btn-secondary mx-4 col-lg-5 col-mb-4 col-sm-3" data-dismiss="modal"
                                                @click="OpenCloseFun(false)">Close</button>
                                        <button type="button" class="btn btn-success col-lg-5 col-mb-4 col-sm-3" @click="announcement(select_status)">Submit</button>
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
            applicant: [],
            appointments: [],
            OpenClose: false,
            hire_date: null,
            select_appilcant: null,
            select_status: null
        }
    },
    methods: {
        isInterviewed(status) {
            return status == "Interviewed";
        },
        isAppointmented(status) {
            return status == "Appointmented";
        },
        OpenCloseFun(bool) {
            this.OpenClose = bool;
        },
        select_appilcantFunc(item){
            this.select_appilcant = item;
        },
       async announcement(status){
            if (this.select_appilcant != null){
                console.log("Check: ", this.select_appilcant);
                if (status == true){
                    if (this.hire_date != null){
                        this.select_appilcant.hire_date = this.hire_date;
                    }else{
                        alert("Someting Error At Hire Date");
                        this.hire_date = null;
                        this.select_appilcant = [];
                        this.OpenCloseFun(false);
                    }
                }

                const _env = process.env;
                const update_Announcement = await axios.put(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Applicant/Announcement/${this.select_appilcant.applicant_id}/${status}`,this.select_appilcant, {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        hrName: localStorage.getItem("hrName")
                    }
                });
                
                if (update_Announcement.status == 204){
                    alert("Announcement Seccessfuly");
                    this.hire_date = null;
                    this.select_appilcant = [];
                    this.OpenCloseFun(false);
                }
                else if (update_Announcement.status == 400){
                    alert("Someting Error At Announcement");
                    this.hire_date = null;
                    this.select_appilcant = [];
                    this.OpenCloseFun(false);
                }else if (update_Announcement.status == 401){
                    clearStore();
                }

            }
        }


    },
    created(){
        const _env = process.env;
        
        if (localStorage.getItem('token')){
            const applicant_list = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Applicant/list`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            applicant_list.then(item =>{
                if (item.status == 200){
                    this.applicant = item.data;
                    console.log(item.data);
                }else if (item.status == 401){
                    clearStore();
                }
            });

            const appointment_list = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Appoinment/list`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            appointment_list.then(item =>{
                if (item.status == 200){
                    this.appointments = item.data;
                }else if (item.status == 401){
                    clearStore();
                }
            });
        }
    }
}
</script>

<style scoped>
.isInterviewed {
    color: #097400;
}

.isAppointmented {
    color: #D0A60F;
}
</style>