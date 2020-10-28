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
              <el-input
                v-model="ruleForm.privateKey"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="plaintext">
              <el-input
                v-model="ruleForm.plaintext"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="公钥加密" prop="encryptData">
              <el-input
                v-model="ruleForm.encryptData"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="私钥解密" prop="decryptData">
              <el-input
                v-model="ruleForm.decryptData"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doGenerate"
                >生成公私密钥</el-button
              >
              <el-button type="primary" @click="enCrypt">加密</el-button>
              <el-button type="primary" @click="deCrypt">解密</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <div>此页面有msg的值为3,所以按照此值开始算{{ msg }}</div>
    <el-button @click="foo">mixins按钮</el-button>
  </div>
</template>
<script>
import mixin from '@/mixins/mixins.js'
import { encrypt } from '@/request/api.js'
export default {
  mixins: [mixin],
  data() {
    return {
      ruleForm: {
        publicKey: '',
        privateKey: '',
        plaintext: '',
        encryptData: '',
        decryptData: '',
      },
      msg: 3,
      rules: {},
    }
  },
  methods: {
    doGenerate() {
      let keypair = this.$sm2.generateKeyPairHex()
      this.ruleForm.publicKey = keypair.publicKey
      this.ruleForm.privateKey = keypair.privateKey
    },
    enCrypt() {
      this.ruleForm.encryptData = this.$sm2.doEncrypt(
        this.ruleForm.plaintext,
        this.ruleForm.publicKey
      ) // sm2加密
    },
    deCrypt() {
      this.ruleForm.decryptData = this.$sm2.doDecrypt(
        this.ruleForm.encryptData,
        this.ruleForm.privateKey
      ) // sm2解码
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields();
      console.log(123)
      encrypt({ type: 0, sort: 1 }).then((res) => {
        console.log(123)
      })
    },
  },
}
</script>
<style lang="less" scoped>
.form {
}
</style>
