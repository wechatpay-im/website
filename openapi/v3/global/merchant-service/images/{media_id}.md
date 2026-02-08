---
title: 图片下载
description: 下载图片API为通用接口，消费者投诉相关图片都可以通过该接口进行下载。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| media_id {data-required} | string | 媒体文件ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| complaint_id {data-required data-indent=1} | string | 投诉单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$mediaUrl = 'https://apihk.mch.weixin.qq.com/v3/global/merchant-service/images/xxxxx';
$uri      = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment  = \substr($uri->getPath(), 35);

$instance->v3->global->merchantService->images->_media_id_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink'     => './image.jpg',
  'media_id' => \rawurldecode($segment),
  'query' => [
    'complaint_id' => '200201820200101080076610000',
  ],
])
->wait();
```

```php [异步声明式]
$mediaUrl = 'https://apihk.mch.weixin.qq.com/v3/global/merchant-service/images/xxxxx';
$uri      = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment  = \substr($uri->getPath(), 35);

$instance->chain('v3/global/merchant-service/images/{media_id}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink'     => './image.jpg',
  'media_id' => \rawurldecode($segment),
  'query' => [
    'complaint_id' => '200201820200101080076610000',
  ],
])
->wait();
```

```php [异步属性式]
$mediaUrl = 'https://apihk.mch.weixin.qq.com/v3/global/merchant-service/images/xxxxx';
$uri      = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment  = \substr($uri->getPath(), 35);

$instance['v3/global/merchant-service/images/{media_id}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink'     => './image.jpg',
  'media_id' => \rawurldecode($segment),
  'query' => [
    'complaint_id' => '200201820200101080076610000',
  ],
])
->wait();
```

```php [同步纯链式]
$mediaUrl = 'https://apihk.mch.weixin.qq.com/v3/global/merchant-service/images/xxxxx';
$uri      = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment  = \substr($uri->getPath(), 35);

$response = $instance->v3->global->merchantService->images->_media_id_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink'     => './image.jpg',
  'media_id' => \rawurldecode($segment),
  'query' => [
    'complaint_id' => '200201820200101080076610000',
  ],
]);
```

```php [同步声明式]
$mediaUrl = 'https://apihk.mch.weixin.qq.com/v3/global/merchant-service/images/xxxxx';
$uri      = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment  = \substr($uri->getPath(), 35);

$response = $instance->chain('v3/global/merchant-service/images/{media_id}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink'     => './image.jpg',
  'media_id' => \rawurldecode($segment),
  'query' => [
    'complaint_id' => '200201820200101080076610000',
  ],
]);
```

```php [同步属性式]
$mediaUrl = 'https://apihk.mch.weixin.qq.com/v3/global/merchant-service/images/xxxxx';
$uri      = new \GuzzleHttp\Psr7\Uri($mediaUrl);
$segment  = \substr($uri->getPath(), 35);

$response = $instance['v3/global/merchant-service/images/{media_id}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'sink'     => './image.jpg',
  'media_id' => \rawurldecode($segment),
  'query' => [
    'complaint_id' => '200201820200101080076610000',
  ],
]);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 文件流(保存后按本地图片查看) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://docs.qq.com/doc/DTlpoQlhMWXpzZ2NF?nlc=1)
