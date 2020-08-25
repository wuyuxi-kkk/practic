<template>
  <div class="soft">
    <el-divider></el-divider>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input
          v-model="formInline.user"
          placeholder="搜索名称"
          class="seek"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSeek">搜索</el-button>
      </el-form-item>
      <el-form-item label="监控状态" class="status">
        <el-select v-model="formInline.status" placeholder="全部">
          <el-option label="启用" value="start"></el-option>
          <el-option label="停用" value="stop"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" class="status">
        <el-select v-model="formInline.stat" placeholder="全部">
          <el-option label="正常" value="zhengchang"></el-option>
          <el-option label="已删除" value="delete"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="add">
        <el-button type="primary" @click="onAdd" class="add">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      stripe
      style="width: 100%"
    >
      <el-table-column prop="name" label="应用名称" width="180">
      </el-table-column>
      <el-table-column prop="describe" label="描述" width="180">
      </el-table-column>
      <el-table-column prop="organ" label="所属组织机构" width="180">
      </el-table-column>
      <el-table-column prop="man" label="负责人" width="180"> </el-table-column>
      <el-table-column prop="phone" label="负责人联系方式" width="180">
      </el-table-column>
      <el-table-column prop="monitor" label="监控状态" width="150">
      </el-table-column>
      <el-table-column prop="status" label="状态" width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="220"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="dele">删除</el-button>
          <el-button type="text" size="small" @click="servi"
            >服务节点</el-button
          >
          <el-button type="text" size="small" @click="gplot">拓扑图</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        :current-page="currentPage"
        :total="100"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      total: 1000,
      formInline: {
        user: "",
        rstatus: "",
        stat: "",
        status: "",
      },
      tableData: [
        {
          name: "应用名称",
          describe: "描述描述",
          man: "王小虎",
          phone: "12345678901",
          monitor: "启用",
          status: "正常",
        },
        {
          name: "应用名称",
          describe: "描述描述",
          man: "王小虎",
          phone: "12345678901",
          monitor: "停止",
          status: "已删除",
        },
        {
          name: "应用名称",
          describe: "描述描述",
          man: "王小虎",
          phone: "12345678901",
          monitor: "启用",
          status: "正常",
        },
        {
          name: "应用名称",
          describe: "描述描述",
          man: "王小虎",
          phone: "12345678901",
          monitor: "停止",
          status: "已删除",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      console.log("新增");
      this.$router.push({path:'/Addsoft'})
    },
    onSeek() {
      console.log("搜索成功");
    },
    handleClick() {},
    dele() {},
    servi() {},
    gplot() {},
    handleSizeChange(val) {
      this.pagesize = val;
      sessionStorage.setItem;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
  },
};
</script>

<style lang="less">
.soft {
  width: 1500px;
  .demo-form-inline {
    .el-form-item {
      float: left;
    }
    .status {
      padding: 0 0 0 20px;
      box-sizing: border-box;
    }
    .add {
      float: right;
    }
  }
  .el-table {
    width: 900px;
    margin: 0 auto;
  }
  .footer {
    margin: 100px 0 0 0;
  }
}
</style>
