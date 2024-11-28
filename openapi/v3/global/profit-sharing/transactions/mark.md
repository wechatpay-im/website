---
title: 分账标记
description: 商户在下单之前，调用该API来标记该笔商户订单后续会使用资金分账功能，在支付完成后该笔订单款项会被冻结在商户账户中，等待商户的分账指令或解冻剩余资金指令来执行资金的分发。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| out_trade_no {data-indent=1} | string | 商户订单号
| currency {data-indent=1} | string | 订单标价币种

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->transactions->mark->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'    => '1900000109',
    'out_trade_no' => 'P20150806125346',
    'currency'     => 'CNY',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/transactions/mark')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'    => '1900000109',
    'out_trade_no' => 'P20150806125346',
    'currency'     => 'CNY',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/transactions/mark']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'    => '1900000109',
    'out_trade_no' => 'P20150806125346',
    'currency'     => 'CNY',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->transactions->mark->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'    => '1900000109',
    'out_trade_no' => 'P20150806125346',
    'currency'     => 'CNY',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/transactions/mark')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'    => '1900000109',
    'out_trade_no' => 'P20150806125346',
    'currency'     => 'CNY',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/transactions/mark']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid'    => '1900000109',
    'out_trade_no' => 'P20150806125346',
    'currency'     => 'CNY',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_1.shtml)
