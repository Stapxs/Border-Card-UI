import { App } from 'vue'
import Expander from './index.vue'

Expander.install = (app: App): void => {
    app.component(Expander.name, Expander)
}

export default Expander