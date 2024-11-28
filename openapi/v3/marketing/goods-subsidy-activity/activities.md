---
title: 按区域查询品牌加价购活动
description: 指定服务商可通过该接口报名加价购活动、查询某个区域内的加价购活动列表、锁定加价活动购资格以及解锁加价购活动资格。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| city_id {data-required data-indent=1} | string | 活动所属城市的ID
| offset {data-required data-indent=1} | number | 分页页码
| limit {data-required data-indent=1} | number | 最大返回的活动数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->activities->getAsync([
  'query' => [
    'city_id' => '',
    'offset'  => 0,
    'limit'   => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/activities')->getAsync([
  'query' => [
    'city_id' => '',
    'offset'  => 0,
    'limit'   => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/activities']->getAsync([
  'query' => [
    'city_id' => '',
    'offset'  => 0,
    'limit'   => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->activities->get([
  'query' => [
    'city_id' => '',
    'offset'  => 0,
    'limit'   => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/activities')->get([
  'query' => [
    'city_id' => '',
    'offset'  => 0,
    'limit'   => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/activities']->get([
  'query' => [
    'city_id' => '',
    'offset'  => 0,
    'limit'   => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count | number | 小店活动门店总数
| data | object[] {data-tooltip="对应PHP的array"} | 小店活动门店集合
| activity_id {data-indent=1} | string | 活动ID
| brand_id {data-indent=1} | string | 品牌ID
| creator_merchant_id {data-indent=1} | string | 活动创建方商户号
| activity_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动信息
| activity_name {data-indent=2} | string | 活动名称
| apply_start_time {data-indent=2} | string | 活动报名开始时间
| apply_end_time {data-indent=2} | string | 活动报名结束时间
| activity_start_time {data-indent=2} | string | 活动开始时间
| activity_end_time {data-indent=2} | string | 活动结束时间
| activity_description {data-indent=2} | string | 活动描述
| goods_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动商品信息
| goods_id {data-indent=2} | string | 商品ID
| goods_name {data-indent=2} | string | 商品名称
| goods_picture_url {data-indent=2} | string | 商品图片URL
| rule_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动规则
| store_subsidy {data-indent=2} | string | 购买单件商品，补贴给门店的金额
| service_provider_subsidy {data-indent=2} | string | 购买单件商品，补贴给服务商的佣金
| store_subsidy_quota {data-indent=2} | string | 活动门店补贴商品数上限
| user_subsidy_quota {data-indent=2} | string | 单用户享受加价购优惠次数上限
| areas {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 活动区域列表
| province {data-indent=3} | string | 省名称
| city {data-indent=3} | string | 市名称
| district {data-indent=3} | string | 区名称
| offset | number | 分页页码
| limit | number | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/retail-store/introduction.html)
