<template>
  <OrderListGrid>
        <OrdrFilter>
            <div class="filter-show">近三个月订单</div>
            <ul class="filter-list">
                <li class="filter-block" v-for="(ft, ftidx) in filters" :key="ftidx" @click="filterCustomer()" v-text="ft"></li>
            </ul>
        </OrdrFilter>
        <OrderItems>
            <table>
                <!--<colgroup></colgroup>-->
                <!--<thaed>
                    <tr>
                        <th>收货人</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                </thaed>-->
                <tbody v-for="(ord, oidx) in orderList" :key="oidx">
                    <tr style="height: 20px;"></tr>
                    <tr>
                        <td colspan="5">
                            <span>{{ord.time}}</span>
                            <span>订单号: {{ord.orderNo}}</span>
                            <span>删除</span>
                        </td>
                    </tr>
                    <tr v-for="(pt, ptidx) in ord.products" :key="ptidx">
                        <td class="pt-info">
                            <div><img :src="pt.img" /></div>
                            <div>
                                <p>{{pt.name}}</p>
                                <p>找搭配</p>
                            </div>
                            <div>x {{pt.amount}}</div>
                            <div>申请售后</div>
                        </td>
                        <td :rowspan="ord.products.length" v-if="ptidx===0">
                            九千胜
                        </td>
                        <td :rowspan="ord.products.length" v-if="ptidx===0">
                            <div>总额：108.00</div>
                            <div>在线支付/白条</div>
                        </td>
                        <td :rowspan="ord.products.length" v-if="ptidx===0">
                            <div>已完成</div>
                        </td>
                        <td :rowspan="ord.products.length" v-if="ptidx===0">
                            <div>查看发票</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </OrderItems>
      <div>{{childData}}</div>
  </OrderListGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';


/***********************************************************/
const OrderListGrid = styled.div`
    margin: auto;
    position: relative;
    overflow: hidden;
`
const OrderItems = styled.div`
    table{
        width: 99.8%;
        font-size: 14px;
        // border: 1px solid #e8e8e8;
        tbody{
            margin-bottom: 10px;
            tr{
                td{ padding: 10px; border: 1px solid #e8e8e8; }
                .pt-info{
                    &>div{
                        display: inline-block;
                        vertical-align: top;
                    }
                }
            }
        }
    }
`
const OrdrFilter = styled.div`
    position: relative;
    .filter-show{
        position: relative;
        line-height: 42px;
    }
    .filter-list{
        position: absolute;
        background-color: #fff;
        display: none;
        z-index: 1;
        font-size: 14px;
        .filter-block{
            line-height: 28px;
        }
    }
    &:hover{
        .filter-list{
            display: block;
        }
    }
`
/***********************************************************/
export default {
    components: {   
      OrderListGrid,
      OrdrFilter,
      OrderItems
    },
    // props: ["childData"],
    props: {
        childData: {
            type: Array,
            required: true
        }
    },
    name: "",
    data() {
        return {
            filters: [ "近三个月订单",  "近三个月订单", "今年内订单" ],
            orderList: [
                {
                    time: "2019-04-07 20:02:22",
                    orderNo: "91785310381",
                    user: "jiuqiansheng",
                    totalMoney: "1200",
                    status: "end",
                    products: [
                        {
                            img: "//img10.360buyimg.com/N6/s60x60_jfs/t20371/229/528323226/198153/de245c8b/5b0fc2ffN2ef41011.jpg",
                            name: "旁氏(POND'S)洗面奶 亮采净澈系列 米粹润泽洁面乳150g(新老包装随机发货)",
                            amount: "1",
                        },
                        {
                            img: "//img10.360buyimg.com/N6/s60x60_jfs/t20371/229/528323226/198153/de245c8b/5b0fc2ffN2ef41011.jpg",
                            name: "旁氏(POND'S)洗面奶 亮采净澈系列 米粹润泽洁面乳150g(新老包装随机发货)",
                            amount: "1",
                        },
                        {
                            img: "//img10.360buyimg.com/N6/s60x60_jfs/t20371/229/528323226/198153/de245c8b/5b0fc2ffN2ef41011.jpg",
                            name: "旁氏(POND'S)洗面奶 亮采净澈系列 米粹润泽洁面乳150g(新老包装随机发货)",
                            amount: "1",
                        }
                    ]
                },
                {
                    time: "2019-04-07 20:02:22",
                    orderNo: "91785310381",
                    user: "jiuqiansheng",
                    totalMoney: "1200",
                    status: "end",
                    products: [
                        {
                            img: "//img10.360buyimg.com/N6/s60x60_jfs/t20371/229/528323226/198153/de245c8b/5b0fc2ffN2ef41011.jpg",
                            name: "旁氏(POND'S)洗面奶 亮采净澈系列 米粹润泽洁面乳150g(新老包装随机发货)",
                            amount: "1",
                        },
                        {
                            img: "//img10.360buyimg.com/N6/s60x60_jfs/t20371/229/528323226/198153/de245c8b/5b0fc2ffN2ef41011.jpg",
                            name: "旁氏(POND'S)洗面奶 亮采净澈系列 米粹润泽洁面乳150g(新老包装随机发货)",
                            amount: "1",
                        },
                        {
                            img: "//img10.360buyimg.com/N6/s60x60_jfs/t20371/229/528323226/198153/de245c8b/5b0fc2ffN2ef41011.jpg",
                            name: "旁氏(POND'S)洗面奶 亮采净澈系列 米粹润泽洁面乳150g(新老包装随机发货)",
                            amount: "1",
                        }
                    ]
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
            console.log(this.childData)
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