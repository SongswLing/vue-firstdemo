<template>
    <div class='img-lists'>
        <img src="../assets/home/imglists/组 5(2).png" alt="" @click='tonewCom()'>
         <img src="../assets/home/imglists/组 5(3).png" alt="">
    </div>
</template>
    
<script>
export default {
    name:'imgLists',
    methods: {
        tonewCom(){
            this.$router.push('/newcom')
        }
    }
}
</script>
    
<style lang='less' scoped>
    .img-lists{
        // width: 100%;
        height: 120px;
        // border: 1px solid #000;
        padding: 5px 5px;
        :first-child{
            transform : translateX(3px);
        }
    }
</style>