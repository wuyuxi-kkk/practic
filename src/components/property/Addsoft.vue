<template>
  <div class="addSoft">
    <el-button type="text" style="float:right; " @click="$router.go(-1)"
      >返回上一级</el-button
    >
    <el-divider></el-divider>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="127px"
      class="demo-ruleForm"
      :label-position="labelPosition"
    >
      <el-form-item label="名称" prop="name" class="wi">
        <el-input v-model="ruleForm.show"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="host" class="host">
        <el-select v-model="ruleForm.host" placeholder="一类应用">
          <el-option label="I类应用" value="yilei"></el-option>
          <el-option label="二类应用" value="erlei"></el-option>
          <el-option label="三类应用" value="sanlei"></el-option>
          <el-option label="其他" value="qita"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="desc" class="desc wi">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
      <el-divider></el-divider>
      <el-form-item label="应用标识">
        <el-input v-model="ruleForm.tag" class="cl"></el-input>
      </el-form-item>
      <el-form-item label="应用包名">
        <el-input v-model="ruleForm.packege" class="cl"></el-input>
      </el-form-item>
      <el-form-item label="应用版本号">
        <el-input v-model="ruleForm.num" class="cl"></el-input>
      </el-form-item>
      <el-form-item class="sub">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确定</el-button
        >
        <el-button @click="resetForm()">取消</el-button>
      </el-form-item>
    </el-form>
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
        desc: "",
        man: "",
        institution: "",
        contact: "",
        packege:"",
        num:"",

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

    showInput() {
      this.inputVisible = true;
    },
  },
};
</script>

<style lang="less">
.soft{
    
}
</style>
