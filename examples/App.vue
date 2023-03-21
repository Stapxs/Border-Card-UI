<template>
    <bc-scrolltab title="组件列表">
        <h2 icon="fa-solid fa-diamond">卡片</h2>
        <ss-card title="卡片：ss-card" icon>
            <p>
                顾名思义，Border Card UI 是一个基于大量卡片的 UI 框架，所以卡片是它的基础组件之一，
                你可以使用卡片来包裹任何内容，也可以叠加多个卡片来实现更复杂的效果。<br>
                卡片是个简单的 UI 元素，可以包含图标、标题等内容，下面是具体的使用方法。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>title</code> ：卡片的标题</li>
                <li><code>icon</code> ：卡片的图标，使用 Font Awesome 名称。如果不填写值（或者是空字符串），将会显示为点前缀。</li>
                <li><code>@remove</code> ：卡片的关闭按钮的回调函数，如果存在将会显示关闭按钮。此选项必须同时存在 <code>title</code> 参数。</li>
            </ul>
            <h3>卡片重叠</h3>
            <p>
                卡片可以叠加在一起，这样可以实现更复杂的效果。在卡片重叠的时候，你可以添加 class 来修改卡片的背景颜色。
            </p>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space" id="ss-card-code">
                    <ss-card
                        title="提醒"
                        icon="fa-solid fa-circle-info"
                        id="delCard"
                        @remove="removeCard">
                        <span><code>ss-card</code> 卡片拥有 <code>5px</code> 的外边框，这是阴影的预留空间；
                            在进行元素对齐的时候需要留意。你可以点击关闭按钮移除这个卡片。</span>
                    </ss-card>
                    <div style="display: flex;align-items: start;">
                        <ss-card title="卡片颜色" icon>
                            <div class="color-view">
                                <div class="card font">card + font</div>
                                <div class="card-1 font-1">card-1 + font-1</div>
                                <div class="card-2 font-2">card-2 + font-2</div>
                            </div>
                        </ss-card>
                        <ss-card>
                            <div style="display: flex;align-items: center;"> 
                                <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info"/>
                                <span>但是你不能将作用于内容的 style 样式直接添加在卡片上，套一个 div 或许是个好的选择。</span>
                            </div>
                        </ss-card>
                    </div>
                </div>
                <div class="code card-1"><code>
                    {{ '<ss-card\n' }}
                    {{ '    title="提醒"\n' }}
                    {{ '    icon="fa-solid fa-circle-info"\n' }}
                    {{ '    @remove="removeCard">\n' }}
                    {{ '    <span><code>ss-card</code> 卡片拥有 <code>5px</code> 的外边框，这是阴影的预留空间；\n' }}
                    {{ '        在进行元素对齐的时候需要留意。你可以点击关闭按钮移除这个卡片。</span>\n' }}
                    {{ '</ss-card>\n' }}
                    {{ '<div style="display: flex;align-items: start;">\n' }}
                    {{ '    <ss-card title="卡片颜色" icon>\n' }}
                    {{ '        <div class="color-view">\n' }}
                    {{ '            <div class="card font">card + font</div>\n' }}
                    {{ '            <div class="card-1 font-1">card-1 + font-1</div>\n' }}
                    {{ '            <div class="card-2 font-2">card-2 + font-2</div>\n' }}
                    {{ '        </div>\n' }}
                    {{ '    </ss-card>\n' }}
                    {{ '    <ss-card>\n' }}
                    {{ '        <div style="display: flex;align-items: center;">\n' }}
                    {{ '            <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info"/>\n' }}
                    {{ '            <span>但是你不能将 style 样式直接添加在卡片上，套一个 div 或许是个好的选择。</span>\n' }}
                    {{ '        </div>\n' }}
                    {{ '    </ss-card>\n' }}
                    {{ '</div>' }}
                </code></div>
            </ss-card>
        </ss-card>
        <h2 icon="fa-solid fa-scroll">滚动标签卡</h2>
        <ss-card title="滚动标签卡：bc-scrolltab" icon>
            <ss-card class="card-1">
                <div style="display: flex;align-items: center;"> 
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb"/>
                    <span>这是个来自 Stapxs QQ Lite 的设置列表风格</span>
                </div>
            </ss-card>
            <p>
                这是个类似 Bootstrap 的 Scrollspy 组件，虽然没它功能多就是了，<br>
                这个组件曾经被用在设置列表中，适合用于作为一个长文档的目录，或者是一个长列表的目录。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>title</code> ：「必填」标签卡列表的标题。需要将它添加在正文中的 H2 标签上，如果存在将会显示在标签卡列表的顶部。</li>
                <li><code>icon</code> ：标签项的图标，使用 Font Awesome 名称。需要将它添加在正文中的 H2 标签上，组件将会自动获取并用于生成列表。</li>
            </ul>
            <ss-card class="card-1" style="margin: 0 40px;">
                <div style="display: flex;align-items: center;"> 
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info"/>
                    <span>注意，当你不想要显示 H2 的时候，不要使用 <code>display: none</code>，这样会导致无法正常捕获到它，<br>
                你可以使用 <code>opacity: 0</code> 或者 <code>height: 0</code> 来隐藏它。</span>
                </div>
            </ss-card>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space" style="height: 40vh;">
                    <bc-scrolltab title="这只是标题">
                        <h2 icon="fa-solid fa-expand">卡片1</h2>
                        <ss-card>
                            这是一些用来演示的文字，要长长长长长长长一点才能看出效果，最好还能换个行。
                        </ss-card>
                        <h2>卡片2</h2>
                        <ss-card>
                            <img class="just-img" src="https://lib.stapxs.cn/download/pic/desktopImg/95018142_p0.png">
                            <a class="just-img-a" href="https://www.pixiv.net/artworks/95018142">* 图片来源，侵权请反馈仓库 issue。</a>
                        </ss-card>
                    </bc-scrolltab>
                </div>
                <div class="code card-2"><code>
                    {{  ' <bc-scrolltab title="组件列表">\n' }}
                    {{  '     <h2 icon="fa-solid fa-expand">卡片1</h2>\n' }}
                    {{  '     <ss-card><p>你好世界！</p></ss-card>\n' }}
                    {{  '     <h2>卡片2</h2>\n' }}
                    {{  '     <ss-card><p>你好世界！</p></ss-card>\n' }}
                    {{  ' </bc-scrolltab>' }}
                </code></div>
            </ss-card>
        </ss-card>
        <h2 icon="fa-solid fa-table-columns">切换标签卡</h2>
        <ss-card title="切换标签卡：bc-tab" icon>
            <ss-card class="card-1">
                <div style="display: flex;align-items: center;"> 
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb"/>
                    <span>这是个来自古老的 Stapxs Tool Box 的设置页面风格</span>
                </div>
            </ss-card>
            <p>
                这才是正统的标签卡（Tab）组件，用来切换显示不同的内容。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>title</code> ：标签卡列表的标题。如果存在将会显示在标签卡列表的左边，同时所有选项将会右对齐显示。</li>
                <li><code>icon</code> ：标签项的图标。使用 Font Awesome 名称。你需要把它添加在每个正文的 DIV 上，在有图标的时候优先显示图标。</li>
                <li><code>name</code> : 标签项的名字。你需要把它添加在每个正文的 DIV 上。</li>
            </ul>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space">
                    <bc-tab title="设置">
                        <ss-card name="账号">这是账号设置</ss-card>
                        <ss-card name="界面">这是界面设置</ss-card>
                        <ss-card name="功能">这是功能设置</ss-card>
                        <ss-card name="高级">这是高级设置</ss-card>
                    </bc-tab>
                    <div style="display: flex;">
                        <bc-tab style="margin-top: 20px;flex: 1;">
                            <div name="成员"></div>
                            <div name="公告"></div>
                        </bc-tab>
                        <bc-tab style="margin-top: 20px;flex: 1;">
                            <div icon="fa-solid fa-face-laugh-squint"></div>
                            <div icon="fa-solid fa-heart"></div>
                        </bc-tab>
                    </div>
                </div>
                <div class="code card-2"><code>
                    {{ '<bc-tab title="设置">\n' }}
                    {{ '    <ss-card name="账号">这是账号设置</ss-card>\n' }}
                    {{ '    <ss-card name="界面">这是界面设置</ss-card>\n' }}
                    {{ '    <ss-card name="功能">这是功能设置</ss-card>\n' }}
                    {{ '    <ss-card name="高级">这是高级设置</ss-card>\n' }}
                    {{ '</bc-tab>\n' }}
                    {{ '<div style="display: flex;">\n' }}
                    {{ '    <bc-tab style="margin-top: 20px;flex: 1;">\n' }}
                    {{ '        <div name="成员"></div>\n' }}
                    {{ '        <div name="公告"></div>\n' }}
                    {{ '    </bc-tab>\n' }}
                    {{ '    <bc-tab style="margin-top: 20px;flex: 1;">\n' }}
                    {{ '        <div icon="fa-solid fa-face-laugh-squint"></div>\n' }}
                    {{ '        <div icon="fa-solid fa-heart"></div>\n' }}
                    {{ '    </bc-tab>\n' }}
                    {{ '</div>' }}
                </code></div>
            </ss-card>
        </ss-card>
        <h2 icon="fa-solid fa-window-maximize">弹窗</h2>
        <ss-card title="全局弹窗：bc-popbox" icon>
            <p>
                这是全局弹窗组件，它将显示一个最上层的弹窗，你可以使用它来显示一些重要的信息。<br>
                这个组件可以担任各种页面内弹窗的功能，甚至可以用来显示全屏的内嵌页面和 Vue 组件等 ……
            </p>
            <h3>可选参数</h3>
            这个组件没有组件可选参数，它需要使用代码方式初始化和控制。你只需要在页面上放置一个 <code>bc-popbox</code> 组件即可。
            <ss-card class="card-1" style="margin-top: 10px;">
                <div style="display: flex;align-items: center;"> 
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info"/>
                    <span>建议把组件放置在页面文档的最底端以防止一些奇怪的排版错误</span>
                </div>
            </ss-card>
            <h3>方法</h3>
            在应用初始化导入组件后，PopBox 的操作方法将被挂载到全局 <code>$bcui['bc-popbox']</code> 下，你可以直接使用它来操作弹窗。
            <ul>
                <li><code>add(info: PopInfo)</code> ：显示弹窗。参数 <code>info</code> 是一个对象，它包含了弹窗的信息，具体内容如下：
                    <ul>
                        <li><code>title</code> : 弹窗的标题。缺省将没有标题栏。</li>
                        <li><code>icon</code> : 弹窗的标题栏图标。</li>
                        <li><code>html</code> : 弹窗的内容。如果同时存在 <code>template</code>，则优先使用 <code>html</code>。</li>
                        <li><code>template</code> : 弹窗的内容 Vue 模板组件。你可以直接传递一个组件来嵌入到弹窗中。</li>
                        <li><code>templateValue</code> : 模板组件的 props 参数。</li>
                        <li><code>data</code> : 模板组件的附加传参，只有一个。</li>
                        <li><code>full</code> : 是否填充整个页面。如果为 <code>true</code>，则弹窗将会填充整个页面。</li>
                        <li><code>button</code> : 关闭弹窗的按钮列表，包含以下内容：
                            <ul>
                                <li><code>fun</code> : 按钮的回调方法。</li>
                                <li><code>text</code> : 按钮的文本。</li>
                                <li><code>master</code> : 按钮是否高亮（显示为主题色）。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><code>remove()</code> : 移除最前面的一个弹窗。</li>
            </ul>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space" style="display: flex;">
                    <ss-card title="操作" icon style="width: 350px;">
                        <div style="display: flex;">
                            <button @click="addPop" style="padding: 5px 20px;margin: 10px auto;">显示弹窗</button>
                        </div>
                    </ss-card>
                    <ss-card style="margin-top: 10px;">
                        <div style="display: flex;align-items: center;"> 
                            <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-mountain"/>
                            <span>当多个弹窗被添加时，他们会被排在下面依次准备被显示（同时界面上会叠加最多三个重叠提示），
                                一旦弹窗被添加组件并没有提供移除其中某一个的方法，你可以自己搓反正是个列表（躲</span>
                        </div>
                    </ss-card>
                </div>
                <div class="code card-2"><code>
                    {{  'const popBox = getCurrentInstance()?.appContext.config.globalProperties.$bcui[\'bc-popbox\']\n' }}
                    {{  'if(popBox) {\n' }}
                    {{  '   const popInfo = {\n' }}
                    {{  '       title: \'你好啊！\',\n' }}
                    {{  '       icon: \'fa-solid fa-smile\',\n' }}
                    {{  '       html: \'<p>这是一段文字</p>\',\n' }}
                    {{  '       button: [\n' }}
                    {{  '           {\n' }}
                    {{  '               text: \'关闭\',\n' }}
                    {{  '               master: true,\n' }}
                    {{  '               fun: () => this.popBox.remove()\n' }}
                    {{  '           }\n' }}
                    {{  '       ]\n' }}
                    {{  '   }\n' }}
                    {{  '   this.popBox.add(popInfo)\n' }}
                    {{  '}' }}
                </code></div>
            </ss-card>
        </ss-card>
    </bc-scrolltab>
    <bc-popbox></bc-popbox>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'App',
    data () {
        return {
            popBox: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-popbox']
        }
    },
    methods: {
        addPop() {
            const textList = [
                '这是一条弹窗消息。',
                '👋，你好啊！',
                '这是一条弹窗消息，这是一条弹窗消息，这是一条弹窗消息。',
                '你好世界！',
                '一个弱小可怜又无助的消息。'
            ]
            // 随机获取三条显示
            for (let i = 0; i < 4; i++) {
                const index = Math.floor(Math.random() * textList.length)
                const popInfo = {
                    title: '你好啊！',
                    icon: 'fa-solid fa-smile',
                    html: `<p>${textList[index]}</p>`,
                    button: [
                        {
                            text: '关闭',
                            master: true,
                            fun: () => this.popBox.remove()
                        }
                    ]
                }
                this.popBox.add(popInfo)
            }
        },
        removeCard() {
            const card = document.getElementById('delCard')
            if (card) {
                card.style.display = 'none'
            }
        }
    }
});
</script>

<style scoped>
h2 {
    opacity: 0;
    height: 0;
    margin: 0;
}
p {
    font-size: 0.9rem;
}
code {
    font-family: 'Fira Code', monospace;
    background: var(--color-main);
    color: var(--color-font-r);
    border-radius: 4px;
    padding: 1px 10px;
    font-size: 0.8rem;
    white-space: pre;
}

.code {
    margin: 30px -30px -20px -30px;
    border-radius: 0 0 7px 7px;
    padding: 10px 20px;
    overflow-x: scroll;
}
.code > code {
    color: var(--color-font) !important;
    background: unset !important;
}
.code-free {
    border-radius: 7px;
    margin: 10px 5px;
    padding: 20px;
}

.color-view {
    margin: 0 -20px;
    width: 200px;
}
.color-view > div {
    border-radius: 7px;
    padding: 5px;
    margin: 5px;
}

.view-space {
    margin: 0 -30px -30px -30px;
    background: var(--color-bg);
    padding: 20px;
}

.just-img {
    border-radius: 7px;
    margin: 10px;
    height: auto;
    width: 100%;
}
.just-img-a {
    color: var(--color-font-2);
    font-size: 0.8rem;
}
</style>
