---
title: 创建全场满额送活动
description: 商户可以创建满额送活动，用户支付后送全场券，提升交易额。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
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
| advanced_setting {data-indent=1} | object {data-tooltip="对应PHP的array"} | 
| payment_method_information {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付方式信息
| payment_method {data-indent=3} | string | 支付方式<br/>`CFT` \| `SPECIFIC_BANK_CARD` 枚举值之一
| bank_abbreviation {data-indent=3} | string | 银行简称
| delivery_user_category {data-indent=2} | string | 投放用户类别<br/>`DELIVERY_ALL_PERSON` \| `DELIVERY_MEMBER_PERSON` 枚举值之一
| merchant_member_appid {data-indent=2} | string | 商家会员appid
| payment_mode {data-indent=2} | object {data-tooltip="对应PHP的array"} | 支付模式
| payment_scene_list {data-indent=3} | string[] | 支付场景列表<br/>`APP_SCENE` \| `SWING_CARD_SCENE` \| `NO_SECRET_SCENE` \| `MINIAPP_SCENE` \| `FACE_PAY_SCENE` \| `OTHER_SCENE` 枚举值之一
| goods_tags {data-indent=2} | string[] | 订单优惠标记
| award_send_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 阶梯送发放规则
| award_type {data-required data-indent=2} | string | 奖品类型<br/>`BUSIFAVOR` 枚举值
| merchant_option {data-required data-indent=2} | string | 发券商户号选项<br/>`IN_SEVICE_COUPON_MERCHANT` \| `MANUAL_INPUT_MERCHANT` 枚举值之一
| transaction_amount_minimum {data-required data-indent=2} | integer | 消费金额门槛
| send_content {data-required data-indent=2} | string | 发放内容<br/>`SINGLE_COUPON` \| `GIFT_PACKAGE` 枚举值之一
| award_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 奖品基本信息列表
| stock_id {data-indent=3} | string | 代金券批次Id
| original_image_url {data-indent=3} | string | 奖品原始图（大图）
| thumbnail_url {data-indent=3} | string | 奖品缩略图（小图）
| merchant_id_list {data-indent=2} | string[] | 发券商户号列表

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->uniqueThresholdActivity->postAsync([
  'json' => [
    'activity_base_info' => [
      'activity_name'         => '良品铺子回馈活动',
      'activity_second_title' => '海飞丝的券',
      'merchant_logo_url'     => 'https://tool.oschina.net/regex.jpg',
      'background_color'      => 'Color010',
      'begin_time'            => '2015-05-20T13:29:35.120+08:00',
      'end_time'              => '2015-05-20T13:29:35.120+08:00',
      'available_periods'     => [
        'available_time'     => [[
          'begin_time' => '2015-05-20T00:00:00.000+08:00',
          'end_time'   => '2015-05-20T23:59:59.000+08:00',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '110000',
          'end_day_time'   => '135959',
        ],],
      ],
      'out_request_no'        => '100002322019090134234sfdf',
      'delivery_purpose'      => 'OFF_LINE_PAY',
      'mini_programs_appid'   => 'wx23232232323',
      'mini_programs_path'    => '/path/index/index',
    ],
    'advanced_setting'   => [
      'payment_method_information' => [
        'payment_method'    => 'CFT',
        'bank_abbreviation' => 'AHRCUB_CREDIT',
      ],
      'delivery_user_category'     => 'DELIVERY_ALL_PERSON',
      'merchant_member_appid'      => '34567890',
      'payment_mode'               => [
        'payment_scene_list' => ['APP_SCENE'],
      ],
      'goods_tags'                 => ['string'],
    ],
    'award_send_rule'    => [
      'award_type'                 => 'BUSIFAVOR',
      'merchant_option'            => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 100,
      'send_content'               => 'SINGLE_COUPON',
      'award_list'                 => [[
        'stock_id'           => '98065001',
        'original_image_url' => 'https://tool.oschina.net/regex.jpg',
        'thumbnail_url'      => 'https://tool.oschina.net/regex.jpg',
      ],],
      'merchant_id_list'           => ['string'],
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
      'activity_name'         => '良品铺子回馈活动',
      'activity_second_title' => '海飞丝的券',
      'merchant_logo_url'     => 'https://tool.oschina.net/regex.jpg',
      'background_color'      => 'Color010',
      'begin_time'            => '2015-05-20T13:29:35.120+08:00',
      'end_time'              => '2015-05-20T13:29:35.120+08:00',
      'available_periods'     => [
        'available_time'     => [[
          'begin_time' => '2015-05-20T00:00:00.000+08:00',
          'end_time'   => '2015-05-20T23:59:59.000+08:00',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '110000',
          'end_day_time'   => '135959',
        ],],
      ],
      'out_request_no'        => '100002322019090134234sfdf',
      'delivery_purpose'      => 'OFF_LINE_PAY',
      'mini_programs_appid'   => 'wx23232232323',
      'mini_programs_path'    => '/path/index/index',
    ],
    'advanced_setting'   => [
      'payment_method_information' => [
        'payment_method'    => 'CFT',
        'bank_abbreviation' => 'AHRCUB_CREDIT',
      ],
      'delivery_user_category'     => 'DELIVERY_ALL_PERSON',
      'merchant_member_appid'      => '34567890',
      'payment_mode'               => [
        'payment_scene_list' => ['APP_SCENE'],
      ],
      'goods_tags'                 => ['string'],
    ],
    'award_send_rule'    => [
      'award_type'                 => 'BUSIFAVOR',
      'merchant_option'            => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 100,
      'send_content'               => 'SINGLE_COUPON',
      'award_list'                 => [[
        'stock_id'           => '98065001',
        'original_image_url' => 'https://tool.oschina.net/regex.jpg',
        'thumbnail_url'      => 'https://tool.oschina.net/regex.jpg',
      ],],
      'merchant_id_list'           => ['string'],
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
      'activity_name'         => '良品铺子回馈活动',
      'activity_second_title' => '海飞丝的券',
      'merchant_logo_url'     => 'https://tool.oschina.net/regex.jpg',
      'background_color'      => 'Color010',
      'begin_time'            => '2015-05-20T13:29:35.120+08:00',
      'end_time'              => '2015-05-20T13:29:35.120+08:00',
      'available_periods'     => [
        'available_time'     => [[
          'begin_time' => '2015-05-20T00:00:00.000+08:00',
          'end_time'   => '2015-05-20T23:59:59.000+08:00',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '110000',
          'end_day_time'   => '135959',
        ],],
      ],
      'out_request_no'        => '100002322019090134234sfdf',
      'delivery_purpose'      => 'OFF_LINE_PAY',
      'mini_programs_appid'   => 'wx23232232323',
      'mini_programs_path'    => '/path/index/index',
    ],
    'advanced_setting'   => [
      'payment_method_information' => [
        'payment_method'    => 'CFT',
        'bank_abbreviation' => 'AHRCUB_CREDIT',
      ],
      'delivery_user_category'     => 'DELIVERY_ALL_PERSON',
      'merchant_member_appid'      => '34567890',
      'payment_mode'               => [
        'payment_scene_list' => ['APP_SCENE'],
      ],
      'goods_tags'                 => ['string'],
    ],
    'award_send_rule'    => [
      'award_type'                 => 'BUSIFAVOR',
      'merchant_option'            => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 100,
      'send_content'               => 'SINGLE_COUPON',
      'award_list'                 => [[
        'stock_id'           => '98065001',
        'original_image_url' => 'https://tool.oschina.net/regex.jpg',
        'thumbnail_url'      => 'https://tool.oschina.net/regex.jpg',
      ],],
      'merchant_id_list'           => ['string'],
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
      'activity_name'         => '良品铺子回馈活动',
      'activity_second_title' => '海飞丝的券',
      'merchant_logo_url'     => 'https://tool.oschina.net/regex.jpg',
      'background_color'      => 'Color010',
      'begin_time'            => '2015-05-20T13:29:35.120+08:00',
      'end_time'              => '2015-05-20T13:29:35.120+08:00',
      'available_periods'     => [
        'available_time'     => [[
          'begin_time' => '2015-05-20T00:00:00.000+08:00',
          'end_time'   => '2015-05-20T23:59:59.000+08:00',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '110000',
          'end_day_time'   => '135959',
        ],],
      ],
      'out_request_no'        => '100002322019090134234sfdf',
      'delivery_purpose'      => 'OFF_LINE_PAY',
      'mini_programs_appid'   => 'wx23232232323',
      'mini_programs_path'    => '/path/index/index',
    ],
    'advanced_setting'   => [
      'payment_method_information' => [
        'payment_method'    => 'CFT',
        'bank_abbreviation' => 'AHRCUB_CREDIT',
      ],
      'delivery_user_category'     => 'DELIVERY_ALL_PERSON',
      'merchant_member_appid'      => '34567890',
      'payment_mode'               => [
        'payment_scene_list' => ['APP_SCENE'],
      ],
      'goods_tags'                 => ['string'],
    ],
    'award_send_rule'    => [
      'award_type'                 => 'BUSIFAVOR',
      'merchant_option'            => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 100,
      'send_content'               => 'SINGLE_COUPON',
      'award_list'                 => [[
        'stock_id'           => '98065001',
        'original_image_url' => 'https://tool.oschina.net/regex.jpg',
        'thumbnail_url'      => 'https://tool.oschina.net/regex.jpg',
      ],],
      'merchant_id_list'           => ['string'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/unique-threshold-activity')->post([
  'json' => [
    'activity_base_info' => [
      'activity_name'         => '良品铺子回馈活动',
      'activity_second_title' => '海飞丝的券',
      'merchant_logo_url'     => 'https://tool.oschina.net/regex.jpg',
      'background_color'      => 'Color010',
      'begin_time'            => '2015-05-20T13:29:35.120+08:00',
      'end_time'              => '2015-05-20T13:29:35.120+08:00',
      'available_periods'     => [
        'available_time'     => [[
          'begin_time' => '2015-05-20T00:00:00.000+08:00',
          'end_time'   => '2015-05-20T23:59:59.000+08:00',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '110000',
          'end_day_time'   => '135959',
        ],],
      ],
      'out_request_no'        => '100002322019090134234sfdf',
      'delivery_purpose'      => 'OFF_LINE_PAY',
      'mini_programs_appid'   => 'wx23232232323',
      'mini_programs_path'    => '/path/index/index',
    ],
    'advanced_setting'   => [
      'payment_method_information' => [
        'payment_method'    => 'CFT',
        'bank_abbreviation' => 'AHRCUB_CREDIT',
      ],
      'delivery_user_category'     => 'DELIVERY_ALL_PERSON',
      'merchant_member_appid'      => '34567890',
      'payment_mode'               => [
        'payment_scene_list' => ['APP_SCENE'],
      ],
      'goods_tags'                 => ['string'],
    ],
    'award_send_rule'    => [
      'award_type'                 => 'BUSIFAVOR',
      'merchant_option'            => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 100,
      'send_content'               => 'SINGLE_COUPON',
      'award_list'                 => [[
        'stock_id'           => '98065001',
        'original_image_url' => 'https://tool.oschina.net/regex.jpg',
        'thumbnail_url'      => 'https://tool.oschina.net/regex.jpg',
      ],],
      'merchant_id_list'           => ['string'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/unique-threshold-activity']->post([
  'json' => [
    'activity_base_info' => [
      'activity_name'         => '良品铺子回馈活动',
      'activity_second_title' => '海飞丝的券',
      'merchant_logo_url'     => 'https://tool.oschina.net/regex.jpg',
      'background_color'      => 'Color010',
      'begin_time'            => '2015-05-20T13:29:35.120+08:00',
      'end_time'              => '2015-05-20T13:29:35.120+08:00',
      'available_periods'     => [
        'available_time'     => [[
          'begin_time' => '2015-05-20T00:00:00.000+08:00',
          'end_time'   => '2015-05-20T23:59:59.000+08:00',
        ],],
        'available_day_time' => [[
          'begin_day_time' => '110000',
          'end_day_time'   => '135959',
        ],],
      ],
      'out_request_no'        => '100002322019090134234sfdf',
      'delivery_purpose'      => 'OFF_LINE_PAY',
      'mini_programs_appid'   => 'wx23232232323',
      'mini_programs_path'    => '/path/index/index',
    ],
    'advanced_setting'   => [
      'payment_method_information' => [
        'payment_method'    => 'CFT',
        'bank_abbreviation' => 'AHRCUB_CREDIT',
      ],
      'delivery_user_category'     => 'DELIVERY_ALL_PERSON',
      'merchant_member_appid'      => '34567890',
      'payment_mode'               => [
        'payment_scene_list' => ['APP_SCENE'],
      ],
      'goods_tags'                 => ['string'],
    ],
    'award_send_rule'    => [
      'award_type'                 => 'BUSIFAVOR',
      'merchant_option'            => 'IN_SEVICE_COUPON_MERCHANT',
      'transaction_amount_minimum' => 100,
      'send_content'               => 'SINGLE_COUPON',
      'award_list'                 => [[
        'stock_id'           => '98065001',
        'original_image_url' => 'https://tool.oschina.net/regex.jpg',
        'thumbnail_url'      => 'https://tool.oschina.net/regex.jpg',
      ],],
      'merchant_id_list'           => ['string'],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动id
| create_time {data-required} | string | 创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012487898) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012492900)
