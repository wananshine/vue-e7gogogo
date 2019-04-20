<template>
  <CartGrid>
      <Thead>
        <div class="tb-row">
            <ul class="tb-caption">
                <li><el-checkbox @change="checkAllSkuCustomer($event)" v-model="allskuChecked"></el-checkbox>全選</li>
                <li>商品信息</li>
                <li></li>
                <li></li>
                <li>單價</li>
                <li>數量</li>
                <li>金額</li>
                <li>操作</li>
            </ul>
        </div>
      </Thead>
      <Tbody>
        <div class="tb-row" v-for="(sku, idx) in cartList" :key="idx">
            <ul :class="['tb-sku',sku.isBuy===true?'tb-y':'']" :ref="'sku_'+idx">
                <li class="sku-radio">
                    <el-checkbox @change="singleCheckedCustomer($event, sku)" v-model="sku.isBuy"></el-checkbox>
                </li>
                <li class="sku-img">
                    <img :src="sku.img">
                </li>
                <li class="sku-name">
                    <p class="sku-title" @click="linkCustomer($event)" :title="sku.title">{{sku.title}}</p>
                    <em>444</em>
                    <div><b>5</b></div>
                </li>
                <li class="sku-attribute" @click="amendAttributeCustomer($event)">
                    <p class="sku-line">颜色: {{sku.attr.color}}</p>
                    <p class="sku-line">尺码: {{sku.attr.size}}</p>
                </li>
                <li class="sku-price">
                    <del class="sku-discount-price">${{sku.oldprice}}</del>
                    <i class="sku-after-price">${{sku.newprice}}</i>
                </li>
                <li class="sku-amount">
                    <div>
                        <span class="sku-minus" @click="skuMinusCustomer($event, sku)">-</span>
                        <input @input="skuInputCustomer($event, sku)" v-model="sku.amount"  />
                        <span class="sku-plus" @click="skuPlusCustomer($event, sku)">+</span>
                    </div>
                    <div class="sku-limit" v-if="![null, '', undefined].includes(sku.limit)">限购{{sku.limit}}件</div>
                </li>
                <li class="sku-total-price">
                    <i>${{(sku.newprice * sku.amount).toFixed(2)}}</i>
                </li>
                <li class="sku-editor">
                    <p class="sku-favorites" @click="skuFavoritesCustomer($event)">移入收藏夹</p>
                    <p class="sku-delete" @click="skuDeleteCustomer($event)">删除</p>
                </li>
            </ul>
        </div>
      </Tbody>
      <Tfoot>
        <div>總價：{{selectedTotalPrice}}</div>
      </Tfoot>

      <RowHead>
        <el-checkbox @change="HandleHwAllChecked($event)" v-model="hwAllChecked">全選</el-checkbox>
      </RowHead>
      <RowBody>
        <div class="sku-row"  v-for="(h, hidx) in HuaWeiCartData" :key="hidx">
            <ul class="sku-gather">
                <li class="sku-col col-check">
                    <input type="checkbox" @change="HandleHwSkuChecked($event, h)" :value="h.skuId" v-model="HuaWeiSkuCheckedData" />           
                    <!--<el-checkbox  @change="HandleHwSkuChecked($event, h)" :true-label="h.skuId" v-model="HuaWeiSkuCheckedData[hidx]"></el-checkbox>--> 
                </li>
                <li class="sku-col col-img">
                    <p><img :src="h.sbom.photoName" /></p>
                </li>
                <li class="sku-col col-name">
                    <p>{{h.itemName}}</p>
                </li>
                <li class="sku-col col-price">{{h.originalPrice}}</li>
                <li class="sku-col col-amount">
                    <el-input-number v-show="false" v-model="h.qty" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    <div class="">
                        <span class="col-minus" @click="HandleMinusAmount($event, h)">-</span>
                        <input class="col-amount-input" @input="HandleInputAmount($event, h)" v-model="h.qty" />
                        <span class="col-plus" @click="HandlePlusAmount($event, h)">+</span>
                    </div>
                </li>
                <li class="sku-col col-total">{{h.originalPrice * h.qty}}</li>
                <li class="sku-col col-action">
                    <p>移入收藏夹</p>
                    <p>刪除</p>
                </li>
            </ul>
        </div>
      </RowBody>
      <div>總價: {{HwSelectedPrice}}</div>

  </CartGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';
