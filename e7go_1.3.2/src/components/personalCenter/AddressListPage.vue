<template>
  <AddAdressGrid>
        <!--新增收货地址-->
        <div>
            <div>新增收货地址</div>
            <AddAdressForm>
                <FormGroup>
                    <label>地址信息：</label>
                    <input />
                </FormGroup>
                <FormGroup>
                    <label>详细地址：</label>
                    <input />
                </FormGroup>
                <FormGroup>
                    <label>邮政编码：</label>
                    <input />
                </FormGroup>
                <FormGroup>
                    <label>收货人姓名：</label>
                    <input />
                </FormGroup>
                <FormGroup>
                    <label>手机号码：</label>
                    <input />
                </FormGroup>
                <FormGroup>
                    <label></label>
                    <input type="checkbox" />
                    <span>设置为默认地址</span>
                </FormGroup>
                <FormGroup>
                    <label></label>
                    <el-button size="small" round type="primary" class="save">保存</el-button>
                </FormGroup>
            </AddAdressForm>
        </div>
        <!--收货地址列表-->
        <div> 
            <TableBox>
                <CaptionTitle>已保存<i>18</i>了条地址，还能保存<i>2</i>条地址</CaptionTitle>
                <TheadBox>
                    <tr>
                        <th v-for="(t, tidx) in theads" :key="tidx">{{t.txt}}</th>
                    </tr>
                </TheadBox>
                <TbodyBox>
                    <tr v-for="(cell, cidx) in tbodys" :key="cidx">
                        <td>{{cell.name}}</td>
                        <td>{{cell.address}}</td>
                        <td>{{cell.addrDetail}}</td>
                        <td>{{cell.postalCode}}</td>
                        <td>{{cell.tel}}</td>
                        <td>修改|删除</td>
                        <td>
                            <button v-if="cell.default">默认地址</button>
                            <span class="set-default" v-else>设置默认</span>
                        </td>
                    </tr>
                </TbodyBox>
            </TableBox>
        </div>
  </AddAdressGrid>
</template>
<style lang="less" scoped="true">
</style>

<script type="text/javascript">

import styled from 'vue-styled-components';

/***********************************************************/ 


const font_12 = {
    "font-size": "12px"
}
const padding20 = {
    "padding": "20px"
}
const th_td = {
    "border-color": "#e8e8e8",
    "border-width": "1px",
    "border-style": "solid",
    "font-size": "14px"
}
const styleProps = {
    background:{
        default:'#2fcea6',
        type:String
    },
    fontSize:{
        default:'12px',
        type:String
    }
}
/***********************************************************/
const AddAdressGrid = styled.div`
    margin: auto;
    position: relative;
    overflow: hidden;
`
const AddAdressForm = styled.div`
    position: relative;
    overflow: hidden;
`
const FormGroup = styled.div`
    position: relative;
    overflow: hidden;
    height: 34px;
    line-height: 32px;
    margin: 10px 0px;
    font-size: 0px;
    label{
        ${font_12};
        display: inline-block;
        text-align: right;
        width: 100px;
    }
    span{
        ${font_12};
        vertical-align: top;
    }
    input{
        outline: none;
        height: 28px;
        padding: 5px;
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
`
const TableBox = styled.table`
    width: 100%;
    text-align: left;
    border: 1px solid #e8e8e8;
`
const CaptionTitle = styled('caption', styleProps)`
    ${font_12};
    text-align: left;
    border-color: #e3f2fd;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    box-shadow: none;
    background-color: #e3f2fd;
    margin-bottom: 20px;
    padding: 12px;
    letter-spacing: 1px;
    i{ color: red; letter-spacing: 0px;}
`
const TheadBox = styled.thead`
    background-color: #ebecf0;
    border: 1px solid #dcdee3;
    th{ 
        ${padding20}; 
        ${th_td}; 
        border-color: #dcdee3; 
    }
`
const TbodyBox = styled.tbody`
    td{ 
        ${padding20}; 
        ${th_td};
        .set-default{
            cursor: pointer;
        } 
    }
`

/***********************************************************/
export default {
    components: {   
        AddAdressGrid,
        AddAdressForm,
        FormGroup,
        TableBox,
        CaptionTitle,
        TheadBox,
        TbodyBox
    },
    name: "",
    data() {
        return {
            theads: [
                { txt: "收货人"  },
                { txt: "所在市区"},
                { txt: "详细地址"},
                { txt: "邮编"     },
                { txt: "电话/手机" },
                { txt: "操作" },
                { txt: "--" },
            ],
            tbodys: [
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "11-13*******96", default: true },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false },
                { name:"蒋先生", address: "广东省 深圳市 龙华区 大浪街道", addrDetail: "暗黑宇宙之银河九天", postalCode: "000000", tel: "86-13*******96", default: false }
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