---
title: 请求分账回退
description: 如果订单已经分账，在退款时，可以先调此接口，将已分账的资金从分账接收方的账户回退给分账方，再发起退款
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| order_id {data-indent=1} | string | 微信分账单号
| out_order_no {data-indent=1} | string | 商户分账单号
| out_return_no {data-required data-indent=1} | string | 商户回退单号
| return_mchid {data-required data-indent=1} | string | 回退商户号
| amount {data-required data-indent=1} | integer | 回退金额
| description {data-required data-indent=1} | string | 回退描述

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->returnOrders->postAsync([
  'json' => [
    'sub_mchid'     => '1900000109',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => '',
    'out_return_no' => 'R20190516001',
    'return_mchid'  => '86693852',
    'amount'        => 10,
    'description'   => '用户退款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/profitsharing/return-orders')->postAsync([
  'json' => [
    'sub_mchid'     => '1900000109',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => '',
    'out_return_no' => 'R20190516001',
    'return_mchid'  => '86693852',
    'amount'        => 10,
    'description'   => '用户退款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/profitsharing/return-orders']->postAsync([
  'json' => [
    'sub_mchid'     => '1900000109',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => '',
    'out_return_no' => 'R20190516001',
    'return_mchid'  => '86693852',
    'amount'        => 10,
    'description'   => '用户退款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->profitsharing->returnOrders->post([
  'json' => [
    'sub_mchid'     => '1900000109',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => '',
    'out_return_no' => 'R20190516001',
    'return_mchid'  => '86693852',
    'amount'        => 10,
    'description'   => '用户退款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/return-orders')->post([
  'json' => [
    'sub_mchid'     => '1900000109',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => '',
    'out_return_no' => 'R20190516001',
    'return_mchid'  => '86693852',
    'amount'        => 10,
    'description'   => '用户退款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/return-orders']->post([
  'json' => [
    'sub_mchid'     => '1900000109',
    'order_id'      => '3008450740201411110007820472',
    'out_order_no'  => '',
    'out_return_no' => 'R20190516001',
    'return_mchid'  => '86693852',
    'amount'        => 10,
    'description'   => '用户退款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| order_id {data-required} | string | 微信分账单号
| out_order_no {data-required} | string | 商户分账单号
| out_return_no {data-required} | string | 商户回退单号
| return_id {data-required} | string | 微信回退单号
| return_mchid {data-required} | string | 回退商户号
| amount {data-required} | integer | 回退金额
| description {data-required} | string | 回退描述
| result {data-required} | string | 回退结果
| fail_reason | string | 失败原因
| create_time {data-required} | string | 创建时间
| finish_time {data-required} | string | 完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012525287) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466854)
