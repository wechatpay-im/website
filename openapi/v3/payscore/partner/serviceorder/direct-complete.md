---
title: 创单结单合并
description: 该接口适用于无需微信支付分做订单风控判断的业务场景，在服务完成后，通过该接口对用户进行免密代扣。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 服务商应用ID
| sub_appid {data-required data-indent=1} | string | 子商户应用ID
| sub_mchid {data-indent=1} | string | 子商户号
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| service_introduction {data-required data-indent=1} | string | 服务信息
| post_payments {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| description {data-indent=2} | string | 付费说明
| amount {data-indent=2} | integer | 付费金额
| count {data-indent=2} | integer | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-required data-indent=2} | string | 优惠名称
| description {data-required data-indent=2} | string | 优惠说明
| amount {data-indent=2} | integer | 优惠金额
| count {data-indent=2} | integer | 优惠数量
| total_amount {data-required data-indent=1} | integer | 总金额
| time_range {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务时间段
| start_time {data-required data-indent=2} | string | 服务开始时间
| start_time_remark {data-indent=2} | string | 服务开始时间备注
| end_time {data-indent=2} | string | 服务结束时间
| end_time_remark {data-indent=2} | string | 服务结束时间备注
| location {data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=2} | string | 服务开始地点
| end_location {data-indent=2} | string | 服务结束地点
| profit_sharing {data-indent=1} | boolean | 微信支付服务分账标记
| goods_tag {data-indent=1} | string | 订单优惠标记
| attach {data-indent=1} | string | 商户数据包
| notify_url {data-required data-indent=1} | string | 商户回调地址
| openid {data-indent=1} | string | 服务商公众号下的用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->serviceorder->directComplete->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'sub_appid'            => 'wxd678efh567hg6999',
    'sub_mchid'            => '1900000109',
    'out_order_no'         => '1234323JKHDFE1243252',
    'service_introduction' => 'XX充电宝',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'         => 50000,
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
    'profit_sharing'       => true,
    'goods_tag'            => 'goods_tag',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/serviceorder/direct-complete')->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'sub_appid'            => 'wxd678efh567hg6999',
    'sub_mchid'            => '1900000109',
    'out_order_no'         => '1234323JKHDFE1243252',
    'service_introduction' => 'XX充电宝',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'         => 50000,
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
    'profit_sharing'       => true,
    'goods_tag'            => 'goods_tag',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/serviceorder/direct-complete']->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'sub_appid'            => 'wxd678efh567hg6999',
    'sub_mchid'            => '1900000109',
    'out_order_no'         => '1234323JKHDFE1243252',
    'service_introduction' => 'XX充电宝',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'         => 50000,
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
    'profit_sharing'       => true,
    'goods_tag'            => 'goods_tag',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->serviceorder->directComplete->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'sub_appid'            => 'wxd678efh567hg6999',
    'sub_mchid'            => '1900000109',
    'out_order_no'         => '1234323JKHDFE1243252',
    'service_introduction' => 'XX充电宝',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'         => 50000,
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
    'profit_sharing'       => true,
    'goods_tag'            => 'goods_tag',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/serviceorder/direct-complete')->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'sub_appid'            => 'wxd678efh567hg6999',
    'sub_mchid'            => '1900000109',
    'out_order_no'         => '1234323JKHDFE1243252',
    'service_introduction' => 'XX充电宝',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'         => 50000,
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
    'profit_sharing'       => true,
    'goods_tag'            => 'goods_tag',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/serviceorder/direct-complete']->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'appid'                => 'wxd678efh567hg6787',
    'sub_appid'            => 'wxd678efh567hg6999',
    'sub_mchid'            => '1900000109',
    'out_order_no'         => '1234323JKHDFE1243252',
    'service_introduction' => 'XX充电宝',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'description' => '就餐人均100元',
      'amount'      => 40000,
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'amount'      => 100,
      'count'       => 2,
    ],],
    'total_amount'         => 50000,
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
    'profit_sharing'       => true,
    'goods_tag'            => 'goods_tag',
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012923757)
