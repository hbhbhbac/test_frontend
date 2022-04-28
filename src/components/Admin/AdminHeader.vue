<template>
  <div>
    <v-card class="adminHeader">
      <div>
        <v-img class="adminHeader-icon" :src="discreteLogo"></v-img>
      </div>

      <div class="adminHeader-title">
        <span>北京航空航天大学离散数学</span>
        <span>（名字：管理员 工号：admin 当前学期：2022年春）</span>
      </div>

      <div>
        

        <template>
          <div class="text-center">
            <!-- <v-switch v-model="offset" label="Y offset" color="primary"></v-switch> -->
            <v-menu top offset-y>
              <template v-slot:activator="{ on, attrs }">
                <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">Dropdown</v-btn> -->
                <v-img class="adminHeader-user" :src="userLogo" v-bind="attrs" v-on="on"></v-img>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-avatar style="margin-left: 3vw;">
                    <v-img class="adminHeader-menuIcon" :src="userLogo"></v-img>
                  </v-list-item-avatar>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    plsun1108@163.com
                  </v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title>
                    修改个人资料
                  </v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title>
                    退出
                  </v-list-item-title>
                </v-list-item>
                  
                  
                
              </v-list>
            </v-menu>
          </div>
        </template>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AdminHeader",
  data() {
    return {
      discreteLogo: require("@/assets/admin/img/admin_index/logo-dark.png"),
      userLogo: require("@/assets/admin/img/admin_index/default-pic.png"),

    }
  },
};
</script>

<style scoped>
.adminHeader {
  width: 100%;
  height: 10vh;
  padding: 1vh 2vw;
  display: flex;
}
.adminHeader-icon {
  width: 14vw;
}
.adminHeader-title {
  font-size: 1.3vw;
  margin-top: 1.6vh;
  margin-left: 1vw;
}
.adminHeader-user {
  width: 2vw;
  margin-top: 1.6vh;
  margin-left: 30vw;
}
.adminHeader-menuIcon{
  width: 20vw;
}
</style>
