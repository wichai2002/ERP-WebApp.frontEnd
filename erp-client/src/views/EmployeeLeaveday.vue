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

                    <div class="col-4 bg-white my-4" style="border: 1px solid black; height: 10rem; width: 30%; align-items: center; justify-content: center; margin-left: 30%;">
                        
                    </div>
                </div>

                <!-- table summary -->
                <div class="col-12 p-4">
                        <div class="col">
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">sdf</h1>
                        </div>
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
                                <!-- :href="'./detailListwork.html?per_id='+items.personal_infoID" -->
                                    <td><a :href="'#'" style="color: black; text-decoration: none;">{{item.employee_id}}</a></td>
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
        check:0
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

}
</script>

<style scoped>
</style>