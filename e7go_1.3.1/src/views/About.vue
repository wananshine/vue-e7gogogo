<template>
  <AboutContainer class="about">
    <h1>This is an about page</h1>
  </AboutContainer>
</template>
<script type="text/javascript">
/***********************************************************/
import gql from 'graphql-tag'
import styled from 'vue-styled-components';
// import {getPtDetail} from '@/api/api';
/***********************************************************/
const AboutContainer = styled.div`
  width: 100%;
  position: relative;
`
/***********************************************************/
export default {
    components: {   
      AboutContainer,
    },
    name: "",
    data() {
        return {
            product: {
                products: {
                    tags: []
                }
            },
            picUrls: [], //把 banner从product中取出来
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