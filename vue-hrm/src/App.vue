<template>
    <div id="app" class="container">
      <nav-header></nav-header>
      <h1 class="text-center">SSAFY HRM</h1>
      <router-view></router-view>
    </div>
</template>

<script>
import NavHeader from './layout/Header.vue';

export default {
  name: 'App',
  components: {
    NavHeader,
  }
};
</script>

<style>
</style>
