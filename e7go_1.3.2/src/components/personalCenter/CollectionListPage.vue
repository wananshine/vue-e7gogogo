
<template>
  <CollectionGrid>
      <CollectionInner>
        <GoodsItem v-for="(c, cidx) in collectionData.list" :key="cidx">
            <div class="coll-img">
                <img src="//img11.360buyimg.com/n2/jfs/t7447/318/2567254277/105570/2717105a/59b1092aNbe8c39ab.jpg">
                <!--<img :scr="c.imageUrl" />-->
            </div>
            <div class="coll-info">
                <p class="coll-price">{{c.actualCurrentPrice}}</p>
                <p class="coll-title">{{c.title}}</p>
            </div>
        </GoodsItem>
      </CollectionInner>
  </CollectionGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { styleFn } from "../../assets/js/stylebase"
import { KaoLaGetRecommendGoods } from "../../assets/json/cartBuy"

/***********************************************************/
const CollectionGrid = styled.div`
    width: auto;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const CollectionInner = styled.div`
    position: relative;
    overflow: hidden;
    width: 1100px;
`
const GoodsItem = styled.div`
    float: left;
    width: 245px;
    margin-right: 30px;
    box-sizing: border-box;
    border: 1px solid #eee;
    .coll-img{
        width: 150px;
        height: 150px;
        margin: 20px auto;
        img{ 
            width: 100%; 
            height: 150px;
        }
    }
    .coll-info{
        margin-bottom: 10px;
        padding: 0px 20px;
    }
    .coll-price{
        line-height: 20px;
        text-align: center;
    }
    .coll-title{
        overflow: hidden;
        font-size: 12px;
        line-height: 20px;
        ${styleFn.ellipsis};
    }
`
/***********************************************************/
export default {
    components: {   
      CollectionGrid,
      CollectionInner,
      GoodsItem
    },
    name: "",
    data() {
        return {
            collectionData: KaoLaGetRecommendGoods
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
        console.log(KaoLaGetRecommendGoods, this.collectionData);
        this.$set(this.$data, "collectionData", KaoLaGetRecommendGoods);
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