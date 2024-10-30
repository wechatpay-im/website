---
title: 创建全场满额送活动
description: 商户可以创建满额送活动，用户支付后送全场券，提升交易额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| activity_base_info {data-indent=1} | object | 
| activity_name {data-indent=2} | string | 
| activity_second_title {data-indent=2} | string | 
| merchant_logo_url {data-indent=2} | string | 
| background_color {data-indent=2} | string | 背景颜色
| begin_time {data-indent=2} | string | 
| end_time {data-indent=2} | string | 
| available_periods {data-indent=2} | object | 可用时间段
| available_time {data-indent=3} | object[] | 
| begin_time {data-indent=4} | string | 可用开始时间
| end_time {data-indent=4} | string | 可用结束时间
| available_day_time {data-indent=3} | object[] | 
| begin_day_time {data-indent=4} | string | 每日可用开始时间
| end_day_time {data-indent=4} | string | 每日可用结束时间
| out_request_no {data-indent=2} | string | 商户请求单号
| delivery_purpose {data-indent=2} | string | 投放目的
| mini_programs_appid {data-indent=2} | string | 
| mini_programs_path {data-indent=2} | string | 
| advanced_setting {data-indent=1} | object | 
| delivery_user_category {data-indent=2} | string | 奖品类型
| merchant_member_appid {data-indent=2} | string | 
| payment_mode {data-indent=2} | object | 
| payment_scene_list {data-indent=3} | string[] | 
| payment_method_information {data-indent=3} | object | 
| payment_method {data-indent=4} | string | 
| bank_abbreviation {data-indent=4} | string | 
| goods_tags {data-indent=2} | string[] | 
| award_send_rule {data-indent=1} | object | 
| award_type {data-indent=2} | string | 奖品类型
| merchant_option {data-indent=2} | string | 发券商户号选项
| transaction_amount_minimum {data-indent=2} | integer | 
| send_content {data-indent=2} | string | 发放内容
| award_list {data-indent=2} | object[] | 
| stock_id {data-indent=3} | string | 
| original_image_url {data-indent=3} | string | 
| thumbnail_url {data-indent=3} | string | 
| merchant_id_list {data-indent=2} | string[] | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->uniqueThresholdActivity->postAsync([
  'json' => [
    'activity_base_info' => [
      'activity_name' => '',
      'activity_second_title' => '',
      'merchant_logo_url' => '',
      'background_color' => 'Color010',
      'begin_time' => '',
      'end_time' => '',
      'available_periods' => [
        'available_time' => [[
          'begin_time' => '',
          'end_time' => '',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '',
          'end_day_time' => '',
        ],],
      ],
      'out_request_no' => '',
      'delivery_purpose' => 'OFF_LINE_PAY',
      'mini_programs_appid' => '',
      'mini_programs_path' => '',
    ],
    'advanced_setting' => [
      'delivery_user_category' => 'BUSIFAVOR',
      'merchant_member_appid' => '',
      'payment_mode' => [
        'payment_scene_list' => ['string'],
        'payment_method_information' => [
          'payment_method' => '',
          'bank_abbreviation' => '',
        ],
      ],
      'goods_tags' => ['string'],
    ],
    'award_send_rule' => [
      'award_type' => 'BUSIFAVOR',
      'merchant_option' => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 0,
      'send_content' => 'SINGLE_COUPON',
      'award_list' => [[
        'stock_id' => '',
        'original_image_url' => '',
        'thumbnail_url' => '',
      ],],
      'merchant_id_list' => ['string'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/unique-threshold-activity')->postAsync([
  'json' => [
    'activity_base_info' => [
      'activity_name' => '',
      'activity_second_title' => '',
      'merchant_logo_url' => '',
      'background_color' => 'Color010',
      'begin_time' => '',
      'end_time' => '',
      'available_periods' => [
        'available_time' => [[
          'begin_time' => '',
          'end_time' => '',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '',
          'end_day_time' => '',
        ],],
      ],
      'out_request_no' => '',
      'delivery_purpose' => 'OFF_LINE_PAY',
      'mini_programs_appid' => '',
      'mini_programs_path' => '',
    ],
    'advanced_setting' => [
      'delivery_user_category' => 'BUSIFAVOR',
      'merchant_member_appid' => '',
      'payment_mode' => [
        'payment_scene_list' => ['string'],
        'payment_method_information' => [
          'payment_method' => '',
          'bank_abbreviation' => '',
        ],
      ],
      'goods_tags' => ['string'],
    ],
    'award_send_rule' => [
      'award_type' => 'BUSIFAVOR',
      'merchant_option' => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 0,
      'send_content' => 'SINGLE_COUPON',
      'award_list' => [[
        'stock_id' => '',
        'original_image_url' => '',
        'thumbnail_url' => '',
      ],],
      'merchant_id_list' => ['string'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/unique-threshold-activity']->postAsync([
  'json' => [
    'activity_base_info' => [
      'activity_name' => '',
      'activity_second_title' => '',
      'merchant_logo_url' => '',
      'background_color' => 'Color010',
      'begin_time' => '',
      'end_time' => '',
      'available_periods' => [
        'available_time' => [[
          'begin_time' => '',
          'end_time' => '',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '',
          'end_day_time' => '',
        ],],
      ],
      'out_request_no' => '',
      'delivery_purpose' => 'OFF_LINE_PAY',
      'mini_programs_appid' => '',
      'mini_programs_path' => '',
    ],
    'advanced_setting' => [
      'delivery_user_category' => 'BUSIFAVOR',
      'merchant_member_appid' => '',
      'payment_mode' => [
        'payment_scene_list' => ['string'],
        'payment_method_information' => [
          'payment_method' => '',
          'bank_abbreviation' => '',
        ],
      ],
      'goods_tags' => ['string'],
    ],
    'award_send_rule' => [
      'award_type' => 'BUSIFAVOR',
      'merchant_option' => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 0,
      'send_content' => 'SINGLE_COUPON',
      'award_list' => [[
        'stock_id' => '',
        'original_image_url' => '',
        'thumbnail_url' => '',
      ],],
      'merchant_id_list' => ['string'],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->uniqueThresholdActivity->post([
  'json' => [
    'activity_base_info' => [
      'activity_name' => '',
      'activity_second_title' => '',
      'merchant_logo_url' => '',
      'background_color' => 'Color010',
      'begin_time' => '',
      'end_time' => '',
      'available_periods' => [
        'available_time' => [[
          'begin_time' => '',
          'end_time' => '',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '',
          'end_day_time' => '',
        ],],
      ],
      'out_request_no' => '',
      'delivery_purpose' => 'OFF_LINE_PAY',
      'mini_programs_appid' => '',
      'mini_programs_path' => '',
    ],
    'advanced_setting' => [
      'delivery_user_category' => 'BUSIFAVOR',
      'merchant_member_appid' => '',
      'payment_mode' => [
        'payment_scene_list' => ['string'],
        'payment_method_information' => [
          'payment_method' => '',
          'bank_abbreviation' => '',
        ],
      ],
      'goods_tags' => ['string'],
    ],
    'award_send_rule' => [
      'award_type' => 'BUSIFAVOR',
      'merchant_option' => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 0,
      'send_content' => 'SINGLE_COUPON',
      'award_list' => [[
        'stock_id' => '',
        'original_image_url' => '',
        'thumbnail_url' => '',
      ],],
      'merchant_id_list' => ['string'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/unique-threshold-activity')->post([
  'json' => [
    'activity_base_info' => [
      'activity_name' => '',
      'activity_second_title' => '',
      'merchant_logo_url' => '',
      'background_color' => 'Color010',
      'begin_time' => '',
      'end_time' => '',
      'available_periods' => [
        'available_time' => [[
          'begin_time' => '',
          'end_time' => '',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '',
          'end_day_time' => '',
        ],],
      ],
      'out_request_no' => '',
      'delivery_purpose' => 'OFF_LINE_PAY',
      'mini_programs_appid' => '',
      'mini_programs_path' => '',
    ],
    'advanced_setting' => [
      'delivery_user_category' => 'BUSIFAVOR',
      'merchant_member_appid' => '',
      'payment_mode' => [
        'payment_scene_list' => ['string'],
        'payment_method_information' => [
          'payment_method' => '',
          'bank_abbreviation' => '',
        ],
      ],
      'goods_tags' => ['string'],
    ],
    'award_send_rule' => [
      'award_type' => 'BUSIFAVOR',
      'merchant_option' => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 0,
      'send_content' => 'SINGLE_COUPON',
      'award_list' => [[
        'stock_id' => '',
        'original_image_url' => '',
        'thumbnail_url' => '',
      ],],
      'merchant_id_list' => ['string'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/unique-threshold-activity']->post([
  'json' => [
    'activity_base_info' => [
      'activity_name' => '',
      'activity_second_title' => '',
      'merchant_logo_url' => '',
      'background_color' => 'Color010',
      'begin_time' => '',
      'end_time' => '',
      'available_periods' => [
        'available_time' => [[
          'begin_time' => '',
          'end_time' => '',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '',
          'end_day_time' => '',
        ],],
      ],
      'out_request_no' => '',
      'delivery_purpose' => 'OFF_LINE_PAY',
      'mini_programs_appid' => '',
      'mini_programs_path' => '',
    ],
    'advanced_setting' => [
      'delivery_user_category' => 'BUSIFAVOR',
      'merchant_member_appid' => '',
      'payment_mode' => [
        'payment_scene_list' => ['string'],
        'payment_method_information' => [
          'payment_method' => '',
          'bank_abbreviation' => '',
        ],
      ],
      'goods_tags' => ['string'],
    ],
    'award_send_rule' => [
      'award_type' => 'BUSIFAVOR',
      'merchant_option' => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 0,
      'send_content' => 'SINGLE_COUPON',
      'award_list' => [[
        'stock_id' => '',
        'original_image_url' => '',
        'thumbnail_url' => '',
      ],],
      'merchant_id_list' => ['string'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 
| create_time | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_2.shtml)
