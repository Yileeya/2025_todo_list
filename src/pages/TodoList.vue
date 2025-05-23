<script setup>
import {showMessage} from '@/utils/message.js';
import {getTodos, deleteTodo} from '@/apis/todos.js';
import {useUIUXStore} from '@/stores/uiux.js';

const { setLoading } = useUIUXStore();

const todos = ref([]);

// region dialog 相關
const defaultTodo = {
  id: 0,
  content: '',
  due_date: '',
  state_id: 1
};
const todoDialog = ref({
  show: false,
  todo: { ...defaultTodo }
});

function openTodoDialog(todo) {
  todoDialog.value.todo = {
    ...todo
  };
  todoDialog.value.show = true;
}
// endregion

async function deleteTodoHandler(id) {
  try {
    await deleteTodo(id);

    todos.value = todos.value.filter(todo => todo.id !== id);
    showMessage('success', '刪除成功！');
  } catch (err) {
    showMessage('error', '刪除失敗！');
  }
}

async function fetchTodos() {
  setLoading(true);
  try {
    const res = await getTodos();
    todos.value = res.data;
  } catch (err) {
    showMessage('error', '取得待辦清單失敗！');
  }
  setLoading(false);
}

fetchTodos();
</script>

<template>
  <div class="todo-page container">
    <h1>Todo List</h1>
    <el-button class="btn-add" type="primary"
               @click="openTodoDialog(defaultTodo)">
      新增
    </el-button>
    <table class="table customize-table">
      <thead>
      <tr>
        <th>#</th>
        <th>內容</th>
        <th>截止日期</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="!todos.length">
        查無資料
      </tr>
      <tr v-for="(todo,idx) in todos" :key="todo.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ todo.content }}</td>
        <td>{{ todo.due_date }}</td>
        <td>
          <TodoListStatusTag :status-id="todo.state_id"/>
        </td>
        <td>
          <el-button type="primary" @click="openTodoDialog(todo)">編輯</el-button>
          <el-button type="danger" @click="deleteTodoHandler(todo.id)">刪除</el-button>
        </td>
      </tr>
      </tbody>
    </table>
    <TodoListTodoDialog v-model="todoDialog.show" :todo="todoDialog.todo"
                        @refresh="fetchTodos"/>
  </div>
</template>

<style scoped lang="scss">
.todo-page {
  .btn-add {
    float: right;
    margin-bottom: 10px;
  }
}
</style>