import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/LoginPage.vue'
import Department from '../views/DepartmentPage';
import Payrolls from '../views/PayRollPage';
import Recuitment from '../views/RecuitmentPage';
import Attendance from '../views/AttendancePage';
import Leave from '../views/LeavePage';
import Training from '../views/TrainingPage'

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
        path: '/attendance',
        name: "Attendance",
        component: Attendance
    },
    {
        path: '/leave',
        name: "Leave",
        component: Leave
    },
    {
        path: 'training',
        name: "Traning",
        component: Training
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;