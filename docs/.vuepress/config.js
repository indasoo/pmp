// https://vuepress.vuejs.org/guide/directory-structure.html
const navConf = require("./config/navConf");
const headConf = require("./config/headConf");
const pluginConf = require("./config/pluginConf");

// https://vuepress.vuejs.org/guide/basic-config.html#config-file
module.exports = {

  // ↓↓↓↓↓↓↓↓↓根据实际情况自行配置↓↓↓↓↓↓↓↓↓
  title: 'PMP',  // 
  description: '',
  base: '/pmp', 
  // ↑↑↑↑↑↑↑↑↑根据实际情况自行配置↑↑↑↑↑↑↑↑↑
  
  head: headConf,
  plugins: pluginConf,
 
  themeConfig: {
    // https://vuepress.vuejs.org/theme/default-theme-config.html
    nav: navConf,

    // ↓↓↓↓↓↓↓↓↓根据实际情况自行配置↓↓↓↓↓↓↓↓↓
    repo: 'indasoo/pmp', 
    // ↑↑↑↑↑↑↑↑↑根据实际情况自行配置↑↑↑↑↑↑↑↑↑
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
  }
}