import { commonStyle, styleFn } from '@/assets/js/stylebase'
import JsonData from '@/assets/json/cartBuy.json'


/***********************************************************/
const font_12 = {
    "font-size": "12px"
}
const CartGrid = styled.div`
    ${commonStyle};
    overflow: hidden;
`
const Thead = styled.div`
    .tb-caption{
        ${styleFn.flexbox};
        li{ text-aglin: center;  ${styleFn.flex1};}
    }
`
const Tbody = styled.div`
    .tb-row{
        background: #fcfcfc;
        border-bottom: 1px solid #e7e7e7;
        .tb-sku{
            zoom: 1;
            padding: 18px 0px;
            ${styleFn.flexbox};
            align-items: flex-start;
            &:before{ ${styleFn.clearfix} }
            &:after{ ${styleFn.clearfix} }
            .sku-radio{}
            .sku-img{}
            .sku-name{
                width: 342px;
                // min-height: 119px;
                // _height: 119px;
                line-height: 16px;
                overflow: hidden;
                _overflow: visible;
                _zoom: 1;
                .sku-title{
                    ${font_12};
                    ${styleFn.clamp2}
                }
            }
            .sku-attribute{
                .sku-line{
                    ${font_12};
                    line-height: 16px;
                    margin: 0 5px 0 15px;
                    color: #9c9c9c;
                    ${styleFn.clamp2}
                }
            }
            .sku-price{
                color: #9c9c9c;
                ${font_12};
                font-family: Verdana,Tahoma,arial;
                .sku-discount-price{
                    text-decoration: line-through;
                }
                .sku-after-price{
                    display: block;
                    line-height: 16px;
                }
            }
            .sku-amount{
                input{ width: 32px; text-align: center; }
                .sku-minus{ cursor: pointer; }
                .sku-plus{ cursor: pointer; }
                .sku-limit{ ${font_12}; line-height: 16px; text-align: center; }
            }
            .sku-total-price{
                ${font_12}; color: #f40; font-weight: 700;
            }
            .sku-editor{
                ${font_12}; color: #000;
                .sku-favorites{ line-height: 20px; cursor: pointer; &:hover{ color: #409EFF } }
                .sku-delete{ line-height: 20px; cursor: pointer; &:hover{ color: #409EFF } }
            }
        }
        .tb-y{ background-color: #409eff1f }
    }
`
const Tfoot = styled.div`

`

