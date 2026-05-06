import { App } from 'vue'
import Input from './index.vue'

Input.install = (app: App): void => {
    if(Input.name) {
        app.component(Input.name, Input)
    } else {
        console.warn('注册为全局组件失败')
    }
}

export default Input