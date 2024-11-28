---
title: 查询订单剩余可退款金额
description: 若商户对于一笔分账支付订单发起多次分账后，可通过该API查询该笔订单的剩余未分的可退款金额和可使用垫付资金退款的金额。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| transaction_id {data-required} | string | 微信订单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->transactions->_transaction_id_->refundableAmounts->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'transaction_id' => '4208450740201411110007820472',
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
$instance->chain('v3/global/profit-sharing/transactions/{transaction_id}/refundable-amounts')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'transaction_id' => '4208450740201411110007820472',
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
$instance['v3/global/profit-sharing/transactions/{transaction_id}/refundable-amounts']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'transaction_id' => '4208450740201411110007820472',
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
$response = $instance->v3->global->profitSharing->transactions->_transaction_id_->refundableAmounts->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/transactions/{transaction_id}/refundable-amounts')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/transactions/{transaction_id}/refundable-amounts']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'transaction_id' => '4208450740201411110007820472',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| transaction_id {data-required} | string | 微信订单号
| refundable_amount | integer | 订单剩余可退款金额
| currency | string | 货币类型
| funds_refundable_amount | integer | 订单剩余可使用垫付资金退款的金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_12.shtml)
