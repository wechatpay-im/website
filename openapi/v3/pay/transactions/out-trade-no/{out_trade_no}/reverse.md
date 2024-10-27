---
title: 撤销
description: 支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no | string | 商户订单号
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 应用AppID
| mchid {data-indent=1} | string | 直连商户号

{.im-table #request}


::: code-group
```php [异步纯链式]
$instance->v3->pay->transactions->outTradeNo->_out_trade_no_->reverse->postAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/transactions/out-trade-no/{out_trade_no}/reverse')->postAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/transactions/out-trade-no/{out_trade_no}/reverse']->postAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->transactions->outTradeNo->_out_trade_no_->reverse->post([
  'out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/transactions/out-trade-no/{out_trade_no}/reverse')->post([
  'out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/transactions/out-trade-no/{out_trade_no}/reverse']->post([
  'out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 应用AppID
| mchid | string | 直连商户号
| out_trade_no | string | 商户订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/reverse.html)
