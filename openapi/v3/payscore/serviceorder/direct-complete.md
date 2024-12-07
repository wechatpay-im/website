---
title: 创单结单合并
description: 该接口适用于无需微信支付分做订单风控判断的业务场景，在服务完成后，通过该接口对用户进行免密代扣。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| post_payments {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-indent=2} | string | 付费项目名称
| amount {data-indent=2} | integer | 金额
| description {data-indent=2} | string | 计费说明
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-indent=2} | string | 优惠名称
| description {data-indent=2} | string | 优惠说明
| amount {data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| time_range {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务时间段
| start_time {data-indent=2} | string | 服务开始时间
| start_time_remark {data-indent=2} | string | 服务开始时间备注
| end_time {data-indent=2} | string | 服务结束时间
| end_time_remark {data-indent=2} | string | 服务结束时间备注
| location {data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=2} | string | 服务开始地点
| end_location {data-indent=2} | string | 服务结束地点
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
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '500001',
    'post_payments'        => [[
      'name'        => '就餐费用, 服务费',
      'amount'      => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time'          => '20091225121010',
      'end_time_remark'   => '租借结束时间',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'service_introduction' => '某某酒店',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount'         => 50000,
    'profit_sharing'       => true,
    'goods_tag'            => '',
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
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '500001',
    'post_payments'        => [[
      'name'        => '就餐费用, 服务费',
      'amount'      => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time'          => '20091225121010',
      'end_time_remark'   => '租借结束时间',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'service_introduction' => '某某酒店',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount'         => 50000,
    'profit_sharing'       => true,
    'goods_tag'            => '',
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
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '500001',
    'post_payments'        => [[
      'name'        => '就餐费用, 服务费',
      'amount'      => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time'          => '20091225121010',
      'end_time_remark'   => '租借结束时间',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'service_introduction' => '某某酒店',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount'         => 50000,
    'profit_sharing'       => true,
    'goods_tag'            => '',
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
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '500001',
    'post_payments'        => [[
      'name'        => '就餐费用, 服务费',
      'amount'      => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time'          => '20091225121010',
      'end_time_remark'   => '租借结束时间',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'service_introduction' => '某某酒店',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount'         => 50000,
    'profit_sharing'       => true,
    'goods_tag'            => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder/direct-complete')->post([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '500001',
    'post_payments'        => [[
      'name'        => '就餐费用, 服务费',
      'amount'      => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time'          => '20091225121010',
      'end_time_remark'   => '租借结束时间',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'service_introduction' => '某某酒店',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount'         => 50000,
    'profit_sharing'       => true,
    'goods_tag'            => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder/direct-complete']->post([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '500001',
    'post_payments'        => [[
      'name'        => '就餐费用, 服务费',
      'amount'      => 40000,
      'description' => '就餐人均100元，服务费：100/小时',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'start_time_remark' => '开始租借时间',
      'end_time'          => '20091225121010',
      'end_time_remark'   => '租借结束时间',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'service_introduction' => '某某酒店',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'total_amount'         => 50000,
    'profit_sharing'       => true,
    'goods_tag'            => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| appid {data-required} | string | 公众账号ID
| service_id {data-required} | string | 服务ID
| post_payments | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-indent=1} | string | 付费项目名称
| amount {data-indent=1} | integer | 金额
| description {data-indent=1} | string | 计费说明
| count {data-indent=1} | integer | 付费数量
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | integer | 优惠金额
| count {data-indent=1} | integer | 优惠数量
| time_range {data-required} | object {data-tooltip="对应PHP的array"} | 服务时间段
| start_time {data-indent=1} | string | 服务开始时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time {data-indent=1} | string | 服务结束时间
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| service_introduction {data-required} | string | 服务信息
| mchid {data-required} | string | 商户号
| order_id {data-required} | string | 微信支付服务订单号
| state {data-required} | string | 服务订单状态<br/>`CREATED` \| `DOING` \| `DONE` \| `REVOKED` \| `EXPIRED` 枚举值之一
| state_description {data-required} | string | 订单状态说明<br/>`USER_CONFIRM` \| `MCH_COMPLETE` 枚举值之一
| attach | string | 商户数据包
| notify_url | string | 商户回调地址
| total_amount | integer | 总金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_9.shtml)
