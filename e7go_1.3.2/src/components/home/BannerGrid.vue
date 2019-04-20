<template>
  <BannerGrid>
      <!-- swiper -->
      <swiper class="swiper-wrap" :options="swiperOption">
        <swiper-slide 
        	class="swiper-cell"
        	:style="'background-color:'+banner.bg" 
        	v-for="(banner, idx) in bannerList" 
        	:key="idx">
			<img :src="banner.src" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </BannerGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/***********************************************************/
const BannerGrid = styled.div`
    width: 100%;
    height: 500px;
    margin: auto;
    // background-color: #eee;
    position: relative;
    overflow: hidden;
    .swiper-wrap{
    	// width: 1200px;
        width: 100%;
    	margin: auto;
    }
    .swiper-cell{
    	min-width: 1200px;
        margin: auto;
        text-align: center;
    	img{
    		min-width: 1200px;
            margin: auto;
    	}
    }
`
/***********************************************************/
export default {
    components: {   
      BannerGrid,
      swiper,
      swiperSlide
    },
    name: "",
    data() {
        return {
        	swiperOption: {
        	    loop: true,
		        pagination: {
		        	el: '.swiper-pagination'
		        }
	        },
            bannerList: [
            	{ src: "http://img.alicdn.com/tps/i4/TB1rkxNKAvoK1RjSZFwSuwiCFXa.jpg", bg: "#e8e8e8" },
            	{ src: "http://img.alicdn.com/imgextra/i4/50/O1CN01Ecechn1CEwJLdSuNm_!!50-0-luban.jpg_q100.jpg_.webp", bg: "#fe544d" },
            	{ src: "https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg", bg: "#e8e8e8" }
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
      next();
    },
    beforeRouteUpdate(to,from,next){
      console.log("在二级导航里面切换了22222");
      next();
    },
    beforeRouteLeave(to,from,next){
      console.log("离开这个组建更新3333333");
      next();
    }
}
</script>