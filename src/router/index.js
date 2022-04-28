import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/admin/index.vue"),
    children: [
      //管理端路由配置
      {
        path: "/admin/demo",
        name: "Demo",
        meta: {
          title: "测试",
          icon: "mdi-home"
        },
        component: () => import("../views/admin/demo.vue"),
      },
      {
        path: "/admin/resource",
        name: "Resource",
        meta: {
          title: "测试",
          icon: "mdi-home"
        },
        component: () => import("../views/admin/resource.vue"),
      },
    ]
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
