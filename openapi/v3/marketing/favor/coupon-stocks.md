---
title: 创建代金券批次
description: 通过调用此接口可创建代金券批次，包括预充值&免充值类型。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_name {data-required data-indent=1} | string | 批次名称
| available_begin_time {data-required data-indent=1} | string | 开始时间
| available_end_time {data-required data-indent=1} | string | 结束时间
| stock_use_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_coupons {data-required data-indent=2} | integer | 发放总上限
| max_amount {data-required data-indent=2} | integer | 总预算
| max_amount_by_day {data-indent=2} | integer | 单天发放上限金额
| max_coupons_per_user {data-required data-indent=2} | integer | 单个用户可领个数
| natural_person_limit {data-required data-indent=2} | boolean | 是否开启自然人限制
| prevent_api_abuse {data-required data-indent=2} | boolean | api发券防刷
| no_cash {data-required data-indent=1} | boolean | 是否无资金流
| stock_type {data-required data-indent=1} | string | 批次类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHAHGE` \| `RANDOM` \| `DISCOUNT_CUT` 枚举值之一
| comment {data-indent=1} | string | 批次备注
| belong_merchant {data-required data-indent=1} | string | 归属商户号
| pattern_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 样式信息
| description {data-indent=2} | string | 使用说明
| merchant_logo {data-indent=2} | string | 商户logo
| merchant_name {data-indent=2} | string | 商户名称
| background_color {data-indent=2} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| coupon_image {data-indent=2} | string | 券详情图片
| coupon_use_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 核销规则
| coupon_available_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-indent=3} | string | 开始时间
| available_end_time {data-indent=3} | string | 结束时间
| fix_available_time {data-indent=3} | object {data-tooltip="对应PHP的array"} | 固定时间段可用
| available_week_day {data-indent=4} | integer[] | 可用星期数(0代表周日，1代表周一，以此类推)<br/>`0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` 枚举值之一
| begin_time {data-indent=4} | integer | 当天开始时间
| end_time {data-indent=4} | integer | 当天结束时间
| second_day_available {data-indent=3} | boolean | 领取第二天生效
| available_time_after_receive {data-indent=3} | integer | 领取后有效时间
| fixed_normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| coupon_amount {data-required data-indent=3} | integer | 面额
| transaction_minimum {data-required data-indent=3} | integer | 门槛
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| discount_amount_max {data-indent=3} | integer | 最高折扣金额
| discount_percent {data-indent=3} | integer | 折扣百分比
| transaction_minimum {data-indent=3} | integer | 门槛
| exchange_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 换购券使用规则
| exchange_price {data-indent=3} | integer | 单品换购价
| transaction_minimum {data-indent=3} | integer | 消费门槛
| goods_tag {data-indent=2} | string[] | 订单优惠标记
| limit_pay {data-indent=2} | string[] | 指定支付方式
| limit_card {data-indent=2} | object {data-tooltip="对应PHP的array"} | 指定银行卡BIN
| name {data-indent=3} | string | 银行卡名称
| bin {data-indent=3} | string[] | 指定卡BIN
| trade_type {data-indent=2} | string[] | 支付方式<br/>`MICROAPP` \| `APPPAY` \| `PPAY` \| `CARD` \| `FACE` \| `OTHER` 枚举值之一
| available_items {data-indent=2} | string[] | 可核销商品编码
| unavailable_items {data-indent=2} | string[] | 不参与优惠商品编码
| available_merchants {data-indent=2} | string[] | 可核销商户号
| out_request_no {data-required data-indent=1} | string | 商户单据号
| ext_info {data-indent=1} | string | 扩展属性

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->couponStocks->postAsync([
  'json' => [
    'stock_name'           => '微信支付代金券批次',
    'available_begin_time' => '2015-05-20T13:29:35.120+08:00',
    'available_end_time'   => '2015-05-20T13:29:35.120+08:00',
    'stock_use_rule'       => [
      'max_coupons'          => 0,
      'max_amount'           => 0,
      'max_amount_by_day'    => 0,
      'max_coupons_per_user' => 0,
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'no_cash'              => true,
    'stock_type'           => 'NORMAL',
    'comment'              => '零售批次',
    'belong_merchant'      => '98568865',
    'pattern_info'         => [
      'description'      => '',
      'merchant_logo'    => '',
      'merchant_name'    => '',
      'background_color' => 'Color010',
      'coupon_image'     => '',
    ],
    'coupon_use_rule'      => [
      'coupon_available_time' => [
        'available_begin_time'         => '',
        'available_end_time'           => '',
        'fix_available_time'           => [
          'available_week_day' => [0, 1, 2, 3, 4, 5, 6],
          'begin_time'         => 3600,
          'end_time'           => 86399,
        ],
        'second_day_available'         => true,
        'available_time_after_receive' => 0,
      ],
      'fixed_normal_coupon'   => [
        'coupon_amount'       => 0,
        'transaction_minimum' => 0,
      ],
      'discount_coupon'       => [
        'discount_amount_max' => 0,
        'discount_percent'    => 0,
        'transaction_minimum' => 0,
      ],
      'exchange_coupon'       => [
        'exchange_price'      => 0,
        'transaction_minimum' => 0,
      ],
      'goods_tag'             => ['123321'],
      'limit_pay'             => ['ICBC_CREDIT'],
      'limit_card'            => [
        'name' => '精粹白金',
        'bin'  => ['62123456'],
      ],
      'trade_type'            => ['MICROAPP'],
      'available_items'       => ['123321'],
      'unavailable_items'     => ['789987'],
      'available_merchants'   => ['9856000'],
    ],
    'out_request_no'       => '',
    'ext_info'             => '{"exinfo1":"1234","exinfo2":"3456"}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/coupon-stocks')->postAsync([
  'json' => [
    'stock_name'           => '微信支付代金券批次',
    'available_begin_time' => '2015-05-20T13:29:35.120+08:00',
    'available_end_time'   => '2015-05-20T13:29:35.120+08:00',
    'stock_use_rule'       => [
      'max_coupons'          => 0,
      'max_amount'           => 0,
      'max_amount_by_day'    => 0,
      'max_coupons_per_user' => 0,
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'no_cash'              => true,
    'stock_type'           => 'NORMAL',
    'comment'              => '零售批次',
    'belong_merchant'      => '98568865',
    'pattern_info'         => [
      'description'      => '',
      'merchant_logo'    => '',
      'merchant_name'    => '',
      'background_color' => 'Color010',
      'coupon_image'     => '',
    ],
    'coupon_use_rule'      => [
      'coupon_available_time' => [
        'available_begin_time'         => '',
        'available_end_time'           => '',
        'fix_available_time'           => [
          'available_week_day' => [0, 1, 2, 3, 4, 5, 6],
          'begin_time'         => 3600,
          'end_time'           => 86399,
        ],
        'second_day_available'         => true,
        'available_time_after_receive' => 0,
      ],
      'fixed_normal_coupon'   => [
        'coupon_amount'       => 0,
        'transaction_minimum' => 0,
      ],
      'discount_coupon'       => [
        'discount_amount_max' => 0,
        'discount_percent'    => 0,
        'transaction_minimum' => 0,
      ],
      'exchange_coupon'       => [
        'exchange_price'      => 0,
        'transaction_minimum' => 0,
      ],
      'goods_tag'             => ['123321'],
      'limit_pay'             => ['ICBC_CREDIT'],
      'limit_card'            => [
        'name' => '精粹白金',
        'bin'  => ['62123456'],
      ],
      'trade_type'            => ['MICROAPP'],
      'available_items'       => ['123321'],
      'unavailable_items'     => ['789987'],
      'available_merchants'   => ['9856000'],
    ],
    'out_request_no'       => '',
    'ext_info'             => '{"exinfo1":"1234","exinfo2":"3456"}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/coupon-stocks']->postAsync([
  'json' => [
    'stock_name'           => '微信支付代金券批次',
    'available_begin_time' => '2015-05-20T13:29:35.120+08:00',
    'available_end_time'   => '2015-05-20T13:29:35.120+08:00',
    'stock_use_rule'       => [
      'max_coupons'          => 0,
      'max_amount'           => 0,
      'max_amount_by_day'    => 0,
      'max_coupons_per_user' => 0,
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'no_cash'              => true,
    'stock_type'           => 'NORMAL',
    'comment'              => '零售批次',
    'belong_merchant'      => '98568865',
    'pattern_info'         => [
      'description'      => '',
      'merchant_logo'    => '',
      'merchant_name'    => '',
      'background_color' => 'Color010',
      'coupon_image'     => '',
    ],
    'coupon_use_rule'      => [
      'coupon_available_time' => [
        'available_begin_time'         => '',
        'available_end_time'           => '',
        'fix_available_time'           => [
          'available_week_day' => [0, 1, 2, 3, 4, 5, 6],
          'begin_time'         => 3600,
          'end_time'           => 86399,
        ],
        'second_day_available'         => true,
        'available_time_after_receive' => 0,
      ],
      'fixed_normal_coupon'   => [
        'coupon_amount'       => 0,
        'transaction_minimum' => 0,
      ],
      'discount_coupon'       => [
        'discount_amount_max' => 0,
        'discount_percent'    => 0,
        'transaction_minimum' => 0,
      ],
      'exchange_coupon'       => [
        'exchange_price'      => 0,
        'transaction_minimum' => 0,
      ],
      'goods_tag'             => ['123321'],
      'limit_pay'             => ['ICBC_CREDIT'],
      'limit_card'            => [
        'name' => '精粹白金',
        'bin'  => ['62123456'],
      ],
      'trade_type'            => ['MICROAPP'],
      'available_items'       => ['123321'],
      'unavailable_items'     => ['789987'],
      'available_merchants'   => ['9856000'],
    ],
    'out_request_no'       => '',
    'ext_info'             => '{"exinfo1":"1234","exinfo2":"3456"}',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->couponStocks->post([
  'json' => [
    'stock_name'           => '微信支付代金券批次',
    'available_begin_time' => '2015-05-20T13:29:35.120+08:00',
    'available_end_time'   => '2015-05-20T13:29:35.120+08:00',
    'stock_use_rule'       => [
      'max_coupons'          => 0,
      'max_amount'           => 0,
      'max_amount_by_day'    => 0,
      'max_coupons_per_user' => 0,
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'no_cash'              => true,
    'stock_type'           => 'NORMAL',
    'comment'              => '零售批次',
    'belong_merchant'      => '98568865',
    'pattern_info'         => [
      'description'      => '',
      'merchant_logo'    => '',
      'merchant_name'    => '',
      'background_color' => 'Color010',
      'coupon_image'     => '',
    ],
    'coupon_use_rule'      => [
      'coupon_available_time' => [
        'available_begin_time'         => '',
        'available_end_time'           => '',
        'fix_available_time'           => [
          'available_week_day' => [0, 1, 2, 3, 4, 5, 6],
          'begin_time'         => 3600,
          'end_time'           => 86399,
        ],
        'second_day_available'         => true,
        'available_time_after_receive' => 0,
      ],
      'fixed_normal_coupon'   => [
        'coupon_amount'       => 0,
        'transaction_minimum' => 0,
      ],
      'discount_coupon'       => [
        'discount_amount_max' => 0,
        'discount_percent'    => 0,
        'transaction_minimum' => 0,
      ],
      'exchange_coupon'       => [
        'exchange_price'      => 0,
        'transaction_minimum' => 0,
      ],
      'goods_tag'             => ['123321'],
      'limit_pay'             => ['ICBC_CREDIT'],
      'limit_card'            => [
        'name' => '精粹白金',
        'bin'  => ['62123456'],
      ],
      'trade_type'            => ['MICROAPP'],
      'available_items'       => ['123321'],
      'unavailable_items'     => ['789987'],
      'available_merchants'   => ['9856000'],
    ],
    'out_request_no'       => '',
    'ext_info'             => '{"exinfo1":"1234","exinfo2":"3456"}',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/coupon-stocks')->post([
  'json' => [
    'stock_name'           => '微信支付代金券批次',
    'available_begin_time' => '2015-05-20T13:29:35.120+08:00',
    'available_end_time'   => '2015-05-20T13:29:35.120+08:00',
    'stock_use_rule'       => [
      'max_coupons'          => 0,
      'max_amount'           => 0,
      'max_amount_by_day'    => 0,
      'max_coupons_per_user' => 0,
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'no_cash'              => true,
    'stock_type'           => 'NORMAL',
    'comment'              => '零售批次',
    'belong_merchant'      => '98568865',
    'pattern_info'         => [
      'description'      => '',
      'merchant_logo'    => '',
      'merchant_name'    => '',
      'background_color' => 'Color010',
      'coupon_image'     => '',
    ],
    'coupon_use_rule'      => [
      'coupon_available_time' => [
        'available_begin_time'         => '',
        'available_end_time'           => '',
        'fix_available_time'           => [
          'available_week_day' => [0, 1, 2, 3, 4, 5, 6],
          'begin_time'         => 3600,
          'end_time'           => 86399,
        ],
        'second_day_available'         => true,
        'available_time_after_receive' => 0,
      ],
      'fixed_normal_coupon'   => [
        'coupon_amount'       => 0,
        'transaction_minimum' => 0,
      ],
      'discount_coupon'       => [
        'discount_amount_max' => 0,
        'discount_percent'    => 0,
        'transaction_minimum' => 0,
      ],
      'exchange_coupon'       => [
        'exchange_price'      => 0,
        'transaction_minimum' => 0,
      ],
      'goods_tag'             => ['123321'],
      'limit_pay'             => ['ICBC_CREDIT'],
      'limit_card'            => [
        'name' => '精粹白金',
        'bin'  => ['62123456'],
      ],
      'trade_type'            => ['MICROAPP'],
      'available_items'       => ['123321'],
      'unavailable_items'     => ['789987'],
      'available_merchants'   => ['9856000'],
    ],
    'out_request_no'       => '',
    'ext_info'             => '{"exinfo1":"1234","exinfo2":"3456"}',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/coupon-stocks']->post([
  'json' => [
    'stock_name'           => '微信支付代金券批次',
    'available_begin_time' => '2015-05-20T13:29:35.120+08:00',
    'available_end_time'   => '2015-05-20T13:29:35.120+08:00',
    'stock_use_rule'       => [
      'max_coupons'          => 0,
      'max_amount'           => 0,
      'max_amount_by_day'    => 0,
      'max_coupons_per_user' => 0,
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'no_cash'              => true,
    'stock_type'           => 'NORMAL',
    'comment'              => '零售批次',
    'belong_merchant'      => '98568865',
    'pattern_info'         => [
      'description'      => '',
      'merchant_logo'    => '',
      'merchant_name'    => '',
      'background_color' => 'Color010',
      'coupon_image'     => '',
    ],
    'coupon_use_rule'      => [
      'coupon_available_time' => [
        'available_begin_time'         => '',
        'available_end_time'           => '',
        'fix_available_time'           => [
          'available_week_day' => [0, 1, 2, 3, 4, 5, 6],
          'begin_time'         => 3600,
          'end_time'           => 86399,
        ],
        'second_day_available'         => true,
        'available_time_after_receive' => 0,
      ],
      'fixed_normal_coupon'   => [
        'coupon_amount'       => 0,
        'transaction_minimum' => 0,
      ],
      'discount_coupon'       => [
        'discount_amount_max' => 0,
        'discount_percent'    => 0,
        'transaction_minimum' => 0,
      ],
      'exchange_coupon'       => [
        'exchange_price'      => 0,
        'transaction_minimum' => 0,
      ],
      'goods_tag'             => ['123321'],
      'limit_pay'             => ['ICBC_CREDIT'],
      'limit_card'            => [
        'name' => '精粹白金',
        'bin'  => ['62123456'],
      ],
      'trade_type'            => ['MICROAPP'],
      'available_items'       => ['123321'],
      'unavailable_items'     => ['789987'],
      'available_merchants'   => ['9856000'],
    ],
    'out_request_no'       => '',
    'ext_info'             => '{"exinfo1":"1234","exinfo2":"3456"}',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| create_time {data-required} | string | 创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534633) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012534537)
