---
title: 报名周周惠活动
description: 报名周周惠活动
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| applying_merchant_id {data-required data-indent=1} | integer | 报名商户号
| store_id {data-required data-indent=1} | integer | 报名商户门店号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->weeklyDiscount->activities->_activity_id_->apply->postAsync([
  'activity_id' => '11111',
  'json' => [
    'applying_merchant_id' => 10000098,
    'store_id' => 111111,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/weekly-discount/activities/{activity_id}/apply')->postAsync([
  'activity_id' => '11111',
  'json' => [
    'applying_merchant_id' => 10000098,
    'store_id' => 111111,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/weekly-discount/activities/{activity_id}/apply']->postAsync([
  'activity_id' => '11111',
  'json' => [
    'applying_merchant_id' => 10000098,
    'store_id' => 111111,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->weeklyDiscount->activities->_activity_id_->apply->post([
  'activity_id' => '11111',
  'json' => [
    'applying_merchant_id' => 10000098,
    'store_id' => 111111,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/weekly-discount/activities/{activity_id}/apply')->post([
  'activity_id' => '11111',
  'json' => [
    'applying_merchant_id' => 10000098,
    'store_id' => 111111,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/weekly-discount/activities/{activity_id}/apply']->post([
  'activity_id' => '11111',
  'json' => [
    'applying_merchant_id' => 10000098,
    'store_id' => 111111,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required}| integer | 报名成功的活动ID
| success_time {data-required}| string | 报名成功时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter6_1_1.shtml)
