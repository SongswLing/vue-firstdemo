<template>
    <div>
        <norBar>
            <template slot='left-icon' >
                <van-icon name="arrow-left" color="#fff" @click="goback"/>
            </template>
            地址编辑
        </norBar>
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            
        />
    </div>
</template>
    
<script>
import norBar from "../components/norBar"
// import Bus from '../../eventBus'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'siteEditor',
    components:{norBar},
    data() {
    return {
    // ...mapState['site'],
      isshow:false,
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        //   isDefault: true,
        },
      ],
      // disabledList: [
      //   {
      //     id: '3',
      //     name: '王五',
      //     tel: '1320000000',
      //     address: '浙江省杭州市滨江区江南大道 15 号',
      //   },
      // ],
    };
  },
  computed:{
  },
  mounted() {
      console.log(this.$store.state.site)
      this.$nextTick(function(){
      let addressEdit=this.$store.state.site
      if(addressEdit.name){
        let newlist={}
          // newlist.id=this.list.length+1;
          newlist.name=addressEdit.name;
          newlist.tel=addressEdit.tel;
          newlist.address=addressEdit.city+addressEdit.country+addressEdit.addressDetail;
          console.log(newlist)
          this.list.push(newlist)
      }else{
        console.log("wu");
      }
          
      })
    // console.log(this.$route.params)
      // console.log(addressEdit.name)
    console.log(this.list.length)
    // if(addressEdit){
    //   this.list.length++
    // }
    // if(this.list.length==2){
    // //   // console.log(addressEdit.content.name)
    //     console.log("wu") 
    //       // this.list.length++
      
    // }else{
        
    // }
  },
  methods: {
      ...mapMutations(['onchange4']),
    onAdd() {
      this.$toast('新增地址');
      this.$router.push('/addressEdit')
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    },
    goback(){
        console.log("111");
        console.log(this.chosenAddressId);
        let indexs=this.chosenAddressId-1;
        // console.log(indexs);
        console.log(this.list[indexs]);
        // this.$router.push('/products')
        this.$router.push('/products')
        // this.$router.back()
        // sessionStorage.setItem('site',JSON.stringify(this.list[indexs]));
        // Bus.$emit('sitego',this.list[indexs])
       this.onchange4(this.list[indexs])
        
    }
  },
}
</script>
    
<style lang='less' scoped>
    
</style>