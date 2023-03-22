export type PopInfo = {
    icon?: string,                  // 弹窗图标
    title?: string,                 // 弹窗标题（缺省将没有标题栏和关闭按钮）
    html?: string,                  // 填充 html（和下面的模板必须有一个）
    template?: any,                 // 填充模板（如果都有，优先填充 html）
    templateValue?: any,            // 模板 props
    data?: any,                     // 模板的附加传参，只有这一个
    full?: boolean,                 // 是否填充整个页面
    button?: {                      // 按钮
        master?: boolean,               // 是否高亮（主按钮）
        fun?: (value: any) => void,     // 按钮回调
        text: string                    // 按钮文本
    }[]
}

export type ToastInfo = {
    id?: number,                    // 唯一 id
    icon: string,                   // 图标
    text: string,                   // 文本
    autoClose?: boolean             // 是否自动关闭
}

export type MenuStatue = {
    show: boolean,                  // 是否显示
    point: {                        // 点击的位置
        x: number,
        y: number
    },
    list?: string[]                 // 要显示的菜单项 ID 列表
}