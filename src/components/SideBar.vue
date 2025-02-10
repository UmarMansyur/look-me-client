<template>
  <ul id="side-menu">
    <template v-for="menu in props.menu" :key="menu.title">
      <li class="menu-title">{{ menu.title }}</li>
      <li v-for="item in menu.menu" :key="item.name">
        <RouterLink class="tp-link" :to="item.path">
          <i :data-feather="item.icon"></i>
          <span>{{ item.name }}</span>
        </RouterLink>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
  const props = defineProps<{
    menu: {
      title: string,
      menu: {
        name: string,
        icon: string,
        path: string
      }[]
    }[]
  }>()
</script>
