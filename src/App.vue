<script setup>
import {RouterView} from 'vue-router';
import {useUIUXStore} from '@/stores/uiux.js';
import {storeToRefs} from 'pinia';

const UIUXStore = useUIUXStore();
const { fullscreenLoading } = storeToRefs(UIUXStore);
</script>

<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
