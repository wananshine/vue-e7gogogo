<template>
  <ConfirmOrderGrid>
      <ConfirmOrderWrap>
        <ShippingAddress>
          <div>選擇收貨地址</div>
          <div class="address-list">
            <dl v-for="(addr, aidx) in addressList" :key="aidx" :class="{ is_default: addr.is_default }">
              <dt>{{addr.title}}({{addr.name}} 收)</dt>
              <dd>
                <p>{{addr.city}} {{addr.address}} {{addr.tel}}</p>
                <a>修改</a>
              </dd>
            </dl>
          </div>
          <div class="address-action">
            <a class="action-show">顯示全部地址</a>
            <a class="action-manager">管理收貨地址</a>
          </div>
        </ShippingAddress>
      </ConfirmOrderWrap>
  </ConfirmOrderGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';


/***********************************************************/
const ConfirmOrderGrid = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const ConfirmOrderWrap = styled.div`
    width: 1200px;
    margin: auto;
`
const ShippingAddress = styled.div`
  .address-list{
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 237px;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      font-size: 13px;
      font-weight: 100;
      color: #666;
      box-sizing: border-box;
      padding: 11px 15px;
      margin-left: 18px;
      margin-bottom: 20px;
      background-image: url('https://img.alicdn.com/tps/i2/T1VPiBXvpeXXbjLKQ7-237-106.png');
      background-repeat: no-repeat;
      dt{
        line-height: 24px;
        border-bottom: 1px solid #f2f2f2;
        padding: 0 0 5px;
        margin-bottom: 5px;
      }
      dd{
        p{
            height: 36px;
            line-height: 18px;
            white-space: normal;
            word-break: break-all;
            word-spacing: normal;
            letter-spacing: 1px;
        }
        a{
          color: #c97;
          cursor: pointer;
        }
      }
    }
    .is_default{
      background-image: url('https://img.alicdn.com/tfs/TB1OVRCRpXXXXaMXFXXXXXXXXXX-237-106.png');
    }
  }
  .address-action{
    .action-show{

    }
    .action-manager{}
  }
`
/***********************************************************/
export default {
    components: {
      ConfirmOrderGrid,
      ConfirmOrderWrap,
      ShippingAddress,
    },
    name: "confirm_order",
    data() {
        return {
            addressList: [
              { title: "廣東深圳", name: "起落", province: "廣東", city: "深圳", area:"龍華", address: "龍華富士康南門", tel: "18695748596", is_default: true },
              { title: "廣東深圳", name: "起落", province: "廣東", city: "深圳", area:"龍華", address: "龍華富士康南門", tel: "18695748596", is_default: false },
              { title: "廣東深圳", name: "起落", province: "廣東", city: "深圳", area:"龍華", address: "龍華富士康南門", tel: "18695748596", is_default: false },
              { title: "廣東深圳", name: "起落", province: "廣東", city: "深圳", area:"龍華", address: "龍華富士康南門", tel: "18695748596", is_default: false },
              { title: "廣東深圳", name: "起落", province: "廣東", city: "深圳", area:"龍華", address: "龍華富士康南門", tel: "18695748596", is_default: false },
              { title: "廣東深圳", name: "起落", province: "廣東", city: "深圳", area:"龍華", address: "龍華富士康南門", tel: "18695748596", is_default: false },
            ]
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
    }
}
</script>
