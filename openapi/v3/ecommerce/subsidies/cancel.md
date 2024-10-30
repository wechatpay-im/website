---
title: 取消补差
description: 对带有补差标识的订单，如果不需要补差，可在发起发起分账前，可调用这个接口进行取消补差。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| transaction_id {data-indent=1} | string | 微信订单号
| description {data-indent=1} | string | 取消补差描述

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->subsidies->cancel->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'description' => '订单退款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/subsidies/cancel')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'description' => '订单退款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/subsidies/cancel']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'description' => '订单退款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->subsidies->cancel->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'description' => '订单退款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/subsidies/cancel')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'description' => '订单退款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/subsidies/cancel']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'description' => '订单退款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| transaction_id | string | 微信订单号
| result | string | 取消补差结果
| description | string | 取消补差描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/subsidies/chapter3_3.shtml)
