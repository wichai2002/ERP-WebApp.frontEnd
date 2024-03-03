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
        <input type="text" class="form-control form-control-sm col-8" v-model="searchTerm" placeholder="Search Name....">
        <input type="date" v-model="selectedDate" class="form-control form-control-sm  col" placeholder="Select Date">
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
                                        <th scope="col">Role</th>
                                        <th scope="col">Time in</th>
                                        <th scope="col">Time out</th>

                                    </tr>
                                </thead>
                                <tbody>
    <tr v-for="(item, index) in filteredEmployees" :key="index">
        <td>{{ formatDate(item.att_date) }}</td>
        <td>{{ item.emp_firstname }} {{ item.emp_lastname }}</td>
        <td>{{ item.role }}</td>
        <td>{{ formatTime(item.att_time_in) }}</td>
        <td>{{ formatTime(item.att_time_out) }}</td>
    </tr>
</tbody>
                            </table>
                        </div>
                        <div class="col" style="margin-top: 2%;  max-height: 45%; background-color: aliceblue; position: relative;">
                            <select class="form-select form-select-sm p-2" aria-label=".form-select-sm example"
                                v-model="selectedMonth" style="width: 10%; position: relative; left: 90%;">
                                <option disabled value="">Select a month</option>
                                <option v-for="(month, index) in months" :key="index" :value="month.month_id">
                                    {{ month.month }}
                                </option>
                            </select>
                            <div>
                                <canvas  id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <modal class="col" v-if="isAddModalVisible" @close="toggleAddModal">
    <div class="row modal-content">
        <form @submit.prevent="addNewData" class="form-container">
            <div class="form-group">
                <label for="newEmpId">Employee ID:</label>
                <input type="text" style="width: 100%;" class="form-control" id="newEmpId" v-model="newEmpId">
            </div>

            <div class="form-group">
                <label for="newDate">Date:</label>
                <input type="date" class="form-control" id="newDate" v-model="newDate">
            </div>

            <div class="form-group">
                <label for="newTimein">Time in:</label>
                <input type="time" class="form-control" id="newTimein" v-model="newTimein">
            </div>

            <div class="form-group">
                <label for="newTimeout">Time out:</label>
                <input type="time" class="form-control" id="newTimeout" v-model="newTimeout">
            </div>

            <div class="button-group">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-secondary" @click="toggleAddModal">Cancel</button>
            </div>
        </form>
    </div>
</modal>


</template>

