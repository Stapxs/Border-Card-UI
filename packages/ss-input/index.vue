<template>
    <div class="ss-imput-base">
        <input
            :value="value != undefined ? value : modelValue"
            :type="type"
            :class="classIn + ' ss-input' + (icon != undefined ? (icon.length <= 0 ?  ' wicon' : ' wficon') : '')"
            @input="$emit('update:modelValue', getValue($event.target))">
        <div class="icon" v-if="icon != undefined">
            <div v-if="icon.length <= 0"></div>
            <font-awesome-icon v-else :icon="icon"/>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ss-input",
    props: {
        icon: { type: String, default: undefined },
        type: { type: String, default: 'text' },
        value: { type: String, default: undefined },
        modelValue: { type: String, default: undefined },
        classIn: { type: String, default: undefined }
    },
    data() {
        return {}
    },
    methods: {
        getValue(element: EventTarget | null) {
            const inputEvent = element as HTMLInputElement
            return inputEvent.value
        }
    }
})
</script>
  
<style scoped>
.ss-input {
    width: unset !important;
    flex: 1;
}

.ss-imput-base {
    flex-direction: row-reverse;
    display: flex;
}
.ss-imput-base > div.icon {
    pointer-events: none;
    margin-right: -2rem;
    align-items: center;
    display: flex;
    width: 2rem;
    z-index: 1;
}
.ss-imput-base > div.icon > div {
    background: var(--color-main);
    transition: height .1s;
    border-radius: 7px;
    margin-left: 10px;
    width: 5px;
    height: 0;
}
.ss-imput-base > input:focus ~ div.icon > div {
    height: calc(100% - 16px);
}
.ss-imput-base > div.icon > svg {
    margin-left: 10px;
    font-size: .9rem;
}

.ss-imput-base > input {
    color: var(--color-font);
    transition: padding .3s;
}
.ss-imput-base > input.wicon:focus {
    padding-right: 10px;
    padding-left: 25px;
}
.ss-imput-base > input.wicon {
    padding-right: 25px;
}
.ss-imput-base > input.wficon {
    padding-left: calc(.9rem + 20px);
}
</style>