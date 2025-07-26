---
title: 上传尽调资料文件
description: 上传尽调资料文件
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| due_diligence_id {data-required} | string | 尽调单号
| body {data-required} | object | `multipart/form-data` 数据结构
| due_diligence_file {data-required data-indent=1} | object | 要上传的尽调资料文件
| meta {data-required data-indent=1} | string | 媒体文件元信息，使用json表示
| {colspan=3 .im-table-line}
| file_name {data-required data-indent=2} | string | 商户上传的媒体图片的名称
| file_digest {data-required data-indent=2} | string | 图片文件的`sha256`摘要
| sub_mchid {data-required data-indent=2} | string | 子商户号
| item_id {data-required data-indent=2} | number | 资料项唯一id

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string',
  'sub_mchid' => '1230001104',
  'item_id' => 130013
]));

$instance->v3->mchOperationManage->enhancedDueDiligence->_due_diligence_id_->upload->postAsync([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string',
  'sub_mchid' => '1230001104',
  'item_id' => 130013
]));

$instance->chain('v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/upload')->postAsync([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string',
  'sub_mchid' => '1230001104',
  'item_id' => 130013
]));

$instance['v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/upload']->postAsync([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string',
  'sub_mchid' => '1230001104',
  'item_id' => 130013
]));

$response = $instance->v3->mchOperationManage->enhancedDueDiligence->_due_diligence_id_->upload->post([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string',
  'sub_mchid' => '1230001104',
  'item_id' => 130013
]));

$response = $instance->chain('v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/upload')->post([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string',
  'sub_mchid' => '1230001104',
  'item_id' => 130013
]));

$response = $instance['v3/mch-operation-manage/enhanced-due-diligence/{due_diligence_id}/upload']->post([
  'due_diligence_id' => '123000110_2_2190381dakdajois1283i12jo',
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
| file_id {data-required} | string | 文件标识ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015631042)
