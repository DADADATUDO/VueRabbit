<script setup>

</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="item">
                <div class="info">
                    <i class="iconfont icon-tianmaoshangmentuihuo"></i>
                    <span>价格亲民</span>
                </div>
                <div class="info">
                    <i class="iconfont icon-tianmaosonghuoshangmen"></i>
                    <span>物流快捷</span>
                </div>
                <div class="info">
                    <i class="iconfont icon-tianmaohuodaofukuan"></i>
                    <span>品质新鲜</span>
                </div>
            </div>

            <div class="separator"></div>

            <div class="aboutUs">
                <span>关于我们 | 帮助中心 | 售后服务 | 配送与验收 | 商务合作 | 搜索推荐 | 友情链接</span>
                <span>CopyRight @ 小兔鲜儿</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
    width: 100%;
    height: 23rem;
    background-color: var(--el-bg-color);
}

.footer-container {
    width: 124rem;
    height: 100%;
    margin: 0 auto;
    // background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    width: 100%;
    height: 10rem;
    // background-color: blueviolet;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
}

.info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.8rem;
    min-width: 12rem;
    height: 10rem;

    i {
        font-size: 7rem;
        margin-bottom: 0.5rem;
        color: var(--el-text-color-secondary);
        margin-right: 1rem;
    }

    span {
        font-size: 3rem;
        color: var(--el-text-color-secondary);
        text-align: center;
    }
}

.aboutUs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 3rem;
}

.aboutUs span:nth-of-type(1) {
    font-size: 1.8rem;
    color: var(--el-text-color-secondary);
}

.aboutUs span:nth-of-type(2) {
    font-size: 1.8rem;
    color: var(--el-text-color-secondary);
}

.separator {
    border-top: 0.3rem solid var(--el-border-color-light);
    width: 100%;
    margin-bottom: 2rem;
}
</style>
