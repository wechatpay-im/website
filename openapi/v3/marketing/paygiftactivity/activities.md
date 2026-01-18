---
title: 获取支付有礼活动列表
description: 商户根据一定过滤条件，查询已创建的支付有礼活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-required data-indent=1} | integer | 分页页码
| limit {data-required data-indent=1} | integer | 分页大小
| activity_name {data-indent=1} | string | 活动名称
| activity_status {data-indent=1} | string | 活动状态<br/>`CREATE_ACT_STATUS` \| `ONGOING_ACT_STATUS` \| `TERMINATE_ACT_STATUS` \| `STOP_ACT_STATUS` \| `OVER_TIME_ACT_STATUS` \| `CREATE_ACT_FAILED` 枚举值之一
| award_type {data-indent=1} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->getAsync([
  'query' => [
    'offset'          => 0,
    'limit'           => 0,
    'activity_name'   => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type'      => 'BUSIFAVOR',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities')->getAsync([
  'query' => [
    'offset'          => 0,
    'limit'           => 0,
    'activity_name'   => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type'      => 'BUSIFAVOR',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities']->getAsync([
  'query' => [
    'offset'          => 0,
    'limit'           => 0,
    'activity_name'   => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type'      => 'BUSIFAVOR',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->get([
  'query' => [
    'offset'          => 0,
    'limit'           => 0,
    'activity_name'   => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type'      => 'BUSIFAVOR',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities')->get([
  'query' => [
    'offset'          => 0,
    'limit'           => 0,
    'activity_name'   => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type'      => 'BUSIFAVOR',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities']->get([
  'query' => [
    'offset'          => 0,
    'limit'           => 0,
    'activity_name'   => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type'      => 'BUSIFAVOR',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset | integer | 分页页码
| limit | integer | 分页大小
| total_count | integer | 总数
| data | object[] {data-tooltip="对应PHP的array"} | 结果集
| activity_base_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动基本信息
| activity_name {data-required data-indent=2} | string | 活动名称
| activity_second_title {data-required data-indent=2} | string | 活动副标题
| merchant_logo_url {data-required data-indent=2} | string | 商户logo
| background_color {data-indent=2} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| begin_time {data-indent=2} | string | 活动开始时间
| end_time {data-indent=2} | string | 活动结束时间
| available_periods {data-indent=2} | object {data-tooltip="对应PHP的array"} | 可用时间段
| available_time {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 可用时间
| begin_time {data-indent=4} | string | 可用开始时间
| end_time {data-indent=4} | string | 可用结束时间
| available_day_time {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 每日可用时间
| begin_day_time {data-indent=4} | string | 每日可用开始时间
| end_day_time {data-indent=4} | string | 每日可用结束时间
| out_request_no {data-required data-indent=2} | string | 商户请求单号
| delivery_purpose {data-required data-indent=2} | string | 投放目的<br/>`OFF_LINE_PAY` \| `JUMP_MINI_APP` 枚举值之一
| mini_programs_appid {data-indent=2} | string | 商家小程序appid
| mini_programs_path {data-indent=2} | string | 商家小程序path
| advanced_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动高级设置
| delivery_user_category {data-indent=2} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_member_appid {data-indent=2} | string | 商家会员appid
| payment_mode {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付模式
| payment_scene_list {data-indent=3} | string[] | 支付场景列表<br/>`APP_SCENE` 枚举值
| payment_method_information {data-indent=3} | object {data-tooltip="对应PHP的array"} | 支付方式信息
| payment_method {data-indent=4} | string | 支付方式<br/>`CFT` \| `SPECIFIC_BANK_CARD` 枚举值之一
| bank_abbreviation {data-indent=4} | string | 银行简称
| goods_tags {data-indent=2} | string[] | 订单优惠标记
| activity_id {data-indent=1} | string | 活动id
| award_send_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 活动奖品发放规则
| full_send_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 满送活动奖品发放规则
| award_type {data-required data-indent=3} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_option {data-required data-indent=3} | string | 发券商户号选项<br/>`IN_SEVICE_COUPON_MERCHANT` \| `MANUAL_INPUT_MERCHANT` 枚举值之一
| transaction_amount_minimum {data-required data-indent=3} | integer | 消费金额门槛
| send_content {data-required data-indent=3} | string | 发放内容<br/>`SINGLE_COUPON` \| `GIFT_PACKAGE` 枚举值之一
| award_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 奖品基本信息列表
| stock_id {data-indent=4} | string | 代金券批次Id
| original_image_url {data-indent=4} | string | 奖品原始图（大图）
| thumbnail_url {data-indent=4} | string | 奖品缩略图（小图）
| merchant_id_list {data-indent=3} | string[] | 发券商户号列表
| step_send_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 阶梯送发放规则
| award_type {data-required data-indent=3} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_option {data-required data-indent=3} | string | 发券商户号选项<br/>`IN_SEVICE_COUPON_MERCHANT` \| `MANUAL_INPUT_MERCHANT` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012489126) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012493214)
