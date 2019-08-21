import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'
import Vue from 'vue';
import router from '../router'

// Vue.use(axios)
// Vue.prototype.$axios = axios
// Vue.use(VueAxios, axios)

//axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = 'api'

let base = '';
let defaultUrl = "http://flnet-wap.flnet.cn"  //http://flnet-wap.flnet.cn



// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
            console.log('headers:',store.state.token);
            console.log("&&&&&&&&&&&&&&&&&&&&&:", this, this.axios)
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);


// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 404:
                    alert('http:'+404);
                    break;
                case 400:
                    //err.message = '请求错误'
                    alert(400)
                    break;

                case 401:
                    //err.message = '未授权，请登录'
                    alert(401)
                    break;

                case 403:
                    //err.message = '拒绝访问'
                    alert(403)
                    break;

                case 404:
                    //err.message = `请求地址出错: ${err.response.config.url}`
                    alert(404)
                    break;

                case 408:
                    //err.message = '请求超时'
                    alert(408)
                    break;

                case 500:
                    //err.message = '服务器内部错误'
                    alert(500)
                    break;

                case 501:
                    //err.message = '服务未实现'
                    alert(501)
                    break

                case 502:
                    //err.message = '网关错误'
                    alert(502)
                    break;

                case 503:
                    //err.message = '服务不可用'
                    alert(503)
                    break;

                case 504:
                    //err.message = '网关超时'
                    alert(504)
                    break;

                case 505:
                    //err.message = 'HTTP版本不受支持'
                    alert(505)
                    break;

                default:
                    alert('degault');
                    console.log('axios response 拦截器 error:',error)
                    break;
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
**/
export const fetch = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const get = (url, params = {}) => {
    return axios.get(url, {
            params: params
        })
        .then(response => {
          return response
        })
        .catch(err => {
            return err
        })
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
**/
export const post = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, {
                params: params
            })
            .then(response => {
                resolve(responsew)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装patch方法
 * @param url
 * @param data
 * @returns {Promise}
**/
export const patch = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, {
                params: params
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装put方法
 * @param url
 * @param data
 * @returns {Promise}
**/
export const put = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.put(url, {
                params: params
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}




/*

ps: 要挂载到Vue上去再去应用

import { post, fetch, patch, put } from 'api'

Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put


然后使用：

GET调用方法如下，其中url是接口地址
this.$get(url).then((res) {

//代码

});

POST调用方法如下，其中url是接口地址，data是请求的数据。
this.$post(url,data).then({

//代码

});


PATCH调用方法如下，其中url是接口地址，data是请求的数据
this.$patch(url,data).then({

//代码

});

PUT调用方法如下，其中url是接口地址，data是请求的数据
this.$put(url,data).then({

//代码

});



*/
