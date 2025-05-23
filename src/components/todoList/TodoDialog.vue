<script setup>
import {showMessage} from '@/utils/message.js';
import {getTodo, postTodo, putTodo} from '@/apis/todos.js';

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
const emits = defineEmits(['refresh']);

const form = ref({
  id: 0,
  content: '',
  due_date: '',
  state_id: 1
});

const loading = ref(false);
const sending = ref(false);

function openDialog() {
  if (!todo.id) { // 代表新增
    resetFormData();
  } else {
    fetchTodo();
  }
}

async function fetchTodo() {
  loading.value = true;
  try {
    const res = await getTodo(todo.id);
    form.value = res.data;
  } catch (err) {
    resetFormData();
    showMessage('error', '取得待辦清單失敗！');
  }
  loading.value = false;
}

async function submitHandler() {
  if (!form.value.content || !form.value.due_date) {
    showMessage('error', '請填寫待辦事項和截止日期');
    return;
  }

  sending.value = true;
  try {
    if (!todo.id) await postTodo(form.value);
    else await putTodo(todo.id, form.value);

    showMessage('success', `${todo.id ? '更新' : '新增'}待辦清單成功！`);
    emits('refresh');
    show.value = false;
  } catch (error) {
    console.log('error', error);
    showMessage('error', `${todo.id ? '更新' : '新增'}待辦清單失敗！`);
  }
  sending.value = false;
}

function resetFormData() {
  form.value = {
    content: '',
    due_date: '',
    state_id: 1
  };
}
</script>

<template>
  <el-dialog v-model="show" width="500"
             :title="`${form.id ? '編輯' : '新增'}待辦事項`"
             :close-on-click-modal="false" :close-on-press-escape="false"
             @open="openDialog" @close="resetFormData">
    <div class="content" v-loading="loading">
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
        <el-button :disabled="sending || loading" type="primary" @click="submitHandler">確認</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>