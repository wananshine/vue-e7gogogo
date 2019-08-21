<template>
  <H>
      <TopNav class="top-nav"></TopNav>
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
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <div class="news-pic">
                          <img src="https://cms-bucket.ws.126.net/2019/07/01/9b70fe97b0064c6aa3d230a9c7edf27d.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp" />
                        </div>
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <div class="news-pic">
                          <img src="https://cms-bucket.ws.126.net/2019/07/01/9b70fe97b0064c6aa3d230a9c7edf27d.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp" />
                        </div>
                    </article>
                    <div class="news-action">
                      <a class="news-change">換一換</a>
                      <a class="news-join">進入傻傻頻道</a>
                    </div>
                </div>
            </section>

            <section class="news-type">
                <div class="news-title">
                    <h2 class="title-txt">今日要闻</h2>
                    <h2 class="title-tips">
                      <a>賽事</a>
                      <a>NBA</a>
                      <a>中超</a>
                      <a>CBA</a>
                    </h2>
                </div>
                <div class="news-content">
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <div class="news-pic">
                          <img src="https://cms-bucket.ws.126.net/2019/07/01/9b70fe97b0064c6aa3d230a9c7edf27d.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp" />
                        </div>
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <!-- <div class="news-pic"></div> -->
                    </article>
                    <article class="news-item">
                        <div class="news-info">
                          <p class="news-name">原创时政微视频 | 初心不改 矢志不渝</p>
                          <p class="news-time">新华网 57分钟前 0跟帖</p>
                        </div>
                        <div class="news-pic">
                          <img src="https://cms-bucket.ws.126.net/2019/07/01/9b70fe97b0064c6aa3d230a9c7edf27d.png?imageView&thumbnail=234y146&quality=45&interlace=1&enlarge=1&type=webp" />
                        </div>
                    </article>
                </div>
            </section>

      </CategoryBox>
  </H>
</template>
<style lang="less" scoped="true">
  // .top-nav{
  //   width: 375px;
  // }
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
width: 10rem;
    height: 3rem;
    background: url(https://static.ws.126.net/163/wap/f2e/milk_index/logo-site.png) no-repeat 50%;
    -webkit-background-size: 3.08rem;
    background-size: 3.08rem;
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
            position: relative;
            // height: 1.6rem;
            line-height: 2.8rem;
            padding: 0.6rem 1.22rem 0rem;
            -webkit-box-pack: justify;
            .title-txt{
              font-size: 1.4rem;
              font-weight: bold;
              // line-height: 3rem;
            }
            .title-tips{
              position: absolute;
              right: 4%;
              top: 20%;
              a{ padding: 0.3rem 0.2rem; }
            }
        }
        .news-content{
          .news-item{
            display: flex;
            flex-wrap: nowrap;
            justify-content: stretch;
            flex-direction: row;
            align-content: stretch;
            align-items: center;
            padding: 1.24rem 1.22rem;
            border-bottom: 1px solid #f5f7f9;
            margin: 0 -.22rem;
            .news-info{
              flex-basis: auto;
              flex-grow: 1;
              flex-shrink: 1;
              .news-name{
                line-height: 2rem;
                font-size: 1.25rem;
              }
              .news-time{
                line-height: 1rem;
                margin-top: 0.2rem;
                font-size: .85rem;
                color: #b4b4b4;
              }
            }
            .news-pic{
              width: 8rem;
              -webkit-box-flex: 0;
              -webkit-flex: 0 0 auto;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              img{
                display: block;
                height: 4.8rem;
                margin: 0 auto;
              }
            }
          }
          .news-action{
            color: red;
            text-align: center;
            .news-change{
              display: inline-block;
              width: 50%;
            }
            .news-join{
              display: inline-block;
              width: 50%;
            }
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
