const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: "examples/main.ts",
            template: "public/index.html", 
            filename: "index.html"
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set('~', path.resolve('packages')) 
    }
})
