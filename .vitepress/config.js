import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

export default defineConfig({
  lang: 'zh-CN',
  title: 'wechatpay.im',
  description: 'WeChat Pay Community Edition',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    codeTransformers: [
      transformerTwoslash()
    ],
  },
  srcExclude: ['**/README.md'],
  sitemap: {
    hostname: 'https://wechatpay.im',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#00c250' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: 'WeChat Pay Community Edition' }],
    ['meta', { property: 'og:site_name', content: 'wechatpay.im' }],
    ['meta', { property: 'og:url', content: 'https://wechatpay.im/' }],
  ],
  transformPageData(pageData) {
    const href = `https://wechatpay.im/${pageData.relativePath}`.replace(/(?:index)?\.md$/, '')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head?.push([ 'link', { rel: 'canonical', href, }])
  },
  themeConfig: {
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题模式',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式',
    aside: false,
    outline: {
      level: 'deep',
      label: '页面导航',
    },
    footer: {
      message: 'Published on the GitHub',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    notFound: {
      title: '未找到',
      quote: '您所访问的页面未找到，或者已失效',
      linkLabel: '返回首页',
      linkText: '返回首页',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        hourCycle: 'h23',
        timeZone: 'Asia/Shanghai',
        forceLocale: false,
      },
    },
    nav: [
      {
        text: '指南',
        link: '',
      },
      {
        text: '文档',
        link: '/openapi/',
      },
      {
        text: 'SDK',
        link: '',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wechatpay-im',
      },
    ],
    sidebar: {
    },
  },
})
