import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store'
import QS from 'qs'

const dataType = "application/x-www-form-urlencoded;charset=UTF-8"
const defaultTimeout = 10000
//设置超时时间
axios.defaults.timeout = defaultTimeout;
// post请求头
axios.defaults.headers.post['Content-Type'] = dataType;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


//请求拦截(请求发出前处理请求)
axios.interceptors.request.use(
    config => {
        //将token放入header，这里用Vuex把token放在store中，取出
       const token = store.state.token;
       token && (config.headers.Authorization = token);
        return config;
    },
    error =>{
        return Promise.error(error);
    }
)

// 响应拦截器及异常处理（处理响应数据）
axios.interceptors.response.use(
    response => {
        if(response.state === 200){
            return Promise.resolve(response);
        }else{
            //这个地方可以由后台编辑状态码区分不同情况，做不同的逻辑处理
            return Promise.reject(response);
        }
    },
    error => {
        //请求失败，这个地方可以根据error.response.status统一处理一些界面逻辑，比如status为401未登录,可以进行重定向
        // router.replace({
        //     path: '/login',
        //     query: { redirect: router.currentRoute.fullPath }
        //    });
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    //err.message = '请求错误'
                    console.log(400)
                    break;
                case 401:
                    // 401: 未登录
                    // 未登录则跳转登录页面，并携带当前页面的路径
                    // 在登录成功后返回当前页面，这一步需要在登录页操作。
                    router.replace({
                        path: 'login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 403:
                    // 403: '登录过期，请重新登录',
                     // 清除token
                    // localStorage.removeItem('token');
                    // store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                         path: '/login',
                         query: {
                          redirect: router.currentRoute.fullPath
                         }
                        });
                    }, 1000);
                    alert(403)
                    break;
                case 404:
                    // 404请求不存在
                    alert('http:'+404);
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
                    break;
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
                    alert('default');
                    console.log('axios response 拦截器 error:',error)
                    break;

            }
        }
        return Promise.reject(error.response);

    }
)

//对外接口
export const request = ({ method, url, params }) => {
    console.log("KKKKK:",method, url, params)
    if (['Get', 'GET', 'get'].includes(method)) {
        return get(url, params);
    }else if(['Post','POST','post'].includes(method)){
        return post(url, params);
    }else { }

    // if (method == 'Get') {
    //     return get(url, params);
    // } else if (method == 'Post') {
    //     return post(url, params);
    // } else { }
}

// 封装get方法
const fetch = (url, params = {}) => {
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
const get = (url, params) =>{
    return new Promise((resolve, reject) =>{
        axios.get(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err);
        })
    });

}
const get1 = (url, params = {}) => {
    return axios.get(url, {
            params: params
        }).then(response => {
          return response
        }).catch(err => {
            return err
        })
}

// 封装post方法
const post = (url, params) =>{
    return new Promise((resolve, reject) =>{
        axios.post(url, QS.stringify(params)).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })

    });
}


// 封装patch方法
const patch = (url, params = {}) =>{
    return new Promise((resolve, reject) =>{
        axios.patch(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })

    });
}

// 封装post方法
const put = (url, params)=>{
    return new Promise((resolve, reject) =>{
        axios.put(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })

    });
}
