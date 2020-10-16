<template>
  <div class="sm2">
    <el-row>
      <el-col :span="20">
        <div class="grid-content bg-purple-dark">
          <!-- rules:表单验证规则 -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="公钥" prop="publicKey">
              <el-input type="textarea" v-model="ruleForm.publicKey"></el-input>
            </el-form-item>
            <el-form-item label="私钥" prop="privateKey">
              <el-input v-model="ruleForm.privateKey" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="plaintext">
              <el-input v-model="ruleForm.plaintext" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公钥加密" prop="pubEncrypt">
              <el-input v-model="ruleForm.pubEncrypt" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="私钥解密" prop="decrypt">
              <el-input v-model="ruleForm.priDecrypt" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="私钥加密" prop="encrypt">
              <el-input v-model="ruleForm.priEncrypt" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="公钥解密" prop="decrypt">
              <el-input v-model="ruleForm.pubDecrypt" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doGenerate">生成公私密钥</el-button>
              <el-button type="primary" @click="pubEnCrypt">公钥加密</el-button>
              <el-button type="primary" @click="priDeCrypt">私钥解密</el-button>
              <el-button type="primary" @click="priEnCrypt">私钥加密</el-button>
              <el-button type="primary" @click="pubDeCrypt">公钥解密</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <div>此页面有msg的值为3,所以按照此值开始算</div>
    <el-button @click="foo">mixins按钮</el-button>
  </div>
</template>
<script>
import mixin from "@/mixins/mixins.js";
// const sm2 = require("sm-crypto").sm2;
export default {
  mixins: [mixin],
  data() {
    return {
      ruleForm: {
        publicKey: "",
        privateKey: "",
        plaintext: "",
        pubEncrypt: "",
        priDecrypt: "",
        priEncrypt: "",
        pubDecrypt: "",
      },
      msg: 3,
      rules: {},
    };
  },
  methods: {
    doGenerate() {
      //可以生成base64格式、16进制或者pem格式
      //this.$jse.getPublicKeyB64() base64格式
      //this.$jse.getKey().getPublicBaseKey() 16进制格式
      //this.$jse.getPublicKey() pem进制格式
      this.ruleForm.publicKey = this.$jse.getPublicKeyB64();
      this.ruleForm.privateKey = this.$jse.getPrivateKeyB64();
    },
    pubEnCrypt() {
      this.$jse.setPublicKey(this.ruleForm.publicKey);
      this.ruleForm.pubEncrypt = this.$jse.encrypt(this.ruleForm.plaintext);
    },
    priDeCrypt() {
      this.$jse.setPrivateKey(this.ruleForm.privateKey);
      this.ruleForm.priDecrypt = this.$jse.decrypt(this.ruleForm.pubEncrypt);
    },
    priEnCrypt() {
      this.$jse.setPrivateKey(this.ruleForm.publicKey);
      this.ruleForm.priEncrypt = this.$jse.encrypt(this.ruleForm.plaintext);
    },
    pubDeCrypt() {
      this.$jse.setPrivateKey(this.ruleForm.privateKey);
      this.ruleForm.pubDecrypt = this.$jse.decrypt(this.ruleForm.priEncrypt);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.form {
}
</style>
