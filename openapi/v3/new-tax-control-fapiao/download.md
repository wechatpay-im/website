---
title: 下载发票文件
description: 调用【获取发票下载信息】接口后，调用该接口下载发票文件。该接口不支持签名和验签。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :warning: {.im-parsed}

本接口依赖前序 [获取下载地址](/openapi/v3/new-tax-control-fapiao/fapiao-applications/{fapiao_apply_id}/fapiao-files) 接口返回的 `download_url`，其中下载地址的域名，路径，参数都可能变化，此文档仅做实现参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| token {data-required data-indent=1} | string | 前序`download_url`的查询参数
| mchid {data-required data-indent=1} | string | 商户号
| openid {data-required data-indent=1} | string | 通过查询电子发票接口获取的`card_openid`
| invoice_code {data-required data-indent=1} | string | 发票代码
| invoice_no {data-required data-indent=1} | string | 发票号码
| fapiao_id {data-required data-indent=1} | string | 唯一标识一张发票

{.im-table #request}

::: code-group

```php [异步模式]
$downloadUrl = 'https://pay.wechatpay.cn/invoicing/fapiao/fapiao-file?token=xxxxxx';

$client = new \GuzzleHttp\Client();
$client->getAsync($downloadUrl, [
  'sink' => './invoice.pdf',
])
->wait();
```

```php [同步模式]
$downloadUrl = 'https://pay.wechatpay.cn/invoicing/fapiao/fapiao-file?token=xxxxxx';

$client = new \GuzzleHttp\Client();
$client->get($downloadUrl, [
  'sink' => './invoice.pdf',
]);
```

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(保存后按本地PDF文件查看) {align=center colspan=3}

{.im-table #response}

参阅
- [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-applications/download-invoice-file.html)
- [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/download-invoice-file.html)
- [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012286040)
- [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012071750)
