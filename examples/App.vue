<template>
    <bc-tab title="Border Card UI">
        <div name="主页" class="base">
            <Home></Home>
        </div>
        <div name="组件" class="base">
            <VueDoc></VueDoc>
        </div>
        <div name="旧版" class="base">
            <ss-card>
                <div style="display: flex;align-items: center;font-size: 0.8rem;"> 
                    <font-awesome-icon style="margin-right: 30px;" icon="fa-solid fa-lightbulb"/>
                    <span>这是 Border Card UI for Web （纯 html+css+js）版本的相关文档，此版本已停止更新并且也不会再有变更。
                    但是它依旧可以通过这儿使用！</span>
                </div>
            </ss-card>
            <iframe src="docs"></iframe>
        </div>
    </bc-tab>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from './Home.vue'
import VueDoc from './docs/Vue.vue'

export default defineComponent({
    name: 'App',
    components: { VueDoc, Home }
});
</script>

<style>
html {
    overflow: hidden;
}

#app {
    padding: 15px 0 0 10px;
    width: calc(100% - 20px) !important;
}

iframe {
    margin-top: 10px;
    padding: 0 5px;
    width: calc(100% - 10px);
    height: calc(100% - 80px);
    border: 0;
    border-radius: 7px;
}

.base {
    height: calc(100vh - 70px);
}
</style>