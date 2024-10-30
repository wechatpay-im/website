---
title: 图片下载
description: 下载图片API为通用接口，消费者投诉相关图片都可以通过该接口进行下载。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| media_id | string | 媒体文件ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$mediaUrl = 'https://api.mch.weixin.qq.com/v3/merchant-service/images/xxxxx';
$uri = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment = \substr($uri->getPath(), 28);

$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./image.jpg', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->merchantService->images->_media_id_->getAsync([
  'sink' => $stream,
  'media_id' => \rawurldecode($segment),
])
->wait();
```

```php [异步声明式]
$mediaUrl = 'https://api.mch.weixin.qq.com/v3/merchant-service/images/xxxxx';
$uri = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment = \substr($uri->getPath(), 28);

$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./image.jpg', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/merchant-service/images/{media_id}')->getAsync([
  'sink' => $stream,
  'media_id' => \rawurldecode($segment),
])
->wait();
```

```php [异步属性式]
$mediaUrl = 'https://api.mch.weixin.qq.com/v3/merchant-service/images/xxxxx';
$uri = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment = \substr($uri->getPath(), 28);

$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./image.jpg', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/merchant-service/images/{media_id}']->getAsync([
  'sink' => $stream,
  'media_id' => \rawurldecode($segment),
])
->wait();
```

```php [同步纯链式]
$mediaUrl = 'https://api.mch.weixin.qq.com/v3/merchant-service/images/xxxxx';
$uri = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment = \substr($uri->getPath(), 28);

$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./image.jpg', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->v3->merchantService->images->_media_id_->get([
  'sink' => $stream,
  'media_id' => \rawurldecode($segment),
]);
```

```php [同步声明式]
$mediaUrl = 'https://api.mch.weixin.qq.com/v3/merchant-service/images/xxxxx';
$uri = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment = \substr($uri->getPath(), 28);

$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./image.jpg', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance->chain('v3/merchant-service/images/{media_id}')->get([
  'sink' => $stream,
  'media_id' => \rawurldecode($segment),
]);
```

```php [同步属性式]
$mediaUrl = 'https://api.mch.weixin.qq.com/v3/merchant-service/images/xxxxx';
$uri = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment = \substr($uri->getPath(), 28);

$savedTo = \GuzzleHttp\Psr7\Utils::tryFopen('./image.jpg', 'w+');
$stream  = \GuzzleHttp\Psr7\Utils::streamFor($savedTo);

$instance['v3/merchant-service/images/{media_id}']->get([
  'sink' => $stream,
  'media_id' => \rawurldecode($segment),
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(保存后按本地图片查看) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/consumer-complaint/images/query-images.html) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/consumer-complaint/images/query-images.html)