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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Employees Infomations</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->

                     <!-- search -->
                     <div class="col-2" style="margin-left: 1%;">
                        <input type="text" placeholder="search...." class="w-100">
                    </div>

                    <div class="col-2" style="margin-left: 60%;">
                        <label class="switch">
                            <input type="checkbox" @click="change_status()">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    

                    <!-- table -->
                    <div class="col-12 p-4">
                        <table class="table " style="text-align: center;">
                            <thead class="table-dark table-active">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Join-Date</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody v-for="item in em_info" :key="item">
                                <tr v-if="sta == 0" v-show="item.status == 'Actived'">
                                        <td><a :href="'./employeeedit?emp_id='+item.employee_id" style="color: black; text-decoration: none;">{{item.employee_id}}</a></td>
                                        <td>{{item.employee_name}}</td>
                                        <td>{{item.Email}}</td>
                                        <td>{{item.employee_role}}</td>
                                        <td>{{item.date}}</td>
                                        <td style="color: #2ECD99;">{{ item.status }}</td>
                                </tr>
                                <tr v-else  v-show="item.status == 'Termination'">
                                        <td><a :href="'./employeeedit?emp_id='+item.employee_id" style="color: black; text-decoration: none;">{{item.employee_id}}</a></td>
                                        <td>{{item.employee_name}}</td>
                                        <td>{{item.Email}}</td>
                                        <td>{{item.employee_role}}</td>
                                        <td>{{item.date}}</td>
                                        <td style="color: red;">{{ item.status }}</td>
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
            em_info: [
            {
                    employee_id: 10000000,
                    employee_name: "aaaa",
                    employee_role: "John",
                    Email:'eae@gmail.com',
                    date: "2002-11-11",
                    status: "Actived"
                },
                {
                    employee_id: 10000001,
                    employee_name: "dddd",
                    employee_role: "phil",
                    date: "2002-11-11",
                    Email:'eae@gmail.com',
                    status: "Termination"
                },
                {
                    employee_id: 10000002,
                    employee_name: "ccccc",
                    employee_role: "Cap",
                    Email:'eae@gmail.com',
                    date: "2002-11-11",
                    status: "Termination"
                },
                {
                    employee_id: 10000003,
                    employee_name: "kkkk",
                    employee_role: "Mewn",
                    Email:'eae@gmail.com',
                    date: "2002-11-11",
                    status: "Actived"
                }
            ],
            check:0,
            sta:0
        }
    },
    methods: {
        change_status(){
            this.check += 1;
            if (this.check % 2 == 0){
                this.sta = 0
            }
            else{
                this.sta = 1
            }
            console.log(this.sta);
        }
    },
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0bc13b;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(255, 255, 255);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #e71717;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>