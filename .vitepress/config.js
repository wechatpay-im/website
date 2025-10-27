import { defineConfig } from 'vitepress'

const baseUri = 'https://wechatpay.im'
const lastPathMdPattern = /(?:(?<=\/)index)?\.md$/

const cache = new Map();

export default defineConfig({
  lang: 'zh-CN',
  title: 'wechatpay.im',
  description: 'WeChat Pay Community Edition',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  srcExclude: ['**/README.md'],
  sitemap: {
    hostname: baseUri,
    xslUrl: '/sitemap.xsl',
    transformItems: items => Promise.resolve(items.filter(item => Boolean(item?.lastmod))),
  },
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#4F5B93' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:site_name', content: 'wechatpay.im' }],
    ...(process?.argv?.[2] === 'dev' ? [] : [
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-FG432QMP0K' }],
      ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', 'G-FG432QMP0K');`],
    ]),
  ],
  transformHead(ctx) {
    const href = `${baseUri}/${ctx.pageData.relativePath}`.replace(lastPathMdPattern, '')
    return [
      ['link', { rel: 'canonical', href }],
      ['meta', { property: 'og:url', content: href }],
      ['meta', { property: 'og:title', content: ctx.title }],
      ['meta', { property: 'og:description', content: ctx.description }],
      ['meta', { property: 'og:image', content: `${baseUri}/android-chrome-512x512.png` }],
    ]
  },
  markdown: {
    codeCopyButtonTitle: '复制',
    lineNumbers: true,
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
      message: 'Published on the GitHub by TheNorthMemory',
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
      text: '更新于',
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
        link: '/guide/',
        activeMatch: '^/guide/(?!digital)'
      },
      {
        text: '数据签名',
        link: '/guide/digital-signature',
        activeMatch: '^/guide/digital-signature'
      },
      {
        text: '开放接口',
        link: '/openapi/',
        activeMatch: '^/openapi/',
      },
      {
        text: '回调通知',
        link: '/webhook/',
        activeMatch: '^/webhook/'
      },
      {
        text: 'SDK',
        link: '/devkit/',
        activeMatch: '^/devkit/'
      },
      {
        text: '开发者工具',
        link: 'https://tools.aifuwu.net/',
      },
      {
        text: 'EasyWeChat',
        link: 'https://easywechat.com/',
      },
      {
        text: 'NodeJS版',
        link: 'https://wechatpay.js.org/',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wechatpay-im',
      },
      {
        icon: 'tencentqq',
        ariaLabel: 'QQ群12974227',
        link: 'https://qm.qq.com/q/Q175Gz0H0A',
      },
    ],
    sidebar: {
      '/guide/': guideSidebar(),
      '/openapi/': openapiSidebar(),
      '/webhook/': webhookSidebar(),
      '/devkit/': devkitSidebar(),
      '/openapi/v2/applyment/': microMerchantMixedSidebar(),
      '/openapi/v2/fund/': microMerchantMixedSidebar(),
      '/openapi/v2/appauth/': oauthIdentifierSidebar(),
      '/openapi/v2/secsvc/': oauthIdentifierSidebar(),
      '/openapi/v2/risk/getcertficates': microMerchantMixedSidebar(),
      '/openapi/v2/mmpaymkttransfers/query_coupon_stock': microMerchantMixedSidebar(),
      '/openapi/v2/mmpaymkttransfers/querycouponsinfo': microMerchantMixedSidebar(),
      '/openapi/v2/mmpaymkttransfers/send_coupon': microMerchantMixedSidebar(),
      '/openapi/v2/secapi/mkt/addrecommendconf': acquiringBankMgrSidebar(),
      '/openapi/v2/secapi/mch/submchmanage': acquiringBankMgrSidebar(),
      '/openapi/v2/secapi/mch/modifymchinfo': acquiringBankMgrSidebar(),
      '/openapi/v2/secapi/mch/channelsetting': acquiringBankMgrSidebar(),
      '/openapi/v2/secapi/mch/addsubdevconfig': acquiringBankMgrSidebar(),
      '/openapi/v2/secapi/mch/querysubdevconfig': acquiringBankMgrSidebar(),
      '/openapi/v2/risk/getviolation': acquiringBankMgrSidebar(),
      '/webhook/v2/transactions-risk-occurred': acquiringBankMgrSidebar(),
      '/openapi/v2/mchrisk/': acquiringBankMgrSidebar(),
      '/openapi/v3/ebike/': ebikeInstitutionSidebar(),
      '/openapi/v3/facemch/': offlineFacepaySidebar(),
      '/openapi/v3/iotmanage': offlineFacepaySidebar(),
      '/openapi/v3/offlineface': offlineFacepaySidebar(),
      '/openapi/v3/bank-': bankTransferSidebar(),
      '/openapi/v3/rate-activity/': acquiringBankMixedSidebar(),
      '/openapi/v3/marketing/bank/': acquiringBankMixedSidebar(),
      '/openapi/v3/merchant-settlement/': acquiringBankMixedSidebar(),
      '/openapi/v3/payscore/acquiringbank/': acquiringBankMixedSidebar(),
      '/openapi/v3/pay/acquiring-bank/': acquiringBankMixedSidebar(),
      '/webhook/v3/PAYSCORE.MCH_PREPAY': acquiringBankMixedSidebar(),
      '/openapi/v3/combine-transactions/miniprogram': personalCollectionsSidebar(),
      '/openapi/v3/combine-transactions/app#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/combine-transactions/id/{combine_transaction_id}': personalCollectionsSidebar(),
      '/openapi/v3/ecommerce/refunds/apply#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no}#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/ecommerce/refunds/id/{refund_id}#INDIVIDUAL': personalCollectionsSidebar(),
      '/openapi/v3/ecommerce/individual-contracts/': personalCollectionsSidebar(),
      '/openapi/v3/platsolution/ecommerce/settle/': personalCollectionsSidebar(),
      '/openapi/v3/abnormal-fund-processing/receipts/': personalCollectionsSidebar(),
      '/webhook/v3/ABNORMAL_FUND_PROCESSING.TRANSFER.SUCCESS': personalCollectionsSidebar(),
      '/webhook/v3/TRANSACTION.SUCCESS#INDIVIDUAL': personalCollectionsSidebar(),
      '/webhook/v3/REFUND.SUCCESS#INDIVIDUAL': personalCollectionsSidebar(),
      '/webhook/v3/REFUND.ABNORMAL#INDIVIDUAL': personalCollectionsSidebar(),
      '/webhook/v3/REFUND.CLOSED#INDIVIDUAL': personalCollectionsSidebar(),
      '/webhook/v3/SETTLEMENT.SUCCESS': personalCollectionsSidebar(),
      '/openapi/v3/gov/subsidy': nationalConsumerGoodsSubsidySidebar(),
      '/openapi/v3/med-ins/': medicalInsuranceSidebar(),
      '/webhook/v3/MEDICAL_INSURANCE.SUCCESS': medicalInsuranceSidebar(),
      '/openapi/v3/aggracct-bc/wb-channel': aggregatedAccountsForWeBankSidebar(),
    },
  },
})

/**
 * @param {string[]}
 */
function transArrayItem([text, link]) { return { text, link }; }

function guideSidebar() {
  const key = 'guideSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: '指南',
      link: '/guide/',
      items: [
        ['快速开始', '/guide/getting-started'],
        ['数据签名', '/guide/digital-signature'],
      ].map(transArrayItem),
    },
    {
      text: '开放接口概览',
      link: '/openapi/',
      items: [],
    },
    {
      text: '回调通知概览',
      link: '/webhook/',
      items: [],
    },
  ]);
  return cache.get(key);
}

