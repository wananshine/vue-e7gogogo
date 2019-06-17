<template>
  <SiteFooter>
        <FootLayer>
            <div class="item1">COPYRIGHT © 2018 一企购 e7go.com 保留一切权利</div>
            <div class="item2">增值电信业务经营许可证: 粤B2-20181075      粤ICP备17092590号</div>
        </FootLayer>
  </SiteFooter>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';


/***********************************************************/
const SiteFooter = styled.div`
    width: 100%;
    min-width: 1200px;
    margin: 100px auto 0px;
    padding: 20px 0px;
    position: relative;
    overflow: hidden;
    background-color: #333333;
    text-align: center;
`
const FootLayer = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    color: #fff;
    .item1{
        margin: 10px 0px;
    }
`
/***********************************************************/
export default {
    components: {   
      SiteFooter,
      FootLayer
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
    },
    // apollo: {
    //   hello: gql`query {
    //     hello
    //   }`,
    // }
}
</script>