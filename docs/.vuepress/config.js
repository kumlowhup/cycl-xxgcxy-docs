module.exports = {
    base: '/',
    title: "信工团委秘书部工作文档",
    description: "这是一个关于vuepress的测试文档",
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '正文', link: '/basic/' }],
        sidebar: [{ title: '目录', path: '/docs' }]
    },
    lastUpdated: 'Last Updated',
    repo: 'reconsidera/reconsidera.github.io',
    repoLabel: '查看原碼',
    docsRepo: 'https://github.com/reconsidera/reconsidera.github.io',
    docsBranch: 'main'
}