<template>
    <bc-scrolltab title="组件列表">
        <ss-card title="卡片：ss-card" icon>
            <h2 icon="fa-solid fa-gear">卡片</h2>
            <p>
                Border Card UI 的基本视觉元素就是基础的大量卡片，这是个和简单的组件。<br>
                你可以像这样使用它：
            </p>
            <ss-card class="card-1" title="html" icon="fa-solid fa-file-code">
                <div class="code card-2"><code>
                    {{  ' <ss-card title="html" icon="fa-solid fa-file-code">\n' }}
                    {{  '    <p>你好世界！</p>\n' }}
                    {{  '</ss-card>' }}
                </code></div>
            </ss-card>
            <p>
                当然，图标是不必须的，你可以这样填写空的图标，或者干脆不写图标：
            </p>
            <ss-card class="card-1" title="新的卡片" icon>
                这是一个有卡片头样式的卡片，<code>{{ '<ss-card class="card-1" title="新的卡片" icon></ss-card>' }}</code>
                <br>像是这样就可以了。
            </ss-card>
            <p>
                卡片还可以拥有一个关闭按钮，你需要给他一个 remove 的回调函数，拥有关闭按钮的卡片必须拥有标题：
            </p>
            <ss-card id="delCard" class="card-1" title="这个卡片可以被关掉" @remove="removeCard">
                <div class="code card-2"><code>
                    {{  ' <ss-card title="卡片！" @remove="removeCard">\n' }}
                    {{  '    <p>你好世界！</p>\n' }}
                    {{  '</ss-card>' }}
                </code></div>
            </ss-card>
        </ss-card>
        <ss-card title="滚动标签卡：bc-scrolltab" icon>

        </ss-card>
    </bc-scrolltab>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    methods: {
        print() {
            console.log('something');
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
    font-size: 1.1rem;
    display: none;
}
p {
    font-size: 0.9rem;
}
code {
    font-family: 'Fira Code', monospace;
    white-space: pre;
    font-size: 0.8rem;
}

.code {
    margin: 20px -30px -20px -30px;
    border-radius: 0 0 7px 7px;
    padding: 10px 20px;
}
</style>
