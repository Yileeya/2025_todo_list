import {ElMessage} from 'element-plus';
import 'element-plus/theme-chalk/src/message.scss';

export function showMessage(type = 'success', message = '操作成功') {
    ElMessage({
        type: type,
        message: message,
        customClass: 'toast-message-index'
    });
}