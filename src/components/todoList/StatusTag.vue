<script setup>
import {statusDemo} from '@/demo/todoDemo.js';

defineProps({
  statusId: {
    type: Number,
    default: 1,
    required: true
  }
});

const status = ref(statusDemo);

const statusObjList = computed(() => {
  return Object.fromEntries(status.value.map((item) => [item.id, item]));
});
</script>

<template>
  <el-tag
      :type="statusObjList[statusId].type"
      effect="dark"
      round
  >
    {{ statusObjList[statusId].name }}
  </el-tag>
</template>

<style scoped>

</style>