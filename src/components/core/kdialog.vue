<template>
  <div class="kdialog">
    <el-dialog
      :title="title"
      :visible.sync="formDialogVisible"
      :width="`${width}%`"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-form :rules="rules" ref="addForm" :model="addForm" label-width="80px">
        <el-form-item
          :label="item.label"
          :prop="`${item.key}-${index}`"
          v-for="(item,index) in form"
          :key="item.index"
        >
          <el-input v-if="item.key === 'input'" v-model="addForm[`${item.key}-${index}`]"></el-input>
          <el-checkbox-group
            v-if="item.key === 'checkbox'"
            v-model="addForm[`${item.key}-${index}`]"
          >
            <el-checkbox v-for="city in item.checkList" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          <!-- <el-checkbox-group
            v-if="item.key === 'checkbox'"
            v-model="addForm[`${item.key}-${index}`]"
          >
            <el-checkbox v-for="city in item.checkList" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>-->
        </el-form-item>
        <!-- <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>-
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>-->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit('addForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    formDialogVisible: Boolean,
    form: Array,
    width: Number,
    title: String,
  },
  data() {
    return {
      addForm: {},
      rules: {
        // region: [
        //   { required: true, message: "请选择活动区域", trigger: "change" },
        // ],
        // date1: [
        //   {
        //     type: "date",
        //     required: true,
        //     message: "请选择日期",
        //     trigger: "change",
        //   },
        // ],
        // date2: [
        //   {
        //     type: "date",
        //     required: true,
        //     message: "请选择时间",
        //     trigger: "change",
        //   },
        // ],
        // type: [
        //   {
        //     type: "array",
        //     required: true,
        //     message: "请至少选择一个活动性质",
        //     trigger: "change",
        //   },
        // ],
        // resource: [
        //   { required: true, message: "请选择活动资源", trigger: "change" },
        // ],
        // desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    init() {
      this.form.forEach((item, i) => {
        let type = item.key;
        if (type === "input") {
          this.$set(this.addForm, `${type}-${i}`, item.name);
          this.$set(this.rules, `${type}-${i}`, item.validate);
        } else if (type === "checkbox") {
          this.$set(this.addForm, `${type}-${i}`, item.type);
          this.$set(this.rules, `${type}-${i}`, item.validate);
        }
      });
    },
    handleClose(done) {
      this.$emit("close", false);
    },
    cancel() {
      this.$emit("close", false);
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {
    this.init();
    console.log(this.addForm);
    console.log(this.rules);
  },
  mounted() {},
};
</script>