import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 請求攔截器
http.interceptors.request.use(
    (config) => {
        // 可在這裡加入 token
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

// 回應攔截器
http.interceptors.response.use(
    (response) => {
        // 統一處理成功回應
        return response.data;
    },
    (error) => {
        const status = error.response?.status || 0;
        switch (status) {
            case 401:
                // Token 過期或未授權，登出
                alert('登入逾時，請重新登入');
                // localStorage.removeItem('token')
                // window.location.href = '/login'
                break;
            case 403:
                alert('沒有權限訪問該資源');
                break;
            case 404:
                alert('找不到資源');
                break;
            case 500:
                alert('伺服器錯誤，請稍後再試');
                break;
            default:
                break;
        }

        // 統一錯誤處理，可客製化顯示錯誤訊息
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error); // 傳下去給呼叫端細部處理
    }
);

export default http;