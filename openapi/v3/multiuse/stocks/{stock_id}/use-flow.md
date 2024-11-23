---
title: 下载核销明细
description: 可获取到某批次的核销明细数据，包括订单号、单品信息、银行流水号等，用于对账/数据分析。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->multiuse->stocks->_stock_id_->useFlow->getAsync([
  'stock_id' => '9856888',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/multiuse/stocks/{stock_id}/use-flow')->getAsync([
  'stock_id' => '9856888',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/multiuse/stocks/{stock_id}/use-flow']->getAsync([
  'stock_id' => '9856888',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->multiuse->stocks->_stock_id_->useFlow->get([
  'stock_id' => '9856888',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/multiuse/stocks/{stock_id}/use-flow')->get([
  'stock_id' => '9856888',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/multiuse/stocks/{stock_id}/use-flow']->get([
  'stock_id' => '9856888',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| url {data-required}| string | 下载链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/multiuse-coupon/stock/use-flow.html)
