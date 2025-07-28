---
title: 查询单日交易汇总
description: 查询单日交易汇总
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| query_date {data-required data-indent=1} | string | 查询的日期
| query_type {data-required data-indent=1} | string | 查询的订单类别<br/>`ORDER_TYPE_TRANSACTION` \| `ORDER_TYPE_APPLIANCE_REDEEM` \| `ORDER_TYPE_3C_REDEEM` \| `ORDER_TYPE_N_QUALIFICATION_REDEEM` 枚举值之一
| appliance_id {data-indent=1} | number | 消费品类ID<br/>`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` 枚举值之一
| cate_state {data-indent=1} | string | 品类状态<br/>`CATE_STATE_REDEEM` \| `CATE_STATE_REFUND` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->transactions->summary->queryDay->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'query_date'                => '2025-01-14',
    'query_type'                => 'ORDER_TYPE_TRANSACTION',
    'appliance_id'              => 1,
    'cate_state'                => 'CATE_STATE_REDEEM',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/transactions/summary/query-day')->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'query_date'                => '2025-01-14',
    'query_type'                => 'ORDER_TYPE_TRANSACTION',
    'appliance_id'              => 1,
    'cate_state'                => 'CATE_STATE_REDEEM',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/transactions/summary/query-day']->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'query_date'                => '2025-01-14',
    'query_type'                => 'ORDER_TYPE_TRANSACTION',
    'appliance_id'              => 1,
    'cate_state'                => 'CATE_STATE_REDEEM',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->transactions->summary->queryDay->post([
  'json' => [
    'qualification_region_code' => 310100,
    'query_date'                => '2025-01-14',
    'query_type'                => 'ORDER_TYPE_TRANSACTION',
    'appliance_id'              => 1,
    'cate_state'                => 'CATE_STATE_REDEEM',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/transactions/summary/query-day')->post([
  'json' => [
    'qualification_region_code' => 310100,
    'query_date'                => '2025-01-14',
    'query_type'                => 'ORDER_TYPE_TRANSACTION',
    'appliance_id'              => 1,
    'cate_state'                => 'CATE_STATE_REDEEM',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/transactions/summary/query-day']->post([
  'json' => [
    'qualification_region_code' => 310100,
    'query_date'                => '2025-01-14',
    'query_type'                => 'ORDER_TYPE_TRANSACTION',
    'appliance_id'              => 1,
    'cate_state'                => 'CATE_STATE_REDEEM',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code {data-required} | string | 响应码
| message {data-required} | string | 响应描述
| total_trade_count {data-required} | number | 交易总笔数
| total_trade_amount {data-required} | number | 交易总金额
| total_subsidy_count {data-required} | number | 补贴总金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
