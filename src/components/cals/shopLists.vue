<template>
    <div class="box">
        <div class="depshop">
            <div class="comshop" v-for="(item, index) in lists" :key="index">
                <p>{{item.title}}</p>
                <div class="newlists">
                    <div class="items" v-for='(item1,index1) in item.goods' :key="index1">
                        <img src="../../assets/cals/组 6.png" alt="">
                        <p>{{item1.font}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name:'shopLists',
    props:['lists']
}
</script>
    
<style lang='less' scoped>
.depshop{
    // border: 1px solid #000;
    .comshop{
        p{
            font-size:12px;
            margin: 8px;
        }
        .newlists{
            border-radius: 5px;
            display: flex;
            justify-content:space-around;
            background-color:#fff;
            flex-wrap: wrap;
            text-align: center;
            // margin: 10px;
            img{
                width: 75px;
                margin-top: 10px;
            }
        }
    }
}
</style>