import {defineStore} from 'pinia';

export const useUIUXStore = defineStore('uiux', () => {
    const fullscreenLoading = ref(false);
    let loadingStartTime = 0;

    function setLoading(value) {
        if (value) {
            fullscreenLoading.value = true;
            loadingStartTime = Date.now();
        } else { // 至少1.5s才關閉
            const elapsed = Date.now() - loadingStartTime;
            const delay = Math.max(1500 - elapsed, 0);

            setTimeout(() => {
                fullscreenLoading.value = false;
            }, delay);
        }
    }

    return { fullscreenLoading, setLoading };
});
