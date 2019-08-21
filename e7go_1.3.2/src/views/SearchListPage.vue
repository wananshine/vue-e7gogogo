<template>
    <SearchGrid>
        <SiteHeader isType="SearchList"></SiteHeader>
        <FilterBox>
            <ul class="filter-list">
                <li data-name="分类" class="filter-row">
                    <div class="filter-title">分类</div>
                    <div class="filter-right">
                        <div class="filter-category">
                            <a>侦探/悬疑/推理</a>
                        </div>
                        <div class="filter-more" data-name="分类" @click="moreCustomer($event)">更多</div>
                    </div>
                </li>
                <li data-name="其他分类" class="filter-row">
                    <div class="filter-title">其他分类</div>
                    <div class="filter-right">
                        <div class="filter-category">
                            <a>图书</a>
                            <a>电子书/网文/听书</a>
                            <a>文化创意用品</a>
                            <a>手机通讯</a>
                            <a>家具家装</a>
                            <a>家居家纺</a>
                            <a>玩具童车</a>
                            <a>图书</a>
                            <a>电子书/网文/听书</a>
                            <a>文化创意用品</a>
                            <a>手机通讯</a>
                            <a>家具家装</a>
                            <a>家居家纺</a>
                            <a>玩具童车</a>
                            <a>图书</a>
                            <a>电子书/网文/听书</a>
                            <a>文化创意用品</a>
                            <a>手机通讯</a>
                            <a>家具家装</a>
                            <a>家居家纺</a>
                            <a>玩具童车</a>
                            <a>图书</a>
                            <a>电子书/网文/听书</a>
                            <a>文化创意用品</a>
                            <a>手机通讯</a>
                            <a>家具家装</a>
                            <a>家居家纺</a>
                            <a>玩具童车</a>
                            <a>图书</a>
                            <a>电子书/网文/听书</a>
                            <a>文化创意用品</a>
                            <a>手机通讯</a>
                            <a>家具家装</a>
                            <a>家居家纺</a>
                            <a>玩具童车</a>
                        </div>
                        <div class="filter-more" @click="moreCustomer($event)">更多</div>
                    </div>
                </li>
                <li data-name="出版社" class="filter-row">
                    <div class="filter-title">出版社</div>
                    <div class="filter-right">
                        <div class="filter-category">
                            <a>南海出版公司</a>
                            <a>江苏文艺出版社</a>
                            <a>长江出版社</a>
                            <a>吉林摄影出版社</a>
                            <a>新星出版社</a>
                            <a>黑龙江美术出版社</a>
                            <a>浙江少年儿童出版社</a>
                        </div>
                        <div class="filter-more">更多</div>
                    </div>
                </li>
                <li data-name="作者" class="filter-row">
                    <div class="filter-title">作者</div>
                    <div class="filter-right">
                        <div class="filter-category">
                            <a>东野圭吾</a>
                            <a>裟椤双树</a>
                            <a>非天夜翔</a>
                            <a>彭柳蓉</a>
                            <a>沧月</a>
                            <a>夜北</a>
                            <a>常怡</a>
                        </div>
                        <div class="filter-more">更多</div>
                    </div>
                </li>
                <li data-name="品牌" class="filter-row">
                    <div class="filter-title">品牌</div>
                    <div class="filter-right">
                        <div class="filter-category">
                            <a>作家榜经典</a>
                            <a>理想国</a>
                            <a>新经典</a>
                            <a>当当科文</a>
                            <a>后浪</a>
                            <a>读客</a>
                            <a>白马时光</a>
                        </div>
                        <div class="filter-more">更多</div>
                    </div>
                </li>
            </ul>
        </FilterBox>
        <FilterBox>
            <ul class="filter-sort"></ul>
        </FilterBox>
        <SearchResult>
            <ul>
                <li v-for="(book, bidx) in recommendBook" :key="bidx">
                    <p>{{book.author_name}}</p>
                    ***
                    <p>{{book.product_name}}</p>
                    ***
                    <p>{{book.pubname}}</p>
                    ***
                    <p>{{book.reason}}</p>
                    ---
                </li>
            </ul>
            <LoadingShow></LoadingShow>
        </SearchResult>
        <ItemComponent :vvv="vvv" :uuu="uuu" ></ItemComponent>
        <div @click="paginationCustomer($event)">分页 </div>
    </SearchGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import { mapState } from 'vuex'
