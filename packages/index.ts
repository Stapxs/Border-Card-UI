import { App } from 'vue'

import Card from './ss-card'
import Input from './ss-input'

import ScrollTab from './bc-scrolltab'
import Tab from './bc-tab'
import PopBox from './bc-popbox'
import Toast from './bc-toast'
import Menu from './bc-menu'
import Expander from './bc-expander'

// 组件列表
const components = [
    Card, Input, ScrollTab, Tab, PopBox, Toast, Menu, Expander
]

// 全局注册所有组件
const install = (app: App): void => {
    const bcui = {} as any
    components.map((component) => {
        app.component(component.name, component)
        // 判断有没有需要注册到全局的方法
        if (component.append) {
            bcui[component.name] = component.append
        }
    })
    app.config.globalProperties['$bcui'] = bcui
}

// 为组件提供 install 安装方法，供按需引入
export {
    Card, Input, ScrollTab, Tab, PopBox, Toast, Menu, Expander
}

export default {
    install
}