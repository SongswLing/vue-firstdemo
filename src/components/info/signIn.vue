<template>
    <div class="box">
      <div class="bgimgs">
        <img src="../../assets/info/signIn/bg.png" alt="" class="bgimg">
      </div>
      <div class="loginway">
        <ul>
          <li v-for="(item,index) in loginway" :key="index" @click="changeway(index)"><span v-if="index==num" class="active"></span>{{item}}</li> 
        </ul>
      </div>
      <div class="norlogin" v-show="num==0">
        <van-form @submit="onSubmit" >
          <van-field
            v-model="usernamenor"
            name="pattern"
            label=""
            left-icon="phone-o"
            placeholder="请输入手机号"
            :rules="[{ required: true,pattern, message: '请填写正确的手机号' }]"
            size="30px"
          />
          <van-field
            v-model="password"
            :type="passwordType"
            name="password"
            label=""
            placeholder="密码"
            left-icon="coupon-o"
            :rules="[{ required: true, message: '请填写密码' }]">
          
          <template slot="right-icon">
                      <span class="solts" @click="switchPasswordType">
                           <van-icon name="closed-eye"  v-if="passwordType==='password'"/>
                            <van-icon name="eye" v-else/>
                      </span>
            </template>
            </van-field>
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #ff6034, #ee0a24)" >登录</van-button>
          </div>
      </van-form>
      </div>

      <div class="notelogin" v-show="num==1">
        <van-form @submit="onSubmit" >
          <van-field v-model="usernamenote" type="tel" label="" placeholder="请输入手机号" left-icon="phone-o" name="pattern" :rules="[{ required: true,pattern, message: '请填写正确的手机号' }]"/>
          <van-field
            v-model="sms"
            center
            clearable
            label=""
            placeholder="请输入短信验证码"
            left-icon="coupon-o"
          >
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #ff6034, #ee0a24)" >登录</van-button>
          </div>
      </van-form>
      </div>
      <div class="siginbtn">
        <div class="leftbtn" @click="gosigin">快速注册></div>
        <div class="rightbtn">忘记密码?</div>
      </div>
      <div class="aplay">
        <img src="../../assets/info/signIn/组 2(1).png" alt="">
        <img src="../../assets/info/signIn/组 2.png" alt="">
      </div>
      <div class="clause">《<span>首选隐私政策</span>》</div>
    </div>
</template>
    
<script>
import {loginUser} from '../../api/methods'
import {mapMutations} from 'vuex'
export default {
    name:'signIn',
    data() {
    return {
      sms:'',
      usernamenor: '',
      usernamenote: '',
      password: '',
      // userlists:{},
      newname:'',
      passwordType: 'password',
      loginway:['登录','短信登录'],
      num:0,
      pattern: /^(1[0-9][0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
    };
  },
  created() {
  },
  methods: {
    ...mapMutations(['onchange7']),
    changeway(index){
      console.log(index);
      this.num=index
    },
    switchPasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    },
    async onSubmit(values){
      let userinfo = {
          username:values.pattern,
          password:values.password
        }
        // userinfo.push(this.newadd)
        console.log(this.newadd)
        console.log(values)
       let {data:userlist}=await loginUser(userinfo);
       this.newname=userlist.username;
       console.log(userlist)
       if(userlist.status==200){
         this.onchange7(this.newname)
         this.$router.push({path:'/info'})
         this.$toast('登录成功');
       }else{
         this.$toast('账号或密码错误');
         this.password=""
       }
    },
    gosigin(){
      this.$router.push('/enroll')
    }
  }
}
</script>
    
<style lang='less' scoped>
    /deep/.van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
      margin-right: 10px;
    }
    .van-button--primary{
      background: linear-gradient(to right, #E92836, #EE4761);
      border: 1px solid red;
    }
    .bgimg{
      width: 375px;
      height: 210px;
    }
    .van-cell{
      line-height: 35px;
    }
    .loginway{
      // border: 1px solid #000;
      transform: translateY(-37px);
      ul{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        color: #fff;
        li{
          // display: inline-block;
          padding: 8px;
          // border: 1px solid #000;
          position: relative;
          .active{
            width: 0px;
            height: 0px;
            border: 6px solid transparent; 
            border-bottom-color: #fff;
            position: absolute;
            top: 20px;
            left:38%;
          // width: 1px;
          // height: 1px;
          // border-bottom: 6px solid #fff;
          // border-left: 6px solid transparent;
          // border-right: 6px solid transparent;
          // display: inline-block;
          // transform: translateY(10px);
          }
        }
        
      }
    }
    .norlogin,.notelogin{
      width: 355px;
      margin: 0 auto;
      border-radius: 5px;
      .van-button--round{
        margin-top: 50px;
      }
    }
    .siginbtn{
      width: 355px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      color: rgb(209, 35, 35);
      font-size: 12px;
      transform: translateY(-95px)
    }
    .aplay{
      width: 130px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      transform: translateY(40px);
      img{
        width: 40px;
        height: 40px;
        
      }
    }
    .clause{
      text-align: center;
      font-size: 10px;
      transform: translateY(60px);
      span{
        border-bottom: 1px solid rgb(112, 111, 111);
      }
    }
</style>