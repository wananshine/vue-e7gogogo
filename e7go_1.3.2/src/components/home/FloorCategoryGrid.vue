<template>
  <FloorCategoryGrid>

        <!--第1种-->
        <FloorCategoryInner style="border-bottom: 1px solid #e9e9e9; padding-bottom: 60px;" v-for="(floor, fidx) in floorList" :key="fidx">
            <RowTitle>
                <span class="big-title">{{floor.businessObj.content.configData.floorTitle}}</span>
                <small class="small-title">
                    热搜词:
                    <a class="">DW</a>
                </small>
                <i class="more-title">更多</i>
            </RowTitle>
            <RowProducts>
                <div class="pt-cover">
                    <p class="pt-pic" :style="`background-image:url(${floor.businessObj.content.configData.floorImage})`">
                        <a></a>
                        <a></a>
                        <a></a>
                        <a></a>
                        <a></a>
                        <a></a>
                    </p>
                </div>
                <div class="pt-show">
                    <a class="pt-cont pt-itm1" :href="floor.businessObj.content.configData.activityImageLink1" target="_blank">
                        <p class="cont-tit">{{floor.businessObj.content.configData.activityTitle1}}</p>
                        <p class="cont-desc">{{floor.businessObj.content.configData.sellPoint1}}</p>
                        <p><img :src="floor.businessObj.content.configData.activityImage1" /></p>
                    </a>
                    <a class="pt-cont pt-itm2" :href="floor.businessObj.content.configData.activityImageLink2" target="_blank">
                        <p class="cont-tit">{{floor.businessObj.content.configData.activityTitle2}}</p>
                        <p class="cont-desc">{{floor.businessObj.content.configData.sellPoint2}}</p>
                        <p><img :src="floor.businessObj.content.configData.activityImage2" /></p>
                    </a>
                    <a class="pt-cont pt-itm3" :href="floor.businessObj.content.configData.activityImageLink3" target="_blank">
                        <p class="cont-tit">{{floor.businessObj.content.configData.activityTitle3}}</p>
                        <p class="cont-desc">{{floor.businessObj.content.configData.sellPoint3}}</p>
                        <p class=""><img :src="floor.businessObj.content.configData.activityImage3" /></p>
                    </a>
                    <a class="pt-cont pt-itm4" :href="floor.businessObj.content.configData.activityImageLink4" target="_blank">
                        <p class="cont-tit">{{floor.businessObj.content.configData.activityTitle4}}</p>
                        <p class="cont-desc">{{floor.businessObj.content.configData.sellPoint4}}</p>
                        <p><img :src="floor.businessObj.content.configData.activityImage4" /></p>
                    </a>
                </div>
                <div class="pt-list">
                    <div class="pt-hot-tit">{{floor.businessObj.content.configData.rankListTitle}}</div>
                    <!-- swiper -->
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(pt, ptidx) in floor.businessObj.content.composeData" :key="ptidx">
                            <div class="pt-cell">
                                <div class="pt-pic"><img :src="pt.imageUrl"></div>
                                <div class="pt-info">
                                    <p class="pt-name">{{pt.title}}</p>
                                    <p class="pt-price">
                                        <span class="pt-newprice">¥{{pt.actualCurrentPrice}}</span>
                                        <del class="pt-oldprice">¥{{pt.marketPrice}}</del>
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </RowProducts>
            <RowBrands>
                <h3 class="brand-tit">热卖品牌</h3>
                <ul class="brand-list">
                    <li class="brand-cell"><a><img :src="floor.businessObj.content.configData.hotSaleBrandImg1" /></a></li>
                    <li class="brand-cell"><a><img :src="floor.businessObj.content.configData.hotSaleBrandImg2" /></a></li>
                    <li class="brand-cell"><a><img :src="floor.businessObj.content.configData.hotSaleBrandImg3" /></a></li>
                    <li class="brand-cell"><a><img :src="floor.businessObj.content.configData.hotSaleBrandImg4" /></a></li>
                    <li class="brand-cell"><a><img :src="floor.businessObj.content.configData.hotSaleBrandImg5" /></a></li>
                </ul>
            </RowBrands>
        </FloorCategoryInner>

        <!--第2种-->
        <FloorCategoryInner v-if="false">
            <FloorTitle></FloorTitle>
            <FloorProducts>
                <dl>
                    <dt><img src="//i1.mifile.cn/a4/xmad_15232433421155_vCzhJ.jpg" /></dt>
                    <dd>
                        <a class="pt-cell">
                            <div class="pt-img"><img src="//i1.mifile.cn/a4/xmad_15232433421155_vCzhJ.jpg" /></div>
                            <div class="pt-info">
                                <p class="pt-name">惠普（HP）M1216nfh 多功能四合一黑白激光一体机 （打印 复印 扫描 传真）</p>
                                <p class="pt-price">123.55</p>
                            </div>
                        </a>
                        <a class="pt-cell">2</a>
                        <a class="pt-cell">3</a>
                        <a class="pt-cell">4</a>
                        <a class="pt-cell">5</a>
                        <a class="pt-cell">6</a>
                        <a class="pt-cell">7</a>
                        <a class="pt-cell">8</a>
                    </dd>
                </dl>
            </FloorProducts>
        </FloorCategoryInner>

        <!--第3种-->
        <FloorCategoryInner v-if="false">
            <FloorCategoryTitle>
                <el-row>
                    <el-col :span="6">
                        <div class="pt-lg-tit grid-content bg-purple">
                            <i class="">*</i>
                            <strong>美妆</strong>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <sub class="pt-xs-tit grid-content bg-purple">
                            <a>1</a>
                            <a>查看更多</a>
                        </sub>
                    </el-col>
                </el-row>
            </FloorCategoryTitle>
            <FloorCategoryProducts v-if="false">
                <el-row>
                    <el-col :span="4"><img src="//i1.mifile.cn/a4/xmad_15232433421155_vCzhJ.jpg"></img></el-col>
                    <el-col :span="14">2</el-col>
                    <el-col :span="6">3</el-col>
                </el-row>
            </FloorCategoryProducts>
            <FloorCategoryProducts>
                <div class="pt-row">
                    <div class="pt-cover"><img src="//i1.mifile.cn/a4/xmad_15232433421155_vCzhJ.jpg" /></div>
                    <ul class="pt-list">
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                        <li class="pt-cell"><img src="https://static.e7go.com/e7go/8be7eb8b-a646-4d82-9780-23b396769b93/5a167435Nea0a39e7.jpg?x-oss-process=image/resize,h_144" /></li>
                    </ul>
                    <div class="pt-brand">3</div>
                </div>
            </FloorCategoryProducts>
        </FloorCategoryInner>

        
  </FloorCategoryGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/
 
