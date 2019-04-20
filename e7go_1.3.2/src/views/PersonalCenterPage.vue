<template>
  <PersonalCenterGrid>
        <div class="pc-inner">
            <aside class="pc-menu">
                <dl>
                    <dt>个人中心</dt>
                    <dd><router-link class="pc-cell" to="../personal_center">基本信息</router-link></dd>
                    <dd><router-link class="pc-cell" to="../personal_center/c">账户认证</router-link></dd>
                    <dd><router-link class="pc-cell" to="../personal_center/d">我的企业</router-link></dd>
                    <dd><router-link class="pc-cell" to="../personal_center/e">我的收藏</router-link></dd>
                </dl>
                <dl>
                    <dt>订单中心</dt>
                    <dd><router-link class="pc-cell" to="../personal_center/order">我的订单</router-link></dd>
                    <dd><router-link class="pc-cell" to="">退换/售后</router-link></dd>
                    <dd><router-link class="pc-cell" to="">发票信息</router-link></dd>
                    <dd><router-link class="pc-cell" to="../personal_center/address">收货地址</router-link></dd>
                </dl>
            </aside>
            <div class="pc-container">
                <router-view></router-view>
            </div>
        </div>
  </PersonalCenterGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { commonStyle, styleFn } from '@/assets/js/stylebase'


/***********************************************************/
const  PersonalCenterGrid = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .pc-inner{
        ${styleFn.flexbox};
        align-items: flex-start;
        .pc-menu{
            min-width: 130px;
            max-width: 130px;
            dl{
                line-height: 22px;
                dt{ font-size: 16px; padding: 20px 0px 8px; cursor: pointer; }
                dd{ 
                    font-size: 14px;
                    .pc-cell{
                        cursor: pointer;
                        color: rgba(0,0,0,0.6);
                        &:hover{ color: red; }
                    }
                }
                
            }
        }
        .pc-container{
            ${styleFn.flex1};
        }
    }
`
/***********************************************************/
export default {
    components: {   
      PersonalCenterGrid,
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