<template>
    <div class="container-fluid">
        <div class="row">
            <!-- <SideBar /> -->
            <div class="col">
                <SideBar />
            </div>
            <div class="col-10 my-2 my-1">
                <div class="row">

                            <div class="col-8">
                                <h1 class="text-align-center py-2 mx-2" style="color: #2ECD99;">Payroll</h1>
                            </div>
                            <div class="col-2 py-3" style="margin-left: 10%;">
                                <input type="text" placeholder="search...." class="w-110 h-90 py-1 mx-4">
                            </div>
                        <hr style="color: aliceblue;">

                </div>
                <div class="row">
                    <!-- content here -->

                    <div class="col-12 p-4" style="overflow-x: auto; overflow-y: auto; max-height: 40rem; margin-bottom: 5rem;">     
                        <table class="table " style="text-align: center;">
                            <thead class="table-dark table-active"> 
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">DATE</th>
                                    <th scope="col">BASE SALARY</th>
                                    <th scope="col">SALARY</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr v-for="item in data_all" :key="item" style="border: 1px solid black;">
                                        <td>{{item.id}}</td>
                                        <td>{{item.fullname}}</td>
                                        <td>{{item.position}}</td>
                                        <td>{{ item.pay_date }}</td>
                                        <td>{{item.baseSalary}}</td>
                                        <td>{{item.salaryPeo}}</td>
                                    </tr>
                                <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <a href="/editpayroll"><button class="btn btn-warning"><b>EDIT</b></button></a>
                                        </td>
                                </tr>



                            </tbody>
                        </table>
                    </div>

                    <div class="col-11 bg-white  mx-4 py-4"  style="overflow-x: auto; overflow-y: auto; max-height: 40rem; margin-bottom: 5rem; border-radius: 5px;">
                        <div class="mx-2">
                            <h4><b>PAYROLL AVERAGE</b></h4>
                        </div>

                        <div>
                            <table class="table " style="text-align: center;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgb(93, 92, 92);">
                                        <th scope="col">ROLES</th>
                                        <th scope="col">AMOUNT</th>
                                        <th scope="col">SALARY BASE</th>
                                        <th scope="col">MAX SALARY</th>
                                        <th scope="col">MIN SALARY</th>
                                        <th scope="col">SALARY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr v-for="item in data3" :key="item" style="border: opx solid white;">
                                            <td>{{item.roleName}}</td>
                                            <td>{{item.countPeo}}</td>
                                            <td>{{item.baseSalary}}</td>
                                            <td>{{item.maxSalary}}</td>
                                            <td>{{item.minSalary}}</td>
                                            <td>{{item.sumSalary}}</td>
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
import axios from 'axios';
export default {
    components: {
        SideBar
    },
    data(){
        return{
            payroll:[
                {
                    emp_id:'1000000',
                    Name:'CAptain pang',
                    Role:'Member',
                    pay_date:'12.22.22',
                    base_salary:'32000',
                    salary:'30000'
                },
                {
                    emp_id:'1000001',
                    Name:'CAptain pang',
                    Role:'Member',
                    pay_date:'12.22.22',
                    base_salary:'32000',
                    salary:'31000'
                },
                {
                    emp_id:'1000002',
                    Name:'CAptain pang',
                    Role:'Member',
                    pay_date:'12.22.22',
                    base_salary:'32000',
                    salary:'20000'
                },
                {
                    emp_id:'1000003',
                    Name:'CAptain pang',
                    Role:'Member',
                    pay_date:'12.22.22',
                    base_salary:'32000',
                    salary:'29000'
                },
                {
                    emp_id:'1000004',
                    Name:'CAptain pang',
                    Role:'Member',
                    pay_date:'12.22.22',
                    base_salary:'32000',
                    salary:'33000'
                },

            ],
            role_pay:[
                {
                    role:'FB',
                    Amount:20,
                    salary_base:290112,
                    discount:1200,
                    max_salary:30000,
                    min_salary:25000,
                    salary:32000
                },
                {
                    role:'RECEPTION',
                    Amount:30,
                    salary_base:290112,
                    discount:1200,
                    max_salary:30000,
                    min_salary:25000,
                    salary:32000
                },
                {
                    role:'HOUSE-KEEPING',
                    Amount:50,
                    salary_base:290112,
                    discount:1200,
                    max_salary:30000,
                    min_salary:25000,
                    salary:32000
                },
                {
                    role:'MAINTAINENCE',
                    Amount:60,
                    salary_base:290112,
                    discount:1200,
                    max_salary:30000,
                    min_salary:25000,
                    salary:32000
                }
            ],
            data_all:[],
            data3:[],
            access_token:'',
        }
        
    },
    async created() {
            this.access_token = localStorage.getItem("token");

            axios.get('http://localhost:5257/api/Payroll', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            this.data_all = res.data.all;
            this.data3 = res.data.count;
            })
            .catch((error) => {
            console.error(error)
            })
        },
}
</script>

<style scoped>
</style>