---
title: 查询活动详情
description: 查出活动id对应的活动详情
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardActivity->activities->_activity_id_->getAsync([
  'activity_id' => '371067',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-activity/activities/{activity_id}')->getAsync([
  'activity_id' => '371067',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-activity/activities/{activity_id}']->getAsync([
  'activity_id' => '371067',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardActivity->activities->_activity_id_->get([
  'activity_id' => '371067',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-activity/activities/{activity_id}')->get([
  'activity_id' => '371067',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-activity/activities/{activity_id}']->get([
  'activity_id' => '371067',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required}| string | 活动ID
| activity_status | string | 活动的当前状态
| create_time | string | 创建时间
| update_time | string | 更新时间
| card_id | string | 会员卡ID
| activity_name | string | 活动名称
| activity_type | string | 活动类型
| begin_time | string | 活动开始时间
| end_time | string | 活动结束时间
| award_send_period | object {data-tooltip="对应PHP的array"} | 发放时间段
| award_send_time {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 指定时间
| begin_time {data-required data-indent=2} | string | 发放开始时间
| end_time {data-required data-indent=2} | string | 发放结束时间
| award_send_day_time {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 指定时间段
| begin_day_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 每日发放开始时间
| hours {data-required data-indent=3} | integer | 时
| minutes {data-required data-indent=3} | integer | 分
| seconds {data-required data-indent=3} | integer | 秒
| end_day_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 每日发放结束时间
| hours {data-required data-indent=3} | integer | 时
| minutes {data-required data-indent=3} | integer | 分
| seconds {data-required data-indent=3} | integer | 秒
| stock_list | object[] {data-tooltip="对应PHP的array"} | 优惠券列表
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号
| stock_id {data-required data-indent=1} | string | 券批次ID
| out_request_no | string | 商户请求单号
| pay_activity_setting | object {data-tooltip="对应PHP的array"} | 支付后活动设置
| logo_url {data-required data-indent=1} | string | 商户logo
| activity_second_title {data-required data-indent=1} | string | 支付结果页活动副标题
| mchid_list {data-indent=1} | string[] | 活动曝光商户号
| activate_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 激活方式设置
| activate_type {data-required data-indent=2} | string | 激活类型
| activate_url {data-indent=2} | string | 跳转激活的url
| activate_miniprogram {data-indent=2} | object {data-tooltip="对应PHP的array"} | 跳转激活的小程序
| activate_appid {data-required data-indent=3} | string | 跳转激活的appid
| activate_path {data-required data-indent=3} | string | 跳转激活的path
| payment_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付设置
| payment_mode {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付模式
| payment_scene_list {data-indent=3} | string[] | 支付场景列表
| limit_bank {data-indent=2} | string | 指定银行的简称
| goods_tags {data-indent=2} | string[] | 订单优惠标记
| miniprogram_activity_setting | object {data-tooltip="对应PHP的array"} | 支付前会员活动设置
| outer_str {data-indent=1} | string[] | 
| award_jump_deploy {data-indent=1} | object {data-tooltip="对应PHP的array"} | 领奖页面跳转配置
| mini_program_appid {data-indent=2} | string | 小程序AppID
| mini_program_path {data-indent=2} | string | 小程序path
| button_text {data-indent=2} | string | 跳转按钮文案

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_4.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/query-activity-detail.html)
