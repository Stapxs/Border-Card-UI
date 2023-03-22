import { MenuStatue } from '../dist/types'
import { App, reactive } from 'vue'
import Menu from './index.vue'

// Menu 补充的全局方法
const appendFun = {
    /**
     * 获取菜单状态，这个方法只是返回了菜单状态，需要自行修改/传递给菜单组件
     * @param id 菜单 ID
     * @param event 点击事件
     */
    set(name: string, event: MouseEvent): MenuStatue {
        // 菜单位置
        const x = event.pageX
        const y = event.pageY
        const parent = document.getElementById('msg-menu-view-' + name)
        const parentX = parent?.getBoundingClientRect().left || 0
        const parentY = parent?.getBoundingClientRect().top || 0
        const menuX = x - parentX
        const menuY = y - parentY
        // 设置菜单状态
        const menu = reactive({
            show: true,
            point: { x: menuX, y: menuY }
        })
        return menu
    }
}

Menu.install = (app: App): void => {
    app.component(Menu.name, Menu)
    app.config.globalProperties['$bcui'] = { 'bc-menu': appendFun }
}
Menu.append = appendFun

export default Menu