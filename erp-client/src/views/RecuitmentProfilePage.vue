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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">RECRUITMENT PROFILE</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row p-4 mx-4 bg-light">
                    <!-- content here -->
                    <div class="col mx-4 p-1">
                        <h2 style="font-weight: 900;">Application</h2>
                        <hr>
                        <div class="row mx-1 py-2">
                            <!--  -->
                            <div class="col">
                                <img src="data:image/webp;base64,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" 
                                class="rounded float-left" alt="...">
                            </div>
                            <div class="col">
                                <h5 style="font-weight: 800;"><b>Department:</b> {{ applicant.department }}</h5>
                            </div>
                            <div class="col">
                                <h5 style="font-weight: 800;"><b>Role:</b> {{ applicant.role }}</h5>
                            </div>
                        </div>
                        <div class="row pt-3">
                            <div class="col">
                                <h2 style="font-weight: 900;">Personal Information</h2>
                                <hr>
                                <div class="row p-3">
                                    <div class="col-6">
                                        <h5 class="mb-3"><b style="font-weight: 900;">Fullname:</b> {{ applicant.first_name
                                        }} {{ applicant.last_name }}</h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">Nickname:</b> {{ applicant.nickname }}
                                        </h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">Age:</b> {{ applicant.age }}</h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">Nationality:</b> {{
                                            applicant.nationality }}</h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">Gender: </b> {{ applicant.gender }}
                                        </h5>
                                    </div>
                                    <div class="col-6">
                                        <h5 class="mb-3"><b style="font-weight: 900;">Birth Day:</b> {{
                                            applicant.date_of_birth }} </h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">Education:</b>
                                            <p>{{ applicant.education_1 }}</p>
                                            <p>{{ applicant.education_2 }}</p>
                                            <p>{{ applicant.education_3 }}</p>
                                        </h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">More about me:</b> {{
                                            applicant.aboutme }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h2 style="font-weight: 900;">Contect</h2>
                                <hr>
                                <div class="row p-3">
                                    <div class="col">
                                        <h5 class="mb-3"><b style="font-weight: 900;">Phone:</b> {{ applicant.phone }}</h5>
                                        <h5 class="mb-3"><b style="font-weight: 900;">Email:</b> {{ applicant.email }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3 d-flex justify-content-center">
                            <div class="col-lg-4 col-mb-3 col-sm-2 py-3 d-flex justify-content-center">
                                <button type="button" class="btn btn-lg bg-success text-white " data-toggle="modal"
                                    data-target="#exampleModal" @click="OpenCloseFun(true)">
                                    Add to Interview
                                </button>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade show" id="exampleModal" tabindex="-1" v-if="OpenClose"
                                aria-labelledby="exampleModalLabel" aria-hidden="true" style="display:block">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h class="modal-title" id="exampleModalLabel">Create Appointment</h>
                                            <div class="col-1">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                                    @click="OpenCloseFun(false)">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                        </div>
                                        <div class="modal-body">
                                            <p> <b>Fullname:</b> {{ applicant.first_name }} {{ applicant.last_name }}</p>
                                            <div class="row pb-3">
                                                <div class="col">
                                                    <label for="date">Select date: <input type="date"
                                                            v-model="date_appointment"></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for="time">Select time: <input type="time"
                                                            v-model="time_appointment"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer  d-flex justify-content-center">
                                            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                                @click="OpenCloseFun(false)">Close</button> -->

                                            <button type="button" @click="saveAppointment()"
                                                class="btn btn-success col-lg-3 col-mb-2 col-sm-1">Save</button>
                                        </div>
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
function clearStore() {
    localStorage.clear();
    const port = window.location.port
    window.location.href = `${process.env.VUE_APP_PROTOCAL}://${process.env.VUE_APP_HOST}:${port}/login`;
}
import axios from 'axios';
import SideBar from '../components/NavigationBar.vue';
export default {
    components: {
        SideBar
    },
    data() {
        return {
            applicant: [],
            OpenClose: false,
            date_appointment: '',
            time_appointment: ''
        }
    },
    methods: {
        OpenCloseFun(bool) {
            this.OpenClose = bool;
        },

       async saveAppointment() {
            const _env = process.env;
            if (this.date_appointment && this.time_appointment) {
                const data = {
                    date: this.date_appointment,
                    time: this.time_appointment,
                    applicant_id: this.applicant.applicant_id
                }

                const token = localStorage.getItem('token');
                const emp_gen_id = localStorage.getItem("emp_gen_id");
                const hrName = localStorage.getItem("hrName");

                if ( token && emp_gen_id && hrName) {
                    const create = await axios.post(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Appoinment/`, data, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            emp_gen_id: emp_gen_id,
                            hrName: hrName,
                        },
                    });

                    if (create.status == 201){
                        alert("Add new an appointment successful \n"+" we sended message to "+ this.applicant.first_name + " "+ this.applicant.last_name);
                        this.OpenCloseFun(false);
                    }else if (create.status == 401){
                        clearStore();
                    }else{
                        alert("Have someting wrong!!");
                    }
                }

            } else {
                alert("Error someting wrong!!")
            }
        }
    },
    created() {
        const _env = process.env;

        if (localStorage.getItem('token')) {
            const id = this.$route.params.id;
            const applicant = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Applicant/` + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    hrName: localStorage.getItem("hrName")
                }
            });

            applicant.then(item => {
                if (item.status == 200) {
                    this.applicant = item.data;
                    console.log(item.data);
                }
            });
        }
    }
}
</script>

<style scoped></style>