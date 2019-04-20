<template>
  <SiteHead>
      <TopBar>
          <div class="bar-inner">
              <div class="t-bar-left">
                  <span>您好欢迎来到一企购 ！  </span>
                  <router-link to="">请登录</router-link>
                  <i style="padding: 10px;">|</i>
                  <router-link to="">免费注册</router-link>
              </div>
              <div class="t-bar-right">
                  <span>下拉菜单</span>
                  <ul>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                  </ul>
              </div>
          </div>
      </TopBar>
      <SearchBar>
          <div class="bar-inner">
              <div class="bar-logo">logo</div>
              <div class="bar-input">
                  <el-input placeholder="请输入内容" v-model="searchKey">
                    <el-button type="primary" slot="append">搜索</el-button>
                  </el-input>
                  <div class="bar-hot-search">
                    <span>手表</span>
                    <span>BB霜</span>
                    <span>222</span>
                  </div>
              </div>
              <div class="bar-cart">
                  <el-button type="primary">
                    <i class="el-icon-goods"></i>
                    我的购物车
                  </el-button>
              </div>
          </div>
      </SearchBar>
      <NavBar>
          <div class="bar-inner">
            <div class="line"></div>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
              <el-menu-item index="5">电器城</el-menu-item>
              <el-menu-item index="6">营业厅</el-menu-item>
              <el-menu-item index="7">医药馆</el-menu-item>
              <el-menu-item index="8">旅行社</el-menu-item>
              <el-menu-item index="9">供应商合作</el-menu-item>
              <el-menu-item index="10">新闻中心</el-menu-item>
              <el-menu-item index="11">关于我们</el-menu-item>
              <el-menu-item index="12">联系我们</el-menu-item>
            </el-menu>
          </div>
      </NavBar>
  </SiteHead>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import gql from 'graphql-tag'  
import styled from 'vue-styled-components';
// import Swiper from 'swiper';


/***********************************************************/
const SiteHead = styled.header`
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const HeadBoxStyle = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;
    .bar-inner{
        width: 1200px;
        margin: auto;
        position: relative;
        overflow: hidden;
    }
`
const TopBar = styled(HeadBoxStyle)`
    background: #f1f1f1;
    .bar-inner{
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        .t-bar-left{
            position: absolute; left: 0px; top: 0px; bottom: 0px;
        }
        .t-bar-right{
            position: absolute; right: 0px; top: 0px; bottom: 0px;
            .el-dropdown{ font-size: 12px; }
        }
    } 
`
const SearchBar = styled(HeadBoxStyle)`
    .bar-inner{
      display: grid;  
      grid-template-columns: 300px 500px 300px;
      grid-template-rows: 120px;
      grid-column-gap: 15px;
      grid-row-gap: 15px;
      //grid-gap: 15px 10px;
      justify-items: stretch;
      align-items: center;
      .bar-logo{ text-align: left; }
      .bar-input{
        position: relative;
        .bar-hot-search{ 
          position: absolute;
          top: 45px; left: 0px;
          span{ display: inline-block; padding-right: 10px; font-size: 12px; }
        }
        button{ border-radius: 0px; }
      }
      .bar-cart{}
    }
`
const NavBar = styled(HeadBoxStyle)`
    .bar-inner{
    }
`
/***********************************************************/
export default {
    components: {   
        SiteHead,
        TopBar,
        SearchBar,
        NavBar,
    },
    name: "",
    data() {
        return {
            searchKey: "",
            activeIndex: '1',
            brandList: [] 
        }
    },
    computed: {},
    watch: {
        //监听数组
        goodsData: {
            handler: function(newVal) {
                // console.log(newVal.length)
            },
            deep: true
        },
        //监听路由
        '$route' (to, from) {
            // 获取最新的id 调用获取数据方法
            //this.$route.params.goodsId;
            //this.fetchGoodsId()
        }
    },
    beforeCreate() {},
    created() {
        this.$nextTick(()=>{})
        /*this.$microtask(()=>{
            console.log("caonima")
        })*/
        this.$set(this.$data, "searchKey", "手表")
    },
    beforeMount() {},
    mounted() {
        this.$nextTick(function() {
            this.fetchGoodsId();
            // console.log(this.$apollo.queries.hello)
        })
    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy(){},
    destroyed(){},
    methods: {
        async fetchGoodsId() {
            //console.log(this.$route.params.goodsId);
        },
        //立即购买
        nowbuyCustomer(product, e) {
            // this.$router.replace({ path: '/indexCart' })
            // console.log(product, e)
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
    },
    beforeRouteEnter(to,from,next){
      console.log("进入这个组建1111111");
      next()
    },
    beforeRouteUpdate(to,from,next){
      console.log("在二级导航里面切换了22222");
      next()
    },
    beforeRouteLeave(to,from,next){
      console.log("离开这个组建更新3333333");
      next()
    },
    // apollo: {
    //   hello: gql`query {
    //     hello
    //   }`,
    // }
}
</script>