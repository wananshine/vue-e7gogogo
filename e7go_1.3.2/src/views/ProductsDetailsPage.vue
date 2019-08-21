<template>
  <DetailsGrid>
    <SiteHeader isType="details"></SiteHeader>
    <DetailsWrap>
      <ProductUp>
        <!-- 商品详情 -->
        <ProductInformation>
          <!-- 商品画廊 -->
          <ProductGallery>
            <!-- 商品图片 -->
            <ProductBigImg>
              <!-- <img-zoom src="https://img.alicdn.com/imgextra/i1/646266812/O1CN01kkH3XL20BwUIvfJKK_!!646266812.jpg_430x430q90.jpg" width="450" height="250" bigsrc="https://img.alicdn.com/imgextra/i1/646266812/O1CN01kkH3XL20BwUIvfJKK_!!646266812.jpg" :configs="configs"></img-zoom> -->
              <img-zoom src="//img.alicdn.com/imgextra/i3/690444147/O1CN01eiS5vy1gVMywkwZ2O_!!690444147.png_430x430q90.jpg" bigsrc="https://img.alicdn.com/imgextra/i3/690444147/O1CN01eiS5vy1gVMywkwZ2O_!!690444147.png" :configs="configs"></img-zoom>
            </ProductBigImg>
            <!-- 商品小图列表 -->
            <ProductSmallImg>
              <a>1</a>
              <a>1</a>
              <a>1</a>
              <a>1</a>
              <a>1</a>
              <a>1</a>
            </ProductSmallImg>
          </ProductGallery>
          <!-- 商品信息 -->
          <ProductDescribe>
              <PtName>
                <h1>Reebok锐步官方 运动经典DMX SERIES 1200 LT男女复古老爹鞋EHE61</h1>
                <p>经典跑步鞋 源于1895</p>
              </PtName>
              <!-- 活动 -->
              <PtActivity>
                <dt></dt>
                <dd>123123</dd>
              </PtActivity>
              <!-- 优惠券 -->
              <PtCoupon>
                <dt></dt>
                <dd>323423</dd>
              </PtCoupon>
              <!-- <PtTxt>
              </PtTxt> -->
              <!-- 价格 -->
              <PtPrice>
                <dl class="sale-price">
                    <dt>价格：</dt>
                    <dd>
                      <em>¥</em>
                      <span>1398.00</span>
                      <i></i>
                    </dd>
                </dl>
                <dl class="promotion-price">
                    <dt>促销价：</dt>
                    <dd>
                      <em>¥</em>
                      <span>818.00</span>
                      <i></i>
                    </dd>
                </dl>
                <dl class="active-price">
                    <dt>本店活动：</dt>
                    <dd>
                      <span>满598元,包邮</span>
                    </dd>
                </dl>
              </PtPrice>
              <!-- 运费 -->
              <PtFreight>
                <dt></dt>
                <dd></dd>
              </PtFreight>
              <!-- 商品数量 -->
              <PtAmount>
                <dt>数量：</dt>
                <dd>
                  <div>
                    <span class="minus-amount" @click="minusCustomer($event)">-</span>
                    <input type="text" @input="inputAmountCustomer($event, amount)" v-model="amount">
                    <span class="plus-amount" @click="plusCustomer($event)">+</span>
                  </div>
                </dd>
              </PtAmount>
              <!-- 分期 -->
              <PtInstallment>
                <dt>分期：</dt>
                <dd>
                  <div class="installment">3:</div>
                  <div class="installment">6:</div>
                  <div class="installment">12:</div>
                </dd>
              </PtInstallment>
              <!-- 立即购买 && 加入购物车 -->
              <PtButton>
                <dd>
                  <router-link class="now-buy" :to="{ name: 'confirm_order', params: {} }">立即购买</router-link>
                  <button class="add-cart">加入购物车</button>
                </dd>
              </PtButton>
          </ProductDescribe>
        </ProductInformation>
        <!-- 商品推荐 -->
        <ProductRecommend>推荐</ProductRecommend>
      </ProductUp>
      <!-- <ProductDown>
        123
      </ProductDown> -->
    </DetailsWrap>
  </DetailsGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';
import imgZoom from 'vue2.0-zoom'
import SiteHeader from '@/components/ssi/SiteHeader.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'


/***********************************************************/
const DetailsGrid = styled.div`
  width: 100%;
  margin: auto;
`
const DetailsWrap = styled.div`
  width: 1200px;
  margin: auto;
  position: relative;
  overflow: hidden;
`
const ProductUp = styled.div`
  position: relative;
  &:before,
  &:after{
    content: "";
    height: 0px;
    display: table;
    position: relative;
    overflow: hidden;
    clear: both;
    zoom: 1;
  }
`
// 商品详情
const ProductInformation = styled.div`
  width: 76%;
  float: left;
`
// 商品画廊
const ProductGallery = styled.div`
  width: 420px;
  // height: 420px;
  float: left;
  &:before,
  &:after{
    content: "";
    height: 0px;
    display: table;
    position: relative;
    overflow: hidden;
    clear: both;
    zoom: 1;
  }
`
// 商品图片
const ProductBigImg = styled.div`
  width: 418px;
  height: 418px;
  border: 1px solid rgba(0,0,0,.05);
  border: 1px solid silver\9;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`
// 商品小图列表
const ProductSmallImg = styled.div`
  margin-top: 10px;
  a{
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: yellow;
    margin: 0px 10px;
    cursor: pointer;
  }
`

