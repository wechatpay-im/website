---
title: 视频上传
description: 部分微信支付业务指定商户使用视频上传API来上报视频信息，从而获得必传参数的值：视频MediaID 。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| body {data-required} | object | `multipart/form-data` 数据结构
| file {data-required data-indent=1} | object | 媒体视频只支持avi、wmv、mpeg、mp4、mov、mkv、flv、f4v、m4v、rmvb格式，文件大小不能超过5M。
| meta {data-required data-indent=1} | string | 媒体文件元信息，使用json表示，包含两个参数：`sha256`、`filename`
| {colspan=3 .im-table-line}
| sha256 {data-required data-indent=2} | string | 视频文件的`sha256`摘要
| filename {data-required data-indent=2} | string | 文件名称，商户上传的媒体视频的名称，商户自定义，必须以avi、wmv、mpeg、mp4、mov、mkv、flv、f4v、m4v、rmvb为后缀。

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
| media_id {data-required} | string | 媒体文件标识Id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/tool/chapter3_2.shtml)
