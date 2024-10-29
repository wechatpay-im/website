---
title: 查询用户捐赠单列表
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 用户在商户AppID下的唯一标识
| brand_id | string | 品牌ID
| query | object | 声明请求的查询参数
| offset {data-indent=1} | integer | 请求资源起始位置
| limit {data-indent=1} | integer | 最大资源条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->lovefeast->users->_openid_->orders->brandId->_brand_id_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->lovefeast->users->_openid_->orders->brandId->_brand_id_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| count | integer | 
| limit | integer | 
| offset | integer | 
| total_count | integer | 
| data | object[] | 
| welfare_trade_id {data-indent=1} | string | 
| appid {data-indent=1} | string | 
| sub_appid {data-indent=1} | string | 
| brand_id {data-indent=1} | string | 
| donate_source {data-indent=1} | string | 
| merchant_order {data-indent=1} | string | 
| institution_name {data-indent=1} | string | 
| business_id {data-indent=1} | string | 
| business_name {data-indent=1} | string | 
| success_time {data-indent=1} | string | 
| payer {data-indent=1} | object | 
| openid {data-indent=2} | string | 
| sub_openid {data-indent=2} | string | 
| avatar {data-indent=2} | string | 
| nickname {data-indent=2} | string | 
| amount {data-indent=1} | object | 
| total {data-indent=2} | number | 
| payer_total {data-indent=2} | number | 
| currency {data-indent=2} | string | 
| payer_currency {data-indent=2} | string | 
| device_id {data-indent=1} | string | 

{.im-table #response}

参阅 表
