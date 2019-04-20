<template>
  <HotProductsGrid>
      <div class="product-wrap">
          <ul>
              <li>
                  <div class="pt-img"><img /></div>
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

import gql from 'graphql-tag'  
import styled from 'vue-styled-components';
import Swiper from 'swiper';


/***********************************************************/
const HotProductsGrid = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .oduct-wrap{}
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
        this.$nextTick(function() {
          // export function searchSkusOrder(valueOrder, index) {
          //     return async (dispatch, state) => {
          //         const valueOrderNo = valueOrder;
          //         let filter = valueOrder;
          //         const result = await graphql(
          //             `
          //           query($filter: SkuFilterInput!) {
          //             skus(filter: $filter) {
          //               id
          //             }
          //           }
          //         `,
          //             {
          //                 filter: {
          //                     skuCode: valueOrderNo,
          //                     statuses: "Published",
          //                 }
          //             }
          //         );
          //     };
          // }
        });
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