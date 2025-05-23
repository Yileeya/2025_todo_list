import http from '@/utils/http.js';

const url = {
    state: '/state',
    todo: '/TodoList'
};

export function getState() {
    return http.get(url.state);
}

export function getTodos() {
    return http.get(url.todo);
}

export function getTodo(id) {
    return http.get(`${url.todo}/${id}`);
}

export function postTodo(form) {
    return http.post(url.todo, {
        ...form
    });
}

export function putTodo(id, form) {
    return http.put(`${url.todo}/${id}`, {
        ...form
    });
}

export function deleteTodo(id) {
    return http.delete(`${url.todo}/${id}`);
}