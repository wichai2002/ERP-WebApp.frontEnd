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
                            <tbody v-for="item in data1" :key="item">
                                <tr v-if="item._per.status == 0">
                                        <td><a :href="'./employeeleaveday?emp_id='+item._gen.emp_gen_id+'&role_id='+item._gen.role_id" style="color: black; text-decoration: none;">{{item._gen.emp_gen_id}}</a></td>
                                        <td>{{item._gen.first_name}} {{item._gen.last_name}}</td>
                                        <td>{{item.role_name}}</td>
                                        <td>{{item._per.type}}</td>
                                        <td>{{item._per.start_leave}} - {{item._per.end_leave}}</td>
                                        <td>
                                            <button class="btn btn-success btn-sm" style="margin-right: 3%; width: 24%;" @click="confirm(item._gen.emp_gen_id,item._per.leave_req_number,item._per.type)">Yes</button>
                                            <button class="btn btn-danger btn-sm" style="width: 24%;" @click="none_confirm(item._gen.emp_gen_id,item._per.leave_req_number,item._per.type)">No</button>
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
            data2:[],
            cc: 0

        }
    },
    methods: {
        confirm(sid,rid,typ){
            
            
            if (typ == 'sick_leave'){
                this.cc = 4
            }
            else if(typ=='personal_leave'){
                this.cc = 5
            }
            else{
                this.cc = 6
            }
            console.log(sid,rid,typ,this.cc);

            axios.put('http://localhost:5257/api/Leave/confirm/'+sid+'/'+rid+'/'+this.cc+'/1', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            alert("Ok")
            
        },
        none_confirm(sid,rid,typ){
            console.log(sid)
            axios.put('http://localhost:5257/api/Leave/confirm/'+sid+'/'+rid+'/'+typ+'/2', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            alert("sad")

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