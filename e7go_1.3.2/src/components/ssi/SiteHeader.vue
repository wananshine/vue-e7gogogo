<style lang="less" scoped="true">
  .active{
    color: red;
  }
</style>

<template>
  <SiteHead>
      <!-- 頂欄 -->
      <TopBar>
          <div class="bar-inner">
              <div class="t-bar-left">
                  <span>您好欢迎来到PingGo ！  </span>
                  <router-link @click="singInCustomer($event)" to="/login">请登录</router-link>
                  <i style="padding: 10px;">|</i>
                  <router-link to="">免费注册</router-link>
              </div>
              <div class="t-bar-right">
                  <span class="t-bar-personal" @click="toPersonalCustomer($event)">个人中心</span>
                  <ul>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                  </ul>
              </div>
          </div>
      </TopBar>

      <!-- 搜索欄 -->
      <SearchBar>
        <el-row class="bar-inner">
          <!-- logo -->
          <el-col class="bar-logo" :span="6">
            <div class="grid-content bg-purple-dark">
              <img src="@/assets/images/logo1.png" />
            </div>
          </el-col>
          <!-- 搜索框 -->
          <el-col class="bar-input" :span="14">
            <div class="grid-content bg-purple-dark">
              <!-- 輸入搜索 -->
              <el-input placeholder="请输入内容" v-model="searchKey">
                  <el-button type="primary" slot="append" @click="searchCustomer($event, searchKey)">搜索</el-button>
              </el-input>
              <!-- 熱詞搜索 -->
              <div class="bar-hot-search">
                  <span>手表</span>
                  <span>BB霜</span>
                  <span>222</span>
                  <span>口罩</span>
                  <span>防护服</span>
                  <span>插座</span>
                  <span>开关</span>
                  <span>劳保手套</span>
                  <span>耳罩</span>
                  <span>胶带</span>
                  <span>断路器</span>
              </div>
            </div>
          </el-col>
          <!-- 購物車 -->
          <el-col class="bar-cart" :span="4">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" @click="cartCustomer($event)">
                  <i class="el-icon-goods"></i>
                  我的购物车
              </el-button>
            </div>
          </el-col>
        </el-row>
      </SearchBar>

      <!-- 導航欄  data-type控制顯示哪種導航欄-->
      <NavigationBar :data-type="isType" :activeBar = "activeBar"></NavigationBar>

      <!-- 導航欄  !isShow-->
      <NavBar v-if="false">
          <div class="bar-inner">
            <div class="line"></div>
            <SiteCategoryItem></SiteCategoryItem>
            <!--background-color="#1582ff"  :default-active="activeIndex"  active-text-color="#ffd04b"-->
            <el-menu
              :default-active="$route.path"
              router
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#fff"
              text-color="rgba(0,0,0,0.8)"
              active-text-color="#1582ff"
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="/movie">电影区</el-menu-item>
              <el-menu-item index="/music">音乐厅</el-menu-item>
              <!-- <el-menu-item index="7">医药馆</el-menu-item> -->
              <el-menu-item index="8">旅行社</el-menu-item>
              <el-menu-item index="9">供应商合作</el-menu-item>
              <el-menu-item index="11">資訊速遞</el-menu-item>
              <el-menu-item index="12">企業服務</el-menu-item>
              <el-menu-item index="/news">新闻中心</el-menu-item>
            </el-menu>
          </div>
      </NavBar>

      <!-- 導航欄 !isShow-->
      <NavBar v-if="false">
          <div class="bar-inner">
            <div class="line"></div>
            <SiteCategoryItem></SiteCategoryItem>
            <!--background-color="#1582ff"  active-text-color="#ffd04b"-->
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#fff"
              text-color="rgba(0,0,0,0.8)"
              active-text-color="#1582ff">
              <el-menu-item index="1">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="5">电器城</el-menu-item>
              <el-menu-item index="6">营业厅</el-menu-item>
              <!-- <el-menu-item index="7">医药馆</el-menu-item> -->
              <el-menu-item index="8">旅行社</el-menu-item>
              <el-menu-item index="9">供应商合作</el-menu-item>
              <el-menu-item index="11">資訊速遞</el-menu-item>
              <el-menu-item index="12">企業服務</el-menu-item>
              <el-menu-item index="10">新闻中心</el-menu-item>
            </el-menu>
          </div>
      </NavBar>


  </SiteHead>
</template>

<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';
import SiteCategoryItem from "./SiteCategoryItem.vue"

/***********************************************************/
const SiteHead = styled.header`
    width: 100%;
    margin: auto;
    position: relative;
    // overflow: hidden;
`
/*頂欄、搜索欄、導航欄共用樣式*/
const HeadBoxStyle = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    .bar-inner{
        width: 1200px;
        margin: auto;
        position: relative;
    }
