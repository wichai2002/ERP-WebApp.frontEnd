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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">EDIT TIME</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    <div class="col p-4 justify-content-center d-flex ">
                        <div class="row bg-light p-2 w-75 align-items-center border border-dark">
                            <div class="col border border-dark w-100">
                                <div class="py-3">
                                    <h3 class="text-center" style="font-weight: 800;">EDIT TIME TO WORK</h3>
                                </div>

                                <div class="row p-2">
                                   
                                        <div class="col-2 mx-2"></div>
                                        <div class="col mx-2">
                                            <label for="title input">Department
                                                <input type="text" class="input p-1 mx-3">
                                            </label>
                                        </div>
                                        
                                        <div class="col mx-2">
                                            <label for="date">Role
                                                <select class="form-select form-select-sm p-2"
                                                    aria-label=".form-select-sm example">

                                                    <option v-for="(item, index) in roles" :key="index"
                                                        :value="item.role_id">
                                                        {{ item.position }}
                                                    </option>
                                                </select>
                                            </label>
                                        </div>
                                        <div class="col-2 mx-2"></div>
                                    
                                </div>

                                <div class="row p-2 mt-2">
                                    <div class="col-2 mx-2"></div>
                                        <div class="col mx-2">
                                            <label for="time start">Time Start
                                                <input type="time" class="input mx-3">
                                            </label>
                                        </div>
                                        <div class="col mx-2">
                                            <label for="time end">Time End
                                                <input type="time" class="input mx-3">
                                            </label>
                                        </div>
                                        <div class="col-2 mx-2"></div>
                                    </div>
                                

                                <div class="row p-2 my-2">
                                    <div class="col d-flex justify-content-center mx-4">
                                        <button class="btn btn-md btn-success" style="width: 25%;">SAVE</button>
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
        }
    }

}
</script>

<style scoped></style>