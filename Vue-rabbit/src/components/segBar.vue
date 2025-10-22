<script setup>
import segBar from '@/assets/images/mainPage/segBar.jpg';

</script>

<template>
    <div class="segBar-container">
        <img :src="segBar" alt="segBar">
    </div>
</template>

<style>
.segBar-container {
    width: 100%;
    height: 2rem; /* 20px -> 2rem */
}
</style>