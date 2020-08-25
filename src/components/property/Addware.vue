<template>
  <div class="add">
    <el-button type="text" style="float:right; " @click="$router.go(-1)"
      >返回上一级</el-button
    >
    <el-divider></el-divider>
    <div class="add_content" style="margin-top:40px ">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="127px"
        class="demo-ruleForm"
        :label-position="labelPosition"
      >
        <el-form-item class="wi" label="主机名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="show" class="wi">
          <el-input v-model="ruleForm.show"></el-input>
        </el-form-item>
        <el-form-item label="主机类型" prop="host" class="host">
          <el-select v-model="ruleForm.host" placeholder="请选择">
            <el-option label="网络设备" value="shebei"></el-option>
            <el-option label="虚拟机" value="xuniji"></el-option>
            <el-option label="物理主机" value="wulizhuji"></el-option>
            <el-option label="通用设备" value="tongyong"></el-option>
            <el-option label="专业设备" value="zhuye"></el-option>
            <el-option label="边界设备" value="bianjie"></el-option>
            <el-option label="VPN" value="VPN"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="网络类型" prop="network" class="host">
          <el-select v-model="ruleForm.network" placeholder="请选择">
            <el-option label="一类网" value="yilei"></el-option>
            <el-option label="二类网" value="erlei"></el-option>
            <el-option label="三类网" value="sanlei"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="desc" class="desc wi">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="tag" class="tag wi">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
            >添写其他</el-button
          >
        </el-form-item>
        <el-form-item label="所属组织机构" prop="institution" class="wi">
          <el-input v-model="ruleForm.institution"></el-input>
          <el-button size="small" round class="bn">选择</el-button>
        </el-form-item>
        <el-form-item label="负责人" prop="man" class="wi">
          <el-input v-model="ruleForm.man"></el-input>
        </el-form-item>
        <el-form-item label="负责人联系方式" prop="contact" class="wi">
          <el-input v-model="ruleForm.contact"></el-input>
        </el-form-item>
        <el-form-item label="监控状态" prop="monitoring" class="host">
          <el-select v-model="ruleForm.monitoring" placeholder="请选择">
            <el-option label="启用" value="qiyong"></el-option>
            <el-option label="停用" value="tingyong"></el-option>
          </el-select>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="接入方式" prop="way" class="way wi">
          <el-select v-model="ruleForm.way" placeholder="请选择" class="host">
            <el-option label="agent" value="agent"></el-option>
            <el-option label="SNMP" value="SNMP"></el-option>
          </el-select>
        </el-form-item>
        <div class="address">
          <el-form-item label="IP地址">
            <el-input v-model="ruleForm.address" class="ad"></el-input>
          </el-form-item>
          <el-form-item label="DNS名称">
            <el-input v-model="ruleForm.dns" class="ad"></el-input>
          </el-form-item>
          <el-form-item label="连接到">
            <el-radio-group v-model="connect" size="small">
              <el-radio-button label="IP"></el-radio-button>
              <el-radio-button label="DNS"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="端口">
            <el-input v-model="ruleForm.port" class="ad"></el-input>
          </el-form-item>
        </div>
        <el-divider></el-divider>
        <el-form-item label="配置清单"> </el-form-item>
        <div class="list">
          <el-form-item label="操作系统">
            <el-input v-model="ruleForm.system" class="cl"></el-input>
          </el-form-item>
          <el-form-item label="电源">
            <el-input v-model="ruleForm.power" class="cl"></el-input>
          </el-form-item>
          <el-form-item label="网口">
            <el-input v-model="ruleForm.access" class="cl"></el-input>
          </el-form-item>
          <el-form-item label="CPU">
            <el-input v-model="ruleForm.cpu" class="cl"></el-input>
          </el-form-item>
          <el-form-item label="硬盘">
            <el-input v-model="ruleForm.hdd" class="cl"></el-input>
          </el-form-item>
          <el-form-item label="内存">
            <el-input v-model="ruleForm.ram" class="cl"></el-input>
          </el-form-item>
        </div>
        <el-form-item class="sub">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确定</el-button
          >
          <el-button @click="resetForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      connect: "IP",
      ruleForm: {
        name: "",
        host: "",
        tag: "",
        network: "",
        desc: "",
        monitoring: "",
        way: "",
        address: "",
        dns: "",
        port: "",
        cpu: "",
        hdd: "",
        ram: "",
        power:"",
        contact:"",
        man:"",
        institution:"",
        show:"",
        system:""
      },
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
    };
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.$router.go(-1);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$router.go(-1);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    showInput() {
      this.inputVisible = true;
    },
  },
};
</script>

<style lang="less">
.add {
  .wi {
    width: 800px;
    position: relative;
    .bn {
      position: absolute;
      top: 3px;
      right: -60px;
    }
  }
  text-align: left;

  .add_content {
    height: 100%;
    // padding-top: 30px;
    box-sizing: border-box;
    // width: 600px;

    .host {
      width: 300px;
    }
    .tag {
      .el-tag + .el-tag {
        margin-left: 10px;
      }
      .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
    .address {
      width: 900px;
      height: 135px;
      border: 1px dashed #c0c4cc;
      padding: 10px 5px;
      box-sizing: border-box;
      margin-left: 125px;
      /deep/ .el-form-item {
      
      
        /deep/ .el-form-item__content {
          margin: 0 25px 0 25px !important;
          padding: 0 0 0 10px;
          box-sizing: border-box;
        }
        /deep/ .el-form-item__label {
          text-align: center;
        }
      }

      .ad {
        width: 150px;
        display: flex;
        flex-direction: column;
      }
    }
    .list {
      width: 650px;
      height: 400px;
      border: 1px dashed #c0c4cc;
      padding: 20px 0px;
      box-sizing: border-box;
      margin: -50px 0 0 125px;
      /deep/ .el-form-item {
        /deep/ .el-form-item__label {
          text-align: center;
        }
      }
      .cl {
        width: 500px;
      }
    }
    .sub {
      margin-top: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
