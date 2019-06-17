<template>
  <H>
      <TopNav></TopNav>
      <TabNav>
            <a>要闻</a>
            <a>推荐</a>
            <a>原创</a>
      </TabNav>
      <CategoryNav>
            <a class="ct" v-for="(ct, cidx) in CategoryList" :key="cidx">{{ct.txt}}</a>
            <a class="ct">></a>
      </CategoryNav>
      <CategoryBox>
            <section class="news-type">
                <div class="news-title">
                    <h2 class="title-txt">今日要闻</h2>
                </div>
                <div class="news-content">
                    <article class="news-item">
                        <p>习近平会见莫桑比克总统纽西</p>
                        <p>新华网 57分钟前 0跟帖</p>
                    </article>
                </div>
            </section>

      </CategoryBox>
  </H>
</template>
<style lang="less" scoped="true">

</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';


/***********************************************************/
const H = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const TopNav = styled.nav`
    // min-width: .8rem;
    height: 3rem;
    background: url(https://static.ws.126.net/163/wap/f2e/milk_index/logo-site.png) no-repeat 50%;
    -webkit-background-size: 12%;
    background-size: 12%;
    font-size: 0;
    color: #fff;
    background-color: #ee1a1a;
`
const TabNav = styled.div`
    line-height: 2.8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    flex-flow: row;
    text-align: center;
    border-bottom: 1px solid #eee;
    a{ flex: 1 }
`
const CategoryNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    background: #e8e8e8;
    .ct{
        position: relative;
        min-width: calc(100% / 6);
        font-size: 1rem;
        box-sizing: border-box;
        padding: 0.5rem 0.5rem;
        display: inline-block;
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 1;
        text-align: center;
    }
`
const CategoryBox = styled.div`
    .news-type{
        .news-title{
            height: 1.6rem;
            line-height: 1.6rem;
            padding: 0.6rem 0;
            -webkit-box-pack: justify;
            .title-txt{
                font-size: 1.1rem;
                font-weight: bold;
            }
        }
    }
`
/***********************************************************/
export default {
    components: {
      H,
      TopNav,
      TabNav,
      CategoryNav,
      CategoryBox
    },
    name: "",
    data() {
        return {
            CategoryList: [
                { txt: "新闻" },
                { txt: "娱乐" },
                { txt: "体育" },
                { txt: "财经" },
                { txt: "图片" },
                { txt: "汽车" },
                { txt: "星闻" },
                { txt: "军事" },
                { txt: "直播" },
                { txt: "视频" },
                { txt: "科技" },
            ]
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

        this.$nextTick(()=>{

        })
        /*this.$microtask(()=>{
            console.log("caonima")
        })*/
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
    }
}
</script>
