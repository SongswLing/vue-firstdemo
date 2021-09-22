<template>
    <div>
        <div class='top'></div>
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" class="searchs" shape="round" autofocus='true'>
            <template #action >
                <div class="right-font" @click="toHome()">取消</div>
            </template>
    </van-search>
    </div>
</template>

<script>
export default {
    name:'search',
    data() {
        return{
            value:'',
        }
    },
    methods: {
        toHome(){
            this.$router.back();
        }
    }
}
</script>

<style lang='less' scoped>
.top{
    height: 20px;
}
.searchs{
    background-color:rgba(255, 255, 255, 0);
    width: 99%;
    .van-search__content--round{
        border-radius: 6px;
    }
    .van-search__action{
        .right-font{
            margin-left: 5px;
        }
    }
}
</style>