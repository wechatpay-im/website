---
title: 视频上传
description: 部分微信支付业务指定商户需要使用图片上传 部分微信支付业务指定商户需要使用视频上传 API来上报视频信息，从而获得必传参数的值：视频MediaID 。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/video.mp4');

$instance->v3->merchant->media->video_upload->postAsync([
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/video.mp4');

$instance->chain('v3/merchant/media/video_upload')->postAsync([
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/video.mp4');

$instance['v3/merchant/media/video_upload']->postAsync([
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/video.mp4');

$response = $instance->v3->merchant->media->video_upload->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/video.mp4');

$response = $instance->chain('v3/merchant/media/video_upload')->post([
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/video.mp4');

$response = $instance['v3/merchant/media/video_upload']->post([
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_2.shtml)