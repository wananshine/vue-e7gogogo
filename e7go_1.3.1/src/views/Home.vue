<template>
  <div class="home">
    <!--<img src="../assets/logo.png">-->
    <SiteHeader></SiteHeader>
    <BrandCarouselGrid></BrandCarouselGrid>
    <HotProductsProcurement></HotProductsProcurement>
      
    <div v-if="false">
      <!--<p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>-->
      <el-button>el-button</el-button>
    </div>
    <HelloWorld v-if="false" msg="Vue Graphql (vue-apollo调试)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SiteHeader from '@/components/ssi/SiteHeader.vue'
import BrandCarouselGrid from '@/components/home/BrandCarouselGrid.vue'
import HotProductsProcurement from '@/components/home/HotProductsProcurement.vue'

import gql from 'graphql-tag'
export default {
    name: 'home',
    components: {
        HelloWorld,
        SiteHeader,
        BrandCarouselGrid,
        HotProductsProcurement
      },
    created(){
        /*export function searchSkusOrder(valueOrder, index) {
            return async (dispatch, state) => {
                const valueOrderNo = valueOrder;
                let filter = valueOrder;
                const result = await graphql(
                    `
                  query($filter: SkuFilterInput!) {
                    skus(filter: $filter) {
                      count
                      items {
                        id
                        namet
                        skuCode
                        product {
                          id
                          minOrderQuantity
                          brand{
                            id
                            name
                          }
                        }
                      }
                    }
                  }
                `,
                    {
                        filter: {
                            skuCode: valueOrderNo,
                            statuses: "Published",
                        }
                    }
                );

                // const resSkus = result.data.skus == null ? {} : result.data.skus
                const data = Object.assign(result.data.skus,{index: index});
               dispatch(fetchedQuotationSkus(data));
            };
        }*/
        this.addTag();
    },
    methods: {
      async addTag() {
        console.log("******************1:",this.$apollo);
        console.log("******************2:",this.$apollo.query)
        // Call to the graphql mutation
        const filter1 = { skuCode: "3", statuses: "Published" };
        const result = await this.$apollo.query({
          // Query
          query: gql`query ($filter: SkuFilterInput!) {
            skus(filter: $filter) {
              id
            }
          }`,
          // Parameters
          variables: {
            "filter": { skuCode: "3", statuses: "Published" }
          },
        }).then(response=>{
            console.log("1",response);
            console.log("2",response.status);
            console.log("3",response.json());
            console.log("4",response.text());
        }).catch(error=>{
            console.log(error);
            console.log('Fetch Error :-S', err);
        });
        console.log("----------------:",result)
      }
    },
     /* apollo: {
            // Simple query that will update the 'hello' vue property
            hello: gql`query {
              hello
            }`,
      },*/
}
</script>
