<template>
  <AboutContainer>
    <h1>This is an about page</h1>
    <el-button plain>朴素按钮</el-button>
  </AboutContainer>
</template>

<script type="text/javascript">

/***********************************************************/
    import gql from 'graphql-tag'
    import helloword from '../graphql/HelloWorld.gql'
    import getSkus from '../graphql/atemplate.gql'
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
              //               count
              //               items {
              //                 id
              //                 name
              //                 dateCreated
              //                 lastUpdated
              //                 unitPrice
              //                 marketUnitPrice
              //                 businessUnitPrice
              //                 employeeUnitPrice
              //                 status
              //                 availableInventoryAmount
              //                 safeInventoryAmount
              //                 buyerSkuSafeInventoryAmount
              //                 displayInventoryAmount
              //                 supplierDisplayInventoryAmount
              //                 supplierAvailableInventoryAmount
              //                 skuCode
              //                 unitPriceGrossProfitRate
              //                 employeeUnitPriceGrossProfitRate
              //                 businessUnitPriceGrossProfitRate
              //                 modelNumber
              //                 optionValues{
              //                   id
              //                   name
              //                 }
              //                 product {
              //                   id
              //                   minOrderQuantity
              //                   brand{
              //                     id
              //                     name
              //                   }
              //                 }
              //               }
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

              //         // const resSkus = result.data.skus == null ? {} : result.data.skus
              //         const data = Object.assign(result.data.skus,{index: index});
              //       dispatch(fetchedQuotationSkus(data));
              //     };
              // }
            });
            // this.lodAtemplate('222');
            //  this.lodAtemplate2();
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
        methods: {
            fetchGoodsId() {
                //console.log(this.$route.params.goodsId);
            },
            //立即购买
            nowbuyCustomer(product, e) {
                // this.$router.replace({ path: '/indexCart' })
                // console.log(product, e)
            },
            lodAtemplate(){
              this.$apollo.query({
                query: helloword,
              }).then((data)=>{
                console.log(data)
              })
            },
            async onUploadImage ({ target }) {
                    if (!target.validity.valid) return
                    await this.$apollo.mutate({
                      mutation: UPLOAD_FILE,
                      variables: {
                        file: target.files[0],
                      },
                      update: (store, { data: { singleUpload } }) => {
                        const data = store.readQuery({ query: FILES })
                        data.files.push(singleUpload)
                        store.writeQuery({ query: FILES, data })
                      },
                    })
            },
            async lodAtemplate2(){
              await this.$apollo.query({
                query: getSkus,
                variables: {
                  filter: {
                      skuCode: '3',
                      statuses: "Published",
                  }
                },
                fetchPolicy: 'network-only',
                /* 如果一个获取数据的列表，在参数没有变化的时候，那我们希望用后台数据的缓存，则需要在请求下方加上  fetchPolicy: 'network-only'来做缓存 */
              }).then(({ data }) => {
                consloe.log(data);
              })
              
            }
        },
        // apollo: {
        //   hello: gql`query {
        //     hello
        //   }`,
        // }
    }
</script>
