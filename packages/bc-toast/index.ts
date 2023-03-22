import { ToastInfo } from 'packages/dist/types'
import { App, reactive } from 'vue'
import Toast from './index.vue'

// Toast 补充的全局方法
const appendFun = {
    toastList: reactive([] as ToastInfo[]),

    showTime: 5000,
    setShowTime(time: number) {
        appendFun.showTime = time
    },

    show(info: ToastInfo) {
        // 传入的 info.id 值是无意义的，这里随机生成一个 id
        info.id = Math.floor(Math.random() * 1000000)
        appendFun.toastList.push(info)
        // 如果需要自动关闭，就设置一个定时器
        if (info.autoClose) {
            setTimeout(() => {
                if(info.id != undefined) appendFun.remove(info.id)
            }, appendFun.showTime)
        }
        // 将消息区滚动到顶部，因为消息区是倒置的，所以应该是滚动到负高度
        const toastList = document.getElementById('bc-app-msg')
        if (toastList) {
            toastList.scrollTop = 0 - toastList.scrollHeight
        }
        // 返回 id
        return info.id
    },

    remove(id: number) {
        // 寻找 id 所在的位置
        const index = appendFun.toastList.findIndex((item) => item.id === id)
        if (index != -1) {
            appendFun.toastList.splice(index, 1)
        }
    },

    clear() {
        // 使用 splice 清空数组，防止无法触发响应式
        appendFun.toastList.splice(0, appendFun.toastList.length)
    }
}

Toast.install = (app: App): void => {
    app.config.globalProperties['$bcui'] = { 'bc-toast': appendFun }
    app.component(Toast.name, Toast)
}
Toast.append = appendFun

export default Toast