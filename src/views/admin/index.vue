<template>
  <v-app>
      <v-card>
        <AdminHeader />
      </v-card>
      <v-card style="display: flex;">
          <AdminAside />
          <AdminContent />
      </v-card>      
  </v-app>
</template>

<script>
import AdminHeader from "@/components/Admin/AdminHeader";
import AdminAside from "@/components/Admin/AdminAside";
import AdminContent from "@/components/Admin/AdminContent"

export default {
  name: "Admin",
  components: { AdminHeader, AdminAside, AdminContent },
};
</script>

<style>
</style>
