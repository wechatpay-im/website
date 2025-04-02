---
title: 查询用户捐赠单列表
description: 商户可根据品牌ID与用户标识查询捐赠单列表
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户在商户AppID下的唯一标识
| brand_id {data-required} | string | 品牌ID
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-indent=1} | integer | 请求资源起始位置
| limit {data-indent=1} | integer | 最大资源条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->lovefeast->users->_openid_->orders->brandId->_brand_id_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->lovefeast->users->_openid_->orders->brandId->_brand_id_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/lovefeast/users/{openid}/orders/brand-id/{brand_id}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'brand_id' => '2250',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| count | integer | 该次请求返回的记录条数
| limit | integer | 最大记录条数
| offset | integer | 起始位置
| total_count | integer | 全部记录数量
| data | object[] {data-tooltip="对应PHP的array"} | 结果集
| welfare_trade_id {data-indent=1} | string | 捐赠订单号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| brand_id {data-indent=1} | string | 品牌ID
| donate_source {data-indent=1} | string | 捐赠来源<br/>`MINIPROGRAM_PAY` \| `ENTRUST_PAY` 枚举值之一
| merchant_order {data-indent=1} | string | 商户订单
| institution_name {data-indent=1} | string | 捐赠机构名称
| business_id {data-indent=1} | string | 捐赠项目编号
| business_name {data-indent=1} | string | 捐赠活动名称
| success_time {data-indent=1} | string | 支付完成时间
| payer {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=2} | string | 用户标识
| sub_openid {data-indent=2} | string | 用户子标识
| avatar {data-indent=2} | string | 用户头像URL
| nickname {data-indent=2} | string | 用户昵称
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-indent=2} | number | 总金额
| payer_total {data-indent=2} | number | 用户支付金额
| currency {data-indent=2} | string | 货币类型
| payer_currency {data-indent=2} | string | 用户支付币种
| device_id {data-indent=1} | string | 设备编号

{.im-table #response}
