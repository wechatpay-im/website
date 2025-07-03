---
title: 商户关单
description: 还款单支付订单只能使用此还款单关单api完成关单。还款单支付关单接口不支持关闭部分还款单， 关单的还款单订单号、还款单发起商户号、还款明细单个数、还款明细单订单号、子商户号必须与下单时完全一致。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_out_trade_no {data-required} | string | 还款单订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_orders {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 还款明细单信息列表
| mchid {data-required data-indent=2} | string | 还款单发起商户号
| out_trade_no {data-required data-indent=2} | string | 还款明细单订单号
| sub_mchid {data-indent=2} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->repayment->combineTransactions->partner->outTradeNo->_combine_out_trade_no_->close->postAsync([
  'combine_out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'sub_orders' => [[
      'mchid'        => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}/close')->postAsync([
  'combine_out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'sub_orders' => [[
      'mchid'        => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}/close']->postAsync([
  'combine_out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'sub_orders' => [[
      'mchid'        => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->repayment->combineTransactions->partner->outTradeNo->_combine_out_trade_no_->close->post([
  'combine_out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'sub_orders' => [[
      'mchid'        => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}/close')->post([
  'combine_out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'sub_orders' => [[
      'mchid'        => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/repayment/combine-transactions/partner/out-trade-no/{combine_out_trade_no}/close']->post([
  'combine_out_trade_no' => '1217752501201407033233368018',
  'json' => [
    'sub_orders' => [[
      'mchid'        => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015124497)
