---
title: 开通广告展示
description: 此接口为特约商户的点金计划页面开通广告展示功能，可同时配置同业过滤标签，防止特约商户支付后出现同行业的广告内容。
---

# {{ $frontmatter.title }} {#patch}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约商户号
| advertising_industry_filters {data-indent=1} | string[] | 子商户同业过滤的同业过滤标签值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->goldplan->merchants->openAdvertisingShow->patchAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/goldplan/merchants/open-advertising-show')->patchAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/goldplan/merchants/open-advertising-show']->patchAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->goldplan->merchants->openAdvertisingShow->patch([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/goldplan/merchants/open-advertising-show')->patch([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/goldplan/merchants/open-advertising-show']->patch([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_5_4.shtml)