// 商品信息
const ProductDescribe = styled.div`
  width: calc(100% - 460px);
  float: right;
  text-align: left;
  &:before,
  &:after{
    content: "";
    height: 0px;
    display: table;
    position: relative;
    overflow: hidden;
    clear: both;
    zoom: 1;
  }
  dl{
    line-height: 36px;
    &:before,
    &:after{
      content: "";
      height: 0px;
      display: table;
      position: relative;
      overflow: hidden;
      clear: both;
      zoom: 1;
    }
    dt{
      width: 100px;
      float: left;
      font-size: 12px;
    }
    dd{
      font-size: 14px;
      float: left;
    }
  }
`
const PtName = styled.div`
  h1{
    padding-bottom: .2em;
    line-height: 1.45;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    margin-bottom: 1;
  }
  p{
    font-size: 14px;
    color: #FF0036;
    margin-bottom: 10px;
  }
`
const PtTxt = styled.div`
`
const PtActivity = styled.dl`
  display: none;
  background-image: url('https://img.alicdn.com/tfs/TB1T9BrivBNTKJjy0FdXXcPpVXa-1020-100.png');
  dt{}
  dd{
    line-height: 50px;
  }
`
//优惠券
const PtCoupon = styled.dl`
  display: none;
`
//价格
const PtPrice = styled.div`
  dl{
    dt{
      width: 100px;
      float: left;
    }
    dd{

    }
  }
  .sale-price{
    dd{
      em{
        color: #FF0036;
        font-size: 18px;
      }
      span{
        color: #FF0036;
        font-size: 24px;
        font-weight: bolder;
      }
    }
  }
  .promotion-price{
    display: none;
  }
  .active-price{
    display: none;
  }
`
// 运费
const PtFreight = styled.dl`
`
//数量
const PtAmount = styled.dl`
  dt{}
  dd{
    .minus-amount{
      border: 1px solid #dcdfe6;
      padding: 9px 10px;
      vertical-align: middle;
      margin-right: -1px;
      cursor: pointer;
    }
    input{
      -webkit-appearance: none;
      padding-left: 50px;
      padding-right: 50px;
      text-align: center;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      // border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 45%;
      vertical-align: middle;
    }
    .plus-amount{
      border: 1px solid #dcdfe6;
      padding: 9px 10px;
      vertical-align: middle;
      margin-left: -1px;
      cursor: pointer;
    }
  }
`
//分期
const PtInstallment = styled.dl`
    dd{
      .installment{
        display: inline-block;
      }
    }
`
const PtButton = styled.dl`
  margin-top: 15px;
  dd{
    button,a{
      outline: none;
      cursor: pointer;
      line-height: 38px;
      text-align: center;
      margin-right: 15px;
      float: left;
      overflow: hidden;
      position: relative;
      width: 178px;
      background-color: #ffeded;
      border: 1px solid #FF0036;
      color: #FF0036;
      font-family: 'Microsoft Yahei';
    }
    .now-buy{
    }
    .add-cart{
      background-color: #ff0036;
      border: 1px solid #ff0036;
      color: #fff;
    }
  }
`
// 商品推荐
const ProductRecommend = styled.div`
  background: blue;
  float: right;
`

const ProductDown = styled.div``


/***********************************************************/
export default {
    components: {
      SiteHeader,
      imgZoom,
      DetailsGrid,
      DetailsWrap,
      ProductUp,
      ProductGallery,
      ProductBigImg,
      ProductSmallImg,
      ProductInformation,
      ProductRecommend,
      ProductDescribe,
      PtName,
      PtTxt,
      PtActivity,
      PtCoupon,
      PtPrice,
      PtFreight,
      PtAmount,
      PtButton,
      PtInstallment,
      ProductDown
    },
    name: "",
    data() {
        return {
            brandList: [],
            configs: {
             width:650,
             height:350,
             maskWidth:100,
             maskHeight:100,
             maskColor:'red',
             maskCursor: "move",
             maskOpacity:0.2
           }
        }
    },
    computed: {
      ...mapState({
        counts: state => state.counts,
        // amount: state => state.amount,
      }),
      amount: {
        get(){ //必须有返回值，用来获取属性，称为get函数
          return this.$store.state.amount
        },
        set(newVal){
          //console.log('修改this.$store.state.amount的值');
          return this.$store.state.amount = newVal
        }
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
        console.log("KKKKKKKKKKKK:",this.counts, this.amount)
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
        // mapActions 使用方法一 将 this.commonActionGet() 映射为 this.$store.dispatch('commonActionGet')
        // ...mapActions(
        //   [
        //     'commonActionGet',
        //     'commonActionGetJSON',
        //     'commonActionPost',
        //     'commonActionPostJSON'
        //   ]
        // ),

       // 第二种方式
       ...mapActions({
         'plusAction': 'plusAction'
       }),


      /*
      // mapMutations 使用方法1
      ...mapMutations(['ADD']), // 会将 this.ADD 映射成 this.$store.commit('ADD')
      */

      // mapMutations 使用方法2
      ...mapMutations({
        'MINUS_ACTION': 'MINUS_ACTION',
        'PLUS_ACTION': 'PLUS_ACTION',
        'AMOUNT_ACTION': 'AMOUNT_ACTION'
      }),

        async fetchGoodsId() {
            //console.log(this.$route.params.goodsId);
        },
        //立即购买
        nowbuyCustomer(product, e) {
            // this.$router.replace({ path: '/indexCart' })
            // console.log(product, e)
        },

        minusCustomer(e){
          console.log(this)
          this.MINUS_ACTION();
        },
        plusCustomer(e){
          this.plusAction();
        },
        inputAmountCustomer(e, amount){
          this.AMOUNT_ACTION(amount)
          console.log("UUUUUUUU:",amount)
        }

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
