<template>
    <div class="scrolltab-main">
        <Card class="scroll-list">
            <span>{{ title }}</span>
            <template v-for="item in titleList" :key="item.id">
                <a :href="'#' + item.id" :class="item.select ? 'select': ''">
                    <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
                    <span>{{ item.text }}</span>
                </a>
            </template>
        </Card>
        <div class="scroll-body"
            :id="'bc-scrolltab-' + tabId"
            @scroll="bodyScroll">
            <slot></slot>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../ss-card'

export default defineComponent({
    name: "bc-scrolltab",
    props: {
        title: { type: String, default: '' }
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
            }[]
        }
    },
    methods: {
        bodyScroll() {
            const body = document.getElementById('bc-scrolltab-' + this.tabId)
            const titles = body?.getElementsByTagName('h2')
            if(titles) {
                for(let i = 0; i < titles.length; i++) {
                    const title = titles[i]
                    const titleTop = title.getBoundingClientRect().top
                    if(titleTop > 0) {
                        this.titleList.forEach(item => {
                            item.select = false
                        })
                        this.titleList[i].select = true
                        break
                    }
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            // 根据正文内的 h2 标签生成导航列表
            const body = document.getElementById('bc-scrolltab-' + this.tabId)
            const titles = body?.getElementsByTagName('h2')
            if(titles) {
                for(let i = 0; i < titles.length; i++) {
                    const title = titles[i]
                    title.id = 'bc-scrolltab-title-' + this.tabId + '-' + i
                    this.titleList.push({
                        id: title.id,
                        text: title.innerText,
                        icon: title.getAttribute('icon') || undefined,
                        select: i == 0 ? true : undefined
                    })
                }
            }
        });
    }
})
</script>
  
<style scoped>
.scrolltab-main {
    display: flex;
    height: 100%;
}

.scroll-list {
    height: fit-content;
    margin-right: 10px;
    width: 200px;
}
.scroll-list .body > span {
    background: var(--color-main);
    margin: -20px -30px 0 -30px;
    border-radius: 7px 7px 0 0;
    color: var(--color-font-r);
    width: calc(100% + 20px);
    padding: 10px 20px;
    display: block;
}

.scroll-list .body > a {
    transition: background .3s;
    margin: 10px -20px 0 -20px;
    color: var(--color-font);
    text-decoration: none;
    align-items: center;
    padding: 10px 20px;
    border-radius: 7px;
    display: flex;
}
.scroll-list .body > a.select {
    background: var(--color-main);
    color: var(--color-font-r);
}
.scroll-list .body > a > svg {
    margin-right: 10px;
    height: 1.2rem;
}

.scroll-body {
    color: var(--color-font);
    flex-direction: column;
    overflow-y: scroll;
    display: flex;
    flex: 1;
}
</style>