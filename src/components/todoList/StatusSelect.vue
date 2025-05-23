<script setup>
const stateId = defineModel();

defineProps({
  options: {
    type: Array,
    default: () => [],
    required: true
  }
});
</script>

<template>
  <el-select
      v-model="stateId"
      placeholder="請選擇"
      :disabled="!options.length"
  >
    <el-option
        v-for="item in options"
        :key="`status_${item.id}`"
        :label="item.name"
        :value="item.id"
    />
  </el-select>
</template>

<style scoped>

</style>