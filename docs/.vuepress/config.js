module.exports = {
    base: '/',
    title: "信工团委秘书部工作文档",
    description: "这是一个关于vuepress的测试文档",
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '正文', link: '/activities/' }],
        sidebar: [{ title: '活动申请流程', path: '/activities/', sidebarDepth: 4 }],
        lastUpdated: 'Last Updated', 
        repo: 'kumlowhup/cycl-xxgcxy-docs',
        repoLabel: 'github',
        docsRepo: 'https://github.com/kumlowhup/cycl-xxgcxy-docs',
        docsBranch: 'master',
    }
}