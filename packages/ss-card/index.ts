import { App } from 'vue'
import Card from './index.vue'

Card.install = (app: App): void => {
    if(Card.name) {
        app.component(Card.name, Card)
    } else {
        console.warn('注册为全局组件失败')
    }
}

export default Card