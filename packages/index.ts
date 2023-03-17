import { App } from 'vue'
import Card from './ss-card'

// 组件列表
const components = [
    Card
]

// 全局注册所有组件
const install = (app: App): void => {
    components.map((component) => app.component(component.name, component))
}

// 为组件提供 install 安装方法，供按需引入
export {
    Card
}

export default {
    install
}