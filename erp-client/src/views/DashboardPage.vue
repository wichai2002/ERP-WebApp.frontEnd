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
                        <h4>{{ attendatatoday.length }}</h4>
                    </div>
                    <div class="col-sm m-2 text-align-center d-flex align-items-center rounded"
                        style="background-color: aliceblue; width: 30%; justify-content: space-around;">
                        <h4>On Leave</h4>
                        <h4>{{ leavedata.length }}</h4>
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
                                <h4>{{ fbData.length }}</h4>
                            </div>

                        </div>
                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #F5D6A8;  justify-content: space-around; height: 18%;">
                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">Reception</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(8.00-16.00)</h4>
                            </div>
                            <div>
                                <h4>{{ recepData.length }}</h4>
                            </div>
                        </div>
                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #DEB6D3;  justify-content: space-around; height: 18%;">
                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">House-Keeping</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(09.00-18.00)</h4>
                            </div>
                            <div>
                                <h4 style="">{{ houseData.length }}</h4>
                            </div>
                        </div>
                        <div @click="goToDepartment" class="mx-2 my-3 p-2 rounded d-flex align-items-center"
                            style="cursor: pointer; background-color: #BBB6DE; justify-content: space-around; height: 18%;">
                            <div>
                                <h4 style="font-size: 21px; font-weight: 700;">Maintenance</h4>
                                <h4 style="font-size: 21px; font-weight: 700;">(08.00-20.00)</h4>
                            </div>
                            <div style="">
                                <h4>{{ mainData.length }}</h4>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mx-2">
                            <button class="btn btn-success w-25"><router-link to="edittime"
                                    class="nav-link">Edit</router-link></button>
                        </div>
                    </div>
                    <div class="col rounded p-2"
                        style=" margin-left: 1%; margin-top: 3%; background-color: rgb(255, 255, 255); width: 30%; height: 100%;">
                        <p style="font-size: 20px;">last attendance 6 months report</p>
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
            data1: [],
            data2: [],
            fbData: [],
            recepData: [],
            houseData: [],
            mainData: [],
            leavedata: [],
            attendata: [],
            attendatatoday: [],
        }
    },
    async created() {


        this.access_token = localStorage.getItem("token");

        axios.get('http://localhost:5257/api/Emp_general_information', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
        })
            .then((res) => {

                this.data1 = res.data;
              
            })
            .catch((error) => {
                console.error(error)
            }),

            axios.get('http://localhost:5257/api/Emp_general_information/withRoles', {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then((res) => {

                    this.data2 = res.data;

                    this.fbData = this.data2.filter(item => item.department_id === 1001);
                    this.recepData = this.data2.filter(item => item.department_id === 1002);
                    this.houseData = this.data2.filter(item => item.department_id === 1003);
                    this.mainData = this.data2.filter(item => item.department_id === 1004);


                })
                .catch((error) => {
                    console.error(error)
                }),
            axios.get('http://localhost:5257/api/Leave', {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then((res) => {

                    this.leavedata = res.data;

                })
                .catch((error) => {
                    console.error(error)
                }),
            axios.get('http://localhost:5257/api/Attendance', {
                headers: {
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then((res) => {
                    const today = new Date();
                    const formattedToday = today.toISOString().substring(0, 10); // วันที่ปัจจุบัน
                   
                    this.attendata = res.data;
                    // กรองข้อมูลเฉพาะวันที่ปัจจุบัน
                    this.attendatatoday = this.attendata.filter(item => {
                        const itemDate = new Date(item.date); // แปลงวันที่ในข้อมูลเป็นวัตถุ Date
                        const itemFormattedDate = itemDate.toISOString().substring(0, 10); // แปลงเป็นรูปแบบของวันที่เหมือนกับ formattedToday
                        return itemFormattedDate === formattedToday;
                    });

                    // หลังจากโหลดข้อมูลเสร็จสิ้น ทำการสร้างกราฟ
                    this.createChart();
                })
                .catch((error) => {
                    console.error(error);
                });
    },
    methods: {
        goToDepartment() {
            this.$router.push('/department');
        },
        createChart() {
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [], // เก็บชื่อเดือนที่จะแสดงบนกราฟ
                    datasets: [{
                        label: 'Attendance',
                        data: [], // เก็บจำนวนการเข้างานในแต่ละเดือน
                        borderColor: 'purple',
                        borderWidth: 3,
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

            // กรองข้อมูลเฉพาะ 6 เดือนย้อนหลัง
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5); // 6 เดือนที่แล้ว
            const filteredData = this.attendata.filter(item => new Date(item.date) >= sixMonthsAgo);

            // แปลงข้อมูลเดือนในรูปแบบ 'MMM' (เดือนที่แสดงในกราฟ)
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const months = [];
            const attendanceCount = [];

            // วนลูปเพื่อสร้างข้อมูลสำหรับกราฟ
            for (let i = 0; i < 6; i++) {
                const currentDate = new Date();
                currentDate.setMonth(currentDate.getMonth() - i);
                const currentMonth = currentDate.getMonth();
                const label = monthNames[currentMonth];
                const dataOfMonth = filteredData.filter(item => new Date(item.date).getMonth() === currentMonth);
                const count = dataOfMonth.length;

                months.unshift(label); // เพิ่มเดือนลงในอาร์เรย์ให้เรียงตามลำดับ
                attendanceCount.unshift(count); // เพิ่มจำนวนการเข้างานลงในอาร์เรย์ให้เรียงตามลำดับ
            }

            // อัปเดตข้อมูลใน Chart.js
            myChart.data.labels = months;
            myChart.data.datasets[0].data = attendanceCount;
            myChart.update();
        }
    }
}


</script>

<style scoped></style>
