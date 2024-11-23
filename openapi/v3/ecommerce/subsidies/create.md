---
title: 请求补差
description: 服务商下单的时候带上补差标识，微信订单支付成功并结算完成后，发起分账前，调用该口进行补差。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| amount {data-required data-indent=1} | integer | 补差金额
| description {data-required data-indent=1} | string | 补差描述
| refund_id {data-indent=1} | string | 微信退款单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->subsidies->create->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'amount' => 10,
    'description' => '测试备注',
    'refund_id' => '3008450740201411110007820472',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/subsidies/create')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'amount' => 10,
    'description' => '测试备注',
    'refund_id' => '3008450740201411110007820472',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/subsidies/create']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'amount' => 10,
    'description' => '测试备注',
    'refund_id' => '3008450740201411110007820472',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->subsidies->create->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'amount' => 10,
    'description' => '测试备注',
    'refund_id' => '3008450740201411110007820472',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/subsidies/create')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'amount' => 10,
    'description' => '测试备注',
    'refund_id' => '3008450740201411110007820472',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/subsidies/create']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'amount' => 10,
    'description' => '测试备注',
    'refund_id' => '3008450740201411110007820472',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required}| string | 二级商户号
| transaction_id {data-required}| string | 微信订单号
| subsidy_id {data-required}| string | 微信补差单号
| description {data-required}| string | 补差描述
| amount {data-required}| integer | 补差金额
| result {data-required}| string | 补差单结果
| success_time {data-required}| string | 补差完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_1.shtml)
