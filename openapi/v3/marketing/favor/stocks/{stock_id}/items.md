---
title: 查询代金券可用单品
description: 通过此接口可查询批次的可用商品编码，判断券是否可用于某些商品，来决定是否展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | string | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->_stock_id_->items->getAsync([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
    'offset'              => 0,
    'limit'               => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks/{stock_id}/items')->getAsync([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
    'offset'              => 0,
    'limit'               => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks/{stock_id}/items']->getAsync([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
    'offset'              => 0,
    'limit'               => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->_stock_id_->items->get([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
    'offset'              => 0,
    'limit'               => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}/items')->get([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
    'offset'              => 0,
    'limit'               => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}/items']->get([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
    'offset'              => 0,
    'limit'               => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 可用单品编码总数
| data | string[] | 可用单品编码
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小
| stock_id {data-required} | string | 批次号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_8.shtml)
