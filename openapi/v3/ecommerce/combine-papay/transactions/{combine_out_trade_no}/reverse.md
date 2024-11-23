---
title: 电商合单委托代扣撤销订单
description: 商户可以通过该接口发起免密的合单撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_out_trade_no {data-required} | string | 合单商户订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| combine_appid {data-required data-indent=1} | string | 合单商户APPID
| sub_orders {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 子单信息
| mchid {data-required data-indent=2} | string | 子单商户号
| out_trade_no {data-required data-indent=2} | string | 子单商户订单号
| sub_mchid {data-required data-indent=2} | string | 二级商户号
| sub_appid {data-indent=2} | string | 二级商户appid

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->combinePapay->transactions->_combine_out_trade_no_->reverse->postAsync([
  'combine_out_trade_no' => 'P20150806125346',
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'sub_orders' => [[
      'mchid' => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'sub_appid' => 'wxd678efh567hg6787',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse')->postAsync([
  'combine_out_trade_no' => 'P20150806125346',
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'sub_orders' => [[
      'mchid' => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'sub_appid' => 'wxd678efh567hg6787',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse']->postAsync([
  'combine_out_trade_no' => 'P20150806125346',
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'sub_orders' => [[
      'mchid' => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'sub_appid' => 'wxd678efh567hg6787',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->combinePapay->transactions->_combine_out_trade_no_->reverse->post([
  'combine_out_trade_no' => 'P20150806125346',
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'sub_orders' => [[
      'mchid' => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'sub_appid' => 'wxd678efh567hg6787',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse')->post([
  'combine_out_trade_no' => 'P20150806125346',
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'sub_orders' => [[
      'mchid' => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'sub_appid' => 'wxd678efh567hg6787',
    ],],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/ecommerce/combine-papay/transactions/{combine_out_trade_no}/reverse']->post([
  'combine_out_trade_no' => 'P20150806125346',
  'json' => [
    'combine_appid' => 'wxd678efh567hg6787',
    'sub_orders' => [[
      'mchid' => '1900000109',
      'out_trade_no' => '20150806125346',
      'sub_mchid' => '1900000109',
      'sub_appid' => 'wxd678efh567hg6787',
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter5_5_5.shtml)
