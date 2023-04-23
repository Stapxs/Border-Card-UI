<template>
    <Card :title="title" :icon="icon">
        <div :class="'bc-exp' + (isOpen ? ' open' : '')">
            <div @click="changeExpander">
                <font-awesome-icon icon="fa-solid fa-angle-up" />
            </div>
            <div :id="'bcexp-' + expanderId">
                <slot></slot>
            </div>
        </div>
    </Card>
</template>
  
<script lang="ts">
import Card from '../ss-card'

import { defineComponent } from 'vue'

export default defineComponent({
    name: "bc-expander",
    components: {
        Card
    },
    props: {
        title: { type: String, default: undefined },
        icon: { type: String, default: undefined },
        open: { type: String, default: undefined }
    },
    data() {
        return {
            // 生成一个随机数作为id
            expanderId: Math.random().toString(36).substr(2),
            isOpen: false
        }
    },
    methods: {
        changeExpander() {
            this.isOpen = !this.isOpen
            const body = document.getElementById('bcexp-' + this.expanderId)
            if(body) {
                if(this.isOpen) {
                body.style.height = (body.children[0] as HTMLDivElement).offsetHeight + 'px'
                } else {
                    body.style.height = '0'
                }
            }
        }
    },
    mounted() {
        if(this.open != undefined) {
            this.changeExpander()
        }
    }
})
</script>
  
<style scoped>
.bc-exp {
    margin-top: 20px;
}
.bc-exp > div:first-child {
    margin-top: calc(0px - 1.3rem - 20px);
    flex-direction: row-reverse;
    cursor: pointer;
    display: flex;
    height: 15px;
}
.bc-exp > div:first-child > svg {
    transition: transform .3s;
    color: var(--color-main);
    transform: rotate(0deg);
    font-size: 1.3rem;
}
.bc-exp > div:last-child {
    transform: scaleY(0);
    transition: all .3s;
    margin-top: 0;
    height: 0;
}
.bc-exp.open > div:first-child > svg {
    transform: rotate(180deg);
}
.bc-exp.open > div:last-child {
    transform: scaleY(1);
    margin-top: 30px;
}
</style>