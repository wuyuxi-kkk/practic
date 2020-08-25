<template>
  <el-container>
    <el-aside>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="this.$route.path"
            class="el-menu-vertical-demo"
            router
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="rgba(0, 21, 41, 1)"
            text-color="#fff"
          >
            <h2>集中管控中心</h2>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-odometer"></i>
                <span>资产管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/Hardware">硬件资产 </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/Software">软件资产</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-odometer"></i>
                <span>仪表盘</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">服务</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-2">数据库</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                 <i class="el-icon-edit-outline"></i>
                <span>日志审计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/Audit">日志任务审计</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/Statistics">应用操作量统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-date"></i>
              <span slot="title">关联分析</span>
            </el-menu-item>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>统一运维</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">平台监测</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="5-2">应用监测</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="5-3">告警中心</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="6">
              <i class="el-icon-circle-check"></i>
              <span slot="title">策略管理</span>
            </el-menu-item>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-message"></i>
                <span>系统</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1">基本信息</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="7-2">操作日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <div class="nav lf">
          <i class="el-icon-s-fold"></i>
        </div>
        <div class="userBox rt">
          <span>{{ name }}</span>
          <span>退出</span>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less">
.el-container {
  .el-aside {
    .tac {
      width: 270px;
      // padding-top: 20px;
      transition: absolute;
      left: 0;
      top: 0;

      h2 {
        padding-top: 15px;
        box-sizing: border-box;
        font-size: 18px;
        width: 270px;
        color: #fff;
      }

      .el-menu-vertical-demo {
        width: 270px;
        height: 2000px;
        margin-top: 10px;
        box-sizing: border-box;

        .el-submenu__title {
          color: rgba(255, 255, 255, 0.842);
          position: relative;
        }
      }
      i {
        position: absolute;
        left: 20px;
        top: 40%;
      }
      span {
        display: block;
        width: 20px;
        height: 56px;
        float: left;
        line-height: 56px;
        padding: 5px 0 0 60px;
        box-sizing: border-box;
      }
      .el-submenu__icon-arrow {
        margin-top: 3px;
        font-size: 14px;
        left: 200px;
      }
      .el-submenu {
        .el-menu-item {
          padding: 0 100px;
        }
      }
    }
  }
  .el-header {
    padding-top: 20px;
    box-sizing: border-box;
    .lf {
      float: left;
    }
    .rt {
      float: right;
    }
  }
}
</style>
<script>
//import axios from 'axios'
export default {
  data() {
    return {
      name: "未登录",
      index: "0",
      val: "",
    };
  },
  created(){
    // axios.({

    // })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // this.$router.push({path:"/Hardware"})
    },
  },
  computed:{
    
  }
};
</script>
