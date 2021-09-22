<template>
    <div class="message">
        <img src="../assets/home/message/星星.png" alt="">
        <img src="../assets/home/message/首选头条.png" alt="">
        <div class="fonts">温馨提示　谨防上当受骗　造成财产损失</div>
    </div>
</template>
    
<script>
export default {
    name: 'message'
}
</script>
    
<style lang='less' scoped>
    .message{
        // width: 100%;
        height: 20px;
        line-height:20px;
        background-color:#fff;
        // border: 1px solid #000;
        margin:5px 8px;
        border-radius: 3px;
        :nth-child(1){
            width: 13px;
            padding-left: 3px;
            
        }
        :nth-child(2){
            width: 40px;
        }
        .fonts{
            display:inline-block;
            font-size: 12px;
            padding-left: 5px;
        }
        .fonts::before{
            content:'';
            // padding: 4px 4px;
            width: 1.4px;
            height: 15px;
            display: inline-block;
            background-color:#000;   
            margin: 0px 3px;
            transform: translateY(2px)
        }
    }
</style>