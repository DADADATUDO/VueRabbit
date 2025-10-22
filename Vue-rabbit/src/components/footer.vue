<script setup>
import logo from '@/assets/images/logo/logo-mi2.png';
import logo1 from '@/assets/images/mainPage/036.png';
import logo2 from '@/assets/images/mainPage/037.png';
import logo3 from '@/assets/images/mainPage/038.png';
import logo4 from '@/assets/images/mainPage/039.png';
import logo5 from '@/assets/images/mainPage/040.png';


</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="img-container">
                <img :src="logo" alt="">
            </div>

            <div class="footer-info">
                <div class="link">
                    <a href="#">小米商城</a> |
                    <a href="#">小米澎湃 OS</a> |
                    <a href="#">米家</a> |
                    <a href="#">多看</a> |
                    <a href="#">游戏</a> |
                    <a href="#">音乐</a> |
                    <a href="#">政企服务</a> |
                    <a href="#">小米天猫店</a> |
                    <a href="#">小米集团隐私政策</a> |
                    <a href="#">小米公司儿童信息保护规则</a> |
                    <a href="#">小米商城隐私政策</a> |
                    <a href="#">小米商城用户协议</a> |
                    <a href="#">问题反馈</a> |
                    <a href="#">Select Location</a>
                    <a href="#">北京互联网法院法律服务工作站</a> |
                    <a href="#">中国消费者协会</a> |
                    <a href="#">北京市消费者协会</a>
                </div>

                <div class="seg"></div>

                <div class="copyright">
                    © mi.com 京 ICP 证 110507 号 京 ICP 备 10046444 号 京公网安备 11010802020134 号 京网文[2023] 0169-004 号
                </div>

                <div class="copyright">
                    (京) 网械平台备字 (2018) 第 00005 号 药品医疗器械网络信息服务备案 (京) 网药械信息备字 (2024) 第 00478 号 营业执照 医疗器械质量公告
                </div>

                <div class="copyright">
                    增值电信业务经营许可证编号: 京 B2-20140851 网络食品经营备案 京食药网食备 202010048 食品经营许可证 新出发京批字 第直 220280 号
                </div>

                <div class="copyright">
                    违法和不良信息举报电话: 171-5104-4080 知识产权侵权投诉 本网站所列数据, 除特殊说明, 所有数据均出自我司实验室测试
                </div>

                <div class="img-info">
                    <img :src="logo1" alt="">
                    <img :src="logo2" alt="">
                    <img :src="logo3" alt="">
                    <div id="image-container">
                        <img class="last" :src="logo4" alt="">
                        <img class="last" :src="logo5" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
.footer-wrapper {
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;

}

.footer-container {
    width: 122.6rem;
    height: 25rem;
    padding: 3rem 0;
    display: flex;
}

.img-container {
    margin-right: 2rem;
}

.img-container img {
    display: block;
    width: 5.6rem;
    /* 34px -> 3.4rem */
    height: 5.6rem;
    /* 34px -> 3.4rem */
}

.link {
    margin-bottom: 0.5rem;
}

.link a {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    color: rgb(126, 124, 124);

}

.seg {
    margin-top: 1.5rem;
}

.copyright {
    margin-bottom: 0.45rem;
    color: rgba(181, 176, 176, 1);
}

.img-info {
    /* 使用 flex 让图片水平排列并垂直居中，保证不被换行影响 */
    display: flex;
    align-items: center;
    gap: 1rem;
    /* 图片间距，根据需要调整 */
    margin-top: 1.5rem;
}


.img-info img {
    width: 10rem;
    height: 3.3rem;
}

#image-container {
    position: relative;
    width: 7rem;
    height: 3.3rem;
}

.last {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: imgToggle 2s linear infinite;
}

.last:nth-child(2) {
    animation-delay: 1s;
}

@keyframes imgToggle {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    75% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>