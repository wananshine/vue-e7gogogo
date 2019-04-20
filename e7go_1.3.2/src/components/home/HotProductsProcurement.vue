<template>
  <HotProductsGrid>
      <div class="goods-wrap">
          <ul class="goods-list">
              <li class="hot-goods" @click="toDetailCustomer($event)">
                  <div class="pt-img"><img src="http://static.e7go.com/b2b2e-dev/00992900-03c8-46c5-bd41-1393589fed05/1.jpg?x-oss-process=image/resize,h_180" /></div>
                  <div class="pt-info">123</div>
              </li>
              <li class="hot-goods">
                  <div class="pt-img"><img src="http://static.e7go.com/b2b2e-dev/00992900-03c8-46c5-bd41-1393589fed05/1.jpg?x-oss-process=image/resize,h_180" /></div>
                  <div class="pt-info">123</div>
              </li>
              <li class="hot-goods">
                  <div class="pt-img"><img src="http://static.e7go.com/b2b2e-dev/00992900-03c8-46c5-bd41-1393589fed05/1.jpg?x-oss-process=image/resize,h_180" /></div>
                  <div class="pt-info">123</div>
              </li>
              <li class="hot-goods">
                  <div class="pt-img"><img src="http://static.e7go.com/b2b2e-dev/00992900-03c8-46c5-bd41-1393589fed05/1.jpg?x-oss-process=image/resize,h_180" /></div>
                  <div class="pt-info">123</div>
              </li>
              <li class="hot-goods">
                  <div class="pt-img"><img src="http://static.e7go.com/b2b2e-dev/00992900-03c8-46c5-bd41-1393589fed05/1.jpg?x-oss-process=image/resize,h_180" /></div>
                  <div class="pt-info">123</div>
              </li>
          </ul>
      </div>
  </HotProductsGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/***********************************************************/
const HotProductsGrid = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .goods-wrap{
        .goods-list{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: stretch;
            justify-content: flex-start;
            align-content: flex-start;
            .hot-goods{
                width: calc(1200px / 5);
                flex-shrink: 1; 
                flex-grow: 0; 
                flex-basis: auto; 
                text-align: center;
            }
        }
    }
`
/***********************************************************/
export default {
    components: {   
      HotProductsGrid,
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
        //跳轉到詳情頁
        toDetailCustomer(e) {
            // this.$router.push({ path: '/details', query: { name: "1", jj: "2" } });
            this.$router.push({ name: 'details', params: { hhh: "1", jj: "2" } })
            console.log(e)
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