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
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            :type="passwordType"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]">
          
          <template slot="right-icon">
                      <span class="solts" @click="switchPasswordType">
                           <van-icon name="eye" v-if="passwordType==='password'"/>
                           <van-icon name="closed-eye" v-else />
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
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            :type="passwordType"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]">
          
          <template slot="right-icon">
                      <span class="solts" @click="switchPasswordType">
                           <van-icon name="eye" v-if="passwordType==='password'"/>
                           <van-icon name="closed-eye" v-else />
                      </span>
            </template>
            </van-field>
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #ff6034, #ee0a24)" >登1录</van-button>
          </div>
      </van-form>
      </div>
      <div class="siginbtn">
        <div class="leftbtn">快速注册></div>
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
      username: '',
      password: '',
      // userlists:{},
      newname:'',
      passwordType: 'password',
      loginway:['登录','短信登录'],
      num:0,
    };
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
          username:values.username,
          password:values.password
        }
       let {data:userlist}=await loginUser(userinfo);
       this.newname=userlist.username;
       console.log(userlist)
       if(userlist.status==200){
         this.onchange7(this.newname)
         this.$router.push({path:'/info'})
       }
    }
  }
}
</script>
    
<style lang='less' scoped>
    .bgimg{
      width: 375px;
      height: 210px;
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
      transform: translateY(60px)
    }
</style>