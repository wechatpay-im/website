---
title: 申请扣款接口
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| auth_code {data-indent=1} | string | 
| sp_appid {data-indent=1} | string | 
| sp_mchid {data-indent=1} | string | 
| sub_appid {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 
| amount {data-indent=1} | object | 
| total {data-indent=2} | integer | 
| currency {data-indent=2} | string | 
| scene_info {data-indent=1} | object | 
| device_ip {data-indent=2} | string | 
| goods_tag {data-indent=1} | string | 
| description {data-indent=1} | string | 
| attach {data-indent=1} | string | 
| settle_info {data-indent=1} | object | 
| profit_sharing {data-indent=2} | boolean | 
| out_trade_no {data-indent=1} | string | 
| business {data-indent=1} | object | 
| business_product_id {data-indent=2} | integer | 
| business_scene_id {data-indent=2} | integer | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->transactions->postAsync([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/transactions')->postAsync([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/transactions']->postAsync([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->transactions->post([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/transactions')->post([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/transactions']->post([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_appid | string | 
| sp_mchid | string | 
| sub_appid | string | 
| sub_mchid | string | 
| payer | object | 
| sp_openid {data-indent=1} | string | 
| sub_openid {data-indent=1} | string | 
| amount | object | 
| total {data-indent=1} | integer | 
| currency {data-indent=1} | string | 
| promotion_detail | object[] | 
| scene_info | object | 
| device_ip {data-indent=1} | string | 
| bank_type | string | 
| trade_type | string | 
| trade_state | string | 
| trade_state_description | string | 
| debt_state | string | 
| description | string | 
| attach | string | 
| success_time | string | 
| transaction_id | string | 
| repayment_transaction_id | string | 
| out_trade_no | string | 
| error_type | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
