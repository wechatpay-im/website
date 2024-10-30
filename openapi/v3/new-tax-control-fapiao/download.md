---
title: 下载发票文件
description: 调用【获取发票下载信息】接口后，调用该接口下载发票文件。该接口不支持签名和验签。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步模式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./invoice.pdf', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);
$client = new \GuzzleHttp\Client();
$url = 'https://pay.wechatpay.cn/invoicing/fapiao/fapiao-file?token=xxxxxx';

$client->getAsync($url, [
  'sink' => $stream,
])
->wait();
```

```php [同步模式]
$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./invoice.pdf', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);
$client = new \GuzzleHttp\Client();
$url = 'https://pay.wechatpay.cn/invoicing/fapiao/fapiao-file?token=xxxxxx';

$client->get($url, [
  'sink' => $stream,
]);
```


| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(保存后按本地PDF文件查看) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/fapiao/fapiao-applications/download-invoice-file.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/fapiao/fapiao-applications/download-invoice-file.html)
