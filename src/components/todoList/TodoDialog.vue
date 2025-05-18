<script setup>
import {showMessage} from '@/utils/message.js';

const show = defineModel();

const { todo } = defineProps({
  todo: {
    type: Object,
    default: () => ({
      id: 0,
      content: '',
      due_date: '',
      state_id: 1
    }),
    required: true
  }
});
const emits = defineEmits(['submit']);

const form = ref({
  id: 0,
  content: '',
  due_date: '',
  state_id: 1
});

function openDialog() {
  form.value = { ...todo };
}

function closeDialog() {
  form.value = {
    id: 0,
    content: '',
    due_date: '',
    state_id: 1
  };
}

function submitHandler() {
  if (!form.value.content || !form.value.due_date) {
    showMessage('error', '請填寫待辦事項和截止日期');
    return;
  }
  emits('submit', form.value);
}
</script>

<template>
  <el-dialog v-model="show" width="500"
             :title="`${form.id ? '編輯' : '新增'}待辦事項`"
             :close-on-click-modal="false" :close-on-press-escape="false"
             @open="openDialog" @close="closeDialog">
    <div class="content">
      <el-form label-width="auto">
        <el-form-item label="待辦事項">
          <el-input v-model="form.content" placeholder="請輸入待辦事項"/>
        </el-form-item>

        <el-form-item label="到期日">
          <el-date-picker
              v-model="form.due_date"
              type="date"
              placeholder="請選擇日期"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              style="width: 100%"
          />
        </el-form-item>

        <el-form-item label="狀態">
          <TodoListStatusSelect v-model="form.state_id"/>
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="show = false">取消</el-button>
        <el-button type="primary" @click="submitHandler">確認</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>