const RowHead = styled.div`
    padding: 30px 0px;
`
const RowBody = styled.div`
    .sku-row{
        min-height: 158px;
        .sku-gather{
            zoom: 1;
            padding: 18px 0px;
            ${styleFn.flexbox};
            align-items: flex-start;
            &:before{ ${styleFn.clearfix} }
            &:after{ ${styleFn.clearfix} }
            .col-img{
                p{
                    width: 120px;
                    img{ width: 100% }
                }
            }
            .col-name{
                width: 360px;
                cursor: pointer;
            }
            .col-price{ width: 90px; text-align: center; }
            .col-amount{
                text-align: center;
                .col-minus{ padding: 5px 10px; cursor: pointer; }
                .col-amount-input{ width: 24px; text-align: center; }
                .col-plus{ padding: 5px 10px; cursor: pointer; }
            }
            .col-total{ width: 90px; text-align: center; }
            .col-action{}
        }
    }
`
/***********************************************************/
export default {
    components: {   
      CartGrid,
      Thead,
      Tbody,
      Tfoot,
      RowHead,
      RowBody
    },
    name: "",
    data() {
        return {
            skuChecked: [],
            allskuChecked: false,  //全選變量
            amount: 1,  //sku數量
            cartList: [
                { 
                    img: "http://static.e7go.com/b2b2e-dev/1aeb4aad-e9e0-467a-989e-cf41ad931cfd/112.jpg?x-oss-process=image/resize,h_80",
                    title: "【新风尚】太平鸟男装 春季新款个性破洞牛仔九分裤直筒牛仔裤潮BWHA81308",
                    attr: {
                        color: [ "牛仔藍", "批次二" ],
                        size: "L"
                    },
                    oldprice: "123.22",
                    newprice: "100.23",
                    totalprice: 100.23,
                    amount: 5,
                    limit: 1, 
                },
                { 
                    img: "http://static.e7go.com/b2b2e-dev/1aeb4aad-e9e0-467a-989e-cf41ad931cfd/112.jpg?x-oss-process=image/resize,h_80",
                    title: "【新风尚】太平鸟男装 春季新款个性破洞牛仔九分裤直筒牛仔裤潮BWHA81308",
                    attr: {
                        color: [ "牛仔藍", "批次二" ],
                        size: "L"
                    },
                    oldprice: "123.22",
                    newprice: "100.23",
                    totalprice: 100.23,
                    amount: 5,
                    limit: 5, 
                },
                { 
                    img: "http://static.e7go.com/b2b2e-dev/1aeb4aad-e9e0-467a-989e-cf41ad931cfd/112.jpg?x-oss-process=image/resize,h_80",
                    title: "【新风尚】太平鸟男装 春季新款个性破洞牛仔九分裤直筒牛仔裤潮BWHA81308",
                    attr: {
                        color: [ "牛仔藍", "批次二" ],
                        size: "L"
                    },
                    oldprice: "123.22",
                    newprice: "100.23",
                    totalprice: 100.23,
                    amount: 5,
                    limit: "", 
                }
            ],
            selectedTotalPrice: 0,  //所勾選商品總價

            HuaWeiCartData: null,  //HUaWei购物车
            HuaWeiSkuCheckedData: [],  //用于保存被选中的数据
            num: 1,
            hwAllChecked: false,
            HwSelectedPrice: 0,
        }
    },
    computed: {
        selected_price: {
            // getter
            get: function () {
                return 100
            },
            // setter
            set: function (newValue) {
                const selectSkuPrice = this.cartList.map((v, i)=>{
                    if(v.isBuy === true){
                        return v.newprice * v.amount;
                    }else{
                        return 0
                    }
                });
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                const totalPrice = selectSkuPrice.reduce((accumulator, currentValue)=>{ return accumulator + currentValue })
                this.$set(this.$data, "selectedTotalPrice", totalPrice);
                console.log("selectTotalPrice:",selectSkuPrice,totalPrice);
                return totalPrice;
            }
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
    beforeCreate() {},
    created() {
        this.$set(this.$data, 'HuaWeiCartData', JsonData.GetHuaWeiCartList.data.itemInfos);
        console.log("HuaWeiCartData:",this.HuaWeiCartData)
        this.$nextTick(()=>{
            console.log(styleFn.flexbox)
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
        //計算總價
        selectSkuTotalPrice(){
            const selectSkuPrice = this.cartList.map((v, i)=>{
                if(v.isBuy === true){
                    return v.newprice * v.amount;
                }else{
                    return 0
                }
            });
            const totalPrice = selectSkuPrice.reduce((accumulator, currentValue)=>{ return accumulator + currentValue })
            this.$set(this.$data, "selectedTotalPrice", totalPrice);
        },
        //全選
        checkAllSkuCustomer(e){
            let newCartList;
            if(e===true){
                newCartList = this.cartList.map((v, i)=>{
                    Object.assign(v, { isBuy: true });
                    return v;
                });
                this.$set(this.$data, 'cartList', newCartList);
            }else{
                newCartList = this.cartList.map((v, i)=>{
                    Object.assign(v, { isBuy: false });
                    return v;
                });
                console.log("checkAllSkuCustomer:", this.cartList)
            }
            this.$set(this.$data, 'cartList', newCartList);
            this.selectSkuTotalPrice();
        },
        //單選sku
        singleCheckedCustomer(e, sku){
            if(e === true){
                Object.assign(sku, { isBuy: true })
            }else{
                //this.allskuChecked = false
                delete sku.isBuy
            }
            this.allSkuChooseCustomer();
            this.selectSkuTotalPrice(); 
        },
        //遍歷判斷是否全選
        allSkuChooseCustomer(){
            let c = this.cartList.every((v, i)=>{
                return ![null, "", undefined].includes(v.isBuy) && v.isBuy
            })
            if(c){
                this.allskuChecked = true
            }else{
                this.allskuChecked = false
            }
            console.log("c",c)
        },
        //跳轉到sku詳情
        linkCustomer(){},
        //修改sku属性
        amendAttributeCustomer(e) {
            // this.$router.replace({ path: '/indexCart' })
            // console.log(product, e)
        },
        //減少sku數量
        skuMinusCustomer(e, sku){
            console.log(e, sku)
            if(sku.amount<=1){
                sku.amount = 1;
            }else{
                sku.amount--;
            }
            this.selectSkuTotalPrice();   
        },
        //添加sku數量
        skuPlusCustomer(e, sku){
            if(![null, '', undefined].includes(sku.limit)&&sku.amount>=sku.limit){
                sku.amount = sku.limit;
            }else{
                sku.amount++;
            }
            this.selectSkuTotalPrice();   
        },
        //輸入sku數量
        skuInputCustomer(e, sku){},
        //加入收藏夾
        skuFavoritesCustomer(e){},
        //刪除
        skuDeleteCustomer(e){},



        handleChange(value) {
            console.log(value);
        },
        //HuaWei全選
        HandleHwAllChecked(e){
            if(this.hwAllChecked){
                this.HuaWeiCartData.map((v, i)=>{
                    this.HuaWeiSkuCheckedData.push(v.skuId)
                });
            }else{
                this.$set(this.$data, "HuaWeiSkuCheckedData", [])
            }  
            this.HandleHwTotal();
            console.log("HuaWeiSkuCheckedData:",this.HuaWeiSkuCheckedData)
        },
        //HuaWei單選
        HandleHwSkuChecked(e, h){
            const len = this.HuaWeiSkuCheckedData.filter((v, i)=>{
                return v;
            }).length;
            if(len === this.HuaWeiCartData.length){
                this.$set(this.$data, "hwAllChecked", true)
            }else{
                this.$set(this.$data, "hwAllChecked", false)
            }
            this.HandleHwTotal();
        },
        //HuaWei輸入數量
        HandleInputAmount(e, h){
            console.log(e);
            this.HandleHwTotal();
        },
        //HuaWei減少數量
        HandleMinusAmount(e, h){
            console.log(e);
            if(h.qty<=1){
                h.qty = 1;
            }else{
                h.qty--
            }
            this.HandleHwTotal();
        },
        //HuaWei增加數量
        HandlePlusAmount(e, h){
            console.log(e)
            h.qty++;
            this.HandleHwTotal();
        },
        //HuaWei計算總價
        HandleHwTotal(){
            const hwtotal = this.HuaWeiCartData.map((v, i)=>{
                if(this.HuaWeiSkuCheckedData.includes(v.skuId)){
                    return v.originalPrice * v.qty
                    console.log(v, v.subtotal, v.qty, v.subtotal * v.qty)
                }else{
                    return 0;
                }
                
            })
            console.log(hwtotal)
            this.$set(this.$data, "HwSelectedPrice", hwtotal.reduce((a, b)=>{ return a + b }))
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