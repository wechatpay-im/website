---
title: 同业过滤标签管理
description: 服务商使用此接口为特约商户配置同业过滤标签，防止特约商户支付后出现同行业的广告内容。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 特约子商户号
| advertising_industry_filters {data-indent=1} | string[] | 子商户同业过滤的同业过滤标签值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->goldplan->merchants->setAdvertisingIndustryFilter->postAsync([
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
$instance->chain('v3/goldplan/merchants/set-advertising-industry-filter')->postAsync([
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
$instance['v3/goldplan/merchants/set-advertising-industry-filter']->postAsync([
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
$response = $instance->v3->goldplan->merchants->setAdvertisingIndustryFilter->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/goldplan/merchants/set-advertising-industry-filter')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'advertising_industry_filters' => ['string'],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/goldplan/merchants/set-advertising-industry-filter']->post([
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/goldplan/chapter3_3.shtml)