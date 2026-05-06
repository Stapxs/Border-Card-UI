import { App } from 'vue'
import Expander from './index.vue'

Expander.install = (app: App): void => {
    if(Expander.name) {
        app.component(Expander.name, Expander)
    } else {
        console.warn('注册为全局组件失败')
    }
}

export default Expander