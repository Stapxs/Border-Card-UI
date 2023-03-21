import { App, reactive } from 'vue'
import { PopInfo } from '../dist/types'

import PopBox from './index.vue'

// PopBox 补充的全局方法
const appendFun = {
    // 缓存的弹窗列表
    popList: reactive([] as PopInfo[]),

    // 添加弹窗
    add: (info: PopInfo) => {
        appendFun.popList.push(info)
    },

    // 移除弹窗
    remove: () => {
        appendFun.popList.shift()
    }
}

PopBox.install = (app: App): void => {
    app.component(PopBox.name, PopBox)
    app.config.globalProperties['$bcui'] = { 'bc-popbox': appendFun }
}
PopBox.append = appendFun

export default PopBox