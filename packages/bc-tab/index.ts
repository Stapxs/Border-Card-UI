import { App } from 'vue'
import Tab from './index.vue'

Tab.install = (app: App): void => {
    if(Tab.name) {
        app.component(Tab.name, Tab)
    } else {
        console.warn('注册为全局组件失败')
    }
}

export default Tab