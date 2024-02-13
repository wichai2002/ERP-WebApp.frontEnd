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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Traning</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    <div class="col p-2 ">
                        <div class="row p-1 mx-3 ">
                            <div class="col justify-content-end d-flex ">
                                <button class="btn btn-md btn-success">
                                    <a href="/training/create" class="text-decoration-none text-white">Add Training</a>
                                </button>
                            </div>
                        </div>
                        <div class="row p-3 mx-2">
                            <table class="table text-center">
                                <thead class="table-dark table-active">
                                    <tr>
                                        <th scope="col">Training date</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in training_list" :key="index">
                                        <td>{{ item.date }}</td>
                                        <td>{{ item.title }}</td>
                                        <td>{{ item.time_start }} - {{ item.time_end }}</td>
                                        <td>{{ item.department }}</td>
                                        <td>{{ item.amount }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
            training_list: [
                {
                    train_id: 1000,
                    title: "UP TO ENGLIST SKILL",
                    date: "2023-02-23",
                    time_start: "09.30",
                    time_end: "12.00",
                    department: "Maintanance",
                    amount: 20
                },
                {
                    train_id: 1001,
                    title: "UP TO ENGLIST SKILL",
                    date: "2023-02-24",
                    time_start: "09.30",
                    time_end: "12.00",
                    department: "FB",
                    amount: 20
                },
            ]
        }
    }
}
</script>

<style scoped></style>