# 2025_todoList

## 系統說明
node版本: v20.10.0

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## 檔案結構

```
src/
├── apis/           # 管理 API
├── assets/         # 靜態資源: scss、圖片等
├── components/     # 共用元件
├── pages/          # 頁面元件
├── stores/         # Pinia 狀態管理
├── router/         # 路由配置及相關邏輯處理
├── utils/          # 工具函數
├── App.vue         # 根元件
└── main.js         # 入口文件
```

## 使用技術
* [Vue3](https://vuejs.org/)
* [Pinia](https://pinia.vuejs.org)
* [Vue Router](https://router.vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Element Plus](https://element-plus.org/zh-CN/)
* [Unplugin Auto Import](https://github.com/unplugin/unplugin-auto-import)
* [Unplugin Vue Components](https://github.com/unplugin/unplugin-vue-components)

## API 說明

| 方法     | 路徑                   | 功能描述       |
| ------ | -------------------- | ---------- |
| GET    | `/api/state`         | 取得狀態列表資料   |
| GET    | `/api/TodoList`      | 取得待辦清單資料   |
| POST   | `/api/TodoList`      | 新增待辦清單資料   |
| GET    | `/api/TodoList/{id}` | 取得單筆待辦清單資料 |
| PUT    | `/api/TodoList/{id}` | 更新單筆待辦清單資料 |
| DELETE | `/api/TodoList/{id}` | 刪除單筆待辦清單資料 |
