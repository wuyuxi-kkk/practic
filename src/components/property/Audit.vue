<template>
  <div class="audit">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>路径</el-breadcrumb-item>
      <el-breadcrumb-item>路径</el-breadcrumb-item>
      <el-breadcrumb-item>路径</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <h4>日志任务统计</h4>
    <div class="stati">
      <el-col :span="5">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="127px"
          class="demo-ruleForm"
        >
          <h3 class="demonstration">时间</h3>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="开始日期"
            :picker-options="pickerOptions0"
            class="start"
          >
          </el-date-picker>
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="结束日期"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
        </el-form>
      </el-col>
      <el-col :span="9">
        <div class="right">
          <el-progress
            :text-inside="true"
            :stroke-width="33"
            :percentage="100"
            status="success"
          >
          </el-progress>
          <h5>总日志量100</h5>
          <el-progress
            :text-inside="true"
            :stroke-width="33"
            :percentage="80"
          ></el-progress>
          <h5>成功80</h5>
          <el-progress
            :text-inside="true"
            :stroke-width="33"
            :percentage="20"
            status="warning"
          ></el-progress>
          <h5>失败20</h5>
        </div>
      </el-col>
    </div>
    <h4>日志列表任务</h4>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="应用">
        <el-input v-model="formInline.use"></el-input>
      </el-form-item>
      <el-form-item label="组织机构" class="pd">
        <el-input v-model="formInline.structure"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" round @click="onChoice = true">选择</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column
              property="date"
              label="日期"
              width="150"
            ></el-table-column>
            <el-table-column
              property="name"
              label="姓名"
              width="200"
            ></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </el-dialog>
      </el-form-item>
      <el-form-item label="时间" class="pd">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      stripe
      style="width: 100%"
    >
      <el-table-column prop="start" label="开始时间" width="180">
      </el-table-column>
      <el-table-column prop="end" label="结束时间" width="180">
      </el-table-column>
      <el-table-column prop="use" label="应用"> </el-table-column>
      <el-table-column prop="structure" label="组织结构"> </el-table-column>
      <el-table-column prop="state" label="状态"> </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template>
          <el-button type="text" size="small" @click="detail">详情</el-button>
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
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      currentPage: 1,
      pagesize: 10,
      total: 1000,
      formInline: {
        use: "",
        structure: "",
      },
      tableData: [
        {
          start: "2016-05-02",
          end: "2020-05-02",
          state: "启用",
        },
        {
          start: "2016-05-02",
          end: "2020-05-02",
          state: "启用",
        },
        {
          start: "2016-05-02",
          end: "2020-05-02",
          state: "启用",
        },
        {
          start: "2016-05-02",
          end: "2020-05-02",
          state: "启用",
        },
      ],
      value1: "",
      value2: "",
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          //{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        host: [{ required: true, message: "请选择", trigger: "change" }],
        networks: [{ required: true, message: "请选择", trigger: "change" }],
        desc: [
          { required: true, message: "请填写描述", trigger: "blur", max: 100 },
        ],
      },
      pickerOptions0: {
        disabledDate: (time) => {
          if (this.value2 != "") {
            return time.getTime() > Date.now() || time.getTime() > this.value2;
          } else {
            return time.getTime() > Date.now();
          }
        },
      },
      pickerOptions1: {
        disabledDate: (time) => {
          return time.getTime() < this.value1 || time.getTime() > Date.now();
        },
      },
    };
  },
  methods: {
    onChoice() {},
    detail() {},
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
.audit {
  h4 {
    text-align: left;
    font-size: 15px;
    margin-top: 20px;
  }
  .stati {
    width: 1100px;
    height: 200px;
    border: 1px dashed #c0c4cc;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    box-sizing: border-box;
    .demo-ruleForm {
      padding: 17% 0 0 60px;
      box-sizing: border-box;
      // display: flex;
      // flex-direction: row;
      // justify-content: space-between;
      .demonstration {
        display: flex;
        flex-direction: row;
        // float: left;
        font-size: 12px;
        font-weight: none;
        color: #c0c4cc;
        // text-align: ;
      }
      .start {
        padding: 10px 0 10px 0;
        box-sizing: border-box;
      }
    }
    .right {
      width: 800px;
      padding: 8% 0 0 120px;
      box-sizing: border-box;

      .el-progress {
        padding: 10px 0 0 0;
        box-sizing: border-box;
        width: 570px;
        border-radius: none;
      }
      h5 {
        float: right;
        font-weight: none;
        font-size: 13px;
        margin: -27px 10px 0 0;
      }
    }
  }
  .demo-form-inline {
    float: left;
    margin-top: 20px;

    .pd {
      padding: 0 0 0 20px;
    }
  }
  .footer {
    margin-top: 100px;
  }
}
</style>