`
/*頂欄樣式*/
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
            .t-bar-personal{ cursor: pointer; &:hover{ color: rgb(21, 130, 255) } }
            .el-dropdown{ font-size: 12px; }
        }
    }
`
/*搜索欄樣式*/
const SearchBar = styled(HeadBoxStyle)`
    padding: 20px 0px 20px;
    .bar-inner{
      //display: flex;
      //display: grid;
      //grid-template-columns: 300px 500px 300px;
      //grid-template-rows: 120px;
      //grid-column-gap: 15px;
      //grid-row-gap: 15px;
      //grid-gap: 15px 10px;
      //justify-items: stretch;
      //align-items: center;
      .bar-logo{
        text-align: left;
        .grid-content{
          img{
            width: 68%;
          }
        }
      }
      .bar-input{
        position: relative; padding-top: 40px;
        .bar-hot-search{
          position: absolute; top: 86px; left: 0px;
          span{
            display: inline-block; padding-right: 10px; font-size: 12px; cursor: pointer;
            &:hover{
              color: #1890ff;
            }
          }
        }
        button{ border-radius: 0px; }
      }
      .bar-cart{ text-align: right; padding-top: 40px;}
    }
`
/*導航欄樣式*/
const NavBar = styled(HeadBoxStyle)`
    position: relative;
    height: 52px;
    &:after{
      content: "";
      position: absolute; bottom: 0px; left: 0px; right: 0px;
      height: 2px;
      width: 100%;
      background-color: #1582ff;
    }
    .bar-inner{
      position: relative;
      .el-menu{
        padding-left: 200px;
        .el-menu-item,
        .el-submenu{
          // min-width: 110px;
          height: 52px; line-height: 52px;
          .el-submenu__title{ height: 52px; line-height: 52px; }
        }
      }
    }
`
/*導航欄列表样式*/
const NavList = styled.ul`
  padding-left: 200px;
  display: flex;
`
/*導航欄tab样式*/
const NavCell = styled.li`
  height: 52px;
  line-height: 52px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  float: left;
  margin: 0;
  padding: 0 20px;
  border-bottom: 2px solid transparent;
  background-color: rgb(255, 255, 255);
  transition: border-color .3s,background-color .3s,color .3s;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    background-color: rgb(204, 204, 204);
  }
`
// 首頁導航欄(或同首頁一樣的導航欄)
const NavigationBar = (propsData)=>{
  const { props, parent } = propsData;
  const type = props.dataType;
  console.log('propsData:',propsData, props);
  const navArray = [
    { txt: "首頁", route: "home" },
    { txt: "電影區", route: "movie" },
    { txt: "音樂廳", route: "music" },
    { txt: "旅行社", route: "" },
    { txt: "供應商合作", route: "" },
    { txt: "資訊速遞", route: "" },
    { txt: "企業服務", route: "" },
    { txt: "新聞中心", route: "news" },
    { txt: "關於我們", route: "about" },
  ];
  return(
    <NavBar>
        {
            <div class="bar-inner">
              <div class="line"></div>
              <SiteCategoryItem typeString={type}></SiteCategoryItem>
              <NavList>
                  {
                    navArray.map((v,i)=>{
                      return(
                        <NavCell class={ i === props.activeBar ? "active" : "" } onClick={(e) =>parent.onChange(e, i, v.route)}>
                          {v.txt}
                        </NavCell>
                      )
                    })
                  }
              </NavList>
            </div>
        }
    </NavBar>
  )
}

// class Circle{
//   constructor(radius){
//     this.radius = radius;
//   }
//   render(){
//     return(
//       <div>caonima</div>
//     )
//   }
// }

//Test
const ItemComponent = (propsData) => {
    const { props, parent } = propsData;
    return(
        <div>123123</div>
    )
}

/***********************************************************/
export default {
    components: {
        SiteHead,
        TopBar,
        SearchBar,
        NavBar,
        NavigationBar,
        NavList,
        NavCell,
        SiteCategoryItem,
    },
    name: "",
    props: {
      isShow: {
        type: Boolean,
        required: false
      },
      isType: {
        type: String,
        required: false
      }
    },
    data() {
        return {

            searchKey: "",
            activeIndex: '1',
            activeBar: "",
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
        console.log("isShow:",this.isShow, this.isType)
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
        //登录
        singInCustomer(e){
           this.$router.push({ path: '/login', query: { key: ""} });
        },
        //立即购买
        nowbuyCustomer(product, e) {
            // this.$router.replace({ path: '/indexCart' })
            // console.log(product, e)
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        // 搜索
        searchCustomer(e, key){
          console.log(e, key)
          // this.$router.push({ path: '/details', query: { key: "1",} });
            this.$router.push({ name: 'search_product', params: { key: "1" } })
        },
        //跳转到购物车
        cartCustomer(e){
          console.log(e);
          this.$router.push({ path: "/cart", query: { key: "cart" } })
          //this.$router.push({ name: 'cart', params: { key: "1" } })
        },
        //跳转到个人中心
        toPersonalCustomer(e){
          this.$router.push({ path: "/personal_center", query: { key: "" } })
        },
        //導航跳轉
        onChange(e,i,route){
          console.log(e,i,route);
          this.$set(this.$data, "activeBar", i);
          this.$router.push({
            name: route,
            // params: { key: "1" },
          })
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
