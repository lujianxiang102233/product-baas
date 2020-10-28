import Vue from "vue";
import ElementUI from "element-ui";
import VueI18n from "vue-i18n";
import en from "element-ui/lib/locale/lang/en";
import zh from "element-ui/lib/locale/lang/zh-CN";
import CN from "./zh.json";
import US from "./en.json";

Vue.use(VueI18n); // 通过插件的形式挂载
Vue.locale = () => {};

const messages = {
  zh_CN: Object.assign(zh, CN), // 中文语言包
  en_US: Object.assign(en, US) // 英文语言包
};

const navLang = navigator.language;
console.log("navLang", navLang);
const localLang =
  navLang === "zh-CN" || navLang === "en-US"
    ? navLang.replace("-", "_")
    : false;

const i18n = new VueI18n({
  locale: "en_US", // 语言标识
  // locale:localStorage.getItem('locale')|| localLang || 'zh_CN',
  messages
});

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value) //注意element-ui的版本为2.xx
});

export default i18n;
