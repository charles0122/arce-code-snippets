import autoSidebar from './theme/plugins/autoSidebarBeta'

export default {
  '/': [
    {
      text: '开始阅读',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
        // { text: '代码片段', link: '/snippets/guide/'},
        // { text: '备忘录', link: '/memo/guide/'},
        { text: '资源导航', link: '/favorites/' },
        // { text: '编程学习', link: '/program/guide/' },
        { text: '参与贡献指南', link: '/contributing' },
      ],
    },
    {
      text: '💿 编程学习',
      collapsed: false,
      items: [{ text: '测试', link: '/program/guide/' }],
    },
    {
      text: '🏓 代码片段',
      collapsed: false,
      items: [
        { text: 'JavaScript', link: '/snippets/js/' },
        { text: 'Java', link: '/snippets/java/' },
      ],
    },
    {
      text: '📝 备忘录',
      collapsed: false,
      // link:"",
      items: [{ text: 'Git', link: '/memo/git/' },
        { text: 'yarn', link: '/memo/yarn/' },
        { text: 'pnpm', link: '/memo/pnpm/' },
        { text: 'Nvm', link: '/memo/nvm/' },
        { text: 'Fvm', link: '/memo/fvm/' },
      ],
    },
  ],
  '/memo/': autoSidebar({ base: 'memo' }),
  '/snippets/': autoSidebar({ base: 'snippets' }),
  '/program/': autoSidebar({ base: 'program' }),
  '/algorithm/': autoSidebar({ base: 'algorithm' }),
}
