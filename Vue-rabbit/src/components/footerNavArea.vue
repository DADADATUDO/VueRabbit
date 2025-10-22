<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <div class="footerArea-wrapper">
        <div class="footerArea-container">
            <div class="column">
                <div class="info">选购指南</div>
                <ul class="guide-list">
                    <li><a href="">手机</a></li>
                    <li><a href="">电视</a></li>
                    <li><a href="">笔记本</a></li>
                    <li><a href="">平板</a></li>
                    <li><a href="">穿戴</a></li>
                    <li><a href="">耳机</a></li>
                    <li><a href="">家电</a></li>
                    <li><a href="">路由器</a></li>
                    <li><a href="">音响</a></li>
                    <li><a href="">配件</a></li>
                </ul>
            </div>

            <div class="column">
                <div class="info">服务中心</div>
                <ul class="guide-list">
                    <li><a href="">申请售后</a></li>
                    <li><a href="">售后政策</a></li>
                    <li><a href="">服务价格</a></li>
                    <li><a href="">订单查询</a></li>
                    <li><a href="">以旧换新</a></li>
                    <li><a href="">保障服务</a></li>
                    <li><a href="">防伪查询</a></li>
                    <li><a href="">F 码通道</a></li>
                </ul>
            </div>

            <div class="column">
                <div class="info">线下门店</div>
                <ul class="guide-list">
                    <li><a href="">小米之家</a></li>
                    <li><a href="">服务网点</a></li>
                    <li><a href="">授权体验店 / 专区</a></li>
                </ul>
            </div>

            <div class="column">
                <div class="info">关于小米</div>
                <ul class="guide-list">
                    <li><a href="">了解小米</a></li>
                    <li><a href="">加入小米</a></li>
                    <li><a href="">投资者关系</a></li>
                    <li><a href="">ESG 与可持续发展</a></li>
                    <li><a href="">廉洁举报</a></li>
                </ul>
            </div>

            <div class="column">
                <div class="info">关注我们</div>
                <ul class="guide-list">
                    <li><a href="">新浪微博</a></li>
                    <li><a href="">官方微信</a></li>
                    <li><a href="">联系我们</a></li>
                    <li><a href="">公益基金会</a></li>
                </ul>
            </div>

            <div class="contract-container">
                <div class="phone">950816</div>
                <div class="contract-info">8:00 - 18:00 (仅收市话费)</div>
                <div class="rengong">
                    <FontAwesomeIcon icon="phone" />
                    人工客服
                </div>

                <div class="phone">950818</div>
                <div class="contract-info">8:00 - 18:00 (仅收市话费)
                    手机适用于: Xiaomi MIX Fold 系列、MIX Flip 系列、数字 12 系列及以上
                    电视适用于: 98 寸、100 寸电视。</div>
                <div class="rengong">
                    <FontAwesomeIcon icon="phone" />
                    人工客服
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.footerArea-wrapper {
    width: 100%;
    height: 35rem;
    /* 350px -> 35rem */
    display: flex;
    justify-content: center;
}

.footerArea-container {
    width: 122.6rem;
    height: 35rem;
    padding: 4rem 0;
    display: flex;
    justify-content: space-around;
}

.column {
    width: 16rem;
    border-right: 1px solid #eee;
}

.column .info {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    color: rgb(103, 111, 117);
}

.guide-list li {
    margin: 0.6rem 0;
}

.guide-list li a {
    color: rgb(118, 129, 139);
}

.contract-container {
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.phone {
    font-size: 2.5rem;
    color: rgba(255, 104, 0, 1);
}

.contract-info {
    margin-top: 1rem;
    font-size: 1.2rem;
}

.rengong {
    border: 1px solid rgba(255, 104, 0, 1);
    padding: 0.4rem 1.5rem;
    font-weight: 400;
    color: rgba(255, 104, 0, 1);
    margin: 1rem;
}
</style>