import { Dialog } from 'vant';
export function alert(message, options = {}) {
    Dialog({
        title: "提示",
        message,
        ...options
    });
}

// 获取px转为适配数据
export function getRem(num) {
    var unit = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 750;
    return num * unit;
}