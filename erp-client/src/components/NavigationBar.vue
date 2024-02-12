<template>
    <!-- <div class="row"> col-lg-4 col-md-3 col-sm-2 -->
        <div class="col-2">
            <!-- Toggle button for small screens -->
            <button class="navbar-toggler " type="button" @click="toggleSidebar"  style="color: #FFF;"
            :class="{hiding: isOpen}">
                <span class="navbar-toggler-icon" ></span>
            </button>
            
            <!-- Sidebar style="background-color: #2A3E4C;" -->
            <nav class="sidebar" :class="{ 'sidebar-open': isOpen }" style="background-color: #2A3E4C ;">
                <h1 class="text-center" style="color: #2ECD99; font-weight: 700; ">HRMS</h1>
                <div class="position-sticky">
                    <ul class="nav flex-column mx-3">
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Dashboard" class="nav-link" :class="{ active: isActive('/') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/') }">
                                    <i class="bi bi-kanban-fill mx-2"></i><span>Dashboard</span>
                                </p>
                            </router-link>

                        </li>
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Employees" class="nav-link" :class="{ active: isActive('/about') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/about') }">
                                    <i class="bi bi-people-fill mx-2"></i><span>Employees</span>
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Attendence" class="nav-link" :class="{ active: isActive('/about') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/about') }">
                                    <i class="bi bi-alarm-fill mx-2"></i><span>Attendence</span>
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Leave" class="nav-link" :class="{ active: isActive('/about') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/about') }">
                                    <i class="bi bi-calendar-week-fill mx-2"></i><span>Leave</span>
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Payroll" class="nav-link" :class="{ active: isActive('/about') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/about') }">
                                    <i class="bi bi-people-fill mx-2"></i><span>Payroll</span>
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Training" class="nav-link" :class="{ active: isActive('/about') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/about') }">
                                    <i class="bi bi-people-fill mx-2"></i><span>Training</span>
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item d-flex justify-content-start">
                            <router-link to="/Recuitment" class="nav-link" :class="{ active: isActive('/about') }">
                                <p class="fs-5 fa text-decoration-none wht" :style="{ color: navTextColor('/about') }">
                                    <i class="bi bi-people-fill mx-2"></i><span>Recuitment</span>
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            
        };
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },
        isActive(route) {
            return this.$route.path.toLowerCase() === route;
        },
        navTextColor(route) {
            if (this.isActive(route) == true) {
                return "#2A3E4C !important";
            } else {
                return "white !important"
            }
        }
    }
};
</script>

<style scoped>
/* Sidebar styles */
.sidebar {
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1200;
    padding-top: 1.3rem;

    /* Adjust according to your navbar height */
    width: 17.5%;
    background-color: #f8f9fa;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    transition: transform 0.3s ease-in-out, visibility 0.3s;
}
.hiding{
    display: none;
}
.sidebar-open {
    transform: translateX(0);
}

.nav-link.active {
    background-color: #e9ecef;
}


/* Responsive styles */
@media (max-width: 768px) {
    .sidebar {
        width: 0;
        visibility: hidden;
    }

    .sidebar-open {
        transform: translateX(-100%);
        visibility: visible;
    }
}

.wht {
    font-weight: 700;
}
</style>
