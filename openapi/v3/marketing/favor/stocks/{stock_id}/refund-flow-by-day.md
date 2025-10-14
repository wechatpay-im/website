---
title: 获取批次退款明细下载链接
description: 注意：1. 核销账单明细新增合单相关字段:【是否合单订单】【微信支付合单单号】【合单优惠 总金额】【合单订单总金额】；2. 账单明细设备号字段格式采用base64，消除历史乱码问题；3. 账单文件下载链接响应不包含微信接口响应的签名值，因此需要跳过验签的流程；
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

::: warning :beginner: {.im-need-accessment}

1. 账单后续会根据需求新增明细字段，接入需考虑做好兼容，否则可能导致账单不可用;
2. 如需申请返回合单支付订单核销信息，请联系对应的微信支付行业运营经理;

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| bill_date {data-required data-indent=1} | string | 账单日期

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->_stock_id_->refundFlowByDay->getAsync([
  'stock_id' => '12356458',
  'query' => [
    'bill_date' => '2025-08-09',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks/{stock_id}/refund-flow-by-day')->getAsync([
  'stock_id' => '12356458',
  'query' => [
    'bill_date' => '2025-08-09',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks/{stock_id}/refund-flow-by-day']->getAsync([
  'stock_id' => '12356458',
  'query' => [
    'bill_date' => '2025-08-09',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->_stock_id_->refundFlowByDay->get([
  'stock_id' => '12356458',
  'query' => [
    'bill_date' => '2025-08-09',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}/refund-flow-by-day')->get([
  'stock_id' => '12356458',
  'query' => [
    'bill_date' => '2025-08-09',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}/refund-flow-by-day']->get([
  'stock_id' => '12356458',
  'query' => [
    'bill_date' => '2025-08-09',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| url {data-required} | string | 下载链接
| stock_refundflow_hash {data-required} | string | 账单文件摘要
| stock_refundflow_count {data-required} | string | 账单记录总条数

{.im-table #response}
