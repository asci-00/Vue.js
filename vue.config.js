const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue todo list',
    },
  },
  transpileDependencies: true,
});
