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
    'offset'              => 0,
    'limit'               => 0,
    'stock_creator_mchid' => '',
    'create_start_time'   => '2015-05-20T13:29:35.120+08:00',
    'create_end_time'     => '2015-05-20T13:29:35.120+08:00',
    'status'              => 'unactivated',
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
    'offset'              => 0,
    'limit'               => 0,
    'stock_creator_mchid' => '',
    'create_start_time'   => '2015-05-20T13:29:35.120+08:00',
    'create_end_time'     => '2015-05-20T13:29:35.120+08:00',
    'status'              => 'unactivated',
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
    'offset'              => 0,
    'limit'               => 0,
    'stock_creator_mchid' => '',
    'create_start_time'   => '2015-05-20T13:29:35.120+08:00',
    'create_end_time'     => '2015-05-20T13:29:35.120+08:00',
    'status'              => 'unactivated',
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
    'offset'              => 0,
    'limit'               => 0,
    'stock_creator_mchid' => '',
    'create_start_time'   => '2015-05-20T13:29:35.120+08:00',
    'create_end_time'     => '2015-05-20T13:29:35.120+08:00',
    'status'              => 'unactivated',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks')->get([
  'query' => [
    'offset'              => 0,
    'limit'               => 0,
    'stock_creator_mchid' => '',
    'create_start_time'   => '2015-05-20T13:29:35.120+08:00',
    'create_end_time'     => '2015-05-20T13:29:35.120+08:00',
    'status'              => 'unactivated',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks']->get([
  'query' => [
    'offset'              => 0,
    'limit'               => 0,
    'stock_creator_mchid' => '',
    'create_start_time'   => '2015-05-20T13:29:35.120+08:00',
    'create_end_time'     => '2015-05-20T13:29:35.120+08:00',
    'status'              => 'unactivated',
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
| data | object[] {data-tooltip="对应PHP的array"} | 批次详情
| stock_name {data-required data-indent=1} | string | 批次名称
| available_begin_time {data-required data-indent=1} | string | 开始时间
| available_end_time {data-required data-indent=1} | string | 结束时间
| stock_use_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_coupons {data-required data-indent=2} | integer | 发放总上限
| max_amount {data-required data-indent=2} | integer | 总预算
| max_amount_by_day {data-indent=2} | integer | 单天发放上限金额
| max_coupons_per_user {data-required data-indent=2} | integer | 单个用户可领个数
| natural_person_limit {data-required data-indent=2} | boolean | 是否开启自然人限制
| prevent_api_abuse {data-required data-indent=2} | boolean | api发券防刷
| no_cash {data-required data-indent=1} | boolean | 是否无资金流
| stock_type {data-required data-indent=1} | string | 批次类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHAHGE` \| `RANDOM` \| `DISCOUNT_CUT` 枚举值之一
| stock_id {data-indent=1} | string | 批次号
| stock_creator_mchid {data-indent=1} | string | 创建批次的商户号
| status {data-indent=1} | string | 批次状态<br/>`unactivated` \| `audit` \| `running` \| `stoped` \| `paused` 枚举值之一
| description {data-required data-indent=1} | string | 使用说明
| create_time {data-indent=1} | string | 创建时间
| start_time {data-indent=1} | string | 激活批次的时间
| stop_time {data-indent=1} | string | 终止批次的时间
| singleitem {data-indent=1} | boolean | 是否单品优惠
| cut_to_message {data-indent=1} | object {data-tooltip="对应PHP的array"} | 减至批次特定信息
| single_price_max {data-indent=2} | integer | 可用优惠的商品最高单价
| cut_to_price {data-indent=2} | integer | 减至后的优惠单价
| distributed_coupons {data-indent=1} | integer | 已发券数量
| business_type {data-indent=1} | string | 业务类型<br/>`MULTIUSE` 枚举值
| available_region_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 消费金可用地域
| type {data-indent=2} | string | 类型
| province {data-indent=2} | string | 省
| city {data-indent=2} | string | 市
| district {data-indent=2} | string | 区
| country {data-indent=2} | string | 国家
| available_industry_list {data-indent=1} | string[] | 消费金可用行业

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012460489) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012460518)
