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
                    <ss-card title="提醒" icon="fa-solid fa-circle-info" id="delCard" @remove="removeCard">
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
                                <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info" />
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
                    {{ ' 在进行元素对齐的时候需要留意。你可以点击关闭按钮移除这个卡片。</span>\n' }}
                    {{ '</ss-card>\n' }}
            {{ '<div style="display: flex;align-items: start;">\n' }}
                {{ ' <ss-card title="卡片颜色" icon>\n' }}
                    {{ ' <div class="color-view">\n' }}
                        {{ ' <div class="card font">card + font</div>\n' }}
                        {{ ' <div class="card-1 font-1">card-1 + font-1</div>\n' }}
                        {{ ' <div class="card-2 font-2">card-2 + font-2</div>\n' }}
                        {{ ' </div>\n' }}
                    {{ ' </ss-card>\n' }}
                {{ ' <ss-card>\n' }}
                    {{ ' <div style="display: flex;align-items: center;">\n' }}
                        {{ ' <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info" />\n' }}
                        {{ ' <span>但是你不能将 style 样式直接添加在卡片上，套一个 div 或许是个好的选择。</span>\n' }}
                        {{ ' </div>\n' }}
                    {{ ' </ss-card>\n' }}
                {{ '</div>' }}
            </code></div>
        </ss-card>
        </ss-card>

        <h2 icon="fa-solid fa-puzzle-piece">表单</h2>
        <ss-card title="表单" icon>
            <p>
                表单不是一个单独的组件，它是一堆表单组件的集合。由于大部分表单组件都由纯 css 实现，为了防止 doc 累述全都放置在一起。<br>
                大部分表单都不需要使用组件，它已经包含在全局 css 中。具体使用方法可以参考示例。
            </p>
            <h3>输入框：ss-input</h3>
            <p>
                输入框提供了 css 的基本样式和组件的版本。在组件版本中标题样式和卡片用法相同，
                输入框值支持使用 <code>value</code> 参数传入或使用 <code>v-model</code> 进行双向绑定。
            </p>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <ss-card :title="'用户信息' + (name != '' ? '（' + name + '）' : '')" icon>
                    <div class="form-demo">
                        <div>
                            <span>昵称</span>
                            <ss-input icon="fa-solid fa-user" type="text" v-model="name"></ss-input>
                        </div>
                        <div>
                            <span>邮箱</span>
                            <ss-input icon value="example@outlook.com"></ss-input>
                        </div>
                        <div>
                            <span>公开显示邮箱</span>
                            <label class="ss-switch">
                                <input type="checkbox">
                                <div>
                                    <div></div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <span>密码</span>
                            <input type="password" class="ss-input">
                        </div>
                        <div>
                            <span>性别</span>
                            <label class="ss-radio">
                                <input type="radio" name="f">
                                <div>
                                    <div></div>
                                </div>
                            </label>
                            <span>男</span>
                            <label class="ss-radio">
                                <input type="radio" name="f">
                                <div>
                                    <div></div>
                                </div>
                            </label>
                            <span>女</span>
                            <label class="ss-radio">
                                <input type="radio" name="f" checked>
                                <div>
                                    <div></div>
                                </div>
                            </label>
                            <span>其他</span>
                        </div>
                        <div>
                            <span>启用版本</span>
                            <select class="ss-select">
                                <option value="1">1.0</option>
                                <option value="2">2.0</option>
                                <option value="0">rolling</option>
                            </select>
                        </div>
                    </div>
                </ss-card>
                <div class="code card-2"><code>
                    {{'    <ss-card title="用户信息" icon>\n' }}
                    {{'    <div class="form-demo">\n' }}
                    {{'        <div>\n' }}
                    {{'            <span>昵称</span>\n' }}
                    {{'            <input type="text" class="ss-input" value="林小槐">\n' }}
                    {{'        </div>\n' }}
                    {{'        <div>\n' }}
                    {{'            <span>邮箱</span>\n' }}
                    {{'            <ss-input icon v-model="mail"></ss-input>\n' }}
                    {{'        </div>\n' }}
                    {{'        <div>\n' }}
                    {{'            <span>公开显示邮箱</span>\n' }}
                    {{'            <label class="ss-switch">\n' }}
                    {{'                <input type="checkbox">\n' }}
                    {{'                <div><div></div></div>\n' }}
                    {{'            </label>\n' }}
                    {{'        </div>\n' }}
                    {{'        <div>\n' }}
                    {{'            <span>密码</span>\n' }}
                    {{'            <ss-input icon="fa-solid fa-key" type="password"></ss-input>\n' }}
                    {{'        </div>\n' }}
                    {{'        <div>\n' }}
                    {{'            <span>性别</span>\n' }}
                    {{'            <label class="ss-radio">\n' }}
                    {{'                <input type="radio" name="f">\n' }}
                    {{'                <div><div></div></div>\n' }}
                    {{'            </label>\n' }}
                    {{'            <span>男</span>\n' }}
                    {{'            <label class="ss-radio">\n' }}
                    {{'                <input type="radio" name="f">\n' }}
                    {{'                <div><div></div></div>\n' }}
                    {{'            </label>\n' }}
                    {{'            <span>女</span>\n' }}
                    {{'            <label class="ss-radio">\n' }}
                    {{'                <input type="radio" name="f" checked>\n' }}
                    {{'                <div><div></div></div>\n' }}
                    {{'            </label>\n' }}
                    {{'            <span>其他</span>\n' }}
                    {{'        </div>\n' }}
                    {{'        <div>\n' }}
                    {{'            <span>启用版本</span>\n' }}
                    {{'            <select class="ss-select">\n' }}
                    {{'                <option value="1">1.0</option>\n' }}
                    {{'                <option value="2">2.0</option>\n' }}
                    {{'                <option value="0">rolling</option>\n' }}
                    {{'            </select>\n' }}
                    {{'        </div>\n' }}
                    {{'    </div>\n' }}
                    {{'</ss-card>' }}
                </code></div>
            </ss-card>
        </ss-card>
        <h2 icon="fa-solid fa-scroll">滚动标签卡</h2>
        <ss-card title="滚动标签卡：bc-scrolltab" icon>
            <ss-card class="card-1">
                <div style="display: flex;align-items: center;">
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb" />
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
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info" />
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
                            <a class="just-img-a" href="https://www.pixiv.net/artworks/95018142">* 图片来源，侵权请反馈仓库
                                issue。</a>
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
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb" />
                    <span>这是个来自古老的 Stapxs Tool Box 的设置页面风格</span>
                </div>
            </ss-card>
            <p>
                这才是正统的标签卡（Tab）组件，用来切换显示不同的内容。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>title</code> ：标签卡列表的标题。如果存在将会显示在标签卡列表的左边，同时所有选项将会右对齐显示。</li>
                <li><code>selected</code> ：标签卡被点击的回调，如果需要的话可以进行一些切换附加操作。</li>
                <li><code>icon</code> ：标签项的图标。使用 Font Awesome 名称。你需要把它添加在每个正文的 DIV 上，在有图标的时候优先显示图标。</li>
                <li><code>name</code> : 「必填」标签项的名字。你需要把它添加在每个正文的 DIV 上。</li>
            </ul>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space">
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
                    <bc-tab title="设置" @selected="closeMenu">
                        <div name="账号" style="height: 300px;overflow-y: scroll;">
                            <ss-card>
                                <div style="display: flex;align-items: center;">
                                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb" />
                                    <span>在 Tab 切换的时候，如果 Tab 下的内容可以滚动；bc-tab 将会把内容滚回顶部（如果在这之前滚动到了其他位置）。</span>
                                </div>
                            </ss-card>
                            <ss-card style="margin-top: 10px">
                                <ss-card class='card-1'>
                                    <div style="display: flex;align-items: center;">
                                        <img src="https://secure.gravatar.com/avatar/75c55a45cadac8669a1c5e4943cda5ce?s=330&r=G"
                                            class="card-2" style="width: 3rem;height: 3rem;border-radius: 100%;">
                                        <div style="display: flex;flex-direction: column;margin-left: 20px;">
                                            <span style="font-weight: bold;color: var(--color-main);">{{ name }}</span>
                                            <span
                                                style="font-size:0.8rem;color: var(--colr-font-2);">example@outlook.com</span>
                                        </div>
                                    </div>
                                </ss-card>
                                <ss-card style="margin-top: 10px" class="card-1"
                                    :title="'用户信息' + (name != '' ? '（' + name + '）' : '')">
                                    <div class="form-demo" style="margin: 0">
                                        <div>
                                            <span>昵称</span>
                                            <ss-input classIn="card-2" icon v-model="name"></ss-input>
                                        </div>
                                        <div>
                                            <span>邮箱</span>
                                            <ss-input classIn="card-2" icon value="example@outlook.com"></ss-input>
                                        </div>
                                        <div>
                                            <span>公开显示邮箱</span>
                                            <label class="ss-switch">
                                                <input type="checkbox">
                                                <div class="card-2">
                                                    <div></div>
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <span>密码</span>
                                            <ss-input classIn="card-2" icon type="password" value="123"></ss-input>
                                        </div>
                                    </div>
                                </ss-card>
                            </ss-card>
                        </div>
                        <ss-card name="界面">
                            这是界面设置
                            <div class="form-demo" style="margin: 0">
                                <div style="display: flex;align-items: center;">
                                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb" />
                                    <span>在 <code>0.2.5</code> 版本及以后，你可以在 Tab 元素上使用 <code>v-if</code> 来隐藏整个选项。</span>
                                </div>
                                <div class="ss-card" style="background: var(--color-card-1);padding: 15px 20px;">
                                    <span>显示功能</span>
                                    <label class="ss-switch">
                                        <input type="checkbox" v-model="showFun">
                                        <div>
                                            <div></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </ss-card>
                        <div name="功能" v-if="showFun">
                            <ss-card>
                                <div style="display: flex;align-items: center;">
                                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb" />
                                    <span>你可以给 ss-tab 传递 <code>@selected</code> 方法来执行切换回调，需要注意的是在 ss-tab 被加载完成时此方法也会被触发。</span>
                                </div>
                            </ss-card>
                        </div>
                        <ss-card name="高级">这是高级设置</ss-card>
                    </bc-tab>
                </div>
                <div class="code card-2"><code>
                    {{ '<bc-tab title="设置" @selected="closeMenu">\n' }}
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
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info" />
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
                        <li><code>button</code> : 弹窗的按钮列表，包含以下内容：
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
                    <ss-card title="样式" icon="fa-solid fa-mountain">
                        <span>当多个弹窗被添加时，他们会被排在下面依次准备被显示（同时界面上会叠加最多三个重叠提示），
                            一旦弹窗被添加组件并没有提供移除其中某一个的方法，你可以自己搓反正是个列表（躲</span>
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
        <h2 icon="fa-solid fa-message">吐司</h2>
        <ss-card title="全局吐司：bc-toast" icon>
            <p>
                欢迎使用超文本烤箱协议！这是个支持它的吐司组件，你可以在任何地方使用它来显示一个吐司。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>time</code> : 吐司的显示时间（毫秒）。默认为 5000。</li>
            </ul>
            <ss-card class="card-1" style="margin-top: 10px;margin: 0 30px;">
                <div style="display: flex;align-items: center;">
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info" />
                    <span>建议把组件放置在页面文档的最底端以防止一些奇怪的排版错误</span>
                </div>
            </ss-card>
            <h3>方法</h3>
            在应用初始化导入组件后，Toast 的操作方法将被挂载到全局 <code>$bcui['bc-toast']</code> 下，你可以直接使用它来操作吐司。
            <ul>
                <li><code>show(info: ToastInfo): number</code> ：显示吐司，返回吐司 ID。参数 <code>info</code>
                    是一个对象，它包含了吐司的信息，具体内容如下：
                    <ul>
                        <li><code>icon</code> : 「必填」吐司的图标。</li>
                        <li><code>text</code> : 「必填」吐司的文本。</li>
                        <li><code>autoClose</code> : 是否在超时后自动关闭。默认 false。</li>
                    </ul>
                </li>
                <li><code>remove(id: number)</code> ：关闭指定 ID 的吐司。</li>
                <li><code>clear()</code> ：关闭所有吐司。</li>
            </ul>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space" style="display: flex;">
                    <ss-card title="操作" icon>
                        <div style="display: flex;flex-direction: column;">
                            <button @click="showToast" style="padding: 5px 20px;margin: 10px auto;">显示吐司</button>
                            <button @click="clearToast" style="padding: 5px 20px;margin: 10px auto;">清空吐司</button>
                        </div>
                    </ss-card>
                    <ss-card style="flex: 1;" title="样式" icon="fa-solid fa-mountain">
                        <span>你可以通过给吐司组件添加 css 样式来修改它的位置 ……</span>
                    </ss-card>
                </div>
                <div class="code card-2"><code>
                    {{ 'const toast = getCurrentInstance()?.appContext.config.globalProperties.$bcui[\'bc-toast\']\n' }}
                    {{  'if(toast) {\n' }}
                    {{  '   const toastInfo = {\n' }}
                    {{  '       icon: \'fa-solid fa-circle-info\',\n' }}
                    {{  '       text: \'这是一条吐司消息\',\n' }}
                    {{  '       autoClose: false\n' }}
                    {{  '   }\n' }}
                    {{  '   this.toast.show(toastInfo)\n' }}
                    {{  '}' }}
                </code></div>
            </ss-card>
        </ss-card>
        <h2 icon="fa-solid fa-ellipsis">菜单</h2>
        <ss-card title="菜单：bc-menu" icon>
            <p>
                这是一个菜单组件，它可以在任意 DIV 下的任意位置显示一个菜单，同时支持打开时指定显示部分菜单项
                （不过不支持多级菜单）。
            </p>
            <p>
                菜单的正文有两种设置方式，分别为自动生成和自定义；如果你选择自动生成，你需要按照要求书写正文，可以参考下面的示例。
                如果你选择自定义，你可以在正文中自由书写任意内容，但是你需要自己处理菜单项的点击事件。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>data</code> : 菜单显示参数。菜单将根据配置显示，包含如下参数：
                    <ul>
                        <li><code>show</code> : 「必填」是否显示。</li>
                        <li><code>point</code> : 「必填」显示的坐标，像是 <code>{ x: 0, y: 0 }</code>。</li>
                        <li><code>list</code> : 要显示的菜单项 ID 字符串列表。</li>
                    </ul>
                </li>
                <li><code>name</code> : 菜单名。全局工具方法需要它，用不着可以不写。</li>
                <li><code>@close</code> : 关闭菜单回调。如果是选择选项导致的关闭，会传递菜单项 ID。</li>
                <li><code>icon</code> : 「自动生成必填」菜单项图标。你需要写在正文的 LI 元素上。</li>
                <li><code>id</code> : 「自动生成必填」菜单项 ID。你需要写在正文的 LI 元素上。</li>
            </ul>
            <ss-card class="card-1" style="margin-top: 10px;margin: 0 30px;">
                <div style="display: flex;align-items: center;">
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-mountain" />
                    <span>
                        菜单组件会使用 <code>position: absolute;</code> 来覆盖父级 DIV，
                        为了防止意外的排版错误，建议给菜单组件的父级元素添加 <code>position: relative;</code>。
                    </span>
                </div>
            </ss-card>
            <h3>方法</h3>
            在应用初始化导入组件后，Menu 的工具方法将被挂载到全局 <code>$bcui['bc-menu']</code> 下，你可以使用它们来简化一些操作。
            <ul>
                <li><code>set(name: string, event: MouseEvent): MenuStatue</code> : 根据鼠标点击事件获取指定菜单的显示位置。</li>
            </ul>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space" style="display: flex;flex-direction: column;position: relative;">
                    <ss-card class="menu-view-bg">
                        <div class="menu-view">
                            <div @contextmenu.prevent="showMenu">
                                <img class="hd" :src="require('../assets/lama.jpg')">
                                <ss-card class="card-1">
                                    <div class="menu-view-body">您赶紧把 BCUI 做成组件罢！</div>
                                </ss-card>
                            </div>
                            <div @contextmenu.prevent="showMenu($event, true)">
                                <div class="space"></div>
                                <ss-card class="card-1">
                                    <div class="menu-view-body">啊？什么？听不见 ——</div>
                                </ss-card>
                            </div>
                            <div @contextmenu.prevent="showMenu">
                                <img class="hd" :src="require('../assets/lama.jpg')">
                                <ss-card class="card-1">
                                    <div class="menu-view-body">
                                        <img style="width: 150px;" :src="require('../assets/face.gif')">
                                    </div>
                                </ss-card>
                            </div>
                            <div @contextmenu.prevent="showMenu($event, true)">
                                <div class="space"></div>
                                <ss-card class="card-1">
                                    <div class="menu-view-body">
                                        <a class="just-img-b" href="https://www.pixiv.net/artworks/75558054">
                                            图片来源，侵权请反馈仓库 issue
                                        </a><br>
                                        我只是想告诉你菜单是有毛玻璃效果的 XD
                                    </div>
                                </ss-card>
                            </div>
                        </div>
                    </ss-card>
                    <bc-menu :data="menuStatue" @close="closeMenu" name="demo-menu">
                        <ul>
                            <li icon="fa-solid fa-message" id="reply">回复</li>
                            <li icon="fa-solid fa-clipboard" id="copy">复制</li>
                            <li icon="fa-solid fa-trash-can" id="delete">撤回</li>
                        </ul>
                    </bc-menu>
                </div>
                <div class="code card-2"><code>
                    {{ '<div @contextmenu.prevent="showMenu"></div>\n' }}
                    {{ '<bc-menu :data="menuStatue" @close="closeMenu" name="demo-menu">\n' }}
                    {{ '    <ul>\n' }}
                    {{ '        <li icon="fa-solid fa-message" id="reply">回复</li>\n' }}
                    {{ '        <li icon="fa-solid fa-clipboard" id="copy">复制</li>\n' }}
                    {{ '        <li icon="fa-solid fa-trash-can" id="delete">撤回</li>\n' }}
                    {{ '    </ul>\n' }}
                    {{ '</bc-menu>\n' }}
                    {{ '\n' }}
                    {{ 'showMenu(event: Event, isMe = false) {\n' }}
                    {{ '    const info = this.menu.set(\'demo-menu\', event as MouseEvent)\n' }}
                    {{ '    info.list = !isMe ? [\'reply\', \'copy\'] : [\'delete\', \'copy\']\n' }}
                    {{ '    this.menuStatue = info\n' }}
                    {{ '},\n' }}
                    {{ 'closeMenu(id: string) {\n' }}
                    {{ '    this.menuStatue.show = false\n' }}
                    {{ '    if(id) {\n' }}
                    {{ '        this.toast.show({\n' }}
                    {{ '            icon: \'fa-solid fa-circle-info\',\n' }}
                    {{ '            text: `${id} 被点击了。`,\n' }}
                    {{ '            autoClose: true\n' }}
                    {{ '        })\n' }}
                    {{ '    }\n' }}
                    {{ '}' }}
                </code></div>
            </ss-card>
        </ss-card>
        <h2 icon="fa-solid fa-square-caret-down">折叠面板</h2>
        <ss-card title="折叠面板：bc-expander" icon>
            <p>
                这是一个一般路过的折叠面板，它没有什么特殊的。
            </p>
            <h3>可选参数</h3>
            <ul>
                <li><code>title</code> ：面板的标题</li>
                <li><code>icon</code> ：面板的图标，使用 Font Awesome 名称。如果不填写值（或者是空字符串），将会显示为点前缀。</li>
                <li><code>open</code> ：面板是否默认打开，不需要填写值（空字符串）。</li>
            </ul>
            <h3>示例</h3>
            <ss-card class="card-1" title="view" icon="fa-solid fa-mountain">
                <div class="view-space" style="display: flex;flex-direction: column;position: relative;">
                    <bc-expander title="折叠面板" icon>
                        <ss-card class="card-1" style="margin-top: 10px;">
                            <div style="display: flex;align-items: center;">
                                <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-circle-info" />
                                <span>这儿什么都没有！</span>
                            </div>
                        </ss-card>
                    </bc-expander>
                    <bc-expander title="折叠面板" icon open>
                        <ss-card class="card-1" title="小知识" icon="fa-solid fa-circle-info">
                            <span>折叠面板其实也由 ss-card 卡片构成，所以它同样拥有卡片标题的所有标题样式 XD</span>
                        </ss-card>
                    </bc-expander>
                </div>
                <div class="code card-2"><code>
                    {{ '<bc-expander title="折叠面板" icon open>\n' }}
                    {{ '    <ss-card class="card-1" title="小知识" icon="fa-solid fa-circle-info">\n' }}
                    {{ '        <span>这儿什么都没有！</span>\n' }}
                    {{ '    </ss-card>\n' }}
                    {{ '</bc-expander>\n' }}
                </code></div>
            </ss-card>
        </ss-card>
    </bc-scrolltab>
    <bc-popbox></bc-popbox>
    <bc-toast :time="5000"></bc-toast>
