---
title: 上传出租车电子发票文件
description: 服务商调用插卡接口前，需调用本接口上传出租车电子发票文件来获取文件ID。文件ID有效期为3天，有效期内未成功调用插卡接口需重新调用本接口上传发票文件。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$meta = [
  'company_mchid'    => 'your_sub_mchid', //服务商模式下必传
  'region_id'        => 310100,
  'digest_algorithm' => 'DIGEST_ALGORITHM_SM3',
  'digest'           => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($meta));

$instance->v3->taxiInvoice->cards->uploadFile->postAsync([
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
$json  = [
  'company_mchid'    => 'your_sub_mchid', //服务商模式下必传
  'region_id'        => 310100,
  'digest_algorithm' => 'DIGEST_ALGORITHM_SM3',
  'digest'           => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($json));

$instance->chain('v3/taxi-invoice/cards/upload-file')->postAsync([
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
$json  = [
  'company_mchid'    => 'your_sub_mchid', //服务商模式下必传
  'region_id'        => 310100,
  'digest_algorithm' => 'DIGEST_ALGORITHM_SM3',
  'digest'           => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($json));

$instance['v3/taxi-invoice/cards/upload-file']->postAsync([
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
$json  = [
  'company_mchid'    => 'your_sub_mchid', //服务商模式下必传
  'region_id'        => 310100,
  'digest_algorithm' => 'DIGEST_ALGORITHM_SM3',
  'digest'           => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($json));

$response = $instance->v3->taxiInvoice->cards->uploadFile->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$json  = [
  'company_mchid'    => 'your_sub_mchid', //服务商模式下必传
  'region_id'        => 310100,
  'digest_algorithm' => 'DIGEST_ALGORITHM_SM3',
  'digest'           => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($json));

$response = $instance->chain('v3/taxi-invoice/cards/upload-file')->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/fapiao.pdf');
$json  = [
  'company_mchid'    => 'your_sub_mchid', //服务商模式下必传
  'region_id'        => 310100,
  'digest_algorithm' => 'DIGEST_ALGORITHM_SM3',
  'digest'           => 'your_fapiao_pdf_sm3_string',
];
$media->setMeta(\json_encode($json));

$response = $instance['v3/taxi-invoice/cards/upload-file']->post([
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
| fapiao_media_id | string | 出租车电子发票文件ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/taxi-invoice-card/upload-taxi-invoice-card-file.html)
