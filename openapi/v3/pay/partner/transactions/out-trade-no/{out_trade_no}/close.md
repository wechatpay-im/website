---
title: 关单
description: 以下情况需要调用关单接口：商户订单支付失败需要生成新单号重新发起支付，要对原订单号调用关单，避免重复支付；系统下单后，用户支付超时，系统退出不再受理，避免用户继续，请调用关单接口。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->partner->transactions->outTradeNo->_out_trade_no_->close->postAsync([
  'out_trade_no' => '',
  'json' => [
    'sp_mchid' => '1230000109',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close')->postAsync([
  'out_trade_no' => '',
  'json' => [
    'sp_mchid' => '1230000109',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close']->postAsync([
  'out_trade_no' => '',
  'json' => [
    'sp_mchid' => '1230000109',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->partner->transactions->outTradeNo->_out_trade_no_->close->post([
  'out_trade_no' => '',
  'json' => [
    'sp_mchid' => '1230000109',
    'sub_mchid' => '1900000109',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close')->post([
  'out_trade_no' => '',
  'json' => [
    'sp_mchid' => '1230000109',
    'sub_mchid' => '1900000109',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/pay/partner/transactions/out-trade-no/{out_trade_no}/close']->post([
  'out_trade_no' => '',
  'json' => [
    'sp_mchid' => '1230000109',
    'sub_mchid' => '1900000109',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pay/transactions/chapter5_6.shtml)
