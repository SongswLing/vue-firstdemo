<template>
    <div class='box'>
        <div class="left-radius">
            <div></div>
            <div></div>
        </div>
        <div class='mian'>更多推荐</div>
        <div class="right-radius">
            <div></div>
            <div></div>
        </div>
    </div>
</template>
    
<script>
export default {
    name:'cartTitle'
}
</script>
    
<style lang='less' scoped>
.box{
    margin: 10px;
    display: flex;
    justify-content: center;
    .left-radius{
        display: flex;
        align-items: center;
        div{
            width: 5px;
            height: 5px;
            background-color: rgb(233, 103, 103);
            border-radius: 50%;
        }
        div:nth-child(1){
            background-color:rgb(153, 33, 33);
            transform: translateX(1px)
        }
    }
    .mian{
        font-size: 15px;
        margin: auto 10px;  
    }
    .right-radius{
        display: flex;
        align-items: center;
        div{
            width: 5px;
            height: 5px;
            background-color: rgb(153, 33, 33);
            border-radius: 50%;
        }
        div:nth-child(1){
            background-color:rgb(233, 103, 103);
            transform: translateX(1px)
        }
    }
}
    
</style>