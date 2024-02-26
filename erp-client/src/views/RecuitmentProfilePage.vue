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
                    Authorization: `Bearer ${localStorage.getItem("token")}`
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