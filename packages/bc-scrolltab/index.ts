import { App } from 'vue'
import Scroll from './index.vue'

Scroll.install = (app: App): void => {
    if(Scroll.name) {
        app.component(Scroll.name, Scroll)
    } else {
        console.warn('注册为全局组件失败')
    }
}

export default Scroll