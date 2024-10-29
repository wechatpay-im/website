---
title: 同步服务订单信息
description: 由于收款商户进行的某些“线下操作”会导致微信支付侧的订单状态与实际情况不符。**前置条件：**同步商户渠道收款成功信息时，即场景类型=“Order_Paid”，订单的状态需为
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 商户服务订单号
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 公众账号ID
| service_id {data-indent=1} | string | 服务ID
| type {data-indent=1} | string | 场景类型
| detail {data-indent=1} | object | 内容信息详情
| paid_time {data-indent=2} | string | 收款成功时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->_out_order_no_->sync->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091210',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder/{out_order_no}/sync')->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091210',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder/{out_order_no}/sync']->postAsync([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091210',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->_out_order_no_->sync->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091210',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/{out_order_no}/sync')->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091210',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/{out_order_no}/sync']->post([
  'out_order_no' => '1234323JKHDFE1243252',
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'type' => 'Order_Paid',
    'detail' => [
      'paid_time' => '20091225091210',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| appid | string | 服务商公众号ID
| mchid | string | 服务商商户号
| service_introduction | string | 服务信息
| state | string | 服务订单状态
| state_description | string | 订单状态说明
| post_payments | object[] | 后付费项目
| name {data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] | 商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | number | 优惠金额
| risk_fund | object | 服务风险金
| name {data-indent=1} | string | 风险名称
| amount {data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| total_amount | number | 总金额
| need_collection | boolean | 是否需要收款
| collection | object | 收款信息
| state {data-indent=1} | string | 收款状态
| total_amount {data-indent=1} | number | 总收款金额
| paying_amount {data-indent=1} | number | 待收金额
| paid_amount {data-indent=1} | number | 已收金额
| details {data-indent=1} | object[] | 收款明细列表
| amount {data-indent=2} | number | 单笔收款金额
| paid_type {data-indent=2} | string | 收款成功渠道
| paid_time {data-indent=2} | string | 收款成功时间
| transaction_id {data-indent=2} | string | 微信支付交易单号
| bank_type {data-indent=1} | string | 收款银行
| time_range | object | 服务时间
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| attach | string | 附加数据
| notify_url | string | 商户回调地址
| openid | string | 服务商公众号下的用户标识
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [FINISHED:商户完结订单] [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_6.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/sync-service-order.html)
