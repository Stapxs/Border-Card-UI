import { App } from 'vue'

import Card from './ss-card'
import ScrollTab from './bc-scrolltab'
import Tab from './bc-tab'
import PopBox from './bc-popbox'

// 组件列表
const components = [
    Card, ScrollTab, Tab, PopBox
]

// 全局注册所有组件
const install = (app: App): void => {
    components.map((component) => {
        app.component(component.name, component)
        // 判断有没有需要注册到全局的方法
        const bcui = {} as any
        if (component.append) {
            bcui[component.name] = component.append
        }
        app.config.globalProperties['$bcui'] = bcui
    })
}

// 为组件提供 install 安装方法，供按需引入
export {
    Card, ScrollTab, Tab, PopBox
}

export default {
    install
}