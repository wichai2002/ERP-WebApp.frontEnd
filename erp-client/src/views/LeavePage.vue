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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Leave Information</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    {{ data1 }}
                    <!-- search -->
                    <div class="col-2" style="margin-left: 1%;">
                        <input type="text" placeholder="search...." class="w-100">
                    </div>

                    <!-- table -->
                    <div class="col-12 p-4">
                        <table class="table " style="text-align: center;">
                            <thead class="table-dark table-active">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">examining</th>
                                </tr>
                            </thead>
                            <tbody v-for="item in leave" :key="item">
                                <tr v-if="item.status == 0">
                                        <td><a :href="'./employeeleaveday?emp_id='+item.employee_id" style="color: black; text-decoration: none;">{{item.employee_id}}</a></td>
                                        <td>{{item.employee_name}}</td>
                                        <td>{{item.employee_role}}</td>
                                        <td>{{item.type}}</td>
                                        <td>{{item.date}}</td>
                                        <td>
                                            <button class="btn btn-success btn-sm" style="margin-right: 3%; width: 20%;" @click="confirm(item.employee_id)">Yes</button>
                                            <button class="btn btn-danger btn-sm" style="width: 20%;" @click="none_confirm(item.employee_id)">No</button>
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
import axios from 'axios';
export default {
    components: {
        SideBar
    },
    data(){
        return{
            leave: [
            {
                    employee_id: 10000000,
                    employee_name: "2023-01-20",
                    employee_role: "John",
                    type: "stone",
                    date: "2002-11-11",
                    status: "0"
                },
                {
                    employee_id: 10000001,
                    employee_name: "2023-01-20",
                    employee_role: "phil",
                    type: "Foden",
                    date: "2002-11-11",
                    status: "0"
                },
                {
                    employee_id: 10000002,
                    employee_name: "2023-01-20",
                    employee_role: "Cap",
                    type: "Foden",
                    date: "2002-11-11",
                    status: "0"
                },
                {
                    employee_id: 10000003,
                    employee_name: "2023-01-20",
                    employee_role: "Mewn",
                    type: "Foden",
                    date: "2002-11-11",
                    status: "0"
                }
            ],
            check:0,
            data1:[],
            access_token:'',
            data2:[]
        }
    },
    methods: {
        confirm(sid){
            console.log(sid);


        },
        none_confirm(sid){
            console.log(sid)

        }
    },
    async created(){


        this.access_token = localStorage.getItem("token");

        axios.get('http://localhost:5257/api/Leave/check', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            this.data1 = res.data;
            })
            .catch((error) => {
            console.error(error)
            })




    
}
    
}
</script>

<style scoped>
 tr{
        border: 1px solid black;
    }
</style>