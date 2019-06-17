<template>
  <MovieGrid>
    <!-- <SiteHeader :isShow="false"></SiteHeader> -->
    <SiteHeader isType="movie"></SiteHeader>
    <MovieWrap>
      <ul>
        <li v-for="(m, midx) in movieList" :key="midx">
            <a :href="m.alt">
                <div>
                    <img :src="m.images.medium" />
                </div>
                <div>
                    {{m.title}}
                </div>
            </a>
        </li>
      </ul>
    </MovieWrap>
  </MovieGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';
import { postJSON, getJSON } from '@/api/api1'
import { todayVideo } from '@/api/api2'
import SiteHeader from '@/components/ssi/SiteHeader.vue'


/***********************************************************/
const MovieGrid = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
`
const MovieWrap = styled.div`
    width: 1200px;
    min-width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
`
/***********************************************************/
export default {
    components: {
      SiteHeader,
      MovieGrid,
      MovieWrap,
    },
    name: "",
    data() {
        return {
            movieList: []
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

        //获取电影top250
        //http://api.douban.com/v2/movie/top250?start=25&count=25
        //http://api.wangshuwen.com/getTopMovie
        getJSON('http://api.wangshuwen.com/getTopMovie?start=25&count=25', {})
            .then(res=>{
                const resData = JSON.parse(res);
                if(resData.code === 1){
                    this.$set(this.$data, "movieList", resData.data.subjects);
                }
                console.log("222222222",this.movieList, resData, JSON.parse(res))
            }).catch(err=>{
                console.log(err)
            })

        //每日视频推荐
        todayVideo().then((response)=>{
            console.log("333333333333",response)
        }).catch((error)=>{
            console.log(error)
        })

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
