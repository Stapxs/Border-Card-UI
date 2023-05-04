import { App } from 'vue'
import Input from './index.vue'

Input.install = (app: App): void => {
    app.component(Input.name, Input)
}

export default Input