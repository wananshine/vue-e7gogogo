<template>
  <BrandCarouseGrid>
      <!-- SwiperContainer -->
      <div class="swiper-brand-container">
        <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(brand, idx) in brandList" :key="idx"><img :src="brand.url" /></swiper-slide>
            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <!-- Add Arrows -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
  </BrandCarouseGrid>
</template>
<style lang="less" scoped="true">
</style>

<script type="text/javascript">

  import styled from 'vue-styled-components';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';


/***********************************************************/
  const BrandCarouseGrid = styled.div`
      width: 1200px;
      margin: 20px auto;
      position: relative;
      overflow: hidden;
      .swiper-brand-container {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 24px 2px;
          border: 1px solid #d9d9d9;
          z-index: 1;
          .swiper-wrapper{
              .swiper-slide{
                  text-align: center;
                  img{ display: block; margin: 0 auto; }
              }
          }
      }
  `
/***********************************************************/
  export default {
      components: {   
        BrandCarouseGrid,
        swiper,
        swiperSlide
      },
      name: "",
      data() {
          return {
              swiperOption: {
                slidesPerView: 6,
                spaceBetween: 0,
                slidesPerGroup: 1,
                loop: true,
                autoplay: true,
                loopFillGroupWithBlank: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }
              }, //swiper-set
              attr: "data-ooo",
              value: "YYY",
              brandList: [
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  },
                  {
                      url: "http://static.e7go.com/b2b2e-dev/40b17241-28d4-45fb-8bcc-e7a5d9df1c77/%E7%BB%84+2.png",
                  }
              ],
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
          // new Swiper('.swiper-brand-container', {
          //   slidesPerView: 6,
          //   spaceBetween: 0,
          //   slidesPerGroup: 6,
          //   loop: true,
          //   /*autoplay: true,*/
          //   delay: 3000,//1秒切换一次
          //   loopFillGroupWithBlank: true,
          //   pagination: {
          //     el: '.swiper-pagination',
          //     clickable: true,
          //   },
          //   navigation: {
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          //   },
          // });
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