import http from '@/utils/http.js';

export function getTodos() {
    return http.get('/todos');
}