</template>

<script lang="ts">
import { MenuStatue } from '../../packages/dist/types'
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'VueDoc',
    data () {
        return {
            popBox: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-popbox'],
            toast: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-toast'],
            menu: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-menu'],
            menuStatue: {
                show: false,
                point: { x: 0, y: 0 }
            } as MenuStatue,
            name: '林槐',
            showFun: true
        }
    },
    methods: {
        showMenu(event: Event, isMe = false) {
            const info = this.menu.set('demo-menu', event as MouseEvent)
            info.list = !isMe ? ['reply', 'copy'] : ['delete', 'copy']
            this.menuStatue = info
        },
        closeMenu(id: string) {
            this.menuStatue.show = false
            if(id != undefined) {
                this.toast.show({
                    icon: 'fa-solid fa-circle-info',
                    text: `${id} 被点击了。`,
                    autoClose: true
                })
            }
        },

        showToast() {
            const textList = [
                ['fa-circle-info', '这是一条吐司消息。'],
                ['fa-bread-slice', '香浓的吐司！'],
                ['fa-gear', '这个吐司看起来有好好初始化哦。'],
                ['fa-ghost', '¯\\_(ツ)_/¯'],
                ['fa-utensils', '来个吐司？'],
                ['fa-face-grin-stars', '吐司超好吃 ——'],
                ['fa-circle-info', '这是个没有感情的吐司。'],
                ['fa-heart', 'Also try LayUI!'],
                ['fa-bread-slice', 'Toast'],
                ['fa-circle-info', '不想说话。'],
                ['fa-circle-info', 'SS!'],
                ['fa-face-grin-squint-tears', '隔壁小孩都馋哭了。'],
                ['fa-fire', '正在烤吐司。'],
                ['fa-wrench', '超文本烤箱控制协议'],
                ['fa-ban', '419 I\'m a Microwave Oven.']
            ]
            // 随机显示
            const index = Math.floor(Math.random() * textList.length)
            const toastInfo = {
                icon: 'fa-solid ' + textList[index][0],
                text: textList[index][1],
                // 随机获取一个 true 或 false
                autoClose: Math.random() > 0.5
            }
            this.toast.show(toastInfo)
        },
        clearToast() {
            this.toast.clear()
        },

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
.code::-webkit-scrollbar {
    display: none;
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
.just-img-b {
    color: var(--color-font);
}

.menu-view-bg {
    background-image: url(https://lib.stapxs.cn/download/pic/desktopImg/75558054_p0.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.menu-view img.hd {
    background: var(--color-card-2);
    border-radius: 100%;
    margin-right: 10px;
    margin-top: 15px;
    height: 2.2rem;
    width: 2.2rem;
}
.menu-view > div {
    align-items: center;
    align-items: start;
    margin: 5px 0;
    display: flex;
}
.menu-view > div .space {
    flex: 1;
}
.menu-view-body {
    margin: -10px -20px !important;
}

.form-demo {
    margin: 0 20px;
}
.form-demo > div {
    transition: background .3s;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    margin-top: 5px;
    padding: 5px 10px;
    display: flex;
}
.form-demo > div:hover {
    /* background: var(--color-card-1); */
}
.form-demo > div > span {
    font-size: 0.9rem;
}
.form-demo > div > span:first-child {
    font-size: 0.9rem;
    display: block;
    flex: 1;
}
.form-demo > div > label.ss-switch {
    --switch-dot-border: 4px;
    --switch-dot-margin: 9px;
    --switch-height: 30px;
    min-width: 50px;
}
.form-demo > div > label.ss-radio {
    --radio-size: 12px;
    margin-right: 5px;
}
.form-demo > div > label.ss-radio:not(:nth-child(2)) {
    margin-left: 15px;
}
</style>
