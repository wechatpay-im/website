---
title: 完结分账
description: 不需要进行分账的订单，可直接调用本接口将订单的金额全部解冻给二级商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分帐单号
| description {data-required data-indent=1} | string | 分账描述

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->profitsharing->finishOrder->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'description'    => '分账完结',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/profitsharing/finish-order')->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'description'    => '分账完结',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/profitsharing/finish-order']->postAsync([
  'json' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'description'    => '分账完结',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->profitsharing->finishOrder->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'description'    => '分账完结',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/profitsharing/finish-order')->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'description'    => '分账完结',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/profitsharing/finish-order']->post([
  'json' => [
    'sub_mchid'      => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no'   => 'P20150806125346',
    'description'    => '分账完结',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 二级商户号
| transaction_id {data-required} | string | 微信订单号
| out_order_no {data-required} | string | 商户分帐单号
| order_id {data-required} | string | 微信分帐单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012477745)
