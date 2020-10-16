import { typeConfigs } from "./config";
// console.log(typeConfigs);
export default {
  filters: {
    $_filterData: value => {
      return typeConfigs[value] || "type undefined";
    }
  }
};
