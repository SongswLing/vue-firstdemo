<template>
    <div class="box">
        <nor-bar>
            <template slot="left-icon"><van-icon name="arrow-left" color="#ffffff" size="20" @click="goinfo"/></template>
            个人信息
        </nor-bar>
        <van-form @submit="onSubmit">
            <van-field
                v-model="images"
                name="imges"
                label="头像"
                placeholder="头像"
                right-icon="arrow"
                
            />
            <van-field
                v-model="tel"
                name="tel"
                label="用户名"
                type="tel"
                placeholder="用户名"
                right-icon="arrow"
                
            />

            <van-field
                readonly
                clickable
                name="picker"
                v-model="sex"
                :value="sex"
                label="性别"
                right-icon="arrow"

                placeholder="点击选择性别"
                @click="showPicker = true"
                />
                <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
                </van-popup>

            <!-- <van-field
                v-model="sex"
                name="性别"
                label="性别"
                placeholder="性别"
                right-icon="arrow"
                :rules="[{ required: true, message: '请填写用户名' }]"
            /> -->
            <van-field
                v-model="birth"
                name="brith"
                label="生日"
                placeholder="生日"
                right-icon="arrow"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>
    
<script>
import norBar from "../norBar"
import {mapMutations} from 'vuex'
export default {
    name:'myInfo',
    components: {norBar},
    data() {
        return {
            images:'',
            tel: '',
            sex: '',
            birth:'',
            columns: ['男', '女',],
            showPicker: false,
            
        };
    },
    mounted(){
        // console.log(this.$route.params.stateinfo);
        // this.stateinfo=this.$route.params.stateinfo
    },  
    methods: {
        ...mapMutations(['onchange7']),
        onConfirm(sex) {
        this.sex = sex;
        this.showPicker = false;
        },
        goinfo(){
            this.$router.push('/info')
        },  
    onSubmit(values) {
      console.log('submit', values);
        this.onchange7(values)
    },
  },
}
</script>
    
<style lang='less' scoped>
    /deep/ .van-field__control{
        text-align: right;
    }
</style>