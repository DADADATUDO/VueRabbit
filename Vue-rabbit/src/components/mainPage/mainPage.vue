<script setup>

import MainPageNav from './mainPageNav.vue';
import SliderShow from '../sliderShow.vue'; // 新增：导入轮播组件
import SegBar from '@/components/segBar.vue';

// 将相对字符串替换为通过 import 导入的资源，构建工具会返回正确的 URL
import phone1 from '@/assets/images/mainPage/001.jpg';
import phone2 from '@/assets/images/mainPage/002.jpg';
import phone3 from '@/assets/images/mainPage/023.jpg';
import phone4 from '@/assets/images/mainPage/024.jpg';

import car1 from '@/assets/images/mainPage/007.jpg';
import car2 from '@/assets/images/mainPage/008.jpg';
import car3 from '@/assets/images/mainPage/009.jpg';
import car4 from '@/assets/images/mainPage/010.jpg';

import pad from '@/assets/images/mainPage/013.jpg';

import redmi1 from '@/assets/images/mainPage/015.jpg';
import redmi2 from '@/assets/images/mainPage/016.jpg';
import redmi3 from '@/assets/images/mainPage/017.jpg';
import redmi4 from '@/assets/images/mainPage/018.jpg';

import jiadian1 from '@/assets/images/mainPage/025.jpg';
import jiadian2 from '@/assets/images/mainPage/026.jpg';
import jiadian3 from '@/assets/images/mainPage/027.jpg';
import jiadian4 from '@/assets/images/mainPage/028.jpg';

import race from '@/assets/images/mainPage/033.jpg';
import leica from '@/assets/images/mainPage/031.jpg';
import ecosystem from '@/assets/images/mainPage/035.jpg';


const phoneSlides = [
  { src: phone1, alt: '第一张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: phone2, alt: '第二张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: phone3, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: phone4, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' }
]

const carSlides = [
  { src: car1, alt: '第一张图片', path: 'https://www.xiaomiev.com/customization?spmref=MiShop_PC.mihomepage.mtl_6720bfd0352df30001ebf72c.1' },
  { src: car2, alt: '第二张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: car3, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: car4, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' }
]

const padSlides = [
  { src: pad, alt: 'pad', path: 'https://www.mi.com/prod/xiaomi-pad-8-pro?spmref=MiShop_PC.mihomepage.mtl_68cd3ead799ab50001aa37c0.1' }
]

const redMiSlides = [
  { src: redmi1, alt: '第一张图片', path: 'https://www.mi.com/prod/redmi-turbo-4?spmref=MiShop_PC.mihomepage.mtl_6699ccb7799ab50001315f86.1' },
  { src: redmi2, alt: '第二张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: redmi3, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: redmi4, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' }
]

const jiadianSlides = [
  { src: jiadian1, alt: '第一张图片', path: 'https://www.mi.com/prod/redmi-turbo-4?spmref=MiShop_PC.mihomepage.mtl_6699ccb7799ab50001315f86.1' },
  { src: jiadian2, alt: '第二张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: jiadian3, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' },
  { src: jiadian4, alt: '第三张图片', path: 'https://www.mi.com/prod/xiaomi-17-pro?spmref=MiShop_PC.mihomepage.mtl_68d0931c799ab50001357c84.1' }
]

const raceSlides = [
  { src: race, alt: 'pad', path: 'https://www.mi.com/prod/xiaomi-pad-8-pro?spmref=MiShop_PC.mihomepage.mtl_68cd3ead799ab50001aa37c0.1' }
]
const leikaSlides = [
  { src: leica, alt: 'pad', path: 'https://www.mi.com/prod/xiaomi-pad-8-pro?spmref=MiShop_PC.mihomepage.mtl_68cd3ead799ab50001aa37c0.1' }
]
const ecosystemSlides = [
  { src: ecosystem, alt: 'pad', path: 'https://www.mi.com/prod/xiaomi-pad-8-pro?spmref=MiShop_PC.mihomepage.mtl_68cd3ead799ab50001aa37c0.1' }
]



</script>

<template>
  <MainPageNav></MainPageNav>
  <SliderShow :slides="phoneSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="carSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="padSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="redMiSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="jiadianSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="raceSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="leikaSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />
  <SegBar></SegBar>
  <SliderShow :slides="ecosystemSlides" :width="'100%'" :height="'855px'" :interval="3000" :duration="900" />


</template>

<style></style>
