---
title: 图片上传
description: 商品券接口调用过程中需要传入各种图片URL，请使用本接口上传图片到微信支付，并使用接口返回的URL。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body {data-required} | object | `multipart/form-data` 数据结构
| file {data-required data-indent=1} | object | 媒体图⽚只⽀持JPG、BMP、PNG格式，⽂件⼤⼩不能超过2M。
| meta {data-required data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded-by=json_encode}  | 媒体文件元信息，使用`JSON`表示，包含两个参数：`sha256`、`filename`
| {colspan=3 .im-table-line}
| sha256 {data-required data-indent=2} | string | 图片文件的`sha256`摘要
| filename {data-required data-indent=2} | string | 商户上传的媒体图片的名称，商户自定义，必须以JPG、BMP、PNG为后缀

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance->v3->marketing->partner->productCoupon->media->uploadImage->postAsync([
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

$instance->chain('v3/marketing/partner/product-coupon/media/upload-image')->postAsync([
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

$instance['v3/marketing/partner/product-coupon/media/upload-image']->postAsync([
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

$response = $instance->v3->marketing->partner->productCoupon->media->uploadImage->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance->chain('v3/marketing/partner/product-coupon/media/upload-image')->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance['v3/marketing/partner/product-coupon/media/upload-image']->post([
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
| media_url {data-required} | string | 媒体文件URL地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781275)