<script>
import SideBar from "../components/NavigationBar.vue";
import moment from 'moment';
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {
    components: {
        SideBar
    },
    data() {
        return {
            isAddModalVisible: false,
            newEmpId: "",
            newRole: "",
            newDate: "",
            newTimein: "",
            newTimeout: "",
            newEvent: "",
            selectedMonth: '',
            department_id: 1001,
            attendata: [],
            months: [
                {
                    "month_id": 1,
                    "month": "Jan"
                },
                {
                    "month_id": 2,
                    "month": "Feb"
                },
                {
                    "month_id": 3,
                    "month": "Mar"
                },
                {
                    "month_id": 4,
                    "month": "Apr"
                },
                {
                    "month_id": 5,
                    "month": "May"
                },
                {
                    "month_id": 6,
                    "month": "Jun"
                },
                {
                    "month_id": 7,
                    "month": "Jul"
                },
                {
                    "month_id": 8,
                    "month": "Aug"
                },
                {
                    "month_id": 9,
                    "month": "Sep"
                },
                {
                    "month_id": 10,
                    "month": "Oct"
                },
                {
                    "month_id": 11,
                    "month": "Nov"
                },
                {
                    "month_id": 12,
                    "month": "Dec"
                },
            ],
            searchTerm: '',
            selectedDate: '',
        };
    },
    async created() {


        this.access_token = localStorage.getItem("token");

        axios.get('http://localhost:5257/api/Attendance/attenemp', {
            headers: {
                'Authorization': `token ${this.access_token}`
            }
        })
            .then((res) => {
                // จัดเรียงข้อมูลตามเวลาของวันที่เข้างานล่าสุดไปยังเก่าสุด
                this.attendata = res.data.sort((a, b) => new Date(b.att_date) - new Date(a.att_date));
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });

    },
    computed: {
        filteredEmployees() {
        // Filtering employees based on search term, name, and role
        const filteredList = this.attendata.filter(employee =>
            ((employee.emp_firstname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                employee.emp_lastname.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                employee.role.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
            (this.selectedDate === '' || moment(employee.att_date, "YYYY-MM-DD").format("YYYY-MM-DD") === this.selectedDate)
        );

        // Sort the filtered list by date and time
        return filteredList.sort((a, b) => {
            // Compare dates
            const dateA = moment(a.att_date, "YYYY-MM-DD").format("YYYY-MM-DD");
            const dateB = moment(b.att_date, "YYYY-MM-DD").format("YYYY-MM-DD");

            if (dateA !== dateB) {
                return dateA.localeCompare(dateB);
            }

            // If dates are equal, compare times
            return moment(a.att_time_in, "HH:mm").diff(moment(b.att_time_in, "HH:mm"));
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
            const newData = {
                emp_gen_id: this.newEmpId,
                date: this.newDate,
                time_in: this.newTimein,
                time_out: this.newTimeout
            };

            axios.post('http://localhost:5257/api/Attendance', newData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${this.access_token}`
                }
            })
                .then(response => {
                    console.log(response.data);
                    // แสดงข้อความแจ้งเตือนเมื่อการเพิ่มข้อมูลสำเร็จ
                    window.alert('Add complete');
                    // ทำอะไรกับข้อมูลหลังจากเพิ่มสำเร็จ
                })
                .catch(error => {
                    console.error(error);
                    // ทำอะไรกับข้อมูลหลังจากเพิ่มไม่สำเร็จ
                });
        },


        updateChartForSelectedMonth(monthId) {
            // กรองข้อมูลการเข้างานในเดือนที่เลือก
            const filteredData = this.attendata.filter(item => {
                const dateParts = item.att_date.split('-');
                const itemMonth = parseInt(dateParts[1], 10);
                return itemMonth === parseInt(monthId);
            });

            // นับจำนวนคนที่มาทำงานในแต่ละวันของเดือน
            const attendanceCounts = new Array(31).fill(0);
            filteredData.forEach(record => {
                const dateParts = record.att_date.split('-');
                const dayOfMonth = parseInt(dateParts[2], 10);
                attendanceCounts[dayOfMonth - 1]++;
            });

            // อัปเดตข้อมูลในกราฟ
            this.updateChart(attendanceCounts);
        },


        updateChart(attendanceCounts) {
            const ctx = document.getElementById('myChart').getContext('2d');
            if (this.myChart) {
                this.myChart.destroy(); // ทำลายกราฟเดิม (ถ้ามี)
            }
            this.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Array.from({ length: 31 }, (_, i) => i + 1),
                    datasets: [{
                        label: 'Number of Employees',
                        data: attendanceCounts,
                        backgroundColor: '#2ECD99',
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
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits for month
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },


        formatTime(timeString) {
            if (!timeString || timeString.trim() === '') {
                return '-';
            }

            const time = new Date(timeString);
            const hours = String(time.getHours()).padStart(2, '0'); // Ensure two digits for hours
            const minutes = String(time.getMinutes()).padStart(2, '0'); // Ensure two digits for minutes
            return `${hours}:${minutes}`;
        },

    },

    mounted() {

        this.updateChartForSelectedMonth(this.selectedMonth);
    },


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

.modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 2px solid black;
    padding: 1%;
    width: 50%;
    background-color: white;
    position: absolute;
    left: 25%;
    top: 30%;
}

.form-container {
    width: 100%;
}

.form-group {
    margin-bottom: 20px;
}

.button-group {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.btn {
    width: 40%;
}

</style>