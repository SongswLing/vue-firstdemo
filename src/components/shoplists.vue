<template>
<div>
    <div class="shoplists" v-for="(item,index) in shoplists" :key="index">
        <div class="view" >
            <img src="../assets/home/shoplists/组 6.png" alt="" class="imgs">
            <div class='rights'>
                <div class="fonts">
                    {{item.name}}
                </div>
                <div class="prices">
                    <span class="newprice">¥{{item.newprice}}</span>
                    <span class="oldprice">¥{{item.oldprice}}</span>
                </div>
                <div class="btn">
                    马上抢
                </div>
            </div>
        </div>
    </div></div>
</template>
    
<script>
export default {
    name:'shoplists',
    props:{ 
        shoplists:{ 
            type: Array,
            default:[]
        },
        
    }
}
</script>
    
<style lang='less' scoped>
    .shoplists {
        // width: 95%;
        margin: 10px 10px;
        background-color: #fff;
        border-radius: 10px;
        // display: flex;
        .view {
            display: flex;
            padding: 10px 10px;
            .rights{
                margin-left: 10px;
                font-size: 14px;
                width: 235px;
                .prices{
                    margin-top: 5px;
                    .newprice{
                        color:red;
                        font-size:17px;
                        margin-right: 6px;
                    }
                    .oldprice{
                        text-decoration: line-through;
                        color: #5d5b5b;
                    }
                }
                .btn{
                    float: right;
                    margin-top: 15px;
                    font-size: 12px;
                    color: rgb(255, 0, 0);
                    border-radius:15px;
                    padding: 3px 10px;
                    border: 1px solid rgb(235, 5, 5);
                }
                
            }
        }
    }
</style>