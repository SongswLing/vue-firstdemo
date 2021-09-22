<template>
    <div class='catelists'>
        <ul class="ul-lists">
            <li><img src="../assets/home/catelists/组 5(1).png" alt=""><div class="fonts">休闲零食</div></li>
            <li><img src="../assets/home/catelists/日用百货.png" alt=""><div class="fonts">日用百货</div></li>
            <li><img src="../assets/home/catelists/粮油干货.png" alt=""><div class="fonts">粮油干货</div></li>
            <li><img src="../assets/home/catelists/酒类商城.png" alt=""><div class="fonts">酒类商城</div></li>
            <li><img src="../assets/home/catelists/饮料饮品.png" alt=""><div class="fonts">饮料饮品</div></li>
        </ul>
    </div>
</template>
    
<script>
export default {
    name:'cateLists'
}
</script>
    
<style lang='less' scoped>
    .catelists{
        width: 100%;
        height: 80px;
        // border: 1px solid #000;
        padding-top: 10px;
        .ul-lists{
            display: flex;
            justify-content:space-evenly;
            align-items: center;
            font-size: 12px;
            text-align: center;
        }
        
    }
</style>