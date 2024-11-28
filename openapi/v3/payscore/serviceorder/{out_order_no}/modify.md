---
title: 修改订单金额
description: 完结订单总金额与实际金额不符时，可通过该接口修改订单金额。**前置条件：**服务订单支付状态为待支付
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| post_payments {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| amount {data-indent=2} | number | 付费金额
| description {data-indent=2} | string | 付费说明
| count {data-indent=2} | number | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-indent=2} | number | 优惠金额
| count {data-indent=2} | number | 优惠数量
| total_amount {data-required data-indent=1} | number | 总金额
| reason {data-required data-indent=1} | string | 修改原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->_out_order_no_->modify->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder/{out_order_no}/modify')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder/{out_order_no}/modify']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->_out_order_no_->modify->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/{out_order_no}/modify')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/{out_order_no}/modify']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid'          => 'wxd678efh567hg6787',
    'service_id'     => '2002000000000558128851361561536',
    'post_payments'  => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts' => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'   => 50000,
    'reason'         => '用户投诉',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| appid {data-required} | string | 服务商公众号ID
| mchid {data-required} | string | 服务商商户号
| service_introduction {data-required} | string | 服务信息
| state {data-required} | string | 服务订单状态
| state_description | string | 订单状态说明
| post_payments {data-required} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | number | 优惠金额
| count {data-indent=1} | number | 优惠数量
| risk_fund | object {data-tooltip="对应PHP的array"} | 服务风险金
| name {data-required data-indent=1} | string | 风险名称
| amount {data-required data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| total_amount | number | 总金额
| need_collection | boolean | 是否需要收款
| collection | object {data-tooltip="对应PHP的array"} | 收款信息
| state {data-required data-indent=1} | string | 收款状态
| total_amount {data-indent=1} | number | 总收款金额
| paying_amount {data-indent=1} | number | 待收金额
| paid_amount {data-indent=1} | number | 已收金额
| details {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 收款明细列表
| seq {data-indent=2} | number | 收款序号
| amount {data-indent=2} | number | 单笔收款金额
| paid_type {data-indent=2} | string | 收款成功渠道
| paid_time {data-indent=2} | string | 收款成功时间
| transaction_id {data-indent=2} | string | 微信支付交易单号
| bank_type {data-indent=1} | string | 收款银行
| time_range | object {data-tooltip="对应PHP的array"} | 服务时间
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| attach | string | 附加数据
| notify_url | string | 商户回调地址
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_4.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/modify-service-order.html)
