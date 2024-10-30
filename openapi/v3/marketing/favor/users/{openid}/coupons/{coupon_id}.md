---
title: 查询代金券详情
description: 通过此接口可查询代金券信息，包括代金券的基础信息、状态。如代金券已核销，会包括代金券核销的订单信息（订单号、单品信息等）。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 用户openid
| coupon_id | string | 代金券id
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->users->_openid_->coupons->_coupon_id_->getAsync([
  'openid' => '',
  'coupon_id' => '',
  'query' => [
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/users/{openid}/coupons/{coupon_id}')->getAsync([
  'openid' => '',
  'coupon_id' => '',
  'query' => [
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/users/{openid}/coupons/{coupon_id}']->getAsync([
  'openid' => '',
  'coupon_id' => '',
  'query' => [
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->users->_openid_->coupons->_coupon_id_->get([
  'openid' => '',
  'coupon_id' => '',
  'query' => [
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/users/{openid}/coupons/{coupon_id}')->get([
  'openid' => '',
  'coupon_id' => '',
  'query' => [
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/users/{openid}/coupons/{coupon_id}']->get([
  'openid' => '',
  'coupon_id' => '',
  'query' => [
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_creator_mchid | string | 创建批次的商户号
| stock_id | string | 批次号
| coupon_id | string | 代金券id
| coupon_name | string | 代金券名称
| status | string | 代金券状态
| description | string | 使用说明
| create_time | string | 领券时间
| coupon_type | string | 券类型
| start_time | string | 激活批次的时间
| stop_time | string | 终止批次的时间
| singleitem | boolean | 是否单品优惠
| cut_to_message | object | 减至批次特定信息
| single_price_max {data-indent=1} | integer | 可用优惠的商品最高单价
| cut_to_price {data-indent=1} | integer | 减至后的优惠单价
| available_begin_time | string | 可用开始时间
| available_end_time | string | 可用结束时间
| normal_coupon_information | object | 固定面额满减券使用规则
| coupon_amount {data-indent=1} | integer | 面额
| transaction_minimum {data-indent=1} | integer | 门槛
| consume_information | object | 已实扣代金券核销信息
| consume_time {data-indent=1} | string | 核销时间
| consume_mchid {data-indent=1} | string | 核销商户号
| transaction_id {data-indent=1} | string | 核销商户号
| goods_detail {data-indent=1} | object[] | 单品信息
| goods_id {data-indent=2} | string | 
| quantity {data-indent=2} | integer | 
| price {data-indent=2} | integer | 
| discount_amount {data-indent=2} | integer | 
| available_balance | number | 剩余金额
| business_type | string | 业务类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/coupon/query-coupon.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/cash-coupons/coupon/query-coupon.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_6.shtml)
