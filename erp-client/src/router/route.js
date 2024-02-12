import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/LoginPage.vue'
import Department from '../views/DepartmentPage';
import Payrolls from '../views/PayRollPage';
import Recuitment from '../views/RecuitmentPage';
import Attendance from '../views/AttendancePage';
import Leave from '../views/LeavePage';
import Training from '../views/TrainingPage';
import Dashborad from '../views/DashboardPage';
import EmployeeInfo from '../views/EmployeeInfoPage'

const routes = [
    {
        path: "/login".toLowerCase(),
        name: "Login",
        component: Login
    },
    {
        path: '/department'.toLowerCase(),
        name: 'Department',
        component: Department
    },
    {
        path: '/payroll',
        name: "Payroll",
        component: Payrolls
    },
    {
        path: '/recuitment',
        name: "Recuitment",
        component: Recuitment
    },
    {
        path: '/attendence'.toLowerCase(),
        name: "Attendance",
        component: Attendance
    },
    {
        path: '/leave'.toLowerCase(),
        name: "Leave",
        component: Leave
    },
    {
        path: '/training'.toLowerCase(),
        name: "Traning",
        component: Training
    },
    {
        path: '/dashboard'.toLowerCase(),
        name: "dashboard",
        component: Dashborad
    },
    {
        path: '/employees'.toLowerCase(),
        name: "employees",
        component: EmployeeInfo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;