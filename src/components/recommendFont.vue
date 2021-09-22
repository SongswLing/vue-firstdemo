<template>
    <div class='recommend-font'>
        <ul class='left-radius'>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="fonts">为您推荐</div>
        <ul class='right-radius'>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
    
<script>
export default {
    name: 'recommendFont'
}
</script>
    
<style lang='less' scoped>
    .recommend-font{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:5px 5px;
        .left-radius{
            width: 40px;
            
            // padding-left: 5px;
            margin-right: 10px;
             li:nth-child(1){
                width: 4px;
                height: 4px;
                border-radius: 2px;
                background-color:red;
                display: inline-block;
                margin-right: 5px;
                margin-left: 10px;
            }
             li:nth-child(2){
                width: 5px;
                height: 5px;
                border-radius: 2.5px;
                background-color:red;
                display: inline-block;
                margin-right: 5px;
                
            }
             li:nth-child(3){
                width: 6px;
                height: 6px;
                border-radius: 3px;
                background-color:red;
                display: inline-block;   
                margin-right: 5px;
            }
        }
        .fonts{
            font-size: 15px;
        }
        .right-radius{
            width: 40px;
            margin-left: 10px;
             li:nth-child(1){
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background-color:red; 
            display: inline-block;
                margin-right: 5px;

            }   
            li:nth-child(2){
                width: 5px;
                height: 5px;
                border-radius: 2.5px;
                background-color:red;
                display: inline-block;
                margin-right: 5px;

            }
            li:nth-child(3){
                width: 4px;
                height: 4px;
                border-radius: 2px;
                background-color:red;
                display: inline-block;
                margin-right: 5px;

            }
        }   
    }
</style>