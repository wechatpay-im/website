---
title: 查询批次详情
description: 通过此接口可查询批次信息，包括批次的配置信息以及批次概况数据。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->_stock_id_->getAsync([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks/{stock_id}')->getAsync([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks/{stock_id}']->getAsync([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->_stock_id_->get([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}')->get([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}']->get([
  'stock_id' => '',
  'query' => [
    'stock_creator_mchid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_name {data-required}| string | 批次名称
| available_begin_time {data-required}| string | 开始时间
| available_end_time {data-required}| string | 结束时间
| stock_use_rule {data-required}| object {data-tooltip="对应PHP的array"} | 发放规则
| max_coupons {data-required data-indent=1} | integer | 发放总上限
| max_amount {data-required data-indent=1} | integer | 总预算
| max_amount_by_day {data-indent=1} | integer | 单天发放上限金额
| max_coupons_per_user {data-required data-indent=1} | integer | 单个用户可领个数
| natural_person_limit {data-required data-indent=1} | boolean | 是否开启自然人限制
| prevent_api_abuse {data-required data-indent=1} | boolean | api发券防刷
| no_cash {data-required}| boolean | 是否无资金流
| stock_type {data-required}| string | 批次类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHAHGE` \| `RANDOM` \| `DISCOUNT_CUT` 枚举值之一
| stock_id | string | 批次号
| stock_creator_mchid | string | 创建批次的商户号
| status | string | 批次状态<br/>`unactivated` \| `audit` \| `running` \| `stoped` \| `paused` 枚举值之一
| description {data-required}| string | 使用说明
| create_time | string | 创建时间
| start_time | string | 激活批次的时间
| stop_time | string | 终止批次的时间
| singleitem | boolean | 是否单品优惠
| cut_to_message | object {data-tooltip="对应PHP的array"} | 减至批次特定信息
| single_price_max {data-indent=1} | integer | 可用优惠的商品最高单价
| cut_to_price {data-indent=1} | integer | 减至后的优惠单价
| distributed_coupons | integer | 已发券数量
| business_type | string | 业务类型<br/>`MULTIUSE` 枚举值
| available_region_list | object[] {data-tooltip="对应PHP的array"} | 消费金可用地域
| type {data-indent=1} | string | 类型
| province {data-indent=1} | string | 省
| city {data-indent=1} | string | 市
| district {data-indent=1} | string | 区
| country {data-indent=1} | string | 国家
| available_industry_list | string[] | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/stock/query-stock.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/cash-coupons/stock/query-stock.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_5.shtml)