import styled from 'vue-styled-components';
import JsonData from '@/assets/json/cartBuy.json'
import { postJSON, getJSON } from '@/api/api1'
import { livingList, DBlol, indexVideo, musicRankingsDetails, zhyqTest } from '@/api/api2'
import LoadingShow from '@/components/ssi/LoadingShow'
import SiteHeader from '@/components/ssi/SiteHeader.vue'


/***********************************************************/
const SearchGrid = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`
const FilterBox = styled.aside`
    width: 1200px;
    margin: auto;
    .filter-list{
        .filter-row{
            position: relative;
            overflow: hidden;
            font-size: 12px;
            border-bottom: 1px dotted #eeeceb;
            background-color: #fef8f5;
            .filter-title{
                width: 72px;
                // height: 18px;
                // line-height: 18px;
                float: left;
                color: #999;
                overflow: hidden;
                white-space: nowrap;
                padding: 12px 8px;
                box-sizing: border-box;
                background-color: #fef8f5;
            }
            .filter-right{
                position: relative;
                width: 1128px;
                height: 30px;
                float: left;
                background-color: #fff;
                .filter-category{
                    position: relative;
                    padding: 0px 120px 0px 35px;
                    box-sizing: border-box;
                    background-color: #fff;
                    a{
                        width: 110px;
                        height: 28px;
                        line-height: 28px;
                        overflow: hidden;
                        position: relative;
                        display: inline-block;
                        padding: 3px 10px 3px 0;
                        cursor: pointer;
                        &:hover{ color: red; text-decoration: underline; }
                    }
                }
                .filter-more{
                    position: absolute;
                    right: 0px;
                    top: 12px;
                    cursor: pointer;
                    &:hover{
                      color: red;
                      text-decoration: underline;
                    }
                }
            }

        }
    }
`
const SearchResult = styled.section`
    position: relative;
    overflow: hidden;
    width: 1200px;
    margin: auto;
    min-height: 500px;
