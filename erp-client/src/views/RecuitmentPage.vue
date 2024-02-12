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
                                        <a :href="'/recuitment/profile/' + item.applicant_id" style="font-weight: 600; color: black;">
                                            {{ item.first_name }} {{ item.last_name }}
                                        </a>
                                    </td>
                                    <td>{{ item.role }}</td>
                                    <td>{{ item.birth }}</td>
                                    <td><a href="#">Download</a></td>
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
                                        <button class="btn btn-success">
                                            Finish
                                        </button>
                                    </td>
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
    data() {
        return {
            applicant: [
                {
                    applicant_id: 10000000,
                    application_date: "2023-01-20",
                    first_name: "John",
                    last_name: "stone",
                    role: "Cook",
                    birth: "2002-11-11",
                    status: "Interviewed"
                },
                {
                    applicant_id: 10000004,
                    application_date: "2023-01-20",
                    first_name: "phil",
                    last_name: "Foden",
                    role: "Cook",
                    birth: "2002-11-11",
                    status: "Interviewed"
                },
                {
                    applicant_id: 10000001,
                    application_date: "2023-01-20",
                    first_name: "Jack",
                    last_name: "Haryson",
                    role: "FB Manager",
                    birth: "2002-11-11",
                    status: "Appointmented"
                },
                {
                    applicant_id: 10000002,
                    application_date: "2023-01-20",
                    first_name: "John",
                    last_name: "Obe Mikel",
                    role: "Cook",
                    birth: "2002-11-11",
                    status: ""
                },
                {
                    applicant_id: 10000003,
                    application_date: "2023-01-20",
                    first_name: "John",
                    last_name: "stone",
                    role: "Cook",
                    birth: "2002-11-11",
                    status: ""
                },
            ],

            appointments: [
                {
                    applicant_id: 10000000,
                    first_name: "John",
                    last_name: "stone",
                    date: "2022-4-10",
                    role: "Cook",
                    status: "Appointmented",
                    time: "16.30",
                },
                {
                    applicant_id: 10000004,
                    first_name: "Kyle",
                    last_name: "Walker",
                    date: "2022-4-10",
                    role: "Cook",
                    status: "Appointmented",
                    time: "14.30",
                },
            ],
        }
    },
    methods: {
        isInterviewed(status) {
            return status == "Interviewed";
        },
        isAppointmented(status) {
            return status == "Appointmented";
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