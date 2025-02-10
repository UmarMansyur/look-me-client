<template>
  <div class="logo-box">
    <a class='logo logo-light' href='index.html'>
      <span class="logo-sm">
        <img :src="props.logo_light_sm" alt="" height="22">
      </span>
      <span class="logo-lg">
        <img :src="props.logo_light_lg" alt="" height="24">
      </span>
    </a>
    <a class='logo logo-dark' href='index.html'>
      <span class="logo-sm">
        <img :src="props.logo_dark_sm" alt="" height="22">
      </span>
      <span class="logo-lg">
        <img :src="props.logo_dark_lg" alt="" height="24">
      </span>
    </a>
  </div>

</template>

<script setup lang="ts">
  const props = defineProps<{
    logo_light_sm: string,
    logo_light_lg: string,
    logo_dark_sm: string,
    logo_dark_lg: string
  }>()
</script>


