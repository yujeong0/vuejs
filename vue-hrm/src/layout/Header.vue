<template>
    <p>
      <router-link to="/">HOME</router-link><br>
      <router-link to="/list">사원목록</router-link><br>
      <router-link to="/create">사원추가</router-link><br>
    </p>  
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>