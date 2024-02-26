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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Dashboard</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row m-3" style="display: flex; justify-content: space-between; height: 20%;">
                    <div class="col-sm m-2 text-align-center d-flex align-items-center rounded"
                        style="justify-content: space-around; background-color: aliceblue; width: 30%;">
                        <h4>Total Employee</h4>
                        <h4> {{ data1.length }} </h4>
                    </div>
                    <div class="col-sm m-2 text-align-center d-flex align-items-center rounded"
                        style="background-color: aliceblue; width: 30%; justify-content: space-around;">
                        <h4>Today's Attendance</h4>
                        <h4>20</h4>
                    </div>
                    <div class="col-sm m-2 text-align-center d-flex align-items-center rounded"
                        style="background-color: aliceblue; width: 30%; justify-content: space-around;">
                        <h4>On Leave</h4>
                        <h4>19</h4>
                    </div>
                </div>
                <div class="row m-3 d-flex" style="display: flex; justify-content: space-between; height: 72%;">
                    <div class="col-3 rounded p-2"
                        style="margin-left: 1%; margin-top: 3%; background-color: aliceblue; width: 30%;">
                        <h2 style="font-weight: 700;">Department</h2>

                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #C1EAB3; justify-content: space-around; height: 18%; ">

                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">FB</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(9.00-12.00)</h4>
                            </div>
                            <div>
                                <h4>68</h4>
                            </div>

                        </div>
                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #F5D6A8;  justify-content: space-around; height: 18%;">
                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">Reception</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(8.00-16.00)</h4>
                            </div>
                            <div>
                                <h4>70</h4>
                            </div>
                        </div>
                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #DEB6D3;  justify-content: space-around; height: 18%;">
                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">House-Keeping</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(09.00-18.00)</h4>
                            </div>
                            <div>
                                <h4 style="">80</h4>
                            </div>
                        </div>
                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #BBB6DE; justify-content: space-around; height: 18%;">
                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">Maintenance</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(08.00-20.00)</h4>
                            </div>
                            <div style="">
                                <h4>48</h4>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mx-2">
                            <button class="btn btn-success w-25"><router-link to="edittime"
                                    class="nav-link">Edit</router-link></button>
                        </div>
                    </div>
                    <div class="col rounded p-2"
                        style=" margin-left: 1%; margin-top: 3%; background-color: rgb(255, 255, 255); width: 30%; height: 100%;">
                        <p style="font-size: 20px;">last 6 months report</p>
                        <div>

                            <canvas id="myChart"></canvas>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/NavigationBar.vue';
import Chart from 'chart.js/auto';
import axios from 'axios';
export default {
    components: {
        SideBar
    },
    data() {
        return {
            data1: []
        }
    },
    methods: {

        goToDepartment() {
            this.$router.push('/department');
        },
    },
    mounted() {
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Feb', 'Mar', 'May', 'Apr', 'Jul', 'Aug'],
                datasets: [{
                    label: '# of Peoples',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: 'purple', // เพิ่ม property borderColor และกำหนดค่าเป็นสีม่วง
                    borderWidth: 1,
                    lineTension: 0.5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }

        });
        myChart;

    },
    async created() {


        this.access_token = localStorage.getItem("token");

        axios.get('http://localhost:5257/api/Emp_general_information', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                this.data1 = res.data;
                console.log(this.data1.length)
            })
            .catch((error) => {
                console.error(error)
            }),

            axios.get('http://localhost:5257/api/Emp_general_information', {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then((res) => {
                    console.log(res.data)
                    this.data1 = res.data;
                    console.log(this.data1.length)
                })
                .catch((error) => {
                    console.error(error)
                })
    }
}

        

</script>

<style scoped></style>
