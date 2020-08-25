import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Manage",
    component: () => import("../views/Manage.vue"),
    children: [
      {
        path: "Hardware",
        name: "Hardware",
        component: () => import("../components/property/Hardware.vue"),
        // children:[{
        //   path:"/Addware",
        //   name:"Addware",
        //   component:()=>import("../components/property/Addware.vue")
        // }]
      },
      {
        path: "Software",
        name: "Software",
        component: () => import("../components/property/Software.vue"),
        // meta:{
        //     type:"man",
        //     rootTil:"资产管理",
        //     til:"软件管理",
        //     icon:'el-icon-odometer'
        // }
      },
      {
        path: "/Addware",
        name: "Addware",
        component: () => import("../components/property/Addware.vue"),
      },
      {
        path: "/Addsoft",
        name: "Addsoft",
        component: () => import("../components/property/Addsoft.vue"),
      },
      {
        path: "/Audit",
        name: "Audit",
        component: () => import("../components/property/Audit.vue"),
      },
      {
        path: "/Statistics",
        name: "Statistics",
        component: () => import("../components/property/Statistics.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
