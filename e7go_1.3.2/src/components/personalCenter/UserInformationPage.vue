
<template>
    <InformationGrid>
        <div class="information-inner">
            <AvatarInfo>
                <div class="avatar-img"><img :src="userInfo.avatar"></div>
                <input type="file" multiple="multiple" ref="multipleUploadAvatar" @change="setMultipleAvatarCustomer($event)" /><br />
                <input type="file" ref="singleUploadAvatar" @change="setSingleAvatarCustomer($event)" /><br />
                <label class="avatar-set" @click="setAvatarCustomer($event)">设置头像</label>
            </AvatarInfo>
            <IdentityInfo>
                <div class="form-group">
                    <label class="form-label">真实姓名：</label>
                    <input class="form-input" type="text" />
                </div>
                <div class="form-group">
                    <label class="form-label">密码：</label>
                    <input class="form-input" type="text" />
                </div>
                <div class="form-group">
                    <label class="form-label">性别：</label>
                    <input type="radio" value="1" name="sex" />男
                    <input type="radio" value="0" name="sex" />女
                    <input type="radio" value="2" name="sex" />保密
                </div>
                <div class="form-group">
                    <label class="form-label">会员类别：</label>
                    <input class="form-input" type="text" />
                </div>
            </IdentityInfo>
        </div>
    </InformationGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';


/***********************************************************/
const styleProps = {
    background:{
        default:'#2fcea6',
        type:String
    }
}
const InformationGrid = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .information-inner{
        position: relative;
        white-space: nowrap;
    }
`
const AvatarInfo = styled.div`
    width: 20%;
    position: relative;
    text-align: center;
    float: left;
    .avatar-img{
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-aglin: center;
        overflow: hidden;
        background: yellow;
        margin: auto;
        border-radius: 50px;
        img{ width: 100%; display: inline-block; }
    }
    .avatar-set{
        display: inline-block;
        font-size: 14px;
        color: red;
        padding: 10px;
        cursor: pointer;
    }
`
const IdentityInfo = styled.div`
    float: left;
    width: calc(100% - 20%);
    .form-group{
        position: relative;
        margin-top: 10px;
        .form-label{
            width: 90px;
            display: inline-block;
        }
        .form-input{
          color: #333;
          outline: none;
          height: 28px;
          padding: 5px;
          border-radius: 3px;
          box-sizing: border-box;
          border: 1px solid #ccc;
        }
    }
`
/***********************************************************/
export default {
    components: {
      InformationGrid,
      AvatarInfo,
      IdentityInfo
    },
    name: "",
    data() {
        return {
            userInfo: {
                avatar: null,
            },
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
        //设置多张头像
        setMultipleAvatarCustomer(e) {
            //const filesArray = [...e.srcElement.files];
            // const filesArray = Array.from(e.srcElement.files);
            const filesArray = Array.prototype.slice.call(e.srcElement.files)
            console.log(filesArray, this.$refs.multipleUploadAvatar.value, this.$refs.multipleUploadAvatar.files);
            filesArray.forEach((v, i)=>{
                const r = new FileReader;
                r.onload = (res)=>{
                    // this.$set(this.$data, "avatar", r.result)
                    const imgBase64 = r.result;
                    console.log(imgBase64, res);
                }
                r.readAsDataURL(v);
            })
        },
        //设置单张头像
        setSingleAvatarCustomer(e){
            console.log(this.$refs.singleUploadAvatar.multiple);
            const multiple = e.currentTarget.multiple;
            switch(multiple){
                case true:
                    this.setMultipleAvatarCustomer(e)
                break;
                case false:
                default:
                    const r = new FileReader;
                    r.onload = (res)=>{
                        Object.assign(this.userInfo, { avatar: r.result });
                        const imgBase64 = r.result;
                        console.log(imgBase64, res);
                    }
                    r.readAsDataURL(e.srcElement.files[0])
                break;
            }
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
