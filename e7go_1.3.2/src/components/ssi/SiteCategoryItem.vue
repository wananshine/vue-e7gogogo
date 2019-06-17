<!-- 全部商品分類導航( 絕對定位 ) -->
<template>
  <CategoryItem >
    <div @mouseleave="mouseEnterSlideHideCustomer($event)">
      <div class="main-menu" @mouseenter="mouseEnterSlideShowCustomer($event)" >
        <i class="el-icon-menu"></i>
        <span>全部商品分類</span>
      </div>
      <div v-if="typeString == 'home'" class="category-content" @mouseleave="mouseLeaveCustomer($event)">
          <!-- 父級分類加載 -->
          <ul class="main-category-list">
              <li  @mouseenter="mouseEnterCustomer($event, category)" v-for="(category, cgidx) in categoryList"  :class="[category.id === categoryShow ? 'category-item-active' : '', 'category-item']" :key="cgidx">
                  {{category.name}}
              </li>
          </ul>

          <!-- 所有子級分類加載 -->
          <div v-if="false" class="child-category-list">
              <div v-for="(category, childidx) in categoryList"
                  v-if="category.id === categoryShow"
                  :data-childidx = "childidx"
                  :key="childidx">
                  {{category.id}} *******
              </div>
          </div>

          <!-- 所需子級分類加載 -->
          <div class="child-category-detail" v-if="categoryDetailShow.id === categoryShow">
              <div class="cate-list" :data-childidx = "categoryDetailShow.id">
                  <dl v-for="(cell, cellidx) in cellList" :key="cellidx">
                      <dt v-text="cell.title"></dt>
                      <dd>
                          <a v-for="(c, cidx) in cell.child" :key="cidx" v-text="c.name"></a>
                      </dd>
                  </dl>
              </div>
          </div>
      </div>

      <div v-else class="category-content" @mouseleave="mouseLeaveCustomer($event)">
          <!-- 父級分類加載 -->
          <ul class="main-category-list" v-if="slideShow">
              <li  @mouseenter="mouseEnterCustomer($event, category)" v-for="(category, cgidx) in categoryList"  :class="[category.id === categoryShow ? 'category-item-active' : '', 'category-item']" :key="cgidx">
                  {{category.name}}
              </li>
          </ul>

          <!-- 所需子級分類加載 -->
          <div class="child-category-detail" v-if="categoryDetailShow.id === categoryShow">
              <div class="cate-list" :data-childidx = "categoryDetailShow.id">
                  <dl v-for="(cell, cellidx) in cellList" :key="cellidx">
                      <dt v-text="cell.title"></dt>
                      <dd>
                          <a v-for="(c, cidx) in cell.child" :key="cidx" v-text="c.name"></a>
                      </dd>
                  </dl>
              </div>
          </div>
      </div>
    </div>
  </CategoryItem>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';


/***********************************************************/
const CategoryItem = styled.div`
    width: auto;
    margin: auto;
    position: relative;
    position: absolute;
    top: 52px;
    z-index: 2;
    .main-menu{
        width: 200px;
        height: 52px;
        line-height: 52px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        background-color: #1582ff;
        cursor: pointer;
        margin-top: -52px;
    }
    .category-content{
        width: 200px;
        position: relative;
        .main-category-list{
            height: 500px;
            overflow: hidden;
            background-color: rgba(0,0,0,0.5);
            .category-item{
                line-height: 62px;
                color: #fff;
                text-align: left;
                padding: 0px 20px;
                box-sizing: border-box;
                cursor: pointer;
                font-size: 14px;
                font-weight: 100;
                &:hover{ background-color: #1582ff }
            }
            .category-item-active{
                background-color: #1582ff;

            }
        }

        .child-category-list{
            position:  ;
            // background-color: #fff;
            background-color: rgba(0,0,0,0.2);
        }

        .child-category-detail{
            position: absolute;
            top: 0px; left: 200px;
            width: 1000px;
            height: 100%;
            padding-top: 18px;
            background-color: rgba(255,255,255,1);
            .cate-list{
                dl{
                    line-height: 20px;
                    position: relative;
                    overflow: hidden;
                    padding: 10px 0px 0px;
                    text-align: center;
                    dt{
                        width: 160px;
                        float: left;
                        font-size: 14px;
                        // font-weight: 100;
                        cursor: pointer;
                        &:hover{ color: #1582ff }
                    }
                    dd{
                        font-size: 12px;
                        // font-weight: 100;
                        text-align: left;
                        width: 800px;
                        float: left;
                        padding: 0px 0px 10px;
                        border-bottom: 1px solid #eee;
                        a{ padding-right: 22px; cursor: pointer; &:hover{ color: #1582ff } }
                    }
                }
            }
        }

    }

`
/***********************************************************/
export default {
    components: {
      CategoryItem,
    },
    name: "",
    props: {
      typeString: {
        type: String,
        required: false
      }
    },
    data() {
        return {
            categoryShow: "",
            categoryDetailShow: {},
            categoryList: [
                { name: "測試", id: 1, icon: "", },
                { name: "勞保 | 安全 | 消防", id: 2, icon: "", },
                { name: "清潔 | 辦公 | 暖通", id: 3, icon: "", },
                { name: "工控 | 電工 | 照明", id: 4, icon: "", },
                { name: "刀具 | 量具 | 磨具", id: 5, icon: "", },
                { name: "液壓 | 管閥 | 泵", id: 6, icon: "", },
                { name: "緊固件 | 密封 | 五金件", id: 7, icon: "", },
                { name: "家具 | 家居 | 家裝 | 家紡", id: 8, icon: "", },
            ],
            cellList: [
                {
                    title: "手機通訊",
                    child: [
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" }
                    ]
                },
                {
                    title: "手機配件",
                    child: [
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" }
                    ]
                },
                {
                    title: "智能設備",
                    child: [
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" }
                    ]
                },
                {
                    title: "影音電子",
                    child: [
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" },
                        { name: "全部手機" , id: "", to: "" },
                        { name: "iPhone" , id: "", to: "" },
                        { name: "華為" , id: "", to: "" },
                        { name: "小米" , id: "", to: "" },
                        { name: "vivo" , id: "", to: "" },
                        { name: "OPPO" , id: "", to: "" },
                        { name: "三星" , id: "", to: "" },
                        { name: "魅族" , id: "", to: "" },
                        { name: "二手手機" , id: "", to: "" },
                        { name: "以舊換新" , id: "", to: "" }
                    ]
                }
            ],
            brandList: [],
            slideShow: false,
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
        console.log("typeString:",this.typeString)
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
        //
        mouseEnterCustomer(e, obj) {
            // this.$router.replace({ path: '/indexCart' })
            console.log(e, obj)
            //this.$set(this.$data, "categoryShow", obj.id);
            Object.assign(this.$data, {categoryShow: obj.id});
            Object.assign(this.$data, {categoryDetailShow: obj})
        },
        mouseLeaveCustomer(e){
            // this.$router.replace({ path: '/indexCart' })
            console.log(e)
            // this.$set(this.$data, "categoryShow", "");
            Object.assign(this.$data, {categoryShow: "", slideShow: false})
        },
        mouseEnterSlideShowCustomer(e){
          this.$set(this.$data, "slideShow", true);
          console.log(this.$data)
        },
        mouseEnterSlideHideCustomer(e){
          this.$set(this.$data, "slideShow", false);
          console.log(this.$data)
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
