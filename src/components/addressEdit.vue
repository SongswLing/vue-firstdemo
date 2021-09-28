<template>
    <div>
      <norBar>
            <template slot='left-icon' >
                <van-icon name="arrow-left" color="#fff" @click="goback"/>
            </template>
            新增地址
        </norBar>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>
    
<script>
import {areaList} from '../assets/js/areaList.ts'
import norBar from "../components/norBar"
import {mapMutations} from 'vuex'

export default {
    name:'addressEdit',
    components: {norBar},
    data() {
    return {
      areaList,
      searchResult: [],
      addcenten:[]
      // content:[]
    };
  },
  provide(){
    return{
        addsite:this.addcenten
    }
  },
  methods: {
    ...mapMutations(['onchange4']),
    onSave(content) {
      this.$toast('save');
      this.addcenten=content
      // this.onchange4(content)
      this.$router.push({name:'siteEditor',params:{content}})
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    goback(){
      this.$router.back();
    }
  },
}
</script>
    
<style lang='less' scoped>
    
</style>