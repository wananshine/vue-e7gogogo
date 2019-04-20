<template>
    <OrderPanelGrid>
        <nav class="order-nav">
            <div class="nav-list">
                <a v-for="(item, oidx) in orderNavList" :key="oidx" @click="getOrderCustomer($event, item, oidx)" :class="{ isActive: orderActive === item.type }">{{item.title}}</a>
            </div>
            <NavLine :left="leftData"></NavLine>
        </nav>
        <OrderListGrid :child-data = "getOrderData"></OrderListGrid>
    </OrderPanelGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { commonStyle, styleFn } from '@/assets/js/stylebase'
import OrderListGrid from './OrderListGrid.vue'

/***********************************************************/
const btnProps = {
    background:{
        default:'#2fcea6',
        type:String
    },
    color:{
        default:'white',
        type:String
    },
    width:{
        default:'200px',
        type:String
    },
    height:{
        default:'40px',
        type:String
    },
    fontSize:{
        default:'16px',
        type:String
    },
    lineHeight:{
        default:'40px',
        type:String
    },
    left: {
        default: '0px',
        type: String
    }
}

const OrderPanelGrid = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .order-nav{
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        &:before{ ${styleFn.clearfix} };
        &:after{ ${styleFn.clearfix} };
        .nav-list{
            a{ 
                display: inline-block;
                width: 100px;
                line-height: 52px;
                text-align: center;
                cursor: pointer;
                &:hover{
                    color: red;
                }
            }
            .isActive{ 
                color: red;
            }
        }
    }
`
const NavLine = styled('div', btnProps)`
    position: absolute; bottom: 0px; 
    left: ${props => props.left};
    width: 100px;
    height: 2px;
    background-color: red;
    -webkit-transition: all 500ms cubic-bezier(0.115, 1, 0.205, 1); /* older webkit */
    -webkit-transition: all 500ms cubic-bezier(0.115, 1.040, 0.205, 1.055); 
    -moz-transition: all 500ms cubic-bezier(0.115, 1.040, 0.205, 1.055); 
     -o-transition: all 500ms cubic-bezier(0.115, 1.040, 0.205, 1.055); 
        transition: all 500ms cubic-bezier(0.115, 1.040, 0.205, 1.055); /* custom */
        // transition: all 600ms cubic-bezier(.19,1.1,0,1.08);
`
/***********************************************************/
export default {
    components: {   
      OrderPanelGrid,
      OrderListGrid,
      NavLine,
    },
    name: "",
    data() {
        return {
            orderActive: "All",
            orderNavList: [
                { title: "所有订单", type: "All" },
                { title: "待付款"  , type: "AwaitPayment" },
                { title: "待发货"  , type: "AwaitDelivery" },
                { title: "待收货"  , type: "AwaitReceiving" },
                { title: "待评价"  , type: "AwaitEvaluation" }
            ],
            getOrderData: ["haha", "hehe", "ee"],
            leftData: "0px"
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
        //订单列表过滤筛选
        getOrderCustomer(e, item, idx){
            this.$set(this.$data, "orderActive", item.type);
            this.$set(this.$data, "getOrderData", [ item.type ]);
            this.$set(this.$data, "leftData", (100 * idx)+'px')
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