import styled from 'vue-styled-components';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { commonStyle, styleFn } from '@/assets/js/stylebase'
import JsonData from '@/assets/json/cartBuy.json'


/***********************************************************/
const stylePtProps = {
    background:{
        default:'#2fcea6',
        type:String
    },
    backgroundImage: {
        default: "",
        type: String
    },
    fontSize:{
        default:'16px',
        type:String
    },
}
const FloorCategoryGrid = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 40px;
    position: relative;
    overflow: hidden;
`
const FloorCategoryInner = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const FloorCategoryTitle = styled.h3`
    position: relative;
    overflow: hidden;
    line-height: 52px;
    margin: auto;
    .pt-lg-tit{
        strong{ font-size: 22px; coloe: #000; margin-left: 5px; cursor: pointer; }
    }
    .pt-xs-tit{ 
        display: inherit;
        text-align: right;
        a{ font-size: 14px; padding: 0px 5px; cursor: pointer; }
    }
`
const FloorCategoryProducts = styled.div`
    margin: auto;
    position: relative;
    overflow: hidden;
    .pt-row{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: flex-start;
        align-content: flex-start;
        .pt-cover{
            width: 234px;
            img{ width: 100%; }
        }
        .pt-list{
            flex: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: flex-start;
            align-content: flex-start;
            .pt-cell{
                width: 25%;
                height: 50%;
                line-height: 50%;
                text-align: center;
                //border: 1px solid red;
                flex-shrink: 1;
                flex-grow: 0;
                flex-basis: auto;
                img{ width: 80%; } 
            }
        }
        .pt-brand{
            width: 234px;
            background-color: skyblue;
        }
    }
    img{ width: 100% }
`

const FloorTitle = styled.h3`
    position: relative;
    overflow: hidden;
    height: 52px;
    line-height: 52px;
    margin: auto;
    background-image:url(${require("@/assets/images/f-title-1.png")});
    background-size: 12% auto;
    background-repeat: no-repeat;
    background-position: left;
    background-clip: border-box;
    background-origin: border-box;
`
const FloorProducts = styled.div`
    position: relative;
    dl{
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        justify-content: flex-start;
        align-content: flex-start;
        dt{
            width: 235px;
            margin-right: 10px;
            img{ width: 100%; }
        }
        dd{
            flex: 1;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            align-content: flex-start; 
            .pt-cell{ 
                position: relative;
                overflow: hidden;
                width: 230px; 
                height: 48%; 
                margin-bottom: 1%; 
                flex-shrink: 1; 
                flex-grow: 0; 
                flex-basis: auto; 
                background: #f5f5f5; 
                display: block;
                .pt-img{
                    img{ width: 100%; }
                }
                .pt-info{
                    .pt-name{ font-size: 12px; }
                    .pt-price{}
                }
            }
        }
    }
`

const RowTitle = styled.div`
    line-height: 42px;
    .big-title{
        font-size: 22px;
        font-weight: bold;
    }
    .small-title{
        margin-left: 14px;
        color: #888;
        a{ color: #666; cursor: pointer; }
    }
    .more-title{ float: right; cursor: pointer; }
`
const RowProducts = styled.div`
    ${styleFn.flexbox};
    align-items: flex-start;
    position: relative;
    zoom: 1;
    &:before{ ${styleFn.clearfix} };
    &:after{ ${styleFn.clearfix} };
    .pt-cover{
        min-width: 330px;
        max-width: 330px;
        background: #eee;
        float: left;
        .pt-pic{
            display: block;
            height: 542px;
        }
    }
    .pt-show{
        ${styleFn.flex1};
        zoom: 1;
        border: 1px solid #e9e9e9;
        border-width: 1px 0px;
        box-sizing: border-box;
        float: left;
        .pt-cont{
            width: 325.5px;
            width: calc(100%/2);
            height: 270px;
            padding: 30px 0 0;
            position: relative;
            overflow: hidden;
            color: #333;
            display: inline-block;
            border: 1px solid #e9e9e9;
            border-width: 0 1px 1px 0;
            box-sizing: border-box;
            .cont-tit{
                font-size: 24px;
                font-weight: 400;
                line-height: 1;
                margin: 0 10px;
            }
            .cont-desc{
                font-size: 14px;
                line-height: 20px;
                margin: 10px 10px 14px;
            }
        }
        .pt-itm1{
            float: left;
            text-align: center;
        }
        .pt-itm2{
            float: left;
            text-align: center;
        }
        .pt-itm3{
            float: left;
            text-align: center;
            border-bottom: none;
        }
        .pt-itm4{
            float: left;
            text-align: center;
            border-bottom: none;
        }
    }
    .pt-list{
        min-width: 219px;
        max-width: 219px;
        overflow: hidden;
        border: 1px solid #e9e9e9;
        border-width: 0 1px 1px 0;
        float: left;
        .pt-hot-tit{
            font-size: 16px;
            line-height: 56px;
            padding: 0 0 0 10px;
            color: #333;
            font-weight: 700;
            height: 56px;
            border: 1px solid #e9e9e9;
            border-width: 1px 1px 1px 0;
            position: relative;
        }
        .swiper-container{
            overflow: visible;
            .swiper-pagination-bullets{
                top: -38px;
                right: -72px;
                bottom: auto;
                left: auto;
            }
        }
        .swiper-slide{
            border-bottom: 1px dashed #e9e9e9;
            &:nth-of-type(4n){ border-bottom: none; }
        }
        .pt-cell{
            zoom: 1;
            padding: 18px 10px;
            ${styleFn.flexbox};
            align-items: flex-start;
            .pt-pic{
                width: 82px;
                min-width: 82px;
                max-width: 82px;
                img{ width: 100%; }
            }
            .pt-info{
                margin-left: 10px;
                .pt-name{
                    flex: 1;
                    overflow: hidden;
                    ${styleFn.clamp2};
                    font-size: 13px;
                    line-height: 18px;
                    cursor: pointer;
                    &:hover{  text-decoration: underline }
                }
                .pt-price{
                    margin-top: 10px;
                    .pt-newprice{
                        font-size: 20px;
                        color: #ff1e32;
                        font-weight: 700;
                    }
                    .pt-oldprice{
                        color: #999;
                        margin: 0 0 0 12px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
`
const RowBrands = styled.div`
    margin-top: 20px;
    .brand-tit{
        line-height: 42px;
    }
    .brand-list{
        ${styleFn.flexbox};
        .brand-cell{
            width: calc(100%/5);
            padding: 65px;
            border: 1px solid #e9e9e9;
            a{
                img{ width: 100% }
            }
        }
    }
`

/***********************************************************/
export default {
    components: {  
        swiper,
        swiperSlide,
        FloorCategoryGrid,
        FloorCategoryInner,
        FloorCategoryTitle,
        FloorCategoryProducts,
        FloorTitle,
        FloorProducts,

        RowTitle,
        RowProducts,
        RowBrands
    },
    name: "",
    data() {
        return {
            floorList: [],
            swiperOption: {
                slidesPerView: 1,
                slidesPerColumn: 4,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
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
        this.floorList = JsonData.KaoLaGetSportsGoods.data;
        console.log(this.floorList)
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