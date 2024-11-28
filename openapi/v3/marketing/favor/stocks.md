---
title: 条件查询批次列表
description: 通过此接口可查询多个批次的信息，包括批次的配置信息以及批次概况数据。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | integer | 分页大小
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号
| create_start_time {data-indent=1} | string | 起始时间
| create_end_time {data-indent=1} | string | 终止时间
| status {data-indent=1} | string | 批次状态<br/>`unactivated` \| `audit` \| `running` \| `stoped` \| `paused` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->getAsync([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'stock_creator_mchid' => '',
    'create_start_time' => '2015-05-20T13:29:35.120+08:00',
    'create_end_time' => '2015-05-20T13:29:35.120+08:00',
    'status' => 'unactivated',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks')->getAsync([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'stock_creator_mchid' => '',
    'create_start_time' => '2015-05-20T13:29:35.120+08:00',
    'create_end_time' => '2015-05-20T13:29:35.120+08:00',
    'status' => 'unactivated',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks']->getAsync([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'stock_creator_mchid' => '',
    'create_start_time' => '2015-05-20T13:29:35.120+08:00',
    'create_end_time' => '2015-05-20T13:29:35.120+08:00',
    'status' => 'unactivated',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->get([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'stock_creator_mchid' => '',
    'create_start_time' => '2015-05-20T13:29:35.120+08:00',
    'create_end_time' => '2015-05-20T13:29:35.120+08:00',
    'status' => 'unactivated',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks')->get([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'stock_creator_mchid' => '',
    'create_start_time' => '2015-05-20T13:29:35.120+08:00',
    'create_end_time' => '2015-05-20T13:29:35.120+08:00',
    'status' => 'unactivated',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks']->get([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'stock_creator_mchid' => '',
    'create_start_time' => '2015-05-20T13:29:35.120+08:00',
    'create_end_time' => '2015-05-20T13:29:35.120+08:00',
    'status' => 'unactivated',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 批次总数
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页页码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/stock/list-stocks.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/cash-coupons/stock/list-stocks.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_4.shtml)
