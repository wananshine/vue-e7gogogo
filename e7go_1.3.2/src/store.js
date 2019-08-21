import Vue from 'vue'
import Vuex from 'vuex'

// import axios from '@/axios'
// import VueAxios from 'vue-axios'
// // Vue.use(axios)
// Vue.prototype.axios = axios
// Vue.use(VueAxios)

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
    token: "",   //登录token
    testData: null,
    isLogin: null,
    isLoadShow: false,
    counts: 888888,
    amount: 999999,
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
      console.log("this.axios:", this, this)
     }
  },
  //mutations使用commit触发   this.$store.commit('SIGNIN', true);
  mutations: {
    //注册
    SIGNIN(state, data) {

    },
    //登录
    SIGNUP(state, data) {

    },
    //登出
    SIGNOUT(state, data) {

    },
    //loading加载显示
    IS_LOAD_SHOW(state, data) {
      state.isLoadShow = data;
    },
    //数量减少
    MINUS_ACTION(state, data){
      state.amount-- ;
    },
    //数量添加
    PLUS_ACTION(state, data){
      state.amount++ ;
    },
    //数量输入
    AMOUNT_ACTION(state, data){
      Object.assign(state, { amount: data });
    }
  },
  //actions使用dispatch触发   this.$store.dispatch('signIn',false)
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
    //loading加载显示
    isLoadShow(context, args) {
      context.commit('IS_LOAD_SHOW', args);
    },
    //减少数量
    minusAction(context, args){
      context.commit('MINUS_ACTION')
    },
    //增加数量
    plusAction(context, args){
      context.commit('PLUS_ACTION')
    }
  }
})
