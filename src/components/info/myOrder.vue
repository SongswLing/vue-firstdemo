<template>
    <div class="box">
        <div class="top">
             <div><slot name="left"></slot></div> 
             <div class="right"><slot name="right"></slot></div>
        </div>
        <div class="bottom">
            <div class="single">
                <slot name="img1" class="imgs"></slot>
                <div class="fonts"><slot name="fonts1"></slot></div>
            </div>
            <div class="single">
                <slot name="img2" class="imgs"></slot>
                <div class="fonts"><slot name="fonts2"></slot></div>
            </div>
            <div class="single">
                <slot name="img3" class="imgs"></slot>
                <div class="fonts"><slot name="fonts3"></slot></div>
            </div>
            <div class="single">
                <slot name="img4" class="imgs"></slot> 
                <div class="fonts"><slot name="fonts4"></slot></div>
            </div>
            <div class="single">
                <slot name="img5" class="imgs"></slot>  
                <div class="fonts"><slot name="fonts5"></slot></div>
            </div>
        </div>      
    </div>
</template>
    
<script>
export default {
    name:'myOrder'
}
</script>
    
<style lang='less' scoped>
    .box{
        background-color:#fff;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        transform:translateY(-40px);
        .top{
            // margin: 5px 0px;
            display: flex;
            font-size: 12px;
            border-bottom: 1px solid #bdbaba;
            padding: 5px 0px;
            line-height: 20px;
            justify-content:space-between;
            .right{
                color: rgb(145, 138, 138);
                font-size: 12px;
            }
        }
        .bottom{
            // border: 1px solid #000;
            margin-top: 10px;
            
            display: flex;
            justify-content:space-around;
            text-align: center;
            .single{
                .imgs{
                    width: 25px;
                    height: 25px;
                }
                .fonts{
                    font-size: 12px;
                }
            }
        }
    }
</style>