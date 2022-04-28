<template>
  <v-main class="adminContent">
    <v-container fluid>
      <router-view :key="$route.path" />
    </v-container>
  </v-main>
</template>

<script>
export default {
    name: "AdminContent"
}
</script>

<style>
.adminContent{
    width: 70vw;
    height: 90vh;
    /* background: red; */
}
</style>