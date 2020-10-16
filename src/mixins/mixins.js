export default {
  data() {
    return {
      // msg: 1
    };
  },
  methods: {
    foo() {
      console.log("hello from mixin!----" + this.msg++);
    }
  },
  mounted() {
    console.log("mixin say hi"); //先输出
  }
};
