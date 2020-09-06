module.exports = {
  title: "麻雀计划",
  discription: "前端知识图谱",
  base:"/time/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '知识地图', link: '/javascript/' },
      { text: '最佳实践', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title:"知识地图",
        path:'/maps.md',

      },
      {
        title: "css",
        path: "/css/",
        collapsable: false, 
        sidebarDepth: 1,
        children: [
          "/css/box.md",
        ],
      },
      {
        title: "javascript", 
        path: "/javascript/", 
        collapsable: false, 
        sidebarDepth: 1,
        children: [
          "/javascript/ECMAScript.md",
          "/javascript/Advance.md",
          "/javascript/DOM.md",
          "/javascript/BOM.md",
          "/javascript/async.md",
        ],
      },
      {
        title: "vue", 
        path: "/vue/", 
        collapsable: false, 
        sidebarDepth: 1,
        children: ["/vue/theory.md", "/vue/vue.md"],
      },

      {
        title: "webpack",
        path: "/webpack/",
      },
      {
        title: "工程化",
        path: "/project/",
      },
      {
        title:'其他',
        path:'/other.md'
      }
    ],
  },
};
