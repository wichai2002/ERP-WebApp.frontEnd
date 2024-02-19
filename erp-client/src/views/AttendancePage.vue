<template>
    <div class="container-fluid " :class="{ 'blur': isAddModalVisible }">
        <div class="row">
            <div class="col ">
                <!-- Include Sidebar component -->
                <SideBar />
            </div>
            <div class="col-10 my-2 mx-1">
                <div class="row">
                    <div class="p-2 m-2">
                        <h1 class="text-align-center py-2 mx-2" style="color: #2ECD99;">Attendance</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="input-group" style="margin-left: 2%;">
                            <input type="text" class="form-control form-control-sm col-8" v-model="searchTerm"
                                placeholder="Search Name....">
                            <input type="date" v-model="selectedDate" class="form-control form-control-sm  col"
                                placeholder="Select Date">
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-end" style="margin-right: 0%;">
                        <button class="btn btn-success mt-2 mb-2 col-4" @click="toggleAddModal">Add</button>
                    </div>
                </div>

                <!-- Display table of attendance -->
                <div class="row h-25 " style="">
                    <div class="col p-4 d-flex flex-column">
                        <div class="table-container h-25">
                            <table class="table">
                                <thead class="table-dark table-active">
                                    <tr>
                                        <th scope="col">Attendance Date</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Event</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in filteredEmployees" :key="index">
                                        <td>{{ item.date }}</td>
                                        <td>{{ item.first_name }} {{ item.last_name }}</td>
                                        <td>{{ item.time }}</td>
                                        <td>{{ item.role }}</td>
                                        <td>{{ item.event }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="col" style="margin-top: 2%; background-color: aliceblue; position: relative;">
    <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example"
        v-model="selectedMonth" style="width: 10%; position: relative; left: 90%;">
        <option disabled value="">Select a month</option>
        <option v-for="(month, index) in months" :key="index" :value="month.month_id">
            {{ month.month }}
        </option>
    </select>
    <div>
    <canvas id="myChart" ></canvas>
</div>
</div>
                    </div>


                </div>






            </div>

        </div>

    </div>
    <modal class="col" v-if="isAddModalVisible" @close="toggleAddModal">
        <div class="row"
            style="display: flex;  aborder-radius: 5px; border: 2px solid black; padding: 1%; width: 25%; background-color: white; position: absolute; left: 45%; top: 30%;">
            <form @submit.prevent="addNewData" style="width: 100%;">
                <div style="display: flex ;  justify-content: space-around;">
                    <p style="margin-right: 10%;">Name</p>
                    <input style="padding: 0%; width: 70%;" type="text" v-model="newName">
                </div>

                <div style="display: flex; align-items: center; justify-content: space-around;">
                    <p style="margin-right: 10%;">Role</p>
                    <input style="padding: 1%; width: 70%;" type="text" v-model="newRole">
                </div>
                <div style="display: flex; align-items: center; justify-content: space-around;">
                    <p style="margin-right: 10%;">Date</p>
                    <input style="padding: 1%; width: 70%;" type="date" v-model="newDate">
                </div>
                <div style="display: flex; align-items: center; justify-content: space-around;">
                    <p style="margin-right: 10%;">Time</p>
                    <input style="padding: 1%; width: 70%;" type="text" v-model="newTime">
                </div>
                <div style="width: 100%; display: flex; align-items: center;">
                    <p style="margin-right: 10%; margin-left: 3.5%;">Event</p>
                    <div style="width: 100%;display: flex; justify-content: space-around;">
                        <div style="display: flex; align-items: center; ">
                            <input style="padding: 1%;" type="checkbox" name="In" value="In" v-model="newEvent">
                            <label style="margin-left: 5px;" for="In">In</label>
                        </div>
                        <div style="display: flex; align-items: center; ">
                            <input style="padding: 1%;" type="checkbox" name="Out" value="Out" v-model="newEvent">
                            <label style="margin-left: 5px;" for="Out">Out</label>
                        </div>

                    </div>
                </div>

                <div style="display: flex; justify-content: space-around; margin-top: 10%;">
                    <button style="width: 40%;" type="submit">Submit</button>
                    <button style="width: 40%;" type="submit">Cancel</button>
                </div>
            </form>
        </div>
    </modal>
</template>
<script>
import SideBar from "../components/NavigationBar.vue";
import moment from 'moment';
import Chart from 'chart.js/auto';

export default {
    components: {
        SideBar
    },
    data() {
        return {
            isAddModalVisible: false,
            newName: "",
            newRole: "",
            newDate: "",
            newTime: "",
            newEvent: "",
            selectedMonth: '',
            department_id: 1001,
            months: [
                {
                    "month_id": 2,
                    "month": "Jan"
                },
                {
                    "month_id": 3,
                    "month": "Feb"
                },
                {
                    "month_id": 4,
                    "month": "Mar"
                },
                {
                    "month_id": 5,
                    "month": "Apr"
                },
                {
                    "month_id": 6,
                    "month": "May"
                },
                {
                    "month_id": 7,
                    "month": "Jun"
                },
                {
                    "month_id": 8,
                    "month": "Jul"
                },
                {
                    "month_id": 9,
                    "month": "Aug"
                },
                {
                    "month_id": 10,
                    "month": "Sep"
                },
                {
                    "month_id": 11,
                    "month": "Oct"
                },
                {
                    "month_id": 12,
                    "month": "Nov"
                },
                {
                    "month_id": 13,
                    "month": "Dec"
                },


            ],

            emp_info: [
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Jonny",
                    "last_name": "stonerr",
                    "role": "chef",
                    "email": "jondsfgh@email.com",
                    "role_id": 1001,
                    "event": "In",
                    "time": "09.00",
                    "date": "04/12/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Jonny",
                    "last_name": "stonerr",
                    "role": "chef",
                    "email": "jondsfgh@email.com",
                    "role_id": 1001,
                    "event": "In",
                    "time": "09.00",
                    "date": "04/05/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Jonh",
                    "last_name": "stone",
                    "role": "chef",
                    "email": "jonh@email.com",
                    "role_id": 1001,
                    "event": "In",
                    "time": "09.00",
                    "date": "04/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Jonh",
                    "last_name": "stone",
                    "role": "chef",
                    "email": "jonh@email.com",
                    "role_id": 1001,
                    "event": "Out",
                    "time": "15.00",
                    "date": "04/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Klye",
                    "last_name": "Walker",
                    "role": "IT Support",
                    "email": "Klye@email.com",
                    "role_id": 1001,
                    "event": "In",
                    "time": "09.00",
                    "date": "05/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Phile",
                    "last_name": "Foden",
                    "role": "Cashier",
                    "email": "Foden@email.com",
                    "role_id": 1001,
                    "event": "In",
                    "time": "10.00",
                    "date": "05/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Phile",
                    "last_name": "Foden",
                    "role": "Cashier",
                    "email": "Foden@email.com",
                    "role_id": 1001,
                    "event": "Out",
                    "time": "15.30",
                    "date": "05/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Klye",
                    "last_name": "Walker",
                    "role": "IT Support",
                    "email": "Klye@email.com",
                    "role_id": 1001,
                    "event": "Out",
                    "time": "17.00",
                    "date": "05/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Luka",
                    "last_name": "Ku",
                    "role": "Maintenance",
                    "email": "Klye@email.com",
                    "role_id": 1001,
                    "event": "in",
                    "time": "10.00",
                    "date": "06/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Luka",
                    "last_name": "Modric",
                    "role": "Chef",
                    "email": "Klye@email.com",
                    "role_id": 1001,
                    "event": "in",
                    "time": "9.00",
                    "date": "06/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Luka",
                    "last_name": "Ku",
                    "role": "Maintenance",
                    "email": "Klye@email.com",
                    "role_id": 1001,
                    "event": "Out",
                    "time": "17.00",
                    "date": "06/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Luka",
                    "last_name": "Modric",
                    "role": "Chef",
                    "email": "Klye@email.com",
                    "role_id": 1001,
                    "event": "Out",
                    "time": "18.00",
                    "date": "06/01/2024"
                },
                {
                    "emp_gen_id": 10000001,
                    "first_name": "Luke",
                    "last_name": "Ric",
                    "role": "Rider",
                    "email": "Klsdfye@email.com",
                    "role_id": 1001,
                    "event": "In",
                    "time": "09.00",
                    "date": "06/02/2024"
                },



            ],
            searchTerm: '',
            selectedDate: ''
        };
    },
    computed: {
        filteredEmployees() {
            // Filtering employees based on search term
            const filteredList = this.emp_info.filter(employee =>
                (employee.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    employee.last_name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
                (this.selectedDate === '' || moment(employee.date, "DD/MM/YYYY").format("YYYY-MM-DD") === this.selectedDate)
            );

            // Sort the filtered list by date and time
            return filteredList.sort((a, b) => {
                // Compare dates
                const dateA = moment(a.date, "DD/MM/YYYY").format("YYYY-MM-DD");
                const dateB = moment(b.date, "DD/MM/YYYY").format("YYYY-MM-DD");
                if (dateA !== dateB) {
                    return dateA.localeCompare(dateB);
                }

                // If dates are equal, compare times
                return moment(a.time, "HH:mm").diff(moment(b.time, "HH:mm"));
            });
        }
    },
    watch: {
        selectedMonth: function (newMonthId) {
            if (newMonthId !== '') {
                this.updateChartForSelectedMonth(newMonthId);
            }
        }
    },
    methods: {
        toggleAddModal() {
            this.isAddModalVisible = !this.isAddModalVisible;
        },
        addNewData() {
            // เพิ่มข้อมูลใหม่ลงในฐานข้อมูลหรือระบบของคุณ
            // axios.post("/api/users", {
            //   name: this.newName,
            //   age: this.newRole,
            // });

            // ปิดป๊อปอัพ
            this.isAddModalVisible = false;

            // แสดงข้อความหรือรีเฟรชข้อมูล
        },
        updateChartForSelectedMonth(monthId) {
            // Filter the attendance data for the selected month
            const filteredData = this.emp_info.filter(item => {
                const monthIndex = parseInt(monthId) - 1; // Month IDs are 1-indexed
                const dateParts = item.date.split('/');
                const itemMonth = parseInt(dateParts[1], 10);
                return itemMonth === monthIndex;
                // console.log(itemMonth);
                // console.log(monthIndex);
            });

            // Count the number of employees for each day of the month
            const attendanceCounts = new Array(31).fill(0);
            filteredData.forEach(employee => {
                if (employee.event === 'In') {
                    const dateParts = employee.date.split('/');
                    const dayOfMonth = parseInt(dateParts[0], 10);
                    attendanceCounts[dayOfMonth - 1]++;
                }
            });

            // Update the chart data
            this.updateChart(attendanceCounts);
        },

        updateChart(attendanceCounts) {
            const ctx = document.getElementById('myChart').getContext('2d');
            if (this.myChart) {
                this.myChart.destroy(); // Destroy the existing chart instance
            }
            this.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Array.from({ length: 31 }, (_, i) => i + 1),
                    datasets: [{
                        label: 'Number of Employees',
                        data: attendanceCounts,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        }
    },

    mounted() {

        this.updateChartForSelectedMonth(this.selectedMonth);
    }
}
</script>

<style scoped>
thead {
    background-color: blue !important;
}

.table-container {
    margin-top: 2%;
    max-height: 60%;
    overflow-y: auto;

}

.table {
    height: 100%;

}

.blur {
    filter: blur(1.5px);
    /* ปรับค่า filter: blur(5px); ตามความต้องการ */
    transition: filter 0.1s ease;
    /* ปรับค่าความเร็วของ transition ตามความต้องการ */
}

.container02 {
    background-color: aliceblue;
    width: 50%;
    height: 100%;
    border: 1px solid red;
}
</style>