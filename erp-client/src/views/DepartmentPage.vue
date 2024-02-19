<template>
    <div class="container-fluid">
        <div class="row">
            <!-- <SideBar /> -->
            <div class="col">
                <SideBar />
            </div>
            <div class="col-10 my-2 mx-1">
                <div class="row">
                    <div class="col">
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">FB</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 px-3 mx-1">
                        <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example">
                            <option selected>Open this select menu</option>
                            <option v-for="(item, index) in roles" :key="index" :value="item.role_id">
                                {{ item.position}}
                            </option>
                        </select>
                    </div>
                    <div class="col d-flex flex-row-reverse mx-2 text-white">
                        <h4>Number of people: {{ emp_info.length }} people</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col p-4">
                        <table class="table">
                            <!-- blue-800 -->
                            <thead class="table-dark table-active">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">E-MAIL</th>
                                    <th scope="col">Hire-Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in emp_info" :key="index">
                                    <!-- <th scope="row">1</th> -->
                                    <td>{{ item.emp_gen_id }}</td>
                                    <td>{{ item.first_name  }} {{ item.last_name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.hire_date }}</td>
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
import SideBar from "../components/NavigationBar.vue";
export default {
    components: {
        SideBar
    },
    data() {
        return {
            department_id: 1001,
            roles: [
                {
                    "role_id": 101,
                    "position": "Cook",
                    "department_id": 1003,
                    "start_work": "5.30",
                    "finish_work": "15.30"
                },
                {
                    "role_id": 102,
                    "position": "Steward",
                    "department_id": 1003,
                    "start_work": "6.30",
                    "finish_work": "15.30"
                },
                {
                    "role_id": 103,
                    "position": "Chef",
                    "department_id": 1003,
                    "start_work": "7.00",
                    "finish_work": "16.00"
                },
                {
                    "role_id": 104,
                    "position": "CookHelper",
                    "department_id": 1003,
                    "start_work": "5.30",
                    "finish_work": "15.30"
                },
                {
                    "role_id": 105,
                    "position": "CleanerCook",
                    "department_id": 1003,
                    "start_work": "6.30",
                    "finish_work": "15.30"
                },
                {
                    "role_id": 111,
                    "position": "SousChef",
                    "department_id": 1003,
                    "start_work": "7.00",
                    "finish_work": "16.00"
                },
                {
                    "role_id": 112,
                    "position": "Waiter /Waitress",
                    "department_id": 1001,
                    "start_work": "6.00",
                    "finish_work": "15.00"
                },
                {
                    "role_id": 113,
                    "position": "FB Manager",
                    "department_id": 1001,
                    "start_work": "7.00",
                    "finish_work": "16.00"
                },
                {
                    "role_id": 114,
                    "position": "Captain(FB)",
                    "department_id": 1001,
                    "start_work": "6.00",
                    "finish_work": "15.00"
                },
                {
                    "role_id": 115,
                    "position": "Bartender",
                    "department_id": 1001,
                    "start_work": "6.00",
                    "finish_work": "15.00"
                },
                {
                    "role_id": 116,
                    "position": "Room Service",
                    "department_id": 1001,
                    "start_work": "6.00",
                    "finish_work": "15.00"
                },
                {
                    "role_id": 117,
                    "position": "Cashier(FB)",
                    "department_id": 1001,
                    "start_work": "6.00",
                    "finish_work": "15.00"
                },
                {
                    "role_id": 118,
                    "position": "Maintenance Manager",
                    "department_id": 1004,
                    "start_work": "7.00",
                    "finish_work": "16.00"
                },
                {
                    "role_id": 119,
                    "position": "Maintenance Engineer",
                    "department_id": 1004,
                    "start_work": "7.00",
                    "finish_work": "16.00"
                },
                {
                    "role_id": 120,
                    "position": "IT Support",
                    "department_id": 1004,
                    "start_work": "7.00",
                    "finish_work": "16.00"
                },
                {
                    "role_id": 121,
                    "position": "Reception",
                    "department_id": 1002,
                    "start_work": "6.00",
                    "finish_work": "15.00"
                },
                {
                    "role_id": 122,
                    "position": "Cook(Night)",
                    "department_id": 1003,
                    "start_work": "15.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 123,
                    "position": "Steward(Night)",
                    "department_id": 1003,
                    "start_work": "15.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 124,
                    "position": "Chef(Night)",
                    "department_id": 1003,
                    "start_work": "16.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 125,
                    "position": "CleanerCook(Night)",
                    "department_id": 1003,
                    "start_work": "16.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 126,
                    "position": "Waiter /Waitress (Night)",
                    "department_id": 1001,
                    "start_work": "15.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 127,
                    "position": "Maintenance Engineer (Night)",
                    "department_id": 1004,
                    "start_work": "16.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 128,
                    "position": "Reception(Night)",
                    "department_id": 1002,
                    "start_work": "15.00",
                    "finish_work": "23.30"
                },
                {
                    "role_id": 129,
                    "position": "Captain(FB-Night)",
                    "department_id": 1001,
                    "start_work": "15.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 130,
                    "position": "Room Service(Night)",
                    "department_id": 1001,
                    "start_work": "15.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 131,
                    "position": "Bartender(Night)",
                    "department_id": 1001,
                    "start_work": "15.00",
                    "finish_work": "23.00"
                },
                {
                    "role_id": 132,
                    "position": "IT Support(Night)",
                    "department_id": 1004,
                    "start_work": "17.00",
                    "finish_work": "00.30"
                },
                {
                    "role_id": 133,
                    "position": "Cashier(FB-Night)",
                    "department_id": 1001,
                    "start_work": "16.00",
                    "finish_work": "23.00"
                }
            ],
            emp_info: [
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Jonh",
                    "last_name": "stone",
                    "hire_date": "2021-01-22",
                    "email":"jonh@email.com",
                    "role_id": 1001
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Phile",
                    "last_name": "Foden",
                    "hire_date": "2021-02-02",
                    "email":"Foden@email.com",
                    "role_id": 1001
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Klye",
                    "last_name": "Walker",
                    "hire_date": "2021-03-09",
                    "email":"Klye@email.com",
                    "role_id": 1001
                },

            ],
            
        };
    }
}
</script>

<style scoped>
thead {
    background-color: blue !important;
}
</style>