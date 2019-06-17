import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'
// Vue.use(axios)
Vue.prototype.axios = axios
Vue.use(VueAxios)

Vue.use(Vuex)

// export const fetch = (url, params = {}) => {
//   return new Promise((resolve, reject) => {
//     Axios.get(url, {
//               params: params
//           })
//           .then(response => {
//               resolve(response.data)
//           })
//           .catch(err => {
//               reject(err)
//           })
//   })
// }

export default new Vuex.Store({
  state: {
    token: "",
    testData: null,
    isLogin: null,
    isLoadShow: false,
  },
  getters: {
    isLogin(state) { 
      if(state.token){
        return state.isLogin = 1
      }else{
        return state.isLogin = 2
      }
    },
    isLoadShow(state) {
      return state.isLoadShow
    },
    ddd(state) { 
      this.axios.get("https://3g.163.com/touch/reconstruct/article/list/BD2A9LEIwangning/0-20.html")
        .then((res) => { 
          console.log("res", res);
          state.testData = res;
          return state.testData
        })
        .catch((err) => { 
          console.log("err", err);
          return "error"
        })
    }
  },
  //mutations使用commit触发
  mutations: {
    SIGNIN(state, data) {

    },
    SIGNUP(state, data) { 

    },
    SIGNOUT(state, data) { 

    },
    IS_LOAD_SHOW(state, data) { 
      state.isLoadShow = data;
      console.log("IS_LOAD_SHOW:", state, data);
    },
  },
  //actions使用dispatch触发
  actions: {
    //登录
    signIn(context) {
      context.commit('SIGNIN');
    },
    //注册
    signUp(context) { 
      context.commit('SIGNUP');
    },
    //登出
    signOut(context) { 
      context.commit('SIGNOUT');
    },
    isLoadShow(context, args) {
      console.log("isLoadShow:", args)
      context.commit('IS_LOAD_SHOW', args);
    }, 
  }
})
