<style lang="less" scoped="true">
</style>
<template>
  <NewsGrid>
    <SiteHeader isType="news"></SiteHeader>
    news
  </NewsGrid>
</template>
<script type="text/javascript">


/***********************************************************/

import styled from 'vue-styled-components';
import { postJSON, getJSON } from '@/api/api1'
import { journalismApi } from '@/api/api2'
import SiteHeader from '@/components/ssi/SiteHeader.vue'

/***********************************************************/
const NewsGrid = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;
`
/***********************************************************/
export default {
    components: {
      SiteHeader,
      NewsGrid,
    },
    name: "",
    data() {
        return {
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
        journalismApi().then((response)=>{
            console.log(response)
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
