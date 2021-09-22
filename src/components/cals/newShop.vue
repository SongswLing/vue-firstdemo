<template>
    <div clas='box'>
        
        <div class="main"> 
            <shoplists :lists='lists'></shoplists>
        </div>
    </div>
</template>
    
<script>
import shoplists from '../../components/cals/shopLists.vue'
export default {
    name:'newShop',
    components: {shoplists},
    data() {
        return{
            lists:[
                {
                    title:'新品上架',
                    goods:[
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶',
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                        {
                            src:'../../assets/cals/组 6.png',
                            font:'牛奶'
                        },
                            ]
                }
                
            ]
        }
    }
}
</script>
    
<style lang='less' scoped>
    .box{
        // border: 1px solid #000;
        .main{
            width: 95%;
            height: 530px;
            // border: 1px solid #000;
            margin: 10px auto;
            overflow-y: scroll;
            // background-color:#fff;
            border-radius: 5px;
        }
    }
</style>