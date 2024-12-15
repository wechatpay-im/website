---
title: 查询分账结果
description: 发起分账请求后，可调用此接口查询分账结果；发起解冻剩余资金的请求后，可调用此接口查询解冻剩余资金的结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| out_order_no {data-required} | string | 商户分账单号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| transaction_id {data-indent=1} | string | 微信订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->orders->_out_order_no_->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_order_no' => 'P20150806125346',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/orders/{out_order_no}')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_order_no' => 'P20150806125346',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/orders/{out_order_no}']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_order_no' => 'P20150806125346',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->orders->_out_order_no_->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_order_no' => 'P20150806125346',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/orders/{out_order_no}')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_order_no' => 'P20150806125346',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/orders/{out_order_no}']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'out_order_no' => 'P20150806125346',
  'query' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| transaction_id {data-required} | string | 微信订单号
| out_order_no {data-required} | string | 商户分账单号
| order_id {data-required} | string | 微信分账单号
| state {data-required} | string | 分账单状态
| receivers | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表
| currency {data-required data-indent=1} | string | 分账币种
| amount {data-required data-indent=1} | integer | 分账金额
| description {data-required data-indent=1} | string | 分账描述
| type {data-required data-indent=1} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required data-indent=1} | string | 分账接收方帐号
| result {data-required data-indent=1} | string | 分账结果
| fail_reason {data-required data-indent=1} | string | 分账失败原因
| create_time {data-required data-indent=1} | string | 分账创建时间
| finish_time {data-required data-indent=1} | string | 分账完成时间
| detail_id {data-indent=1} | string | 分账明细单号
| detail_type {data-indent=1} | string | 分账明细类型
| settlement_currency {data-indent=1} | string | 出资方结算币种
| settlement_amount {data-indent=1} | integer | 出资方结算金额
| rate {data-indent=1} | integer | 汇率值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_4.shtml)
