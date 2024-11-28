---
title: 撤销订单(商户订单号)
description: 支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，微信支付系统会将此订单关闭；如果用户支付成功，微信支付系统会将此订单资金退还给用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| out_trade_no {data-required} | string | 商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transactions->outTradeNo->_out_trade_no_->reverse->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transactions/out-trade-no/{out_trade_no}/reverse')->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/transactions/out-trade-no/{out_trade_no}/reverse']->postAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'out_trade_no' => '1217752501201407033233368018',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transactions->outTradeNo->_out_trade_no_->reverse->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/transactions/out-trade-no/{out_trade_no}/reverse')->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/transactions/out-trade-no/{out_trade_no}/reverse']->post([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'json' => [
    'mchid'     => '1900000109',
    'sp_mchid'  => '1900000100',
    'sub_mchid' => '1900000109',
  ],
  'out_trade_no' => '1217752501201407033233368018',
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/fusion_wallet_ch/QuickPay/chapter3_4.shtml)
