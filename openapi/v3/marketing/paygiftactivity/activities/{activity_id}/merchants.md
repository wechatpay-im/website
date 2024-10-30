---
title: 查询活动发券商户号
description: 商户创建活动后，可以通过该接口查询支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 活动id
| query | object | 声明请求的查询参数
| offset {data-indent=1} | integer | 
| limit {data-indent=1} | integer | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants')->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants']->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->get([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants')->get([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants']->get([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset | integer | 
| limit | integer | 
| total_count | integer | 
| activity_id | string | 
| data | object[] | 
| mchid {data-indent=1} | string | 
| merchant_name {data-indent=1} | string | 
| create_time {data-indent=1} | string | 
| update_time {data-indent=1} | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_5.shtml)
