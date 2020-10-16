import axios from "axios";
import QS from "qs"; //引入qs模块，用来序列化post类型的数据
import router from "../router";

// 请求超时
axios.defaults.timeout = 10000;

//请求基础Url
axios.defaults.baseURL = "http://192.168.180.154:33333";

//post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// 请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers.token = "123";
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          router.replace({ path: "/login" });
          break;
        case 403:
          console.log("token过期");
          break;
      }
    }
    return Promise.reject(error.response);
  }
);
/*
*get方法，对应get请求  params:是一个{}，这个对象的属性值是一个参数对象
*/

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
/*
*post方法，对应post请求,params:一个参数对象
*/
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .then(res => {
        reject(err.data);
      });
  });
}

/*
*put方法，对应put请求
* params:一个参数对象
*/
export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .then(res => {
        reject(err.data);
      });
  });
}
/*
*delete请求
* params:一个参数对象
*/

export function axiosDelete(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .then(res => {
        reject(err.data);
      });
  });
}
