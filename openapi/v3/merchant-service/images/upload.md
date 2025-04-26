---
title: 商户上传反馈图片
description: 商户上传反馈图片的接口。 将媒体图片进行二进制转换，得到的媒体图片二进制内容，在请求body中上传此二进制内容。 媒体图片只支持jpg、png、bmp格式，文件大小不能超过2M。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body {data-required} | object | `multipart/form-data` 数据结构
| file {data-required data-indent=1} | object | 媒体图⽚只⽀持JPG、BMP、PNG格式，⽂件⼤⼩不能超过2M。
| meta {data-required data-indent=1} | string | 媒体文件元信息，使用json表示，包含两个参数：`sha256`、`filename`
| {colspan=3 .im-table-line}
| sha256 {data-required data-indent=2} | string | 图片文件的`sha256`摘要
| filename {data-required data-indent=2} | string | 商户上传的媒体图片的名称，商户自定义，必须以JPG、BMP、PNG为后缀

{.im-table #request}

::: code-group

```php [异步纯链式]
$media   = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance->v3->merchantService->images->upload->postAsync([
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
$media   = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance->chain('v3/merchant-service/images/upload')->postAsync([
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
$media   = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance['v3/merchant-service/images/upload']->postAsync([
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
$media   = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance->v3->merchantService->images->upload->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media   = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance->chain('v3/merchant-service/images/upload')->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media   = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance['v3/merchant-service/images/upload']->post([
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
| media_id {data-required} | string | 媒体文件标识ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012467250) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467222)
