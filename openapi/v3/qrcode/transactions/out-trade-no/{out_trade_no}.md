---
title: 查询订单
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no | string | 商户系统内部订单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 微信支付分配的子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->qrcode->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/qrcode/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/qrcode/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->qrcode->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/qrcode/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/qrcode/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '20150806125346',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 
| sub_appid | string | 
| sp_mchid | string | 
| sub_mchid | string | 
| description | string | 
| create_time | string | 
| out_trade_no | string | 
| transaction_id | string | 
| trade_state | string | 
| trade_state_description | string | 
| success_time | string | 
| bank_type | string | 
| user_repay_state | string | 
| repay_transaction_id | string | 
| repay_time | string | 
| attach | string | 
| contract_id | string | 
| trade_scene | string | 
| bus_info | object | 
| start_time {data-indent=1} | string | 用户乘车时间（上车）
| line_name {data-indent=1} | string | 乘车路线
| plate_number {data-indent=1} | string | 车牌号。
| metro_info | object | 
| start_time {data-indent=1} | string | 用户乘车时间（上车）
| end_time {data-indent=1} | string | 用户下车时间
| start_station {data-indent=1} | string | 乘车起始站
| end_station {data-indent=1} | string | 乘车终点站
| amount | object | 
| promotion_detail | object[] | 
| coupon_id {data-indent=1} | string | 
| name {data-indent=1} | string | 
| scope {data-indent=1} | string | 
| type {data-indent=1} | string | 
| stock_id {data-indent=1} | string | 
| amount {data-indent=1} | integer | 
| wechatpay_contribute {data-indent=1} | integer | 
| merchant_contribute {data-indent=1} | integer | 
| other_contribute {data-indent=1} | integer | 
| currency {data-indent=1} | string | 

{.im-table #response}

参阅 息