function openapiSidebar() {
  const key = 'openapiSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: 'APIv2',
      collapsed: true,
      items: [
        {
          text: '沙箱环境',
          collapsed: true,
          items: [
            ['获取沙箱密钥', '/openapi/v2/xdc/apiv2getsignkey/sign/getsignkey'],
            ['沙箱付款码支付', '/openapi/v2/xdc/apiv2sandbox/pay/micropay'],
            ['沙箱订单查询', '/openapi/v2/xdc/apiv2sandbox/pay/orderquery'],
          ].map(transArrayItem),
        },
        {
          text: '基础支付',
          collapsed: true,
          items: [
            ['付款码支付', '/openapi/v2/pay/micropay'],
            ['授权码查询openid', '/openapi/v2/tools/authcodetoopenid'],
            ['撤销订单', '/openapi/v2/secapi/pay/reverse'],
            ['统一下单', '/openapi/v2/pay/unifiedorder'],
            ['转换短链接', '/openapi/v2/tools/shorturl'],
            ['查询订单', '/openapi/v2/pay/orderquery'],
            ['关闭订单', '/openapi/v2/pay/closeorder'],
            ['交易保障', '/openapi/v2/payitil/report'],
          ].map(transArrayItem),
        },
        {
          text: '退款',
          collapsed: true,
          items: [
            ['申请退款', '/openapi/v2/secapi/pay/refund'],
            ['申请退款(单品优惠)', '/openapi/v2/secapi/pay/refundv2'],
            ['查询退款', '/openapi/v2/pay/refundquery'],
            ['查询退款(单品优惠)', '/openapi/v2/pay/refundqueryv2'],
          ].map(transArrayItem),
        },
        {
          text: '合单支付',
          collapsed: true,
          items: [
            ['合单下单', '/openapi/v2/pay/combinedorder'],
            ['合单查单', '/openapi/v2/pay/querycombinedorder'],
            ['合单关单', '/openapi/v2/pay/closecombinedorder'],
          ].map(transArrayItem),
        },
        {
          text: '刷脸支付',
          collapsed: true,
          items: [
            ['人脸识别获取调用凭证', '/openapi/v2/face/get_wxpayface_authinfo'],
            ['提交刷脸支付', '/openapi/v2/pay/facepay'],
            ['查询订单', '/openapi/v2/pay/facepayquery'],
            ['撤销订单', '/openapi/v2/secapi/pay/facepayreverse'],
          ].map(transArrayItem),
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            ['查询最大分账比例', '/openapi/v2/pay/profitsharingmerchantratioquery'],
            ['添加分账接收方', '/openapi/v2/pay/profitsharingaddreceiver'],
            ['删除分账接收方', '/openapi/v2/pay/profitsharingremovereceiver'],
            ['请求单次分账', '/openapi/v2/secapi/pay/profitsharing'],
            ['请求多次分账', '/openapi/v2/secapi/pay/multiprofitsharing'],
            ['查询分账结果', '/openapi/v2/pay/profitsharingquery'],
            ['查询订单待分账金额', '/openapi/v2/pay/profitsharingorderamountquery'],
            ['完结分账', '/openapi/v2/secapi/pay/profitsharingfinish'],
            ['分账回退', '/openapi/v2/secapi/pay/profitsharingreturn'],
            ['回退结果查询', '/openapi/v2/pay/profitsharingreturnquery'],
          ].map(transArrayItem),
        },
        {
          text: '账单',
          collapsed: true,
          items: [
            ['下载交易账单', '/openapi/v2/pay/downloadbill'],
            ['下载资金账单', '/openapi/v2/pay/downloadfundflow'],
          ].map(transArrayItem),
        },
        {
          text: '现金红包',
          collapsed: true,
          items: [
            ['发放普通红包', '/openapi/v2/mmpaymkttransfers/sendredpack'],
            ['发放裂变红包', '/openapi/v2/mmpaymkttransfers/sendgroupredpack'],
            ['查询红包记录', '/openapi/v2/mmpaymkttransfers/gethbinfo'],
            ['发放小程序红包', '/openapi/v2/mmpaymkttransfers/sendminiprogramhb'],
          ].map(transArrayItem),
        },
        {
          text: '付款到零钱',
          collapsed: true,
          items: [
            ['发起付款', '/openapi/v2/mmpaymkttransfers/promotion/transfers'],
            ['查询付款', '/openapi/v2/mmpaymkttransfers/gettransferinfo'],
          ].map(transArrayItem),
        },
        {
          text: '付款到银行卡',
          collapsed: true,
          items: [
            ['获取加密公钥', '/openapi/v2/risk/getpublickey'],
            ['发起付款', '/openapi/v2/mmpaysptrans/pay_bank'],
            ['查询付款', '/openapi/v2/mmpaymkttransfers/query_bank'],
          ].map(transArrayItem),
        },
        {
          text: '企业微信',
          collapsed: true,
          items: [
            ['向员工付款', '/openapi/v2/mmpaymkttransfers/promotion/paywwsptrans2pocket'],
            ['查询付款记录', '/openapi/v2/mmpaymkttransfers/promotion/querywwsptrans2pocket'],
            ['发放企业红包', '/openapi/v2/mmpaymkttransfers/sendworkwxredpack'],
            ['查询红包记录', '/openapi/v2/mmpaymkttransfers/queryworkwxredpack'],
          ].map(transArrayItem),
        },
        {
          text: '委托代扣',
          collapsed: true,
          items: [
            {
              text: '扣款服务',
              collapsed: true,
              items: [
                {
                  text: '直连商户模式',
                  collapsed: true,
                  items: [
                    ['公众号纯签约', '/openapi/v2/papay/entrustweb'],
                    ['H5纯签约', '/openapi/v2/papay/h5entrustweb'],
                    ['APP预签约', '/openapi/v2/papay/preentrustweb'],
                    ['支付中签约', '/openapi/v2/pay/contractorder'],
                    ['查询签约关系', '/openapi/v2/papay/querycontract'],
                    ['申请扣款', '/openapi/v2/pay/pappayapply'],
                    ['查询订单', '/openapi/v2/pay/paporderquery'],
                  ].map(transArrayItem),
                },
                {
                  text: '合作伙伴模式',
                  collapsed: true,
                  items: [
                    ['公众号纯签约', '/openapi/v2/papay/partner/entrustweb'],
                    ['H5纯签约', '/openapi/v2/papay/partner/h5entrustweb'],
                    ['APP预签约', '/openapi/v2/papay/partner/preentrustweb'],
                    ['查询签约关系', '/openapi/v2/papay/partner/querycontract'],
                    ['申请扣款', '/openapi/v2/pay/partner/pappayapply'],
                    ['查询订单', '/openapi/v2/pay/partner/paporderquery'],
                  ].map(transArrayItem),
                },
                transArrayItem(
                  ['申请解约', '/openapi/v2/papay/deletecontract'],
                )
              ],
            },
            ...(depositSidebar()?.[0]?.items ?? []),
            {
              text: '微信车主服务',
              collapsed: true,
              items: [
                {
                  text: '直连商户模式',
                  collapsed: true,
                  items: [
                    ['用户入场通知', '/openapi/v2/vehicle/pay/notification'],
                    ['用户状态查询', '/openapi/v2/vehicle/pay/querystate'],
                    ['申请代扣', '/openapi/v2/vehicle/pay/payapply'],
                  ].map(transArrayItem),
                },
                {
                  text: '合作伙伴模式',
                  collapsed: true,
                  items: [
                    ['用户入场通知', '/openapi/v2/vehicle/partnerpay/notification'],
                    ['用户状态查询', '/openapi/v2/vehicle/partnerpay/querystate'],
                    ['申请代扣', '/openapi/v2/vehicle/partnerpay/payapply'],
                  ].map(transArrayItem),
                },
              ],
            },
            {
              text: '乘车码代扣',
              collapsed: true,
              items: [
                {
                  text: '直连商户模式',
                  collapsed: true,
                  items: [
                    ['用户状态查询', '/openapi/v2/transit/pay/querystate'],
                    ['申请代扣', '/openapi/v2/transit/pay/payapply'],
                    ['查询订单', '/openapi/v2/transit/queryorder'],
                  ].map(transArrayItem),
                },
                {
                  text: '合作伙伴模式',
                  collapsed: true,
                  items: [
                    ['用户状态查询', '/openapi/v2/transit/partnerpay/querystate'],
                    ['申请代扣', '/openapi/v2/transit/partnerpay/payapply'],
                    ['查询订单', '/openapi/v2/transit/partnerpay/queryorder'],
                  ].map(transArrayItem),
                },
              ],
            },
            {
              text: '免押租借',
              collapsed: true,
              items: [
                ['创建租借订单', '/openapi/v2/wxv/createrentbill'],
                ['查询租借订单', '/openapi/v2/wxv/queryrentbill'],
                ['撤销租借订单', '/openapi/v2/wxv/cancelbill'],
                ['完结租借订单', '/openapi/v2/wxv/finishrentbill'],
                ['修改租借订单', '/openapi/v2/wxv/changerentmoney'],
              ].map(transArrayItem),
            },
            {
              text: '免押速住',
              collapsed: true,
              items: [
                ['创建速住订单', '/openapi/v2/wxv/createhotelbill'],
                ['查询速住订单', '/openapi/v2/wxv/queryhotelbill'],
                ['完结速住订单', '/openapi/v2/wxv/finishhotelbill'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '跨境/全球',
          collapsed: true,
          items: [
            {
              text: '进件',
              collapsed: true,
              items: [
                ['进件子商户', '/openapi/v2/secapi/mch/addInstitutionsub'],
                ['查询子商户', '/openapi/v2/secapi/mch/queryInstitutionsub'],
                ['修改子商户', '/openapi/v2/secapi/mch/modifyInstitutionsub'],
                ['上传图片', '/openapi/v2/secapi/mch/uploadmedia'],
              ].map(transArrayItem),
            },
            {
              text: '支付',
              collapsed: true,
              items: [
                ['付款码支付', '/openapi/v2/pay/micropay#global'],
                ['撤销订单', '/openapi/v2/secapi/pay/reverse#global'],
                ['统一下单', '/openapi/v2/pay/unifiedorder#global'],
                ['查询订单', '/openapi/v2/pay/orderquery#global'],
                ['关闭订单', '/openapi/v2/pay/closeorder#global'],
              ].map(transArrayItem),
            },
            {
              text: '退款',
              collapsed: true,
              items: [
                ['申请退款', '/openapi/v2/secapi/pay/refund#global'],
                ['查询退款', '/openapi/v2/pay/refundquery#global'],
              ].map(transArrayItem),
            },
            ...[
              ['查询结算资金', '/openapi/v2/pay/settlementquery'],
              ['查询汇率', '/openapi/v2/pay/queryexchagerate'],
            ].map(transArrayItem),
            {
              text: '清关报关',
              collapsed: true,
              items: [
                ['提交订单附加信息', '/openapi/v2/cgi-bin/mch/customs/customdeclareorder'],
                ['查询订单附加信息', '/openapi/v2/cgi-bin/mch/customs/customdeclarequery'],
                ['重推订单附加信息', '/openapi/v2/cgi-bin/mch/newcustoms/customdeclareredeclare'],
              ].map(transArrayItem),
            },
          ],
        },
      ],
    },
    {
      text: 'APIv3',
      collapsed: false,
      items: [
        {
          text: '基础支付',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['付款码支付', '/openapi/v3/pay/transactions/codepay'],
                ['APP下单', '/openapi/v3/pay/transactions/app'],
                ['H5下单', '/openapi/v3/pay/transactions/h5'],
                ['JSAPI下单', '/openapi/v3/pay/transactions/jsapi'],
                ['Native下单', '/openapi/v3/pay/transactions/native'],
                ['按平台单号查单', '/openapi/v3/pay/transactions/id/{transaction_id}'],
                ['按商户单号查单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}'],
                ['撤销订单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/reverse'],
                ['关闭订单', '/openapi/v3/pay/transactions/out-trade-no/{out_trade_no}/close'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['付款码支付', '/openapi/v3/pay/partner/transactions/codepay'],
                ['APP下单', '/openapi/v3/pay/partner/transactions/app'],
                ['H5下单', '/openapi/v3/pay/partner/transactions/h5'],
                ['JSAPI下单', '/openapi/v3/pay/partner/transactions/jsapi'],
                ['Native下单', '/openapi/v3/pay/partner/transactions/native'],
                ['扫码支付下单', '/openapi/v3/pay/partner/transactions/scannedpos'],
                ['小程序支付下单', '/openapi/v3/pay/partner/transactions/miniprogram'],
                ['按平台单号查单', '/openapi/v3/pay/partner/transactions/id/{transaction_id}'],
                ['按商户单号查单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}'],
                ['撤销订单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/reverse'],
                ['关闭订单', '/openapi/v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '退款',
          collapsed: true,
          items: [
            ['发起退款申请', '/openapi/v3/refund/domestic/refunds'],
            ['查询单笔退款', '/openapi/v3/refund/domestic/refunds/{out_refund_no}'],
            ['发起异常退款', '/openapi/v3/refund/domestic/refunds/{refund_id}/apply-abnormal-refund'],
          ].map(transArrayItem),
        },
        {
          text: '合单支付',
          collapsed: true,
          items: [
            ['合单APP下单', '/openapi/v3/combine-transactions/app'],
            ['合单H5下单', '/openapi/v3/combine-transactions/h5'],
            ['合单JSAPI下单', '/openapi/v3/combine-transactions/jsapi'],
            ['合单Native下单', '/openapi/v3/combine-transactions/native'],
            ['合单查单', '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}'],
            ['合单关单', '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close'],
          ].map(transArrayItem),
        },
        {
          text: '免密支付',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['JSAPI下单并授权', '/openapi/v3/pay/transactions/jsapi-with-contract'],
                ['小程序预签约', '/openapi/v3/password-exempt-contract/contracts/normal/pre-entrust-sign/mini-program'],
                ['支付后预签约', '/openapi/v3/password-exempt-contract/contracts/normal/pre-entrust-sign/pay-redirect-sign'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['JSAPI下单并授权', '/openapi/v3/pay/partner/transactions/jsapi-with-contract'],
                ['小程序预签约', '/openapi/v3/password-exempt-contract/contracts/service-provider/pre-entrust-sign/mini-program'],
                ['支付后预签约', '/openapi/v3/password-exempt-contract/contracts/service-provider/pre-entrust-sign/pay-redirect-sign'],
              ].map(transArrayItem),
            },
            ...[
              ['通过商户协议号查询协议', '/openapi/v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}'],
              ['通过商户协议号解约协议', '/openapi/v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate'],
            ].map(transArrayItem),
          ],
        },
        {
          text: '微信分付',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['支付方式前置曝光查询', '/openapi/v3/pay/transactions/exposure'],
                ['获取曝光建议(商户贴息)', '/openapi/v3/pay/instal/exposure'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['支付方式前置曝光查询', '/openapi/v3/pay/partner/transactions/exposure'],
                ['获取曝光建议(商户贴息)', '/openapi/v3/pay/instal/partner/exposure'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '微信刷掌',
          collapsed: true,
          items: [
            ['查询刷掌授权', '/openapi/v3/palmservice/authorization/openid/{openid}'],
            ['服务关联预授权', '/openapi/v3/palmservice/authorization/preauthorize'],
          ].map(transArrayItem),
        },
        {
          text: '分账',
          collapsed: true,
          items: [
            ['查询最大分账比例', '/openapi/v3/profitsharing/merchant-configs/{sub_mchid}'],
            ['添加分账接收方', '/openapi/v3/profitsharing/receivers/add'],
            ['删除分账接收方', '/openapi/v3/profitsharing/receivers/delete'],
            ['请求分账', '/openapi/v3/profitsharing/orders'],
            ['查询分账结果', '/openapi/v3/profitsharing/orders/{out_order_no}'],
            ['查询剩余待分金额', '/openapi/v3/profitsharing/transactions/{transaction_id}/amounts'],
            ['解冻剩余资金', '/openapi/v3/profitsharing/orders/unfreeze'],
            ['请求分账回退', '/openapi/v3/profitsharing/return-orders'],
            ['查询分账回退结果', '/openapi/v3/profitsharing/return-orders/{out_return_no}'],
            ['申请分账账单', '/openapi/v3/profitsharing/bills'],
          ].map(transArrayItem),
        },
        {
          text: '连锁品牌',
          collapsed: true,
          items: [
            {
              text: '分账',
              collapsed: true,
              items: [
                ['查询最大分账比例', '/openapi/v3/brand/profitsharing/brand-configs/{brand_mchid}'],
                ['添加分账接收方', '/openapi/v3/brand/profitsharing/receivers/add'],
                ['删除分账接收方', '/openapi/v3/brand/profitsharing/receivers/delete'],
                ['请求分账', '/openapi/v3/brand/profitsharing/orders#post'],
                ['查询分账结果', '/openapi/v3/brand/profitsharing/orders#get'],
                ['查询剩余待分金额', '/openapi/v3/brand/profitsharing/orders/{transaction_id}/amounts'],
                ['完结分账', '/openapi/v3/brand/profitsharing/finish-order'],
                ['请求分账回退', '/openapi/v3/brand/profitsharing/returnorders#post'],
                ['查询分账回退结果', '/openapi/v3/brand/profitsharing/returnorders#get'],
              ].map(transArrayItem),
            },
            {
              text: '门店',
              collapsed: true,
              items: [
                ['创建门店', '/openapi/v3/merchant-store/stores'],
                ['管理门店', '/openapi/v3/merchant-store/stores/{store_id}'],
                ['绑定收款商户号', '/openapi/v3/merchant-store/stores/{store_id}/recipients/bind'],
                ['解绑收款商户号', '/openapi/v3/merchant-store/stores/{store_id}/recipients/unbind'],
              ].map(transArrayItem),
            },
            {
              text: '红包',
              collapsed: true,
              items: [
                ['品牌商户发放红包', '/openapi/v3/fund-app/brand-redpacket/brand-merchant-batches'],
                ['查询批次单(商家批次单号)', '/openapi/v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}'],
                ['查询批次单(微信批次单号)', '/openapi/v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}'],
                ['查询明细单(商家明细单号)', '/openapi/v3/fund-app/brand-redpacket/brand-merchant-out-batches/{out_batch_no}/out-details/{out_detail_no}'],
                ['查询明细单(微信明细单号)', '/openapi/v3/fund-app/brand-redpacket/brand-merchant-batches/{batch_no}/details/{detail_no}'],
              ].map(transArrayItem),
            },
            {
              text: '会员',
              collapsed: true,
              items: [
                ['创建会员卡模板', '/openapi/v3/brand/partner/card-member/cards#post'],
                ['查询会员卡模板列表', '/openapi/v3/brand/partner/card-member/cards#get'],
                ['查询会员卡模板信息', '/openapi/v3/brand/partner/card-member/cards/{card_id}#get'],
                ['修改会员卡模板信息', '/openapi/v3/brand/partner/card-member/cards/{card_id}#patch'],
                ['删除会员卡模板信息', '/openapi/v3/brand/partner/card-member/cards/{card_id}#delete'],
                ['作废会员卡模板', '/openapi/v3/brand/partner/card-member/cards/{card_id}/invalidate'],
                ['查询品牌用户的所有会员卡', '/openapi/v3/brand/partner/card-member/user-cards'],
                ['查询品牌用户会员卡信息', '/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}#get'],
                ['修改品牌用户会员卡信息', '/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}#patch'],
                ['作废品牌用户会员卡', '/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}/invalidate'],
                ['入会组件预授权', '/openapi/v3/brand/partner/card-member/pre-auth-tokens'],
                ['导入用户会员卡(OPENID)', '/openapi/v3/brand/partner/card-member/user-cards/import-by-openid'],
                ['导入用户会员卡(手机号)', '/openapi/v3/brand/partner/card-member/user-cards/import-by-phone'],
                ['同步会员开通结果', '/openapi/v3/brand/partner/card-member/user-cards/{user_card_code}/confirm'],
                ['创建用户动态信息', '/openapi/v3/brand/partner/card-member/user-feeds'],
                ['同步积分余额', '/openapi/v3/brand/partner/card-member/user-points/sync'],
                ['同步积分兑券结果', '/openapi/v3/brand/partner/card-member/user-points/exchange-coupon/confirm'],
              ].map(transArrayItem),
            },
            {
              text: '品牌门店',
              collapsed: true,
              items: [
                ['创建门店', '/openapi/v3/brand/partner/store/brandstores'],
                ['管理门店', '/openapi/v3/brand/partner/store/brandstores/{store_id}'],
                ['绑定收款商户号', '/openapi/v3/brand/partner/store/brandstores/{store_id}/bindrecipient'],
                ['解绑收款商户号', '/openapi/v3/brand/partner/store/brandstores/{store_id}/unbindrecipient'],
              ].map(transArrayItem),
            },
            {
              text: '品牌活动',
              collapsed: true,
              items: [
                ['查询摇优惠活动列表', '/openapi/v3/brand/marketing/shake-activities/activities'],
                ['设置投放计划回调地址', '/openapi/v3/marketing/partner/delivery-plan/{sp_mchid}/notify-url'],
                ['创建投放计划', '/openapi/v3/marketing/partner/delivery-plan/delivery-plans'],
                ['更新投放计划', '/openapi/v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}'],
                ['终止投放计划', '/openapi/v3/marketing/partner/delivery-plan/delivery-plans/{plan_id}/terminate'],
                ['查询投放计划列表', '/openapi/v3/marketing/partner/delivery-plan/delivery-plans/{brand_id}/delivery-plans'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '账单',
          collapsed: true,
          items: [
            ['申请交易账单', '/openapi/v3/bill/tradebill'],
            ['申请资金账单', '/openapi/v3/bill/fundflowbill'],
            ['申请子商户资金账单', '/openapi/v3/bill/sub-merchant-fundflowbill'],
            ['下载账单文件', '/openapi/v3/billdownload/file'],
          ].map(transArrayItem),
        },
        {
          text: '会员卡',
          collapsed: true,
          items: [
            ['设置回调地址', '/openapi/v3/marketing/membercard-open/callback#patch'],
            ['查询回调地址', '/openapi/v3/marketing/membercard-open/callback#get'],
            ['创建会员卡模板', '/openapi/v3/marketing/membercard-open/cards#post'],
            ['查询会员卡模板列表', '/openapi/v3/marketing/membercard-open/cards#get'],
            ['查询会员卡模板信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}#get'],
            ['修改会员卡模板信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}#patch'],
            ['删除会员卡模板信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}#delete'],
            ['设置会员卡模板权益项', '/openapi/v3/marketing/membercard-open/cards/{card_id}/rights'],
            ['老会员卡模板升级', '/openapi/v3/marketing/membercard-open/cards/{card_id}/upgrade'],
            ['导入会员Code', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/deposit'],
            ['根据openid导入用户会员卡', '/openapi/v3/marketing/membercard-open/cards/{card_id}/users/import'],
            ['根据手机号导入用户会员卡', '/openapi/v3/marketing/membercard-open/cards/{card_id}/phone-membercard/import'],
            ['通过加密手机号查询领卡状态', '/openapi/v3/marketing/membercard-open/phonenumber-member/search'],
            ['导入加密手机号提醒会员领卡', '/openapi/v3/marketing/membercard-open/phonenumber-member/import'],
            ['生成商户投放预授权凭证', '/openapi/v3/marketing/membercard-open/cards/{card_id}/permission-tokens'],
            ['查询用户在品牌下所有会员卡', '/openapi/v3/marketing/membercard-open/user/cards'],
            ['创建会员卡二维码', '/openapi/v3/marketing/membercard-open/cards/{card_id}/qrcode'],
            ['加密code解码(跳转型激活)', '/openapi/v3/marketing/membercard-open/cards/{card_id}/decrypt-code'],
            ['激活会员卡(跳转型激活)', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/activate'],
            ['获取用户信息(跳转型激活)', '/openapi/v3/marketing/membercard-open/activate-informations/{activate_ticket}'],
            ['查询用户会员卡信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}#get'],
            ['修改用户会员卡信息', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}#patch'],
            ['作废用户会员卡', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/unavailable'],
            ['设置会员权益', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/rights'],
            ['支付结果页展示会员积分', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/prepare'],
            ['设置支付后展示的积分到账', '/openapi/v3/marketing/membercard-open/cards/{card_id}/codes/{code}/bonus/commit'],
          ].map(transArrayItem).concat({
            text: '会员有礼',
            collapsed: true,
            items: [
              ['创建活动', '/openapi/v3/marketing/membercard-activity/activities#post'],
              ['查询活动列表', '/openapi/v3/marketing/membercard-activity/activities#get'],
              ['查询活动详情', '/openapi/v3/marketing/membercard-activity/activities/{activity_id}'],
              ['终止活动', '/openapi/v3/marketing/membercard-activity/activities/{activity_id}/terminate'],
            ].map(transArrayItem),
          }),
        },
        {
          text: '运营工具',
          collapsed: true,
          items: [
            transArrayItem(['图片文件上传', '/openapi/v3/marketing/favor/media/image-upload']),
            {
              text: '代金券',
              collapsed: true,
              items: [
                ['设置接收事件通知的URL', '/openapi/v3/marketing/favor/callbacks#post'],
                ['查询接收事件通知的URL', '/openapi/v3/marketing/favor/callbacks#get'],
                ['创建代金券批次', '/openapi/v3/marketing/favor/coupon-stocks'],
                ['条件查询批次列表', '/openapi/v3/marketing/favor/stocks'],
                ['查询批次详情', '/openapi/v3/marketing/favor/stocks/{stock_id}'],
                ['查询代金券可用单品', '/openapi/v3/marketing/favor/stocks/{stock_id}/items'],
                ['查询代金券可用商户', '/openapi/v3/marketing/favor/stocks/{stock_id}/merchants'],
                ['激活代金券批次', '/openapi/v3/marketing/favor/stocks/{stock_id}/start'],
                ['暂停代金券批次', '/openapi/v3/marketing/favor/stocks/{stock_id}/pause'],
                ['重启代金券批次', '/openapi/v3/marketing/favor/stocks/{stock_id}/restart'],
                ['发放代金券', '/openapi/v3/marketing/favor/users/{openid}/coupons#post'],
                ['根据商户号查用户的券', '/openapi/v3/marketing/favor/users/{openid}/coupons#get'],
                ['查询代金券详情', '/openapi/v3/marketing/favor/users/{openid}/coupons/{coupon_id}'],
                ['下载批次核销明细', '/openapi/v3/marketing/favor/stocks/{stock_id}/use-flow'],
                ['下载批次退款明细', '/openapi/v3/marketing/favor/stocks/{stock_id}/refund-flow'],
                ['获取核销明细下载链接', '/openapi/v3/marketing/favor/stocks/{stock_id}/use-flow-by-day'],
                ['获取退款明细下载链接', '/openapi/v3/marketing/favor/stocks/{stock_id}/refund-flow-by-day'],
              ].map(transArrayItem),
            },
            {
              text: '消费金',
              collapsed: true,
              items: [
                ['发放指定批次', '/openapi/v3/multiuse/users/{openid}/coupons'],
                ['下载批次核销明细', '/openapi/v3/multiuse/stocks/{stock_id}/use-flow'],
                ['下载批次发放明细', '/openapi/v3/multiuse/stocks/{stock_id}/send-flow'],
                ['下载批次退款明细', '/openapi/v3/multiuse/stocks/{stock_id}/refund-flow'],
              ].map(transArrayItem),
            },
            {
              text: '商家券',
              collapsed: true,
              items: [
                ['设置接收事件通知的URL', '/openapi/v3/marketing/busifavor/callbacks#post'],
                ['查询接收事件通知的URL', '/openapi/v3/marketing/busifavor/callbacks#get'],
                ['上传预存code', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes#post'],
                ['查询预存code列表', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes#get'],
                ['查询预存code详情', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}#get'],
                ['删除预存code', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}#delete'],
                ['创建商家券', '/openapi/v3/marketing/busifavor/stocks'],
                ['查询商家券详情', '/openapi/v3/marketing/busifavor/stocks/{stock_id}#get'],
                ['修改商家券基本信息', '/openapi/v3/marketing/busifavor/stocks/{stock_id}#patch'],
                ['修改批次预算', '/openapi/v3/marketing/busifavor/stocks/{stock_id}/budget'],
                ['向用户发券', '/openapi/v3/marketing/busifavor/coupons/send'],
                ['向用户发商品券', '/openapi/v3/marketing/busifavor/product-coupons/send'],
                ['使券失效', '/openapi/v3/marketing/busifavor/coupons/deactivate'],
                ['申请退券', '/openapi/v3/marketing/busifavor/coupons/return'],
                ['关联订单信息', '/openapi/v3/marketing/busifavor/coupons/associate'],
                ['取消关联订单信息', '/openapi/v3/marketing/busifavor/coupons/disassociate'],
                ['根据过滤条件查询用户券', '/openapi/v3/marketing/busifavor/users/{openid}/coupons'],
                ['查询用户单张券详情', '/openapi/v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}'],
                ['核销用户券', '/openapi/v3/marketing/busifavor/coupons/use'],
                ['发放消费卡', '/openapi/v3/marketing/busifavor/coupons/{card_id}/send'],
                ['营销补差付款', '/openapi/v3/marketing/busifavor/subsidy/pay-receipts#post'],
                ['查询营销补差付款单列表', '/openapi/v3/marketing/busifavor/subsidy/pay-receipts#get'],
                ['查询营销补差付款单详情', '/openapi/v3/marketing/busifavor/subsidy/pay-receipts/{subsidy_receipt_id}'],
                ['营销补差回退', '/openapi/v3/marketing/busifavor/subsidy/return-receipts'],
                ['查询营销补差回退单详情', '/openapi/v3/marketing/busifavor/subsidy/return-receipts/{subsidy_return_receipt_id}'],
              ].map(transArrayItem),
            },
            {
              text: '商品券',
              collapsed: true,
              items: [
                ['管理商品券事件通知地址', '/openapi/v3/marketing/partner/product-coupon/notify-configs'],
                ['图片上传', '/openapi/v3/marketing/partner/product-coupon/media/upload-image'],
                ['创建商品券', '/openapi/v3/marketing/partner/product-coupon/product-coupons'],
                ['修改商品券', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}#patch'],
                ['查询商品券', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}#get'],
                ['失效商品券', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/deactivate'],
                ['添加商品券批次', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks#post'],
                ['查询商品券批次列表', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks#get'],
                ['修改商品券指定批次', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}#patch'],
                ['查询商品券指定批次', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}#get'],
                ['修改商品券批次发放预算', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/update-budget'],
                ['失效商品券批次', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/deactivate'],
                ['预上传券Code', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/upload-coupon-codes'],
                ['批次关联门店', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associate-stores'],
                ['查询批次关联门店列表', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/associated-stores'],
                ['批次取消关联门店', '/openapi/v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}/disassociate-stores'],
                ['向用户发放商品券', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons#post'],
                ['按券状态查询用户商品券', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons#get'],
                ['查询用户商品券详情', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}'],
                ['确认发放用户商品券', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/confirm'],
                ['核销用户商品券', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/use'],
                ['失效用户商品券', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/deactivate'],
                ['退券', '/openapi/v3/marketing/partner/product-coupon/users/{openid}/coupons/{coupon_code}/return'],
              ].map(transArrayItem),
            },
            {
              text: '银行立减',
              collapsed: true,
              items: [
                ['给用户报名多笔立减活动', '/openapi/v3/marketing/bank-favor/users/{openid}/bank-multi-activity'],
                ['查询绑定的多笔立减券详情', '/openapi/v3/marketing/bank-favor/users/{openid}/coupons/{coupon_id}'],
              ].map(transArrayItem),
            },
            {
              text: '委托营销',
              collapsed: true,
              items: [
                ['查询合作关系列表', '/openapi/v3/marketing/partnerships'],
                ['建立合作关系', '/openapi/v3/marketing/partnerships/build'],
                ['终止合作关系', '/openapi/v3/marketing/partnerships/terminate'],
              ].map(transArrayItem),
            },
            {
              text: '支付有礼',
              collapsed: true,
              items: [
                ['获取活动列表', '/openapi/v3/marketing/paygiftactivity/activities'],
                ['查询活动详情', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}'],
                ['创建全场满额送活动', '/openapi/v3/marketing/paygiftactivity/unique-threshold-activity'],
                ['终止活动', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/terminate'],
                ['查询活动指定商品列表', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/goods'],
                ['查询活动发券商户号', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants'],
                ['新增活动发券商户号', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/add'],
                ['删除活动发券商户号', '/openapi/v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete'],
              ].map(transArrayItem),
            },
            {
              text: '支付即服务',
              collapsed: true,
              items: [
                ['服务人员注册', '/openapi/v3/smartguide/guides#post'],
                ['服务人员查询', '/openapi/v3/smartguide/guides#get'],
                ['服务人员信息更新', '/openapi/v3/smartguide/guides/{guide_id}'],
                ['服务人员分配', '/openapi/v3/smartguide/guides/{guide_id}/assign'],
              ].map(transArrayItem),
            },
            {
              text: '智慧商圈',
              collapsed: true,
              items: [
                ['会员积分服务授权状态查询', '/openapi/v3/businesscircle/user-authorizations/{openid}'],
                ['会员待积分状态查询', '/openapi/v3/businesscircle/users/{openid}/points/commit_status'],
                ['会员积分同步', '/openapi/v3/businesscircle/points/notify'],
                ['会员停车状态同步', '/openapi/v3/businesscircle/parkings'],
              ].map(transArrayItem),
            },
            {
              text: '品牌小店营销',
              collapsed: true,
              items: [
                ['按区域查询品牌加价购活动', '/openapi/v3/marketing/goods-subsidy-activity/activities'],
                ['门店报名品牌加价购活动', '/openapi/v3/marketing/goods-subsidy-activity/activity/{activity_id}/apply'],
                ['锁定品牌加价购活动资格', '/openapi/v3/marketing/goods-subsidy-activity/qualification/lock'],
                ['解锁品牌加价购活动资格', '/openapi/v3/marketing/goods-subsidy-activity/qualification/unlock'],
                ['查询小店活动门店列表', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#get'],
                ['添加小店活动门店', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#post'],
                ['删除小店活动门店', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores#delete'],
                ['查询小店活动门店详情', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores/{store_code}'],
                ['生成小店活动物料码', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/materials'],
                ['添加零售小店活动业务代理', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative#put'],
                ['删除零售小店活动业务代理', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative#delete'],
                ['查询零售小店活动业务代理', '/openapi/v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives'],
              ].map(transArrayItem),
            },
            {
              text: '电子小票',
              collapsed: true,
              items: [
                ['创建自定义入口', '/openapi/v3/marketing/shopping-receipt/customentrances'],
                ['查询自定义入口', '/openapi/v3/marketing/shopping-receipt/customentrances/{brand_id}#get'],
                ['更新自定义入口', '/openapi/v3/marketing/shopping-receipt/customentrances/{brand_id}#patch'],
                ['上传商家电子小票跳转信息', '/openapi/v3/marketing/shopping-receipt/merchantshoppingreceiptjumpinfos'],
                ['上传电子小票图片文件', '/openapi/v3/marketing/shopping-receipt/shoppingreceipts'],
              ].map(transArrayItem),
            },
            {
              text: '点金计划',
              collapsed: true,
              items: [
                ['点金计划管理', '/openapi/v3/goldplan/merchants/changegoldplanstatus'],
                ['商家小票管理', '/openapi/v3/goldplan/merchants/changecustompagestatus'],
                ['同业过滤标签管理', '/openapi/v3/goldplan/merchants/set-advertising-industry-filter'],
                ['开通广告展示', '/openapi/v3/goldplan/merchants/open-advertising-show'],
                ['关闭广告展示', '/openapi/v3/goldplan/merchants/close-advertising-show'],
              ].map(transArrayItem),
            },
            {
              text: '电子发票',
              collapsed: true,
              items: [
                ['检查子商户开票功能状态', '/openapi/v3/new-tax-control-fapiao/merchant/{sub_mchid}/check'],
                ['创建电子发票卡券模板', '/openapi/v3/new-tax-control-fapiao/card-template'],
                ['配置开发选项', '/openapi/v3/new-tax-control-fapiao/merchant/development-config#patch'],
                ['查询配置的开发选项', '/openapi/v3/new-tax-control-fapiao/merchant/development-config#get'],
                ['获取抬头填写链接', '/openapi/v3/new-tax-control-fapiao/user-title/title-url'],
                ['获取用户填写的抬头', '/openapi/v3/new-tax-control-fapiao/user-title'],
              ].map(transArrayItem).concat({
                text: '腾讯数电发票模式',
                collapsed: true,
                items: [
                  ['邀请子商户开通服务', '/openapi/v3/new-tax-control-fapiao/fapiaomerchant/getspinviteurl'],
                  ['获取开通的子商户信息', '/openapi/v3/new-tax-control-fapiao/fapiaomerchant/listspinvitemchinfo'],
                  ['检查子商户开票功能状态', '/openapi/v3/new-tax-control-fapiao/merchant/{sub_mchid}/check-status'],
                  ['开具通用行业票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/issue-general'],
                  ['开具不动产租赁行业票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/real-estate-leasing'],
                ].map(transArrayItem),
              }, {
                text: '区块链电子发票',
                collapsed: true,
                items: [
                  ['获取商户开票基础信息', '/openapi/v3/new-tax-control-fapiao/merchant/base-information'],
                  ['获取商品和服务税收分类对照表', '/openapi/v3/new-tax-control-fapiao/merchant/tax-codes'],
                  ['开具电子发票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications'],
                  ['冲红电子发票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/reverse'],
                  ['获取发票下载信息', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files'],
                  ['下载发票文件', '/openapi/v3/new-tax-control-fapiao/download'],
                ].map(transArrayItem),
              }, {
                text: '自建/三方模式',
                collapsed: true,
                items: [
                  ['上传电子发票文件', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file'],
                  ['将电子发票插入卡包', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/insert-cards'],
                ].map(transArrayItem),
              }, transArrayItem(
                ['查询电子发票', '/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}'],
              )),
            },
            {
              text: '出租车电子发票',
              collapsed: true,
              items: [
                ['新增出租车公司', '/openapi/v3/taxi-invoice/taxi-company/create-taxi-company'],
                ['获取出租车公司商户信息', '/openapi/v3/taxi-invoice/taxi-companies/{company_mchid}'],
                ['更新出租车信息', '/openapi/v3/taxi-invoice/taxi/update-taxi'],
                ['获取出租车信息', '/openapi/v3/taxi-invoice/taxies/{plate_number}'],
                ['更新司机信息', '/openapi/v3/taxi-invoice/driver/update-driver'],
                ['获取司机信息', '/openapi/v3/taxi-invoice/drivers/{driver_license}'],
                ['司机签到签退', '/openapi/v3/taxi-invoice/attendance/punch'],
                ['获取乘客行程单列表', '/openapi/v3/taxi-invoice/user-taxi-orders'],
                ['根据凭证查询乘客行程单', '/openapi/v3/taxi-invoice/user-taxi-order/find-by-token'],
                ['上传出租车电子发票文件', '/openapi/v3/taxi-invoice/cards/upload-file'],
                ['将出租车电子发票插入卡包', '/openapi/v3/taxi-invoice/cards'],
              ].map(transArrayItem),
            },
            {
              text: '平台保证金',
              collapsed: true,
              items: [
                ['请求售后赔付给用户', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-after-sales-compensation-bills'],
                ['查询赔付用户结果(商户单)', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-after-sales-compensation-bills/out-bill-no/{out_bill_no}'],
                ['查询赔付用户结果(微信单)', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-after-sales-compensation-bills/bill-id/{bill_id}'],
                ['请求赔付给商户', '/openapi/v3/platsolution/ecommerce/mch-transfer/transfer-bills'],
                ['查询赔付商户结果(商户单)', '/openapi/v3/platsolution/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}'],
                ['查询赔付商户结果(微信单)', '/openapi/v3/platsolution/ecommerce/mch-transfer/transfer-bills/bill-id/{bill_id}'],
                ['请求赔付用户运费', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills'],
                ['查询赔付运费结果', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-shipping-cost-compensation-bills/out-bill-no/{out_bill_no}'],
                ['发起赔付保司保费', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-insurance-premiums-compensation-bills'],
                ['查询赔付保费结果', '/openapi/v3/platsolution/ecommerce/mch-transfer/deposit-insurance-premiums-compensation-bills/{out_bill_no}'],
              ].map(transArrayItem),
            },
            {
              text: '企业支付',
              collapsed: true,
              items: [
                ['发起员工开通企业支付授权', '/openapi/v3/webizpay/users/{user_id}/authorization-url'],
                ['查询企业员工开通授权状态', '/openapi/v3/webizpay/users/{user_id}/authorization-state'],
                ['下发企业支付额度卡', '/openapi/v3/webizpay/employees/{employee_id}/quota-cards'],
                ['使用商户卡号查询额度卡', '/openapi/v3/webizpay/employees/{employee_id}/out-quota-cards/{out_card_no}'],
                ['查询企业支付额度卡信息', '/openapi/v3/webizpay/employees/{employee_id}/quota-cards/{card_no}'],
                ['作废员工企业支付额度卡', '/openapi/v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/cancel'],
                ['获取指定额度卡支付链接', '/openapi/v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/payment-url'],
                ['发起解除员工企业支付授权', '/openapi/v3/webizpay/employees/{employee_id}/revoke'],
                ['发起门店主体匹配', '/openapi/v3/webizpay/stores/entity-matches'],
                ['查询门店主体匹配结果', '/openapi/v3/webizpay/stores/entity-matches/{batch_id}'],
                ['申请企业支付出资凭证', '/openapi/v3/webizpay/bill/proof'],
                ['申请企业支付业务账单', '/openapi/v3/webizpay/bill/trade-bill'],
              ].map(transArrayItem),
            },
            {
              text: '公益捐赠',
              collapsed: true,
              items: [
                ['申请公益捐赠预算', '/openapi/v3/fund-app/mch-transfer/partner/charity-budget'],
                ['查询公益捐赠预算详情', '/openapi/v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}'],
                ['解锁公益捐赠预算', '/openapi/v3/fund-app/mch-transfer/partner/charity-budget/{out_budget_no}/unlock'],
                ['发起公益捐赠付款', '/openapi/v3/fund-app/mch-transfer/partner/charity-transfer-bills'],
                ['查询公益捐赠付款详情', '/openapi/v3/fund-app/mch-transfer/partner/charity-transfer-bills/out-transfer-no/{out_transfer_no}'],
                ['申请出资预算的电子回单', '/openapi/v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts#post'],
                ['查询出资预算的电子回单', '/openapi/v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts#get'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '微工卡',
          collapsed: true,
          items: [
            ['生成用户授权token', '/openapi/v3/payroll-card/tokens'],
            ['查询授权关系', '/openapi/v3/payroll-card/relations/{openid}'],
            ['核身预下单', '/openapi/v3/payroll-card/authentications/pre-order'],
            ['核身预下单(流程中完成授权)', '/openapi/v3/payroll-card/authentications/pre-order-with-auth'],
            ['获取核身结果', '/openapi/v3/payroll-card/authentications/{authenticate_number}'],
            ['查询核身记录', '/openapi/v3/payroll-card/authentications'],
            ['校验核身结果', '/openapi/v3/payroll-card/wesure/token-validations'],
            ['生成投保结果', '/openapi/v3/payroll-card/wesure/insurance'],
            ['发起批量转账', '/openapi/v3/payroll-card/transfer-batches'],
          ].map(transArrayItem),
        },
        {
          text: '商家充值',
          collapsed: true,
          items: [
            ['申请银行转账充值', '/openapi/v3/recharge/bank-transfer-recharges/apply'],
            ['查询银行转账充值结果', '/openapi/v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}'],
          ].map(transArrayItem),
        },
        {
          text: '商家转账',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['发起商家转账', '/openapi/v3/transfer/batches'],
                ['查询批次单(平台批次单号)', '/openapi/v3/transfer/batches/batch-id/{batch_id}'],
                ['查询批次单(商家批次单号)', '/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}'],
                ['查询明细单(平台批次单号)', '/openapi/v3/transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
                ['查询明细单(商家批次单号)', '/openapi/v3/transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['发起商家转账', '/openapi/v3/partner-transfer/batches'],
                ['查询批次单(平台批次单号)', '/openapi/v3/partner-transfer/batches/batch-id/{batch_id}'],
                ['查询批次单(商家批次单号)', '/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}'],
                ['查询明细单(平台批次单号)', '/openapi/v3/partner-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
                ['查询明细单(商家批次单号)', '/openapi/v3/partner-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
              ].map(transArrayItem),
            },
            ...[
              ['申请转账账单电子回单', '/openapi/v3/transfer/bill-receipt'],
              ['查询账单回单受理结果', '/openapi/v3/transfer/bill-receipt/{out_batch_no}'],
              ['申请转账明细电子回单', '/openapi/v3/transfer-detail/electronic-receipts#post'],
              ['查询明细回单受理结果', '/openapi/v3/transfer-detail/electronic-receipts#get'],
              ['下载电子回单文件', '/openapi/v3/transferdownload/signfile'],
            ].map(transArrayItem),
            {
              text: '预约转账',
              collapsed: true,
              items: [
                ['受理商家转账', '/openapi/v3/platsolution/mch-transfer/batches/apply'],
                ['受理单次预约商家转账', '/openapi/v3/platsolution/mch-transfer/reservation/apply'],
                ['关闭预约商家转账记录', '/openapi/v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}/close'],
                ['平台预约单号查询转账记录', '/openapi/v3/platsolution/mch-transfer/reservation/reservation-id/{reservation_id}'],
                ['商户预约单号查询转账记录', '/openapi/v3/platsolution/mch-transfer/reservation/out-reservation-no/{out_reservation_no}'],
                ['商户明细单号查询明细单', '/openapi/v3/platsolution/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
                ['商户批次单号查询批次单', '/openapi/v3/platsolution/mch-transfer/batches/out-batch-no/{out_batch_no}'],
                ['申请商家转账批次电子回单', '/openapi/v3/platsolution/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}/apply'],
                ['查询商家转账批次电子回单', '/openapi/v3/platsolution/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}'],
                ['平台批次单号查询批次单', '/openapi/v3/platsolution/mch-transfer/batches/batch-id/{batch_id}'],
                ['申请商家转账明细电子回单', '/openapi/v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply'],
                ['查询商家转账明细电子回单', '/openapi/v3/platsolution/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}'],
                ['平台明细单号查询明细单', '/openapi/v3/platsolution/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
              ].map(transArrayItem),
            },
            {
              text: '(直连商户)用户确认模式',
              collapsed: true,
              items: [
                ['发起转账', '/openapi/v3/fund-app/mch-transfer/transfer-bills'],
                ['撤销转账', '/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel'],
                ['微信转账单号查询转账单', '/openapi/v3/fund-app/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}'],
                ['商户单号查询转账单', '/openapi/v3/fund-app/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}'],
                ['微信单号申请电子回单', '/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no'],
                ['商户单号申请电子回单', '/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no'],
                ['微信单号查询电子回单', '/openapi/v3/fund-app/mch-transfer/elecsign/transfer-bill-no/{transfer_bill_no}'],
                ['商户单号查询电子回单', '/openapi/v3/fund-app/mch-transfer/elecsign/out-bill-no/{out_bill_no}'],
                ['下载电子回单文件', '/openapi/v3/transferdownload/elecvoucherfile'],
              ].map(transArrayItem),
            },
            {
              text: '(合作伙伴)用户确认模式',
              collapsed: true,
              items: [
                ['申请子商户商家转账授权', '/openapi/v3/fund-app/mch-transfer/partner/sub-mch-authorizations'],
                ['查询子商户商转授权状态', '/openapi/v3/fund-app/mch-transfer/partner/sub-mch-authorizations/{sub_mchid}'],
                ['发起转账', '/openapi/v3/fund-app/mch-transfer/partner/transfer-bills'],
                ['撤销转账', '/openapi/v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}/cancel'],
                ['商户单号查询转账单', '/openapi/v3/fund-app/mch-transfer/partner/transfer-bills/out-bill-no/{out_bill_no}'],
              ].map(transArrayItem),
            },
            {
              text: '用户授权自动收款',
              collapsed: true,
              items: [
                ['发起转账并完成自动收授权', '/openapi/v3/fund-app/mch-transfer/transfer-bills/pre-transfer-with-authorization'],
                ['转账(用户自动收款)', '/openapi/v3/fund-app/mch-transfer/transfer-bills/transfer'],
                ['申请免确认收款授权', '/openapi/v3/fund-app/mch-transfer/user-confirm-authorization'],
                ['商户单号查询自动收款授权', '/openapi/v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}'],
                ['解除免确认收款授权', '/openapi/v3/fund-app/mch-transfer/user-confirm-authorization/out-authorization-no/{out_authorization_no}/close'],
              ].map(transArrayItem),
            },
            {
              text: '互联QQ钱包',
              collapsed: true,
              items: [
                ['发起转账到QQ钱包', '/openapi/v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills'],
                ['撤销转账到QQ钱包', '/openapi/v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}/cancel'],
                ['查询转账到QQ钱包的结果', '/openapi/v3/fund-app/mch-transfer/transfer-to-qq-wallet-bills/{out_bill_no}'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '平台收付通',
          collapsed: true,
          items: [
            {
              text: '进件',
              collapsed: true,
              items: [
                ['申请进件', '/openapi/v3/ecommerce/applyments/'],
                ['提交进件申请单(全托模式)', '/openapi/v3/ecommerce/applyments/submit-account-hosting-applyment'],
                ['平台代理签约核身', '/openapi/v3/ecommerce/applyments/submit-sign-verify-info'],
                ['查询状态(平台申请单号)', '/openapi/v3/ecommerce/applyments/{applyment_id}'],
                ['查询状态(业务申请编号)', '/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no}'],
                ['撤销申请单(平台申请单号)', '/openapi/v3/ecommerce/applyments/{applyment_id}/revoke'],
                ['撤销申请单(业务申请编号)', '/openapi/v3/ecommerce/applyments/out-request-no/{out_request_no}/revoke'],
              ].map(transArrayItem),
            },
            {
              text: '补差',
              collapsed: true,
              items: [
                ['请求补差', '/openapi/v3/ecommerce/subsidies/create'],
                ['取消补差', '/openapi/v3/ecommerce/subsidies/cancel'],
                ['请求补差回退', '/openapi/v3/ecommerce/subsidies/return'],
              ].map(transArrayItem),
            },
            {
              text: '分账',
              collapsed: true,
              items: [
                ['添加分账接收方', '/openapi/v3/ecommerce/profitsharing/receivers/add'],
                ['删除分账接收方', '/openapi/v3/ecommerce/profitsharing/receivers/delete'],
                ['请求分账', '/openapi/v3/ecommerce/profitsharing/orders#post'],
                ['查询分账结果', '/openapi/v3/ecommerce/profitsharing/orders#get'],
                ['查询剩余待分金额', '/openapi/v3/ecommerce/profitsharing/orders/{transaction_id}/amounts'],
                ['完结分账', '/openapi/v3/ecommerce/profitsharing/finish-order'],
                ['请求分账回退', '/openapi/v3/ecommerce/profitsharing/returnorders#post'],
                ['查询分账回退结果', '/openapi/v3/ecommerce/profitsharing/returnorders#get'],
                ['请求售后服务分账', '/openapi/v3/ecommerce/profitsharing/after-sales-orders#post'],
                ['查询售后服务分账结果', '/openapi/v3/ecommerce/profitsharing/after-sales-orders#get'],
              ].map(transArrayItem),
            },
            {
              text: '退款',
              collapsed: true,
              items: [
                ['发起退款申请', '/openapi/v3/ecommerce/refunds/apply'],
                ['查询退款(商户退款单号)', '/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no}'],
                ['查询退款(平台退款单号)', '/openapi/v3/ecommerce/refunds/id/{refund_id}'],
                ['发起异常退款', '/openapi/v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund'],
                ['垫付退款回补', '/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#post'],
                ['查询退款回补结果', '/openapi/v3/ecommerce/refunds/{refund_id}/return-advance#get'],
              ].map(transArrayItem),
            },
            {
              text: '销户',
              collapsed: true,
              items: [
                ['注销申请图片上传', '/openapi/v3/ecommerce/account/cancel-applications/media'],
                ['提交注销申请单', '/openapi/v3/ecommerce/account/cancel-applications'],
                ['查询注销单状态', '/openapi/v3/ecommerce/account/cancel-applications/out-apply-no/{out_apply_no}'],
                ['提交注销提现申请', '/openapi/v3/ecommerce/account/apply-cancel-withdraw'],
                ['查询销提单状态(商户单号)', '/openapi/v3/ecommerce/account/apply-cancel-withdraw/out-request-no/{out_request_no}'],
                ['查询销提单状态(微信单号)', '/openapi/v3/ecommerce/account/apply-cancel-withdraw/applyment-id/{applyment_id}'],
                ['平台代商户确认注销', '/openapi/v3/ecommerce/account/apply-cancel-withdraw/confirm'],
                ['申请销户号余额提现', '/openapi/v3/mch_operate/risk/withdrawl-apply'],
                ['查询提现状态(商户单号)', '/openapi/v3/mch_operate/risk/withdrawl-apply/out-request-no/{out_request_no}'],
                ['查询提现状态(平台单号)', '/openapi/v3/mch_operate/risk/withdrawl-apply/applyment-id/{applyment_id}'],
              ].map(transArrayItem),
            },
            {
              text: '二级商户充值',
              collapsed: true,
              items: [
                ['申请充值', '/openapi/v3/platsolution/ecommerce/recharges/apply'],
                ['查询充值结果', '/openapi/v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}'],
                ['关闭充值', '/openapi/v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close'],
                ['申请银行转账充值', '/openapi/v3/platsolution/ecommerce/bank-transfer-recharges/apply'],
                ['查询银行转账充值结果', '/openapi/v3/platsolution/ecommerce/bank-transfer-recharges/out-recharge-no/{out_recharge_no}'],
                ['添加可扫码充值员工', '/openapi/v3/platsolution/ecommerce/recharge-employees'],
                ['删除可扫码充值员工', '/openapi/v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}/sp-openid/{sp_openid}/delete'],
                ['查询可扫码充值员工列表', '/openapi/v3/platsolution/ecommerce/recharge-employees/sub-mchid/{sub_mchid}'],
              ].map(transArrayItem),
            },
            {
              text: '二级商户提现',
              collapsed: true,
              items: [
                ['预约提现', '/openapi/v3/ecommerce/fund/withdraw'],
                ['查询提现结果(商户单号)', '/openapi/v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}'],
                ['查询提现结果(平台单号)', '/openapi/v3/ecommerce/fund/withdraw/{withdraw_id}'],
                ['查询账户实时余额', '/openapi/v3/ecommerce/fund/balance/{sub_mchid}'],
                ['查询账户日终余额', '/openapi/v3/ecommerce/fund/enddaybalance/{sub_mchid}'],
                ['申请资金账单', '/openapi/v3/ecommerce/bill/fundflowbill'],
              ].map(transArrayItem),
            },
            {
              text: '跨境付款',
              collapsed: true,
              items: [
                ['查询订单剩余可出境余额', '/openapi/v3/funds-to-oversea/transactions/{transaction_id}/available_abroad_amounts'],
                ['申请资金出境', '/openapi/v3/funds-to-oversea/orders'],
                ['查询出境结果', '/openapi/v3/funds-to-oversea/orders/{out_order_id}'],
                ['获取购付汇账单', '/openapi/v3/funds-to-oversea/bill-download-url'],
                ['申请资金出境退回', '/openapi/v3/funds-to-oversea/return/return-orders'],
                ['查询出境退回结果', '/openapi/v3/funds-to-oversea/return/return-orders/out-return-no/{out_return_no}'],
              ].map(transArrayItem),
            },
            {
              text: '免密支付',
              collapsed: true,
              items: [
                ['小程序预签约', '/openapi/v3/password-exempt-contract/contracts/ecommerce/pre-entrust-sign/mini-program'],
                ['支付后预签约', '/openapi/v3/password-exempt-contract/contracts/ecommerce/pre-entrust-sign/pay-redirect-sign'],
              ].map(transArrayItem),
            },
            {
              text: '合单代扣',
              collapsed: true,
              items: [
                ['APP预签约', '/openapi/v3/ecommerce/combine-papay/contracts/pre-entrust-sign'],
                ['小程序预签约', '/openapi/v3/ecommerce/combine-papay/contracts/pre-entrust-sign/mini-program'],
                ['查询协议', '/openapi/v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解约协议', '/openapi/v3/ecommerce/combine-papay/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['撤销订单', '/openapi/v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse'],
                ['查询订单', '/openapi/v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}'],
                ['免密支付', '/openapi/v3/ecommerce/combine-papay/transactions'],
              ].map(transArrayItem),
            },
            {
              text: '还款支付',
              collapsed: true,
              items: [
                ['还款下单', '/openapi/v3/repayment/combine-transactions/partner/prepay'],
                ['还款单查询', '/openapi/v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}'],
                ['商户关单', '/openapi/v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}/close'],
              ].map(transArrayItem),
            },
            {
              text: '商家转账',
              collapsed: true,
              items: [
                {
                  text: '二级商户授权',
                  collapsed: true,
                  items: [
                    ['申请授权', '/openapi/v3/ecommerce/mch-transfer/authorizations'],
                    ['查询授权状态', '/openapi/v3/ecommerce/mch-transfer/authorizations/{sub_mchid}'],
                  ].map(transArrayItem),
                },
                {
                  text: '即时(需用户确认)模式',
                  collapsed: true,
                  items: [
                    ['发起转账', '/openapi/v3/ecommerce/mch-transfer/transfer-bills'],
                    ['撤销转账', '/openapi/v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}/cancel'],
                    ['平台单号查询转账单', '/openapi/v3/ecommerce/mch-transfer/transfer-bills/transfer-bill-no/{transfer_bill_no}'],
                    ['商户单号查询转账单', '/openapi/v3/ecommerce/mch-transfer/transfer-bills/out-bill-no/{out_bill_no}'],
                  ].map(transArrayItem),
                },
                {
                  text: '预约模式',
                  collapsed: true,
                  items: [
                    ['受理单次预约', '/openapi/v3/platsolution/insurance/mch-transfer/reservation/apply'],
                    ['关闭单次预约', '/openapi/v3/platsolution/insurance/mch-transfer/reservation/out-reservation-no/{out_reservation_no}/close'],
                    ['平台单号查询预约记录', '/openapi/v3/platsolution/insurance/mch-transfer/reservation/reservation-id/{reservation_id}'],
                    ['商户单号查询预约记录', '/openapi/v3/platsolution/insurance/mch-transfer/reservation/out-reservation-no/{out_reservation_no}'],
                    ['受理商家转账', '/openapi/v3/platsolution/insurance/mch-transfer/batches/apply'],
                    ['平台批次单号查询批次单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/batch-id/{batch_id}'],
                    ['商户批次单号查询批次单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}'],
                    ['平台明细单号查询明细单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
                    ['商户明细单号查询明细单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
                  ].map(transArrayItem),
                },
                {
                  text: '电子回单',
                  collapsed: true,
                  items: [
                    ['申请商家转账批次回单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}/apply'],
                    ['查询商家转账批次回单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/summary-receipts/out-batch-no/{out_batch_no}'],
                    ['申请商家转账明细回单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}/apply'],
                    ['查询商家转账明细回单', '/openapi/v3/platsolution/insurance/mch-transfer/batches/detail-receipts/out-batch-no/{out_batch_no}/out-detail-no/{out_detail_no}'],
                  ].map(transArrayItem),
                },
              ],
            },
            {
              text: '售后赔付',
              collapsed: true,
              items: [
                ['请求赔付', '/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills'],
                ['请求赔付预下单', '/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/pre-transfer'],
                ['请求撤销赔付', '/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/out-bill-no/{out_bill_no}/cancel'],
                ['按商户单号查询赔付结果', '/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/out-bill-no/{out_bill_no}'],
                ['按微信单号查询赔付结果', '/openapi/v3/platsolution/ecommerce/mch-transfer/compensate-bills/bill-id/{bill_id}'],
              ].map(transArrayItem),
            },
            {
              text: '保险理赔',
              collapsed: true,
              items: [
                ['请求保险理赔', '/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills'],
                ['请求保险理赔预下单', '/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/pre-transfer'],
                ['请求撤销保险理赔', '/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}/cancel'],
                ['按商户单号查询理赔结果', '/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/out-bill-no/{out_bill_no}'],
                ['按微信单号查询理赔结果', '/openapi/v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/bill-id/{bill_id}'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '商户提现',
          collapsed: true,
          items: [
            ['预约提现', '/openapi/v3/merchant/fund/withdraw'],
            ['查询预约提现状态(商户单号)', '/openapi/v3/merchant/fund/withdraw/out-request-no/{out_request_no}'],
            ['查询预约提现状态(平台单号)', '/openapi/v3/merchant/fund/withdraw/withdraw-id/{withdraw_id}'],
            ['查询账户实时余额', '/openapi/v3/merchant/fund/balance/{account_type}'],
            ['查询账户日终余额', '/openapi/v3/merchant/fund/dayendbalance/{account_type}'],
            ['按日下载提现异常文件', '/openapi/v3/merchant/fund/withdraw/bill-type/{bill_type}'],
          ].map(transArrayItem),
        },
        {
          text: '来账识别',
          collapsed: true,
          items: [
            ['合作伙伴银行来账查询', '/openapi/v3/merchantfund/merchant/income-records'],
            ['二级商户银行来账查询', '/openapi/v3/merchantfund/partner/income-records'],
          ].map(transArrayItem),
        },
        {
          text: '商户管理',
          collapsed: true,
          items: [
            {
              text: '商户进件',
              collapsed: true,
              items: [
                ['提交进件申请单', '/openapi/v3/applyment4sub/applyment/'],
                ['查询进件状态(申请单号)', '/openapi/v3/applyment4sub/applyment/applyment_id/{applyment_id}'],
                ['查询进件状态(业务单号)', '/openapi/v3/applyment4sub/applyment/business_code/{business_code}'],
              ].map(transArrayItem),
            },
            {
              text: '特约商户结算账户',
              collapsed: true,
              items: [
                ['查询结算账户', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/settlement'],
                ['修改结算账户', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/modify-settlement'],
                ['查询结算账户修改状态', '/openapi/v3/apply4sub/sub_merchants/{sub_mchid}/application/{application_no}'],
              ].map(transArrayItem),
            },
            {
              text: '确认商户开户意愿',
              collapsed: true,
              items: [
                ['查询商户确认状态', '/openapi/v3/apply4subject/applyment/merchants/{sub_mchid}/state'],
                ['提交商户申请单', '/openapi/v3/apply4subject/applyment#post'],
                ['查询申请单审核结果', '/openapi/v3/apply4subject/applyment#get'],
                ['撤销申请单(申请单编号)', '/openapi/v3/apply4subject/applyment/{applyment_id}/cancel'],
                ['撤销申请单(业务申请编号)', '/openapi/v3/apply4subject/applyment/{business_code}/cancel'],
              ].map(transArrayItem),
            },
            {
              text: '不活跃商户身份核实',
              collapsed: true,
              items: [
                ['发起不活跃商户身份核实', '/openapi/v3/compliance/inactive-merchant-identity-verification/merchants'],
                ['查询商户身份核实结果', '/openapi/v3/compliance/inactive-merchant-identity-verification/merchants/{sub_mchid}/verifications/{verification_id}'],
              ].map(transArrayItem),
            },
            ...[
              ['商户图片文件上传', '/openapi/v3/merchant/media/upload'],
              ['商户视频文件上传', '/openapi/v3/merchant/media/video_upload'],
            ].map(transArrayItem),
            {
              text: '商户资料变更',
              collapsed: true,
              items: [
                ['提交资料变更申请单', '/openapi/v3/mchalterapply/mchsubjectalterapplyment'],
                ['查询申请单状态(申请单号)', '/openapi/v3/mchalterapply/mchsubjectalterapplyment/{apply_id}'],
                ['查询申请单状态(业务单号)', '/openapi/v3/mchalterapply/mchsubjectalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}'],
                ['撤销资料变更申请单', '/openapi/v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke'],
              ].map(transArrayItem),
            },
            {
              text: '商户超管变更',
              collapsed: true,
              items: [
                ['提交超管变更申请单', '/openapi/v3/mchalterapply/mchcontactalterapplyment'],
                ['查询申请单状态(申请单号)', '/openapi/v3/mchalterapply/mchcontactalterapplyment/{apply_id}'],
                ['查询申请单状态(业务单号)', '/openapi/v3/mchalterapply/mchcontactalterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}'],
                ['撤销超管变更申请单', '/openapi/v3/mchalterapply/mchcontactalterapplyment/{apply_id}/revoke'],
              ].map(transArrayItem),
            },
            {
              text: '商户简称变更',
              collapsed: true,
              items: [
                ['提交商户简称变更申请单', '/openapi/v3/mchalterapply/merchantnamealterapplyment'],
                ['查询申请单状态(申请单号)', '/openapi/v3/mchalterapply/merchantnamealterapplyment/{apply_id}'],
                ['查询申请单状态(业务单号)', '/openapi/v3/mchalterapply/merchantnamealterapplyment/merchant/{merchant_code}/out-request-no/{out_request_no}'],
                ['撤销商户简称变更申请单', '/openapi/v3/mchalterapply/merchantnamealterapplyment/{apply_id}/revoke'],
              ].map(transArrayItem),
            },
            {
              text: '商户风险管理',
              collapsed: true,
              items: [
                ['维护接收违规通知的URL', '/openapi/v3/merchant-risk-manage/violation-notifications'],
                ['上报订单关联信息', '/openapi/v3/merchant-risk-manage/report-trade-union-information'],
                ['查询风险信息', '/openapi/v3/merchant-risk-manage/trade-risk-information'],
                ['处置结果回传', '/openapi/v3/merchant-risk-manage/trade-risk-result'],
                ['查询子商户管控情况', '/openapi/v3/mch-operation-manage/merchant-limitations/sub-mchid/{sub_mchid}'],
                ['查询风险订单', '/openapi/v3/merchant-risk-manage/ec-trade-risk/query-risk-trades'],
                ['回传处置结果', '/openapi/v3/merchant-risk-manage/ec-trade-risk/recv-dispose-result'],
              ].map(transArrayItem),
            },
            {
              text: '商户尽职调查',
              collapsed: true,
              items: [
                ['提交尽调资料','/openapi/v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/submit'],
                ['上传尽调资料文件','/openapi/v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/upload'],
                ['查询子商户强化尽调单信息','/openapi/v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}'],
              ].map(transArrayItem),
            },
            {
              text: '商户管理记录',
              collapsed: true,
              items: [
                ['列表查询子商户被管控记录', '/openapi/v3/mch-manage/mch-manage-records/sub-mchid/{sub_mchid}'],
                ['查询子商户被管控记录详情', '/openapi/v3/mch-manage/mch-manage-records/{manage_record_id}'],
                ['上传商户提交资料文件', '/openapi/v3/mch-manage/submission-files/sub-mchid/{sub_mchid}/upload'],
                ['对指定被管控记录提交资料', '/openapi/v3/mch-manage/mch-manage-records/{manage_record_id}/mch-manage-submissions'],
                ['查询交易拦截记录列表', '/openapi/v3/transaction-block/transaction-block-records/sub-mchid/{sub_mchid}'],
                ['查询交易拦截记录详情', '/openapi/v3/transaction-block/transaction-block-records/{block_record_id}'],
                ['发起交易拦截申诉', '/openapi/v3/transaction-block/transaction-block-submissions/sub-mchid/{sub_mchid}'],
                ['查询交易拦截申诉详情', '/openapi/v3/transaction-block/transaction-block-submissions/{block_submission_id}'],
              ].map(transArrayItem),
            },
            ...[
              ['查询省份列表', '/openapi/v3/capital/capitallhh/areas/provinces'],
              ['查询城市列表', '/openapi/v3/capital/capitallhh/areas/provinces/{province_code}/cities'],
              ['查询支行列表', '/openapi/v3/capital/capitallhh/banks/{bank_alias_code}/branches'],
              ['查询支持对公业务的银行列表', '/openapi/v3/capital/capitallhh/banks/corporate-banking'],
              ['查询支持个人业务的银行列表', '/openapi/v3/capital/capitallhh/banks/personal-banking'],
              ['获取对私银行卡号开户银行', '/openapi/v3/capital/capitallhh/banks/search-banks-by-bank-account'],
            ].map(transArrayItem),
          ],
        },
        {
          text: '消费者投诉',
          collapsed: true,
          items: [
            transArrayItem(
              [' 维护接收投诉通知的URL', '/openapi/v3/merchant-service/complaint-notifications']
            ),
            {
              text: ' 2.0',
              collapsed: true,
              items: [
                ['查询投诉单列表', '/openapi/v3/merchant-service/complaints-v2'],
                ['查询投诉单详情', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}'],
                ['查询投诉单协商历史', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/negotiation-historys'],
                ['回复用户', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/response'],
                ['反馈处理完成', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/complete'],
                ['更新退款审批结果', '/openapi/v3/merchant-service/complaints-v2/{complaint_id}/update-refund-progress'],
              ].map(transArrayItem),
            },
            {
              text: ' 1.0',
              collapsed: true,
              items: [
                ['查询投诉信息列表', '/openapi/v3/merchant-service/complaints'],
                ['查询投诉信息详情', '/openapi/v3/merchant-service/complaints/{transaction_id}'],
                ['查询投诉单协商历史', '/openapi/v3/merchant-service/complaints/{transaction_id}/negotiation-historys'],
                ['商户反馈', '/openapi/v3/merchant-service/feedbacks'],
              ].map(transArrayItem),
            },
            ...[
              ['上传商户反馈图片文件', '/openapi/v3/merchant-service/images/upload'],
              ['投诉单详情图片文件下载', '/openapi/v3/merchant-service/images/{media_id}'],
            ].map(transArrayItem),
          ],
        },
        {
          text: '委托代扣',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ['JSAPI场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/jsapi'],
                ['App场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app'],
                ['H5场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/h5'],
                ['小程序场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/mini-program'],
                ['查询签约协议', '/openapi/v3/papay/sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解除签约协议', '/openapi/v3/papay/sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['预约扣费', '/openapi/v3/papay/pay/schedules/contract-id/{contract_id}/schedule'],
                ['查询扣费预约', '/openapi/v3/papay/pay/schedules/contract-id/{contract_id}'],
                ['发送预扣费通知', '/openapi/v3/papay/contracts/{contract_id}/notify'],
                ['受理扣款', '/openapi/v3/papay/pay/transactions/apply'],
              ].map(transArrayItem),
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ['JSAPI场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/jsapi'],
                ['App场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/app'],
                ['H5场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/h5'],
                ['小程序场景预约扣费预签约', '/openapi/v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program'],
                ['查询签约协议', '/openapi/v3/papay/sign/partner/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解除签约协议', '/openapi/v3/papay/sign/partner/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['预约扣费', '/openapi/v3/papay/pay/partner/schedules/contract-id/{contract_id}/schedule'],
                ['查询扣费预约', '/openapi/v3/papay/pay/partner/schedules/contract-id/{contract_id}'],
                ['发送预扣费通知', '/openapi/v3/partner-papay/contracts/{contract_id}/notify'],
                ['受理扣款', '/openapi/v3/papay/pay/partner/transactions/apply'],
              ].map(transArrayItem),
            },
            {
              text: '保险商户委托代扣',
              collapsed: true,
              items: [
                ['查询保险自动续费预约', '/openapi/v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}'],
                ['预约保险自动续费', '/openapi/v3/papay/insurance-pay/policy-periods/contract-id/{contract_id}/policy-period-id/{policy_period_id}/schedule'],
                ['受理保险自动续费扣款', '/openapi/v3/papay/insurance-pay/transactions/apply'],
                ['受理续期自动续费协议', '/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/contract-id/{contract_id}/renew'],
                ['查询保险自动续费协议', '/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['解除保险自动续费协议', '/openapi/v3/papay/insurance-sign/contracts/plan-id/{plan_id}/out-contract-code/{out_contract_code}/terminate'],
                ['查询保险扣费周期列表', '/openapi/v3/papay/insurance-sign/policy_periods/plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['修改保险扣费周期列表', '/openapi/v3/papay/insurance-sign/policy-periods/plan-id/{plan_id}/contract-id/{contract_id}/modify'],
                ['App预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/app'],
                ['H5预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/h5'],
                ['JSAPI预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/jsapi'],
                ['小程序预签约', '/openapi/v3/papay/insurance-sign/contracts/pre-entrust-sign/mini-program'],
              ].map(transArrayItem),
            },
            {
              text: '鸿蒙委托代扣',
              collapsed: true,
              items: [
                ['代扣预签约', '/openapi/v3/papay/sign/contracts/pre-entrust-sign'],
                ['查询签约协议(商户协议号)', '/openapi/v3/papay/sign/contracts/harmony-plan-id/{plan_id}/out-contract-code/{out_contract_code}'],
                ['代扣受理扣款', '/openapi/v3/papay/pay/harmony/transactions/apply'],
              ].map(transArrayItem),
            },
            {
              text: '校园轻松付',
              collapsed: true,
              items: [
                ['查询用户签约列表', '/openapi/v3/eduschoolpay/users/{openid}/contracts'],
                ['提交预签约', '/openapi/v3/eduschoolpay/contracts/presign'],
                ['商户主动解约', '/openapi/v3/eduschoolpay/contracts/{contract_id}/terminate'],
                ['通过协议号查询签约信息', '/openapi/v3/eduschoolpay/contracts/{contract_id}'],
                ['使用签约协议号发起扣款', '/openapi/v3/eduschoolpay/transactions'],
                ['通过商户订单号查单', '/openapi/v3/eduschoolpay/transactions/out-trade-no/{out_trade_no}'],
                ['通过微信支付订单号查单', '/openapi/v3/eduschoolpay/transactions/id/{transaction_id}'],
                ['查询用户欠款状态', '/openapi/v3/eduschoolpay/users/{openid}/debt-state'],
              ].map(transArrayItem),
            },
            {
              text: '教育续费通',
              collapsed: true,
              items: [
                ['预签约', '/openapi/v3/edu-papay/contracts/presign'],
                ['通过协议号查询签约', '/openapi/v3/edu-papay/contracts/id/{contract_id}'],
                ['通过用户标识查询签约', '/openapi/v3/edu-papay/user/{openid}/contracts'],
                ['商户主动发起解约', '/openapi/v3/edu-papay/contracts/{contract_id}'],
                ['通过商户订单号查单', '/openapi/v3/edu-papay/transactions/out-trade-no/{out_trade_no}'],
                ['通过微信订单号查单', '/openapi/v3/edu-papay/transactions/id/{transaction_id}'],
                ['给用户发送扣款预通知', '/openapi/v3/edu-papay/user-notifications/{contract_id}/send'],
                ['受理扣款', '/openapi/v3/edu-papay/transactions'],
              ].map(transArrayItem),
            },
            {
              text: '停车服务',
              collapsed: true,
              items: [
                ['查询车牌服务开通信息', '/openapi/v3/vehicle/parking/services/find'],
                ['创建停车入场', '/openapi/v3/vehicle/parking/parkings'],
                ['扣费受理', '/openapi/v3/vehicle/transactions/parking'],
                ['查询订单', '/openapi/v3/vehicle/transactions/out-trade-no/{out_trade_no}'],
              ].map(transArrayItem),
            },
            {
              text: 'ETC授权',
              collapsed: true,
              items: [
                ['查询签约状态(OPENID)', '/openapi/v3/vehicle/etc/users/{openid}/contracts'],
                ['查询签约状态(商户绑定号)', '/openapi/v3/vehicle/etc/contracts/{contract_id}'],
                ['预开通用户ETC扣费', '/openapi/v3/vehicle/etc/preopen'],
                ['查询订单(商户订单号)', '/openapi/v3/vehicle/etc/transactions/out-trade-no/{out_trade_no}'],
                ['查询订单(微信订单号)', '/openapi/v3/vehicle/etc/transactions/id/{transaction_id}'],
                ['高速场景商户扣款', '/openapi/v3/vehicle/etc/transactions/highway'],
              ].map(transArrayItem),
            },
            {
              text: '刷码乘车',
              collapsed: true,
              items: [
                ['查询用户服务可用信息', '/openapi/v3/qrcode/user-services/contract-id/{contract_id}'],
                ['扣费受理', '/openapi/v3/qrcode/transactions'],
                ['查询订单', '/openapi/v3/qrcode/transactions/out-trade-no/{out_trade_no}'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '微信支付分',
          collapsed: true,
          items: [
            {
              text: '直连商户模式',
              collapsed: true,
              items: [
                ...[
                  ['创建订单', '/openapi/v3/payscore/serviceorder#post'],
                  ['查询订单', '/openapi/v3/payscore/serviceorder#get'],
                  ['取消订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/cancel'],
                  ['修改金额', '/openapi/v3/payscore/serviceorder/{out_order_no}/modify'],
                  ['完结订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/complete'],
                  ['同步订单', '/openapi/v3/payscore/serviceorder/{out_order_no}/sync'],
                  ['请求催收', '/openapi/v3/payscore/serviceorder/{out_order_no}/pay'],
                  ['下发服务预扣费消息', '/openapi/v3/payscore/serviceorder/{out_order_no}/send-prepaidmessage'],
                  ['下发费用待处理消息', '/openapi/v3/payscore/serviceorder/{out_order_no}/send-pendingmessage'],
                  ['评估用户分层', '/openapi/v3/payscore/permissions/assess-user-risk-level'],
                ].map(transArrayItem),
                {
                  text: '免确认',
                  collapsed: true,
                  items: [
                    ['商户预授权', '/openapi/v3/payscore/permissions'],
                    ['查询授权状态(CODE)', '/openapi/v3/payscore/permissions/authorization-code/{authorization_code}'],
                    ['查询授权状态(OPENID)', '/openapi/v3/payscore/permissions/openid/{openid}'],
                    ['查询授权状态', '/openapi/v3/payscore/user-service-state'],
                    ['解除用户授权(CODE)', '/openapi/v3/payscore/permissions/authorization-code/{authorization_code}/terminate'],
                    ['解除用户授权(OPENID)', '/openapi/v3/payscore/permissions/openid/{openid}/terminate'],
                    ['解除用户授权', '/openapi/v3/payscore/users/{openid}/permissions/{service_id}/terminate'],
                  ].map(transArrayItem),
                },
                ...[
                  ['创建先用后付订单', '/openapi/v3/payscore/servicepayondeliveryorder'],
                  ['创单结单合并', '/openapi/v3/payscore/serviceorder/direct-complete'],
                ].map(transArrayItem),
              ],
            },
            {
              text: '合作伙伴模式',
              collapsed: true,
              items: [
                ...[
                  ['创建订单', '/openapi/v3/payscore/partner/serviceorder#post'],
                  ['查询订单', '/openapi/v3/payscore/partner/serviceorder#get'],
                  ['取消订单', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/cancel'],
                  ['修改金额', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/modify'],
                  ['完结订单', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/complete'],
                  ['同步订单', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/sync'],
                  ['请求催收', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/pay'],
                  ['下发服务预扣费消息', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/send-prepaidmessage'],
                  ['下发费用待处理消息', '/openapi/v3/payscore/partner/serviceorder/{out_order_no}/send-pendingmessage'],
                  ['评估用户分层', '/openapi/v3/payscore/partner/permissions/assess-user-risk-level'],
                  ['支付场景中预授权', '/openapi/v3/payscore/partner/permissions/apply-for-scene'],
                ].map(transArrayItem),
                {
                  text: '免确认',
                  collapsed: true,
                  items: [
                    ['商户预授权', '/openapi/v3/payscore/partner/permissions'],
                    ['查询授权状态(CODE)', '/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}'],
                    ['查询授权状态(OPENID)', '/openapi/v3/payscore/partner/permissions/search'],
                    ['解除用户授权(CODE)', '/openapi/v3/payscore/partner/permissions/authorization-code/{authorization_code}/terminate'],
                    ['解除用户授权(OPENID)', '/openapi/v3/payscore/partner/permissions/terminate'],
                  ].map(transArrayItem),
                },
                ...[
                  ['申请绑定服务', '/openapi/v3/payscore/partner/service-account-applications'],
                  ['查询绑定结果', '/openapi/v3/payscore/partner/service-account-applications/{out_apply_no}'],
                  ['查询先享金额分层', '/openapi/v3/payscore/partner/servicequotas/service-id/{service_id}'],
                  ['创建先用后付订单', '/openapi/v3/payscore/partner/servicepayondeliveryorder'],
                  ['创单结单合并', '/openapi/v3/payscore/partner/serviceorder/direct-complete'],
                ].map(transArrayItem),
              ],
            },
            transArrayItem(
              ['申请对账单', '/openapi/v3/payscore/merchant-bill']
            ),
            {
              text: '签约计划',
              collapsed: true,
              items: [
                {
                  text: '直连商户模式',
                  collapsed: true,
                  items: [
                    ['创建支付分计划', '/openapi/v3/payscore/plan/payscore-plans'],
                    ['查询支付分计划', '/openapi/v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}'],
                    ['停止支付分计划', '/openapi/v3/payscore/plan/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop'],
                    ['创建用户的签约计划', '/openapi/v3/payscore/sign-plan/user-sign-plans'],
                    ['查询用户的签约计划', '/openapi/v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}'],
                    ['取消用户的签约计划', '/openapi/v3/payscore/sign-plan/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}/stop'],
                    ['创建签约计划服务单', '/openapi/v3/payscore/sign-plan/serviceorder'],
                  ].map(transArrayItem),
                },
                {
                  text: '合作伙伴模式',
                  collapsed: true,
                  items: [
                    ['创建支付分计划', '/openapi/v3/payscore/plan/partner/payscore-plans'],
                    ['查询支付分计划', '/openapi/v3/payscore/plan/partner/payscore-plans/merchant-plan-no/{merchant_plan_no}'],
                    ['停止支付分计划', '/openapi/v3/payscore/plan/partner/payscore-plans/merchant-plan-no/{merchant_plan_no}/stop'],
                    ['创建用户的签约计划', '/openapi/v3/payscore/sign-plan/partner/user-sign-plans'],
                    ['查询用户的签约计划', '/openapi/v3/payscore/sign-plan/partner/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}'],
                    ['取消用户的签约计划', '/openapi/v3/payscore/sign-plan/partner/user-sign-plans/merchant-sign-plan-no/{merchant_sign_plan_no}/stop'],
                    ['创建签约计划服务单', '/openapi/v3/payscore/sign-plan/partner/serviceorder'],
                  ].map(transArrayItem),
                },
              ],
            },
            {
              text: '智慧零售',
              collapsed: true,
              items: [
                ['创建订单', '/openapi/v3/payscore/smartretail-orders#post'],
                ['查询订单', '/openapi/v3/payscore/smartretail-orders#get'],
                ['撤销订单', '/openapi/v3/payscore/smartretail-orders/{out_order_no}/cancel'],
                ['完结订单', '/openapi/v3/payscore/smartretail-orders/{out_order_no}/complete'],
              ].map(transArrayItem),
            },
            {
              text: '先享后付',
              collapsed: true,
              items: [
                ['创建订单', '/openapi/v3/payscore/payafter-orders#post'],
                ['查询订单', '/openapi/v3/payscore/payafter-orders#get'],
                ['撤销订单', '/openapi/v3/payscore/payafter-orders/{out_order_no}/cancel'],
                ['完结订单', '/openapi/v3/payscore/payafter-orders/{out_order_no}/complete'],
                ['同步订单', '/openapi/v3/payscore/payafter-orders/{out_order_no}/sync'],
              ].map(transArrayItem),
            },
            {
              text: '微信先享卡',
              collapsed: true,
              items: [
                ['预受理领卡请求', '/openapi/v3/discount-card/cards'],
                ['查询先享卡订单', '/openapi/v3/discount-card/cards/{out_card_code}'],
                ['更新先享卡订单', '/openapi/v3/discount-card/orders/{out_order_no}#patch'],
                ['通过先享卡订单号查询订单', '/openapi/v3/discount-card/orders/{out_order_no}#get'],
                ['通过商户订单号查询订单', '/openapi/v3/discount-card/orders/out-trade-no/{out_trade_no}'],
                ['增加用户记录', '/openapi/v3/discount-card/cards/{out_card_code}/add-user-records'],
              ].map(transArrayItem),
            },
          ],
        },
        {
          text: '跨境/全球',
          collapsed: true,
          items: [
            {
              text: '进件(融合钱包)',
              collapsed: true,
              items: [
                ['进件子商户', '/openapi/v3/global/merchants'],
                ['查询子商户', '/openapi/v3/global/merchants/{sub_mchid}#get'],
                ['修改子商户', '/openapi/v3/global/merchants/{sub_mchid}#patch'],
                ['上传图片', '/openapi/v3/merchant/media/upload#global'],
              ].map(transArrayItem),
            },
            {
              text: 'H5支付权限',
              collapsed: true,
              items: [
                ['查询子商户权限状态', '/openapi/v3/global/merchant/h5/permission/{sub_mchid}'],
                ['创建权限申请单', '/openapi/v3/global/merchant/h5/permission/applications'],
                ['查询权限申请单详情', '/openapi/v3/global/merchant/h5/permission/applications/{applyment_id}'],
                ['创建域名修改申请单', '/openapi/v3/global/merchant/h5/permission/domain/applications'],
                ['查询域名修改申请单', '/openapi/v3/global/merchant/h5/permission/domain/applications/{applyment_id}'],
              ].map(transArrayItem),
            },
            {
              text: '基础支付',
              collapsed: true,
              items: [
                ['付款码支付', '/openapi/v3/global/micropay/transactions/pay'],
                ['撤销订单(商户单号)', '/openapi/v3/global/micropay/transactions/out-trade-no/{out_trade_no}/reverse'],
                ['撤销订单(平台单号)', '/openapi/v3/global/micropay/transactions/id/{transaction_id}/reverse'],
                ['JSAPI下单', '/openapi/v3/global/transactions/jsapi'],
                ['APP下单', '/openapi/v3/global/transactions/app'],
                ['NATIVE下单', '/openapi/v3/global/transactions/native'],
                ['H5下单', '/openapi/v3/global/transactions/mweb'],
                ['查询订单(商户单号)', '/openapi/v3/global/transactions/out-trade-no/{out_trade_no}'],
                ['查询订单(平台单号)', '/openapi/v3/global/transactions/id/{transaction_id}'],
                ['关闭订单(商户单号)', '/openapi/v3/global/transactions/out-trade-no/{out_trade_no}/close'],
                ['关闭订单(平台单号)', '/openapi/v3/global/transactions/id/{transaction_id}/close'],
              ].map(transArrayItem),
            },
            {
              text: '退款',
              collapsed: true,
              items: [
                ['申请退款', '/openapi/v3/global/refunds#post'],
                ['查询所有退款', '/openapi/v3/global/refunds#get'],
                ['查询单笔退款(商户单号)', '/openapi/v3/global/refunds/out-refund-no/{out_refund_no}'],
                ['查询单笔退款(平台单号)', '/openapi/v3/global/refunds/id/{refund_id}'],
                ['充值退款余额查询(直连)', '/openapi/v3/global/refund/recharge-balance'],
                ['充值退款余额查询(机构)', '/openapi/v3/global/refund/partner/recharge-balance/sub-mchid/{sub_mchid}'],
              ].map(transArrayItem),
            },
            {
              text: '分账',
              collapsed: true,
              items: [
                ['分账标记', '/openapi/v3/global/profit-sharing/transactions/mark'],
                ['请求分账', '/openapi/v3/global/profit-sharing/orders'],
                ['查询分账结果', '/openapi/v3/global/profit-sharing/orders/{out_order_no}'],
                ['查询剩余待分金额', '/openapi/v3/global/profit-sharing/transactions/{transaction_id}/amounts'],
                ['解冻剩余资金', '/openapi/v3/global/profit-sharing/orders/unfreeze'],
                ['查询订单剩余可退款金额', '/openapi/v3/global/profit-sharing/transactions/{transaction_id}/refundable-amounts'],
                ['查询可供垫付退款实时余额', '/openapi/v3/global/profit-sharing/refunds/refundable-balance'],
                ['获取分账账单文件下载地址', '/openapi/v3/global/profit-sharing/bill-download-url'],
                ['获取分账退款账单下载链接', '/openapi/v3/global/profit-sharing/refunds/bill-download-url'],
                ['添加分账接收方', '/openapi/v3/global/profit-sharing/receivers#post'],
                ['删除分账接收方', '/openapi/v3/global/profit-sharing/receivers#delete'],
                ['查询分账接收方添加结果', '/openapi/v3/global/profit-sharing/receivers/{account}'],
                ['上传资证图片文件', '/openapi/v3/global/merchant-storage/file/upload'],
              ].map(transArrayItem),
            },
            {
              text: '委托代扣',
              collapsed: true,
              items: [
                ['小程序签约', '/openapi/v3/global/papay/contracts/miniprogram-pre-entrust-sign'],
                ['APP签约', '/openapi/v3/global/papay/contracts/app-pre-entrust-sign'],
                ['JSAPI预签约', '/openapi/v3/global/papay/contracts/jsapi-pre-entrust-sign'],
                ['H5预签约', '/openapi/v3/global/papay/contracts/h5-pre-entrust-sign'],
                ['WEB预签约', '/openapi/v3/global/papay/contracts/web-pre-entrust-sign'],
                ['查询签约(代扣协议ID)', '/openapi/v3/global/papay/contracts/{contract_id}'],
                ['查询签约(商户协议号)', '/openapi/v3/global/papay/contracts/out-contract-code/{out_contract_code}'],
                ['申请解约', '/openapi/v3/global/papay/contracts/{contract_id}/terminate'],
                ['支付扣款', '/openapi/v3/global/papay/transactions'],
                ['查询订单(平台单号)', '/openapi/v3/global/papay/transactions/{transaction_id}'],
                ['查询订单(商户单号)', '/openapi/v3/global/papay/transactions/out-trade-no/{out_trade_no}'],
                ['撤销订单', '/openapi/v3/global/papay/transactions/out-trade-no/{out_trade_no}/reverse'],
              ].map(transArrayItem),
            },
            {
              text: '微信支付分',
              collapsed: true,
              items: [
                ['创建支付分订单', '/openapi/v3/payscore/oversea/partner/serviceorder#post'],
                ['查询支付分订单', '/openapi/v3/payscore/oversea/partner/serviceorder#get'],
                ['取消支付分订单', '/openapi/v3/payscore/oversea/partner/serviceorder/{out_order_no}/cancel'],
                ['完结支付分订单', '/openapi/v3/payscore/oversea/partner/serviceorder/{out_order_no}/complete'],
                ['同步支付分订单', '/openapi/v3/payscore/oversea/partner/serviceorder/{out_order_no}/sync'],
              ].map(transArrayItem),
            },
            {
              text: '账单',
              collapsed: true,
              items: [
                ['下载交易账单文件', '/openapi/v3/global/statements'],
                ['查询结算资金明细', '/openapi/v3/global/settle/settlements'],
              ].map(transArrayItem),
            },
            {
              text: '清关报关',
              collapsed: true,
              items: [
                ['提交报关申请', '/openapi/v3/global/customs/orders#post'],
                ['查询报关信息', '/openapi/v3/global/customs/orders#get'],
                ['修改报关信息', '/openapi/v3/global/customs/orders#patch'],
                ['重推报关信息', '/openapi/v3/global/customs/redeclare'],
                ['身份信息校验', '/openapi/v3/global/customs/verify-certificate'],
              ].map(transArrayItem),
            },
            {
              text: '可用版本',
              collapsed: true,
              items: [
                {
                  text: '进件(融合钱包)',
                  collapsed: true,
                  items: [
                    ['进件子商户', '/openapi/v3/merchants#post'],
                    ['修改子商户', '/openapi/v3/merchants#put'],
                    ['查询子商户', '/openapi/v3/merchants/{sub_mchid}#get'],
                  ].map(transArrayItem),
                },
                {
                  text: '基础支付',
                  collapsed: true,
                  items: [
                    ['付款码支付', '/openapi/v3/transactions/micropay'],
                    ['撤销订单(商户单号)', '/openapi/v3/transactions/out-trade-no/{out_trade_no}/reverse'],
                    ['撤销订单(平台单号)', '/openapi/v3/transactions/id/{transaction_id}/reverse'],
                    ['JSAPI下单', '/openapi/v3/transactions/jsapi'],
                    ['APP下单', '/openapi/v3/transactions/app'],
                    ['NATIVE下单', '/openapi/v3/transactions/native'],
                    ['H5下单', '/openapi/v3/transactions/mweb'],
                    ['查询订单(商户单号)', '/openapi/v3/transactions/out-trade-no/{out_trade_no}'],
                    ['查询订单(平台单号)', '/openapi/v3/transactions/id/{transaction_id}'],
                    ['关闭订单(商户单号)', '/openapi/v3/transactions/out-trade-no/{out_trade_no}/close'],
                    ['关闭订单(平台单号)', '/openapi/v3/transactions/id/{transaction_id}/close'],
                  ].map(transArrayItem),
                },
                {
                  text: '退款',
                  collapsed: true,
                  items: [
                    ['申请退款', '/openapi/v3/refunds#post'],
                    ['查询所有退款', '/openapi/v3/refunds#get'],
                    ['查询单笔退款(商户单号)', '/openapi/v3/refunds/out-refund-no/{out_refund_no}'],
                    ['查询单笔退款(平台单号)', '/openapi/v3/refunds/id/{refund_id}'],
                  ].map(transArrayItem),
                },
                {
                  text: '账单',
                  collapsed: true,
                  items: [
                    ['下载交易账单文件', '/openapi/v3/statements'],
                    ['查询结算资金明细', '/openapi/v3/settle/settlements'],
                  ].map(transArrayItem),
                },
                {
                  text: '清关报关',
                  collapsed: true,
                  items: [
                    ['提交报关申请', '/openapi/v3/customs/orders#post'],
                    ['查询报关信息', '/openapi/v3/customs/orders#get'],
                    ['修改报关信息', '/openapi/v3/customs/orders#patch'],
                    ['重推报关信息', '/openapi/v3/customs/redeclare'],
                    ['身份信息校验', '/openapi/v3/customs/verify-certificate'],
                  ].map(transArrayItem),
                },
              ],
            },
            transArrayItem(
              ['获取平台证书列表', '/openapi/v3/global/certificates'],
            ),
          ],
        },
        transArrayItem(
          ['获取平台证书列表', '/openapi/v3/certificates'],
        ),
      ]
    },
  ]);
  return cache.get(key);
}

function oauthIdentifierSidebar() {
  const key = 'oauthIdentifierSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '实名校验/授权',
          collapsed: true,
          items: [
            ['授权获取code', '/openapi/v2/appauth/authindex'],
            ['通过code换取accesstoken', '/openapi/v2/appauth/getaccesstoken'],
            ['微信支付实名验证', '/openapi/v2/secsvc/realnameauth'],
            ['微信支付实名授权', '/openapi/v2/secsvc/getrealnameinfo'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function depositSidebar() {
  const key = 'depositSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '酒店押金',
          collapsed: true,
          items: [
            ['支付押金(付款码支付)', '/openapi/v2/deposit/micropay'],
            ['支付押金(人脸支付)', '/openapi/v2/deposit/facepay'],
            ['支付押金(统一下单)', '/openapi/v2/deposit/unifiedorder'],
            ['查询订单', '/openapi/v2/deposit/orderquery'],
            ['撤销订单', '/openapi/v2/deposit/reverse'],
            ['消费押金', '/openapi/v2/deposit/consume'],
            ['申请退款(押金)', '/openapi/v2/deposit/refund'],
            ['查询退款(押金)', '/openapi/v2/deposit/refundquery'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function microMerchantMixedSidebar() {
  const key = 'microMerchantMixedSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '代金券',
          collapsed: false,
          items: [
            ['查询代金券批次', '/openapi/v2/mmpaymkttransfers/query_coupon_stock'],
            ['发放代金券', '/openapi/v2/mmpaymkttransfers/send_coupon'],
            ['查询代金券信息', '/openapi/v2/mmpaymkttransfers/querycouponsinfo'],
          ].map(transArrayItem),
        },
        {
          text: '小微特约商户',
          collapsed: false,
          items: [
            ['获取平台证书', '/openapi/v2/risk/getcertficates'],
            ['申请入驻', '/openapi/v2/applyment/micro/submit'],
            ['查询申请状态', '/openapi/v2/applyment/micro/getstate'],
            ['修改联系信息', '/openapi/v2/applyment/micro/modifycontactinfo'],
            ['修改结算银行卡', '/openapi/v2/applyment/micro/modifyarchives'],
            ['提交升级申请单', '/openapi/v2/applyment/micro/submitupgrade'],
            ['查询升级申请单状态', '/openapi/v2/applyment/micro/getupgradestate'],
            ['签约报备', '/openapi/v2/applyment/micro/signcontract'],
            ['查询提现状态', '/openapi/v2/fund/queryautowithdrawbydate'],
            ['重新发起提现', '/openapi/v2/fund/reautowithdrawbydate'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function acquiringBankMgrSidebar() {
  const key = 'acquiringBankMgrSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '银行服务商',
          collapsed: false,
          items: [
            ...[
              ['查询特约子商户配置信息', '/openapi/v2/secapi/mch/querysubdevconfig'],
              ['设置特约子商户配置信息', '/openapi/v2/secapi/mch/addsubdevconfig'],
              ['设置特约子商户指定渠道号', '/openapi/v2/secapi/mch/channelsetting'],
              ['报备/查询银行特约商户资料', '/openapi/v2/secapi/mch/submchmanage'],
              ['修改银行特约商户信息', '/openapi/v2/secapi/mch/modifymchinfo'],
              ['设置子商户关注功能配置信息', '/openapi/v2/secapi/mkt/addrecommendconf'],
              ['查询商户审核状态(间联模式)', '/openapi/v2/mchrisk/bankquerymchauditinfo'],
              ['查询商户审核信息(渠道商)', '/openapi/v2/mchrisk/channelquerymchauditinfo'],
              ['查询商户违规记录', '/openapi/v2/risk/getviolation'],
            ].map(transArrayItem),
            {
              text: '风险服务',
              collapsed: false,
              items: [
                ['设置风险通知回调链接', '/openapi/v2/mchrisk/setmchriskcallback'],
                ['事前-风险商户核查', '/openapi/v2/mchrisk/querymchrisk'],
                ['事中-风险交易通知', '/webhook/v2/transactions-risk-occurred'],
                ['事后-风险处理结果同步', '/openapi/v2/mchrisk/syncmchriskresult'],
              ].map(transArrayItem),
            },
          ],
        },
      ],
    },
  ]);
  return cache.get(key);
}

function ebikeInstitutionSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '电动自行车行业代扣',
          collapsed: false,
          items: [
            ['通过用户标识查询用户状态', '/openapi/v3/ebike/charge/users/{openid}/contract'],
            ['通过签约号查询用户状态', '/openapi/v3/ebike/charge/contracts/{contract_id}'],
            ['预开通服务', '/openapi/v3/ebike/charge/contracts/preopen'],
            ['创建用户当次充电代扣凭证', '/openapi/v3/ebike/charge/contracts/{contract_id}/confirm'],
            ['查询订单(商户单号)', '/openapi/v3/ebike/charge/transactions/out-trade-no/{out_trade_no}'],
            ['查询订单(平台单号)', '/openapi/v3/ebike/charge/transactions/id/{transaction_id}'],
            ['申请代扣受理扣款', '/openapi/v3/ebike/charge/transactions'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function offlineFacepaySidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        transArrayItem(['刷脸智能设备列表', '/openapi/v3/iotmanage/devices']),
        transArrayItem(['获取出厂检查结果', '/openapi/v3/iotmanage/device-inspections/{device_sn}']),
        transArrayItem(['查询用户授权的实名信息', '/openapi/v3/facemch/users/{face_sid}']),
        {
          text: 'K12刷脸代扣',
          collapsed: false,
          items: [
            ['查询机构信息', '/openapi/v3/offlinefacemch/organizations'],
            ['获取授权凭证', '/openapi/v3/offlinefacemch/tokens'],
            ['查询刷脸用户信息', '/openapi/v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}#get'],
            ['修改刷脸用户信息', '/openapi/v3/offlinefacemch/organizations/{organization_id}/users/out-user-id/{out_user_id}#patch'],
            ['解除刷脸用户签约关系', '/openapi/v3/offlinefacemch/organizations/{organization_id}/users/user-id/{user_id}/terminate-contract'],
            ['获取authinfo', '/openapi/v3/offlineface/authinfo'],
            ['预签约', '/openapi/v3/offlineface/contracts/presign'],
            ['查询签约', '/openapi/v3/offlineface/contracts/{contract_id}'],
            ['查询重采用户列表', '/openapi/v3/offlineface/face-collections'],
            ['查询重采请求详情', '/openapi/v3/offlineface/face-collections/{collection_id}'],
            ['申请扣款', '/openapi/v3/offlineface/transactions'],
            ['查单', '/openapi/v3/offlineface/transactions/out-trade-no/{out_trade_no}'],
            ['获取还款链接', '/openapi/v3/offlineface/repayment-url'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function bankTransferSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '银行模式批量转账',
          collapsed: false,
          items: [
            ['发起批量转账', '/openapi/v3/bank-transfer/batches'],
            ['查询批次单(微信批次单号)', '/openapi/v3/bank-transfer/batches/batch-id/{batch_id}'],
            ['查询批次单(银行批次单号)', '/openapi/v3/bank-transfer/batches/out-batch-no/{out_batch_no}'],
            ['查询明细单(微信明细单号)', '/openapi/v3/bank-transfer/batches/batch-id/{batch_id}/details/detail-id/{detail_id}'],
            ['查询明细单(银行明细单号)', '/openapi/v3/bank-transfer/batches/out-batch-no/{out_batch_no}/details/out-detail-no/{out_detail_no}'],
          ].map(transArrayItem),
        },
        {
          text: '银行模式电子回单',
          collapsed: false,
          items: [
            ['受理汇总电子回单', '/openapi/v3/bank-batch-transfer/receipt/summary-receipts#post'],
            ['查询汇总回单结果', '/openapi/v3/bank-batch-transfer/receipt/summary-receipts#get'],
            ['受理明细电子回单', '/openapi/v3/bank-batch-transfer/receipt/detail-receipts#post'],
            ['查询明细回单结果', '/openapi/v3/bank-batch-transfer/receipt/detail-receipts#get'],
            ['下载电子回单文件', '/openapi/v3/transferdownload/signfile'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function acquiringBankMixedSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '配额定向营销银行号码包',
          collapsed: true,
          items: [
            ['导入定向用户协议号', '/openapi/v3/marketing/bank/packages/{package_id}/tasks#post'],
            ['查询上传任务列表', '/openapi/v3/marketing/bank/packages/{package_id}/tasks#get'],
          ].map(transArrayItem),
        },
        {
          text: '从业机构特约商户结算规则',
          collapsed: true,
          items: [
            ['提交修改申请单', '/openapi/v3/merchant-settlement/merchant-settle-rule-applications'],
            ['查询申请单结果', '/openapi/v3/merchant-settlement/merchant-settle-rule-applications/{application_id}'],
          ].map(transArrayItem),
        },
        {
          text: '从业机构子商户优惠费率活动',
          collapsed: true,
          items: [
            ['提交费率优惠活动报名申请', '/openapi/v3/rate-activity/applications'],
            ['查询费率优惠申请结果', '/openapi/v3/rate-activity/applications/id/{application_id}#get'],
            ['修改费率优惠申请单信息', '/openapi/v3/rate-activity/applications/id/{application_id}#patch'],
            ['申请单图片资料上传', '/openapi/v3/merchant/media/upload'],
          ].map(transArrayItem),
        },
        {
          text: '微信支付分(从业机构模式)',
          collapsed: false,
          items: [
            ['预授权', '/openapi/v3/payscore/acquiringbank/permissions'],
            ['查询用户授权记录', '/openapi/v3/payscore/acquiringbank/permissions/authorization-code/{authorization_code}'],
            ['解除用户授权关系', '/openapi/v3/payscore/acquiringbank/permissions/authorization-code/{authorization_code}/terminate'],
            ['创建订单', '/openapi/v3/payscore/acquiringbank/serviceorder#post'],
            ['查询订单', '/openapi/v3/payscore/acquiringbank/serviceorder#get'],
            ['修改订单金额', '/openapi/v3/payscore/acquiringbank/serviceorder/{out_order_no}/modify'],
            ['登记扣款信息', '/openapi/v3/payscore/acquiringbank/serviceorder/{out_order_no}/registerdeductinfo'],
            ['查询扣款信息', '/openapi/v3/payscore/acquiringbank/serviceorder/deduction'],
            ['取消订单', '/openapi/v3/payscore/acquiringbank/serviceorder/{out_order_no}/cancel'],
            ['完结订单', '/openapi/v3/payscore/acquiringbank/serviceorder/{out_order_no}/complete'],
            ['同步订单信息', '/openapi/v3/payscore/acquiringbank/serviceorder/{out_order_no}/sync'],
            ['创建先用后付订单', '/openapi/v3/payscore/acquiringbank/servicepayondeliveryorder'],
            ['商户预下单通知', '/webhook/v3/PAYSCORE.MCH_PREPAY'],
            ['用户支付成功通知', '/webhook/v3/PAYSCORE.USER_PAID#ACQUIRINGBANK'],
            ['用户确认成功通知', '/webhook/v3/PAYSCORE.USER_CONFIRM#ACQUIRINGBANK'],
          ].map(transArrayItem),
        },
        {
          text: '微信分付(从业机构模式)',
          collapsed: false,
          items: [
            ['支付方式前置曝光查询', '/openapi/v3/pay/acquiring-bank/transactions/exposure'],
          ].map(transArrayItem),
        },
      ],
    }
  ]);
  return cache.get(key);
}

function personalCollectionsSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      items: [
        {
          text: '收付通-个人收款(二手交易)',
          collapsed: false,
          items: [
            ['查询个人收款方授权结果', '/openapi/v3/ecommerce/individual-contracts/{openid}'],
            ['根据业务申请单号查签约信息', '/openapi/v3/ecommerce/individual-contracts/out-contract-code/{out_contract_code}'],
            ['APP场景预签约', '/openapi/v3/ecommerce/individual-contracts/pre-entrust-sign/app'],
            ['微信小程序下单', '/openapi/v3/combine-transactions/miniprogram'],
            ['APP下单', '/openapi/v3/combine-transactions/app#INDIVIDUAL'],
            ['交易关单', '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}/close#INDIVIDUAL'],
            ['查询订单(商户单号)', '/openapi/v3/combine-transactions/out-trade-no/{combine_out_trade_no}#INDIVIDUAL'],
            ['查询订单(平台单号)', '/openapi/v3/combine-transactions/id/{combine_transaction_id}'],
            ['交易成功通知', '/webhook/v3/TRANSACTION.SUCCESS#INDIVIDUAL'],
            ['申请退款', '/openapi/v3/ecommerce/refunds/apply#INDIVIDUAL'],
            ['发起异常退款', '/openapi/v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund#INDIVIDUAL'],
            ['查询单笔退款(商户退款单号)', '/openapi/v3/ecommerce/refunds/out-refund-no/{out_refund_no}#INDIVIDUAL'],
            ['查询单笔退款(平台退款单号)', '/openapi/v3/ecommerce/refunds/id/{refund_id}#INDIVIDUAL'],
            ['退款成功通知', '/webhook/v3/REFUND.SUCCESS#INDIVIDUAL'],
            ['退款异常通知', '/webhook/v3/REFUND.ABNORMAL#INDIVIDUAL'],
            ['退款关闭通知', '/webhook/v3/REFUND.CLOSED#INDIVIDUAL'],
            ['申请批量结算', '/openapi/v3/platsolution/ecommerce/settle/prepay-settle-orders'],
            ['查询批量结算信息', '/openapi/v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}'],
            ['结算成功通知', '/webhook/v3/SETTLEMENT.SUCCESS'],
            ['申请异常结算批次单处理', '/openapi/v3/platsolution/ecommerce/settle/prepay-settle-orders/{settle_batch_no}/apply-abnormal-settle'],
            ['发起在途异常资金付款指令', '/openapi/v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions'],
            ['查询在途异常资金付款结果', '/openapi/v3/abnormal-fund-processing/receipts/{receipt_id}'],
            ['异常转付处理结果回调通知', '/webhook/v3/ABNORMAL_FUND_PROCESSING.TRANSFER.SUCCESS'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function nationalConsumerGoodsSubsidySidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: '国家消费品换新补贴',
      collapsed: true,
      items: [
        {
          text: '浙江',
          collapsed: true,
          items: [
            ['查询补贴资格', '/openapi/v3/gov/subsidy/zhejiang/qualifications/query'],
            ['领取资格', '/openapi/v3/gov/subsidy/zhejiang/qualifications/claim'],
            ['变更资格', '/openapi/v3/gov/subsidy/zhejiang/qualifications/alter'],
            ['核销资格', '/openapi/v3/gov/subsidy/zhejiang/qualifications/sync'],
            ['N品类核销', '/openapi/v3/gov/subsidy/zhejiang/n-qualifications/confirm'],
            ['申请品类凭证码', '/openapi/v3/gov/subsidy/zhejiang/authcode/issue'],
            ['预核销品类凭证码', '/openapi/v3/gov/subsidy/zhejiang/authcode/try'],
            ['取消核销品类凭证码', '/openapi/v3/gov/subsidy/zhejiang/authcode/cancel'],
            ['确认品类凭证码', '/openapi/v3/gov/subsidy/zhejiang/authcode/commit'],
            ['撤销品类凭证码', '/openapi/v3/gov/subsidy/zhejiang/authcode/refund'],
            ['查询商品信息', '/openapi/v3/gov/subsidy/zhejiang/goods/query'],
            ['查询SN码状态', '/openapi/v3/gov/subsidy/zhejiang/sncode/query'],
            ['SN码锁定', '/openapi/v3/gov/subsidy/zhejiang/sncode/lock'],
            ['SN码解锁', '/openapi/v3/gov/subsidy/zhejiang/sncode/unlock'],
          ].map(transArrayItem),
        },
        {
          text: '江苏',
          collapsed: true,
          items: [
            ['查询补贴资格', '/openapi/v3/gov/subsidy/qualification'],
            ['批量查询用户资格', '/openapi/v3/gov/subsidy/qualifications/query'],
            ['同步资格核销信息', '/openapi/v3/gov/subsidy/qualifications/sync'],
            ['N品类同步资格核销信息', '/openapi/v3/gov/subsidy/n-qualifications/sync'],
            ['交易信息回传', '/openapi/v3/gov/subsidy/transactions/sync'],
            ['交易信息查询', '/openapi/v3/gov/subsidy/transactions/query'],
            ['查询单日交易汇总', '/openapi/v3/gov/subsidy/transactions/summary/query-day'],
            ['查询SN码状态', '/openapi/v3/gov/subsidy/sncode/query'],
            ['SN码锁定', '/openapi/v3/gov/subsidy/sncode/lock'],
            ['SN码解锁', '/openapi/v3/gov/subsidy/sncode/unlock'],
            ['商品信息上传', '/openapi/v3/gov/subsidy/goods/upload'],
            ['企业信息查询', '/openapi/v3/gov/subsidy/companies/query'],
          ].map(transArrayItem).concat({
            text: '透传模式',
            items: [
              ['查询资格', '/openapi/v3/gov/subsidy/qualifications/passthrough/query'],
              ['领取资格', '/openapi/v3/gov/subsidy/qualifications/passthrough/claim'],
              ['取消资格', '/openapi/v3/gov/subsidy/qualifications/passthrough/cancel'],
            ].map(transArrayItem),
          }),
        },
        {
          text: '上海/福建/重庆',
          collapsed: true,
          items: [
            ['查询补贴资格', '/openapi/v3/gov/subsidy/qualification'],
            ['批量查询用户资格', '/openapi/v3/gov/subsidy/qualifications/query'],
            ['同步资格核销信息', '/openapi/v3/gov/subsidy/qualifications/sync'],
            ['N品类同步资格核销信息', '/openapi/v3/gov/subsidy/n-qualifications/sync'],
            ['交易信息回传', '/openapi/v3/gov/subsidy/transactions/sync'],
            ['查询SN码状态', '/openapi/v3/gov/subsidy/sncode/query'],
            ['SN码锁定', '/openapi/v3/gov/subsidy/sncode/lock'],
          ].map(transArrayItem).concat({
            text: '透传模式',
            items: [
              ['查询资格', '/openapi/v3/gov/subsidy/qualifications/passthrough/query'],
              ['领取资格', '/openapi/v3/gov/subsidy/qualifications/passthrough/claim'],
              ['取消资格', '/openapi/v3/gov/subsidy/qualifications/passthrough/cancel'],
            ].map(transArrayItem),
          }, {
            text: '数据审核',
            items: [
              ['上传审核数据', '/openapi/v3/gov/subsidy/audit/cup/upload'],
              ['更新审核数据', '/openapi/v3/gov/subsidy/audit/cup/update'],
              ['查询审核结果', '/openapi/v3/gov/subsidy/audit/cup/query'],
              ['作废审核数据', '/openapi/v3/gov/subsidy/audit/cup/invalid'],
              ['同步退款信息', '/openapi/v3/gov/subsidy/audit/cup/refund/sync'],
            ].map(transArrayItem),
          }),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function medicalInsuranceSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: '医保支付',
      items: [
        ['医保自费混合收款下单', '/openapi/v3/med-ins/orders'],
        ['查单(医保自费混合订单号)', '/openapi/v3/med-ins/orders/mix-trade-no/{mix_trade_no}'],
        ['查单(从业机构订单号)', '/openapi/v3/med-ins/orders/out-trade-no/{out_trade_no}'],
        ['医保退款通知', '/openapi/v3/med-ins/refunds/notify'],
        ['医保混合收款成功通知', '/webhook/v3/MEDICAL_INSURANCE.SUCCESS'],
      ].map(transArrayItem),
    },
  ]);
  return cache.get(key);
}

function aggregatedAccountsForWeBankSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: '聚合账户银行渠道服务',
      items: [
        ['发起微众台账管控', '/openapi/v3/aggracct-bc/wb-channel/control-orders/punish'],
        ['解除对微众台账的管控', '/openapi/v3/aggracct-bc/wb-channel/control-orders/recover'],
        ['查询控制单', '/openapi/v3/aggracct-bc/wb-channel/control-orders/{out_request_no}'],
        ['特殊减额', '/openapi/v3/aggracct-bc/wb-channel/special-reduction'],
        ['查询特殊减额结果', '/openapi/v3/aggracct-bc/wb-channel/special-reduction/{out_request_no}'],
        ['查询渠道额度', '/openapi/v3/aggracct-bc/wb-channel/account/balance'],
        ['同步资料更新请求审核结果', '/openapi/v3/aggracct-bc/wb-channel/control-orders/info/update/result/notify'],
      ].map(transArrayItem),
    },
  ]);
  return cache.get(key);
}

function webhookSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: 'XML格式报文',
      collapsed: true,
      items: [
        ['普通支付通知', '/webhook/v2/transaction-success'],
        ['合单支付通知', '/webhook/v2/combined-transactions-success'],
        ['退款结果通知', '/webhook/v2/refund-processed'],
        ['车牌状态变更通知', '/webhook/v2/vehicle-state-changed-for-parking'],
        ['签/解约扣款服务通知', '/webhook/v2/pap-contract-state-changed'],
      ].map(transArrayItem).concat({
        text: '免押租借/速住',
        collapsed: true,
        items: [
          ['确认成功通知', '/webhook/v2/CHECK.SUCCESS'],
          ['确认失败通知', '/webhook/v2/CHECK.FAIL'],
          ['支付成功通知', '/webhook/v2/TRANSACTION.SUCCESS'],
          ['支付失败通知', '/webhook/v2/TRANSACTION.FAIL'],
        ].map(transArrayItem),
      }),
    },
    {
      text: 'JSON格式报文',
      collapsed: false,
      items: [
        {
          text: '支付',
          collapsed: true,
          items: [
            ['支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#BASIC'],
          ].map(transArrayItem),
        },
        {
          text: '刷脸',
          collapsed: true,
          items: [
            ['用户签约状态变更回调通知', '/webhook/v3/FACEPAY.USER_STATE_CHANGE'],
          ].map(transArrayItem),
        },
        {
          text: '退款',
          collapsed: true,
          items: [
            ['退款成功通知', '/webhook/v3/REFUND.SUCCESS'],
            ['退款异常通知', '/webhook/v3/REFUND.ABNORMAL'],
            ['退款关闭通知', '/webhook/v3/REFUND.CLOSED'],
          ].map(transArrayItem),
        },
        {
          text: '分账动账',
          collapsed: true,
          items: [
            ['分账动账成功变动通知', '/webhook/v3/PROFITSHARING.SUCCESS'],
            ['分账动账成功回退通知', '/webhook/v3/PROFITSHARING.RETURN'],
          ].map(transArrayItem),
        },
        {
          text: '转账',
          collapsed: true,
          items: [
            ['转账批次完成通知', '/webhook/v3/MCHTRANSFER.BATCH.FINISHED'],
            ['转账批次关闭通知', '/webhook/v3/MCHTRANSFER.BATCH.CLOSED'],
            ['转账单据终态通知', '/webhook/v3/MCHTRANSFER.BILL.FINISHED'],
            ['用户确认自动收款授权通知', '/webhook/v3/MCHTRANSFER.AUTHORIZATION.CONFIRMED'],
            ['用户关闭自动收款授权通知', '/webhook/v3/MCHTRANSFER.AUTHORIZATION.CLOSED'],
            ['转账到QQ钱包终态通知', '/webhook/v3/MCHTRANSFER.QQWALLETBILL.FINISHED'],
          ].map(transArrayItem),
        },
        {
          text: '提现',
          collapsed: true,
          items: [
            ['预约提现状态变更通知', '/webhook/v3/MCHWITHDRAW.CHANGE'],
          ].map(transArrayItem),
        },
        {
          text: '平台收付通',
          collapsed: true,
          items: [
            {
              text: '合单代扣',
              collapsed: true,
              items: [
                ['签约成功通知', '/webhook/v3/ECOMMERCE_ENTRUST.SIGN'],
                ['解约成功通知', '/webhook/v3/ECOMMERCE_ENTRUST.TERMINATE'],
              ].map(transArrayItem),
            }, {
              text: '商家充值',
              collapsed: true,
              items: [
                ['充值成功通知', '/webhook/v3/RECHARGE.SUCCESS'],
                ['关闭充值通知', '/webhook/v3/RECHARGE.CLOSED'],
                ['充值资金退回通知', '/webhook/v3/RECHARGE.FUND_RETURNED'],
              ].map(transArrayItem),
            }
          ],
        },
        {
          text: '会员卡',
          collapsed: true,
          items: [
            ['领卡事件通知', '/webhook/v3/MEMBERCARD.ACCEPT_CARD'],
            ['激活事件通知', '/webhook/v3/MEMBERCARD.ACTIVATE_CARD'],
            ['用户管理会员卡事件通知', '/webhook/v3/MEMBERCARD.USERCARD_MANAGE'],
          ].map(transArrayItem),
        },
        {
          text: '智慧商圈',
          collapsed: true,
          items: [
            ['会员积分服务授权结果通知', '/webhook/v3/MALL_AUTH.ACTIVATE_CARD'],
            ['会员支付结果通知', '/webhook/v3/MALL_TRANSACTION.SUCCESS'],
            ['会员退款成功通知', '/webhook/v3/MALL_REFUND.SUCCESS'],
          ].map(transArrayItem),
        },
        {
          text: '优惠券',
          collapsed: true,
          items: [
            ['核销事件回调通知', '/webhook/v3/COUPON.USE'],
            ['领券事件回调通知', '/webhook/v3/COUPON.SEND'],
          ].map(transArrayItem),
        },
        {
          text: '商品券',
          collapsed: true,
          items: [
            ['商品券领券通知', '/webhook/v3/PRODUCT_COUPON_SP.SEND'],
            ['投放计划状态变更通知', '/webhook/v3/DELIVERY_PLAN_STATE.DELIVER'],
          ].map(transArrayItem),
        },
        {
          text: '电子发票',
          collapsed: true,
          items: [
            ['用户发票抬头填写完成通知', '/webhook/v3/FAPIAO.USER_APPLIED'],
            ['发票卡券作废通知', '/webhook/v3/FAPIAO.CARD_DISCARDED'],
            ['发票插入用户卡包成功通知', '/webhook/v3/FAPIAO.CARD_INSERTED'],
            ['发票开具成功通知', '/webhook/v3/FAPIAO.ISSUED'],
            ['发票冲红成功通知', '/webhook/v3/FAPIAO.REVERSED'],
          ].map(transArrayItem),
        },
        {
          text: '企业支付',
          collapsed: true,
          items: [
            ['关系授权完成通知', '/webhook/v3/WEBIZPAY.AUTHORIZED'],
            ['关系解除授权后通知', '/webhook/v3/WEBIZPAY.REVOKED'],
            ['额度卡失效后通知', '/webhook/v3/WEBIZPAY.QUOTACARDEXPIRED'],
            ['额度卡支付成功后通知', '/webhook/v3/WEBIZPAY.PAYMENTSUCCESS'],
            ['额度卡退款成功后通知', '/webhook/v3/WEBIZPAY.PAYMENTREFUNDSUCCESS'],
          ].map(transArrayItem),
        },
        {
          text: '公益捐赠',
          collapsed: true,
          items: [
            ['预算申请锁定成功通知', '/webhook/v3/BUDGET.LOCKED'],
            ['预算申请关闭回调通知', '/webhook/v3/BUDGET.CLOSED'],
            ['预算申请完结回调通知', '/webhook/v3/BUDGET.FINISHED'],
          ].map(transArrayItem),
        },
        {
          text: '商家名片会员',
          collapsed: true,
          items: [
            ['用户开通会员卡事件通知', '/webhook/v3/BRAND_MEMBER_CARD_SP.USER_CARD.CREATE'],
            ['用户删除会员卡事件通知', '/webhook/v3/BRAND_MEMBER_CARD_SP.USER_CARD.DELETE'],
            ['用户积分兑券事件通知', '/webhook/v3/BRAND_MEMBER_CARD_SP.POINT_EXCHANGE_COUPON'],
            ['用户积分同步事件通知', '/webhook/v3/BRAND_MEMBER_CARD_SP.SYNC_USER_POINT'],
          ].map(transArrayItem),
        },
        {
          text: '投诉',
          collapsed: true,
          items: [
            ['产生新投诉通知', '/webhook/v3/COMPLAINT.CREATE'],
            ['投诉状态变化通知', '/webhook/v3/COMPLAINT.STATE_CHANGE'],
          ].map(transArrayItem),
        },
        {
          text: '委托代扣',
          collapsed: true,
          items: [
            ['签约成功通知', '/webhook/v3/ENTRUST.SIGN'],
            ['解约问询通知', '/webhook/v3/ENTRUST.TERMINATE_INQUIRY'],
            ['解约成功通知', '/webhook/v3/ENTRUST.TERMINATE'],
            ['解约挽留信息通知', '/webhook/v3/ENTRUST.TERMINATE_RETENTION'],
          ].map(transArrayItem).concat({
            text: '保险商户委托代扣',
            collapsed: true,
            items: [
              ['签约成功通知', '/webhook/v3/INSURANCE_ENTRUST.SIGN'],
              ['解约成功通知', '/webhook/v3/INSURANCE_ENTRUST.TERMINATE'],
              ['续期完成通知', '/webhook/v3/INSURANCE_ENTRUST.RENEW'],
              ['支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#INSURANCE_ENTRUST'],
              ['支付失败通知', '/webhook/v3/TRANSACTION.FAIL#INSURANCE_ENTRUST'],
            ].map(transArrayItem),
          }).concat({
            text: '校园轻松付',
            collapsed: true,
            items: [
              ['用户签约成功通知', '/webhook/v3/PAYSCORE.USER_OPEN_SERVICE#EDUSCHOOLPAY'],
              ['用户解约成功通知', '/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE#EDUSCHOOLPAY'],
              ['用户订单支付成功通知', '/webhook/v3/TRANSACTION.INDUSTRY_SUCCESS'],
              ['用户订单支付失败通知', '/webhook/v3/TRANSACTION.INDUSTRY_FAILED'],
              ['用户欠款状态变化通知', '/webhook/v3/EDU_SCHOOL_PAY.USER_DEBT_STATE_UPDATE'],
              ['用户还款通知', '/webhook/v3/TRANSACTION.PAY_BACK#EDUSCHOOLPAY'],
            ].map(transArrayItem),
          }).concat({
            text: '教育续费通',
            collapsed: true,
            items: [
              ['签约成功通知', '/webhook/v3/ENTRUST.SIGNING'],
              ['解约成功通知', '/webhook/v3/ENTRUST.RELEASE'],
            ].map(transArrayItem),
          }).concat({
            text: '停车服务',
            collapsed: true,
            items: [
              ['停车入场状态变更通知', '/webhook/v3/VEHICLE.ENTRANCE_STATE_CHANGE'],
              ['订单支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#PARKING'],
              ['订单支付失败通知', '/webhook/v3/TRANSACTION.FAIL#PARKING'],
              ['用户还款通知', '/webhook/v3/TRANSACTION.PAY_BACK#PARKING'],
            ].map(transArrayItem),
          }).concat({
            text: 'ETC授权',
            collapsed: true,
            items: [
              ['签约状态变化通知', '/webhook/v3/VEHICLE.USER_STATE_CHANGE'],
            ].map(transArrayItem),
          }),
        },
        {
          text: '微信支付分',
          collapsed: true,
          items: [
            ['用户授权成功通知', '/webhook/v3/PAYSCORE.USER_OPEN_SERVICE'],
            ['用户解除授权通知', '/webhook/v3/PAYSCORE.USER_CLOSE_SERVICE'],
            ['用户确认成功通知', '/webhook/v3/PAYSCORE.USER_CONFIRM'],
            ['用户支付成功通知', '/webhook/v3/PAYSCORE.USER_PAID'],
            ['账户绑定结果通知', '/webhook/v3/PAYSCORE.BIND_SERVICE_ACCOUNT']
          ].map(transArrayItem).concat({
            text: '签约计划',
            collapsed: true,
            items: [
              ['用户签约计划成功通知', '/webhook/v3/PAYSCORE.USER_SIGN_PLAN'],
              ['用户取消已签约的计划通知', '/webhook/v3/PAYSCORE.USER_CANCEL_SIGN_PLAN'],
            ].map(transArrayItem),
          }).concat([
            ['智慧零售/先享后付订单确认', '/webhook/v3/PAYSCORE.USER_ACCEPTED'],
          ].map(transArrayItem)).concat({
            text: '微信先享卡',
            collapsed: true,
            items: [
              ['用户领卡通知(预受理领卡)', '/webhook/v3/DISCOUNT_CARD.USER_ACCEPTED'],
              ['用户领卡通知(模板配置)', '/webhook/v3/DISCOUNT_CARD.GET_CARD'],
              ['守约状态变化通知', '/webhook/v3/DISCOUNT_CARD.AGREEMENT_ENDED'],
              ['扣费状态变化通知', '/webhook/v3/DISCOUNT_CARD.USER_PAID'],
              ['用户结算通知', '/webhook/v3/DISCOUNT_CARD.SETTLEMENT'],
            ].map(transArrayItem),
          }),
        },
        {
          text: '违规',
          collapsed: true,
          items: [
            ['处罚二级商户通知', '/webhook/v3/VIOLATION.PUNISH'],
            ['拦截二级商户通知', '/webhook/v3/VIOLATION.INTERCEPT'],
            ['二级商户申诉通知', '/webhook/v3/VIOLATION.APPEAL'],
          ].map(transArrayItem),
        },
        {
          text: '商户管理记录',
          collapsed: true,
          items: [
            ['商户管理记录通知', '/webhook/v3/MANAGERECORD.CHANGE'],
            ['交易拦截记录通知', '/webhook/v3/BLOCKRECORD.CHANGE'],
            ['交易拦截申诉通知', '/webhook/v3/BLOCKSUBMISSION.CHANGE'],
          ].map(transArrayItem),
        },
        {
          text: '订阅服务通知',
          collapsed: true,
          items: [
            ['合作伙伴订阅通知', '/webhook/v3/MERCHANT_NOTIFY.NOTIFY'],
          ].map(transArrayItem),
        },
        {
          text: '跨境/全球',
          collapsed: true,
          items: [
            ['H5支付权限申请事件回调通知', '/webhook/v3/APPLYMENT_STATE.APPROVED'],
            ['支付成功通知', '/webhook/v3/TRANSACTION.SUCCESS#GLOBAL'],
            ['退款成功通知', '/webhook/v3/REFUND.SUCCESS#GLOBAL'],
            ['委托代扣签约成功通知', '/webhook/v3/PAPAY.SIGN'],
            ['委托代扣解约成功通知', '/webhook/v3/PAPAY.TERMINATE'],
          ].map(transArrayItem),
        },
      ],
    },
  ]);
  return cache.get(key);
}

function devkitSidebar() {
  const key = 'ebikeInstitutionSidebar';
  cache.has(key) || cache.set(key, [
    {
      text: '核心代码包',
      link: '#core',
      collapsed: false,
      items: [],
    },
    {
      text: '静态分析及测试',
      link: '#tests',
      collapsed: false,
      items: [],
    },
    {
      text: 'IDE代码提示包',
      link: '#ext',
      collapsed: false,
      items: [],
    },
  ]);
  return cache.get(key);
}
