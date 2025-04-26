---
title: 查询分账回退结果
description: 商户需要核实回退结果，可调用此接口查询回退结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_return_no {data-required} | string | 商户回退单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号
| out_order_no {data-required data-indent=1} | string | 商户分账单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->returnOrders->_out_return_no_->getAsync([
  'out_return_no' => 'R20190516001',
  'query' => [
    'sub_mchid'    => '1900000109',
    'out_order_no' => 'P20190806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/profitsharing/return-orders/{out_return_no}')->getAsync([
  'out_return_no' => 'R20190516001',
  'query' => [
    'sub_mchid'    => '1900000109',
    'out_order_no' => 'P20190806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/profitsharing/return-orders/{out_return_no}']->getAsync([
  'out_return_no' => 'R20190516001',
  'query' => [
    'sub_mchid'    => '1900000109',
    'out_order_no' => 'P20190806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->profitsharing->returnOrders->_out_return_no_->get([
  'out_return_no' => 'R20190516001',
  'query' => [
    'sub_mchid'    => '1900000109',
    'out_order_no' => 'P20190806125346',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/return-orders/{out_return_no}')->get([
  'out_return_no' => 'R20190516001',
  'query' => [
    'sub_mchid'    => '1900000109',
    'out_order_no' => 'P20190806125346',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/return-orders/{out_return_no}']->get([
  'out_return_no' => 'R20190516001',
  'query' => [
    'sub_mchid'    => '1900000109',
    'out_order_no' => 'P20190806125346',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526279) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466858)
