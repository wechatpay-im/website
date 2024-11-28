---
title: 完结支付分订单
description: 完结微信支付分订单。用户使用服务完成后，商户可通过此接口完结订单。**前置条件：**服务订单状态为“进行中”且订单状态说明需为
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务订单号
| post_payments {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| amount {data-indent=2} | number | 付费金额
| description {data-indent=2} | string | 付费说明
| count {data-indent=2} | number | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-required data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-required data-indent=2} | number | 优惠金额
| count {data-indent=2} | number | 优惠数量
| total_amount {data-required data-indent=1} | number | 总金额
| time_range {data-indent=1} | object {data-tooltip="对应PHP的array"} | 实际服务时间段
| start_time {data-indent=2} | string | 服务开始时间
| end_time {data-indent=2} | string | 服务结束时间
| start_time_remark {data-indent=2} | string | 服务开始时间备注
| end_time_remark {data-indent=2} | string | 服务结束时间备注
| location {data-indent=1} | object {data-tooltip="对应PHP的array"} | 实际服务位置
| end_location {data-indent=2} | string | 服务结束地点
| profit_sharing {data-indent=1} | boolean | 微信支付服务分账标记
| goods_tag {data-indent=1} | string | 订单优惠标记

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->_out_order_no_->complete->postAsync([
  'out_order_no' => '',
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
    'time_range'     => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'       => [
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'goods_tag'      => 'goods_tag',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder/{out_order_no}/complete')->postAsync([
  'out_order_no' => '',
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
    'time_range'     => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'       => [
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'goods_tag'      => 'goods_tag',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder/{out_order_no}/complete']->postAsync([
  'out_order_no' => '',
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
    'time_range'     => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'       => [
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'goods_tag'      => 'goods_tag',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->_out_order_no_->complete->post([
  'out_order_no' => '',
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
    'time_range'     => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'       => [
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'goods_tag'      => 'goods_tag',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/{out_order_no}/complete')->post([
  'out_order_no' => '',
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
    'time_range'     => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'       => [
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'goods_tag'      => 'goods_tag',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/{out_order_no}/complete']->post([
  'out_order_no' => '',
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
    'time_range'     => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'       => [
      'end_location' => '嗨客时尚主题展餐厅',
    ],
    'profit_sharing' => true,
    'goods_tag'      => 'goods_tag',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 公众账号ID
| mchid {data-required} | string | 商户号
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| service_introduction {data-required} | string | 服务信息
| state {data-required} | string | 服务订单状态
| state_description | string | 订单状态说明
| total_amount {data-required} | number | 商户收款总金额
| post_payments | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-required data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-required data-indent=1} | number | 优惠金额
| count {data-indent=1} | number | 优惠数量
| risk_fund {data-required} | object {data-tooltip="对应PHP的array"} | 服务风险金
| name {data-required data-indent=1} | string | 风险名称
| amount {data-required data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| time_range | object {data-tooltip="对应PHP的array"} | 服务时间段
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object {data-tooltip="对应PHP的array"} | 服务位置
| end_location {data-indent=1} | string | 服务结束地点
| order_id | string | 微信支付服务订单号
| need_collection | boolean | 是否需要收款

{.im-table #response}

参阅 [USER_CONFIRM:用户确认] [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_5.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/complete-service-order.html)
