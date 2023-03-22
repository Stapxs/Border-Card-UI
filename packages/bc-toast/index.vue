<template>
    <TransitionGroup class="app-msg" id="bc-app-msg" name="appmsg" tag="div">
        <div v-for="msg in list" :key="'appmsg-' + msg.id">
          <font-awesome-icon :icon="msg.icon" />
          <a>{{ msg.text }}</a>
          <div v-if="!msg.autoClose" @click="remove(msg.id)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
          </div>
        </div>
        <div style="min-height: 30vh;opacity: 0;" key="appmsg-space"></div>
    </TransitionGroup>
</template>
  
<script lang="ts">
import { ToastInfo } from 'packages/dist/types'
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: "bc-toast",
    props: {
        time: { type: Number, default: 5000 }
    },
    data() {
        return {
            list: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-toast'].toastList as ToastInfo[],
            remove: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-toast'].remove
        }
    },
    mounted() {
        // 初始化显示时间设置
        getCurrentInstance()?.appContext
            .config.globalProperties.$bcui['bc-toast']
            .setShowTime(this.time)
    }
})
</script>
  
<style scoped>
/* 应用通知动画 */ 
.appmsg-move,
.appmsg-enter-active,
.appmsg-leave-active {
    transition: all 0.2s;
}

.appmsg-leave-active {
    position: absolute;
}

.appmsg-enter-from,
.appmsg-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

/* 样式 */
.app-msg {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: last baseline;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    scroll-behavior: smooth;
    pointer-events: none;
    position: absolute;
    padding-left: 20px;
    overflow-y: scroll;
    direction: rtl;
    display: flex;
    z-index: 10;
    left: 0;
    top: 0;
}
.app-msg::-webkit-scrollbar {
    display: none;
}
.app-msg > div {
    box-shadow: 0 0 5px var(--color-shader);
    background: var(--color-main);
    overflow-wrap: anywhere;
    align-items: center;
    pointer-events: all;
    width: fit-content;
    border-radius: 7px;
    padding: 10px 20px;
    margin-top: 5px;
    max-width: 20%;
    direction: ltr;
    display: flex;
}
.app-msg > div svg {
    fill: var(--color-font-r);
}
.app-msg > div > div:first-child > svg {
    color: var(--color-font-r);
    margin-top: 5px;
    height: 1rem;
}
.app-msg > div > a {
    color: var(--color-font-r);
    user-select: none;
    margin: 0 10px;
}
.app-msg > div > div:last-child {
    border-radius: 7px;
    cursor: pointer;
    height: 20px;
    width: 20px;
}
.app-msg > div > div:last-child:hover {
    background: rgba(0, 0, 0, 0.03);
}
.app-msg > div > div:last-child > svg {
    color: var(--color-font-1-r);
    margin-left: 5px;
    margin-top: 3px;
    height: 1rem;
    height: 1rem;
}
</style>