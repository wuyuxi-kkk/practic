<template>
  <!-- <el-divider></el-divider> -->

  <div class="main">
    <div class="content">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div class="lt">
          <el-form-item>
            <el-input
              v-model="formInline.user"
              placeholder="搜索名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" @click="onSubmit">搜索</el-button>
          </el-form-item>
          <el-form-item label="监控状态">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="启用" value="启用"></el-option>
              <el-option label="停用" value="停用"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="全部">
              <el-option label="正常" value="正常"></el-option>
              <el-option label="已删除" value="已删除"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="rt">
          <el-form-item>
            <el-button size="small" @click="onAdd">新增</el-button>
            <el-button size="small" @click="onManage">主机类型管理</el-button>
            
          </el-form-item>
        </div>
      </el-form>
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="主机名称"
          width="100"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="describe"
          label="主机描述"
          width="180"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="organization"
          label="所属组织机构"
          width="180"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="man"
          label="负责人"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="负责人联系方式"
          width="180"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="monitor"
          label="监控状态"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          header-align="center"
          align="center"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180"
          header-align="center"
          align="center"
        >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="dele">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
      input: "",
      currentPage: 1,
      pagesize: 10,
      total: 1000,
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          name: "主机名称",
          describe: "主机主机",
          organization: "上海",
          man: "王小虎",
          phone: "14546665662",
          monitor: "启用",
          state: "正常",
        },
        {
          name: "主机名称",
          describe: "主机主机",
          organization: "北京",
          man: "王小虎",
          phone: "14546665662",
          monitor: "停用",
          state: "已删除",
        },
        {
          name: "主机名称",
          describe: "主机主机",
          organization: "上海",
          man: "王小虎",
          phone: "14546665662",
          monitor: "启用",
          state: "正常",
        },
        {
          name: "主机名称",
          describe: "主机主机",
          organization: "北京",
          man: "王小虎",
          phone: "14546665662",
          monitor: "停用",
          state: "已删除",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick(row) {
      console.log(row);
      this.$router.push({ path: "/Addware" });
    },
    dele(){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    onAdd() {
      this.$router.push({
        path: "/Addware",
      });

      console.log("新增");
    },
    onManage() {

    },
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
.main {
  height: 500px;
  .content {
    margin: 30px auto;
    width: 1240px;
    height: 100%;
    border-top: 0.1px solid #dcdfe6;
    .demo-form-inline {
      padding-top: 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      input {
        height: 33px;
        width: 180px;
      }
    }
  }
}
</style>
