<script setup>
const { stateOptions } = defineProps({
  statusId: {
    type: Number,
    default: 1,
    required: true
  },
  stateOptions: {
    type: Array,
    default: () => [],
    required: true
  }
});

const statusObjList = computed(() => {
  return Object.fromEntries(stateOptions.map((item) => [item.id, item]));
});
</script>

<template>
  <el-tag
      :type="statusObjList[statusId]?.type"
      effect="dark"
      round
  >
    {{ statusObjList[statusId]?.name }}
  </el-tag>
</template>

<style scoped>

</style>