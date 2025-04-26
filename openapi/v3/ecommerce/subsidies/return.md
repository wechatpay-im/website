---
title: 请求补差回退
description: 订单发送退款的时候，可以对补贴成功的补差单发起回退。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| out_order_no {data-required data-indent=1} | string | 商户补差回退单号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| refund_id {data-required data-indent=1} | string | 微信退款单号
| amount {data-required data-indent=1} | integer | 补差回退金额
| description {data-required data-indent=1} | string | 补差回退描述

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->subsidies->return->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_order_no'   => 'P20150806125346',
    'transaction_id' => '4208450740201411110007820472',
    'refund_id'      => '3008450740201411110007820472',
    'amount'         => 10,
    'description'    => '测试备注',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/subsidies/return')->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_order_no'   => 'P20150806125346',
    'transaction_id' => '4208450740201411110007820472',
    'refund_id'      => '3008450740201411110007820472',
    'amount'         => 10,
    'description'    => '测试备注',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/subsidies/return']->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_order_no'   => 'P20150806125346',
    'transaction_id' => '4208450740201411110007820472',
    'refund_id'      => '3008450740201411110007820472',
    'amount'         => 10,
    'description'    => '测试备注',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->subsidies->return->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_order_no'   => 'P20150806125346',
    'transaction_id' => '4208450740201411110007820472',
    'refund_id'      => '3008450740201411110007820472',
    'amount'         => 10,
    'description'    => '测试备注',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/subsidies/return')->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_order_no'   => 'P20150806125346',
    'transaction_id' => '4208450740201411110007820472',
    'refund_id'      => '3008450740201411110007820472',
    'amount'         => 10,
    'description'    => '测试备注',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/subsidies/return']->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'out_order_no'   => 'P20150806125346',
    'transaction_id' => '4208450740201411110007820472',
    'refund_id'      => '3008450740201411110007820472',
    'amount'         => 10,
    'description'    => '测试备注',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| transaction_id {data-required} | string | 微信订单号
| subsidy_refund_id {data-required} | string | 微信补差回退单号
| refund_id {data-required} | string | 微信退款单号
| out_order_no {data-required} | string | 商户补差回退单号
| amount {data-required} | integer | 补差回退金额
| description {data-required} | string | 补差回退描述
| result {data-required} | string | 补差回退结果
| success_time {data-required} | string | 补差回退完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012477636)
