<template>
    <div class="pop-box" v-if="list.length > 0">
        <Card
            :title="list[0].title"
            :icon="list[0].icon"
            @remove="removePopBox"
            :class="'pop-box-body' + (list[0].full ? ' full' : '')"
            :style="'transform: translate(-50%, calc(-50% - ' + ((list.length > 3 ? 3 : list.length) * 10) + 'px))'">
            <div v-if="list[0].html" v-html="list[0].html"></div>
            <component v-else
                :data="list[0].data"
                :is="list[0].template"
                v-bind="list[0].templateValue">
            </component>
            <div class="button" v-show="list[0].button">
                <button
                    v-for="(button, index) in list[0].button"
                    :class="'ss-button' + (button.master == true ? ' master' : '')"
                    :key="'pop-box-btn' + index"
                    @click="button.fun">
                    {{ button.text }}
                </button>
            </div>
            <div class="pop-box-more">
                <div
                    v-for="index in list.length"
                    :data-id="index"
                    :key="'pop-more-' + index"
                    :class="index > list.length - 1 ? 'hid' : ''"
                    :style="'margin:-' + (2 * (index - 1)) + 'px ' + ((20 * index - 1) - (2 * (index - 1))) + 'px 0 ' + ((20 * index - 1) - (2 * (index - 1))) + 'px;'">
                </div>
            </div>
        </Card>
        <div></div>
    </div>
</template>
  
<script lang="ts">
import Card from '../ss-card'

import { defineComponent, getCurrentInstance } from 'vue'
import { PopInfo } from 'packages/dist/types'

export default defineComponent({
    name: "bc-popbox",
    components: {
        Card
    },
    data () {
        return {
            list: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-popbox'].popList as PopInfo[]
        }
    },
    methods: {
        removePopBox () {
            this.list.shift()
        }
    }
})
</script>
  
<style scoped>
.pop-box {
    position: absolute;
    height: 100%;
    z-index: 20;
    width: 100%;
    left: 0;
    top: 0;
}
.pop-box > div:last-child {
    background: var(--color-card-2);
    opacity: 0.7;
    height: 100%;
    width: 100%;
}
.pop-box-body {
    transform: translate(-50%, -50%);
    margin-top: calc(50vh - 35px);
    transition: all .3s;
    position: absolute;
    width: fit-content;
    margin-left: 50%;
    min-width: 360px;
    z-index: 20;
}
.pop-box-body.full {
    height: calc(100vh - 120px);
    transform: unset !important;
    margin: 60px 20px 0 20px;
    width: calc(100% - 80px);
}

.pop-box-body .body > div:not(:last-child) {
    padding: 20px;
}
.pop-box-body .body > div.button {
    background: var(--color-card-1);
    margin: 0 -30px -20px -30px;
    border-radius: 0 0 7px 7px;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    display: flex;
}
.pop-box-body .body > div.button > button {
    background: var(--color-card-2);
    color: var(--color-font);
    margin-left: 10px;
    padding: 0 15px;
    cursor: pointer;
}
.pop-box-body .body > div.button > button.master {
    background: var(--color-main);
    color: var(--color-font-r);
}

.pop-box-more {
    position: absolute;
    margin-left: -20px;
    margin-top: 20px;
    z-index: -1;
    width: 100%;
}
.pop-box-more > div {
    box-shadow: 0 0 3px var(--color-bg);
    background: var(--color-card);
    border-radius: 0 0 7px 7px;
    margin: 0 10px;
    height: 10px;
}
.pop-box-more > div.hid {
    height: 0;
}
</style>