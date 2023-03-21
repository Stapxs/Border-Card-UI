<template>
    <div class="ss-card">
        <header v-if="title">
            <div class="icon" v-if="icon != undefined">
                <div v-if="icon.length <= 0"></div>
                <font-awesome-icon v-else :icon="icon"/>
            </div>
            <span>{{ title }}</span>
            <div style="flex:1"></div>
            <font-awesome-icon
                v-if="hasRemove"
                icon="fa-solid fa-xmark"
                @click="removeCard"/>
        </header>
        <div class="body" v-if="$slots.default">
            <slot></slot>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ss-card",
    props: {
        remove: { type: String, default: undefined },
        title: { type: String, default: undefined },
        icon: { type: String, default: undefined }
    },
    data() {
        return {
            hasRemove: this.$attrs['onRemove'] != undefined
        }
    },
    methods: {
        removeCard() {
            this.$emit('remove')
        }
    }
})
</script>
  
<style scoped>
.ss-card {
    background-color: var(--color-card);
    box-shadow: 0 0 5px transparent;
    transition: box-shadow .3s;
    color: var(--color-font);
    border-radius: 7px;
    padding: 20px;
    margin: 5px;  /* 阴影的预留边距 */
}
.ss-card:hover {
    box-shadow: 0 0 5px var(--color-shader);
}

.ss-card header {
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
}
.ss-card header > svg {
    cursor: pointer;
    height: 1.1rem;
}
.ss-card header .icon {
    align-items: center;
    height: 1.3rem;
    display: flex;
}

.ss-card header .icon > svg {
    height: 1.1rem;
}
.ss-card header .icon > div {
    background: var(--color-main);
    border-radius: 5px;
    margin-right: 10px;
    height: 100%;
    width: 5px;
}
.ss-card header .icon > svg {
    margin-right: 10px;
}

.ss-card .body {
    padding: 0 10px;
}
</style>