`
const SearchItem = (propsData)=>{
    console.log(propsData)
    return(
        <li>

        </li>
    )
}

const ItemComponent = (propsData) => {
    const { props, parent } = propsData;
    console.log("MyComponent:", propsData, props.vvv);
    return(
        <div>
            {props.vvv.a}
            {props.vvv.b}
            {props.vvv.c}
            {
                props.uuu.map((v, i)=>{
                    return(<span onClick={(e) =>parent.onChange(e)}>{v.name}</span>)
                })
            }
        </div>
    )
}

/***********************************************************/
export default {
    components: {
        SiteHeader,
        LoadingShow,
        SearchGrid,
        FilterBox,
        SearchResult,
        ItemComponent,
    },
    name: "",
    data() {
        return {
            getNews: [],
            vvv: {
                a: 1,
                b: 2,
                c: 3
            },
            uuu: [
                {name: "荔枝"},
                {name: "栗子"},
                {name: "苹果"}
            ],
            recommendBook: [],//JsonData.DangDangRecommendBook.returnval.items
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
    computed: {
        ddd() {
            return this.$store.getters.ddd
        }
    },
    methods: {
        async fetchGoodsId() {
            //console.log(this.$route.params.goodsId);
        },
        onChange(e){
            console.log(e)
            this.$set(this.$data,"uuu",[
                {name: "荔枝1"},
                {name: "栗子1"},
                {name: "苹果1"},
                {name: "荔枝2"},
                {name: "栗子2"},
                {name: "苹果2"}
            ])
            console.log("tolistenchild");
        },
        //立即购买
        nowbuyCustomer(product, e) {
            // this.$router.replace({ path: '/indexCart' })
            // console.log(product, e)
        },
        moreCustomer(e){
            e.target.parentNode.style.height = "auto"
            console.log(e, e.target, e.currentTarget, e.target.parentNode)
        },
        paginationCustomer(e){
            this.$store.dispatch("isLoadShow", true);
            //获取新闻信息
            getJSON('http://api.wangshuwen.com/getNews', {})
                .then(res=>{
                    // this.$store.commit("IS_LOAD_SHOW", false);
                    this.$set(this.$data, "getNews", JSON.parse(res).data)
                    this.$store.dispatch("isLoadShow", false);
                    console.log("新闻信息:",JSON.parse(res), this.$store.getters)
                }).catch(err=>{
                    console.log(err)
                })
        }
    },
    beforeCreate() {
        this.$store.dispatch("isLoadShow", true);
    },
    created() {

      console.log("e331",this)
      console.log("e332",this.$axios.get('http://10.130.202.170:8080/search/test'))
      new Promise(()=>{
        this.$axios.get('http://10.130.202.170:8080/search/test').then((res)=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      })

        zhyqTest().then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })

        DBlol().then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        indexVideo().then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        musicRankingsDetails().then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })

        //网易新闻的 API
        // 娱乐类 - BA10TA81wangning
        // 电视 - BD2A86BEwangning
        // 电影 - BD2A9LEIwangning
        // 明星 - BD2AB5L9wangning
        // 音乐 - BD2AC4LMwangning
        // 体育类 - BA8E6OEOwangning
        // 财经类 - BA8EE5GMwangning
        // 军事类 - BAI67OGGwangning
        // 军情 - DE0CGUSJwangning
        // getJSON('https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-10.html', {})
        //     .then(res=>{
        //         console.log("网易新闻:",JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        // //豆瓣电影API
        // getJSON('http://api.douban.com/v2/movie/top250?start=25&count=25', {})
        //     .then(res=>{
        //         console.log("豆瓣电影:",JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        // //省市区(县)街道四级联动：
        // getJSON('http://api.wangshuwen.com/getRegion', {})
        //     .then(res=>{
        //         console.log("省市区(县)街道四级联动:",JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        // //根据ip地址获取位置信息：
        // getJSON('http://api.wangshuwen.com/ip2Location', {})
        //     .then(res=>{
        //         console.log("位置信息:",JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        //
        // //根据百度搜索引擎获取美女图片信息
        // getJSON('http://api.wangshuwen.com/getBeautyImages', {})
        //     .then(res=>{
        //         console.log("图片信息:",JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        // //获取新闻信息
        // getJSON('http://api.wangshuwen.com/getNews', {})
        //     .then(res=>{
        //         // this.$store.commit("IS_SHOW", false);
        //         // this.$set(this.$data, "getNews", JSON.parse(res).data)
        //         // this.$store.dispatch("isLoadShow", false);
        //         console.log("新闻信息:",JSON.parse(res), this.$store.getters)
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        // //获取正在热映的电影
        getJSON('http://api.wangshuwen.com/getHotMovie', {})
            .then(res=>{
                this.$set(this.$data, "getNews", JSON.parse(res).data.subjects)
                this.$store.dispatch("isLoadShow", false);
                console.log("热映的电影:",JSON.parse(res))
            }).catch(err=>{
                console.log(err)
            })
        //
        // //获取电影top250
        // getJSON('http://api.wangshuwen.com/getTopMovie', {})
        //     .then(res=>{
        //         console.log("电影top250:",JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        //
        // getJSON('../api/v1/live/lol', {})
        //     .then(res=>{
        //         console.log(JSON.parse(res))
        //     }).catch(err=>{
        //         console.log(err)
        //     })

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
