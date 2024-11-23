---
title: 从业机构完结微信支付分订单
description: "前置条件：服务订单状态为“进行中”且订单状态说明需为[USER_CONFIRM : 用户确认]"
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| channel_id {data-indent=1} | string | 渠道商商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| post_payments {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| description {data-indent=2} | string | 付费说明
| amount {data-indent=2} | integer | 付费金额
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-required data-indent=2} | string | 优惠名称
| description {data-required data-indent=2} | string | 优惠说明
| amount {data-required data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| total_amount {data-required data-indent=1} | integer | 总金额
| time_range {data-indent=1} | object {data-tooltip="对应PHP的array"} | 实际服务时间
| start_time {data-required data-indent=2} | string | 服务开始时间
| start_time_remark {data-indent=2} | string | 服务开始时间备注
| end_time {data-indent=2} | string | 服务结束时间
| end_time_remark {data-indent=2} | string | 服务结束时间备注
| location {data-indent=1} | object {data-tooltip="对应PHP的array"} | 实际服务位置
| start_location {data-indent=2} | string | 服务开始地点
| end_location {data-indent=2} | string | 服务结束地点
| profit_sharing {data-indent=1} | boolean | 微信支付服务分账标记
| complete_time {data-indent=1} | string | 完结服务时间
| goods_tag {data-indent=1} | string | 订单优惠标记

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->complete->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'post_payments' => [[
      'name' => '就餐费用',
      'description' => '就餐人均100元',
      'amount' => 40000,
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'total_amount' => 50000,
    'time_range' => [
      'start_time' => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time' => '20091225121010',
      'end_time_remark' => '租借结束时间',
    ],
    'location' => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'complete_time' => '2019-11-11T16:24:05+08:00',
    'goods_tag' => 'goods_tag',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/complete')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'post_payments' => [[
      'name' => '就餐费用',
      'description' => '就餐人均100元',
      'amount' => 40000,
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'total_amount' => 50000,
    'time_range' => [
      'start_time' => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time' => '20091225121010',
      'end_time_remark' => '租借结束时间',
    ],
    'location' => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'complete_time' => '2019-11-11T16:24:05+08:00',
    'goods_tag' => 'goods_tag',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/complete']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'post_payments' => [[
      'name' => '就餐费用',
      'description' => '就餐人均100元',
      'amount' => 40000,
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'total_amount' => 50000,
    'time_range' => [
      'start_time' => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time' => '20091225121010',
      'end_time_remark' => '租借结束时间',
    ],
    'location' => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'complete_time' => '2019-11-11T16:24:05+08:00',
    'goods_tag' => 'goods_tag',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->acquiringbank->serviceorder->_out_order_no_->complete->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'post_payments' => [[
      'name' => '就餐费用',
      'description' => '就餐人均100元',
      'amount' => 40000,
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'total_amount' => 50000,
    'time_range' => [
      'start_time' => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time' => '20091225121010',
      'end_time_remark' => '租借结束时间',
    ],
    'location' => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'complete_time' => '2019-11-11T16:24:05+08:00',
    'goods_tag' => 'goods_tag',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/acquiringbank/serviceorder/{out_order_no}/complete')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'post_payments' => [[
      'name' => '就餐费用',
      'description' => '就餐人均100元',
      'amount' => 40000,
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'total_amount' => 50000,
    'time_range' => [
      'start_time' => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time' => '20091225121010',
      'end_time_remark' => '租借结束时间',
    ],
    'location' => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'complete_time' => '2019-11-11T16:24:05+08:00',
    'goods_tag' => 'goods_tag',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/acquiringbank/serviceorder/{out_order_no}/complete']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'service_id' => '2002000000000558128851361561536',
    'channel_id' => '1230000109',
    'sub_mchid' => '1900000109',
    'post_payments' => [[
      'name' => '就餐费用',
      'description' => '就餐人均100元',
      'amount' => 40000,
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'total_amount' => 50000,
    'time_range' => [
      'start_time' => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time' => '20091225121010',
      'end_time_remark' => '租借结束时间',
    ],
    'location' => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'complete_time' => '2019-11-11T16:24:05+08:00',
    'goods_tag' => 'goods_tag',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-institution-weixin-pay-score/acquiring-bank-service-order/complete-acquiring-bank-service-order.html)
