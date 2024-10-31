---
title: 查询活动详情接口
description: 商户创建活动后，可以通过该接口查询支付有礼的活动详情，用于管理活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 活动id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->_activity_id_->getAsync([
  'activity_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}')->getAsync([
  'activity_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities/{activity_id}']->getAsync([
  'activity_id' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->_activity_id_->get([
  'activity_id' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}')->get([
  'activity_id' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities/{activity_id}']->get([
  'activity_id' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 
| activity_type | string | 活动类型<br/>`FULL_SEND_ACT_TYPE` \| `STEP_SEND_ACT_TYPE` \| `SPECIFIC_SEND_ACT_TYPE` 枚举值之一
| activity_status | string | 活动状态<br/>`CREATE_ACT_STATUS` \| `ONGOING_ACT_STATUS` \| `TERMINATE_ACT_STATUS` \| `STOP_ACT_STATUS` \| `OVER_TIME_ACT_STATUS` \| `CREATE_ACT_FAILED` 枚举值之一
| creator_merchant_id | string | 
| belong_merchant_id | string | 
| pause_time | string | 
| recovery_time | string | 
| create_time | string | 
| update_time | string | 
| activity_base_info | object | 
| activity_name {data-indent=1} | string | 
| activity_second_title {data-indent=1} | string | 
| merchant_logo_url {data-indent=1} | string | 
| background_color {data-indent=1} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| begin_time {data-indent=1} | string | 
| end_time {data-indent=1} | string | 
| available_periods {data-indent=1} | object | 可用时间段
| available_time {data-indent=2} | object[] | 
| begin_time {data-indent=3} | string | 可用开始时间
| end_time {data-indent=3} | string | 可用结束时间
| available_day_time {data-indent=2} | object[] | 
| begin_day_time {data-indent=3} | string | 每日可用开始时间
| end_day_time {data-indent=3} | string | 每日可用结束时间
| out_request_no {data-indent=1} | string | 商户请求单号
| delivery_purpose {data-indent=1} | string | 投放目的<br/>`OFF_LINE_PAY` \| `JUMP_MINI_APP` 枚举值之一
| mini_programs_appid {data-indent=1} | string | 
| mini_programs_path {data-indent=1} | string | 
| advanced_setting | object | 
| delivery_user_category {data-indent=1} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_member_appid {data-indent=1} | string | 
| payment_mode {data-indent=1} | object | 
| payment_scene_list {data-indent=2} | string[] | APP_SCENE` 枚举值
| payment_method_information {data-indent=2} | object | 
| payment_method {data-indent=3} | string | 
| bank_abbreviation {data-indent=3} | string | 
| goods_tags {data-indent=1} | string[] | 
| award_send_rule | object | 
| full_send_rule {data-indent=1} | object | 
| award_type {data-indent=2} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_option {data-indent=2} | string | 发券商户号选项<br/>`IN_SEVICE_COUPON_MERCHANT` \| `MANUAL_INPUT_MERCHANT` 枚举值之一
| transaction_amount_minimum {data-indent=2} | integer | 
| send_content {data-indent=2} | string | 发放内容<br/>`SINGLE_COUPON` \| `GIFT_PACKAGE` 枚举值之一
| award_list {data-indent=2} | object[] | 
| stock_id {data-indent=3} | string | 
| original_image_url {data-indent=3} | string | 
| thumbnail_url {data-indent=3} | string | 
| step_send_rule {data-indent=1} | object | 
| award_type {data-indent=2} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_option {data-indent=2} | string | 发券商户号选项<br/>`IN_SEVICE_COUPON_MERCHANT` \| `MANUAL_INPUT_MERCHANT` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_4.shtml)
