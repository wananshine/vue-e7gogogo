<template>
  <MusicGrid>
    <!-- <SiteHeader :isShow="false"></SiteHeader> -->
    <SiteHeader isType="music"></SiteHeader>
    <MusicWrap>
      <div>
        <div>
            <el-input v-model='test.val'></el-input>
            {{test.num}}
        </div>
        <div>
            <el-input v-model='test1.val'></el-input>
            {{test1.num}}
        </div>
        <MusicRank v-for="(r, ridx) in rankList" :key="ridx">
            <dt style="color: red;">{{r.name}}</dt>
            <dd>
                <p v-for="(c, cidx) in r.content">
                    {{c.title}}
                </p>
            </dd>
        </MusicRank>
      </div>
    </MusicWrap>
  </MusicGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';
import { styleFn } from '@/assets/js/stylebase'
import { postJSON, getJSON } from '@/api/api1';
import { musicRankings } from '@/api/api2';
import SiteHeader from '@/components/ssi/SiteHeader.vue';


/***********************************************************/
const MusicGrid = styled.div`
    width: 100%;
    margin: auto;
    position: relative;
`
const MusicWrap = styled.section`
    width: 1200px;
    min-width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const MusicRank = styled.dl`
    width: 30%;
    float: left;
    ${styleFn.ellipsis};
`
/***********************************************************/
export default {
    components: {
      SiteHeader,
      MusicGrid,
      MusicWrap,
      MusicRank,
    },
    name: "",
    data() {
        return {
            test: {
                val: 789,
                num: 123
            },
            test1: {
                val: null,
                num: null
            },
            rankList: []
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
    beforeCreate() {
        
    },
    created() {
        musicRankings().then((response)=>{
            if(response.code === 200){
                this.$set(this.$data, "rankList", response.result)
            }
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })

        this.$nextTick(()=>{
            const that = this;
            this.test1 = Object.create(that.test)
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
