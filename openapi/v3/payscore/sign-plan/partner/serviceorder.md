---
title: 创建用户的签约计划详情对应的服务订单
description: 根据用户签约的计划和对应要服务的计划详情序号，创建服务订单。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| service_id {data-required data-indent=1} | string | 支付分服务ID
| sign_plan_id {data-required data-indent=1} | string | 待创建服务订单对应的用户的签约计划
| plan_detail_no {data-required data-indent=1} | number | 待创建服务订单对应的用户的签约计划详情序号
| appid {data-required data-indent=1} | string | 服务商的AppID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户的AppID
| openid {data-indent=1} | string | 服务商公众号下的用户标识
| sub_openid {data-indent=1} | string | 子商户公众号下的用户标识
| notify_url {data-required data-indent=1} | string | 商户扣款成功回调通知的地址
| service_introduction {data-required data-indent=1} | string | 服务信息
| time_range {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务时间
| start_time {data-required data-indent=2} | string | 服务开始时间
| end_time {data-indent=2} | string | 服务结束时间
| start_time_remark {data-indent=2} | string | 服务开始时间备注
| end_time_remark {data-indent=2} | string | 服务结束时间备注
| location {data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=2} | string | 服务开始地点
| end_location {data-indent=2} | string | 服务结束地点
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户侧订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->signPlan->partner->serviceorder->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'sign_plan_id'         => '01000033210000324638000000376258',
    'plan_detail_no'       => 2,
    'appid'                => 'wxd678efh567hg6787',
    'sub_mchid'            => '1900000109',
    'sub_appid'            => 'wxd678efh567hg6999',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'notify_url'           => 'https://api.test.com',
    'service_introduction' => '羽毛球课基础练习课程',
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'out_trade_no'         => '1514323JSVDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/sign-plan/partner/serviceorder')->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'sign_plan_id'         => '01000033210000324638000000376258',
    'plan_detail_no'       => 2,
    'appid'                => 'wxd678efh567hg6787',
    'sub_mchid'            => '1900000109',
    'sub_appid'            => 'wxd678efh567hg6999',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'notify_url'           => 'https://api.test.com',
    'service_introduction' => '羽毛球课基础练习课程',
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'out_trade_no'         => '1514323JSVDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/sign-plan/partner/serviceorder']->postAsync([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'sign_plan_id'         => '01000033210000324638000000376258',
    'plan_detail_no'       => 2,
    'appid'                => 'wxd678efh567hg6787',
    'sub_mchid'            => '1900000109',
    'sub_appid'            => 'wxd678efh567hg6999',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'notify_url'           => 'https://api.test.com',
    'service_introduction' => '羽毛球课基础练习课程',
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'out_trade_no'         => '1514323JSVDFE1243252',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->signPlan->partner->serviceorder->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'sign_plan_id'         => '01000033210000324638000000376258',
    'plan_detail_no'       => 2,
    'appid'                => 'wxd678efh567hg6787',
    'sub_mchid'            => '1900000109',
    'sub_appid'            => 'wxd678efh567hg6999',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'notify_url'           => 'https://api.test.com',
    'service_introduction' => '羽毛球课基础练习课程',
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'out_trade_no'         => '1514323JSVDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/sign-plan/partner/serviceorder')->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'sign_plan_id'         => '01000033210000324638000000376258',
    'plan_detail_no'       => 2,
    'appid'                => 'wxd678efh567hg6787',
    'sub_mchid'            => '1900000109',
    'sub_appid'            => 'wxd678efh567hg6999',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'notify_url'           => 'https://api.test.com',
    'service_introduction' => '羽毛球课基础练习课程',
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'out_trade_no'         => '1514323JSVDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/sign-plan/partner/serviceorder']->post([
  'json' => [
    'service_id'           => '2002000000000558128851361561536',
    'sign_plan_id'         => '01000033210000324638000000376258',
    'plan_detail_no'       => 2,
    'appid'                => 'wxd678efh567hg6787',
    'sub_mchid'            => '1900000109',
    'sub_appid'            => 'wxd678efh567hg6999',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'sub_openid'           => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'notify_url'           => 'https://api.test.com',
    'service_introduction' => '羽毛球课基础练习课程',
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'out_trade_no'         => '1514323JSVDFE1243252',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户订单号
| service_id {data-required} | string | 服务ID
| appid {data-required} | string | 服务商公众号ID
| mchid {data-required} | string | 服务商商户号
| sub_appid | string | 子商户公众号ID
| sub_mchid {data-required} | string | 子商户商户号
| service_introduction {data-required} | string | 服务信息
| state {data-required} | string | 服务订单状态
| state_description | string | 订单状态说明
| post_payments | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-indent=1} | string | 优惠名称
| amount {data-indent=1} | number | 优惠金额
| risk_fund | object {data-tooltip="对应PHP的array"} | 服务风险金
| amount {data-required data-indent=1} | number | 风险金额
| time_range | object {data-tooltip="对应PHP的array"} | 服务时间
| start_time {data-required data-indent=1} | string | 服务开始时间
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

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-payscore-plan/partner-service-order/create-partner-service-order.html)
