<template>
    <div class="tab-main">
        <Card>
            <ul class="tab-bar">
                <span v-if="title">{{ title }}</span>
                <template v-for="(item, index) in titleList" :key="item.id">
                    <li :class="item.select ? 'select': ''" @click="tabSelect(index)" :id="'bc-tab-' + tabId + '-' + index">
                        <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
                        <span v-else>{{ item.text }}</span>
                        <div
                            v-if="index + 1 == titleList.length"
                            :style="getTabLineStyle(index)">
                        </div>
                    </li>
                </template>
            </ul>
        </Card>
        <div class="tab-body" :id="'bc-tab-' + tabId">
            <slot></slot>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../ss-card'

export default defineComponent({
    name: "bc-tab",
    props: {
        title: { type: String, default: undefined }
    },
    components: { Card },
    data() {
        return {
            // 生成一个随机数作为id
            tabId: Math.random().toString(36).substr(2),
            titleList: [] as {
                id: string,
                text: string,
                icon?: string,
                select?: boolean
            }[],
            nowTab: 0,
            maxTab: 0
        }
    },
    methods: {
        tabSelect(index: number) {
            this.titleList.forEach(item => {
                item.select = false
            })
            this.titleList[index].select = true
            this.nowTab = index
            // 显示对应的内容
            const body = document.getElementById('bc-tab-' + this.tabId)
            const titles = body?.children
            if(titles) {
                for(let i = 0; i < titles.length; i++) {
                    // 判断是不是 DIV 并且有 name 或者 icon 属性
                    if(titles[i].nodeName == 'DIV' && (titles[i].getAttribute('name') || titles[i].getAttribute('icon'))) {
                        const title = titles[i] as HTMLElement
                        if(i == index) {
                            title.style.display = 'block'
                            setTimeout(() => {
                                title.scrollTo(0, 0)
                            }, 100);
                        } else {
                            title.style.display = 'none'
                        }
                    }
                }
            }
        },
        getTabLineStyle(index: number) {
            const x = index - this.nowTab
            return `transform: translateX(calc(-${x}00% - (var(--bc-tab-margin) * 2 + 10px) * ${x}))`
        }
    },
    mounted() {
        this.$nextTick(() => {
            // 根据正文内的 h2 标签生成导航列表
            const body = document.getElementById('bc-tab-' + this.tabId)
            const titles = body?.children
            if(titles) {
                for(let i = 0; i < titles.length; i++) {
                    // 判断是不是 DIV 并且有 name 或者 icon 属性
                    if(titles[i].nodeName == 'DIV' && (titles[i].getAttribute('name') || titles[i].getAttribute('icon'))) {
                        const title = titles[i] as HTMLElement
                        title.id = 'bc-tab-' + this.tabId + '-' + i
                        title.style.display = i == 0 ? 'bock' : 'none'
                        title.style.scrollBehavior = 'smooth'
                        this.titleList.push({
                            id: title.id,
                            text: title.getAttribute('name') || '',
                            icon: title.getAttribute('icon') || undefined,
                            select: i == 0 ? true : undefined
                        })
                    }
                }
            }
        })
    }
})
</script>
  
<style scoped>
.tab-main > div:first-child {
    margin-bottom: 10px;
}
.tab-bar {
    --bc-tab-margin: 20px;

    margin: -17px -20px -17px -40px;
    justify-content: center;
    align-items: center;
    display: flex;
}
.tab-bar > span {
    font-weight: bold;
    flex: 1;
}
.tab-bar > li {
    margin: 0 var(--bc-tab-margin);
    justify-content: center;
    flex-direction: column;
    list-style-type: none;
    align-items: center;
    border-radius: 3px;
    min-width: 30px;
    cursor: pointer;
    padding: 10px;
    display: flex;
}
.tab-bar > li span,
.tab-bar > li svg {
    color: var(--color-font);
    transition: color 0.3s;
    font-size: 0.9rem;
}

.tab-bar > li > div {
    width: calc(100% + 10px);
    margin-bottom: -10px;
    transition: all .2s;
    border-radius: 7px;
    margin-top: 6px;
    height: 3px;
}
.tab-bar > li:last-child > div {
    background: var(--color-main);
}
.tab-bar > li.select span,
.tab-bar > li.select svg {
    color: var(--color-main);
}
</style>