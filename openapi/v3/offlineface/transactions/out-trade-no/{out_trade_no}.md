---
title: 查单接口
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no | undefined | 
| query | object | 声明请求的查询参数
| sp_mchid {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 
| business_product_id {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '',
  'query' => [
    'sp_mchid' => '',
    'sub_mchid' => '',
    'business_product_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '',
  'query' => [
    'sp_mchid' => '',
    'sub_mchid' => '',
    'business_product_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '',
  'query' => [
    'sp_mchid' => '',
    'sub_mchid' => '',
    'business_product_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '',
  'query' => [
    'sp_mchid' => '',
    'sub_mchid' => '',
    'business_product_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '',
  'query' => [
    'sp_mchid' => '',
    'sub_mchid' => '',
    'business_product_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '',
  'query' => [
    'sp_mchid' => '',
    'sub_mchid' => '',
    'business_product_id' => '',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
