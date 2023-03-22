<template>
    <div class="msg-menu" :id="'msg-menu-view-' + name" style="display:block !important;">
        <div v-show="data.show" class="msg-menu-bg" @click="closeMsgMenu()"></div>
        <Card :class="data.show ? 'menu show' : 'menu'"
            :style="`margin-left:${data.point.x}px;margin-top:${data.point.y}px;`">
            <div :id="'msg-menu-body-' + name" v-show="!custonBody">
                <slot></slot>
            </div>
            <template v-if="custonBody">
                <div v-for="item in custonBody" class="item"
                    v-show="data.list && data.list.includes(item.id)"
                    @click="closeMsgMenu(item.id)"
                    :key="'msg-menu-body-' + item.id">
                    <font-awesome-icon :icon="item.icon"/>
                    <a>{{ item.name }}</a>
                </div>
            </template>
        </Card>
    </div>
</template>
  
<script lang="ts">
import Card from '../ss-card'

import { defineComponent, PropType } from 'vue'
import { MenuStatue } from '../dist/types'

export default defineComponent({
    name: "bc-menu",
    emits: ['close'],
    props: {
        name: {
            type: String,
            default: Math.random().toString(36).substr(2)
        },
        data: {
            type: Object as PropType<MenuStatue>,
            default: () => { return {} }
        }
    },
    components: {
        Card
    },
    data() {
        return {
            custonBody: undefined as any
        }
    },
    methods: {
        closeMsgMenu(id = '') {
            if(id !== '') {
                this.$emit('close', id)
            } else {
                this.$emit('close', null)
            }
        },
    },
    mounted() {
        const body = document.getElementById('msg-menu-body-' + this.name)
        // 如果 body 下面第一个元素是 ul，获取 icon 属性重新构建内容
        if(body && body.children[0] && body.children[0].tagName === 'UL') {
            this.custonBody = []
            for(let i = 0; i < body.children[0].children.length; i++) {
                const li = body.children[0].children[i] as HTMLLIElement
                this.custonBody.push({
                    id: li.id,
                    icon: li.getAttribute('icon'),
                    name: li.innerText
                })
            }
        }
    }
})
</script>
  
<style scoped>
.msg-menu {
    pointer-events: none;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
}
.msg-menu-bg {
    pointer-events: all;
    position: absolute;
    height: 100%;
    width: 100%;
}
.menu {
    background: rgba(var(--color-bg-rgb), 0.7);
    box-shadow: 0 0 5px var(--color-shader);
    backdrop-filter: blur(50px);
    transition: transform .1s;
    transform-origin: top;
    transform: scaleY(0);
    pointer-events: all;
    min-height: unset;
    min-width: 100px;
    max-width: 150px;
    padding: 10px;
    width: 20%;
}
.menu.show {
    transform: scaleY(1);
}
.menu div.item {
    transition: background .3s;
    background: transparent;
    align-items: center;
    border-radius: 7px;
    padding: 5px 15px;
    margin: 0 -10px;
    cursor: pointer;
    display: flex;
}
.menu div.item:hover {
    background: var(--color-main);
}
.menu div.item > svg {
    color: var(--color-font-1);
    transition: color .3s;
    margin-right: 10px;
    font-size: 1.1rem;
    margin-top: 2px;
    width: 1.5rem;
}
.menu div.item:hover > svg {
    color: var(--color-font-r);
}
.menu div.item > a {
    color: var(--color-font);
    text-overflow: ellipsis;
    transition: color .3s;
    white-space: nowrap;
    font-size: 0.99rem;
    overflow: hidden;
}
.menu div.item:hover > a {
    color: var(--color-font-r);
}
</style>