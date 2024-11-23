---
title: 上传电子发票文件
description: 调用【将电子发票插入微信用户卡包】接口之前，需要先调用本接口上传电子发票文件，获取文件ID。上传的发票文件会在三天后过期，因此上传后请尽快调用【将电子发票插入微信用户卡包】接口执行插入微信用户卡包的操作。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body {data-required} | object | `multipart/form-data` 数据结构
| file {data-required data-indent=1} | object | 电子发票文件二进制数据流，只支持`PDF`和`OFD`格式，文件大小不能超过2M。
| meta {data-required data-indent=1} | string | 媒体文件元信息，使用json表示
| {colspan=3 .im-table-line}
| sub_mchid {data-indent=2} | string | 微信支付分配的子商户号，服务商模式下必传
| file_type {data-required data-indent=2} | string | 发票文件的类型
| digest_algorithm {data-required data-indent=2} | string | 文件摘要算法 `SM3`枚举值
| digest {data-required data-indent=2} | string | 文件的`SM3`摘要

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'sub_mchid' => 'your_sub_mchid',
  'file_type' => 'PDF',
  'digest_algorithm' => 'SM3',
  'digest' => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$instance->v3->newTaxControlFapiao->fapiaoApplications->uploadFapiaoFile->postAsync([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'sub_mchid' => 'your_sub_mchid',
  'file_type' => 'PDF',
  'digest_algorithm' => 'SM3',
  'digest' => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$instance->chain('v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file')->postAsync([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'sub_mchid' => 'your_sub_mchid',
  'file_type' => 'PDF',
  'digest_algorithm' => 'SM3',
  'digest' => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$instance['v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file']->postAsync([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'sub_mchid' => 'your_sub_mchid',
  'file_type' => 'PDF',
  'digest_algorithm' => 'SM3',
  'digest' => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$response = $instance->v3->newTaxControlFapiao->fapiaoApplications->uploadFapiaoFile->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'sub_mchid' => 'your_sub_mchid',
  'file_type' => 'PDF',
  'digest_algorithm' => 'SM3',
  'digest' => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$response = $instance->chain('v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file')->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'sub_mchid' => 'your_sub_mchid',
  'file_type' => 'PDF',
  'digest_algorithm' => 'SM3',
  'digest' => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$response = $instance['v3/new-tax-control-fapiao/fapiao-applications/upload-fapiao-file']->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| fapiao_media_id {data-required} | string | 电子发票文件ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_10.shtml)
