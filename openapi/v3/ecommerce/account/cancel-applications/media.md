---
title: 图片上传
description: 电商平台服务商调用注销申请接口时，需要先调用本接口上传相关的资料图片，获取图片ID后，再填写到注销申请请求中。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body | object | `multipart/form-data` 数据结构
| file {data-indent=1} | object | 媒体图⽚只⽀持JPG、BMP、PNG格式，⽂件⼤⼩不能超过2M。
| meta {data-indent=1} | string | 媒体文件元信息，使用json表示，包含两个参数：`file_digest`、`file_name`
| {colspan=3 .im-table-line}
| file_digest {data-indent=2} | string | 图片文件的`sha256`摘要
| file_name {data-indent=2} | string | 商户上传的媒体图片的名称，商户自定义，必须以JPG、BMP、PNG为后缀

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'image.jpg',
  'file_digest' => 'your_image_file_sha256_string'
]));

$instance->v3->ecommerce->account->cancelApplications->media->postAsync([
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
  'file_digest' => 'your_image_file_sha256_string'
]));

$instance->chain('v3/ecommerce/account/cancel-applications/media')->postAsync([
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
  'file_digest' => 'your_image_file_sha256_string'
]));

$instance['v3/ecommerce/account/cancel-applications/media']->postAsync([
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
  'file_digest' => 'your_image_file_sha256_string'
]));

$response = $instance->v3->ecommerce->account->cancelApplications->media->post([
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
  'file_digest' => 'your_image_file_sha256_string'
]));

$response = $instance->chain('v3/ecommerce/account/cancel-applications/media')->post([
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
  'file_digest' => 'your_image_file_sha256_string'
]));

$response = $instance['v3/ecommerce/account/cancel-applications/media']->post([
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
| media_id | string | 媒体文件标识Id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/media/upload-media.html)
