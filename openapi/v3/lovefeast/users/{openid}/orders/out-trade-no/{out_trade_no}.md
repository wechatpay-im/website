---
title: 查询用户捐赠单详情
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 用户在商户AppID下的唯一标识
| out_trade_no | string | 商户系统内部订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->lovefeast->users->_openid_->orders->outTradeNo->_out_trade_no_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->lovefeast->users->_openid_->orders->outTradeNo->_out_trade_no_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/lovefeast/users/{openid}/orders/out-trade-no/{out_trade_no}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| welfare_trade_id | string | 
| appid | string | 
| sub_appid | string | 
| brand_id | string | 
| donate_source | string | `MINIPROGRAM_PAY` \| `ENTRUST_PAY` 枚举值之一
| merchant_order | string | 
| institution_name | string | 
| business_id | string | 
| business_name | string | 
| success_time | string | 
| payer | object | 
| openid {data-indent=1} | string | 
| sub_openid {data-indent=1} | string | 
| avatar {data-indent=1} | string | 
| nickname {data-indent=1} | string | 
| amount | object | 
| device_id | string | 

{.im-table #response}

参阅 情
