<template>
    <div class="box">
        <nor-bar>
            <template slot="left-icon"><van-icon name="arrow-left" color="#ffffff" size="20"/></template>
            注册
        </nor-bar>
        <div class="froms">
            <van-form @submit="onSubmit" >
                <van-field
                    v-model="username"
                    name="pattern"
                    label=""
                    left-icon="phone-o"
                    placeholder="请输入手机号"
                    :rules="[{ required: true,pattern, message: '请填写正确的手机号' }]"
                    size="30px"
                />
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
                <van-field
                    v-model="passwordbefore"
                    :type="passwordType"
                    name="password"
                    label=""
                    placeholder="设置密码"
                    left-icon="coupon-o"
                    :rules="[{ required: true, message: '请填写密码' }]">
                
                <template slot="right-icon">
                            <span class="solts" @click="switchPasswordType">
                                <van-icon name="closed-eye"  v-if="passwordType==='password'"/>
                                <van-icon name="eye" v-else/>
                            </span>
                    </template>
                </van-field>
                <van-field
                    v-model="passwordafter"
                    :type="passwordType"
                    name="password"
                    label=""
                    placeholder="确认密码"
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
    </div>
</template>
    
<script>
import norBar from "../norBar"
import {signUser} from '../../api/methods'
import {mapMutations} from 'vuex'
export default {
    name:'enroll',
    components: {norBar},
    data() {
        return{
            sms:'',
            username: '',
            passwordbefore: '',
            passwordafter: '',
            passwordType: 'password',
            pattern: /^(1[0-9][0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        }
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
            let userinfosign = {
                username:values.pattern,
                password:values.password,
                sms:values.undefined
                }
                if(this.passwordbefore!=this.passwordafter){
                        this.$toast('两次输入的密码不同');
                }else{
                     let {data:userlist}=await signUser(userinfosign);
                    // this.newname=userlist.username;
                    console.log(values)
                    // console.log(this.passwordbefore);
                    if(userlist.status==1){
                        // this.onchange7(userinfosign)
                        // this.$router.push({path:'/signIn'})
                        console.log("ok");
                    }else{
                        this.$toast('该账号已经被注册');
                    }
            }
           
    },
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
</style>