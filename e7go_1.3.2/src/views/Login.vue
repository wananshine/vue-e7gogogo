<template>
  <LoginGrid>
    <LoginForm >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </LoginForm>
  </LoginGrid>
</template>
<style lang="less" scoped="true">
</style>
<script type="text/javascript">
/***********************************************************/

import styled from 'vue-styled-components';


/***********************************************************/
const LoginGrid = styled.div`
    width: 1200px;
    min-height: 500px;
    margin: auto;
    position: relative;
    overflow: hidden;
`
const LoginForm = styled.div`
  width: 500px;
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  box-shadow: 1px 1px 13px rgba(145,145,145,0.5);
  border-radius: 18px;
`
/***********************************************************/
export default {
    components: {
      LoginGrid,
      LoginForm
    },
    name: "",
    data() {
        return {
            brandList: [],
            ruleForm: {
              name: '',
              password: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 3, max: 1000, message: '长度至少两个字符', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输密码', trigger: 'blur' },
                { min: 6, max: 1000, message: '长度至少6个字符', trigger: 'blur' }
              ]
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
    methods: {
        async fetchGoodsId() {
            //console.log(this.$route.params.goodsId);
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.token = "1231"
            console.log('submit!',this.$store);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
