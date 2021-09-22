<template>
    <div>
        <div class="norbar">
            <p><slot></slot></p>
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
    p{
        margin: 0;
        font-size: 18px;
        text-align: center;
        line-height: 95px;
    }  
}
</style>