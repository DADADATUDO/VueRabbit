<script setup>
import qrcode from '@/assets/images/qrcode.jpg';
</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="item">
                <div class="info">客户服务</div>
                <div class="media-container">
                    <div class="media-detail">
                        <i class="iconfont icon-kefuyouxian"></i>
                        <div class="icon-info">在线客服</div>
                    </div>

                    <div class="media-detail">
                        <i class="iconfont icon-31wentifankui"></i>
                        <div class="icon-info">问题反馈</div>
                    </div>
                </div>
            </div>

            <span class="separator"></span>

            <div class="item">
                <div class="info">关注我们</div>
                <div class="media-container">
                    <div class="media-detail">
                        <i class="iconfont icon-weixin"></i>
                        <div class="icon-info">公众号</div>
                    </div>

                    <div class="media-detail">
                        <i class="iconfont icon-xinlang"></i>
                        <div class="icon-info">微博</div>
                    </div>
                </div>
            </div>

            <span class="separator"></span>

            <div class="item">
                <div class="info">下载APP</div>
                <div class="media-container">
                    <div class="media-detail">
                        <img :src="qrcode" alt="">
                    </div>

                    <div class="media-detail">
                        <p>扫描二维码立马下载 APP</p>
                        <el-button type="primary" class="test-button">Primary</el-button>
                    </div>
                </div>
            </div>

            <span class="separator"></span>

            <div class="item">
                <div class="info">服务热线</div>
                <div class="phone-info">
                    <p>400-0000-101</p>
                    <p>周一至周日 8:00-18:00</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
    width: 100%;
    height: 29rem;
    background-color: rgba(255, 255, 255, 1);
}

.footer-container {
    width: 124rem;
    height: 29rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item {
    width: 27rem;
    height: 19rem;
    // background-color: blueviolet;
    display: flex;
    flex-direction: column;
    color: var(--el-text-color-secondary);
}

.info {
    font-size: 3rem;
    margin: 0 auto;
}

.media-container {
    width: 100%;
    height: 13rem;
    // background-color: rgb(3, 73, 73);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.media-detail {
    width: 12rem;
    height: 12rem;
    // background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--el-text-color-secondary);
    text-align: center;
}

.media-detail i {
    display: block;
    font-size: 5rem;
}

.media-detail img {
    display: block;
    width: 11rem;
    height: 11rem;
}

.media-detail .icon-info {
    font-size: 2rem;
}

.media-detail p {
    font-size: 1.8rem;
    margin: 1rem auto;
}

.media-detail .test-button {
    height: 3rem;
    width: 10rem;
    margin: 0.5rem auto;
}

.phone-info {
    width: 100%;
    height: 13rem;
    // background-color: rgb(3, 73, 73);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.phone-info p:nth-of-type(1) {
    font-size: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
}

.phone-info p:nth-of-type(2) {
    font-size: 2rem;
    height: 2rem;
}

.separator {
    border-left: 0.3rem solid var(--el-text-color-secondary);
    height: 19rem;
    margin: 0rem 0rem 1rem 1rem;
}
</style>
