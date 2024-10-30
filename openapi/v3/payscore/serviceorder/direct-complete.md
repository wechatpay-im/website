---
title: 创单结单合并
description: 该接口适用于无需微信支付分做订单风控判断的业务场景，在服务完成后，通过该接口对用户进行免密代扣。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| out_order_no {data-indent=1} | string | 商户服务订单号
| appid {data-indent=1} | string | 公众账号ID
| service_id {data-indent=1} | string | 服务ID
| post_payments {data-indent=1} | object[] | 后付费项目
| name {data-indent=2} | string | 付费项目名称
| amount {data-indent=2} | integer | 金额
| description {data-indent=2} | string | 计费说明
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] | 后付费商户优惠
| name {data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| time_range {data-indent=1} | object | 服务时间段
| start_time {data-indent=2} | string | 
| start_time_remark {data-indent=2} | string | 
| end_time {data-indent=2} | string | 
| end_time_remark {data-indent=2} | string | 
| location {data-indent=1} | object | 服务位置
| start_location {data-indent=2} | string | 
| end_location {data-indent=2} | string | 
| service_introduction {data-indent=1} | string | 服务信息
| attach {data-indent=1} | string | 商户数据包
| notify_url {data-indent=1} | string | 商户回调地址
| openid {data-indent=1} | string | 用户标识
| total_amount {data-indent=1} | integer | 总金额
| profit_sharing {data-indent=1} | boolean | 微信支付服务分账标记
| goods_tag {data-indent=1} | string | 订单优惠标记

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->directComplete->postAsync([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'service_introduction' => '某某酒店',
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount' => 50000,
    'profit_sharing' => true,
    'goods_tag' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder/direct-complete')->postAsync([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'service_introduction' => '某某酒店',
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount' => 50000,
    'profit_sharing' => true,
    'goods_tag' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder/direct-complete']->postAsync([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'service_introduction' => '某某酒店',
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount' => 50000,
    'profit_sharing' => true,
    'goods_tag' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->directComplete->post([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'service_introduction' => '某某酒店',
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount' => 50000,
    'profit_sharing' => true,
    'goods_tag' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/direct-complete')->post([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'service_introduction' => '某某酒店',
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount' => 50000,
    'profit_sharing' => true,
    'goods_tag' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/direct-complete']->post([
  'json' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'appid' => 'wxd678efh567hg6787',
    'service_id' => '500001',
    'post_payments' => [[
      'name' => '就餐费用, 服务费',
      'amount' => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count' => 4,
    ],],
    'post_discounts' => [[
      'name' => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount' => 100,
      'count' => 2,
    ],],
    'time_range' => [
      'start_time' => '',
      'start_time_remark' => '',
      'end_time' => '',
      'end_time_remark' => '',
    ],
    'location' => [
      'start_location' => '',
      'end_location' => '',
    ],
    'service_introduction' => '某某酒店',
    'attach' => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url' => 'https://api.test.com',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount' => 50000,
    'profit_sharing' => true,
    'goods_tag' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no | string | 商户服务订单号
| appid | string | 公众账号ID
| service_id | string | 服务ID
| post_payments | object[] | 后付费项目
| name {data-indent=1} | string | 付费项目名称
| amount {data-indent=1} | integer | 金额
| description {data-indent=1} | string | 计费说明
| count {data-indent=1} | integer | 付费数量
| post_discounts | object[] | 后付费商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | integer | 优惠金额
| count {data-indent=1} | integer | 优惠数量
| time_range | object | 服务时间段
| start_time {data-indent=1} | string | 
| start_time_remark {data-indent=1} | string | 
| end_time {data-indent=1} | string | 
| end_time_remark {data-indent=1} | string | 
| location | object | 服务位置
| start_location {data-indent=1} | string | 
| end_location {data-indent=1} | string | 
| service_introduction | string | 服务信息
| mchid | string | 商户号
| order_id | string | 微信支付服务订单号
| state | string | 服务订单状态
| state_description | string | 订单状态说明
| attach | string | 商户数据包
| notify_url | string | 商户回调地址
| total_amount | integer | 总金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_9.shtml)