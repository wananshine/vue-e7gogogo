<style lang="less" scoped="true">
@-webkit-keyframes ball-spin-fade-loader {
  50% {
        opacity: 0.3;
        -webkit-transform: scale(0.4);
        transform: scale(0.4); }

  100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
@keyframes ball-spin-fade-loader {
  50% {
        opacity: 0.3;
        -webkit-transform: scale(0.4);
        transform: scale(0.4); }

  100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
.ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
            animation: ball-spin-fade-loader 1s 0s infinite linear; 
}
.ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
            animation: ball-spin-fade-loader 1s 0.12s infinite linear;
}
.ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
            animation: ball-spin-fade-loader 1s 0.24s infinite linear; 
}
.ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
            animation: ball-spin-fade-loader 1s 0.36s infinite linear; 
}
.ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
            animation: ball-spin-fade-loader 1s 0.48s infinite linear; 
}
.ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
            animation: ball-spin-fade-loader 1s 0.6s infinite linear; 
}
.ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
            animation: ball-spin-fade-loader 1s 0.72s infinite linear; 
}
.ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
            animation: ball-spin-fade-loader 1s 0.84s infinite linear; 
}
.ball-spin-fade-loader > div {
    background-color: #ed5565;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    position: absolute; 
}
.ball-spin-fade-loader{
    position: relative;
}
/**********************************************/

@-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }

  50% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }

  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); } }

@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); }

  50% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); }

  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg); } }

@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); }

  50% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  100% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); }

  50% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  100% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7; }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }

@keyframes pacman-balls {
  75% {
    opacity: 0.7; }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px); } }

.pacman {
  position: relative; }
  .pacman > div:nth-child(2) {
    -webkit-animation: pacman-balls 1s 0s infinite linear;
            animation: pacman-balls 1s 0s infinite linear; }
  .pacman > div:nth-child(3) {
    -webkit-animation: pacman-balls 1s 0.33s infinite linear;
            animation: pacman-balls 1s 0.33s infinite linear; }
  .pacman > div:nth-child(4) {
    -webkit-animation: pacman-balls 1s 0.66s infinite linear;
            animation: pacman-balls 1s 0.66s infinite linear; }
  .pacman > div:nth-child(5) {
    -webkit-animation: pacman-balls 1s 0.99s infinite linear;
            animation: pacman-balls 1s 0.99s infinite linear; }
  .pacman > div:first-of-type {
    width: 0px;
    height: 0px;
    border-right: 25px solid transparent;
    border-top: 25px solid #fff;
    border-left: 25px solid #fff;
    border-bottom: 25px solid #fff;
    border-radius: 25px;
    -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
            animation: rotate_pacman_half_up 0.5s 0s infinite; }
  .pacman > div:nth-child(2) {
    width: 0px;
    height: 0px;
    border-right: 25px solid transparent;
    border-top: 25px solid #fff;
    border-left: 25px solid #fff;
    border-bottom: 25px solid #fff;
    border-radius: 25px;
    -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
            animation: rotate_pacman_half_down 0.5s 0s infinite;
    margin-top: -50px; }
  .pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    width: 10px;
    height: 10px;
    position: absolute;
    -webkit-transform: translate(0, -6.25px);
        -ms-transform: translate(0, -6.25px);
            transform: translate(0, -6.25px);
    top: 25px;
    left: 100px; }
/****************************************** */
@-webkit-keyframes line-scale {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }

  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }

  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }
@keyframes line-scale {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }

  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }

  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } }

.line-scale > div:nth-child(1) {
  -webkit-animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08); }
.line-scale > div:nth-child(2) {
  -webkit-animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08); }
.line-scale > div:nth-child(3) {
  -webkit-animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08); }
.line-scale > div:nth-child(4) {
  -webkit-animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08); }
.line-scale > div:nth-child(5) {
  -webkit-animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08); }
.line-scale > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block; }
</style>
<template>
  <LoadingGrid v-if="isLoadShow">
      <LoadingBox>
            <div class="ball-spin-fade-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>  
      </LoadingBox>

      <LoadingBox v-if="false">
            <div class="pacman">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>  
      </LoadingBox>

      <LoadingBox v-if="false">
            <div class="line-scale">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>  
      </LoadingBox>
  </LoadingGrid>
</template>


<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { mapGetters, mapState } from '@/store';

/***********************************************************/
const LoadingGrid = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;
    //background-color: rgba(0,0,0,0.5);
    //background: #ed5565;
    background-color: transparent;
`
const LoadingBox = styled.div`
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        align-items: center;
        justify-content: center;
        margin: auto;
`
/***********************************************************/
export default {
    components: {   
      LoadingGrid,
      LoadingBox,
    },
    name: "",
    data() {
        return {
            brandList: [],
            // isLoadShow: this.$store.loadShow
        }
    },
    computed: {
        //  ...mapGetters(['isLoadShow']),
        //mapState({switchList1: state => state.switchList1}),
        isLoadShow() {
            return this.$store.getters.isLoadShow
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
    beforeCreate() {},
    created() {
        console.log("********",this.isLoadShow)
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