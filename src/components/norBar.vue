<template>
    <div>
        <div class="norbar">
            <div class=left-icon><slot name="left-icon"></slot></div>
            <p><slot></slot></p>
             <div class=right-icon><slot name="right-icon"></slot></div>
        </div>
    </div>
</template>
    
<script>
export default {
    name:'norbar',
    data() {
        return{
            // value:'',
        }
    },
    methods: {
        
    }
}
</script>
    
<style lang='less' scoped>
     .norbar{
    background: linear-gradient(to right, #E92836, #EE4761);
    height: 70px;
    width: 100%;
    .left-icon{
        // margin: 10px;
        width: 40px;
        height: 40px;
        transform: translate(2px,32px);
        text-align: center;
        line-height: 40px;
    }
    p{
        margin: 0 auto;
        font-size: 16px;
        text-align: center;
        line-height: 20px;
        width: 50%;
        color: #fff;
    }  
    .right-icon{
        // border: 1px solid #000;
        width: 40px;
        height: 40px;
        float: right;
        transform: translate(-5px,-27px);
        text-align: center;
        line-height: 40px;
    }
}
</style>