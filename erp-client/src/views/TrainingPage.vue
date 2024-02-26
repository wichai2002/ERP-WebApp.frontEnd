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
                        <div class="row p-1 mx-3 d-flex justify-content-end ">
                            <div class="col-lg-3 col-mb-2 col-sm-2">
                                <a href="/training/create" class="text-decoration-none text-white">
                                    <button class="btn btn-md btn-success">
                                        Add Training
                                    </button>
                                </a>

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
                                        <!-- <th scope="col">Amount</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in training_list" :key="index">
                                        <td>{{ item.date }}</td>
                                        <td>{{ item.title }}</td>
                                        <td>{{ item.time }}</td>
                                        <td>{{ item.department_name }}</td>
                                        <!-- <td>{{ item.amount }}</td> -->
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
import axios from 'axios';
import SideBar from '../components/NavigationBar.vue';
export default {
    components: {
        SideBar
    },
    data() {
        return {
            training_list: []
        }
    },
    created() {
        const _env = process.env;
        const training_list = axios.get(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Training/list`);

        training_list.then(item => {
            if (item.status == 200) {
                this.training_list = item.data
            }
        })
    }
}
</script>

<style scoped></style>