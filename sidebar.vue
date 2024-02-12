<template>
    <div>
      <!-- Toggle button for small screens -->
      <button class="navbar-toggler" type="button" @click="toggleSidebar">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <!-- Sidebar -->
      <nav class="sidebar" :class="{ 'sidebar-open': isOpen }">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{ active: isActive('/') }">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" :class="{ active: isActive('/about') }">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <!-- Main content -->
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      },
      isActive(route) {
        return this.$route.path === route;
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
    z-index: 1000;
    padding-top: 3.5rem; /* Adjust according to your navbar height */
    width: 250px;
    background-color: #f8f9fa;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    transition: transform 0.3s ease-in-out, visibility 0.3s;
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .nav-link.active {
    background-color: #e9ecef;
  }
  
  /* Main content styles */
  .main-content {
    margin-left: 250px; /* Adjust according to the sidebar width */
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .sidebar {
      width: 0;
      visibility: hidden;
    }
  
    .main-content {
      margin-left: 0;
    }
  
    .sidebar-open {
      transform: translateX(-100%);
      visibility: visible;
    }
  }
  </style>
  