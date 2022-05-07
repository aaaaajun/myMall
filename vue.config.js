const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置引用文件
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'common': 'components/common',
        'content': 'components/content',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
})
