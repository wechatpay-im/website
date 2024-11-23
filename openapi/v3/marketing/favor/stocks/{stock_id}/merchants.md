---
title: 查询代金券可用商户
description: 通过调用此接口可查询批次的可用商户号，判断券是否在某商户号可用，来决定是否展示。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | string | 分页大小
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->_stock_id_->merchants->getAsync([
  'stock_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => '',
    'stock_creator_mchid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks/{stock_id}/merchants')->getAsync([
  'stock_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => '',
    'stock_creator_mchid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks/{stock_id}/merchants']->getAsync([
  'stock_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => '',
    'stock_creator_mchid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->_stock_id_->merchants->get([
  'stock_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => '',
    'stock_creator_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}/merchants')->get([
  'stock_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => '',
    'stock_creator_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}/merchants']->get([
  'stock_id' => '',
  'query' => [
    'offset' => 0,
    'limit' => '',
    'stock_creator_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required}| integer | 可用商户总数量
| data | string[] | 
| offset {data-required}| integer | 分页页码
| limit {data-required}| integer | 分页大小
| stock_id {data-required}| string | 批次号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_7.shtml)
