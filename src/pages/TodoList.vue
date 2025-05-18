<script setup>
import {todosDemo} from '@/demo/todoDemo.js';
import {showMessage} from '@/utils/message.js';

const todos = ref(todosDemo);

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

function updateTodo(newTodo) {
  const index = todos.value.findIndex(todo => todo.id === newTodo.id);
  if (index !== -1) {
    todos.value[index] = { ...newTodo };
    showMessage('success', '更新成功！');
  } else {
    todos.value.shift({ ...newTodo });
    showMessage('success', '新增成功！');
  }
  todoDialog.value.show = false;
}

function deleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id);
  showMessage('success', '刪除成功！');
}
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
      <tr v-for="(todo,idx) in todos" :key="todo.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ todo.content }}</td>
        <td>{{ todo.due_date }}</td>
        <td>
          <TodoListStatusTag :status-id="todo.state_id"/>
        </td>
        <td>
          <el-button type="primary" @click="openTodoDialog(todo)">編輯</el-button>
          <el-button type="danger" @click="deleteTodo(todo.id)">刪除</el-button>
        </td>
      </tr>
      </tbody>
    </table>
    <TodoListTodoDialog v-model="todoDialog.show" :todo="todoDialog.todo"
                        @submit="updateTodo"/>
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