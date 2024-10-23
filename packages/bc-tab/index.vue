<template>
    <div class="tab-main">
        <Card>
            <ul class="tab-bar" v-if="$slots.default">
                <span v-if="title">{{ title }}</span>
                <TransitionGroup name="tabar">
                    <template v-for="(child, index) in $slots.default().filter(item => item.props)" :key="'bc-tab-' + this.tabId + '-' + child.props?.name">
                        <li @click="tabSelect(index)"
                            :class="selectIndex == index ? 'select': ''">
                            <font-awesome-icon v-if="child.props?.icon" :icon="child.props.icon"/>
                            <span v-else>{{ child.props?.name }}</span>
                            <div :style="getTabLineStyle(index)"
                                v-if="index == $slots.default().filter(item => item.props).length - 1"></div>
                        </li>
                    </template>
                </TransitionGroup>
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
    emits: ['selected'],
    props: {
        title: { type: String, default: undefined }
    },
    components: { Card },
    data() {
        return {
            // 生成一个随机数作为id
            tabId: Math.random().toString(36).substr(2),
            selectIndex: 0
        }
    },
    methods: {
        tabSelect(index: number) {
            this.selectIndex = index
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
            this.$emit('selected', index)
        },
        getTabLineStyle(maxIndex: number) {
            const x = maxIndex - this.selectIndex
            return `transform: translateX(calc(-${x}00% - (var(--bc-tab-margin) * 2 + 10px) * ${x}))`
        }
    },
    mounted() {
        this.tabSelect(0)
        // // 如果有效插槽项有变更（增加或减少），重选选择下当前选中的选项；方式出现没有隐藏的 DIV
        this.$watch(() => this.$slots.default ? this.$slots.default().filter(item => item.props).length : 0, () => {
            this.$nextTick(() => {
                this.tabSelect(this.selectIndex)
            })
        })
    }
})
</script>
  
<style scoped>
.tabar-move,
.tabar-enter-active,
.tabar-leave-active {
    transition: transform .3s, opacity .1s;
}
.tabar-enter-from,
.tabar-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
.tabar-leave-active {
  position: absolute;
  right: 0;
}

.tab-main > div:first-child {
    margin-bottom: 10px;
}
.tab-bar {
    --bc-tab-margin: 20px;

    margin: -17px -20px -17px -40px;
    justify-content: center;
    align-items: center;
    position: relative;
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
    transition: all .35s;
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