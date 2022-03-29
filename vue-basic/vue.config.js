const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Vue todo list',
    },
  },
  transpileDependencies: true,
});
