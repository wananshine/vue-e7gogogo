<template>
  <InvoiceGrid>
        <!--<nav>
            <a>电子发票</a>
            <a>纸质发票</a>
        </nav>-->
        <InvoiceBox>
            <InvoiceHead>
                <span class="invoice-data">2019-01-20</span>
                <span class="invoice-status">开票成功</span>
            </InvoiceHead>
            <InvoiceInformation>
                <p class="invoice-col invoice-type">
                    <label>发票类型:</label>
                    <span>电子增值税普通发票</span>
                </p>
                <p class="invoice-col invoice-title">
                    <label>抬头:</label>
                    <span>个人</span>
                </p>
                <p class="invoice-col invoice-number">
                    <label>发票号:</label>
                    <span>11111111111</span>
                </p>
                <p class="invoice-col invoice-shop">
                    <label>销售方:</label>
                    <span>三星官方旗舰店</span>
                </p>
                <p class="invoice-col invoice-total-price">
                    <label>价税合计:</label>
                    <span>4564546</span>
                </p>
            </InvoiceInformation>
            <InvoiceFoot>
                <button class="btn-invoice">发票明细</button>
                <button class="btn-order">订单明细</button>
            </InvoiceFoot>
        </InvoiceBox>
        <InvoiceBox>
            <InvoiceHead>
                <span class="invoice-data">2019-01-20</span>
                <span class="invoice-status">开票成功</span>
            </InvoiceHead>
            <InvoiceInformation>
                <p class="invoice-col invoice-type">
                    <label>发票类型:</label>
                    <span>电子增值税普通发票</span>
                </p>
                <p class="invoice-col invoice-title">
                    <label>抬头:</label>
                    <span>个人</span>
                </p>
                <p class="invoice-col invoice-number">
                    <label>发票号:</label>
                    <span>11111111111</span>
                </p>
                <p class="invoice-col invoice-shop">
                    <label>销售方:</label>
                    <span>三星官方旗舰店</span>
                </p>
                <p class="invoice-col invoice-total-price">
                    <label>价税合计:</label>
                    <span>4564546</span>
                </p>
            </InvoiceInformation>
            <InvoiceFoot>
                <button class="btn-invoice">发票明细</button>
                <button class="btn-order">订单明细</button>
            </InvoiceFoot>
        </InvoiceBox>
  </InvoiceGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';


/***********************************************************/
const InvoiceGrid = styled.div`
    width: auto;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const InvoiceBox = styled.div`
    width: 485px;
    float: left;
    border: 1px solid #ddd;
    margin-right: 46px;
`
const InvoiceHead = styled.div`
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    background: #f4f4f4;
    .invoice-data{
        
    }
    .invoice-status{}
`
const InvoiceInformation = styled.div`
    position: relative;
    margin-left: 10px;
    padding: 8px 9px;
    .invoice-col{
        line-height: 28px;
        font-size: 14px;
        font-weight: 300;
        label{
            color: #999;
        }
        span{
            color: #333;
        }
    }
    .invoice-type{}
    .invoice-title{}
    .invoice-number{}
    .invoice-shop{}
    .invoice-total-price{}
`
const InvoiceFoot = styled.div`
    line-height: 40px;
    text-align: right;
    padding: 10px 12px;
    .btn-invoice,
    .btn-order{
        outline: none;
        margin-right: 10px;
        border: 1px solid #e8e8e8;
        background: #fff;
        border-radius: 4px;
        cursor: pointer;
        padding: 5px 14px;
    }
    .btn-order{}
`
/***********************************************************/
export default {
    components: {   
      InvoiceGrid,
      InvoiceBox,
      InvoiceHead,
      InvoiceInformation,
      InvoiceFoot
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
    }
}
</script>