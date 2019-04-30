<template>
  <H>
      
  </H>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { postJSON, getJSON } from '@/api/api1'
import { livingList, DBlol, indexVideo, musicRankingsDetails } from '@/api/api2'


/***********************************************************/
const H = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
`
/***********************************************************/
export default {
    components: {   
      H,
    },
    name: "",
    data() {
        return {
            brandList: [] 
        }
    },
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
    computed: {
        ddd() {
            return this.$store.getters.ddd
        }
    },
    beforeCreate() {},
    created() {
        
        DBlol().then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        indexVideo().then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        musicRankingsDetails().then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        //网易新闻的 API
        // 娱乐类 - BA10TA81wangning
        // 电视 - BD2A86BEwangning
        // 电影 - BD2A9LEIwangning
        // 明星 - BD2AB5L9wangning
        // 音乐 - BD2AC4LMwangning
        // 体育类 - BA8E6OEOwangning
        // 财经类 - BA8EE5GMwangning
        // 军事类 - BAI67OGGwangning
        // 军情 - DE0CGUSJwangning
        getJSON('https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-10.html', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        //豆瓣电影API
        getJSON('http://api.douban.com/v2/movie/top250?start=25&count=25', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        //省市区(县)街道四级联动：
        getJSON('http://api.wangshuwen.com/getRegion', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        
        //根据ip地址获取位置信息：
        getJSON('http://api.wangshuwen.com/ip2Location', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        
        //根据百度搜索引擎获取美女图片信息
        getJSON('http://api.wangshuwen.com/getBeautyImages', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        //获取新闻信息
        getJSON('http://api.wangshuwen.com/getNewsNews', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        //获取正在热映的电影
        getJSON('http://api.wangshuwen.com/getHotMovie', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        //获取电影top250
        getJSON('http://api.wangshuwen.com/getTopMovie', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        getJSON('../api/v1/live/lol', {})
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

        
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