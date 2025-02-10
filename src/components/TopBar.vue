<template>
  <div class="topbar-custom">
    <div class="container-fluid">
      <div class="d-flex justify-content-between">
        <ul class="list-unstyled topnav-menu mb-0 d-flex align-items-center">
          <li>
            <button type="button" class="button-toggle-menu nav-link" @click="toggleSidebar">
              <i data-feather="menu" class="noti-icon"></i>
            </button>
          </li>
        </ul>
        <ul class="list-unstyled topnav-menu mb-0 d-flex align-items-center">
          <li class="d-none d-sm-flex">
            <button type="button" class="btn nav-link" @click="handleFullscreen">
              <i data-feather="maximize" class="align-middle fullscreen noti-icon"></i>
            </button>
          </li>
          <li class="dropdown notification-list topbar-dropdown">
            <Notification />
          </li>
          <li class="dropdown notification-list topbar-dropdown">
            <a class="nav-link dropdown-toggle nav-user me-0" data-bs-toggle="dropdown" href="#" role="button"
              aria-haspopup="false" aria-expanded="false">
              <img src="/assets/images/users/user-5.jpg" alt="user-image" class="rounded-circle">
              <span class="pro-user-name ms-1">
                John Smith <i class="mdi mdi-chevron-down"></i>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome !</h6>
              </div>
              <a class='dropdown-item notify-item' href='pages-profile.html'>
                <i class="mdi mdi-account-circle-outline fs-16 align-middle"></i>
                <span>My Account</span>
              </a>
              <a class='dropdown-item notify-item' href='auth-lock-screen.html'>
                <i class="mdi mdi-lock-outline fs-16 align-middle"></i>
                <span>Lock Screen</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class='dropdown-item notify-item' href='auth-logout.html'>
                <i class="mdi mdi-location-exit fs-16 align-middle"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Notification from './Notification.vue';

const isFullscreen = ref<boolean>(false);

const handleFullscreen = () => {
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    isFullscreen.value = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    isFullscreen.value = false;
  }
}

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement;
}

const toggleSidebar = () => {
  const toggleMenu = document.body.dataset.sidebar;
  if (toggleMenu === 'hidden') {
    document.body.dataset.sidebar = 'default';
  } else {
    document.body.dataset.sidebar = 'hidden';
  }
}

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('mozfullscreenchange', handleFullscreenChange);
  document.addEventListener('MSFullscreenChange', handleFullscreenChange);
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
  document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
});
</script>