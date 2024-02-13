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
                                        <h5 class="mb-3"><b style="font-weight: 900;">Nickname:</b> {{ applicant.nickName }}
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
                                        <h5 class="mb-3"><b style="font-weight: 900;">Education:</b> {{ applicant.education
                                        }}</h5>
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

                        <div class="row mb-3">
                            <div class="col py-3 d-flex justify-content-center">
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
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                                @click="OpenCloseFun(false)">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Fullname: {{ applicant.first_name}} {{ applicant.last_name }}</p>
                                            <div class="row pb-3">
                                                <div class="col">
                                                    <label for="date">Select date: <input type="date"></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for="time">Select time: <input type="time"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                                @click="OpenCloseFun(false)">Close</button> -->
                                            <button type="button" class="btn btn-success">Save</button>
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
import SideBar from '../components/NavigationBar.vue';
export default {
    components: {
        SideBar
    },
    data() {
        return {
            applicant: {
                applicant_id: 10000000,
                application_date: "2023-01-20",
                first_name: "John",
                last_name: "stone",
                role: "Cook",
                department: "FB",
                age: 27,
                birth: "2002-11-11",
                status: "Interviewed",
                nationality: "English",
                gender: "male",
                date_of_birth: "1998-01-11",
                education: "Bachelor of Science Program in Information Technology",
                aboutme: "good boy",
                phone: "0982312341",
                email: "jonh@gmail.com",
                nickName: "Jonh"
            },
            OpenClose: false
        }
    },
    methods: {
        OpenCloseFun(bool) {
            this.OpenClose = bool;
        },
    },
}
</script>

<style scoped></style>