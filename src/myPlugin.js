import { typeConfigs } from "./config";
console.log(typeConfigs);
const myPlugin = {};
myPlugin.install = Vue => {
  Vue.mixin({
    filters: {
      $_filterType: (value, msg1, msg2, msg3) => {
        console.log(typeConfigs);
        return [value, msg1, msg2, msg3];
        // return aa[value] || "type undefined";
      }
    }
  });
};
export default myPlugin;
