<script setup lang="ts">
import { onMounted } from 'vue';
import SideBar from './SideBar.vue';
import Footer from './Footer.vue';
import TopBar from './TopBar.vue';
import Logo from './Logo.vue';
declare const feather: any;

const administratorMenu = [
  {
    title: "Menu",
    menu: [
      {
        name: "Dashboard",
        icon: "home",
        path: "/"
      }
    ]
  },
  {
    title: "Master Data",
    menu: [
      {
        name: "Data Pengguna",
        icon: "users",
        path: "apps-todolist.html"
      },
      {
        name: "Data Role",
        icon: "key",
        path: "apps-todolist.html"
      },
      {
        name: "Role Pengguna",
        icon: "shield",
        path: "apps-todolist.html"
      },
      {
        name: "Instansi",
        icon: "columns",
        path: "apps-todolist.html"
      }
    ]
  },
  {
    title: "Pengaturan",
    menu: [
      {
        name: "Pemetaan Pengguna",
        icon: "map-pin",
        path: "apps-todolist.html"
      },
      {
        name: "Hari Libur Nasional",
        icon: "calendar",
        path: "apps-todolist.html"
      },
      {
        name: "Jam Operasional",
        icon: "clock",
        path: "apps-todolist.html"
      },
      {
        name: "Lainnya",
        icon: "settings",
        path: "apps-todolist.html"
      }
    ]
  }
]
onMounted(() => {
  feather.replace();
});
</script>

<template>
  <div id="app-layout">
    <TopBar />
    <div class="app-sidebar-menu">
      <div class="h-100" data-simplebar>
        <Logo />
        <div id="sidebar-menu">
          <SideBar :menu="administratorMenu" />
        </div>

        <div class="clearfix"></div>
      </div>
    </div>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <Footer/>
    </div>
  </div>
</template>
