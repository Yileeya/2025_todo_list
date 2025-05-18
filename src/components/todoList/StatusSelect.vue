<script setup>
import {statusDemo} from '@/demo/todoDemo.js';

const stateId = defineModel();

const statusOptions = ref(statusDemo);
</script>

<template>
  <el-select
      v-model="stateId"
      placeholder="請選擇"
  >
    <el-option
        v-for="item in statusOptions"
        :key="`status_${item.id}`"
        :label="item.name"
        :value="item.id"
    />
  </el-select>
</template>

<style scoped>

</style>