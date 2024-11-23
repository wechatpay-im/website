---
title: 创建商家券
description: 商户可以通过该接口创建商家券。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_name {data-required data-indent=1} | string | 商家券批次名称
| belong_merchant {data-required data-indent=1} | string | 批次归属商户号
| comment {data-indent=1} | string | 批次备注
| goods_name {data-required data-indent=1} | string | 适用商品范围
| stock_type {data-required data-indent=1} | string | 批次类型
| coupon_use_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 核销规则
| coupon_available_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=3} | string | 开始时间
| available_end_time {data-required data-indent=3} | string | 结束时间
| available_day_after_receive {data-indent=3} | integer | 生效后N天内有效
| available_week {data-indent=3} | object {data-tooltip="对应PHP的array"} | 固定周期有效时间段
| week_day {data-indent=4} | string[] | 可用星期数
| available_day_time {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-indent=5} | integer | 当天可用开始时间
| end_time {data-indent=5} | integer | 当天可用结束时间
| irregulary_avaliable_time {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 无规律的有效时间段
| begin_time {data-indent=4} | string | 开始时间
| end_time {data-indent=4} | string | 结束时间
| wait_days_after_receive {data-indent=3} | integer | 领取后N天开始生效
| fixed_normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| discount_amount {data-required data-indent=3} | integer | 优惠金额
| transaction_minimum {data-required data-indent=3} | integer | 消费门槛
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| discount_percent {data-required data-indent=3} | integer | 折扣比例
| transaction_minimum {data-required data-indent=3} | integer | 消费门槛
| exchange_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 换购券使用规则
| exchange_price {data-required data-indent=3} | integer | 单品换购价
| transaction_minimum {data-required data-indent=3} | integer | 消费门槛
| use_method {data-required data-indent=2} | string | 核销方式
| mini_programs_appid {data-indent=2} | string | 小程序appid
| mini_programs_path {data-indent=2} | string | 小程序path
| stock_send_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_amount {data-indent=2} | number | 批次总预算
| max_coupons {data-required data-indent=2} | integer | 批次最大发放个数
| max_coupons_per_user {data-required data-indent=2} | integer | 用户最大可领个数
| max_amount_by_day {data-indent=2} | number | 单天发放上限金额
| max_coupons_by_day {data-indent=2} | integer | 单天发放上限个数
| natural_person_limit {data-indent=2} | boolean | 是否开启自然人限制
| prevent_api_abuse {data-indent=2} | boolean | 可疑账号拦截
| transferable {data-indent=2} | boolean | 是否允许转赠
| shareable {data-indent=2} | boolean | 是否允许分享链接
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| custom_entrance {data-indent=1} | object {data-tooltip="对应PHP的array"} | 自定义入口
| mini_programs_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小程序入口
| mini_programs_appid {data-required data-indent=3} | string | 商家小程序appid
| mini_programs_path {data-required data-indent=3} | string | 商家小程序path
| entrance_words {data-required data-indent=3} | string | 入口文案
| guiding_words {data-indent=3} | string | 引导文案
| appid {data-indent=2} | string | 商户公众号appid
| hall_id {data-indent=2} | string | 营销馆id
| store_id {data-indent=2} | string | 可用门店id
| code_display_mode {data-indent=2} | string | code展示模式
| display_pattern_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 样式信息
| description {data-indent=2} | string | 使用须知
| merchant_logo_url {data-indent=2} | string | 商户logo
| merchant_name {data-indent=2} | string | 商户名称
| background_color {data-indent=2} | string | 背景颜色
| coupon_image_url {data-indent=2} | string | 券详情图片
| finder_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 视频号相关信息
| finder_id {data-required data-indent=3} | string | 视频号ID
| finder_video_id {data-required data-indent=3} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=3} | string | 视频号封面图
| coupon_code_mode {data-required data-indent=1} | string | 券code模式
| notify_config {data-indent=1} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=2} | string | 事件通知appid
| subsidy {data-indent=1} | boolean | 是否允许营销补贴

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->postAsync([
  'json' => [
    'stock_name' => '8月1日活动券',
    'belong_merchant' => '10000022',
    'comment' => '活动使用',
    'goods_name' => 'xxx商品使用',
    'stock_type' => 'NORMAL',
    'coupon_use_rule' => [
      'coupon_available_time' => [
        'available_begin_time' => '2015-05-20T13:29:35+08:00',
        'available_end_time' => '2015-05-20T13:29:35+08:00',
        'available_day_after_receive' => 3,
        'available_week' => [
          'week_day' => [1, 2],
          'available_day_time' => [[
            'begin_time' => 3600,
            'end_time' => 86399,
          ],],
        ],
        'irregulary_avaliable_time' => [[
          'begin_time' => '2015-05-20T13:29:35+08:00',
          'end_time' => '2015-05-20T13:29:35+08:00',
        ],],
        'wait_days_after_receive' => 7,
      ],
      'fixed_normal_coupon' => [
        'discount_amount' => 5,
        'transaction_minimum' => 100,
      ],
      'discount_coupon' => [
        'discount_percent' => 88,
        'transaction_minimum' => 100,
      ],
      'exchange_coupon' => [
        'exchange_price' => 100,
        'transaction_minimum' => 100,
      ],
      'use_method' => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path' => '/path/index/index',
    ],
    'stock_send_rule' => [
      'max_amount' => 100000,
      'max_coupons' => 100,
      'max_coupons_per_user' => 5,
      'max_amount_by_day' => 1000,
      'max_coupons_by_day' => 100,
      'natural_person_limit' => true,
      'prevent_api_abuse' => true,
      'transferable' => true,
      'shareable' => true,
    ],
    'out_request_no' => '100002322019090134234sfdf',
    'custom_entrance' => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path' => '/path/index/index',
        'entrance_words' => '欢迎选购',
        'guiding_words' => '获取更多优惠',
      ],
      'appid' => 'wx324345hgfhfghfg',
      'hall_id' => '233455656',
      'store_id' => '233554655',
      'code_display_mode' => 'BARCODE',
    ],
    'display_pattern_info' => [
      'description' => 'xxx门店可用',
      'merchant_logo_url' => 'https://qpic.cn/xxx',
      'merchant_name' => '微信支付',
      'background_color' => 'Color020',
      'coupon_image_url' => 'https://qpic.cn/xxx',
      'finder_info' => [
        'finder_id' => 'sph6Rngt2T4RlUf',
        'finder_video_id' => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_code_mode' => 'WECHATPAY_MODE',
    'notify_config' => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks')->postAsync([
  'json' => [
    'stock_name' => '8月1日活动券',
    'belong_merchant' => '10000022',
    'comment' => '活动使用',
    'goods_name' => 'xxx商品使用',
    'stock_type' => 'NORMAL',
    'coupon_use_rule' => [
      'coupon_available_time' => [
        'available_begin_time' => '2015-05-20T13:29:35+08:00',
        'available_end_time' => '2015-05-20T13:29:35+08:00',
        'available_day_after_receive' => 3,
        'available_week' => [
          'week_day' => [1, 2],
          'available_day_time' => [[
            'begin_time' => 3600,
            'end_time' => 86399,
          ],],
        ],
        'irregulary_avaliable_time' => [[
          'begin_time' => '2015-05-20T13:29:35+08:00',
          'end_time' => '2015-05-20T13:29:35+08:00',
        ],],
        'wait_days_after_receive' => 7,
      ],
      'fixed_normal_coupon' => [
        'discount_amount' => 5,
        'transaction_minimum' => 100,
      ],
      'discount_coupon' => [
        'discount_percent' => 88,
        'transaction_minimum' => 100,
      ],
      'exchange_coupon' => [
        'exchange_price' => 100,
        'transaction_minimum' => 100,
      ],
      'use_method' => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path' => '/path/index/index',
    ],
    'stock_send_rule' => [
      'max_amount' => 100000,
      'max_coupons' => 100,
      'max_coupons_per_user' => 5,
      'max_amount_by_day' => 1000,
      'max_coupons_by_day' => 100,
      'natural_person_limit' => true,
      'prevent_api_abuse' => true,
      'transferable' => true,
      'shareable' => true,
    ],
    'out_request_no' => '100002322019090134234sfdf',
    'custom_entrance' => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path' => '/path/index/index',
        'entrance_words' => '欢迎选购',
        'guiding_words' => '获取更多优惠',
      ],
      'appid' => 'wx324345hgfhfghfg',
      'hall_id' => '233455656',
      'store_id' => '233554655',
      'code_display_mode' => 'BARCODE',
    ],
    'display_pattern_info' => [
      'description' => 'xxx门店可用',
      'merchant_logo_url' => 'https://qpic.cn/xxx',
      'merchant_name' => '微信支付',
      'background_color' => 'Color020',
      'coupon_image_url' => 'https://qpic.cn/xxx',
      'finder_info' => [
        'finder_id' => 'sph6Rngt2T4RlUf',
        'finder_video_id' => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_code_mode' => 'WECHATPAY_MODE',
    'notify_config' => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks']->postAsync([
  'json' => [
    'stock_name' => '8月1日活动券',
    'belong_merchant' => '10000022',
    'comment' => '活动使用',
    'goods_name' => 'xxx商品使用',
    'stock_type' => 'NORMAL',
    'coupon_use_rule' => [
      'coupon_available_time' => [
        'available_begin_time' => '2015-05-20T13:29:35+08:00',
        'available_end_time' => '2015-05-20T13:29:35+08:00',
        'available_day_after_receive' => 3,
        'available_week' => [
          'week_day' => [1, 2],
          'available_day_time' => [[
            'begin_time' => 3600,
            'end_time' => 86399,
          ],],
        ],
        'irregulary_avaliable_time' => [[
          'begin_time' => '2015-05-20T13:29:35+08:00',
          'end_time' => '2015-05-20T13:29:35+08:00',
        ],],
        'wait_days_after_receive' => 7,
      ],
      'fixed_normal_coupon' => [
        'discount_amount' => 5,
        'transaction_minimum' => 100,
      ],
      'discount_coupon' => [
        'discount_percent' => 88,
        'transaction_minimum' => 100,
      ],
      'exchange_coupon' => [
        'exchange_price' => 100,
        'transaction_minimum' => 100,
      ],
      'use_method' => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path' => '/path/index/index',
    ],
    'stock_send_rule' => [
      'max_amount' => 100000,
      'max_coupons' => 100,
      'max_coupons_per_user' => 5,
      'max_amount_by_day' => 1000,
      'max_coupons_by_day' => 100,
      'natural_person_limit' => true,
      'prevent_api_abuse' => true,
      'transferable' => true,
      'shareable' => true,
    ],
    'out_request_no' => '100002322019090134234sfdf',
    'custom_entrance' => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path' => '/path/index/index',
        'entrance_words' => '欢迎选购',
        'guiding_words' => '获取更多优惠',
      ],
      'appid' => 'wx324345hgfhfghfg',
      'hall_id' => '233455656',
      'store_id' => '233554655',
      'code_display_mode' => 'BARCODE',
    ],
    'display_pattern_info' => [
      'description' => 'xxx门店可用',
      'merchant_logo_url' => 'https://qpic.cn/xxx',
      'merchant_name' => '微信支付',
      'background_color' => 'Color020',
      'coupon_image_url' => 'https://qpic.cn/xxx',
      'finder_info' => [
        'finder_id' => 'sph6Rngt2T4RlUf',
        'finder_video_id' => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_code_mode' => 'WECHATPAY_MODE',
    'notify_config' => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->post([
  'json' => [
    'stock_name' => '8月1日活动券',
    'belong_merchant' => '10000022',
    'comment' => '活动使用',
    'goods_name' => 'xxx商品使用',
    'stock_type' => 'NORMAL',
    'coupon_use_rule' => [
      'coupon_available_time' => [
        'available_begin_time' => '2015-05-20T13:29:35+08:00',
        'available_end_time' => '2015-05-20T13:29:35+08:00',
        'available_day_after_receive' => 3,
        'available_week' => [
          'week_day' => [1, 2],
          'available_day_time' => [[
            'begin_time' => 3600,
            'end_time' => 86399,
          ],],
        ],
        'irregulary_avaliable_time' => [[
          'begin_time' => '2015-05-20T13:29:35+08:00',
          'end_time' => '2015-05-20T13:29:35+08:00',
        ],],
        'wait_days_after_receive' => 7,
      ],
      'fixed_normal_coupon' => [
        'discount_amount' => 5,
        'transaction_minimum' => 100,
      ],
      'discount_coupon' => [
        'discount_percent' => 88,
        'transaction_minimum' => 100,
      ],
      'exchange_coupon' => [
        'exchange_price' => 100,
        'transaction_minimum' => 100,
      ],
      'use_method' => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path' => '/path/index/index',
    ],
    'stock_send_rule' => [
      'max_amount' => 100000,
      'max_coupons' => 100,
      'max_coupons_per_user' => 5,
      'max_amount_by_day' => 1000,
      'max_coupons_by_day' => 100,
      'natural_person_limit' => true,
      'prevent_api_abuse' => true,
      'transferable' => true,
      'shareable' => true,
    ],
    'out_request_no' => '100002322019090134234sfdf',
    'custom_entrance' => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path' => '/path/index/index',
        'entrance_words' => '欢迎选购',
        'guiding_words' => '获取更多优惠',
      ],
      'appid' => 'wx324345hgfhfghfg',
      'hall_id' => '233455656',
      'store_id' => '233554655',
      'code_display_mode' => 'BARCODE',
    ],
    'display_pattern_info' => [
      'description' => 'xxx门店可用',
      'merchant_logo_url' => 'https://qpic.cn/xxx',
      'merchant_name' => '微信支付',
      'background_color' => 'Color020',
      'coupon_image_url' => 'https://qpic.cn/xxx',
      'finder_info' => [
        'finder_id' => 'sph6Rngt2T4RlUf',
        'finder_video_id' => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_code_mode' => 'WECHATPAY_MODE',
    'notify_config' => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks')->post([
  'json' => [
    'stock_name' => '8月1日活动券',
    'belong_merchant' => '10000022',
    'comment' => '活动使用',
    'goods_name' => 'xxx商品使用',
    'stock_type' => 'NORMAL',
    'coupon_use_rule' => [
      'coupon_available_time' => [
        'available_begin_time' => '2015-05-20T13:29:35+08:00',
        'available_end_time' => '2015-05-20T13:29:35+08:00',
        'available_day_after_receive' => 3,
        'available_week' => [
          'week_day' => [1, 2],
          'available_day_time' => [[
            'begin_time' => 3600,
            'end_time' => 86399,
          ],],
        ],
        'irregulary_avaliable_time' => [[
          'begin_time' => '2015-05-20T13:29:35+08:00',
          'end_time' => '2015-05-20T13:29:35+08:00',
        ],],
        'wait_days_after_receive' => 7,
      ],
      'fixed_normal_coupon' => [
        'discount_amount' => 5,
        'transaction_minimum' => 100,
      ],
      'discount_coupon' => [
        'discount_percent' => 88,
        'transaction_minimum' => 100,
      ],
      'exchange_coupon' => [
        'exchange_price' => 100,
        'transaction_minimum' => 100,
      ],
      'use_method' => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path' => '/path/index/index',
    ],
    'stock_send_rule' => [
      'max_amount' => 100000,
      'max_coupons' => 100,
      'max_coupons_per_user' => 5,
      'max_amount_by_day' => 1000,
      'max_coupons_by_day' => 100,
      'natural_person_limit' => true,
      'prevent_api_abuse' => true,
      'transferable' => true,
      'shareable' => true,
    ],
    'out_request_no' => '100002322019090134234sfdf',
    'custom_entrance' => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path' => '/path/index/index',
        'entrance_words' => '欢迎选购',
        'guiding_words' => '获取更多优惠',
      ],
      'appid' => 'wx324345hgfhfghfg',
      'hall_id' => '233455656',
      'store_id' => '233554655',
      'code_display_mode' => 'BARCODE',
    ],
    'display_pattern_info' => [
      'description' => 'xxx门店可用',
      'merchant_logo_url' => 'https://qpic.cn/xxx',
      'merchant_name' => '微信支付',
      'background_color' => 'Color020',
      'coupon_image_url' => 'https://qpic.cn/xxx',
      'finder_info' => [
        'finder_id' => 'sph6Rngt2T4RlUf',
        'finder_video_id' => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_code_mode' => 'WECHATPAY_MODE',
    'notify_config' => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks']->post([
  'json' => [
    'stock_name' => '8月1日活动券',
    'belong_merchant' => '10000022',
    'comment' => '活动使用',
    'goods_name' => 'xxx商品使用',
    'stock_type' => 'NORMAL',
    'coupon_use_rule' => [
      'coupon_available_time' => [
        'available_begin_time' => '2015-05-20T13:29:35+08:00',
        'available_end_time' => '2015-05-20T13:29:35+08:00',
        'available_day_after_receive' => 3,
        'available_week' => [
          'week_day' => [1, 2],
          'available_day_time' => [[
            'begin_time' => 3600,
            'end_time' => 86399,
          ],],
        ],
        'irregulary_avaliable_time' => [[
          'begin_time' => '2015-05-20T13:29:35+08:00',
          'end_time' => '2015-05-20T13:29:35+08:00',
        ],],
        'wait_days_after_receive' => 7,
      ],
      'fixed_normal_coupon' => [
        'discount_amount' => 5,
        'transaction_minimum' => 100,
      ],
      'discount_coupon' => [
        'discount_percent' => 88,
        'transaction_minimum' => 100,
      ],
      'exchange_coupon' => [
        'exchange_price' => 100,
        'transaction_minimum' => 100,
      ],
      'use_method' => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path' => '/path/index/index',
    ],
    'stock_send_rule' => [
      'max_amount' => 100000,
      'max_coupons' => 100,
      'max_coupons_per_user' => 5,
      'max_amount_by_day' => 1000,
      'max_coupons_by_day' => 100,
      'natural_person_limit' => true,
      'prevent_api_abuse' => true,
      'transferable' => true,
      'shareable' => true,
    ],
    'out_request_no' => '100002322019090134234sfdf',
    'custom_entrance' => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path' => '/path/index/index',
        'entrance_words' => '欢迎选购',
        'guiding_words' => '获取更多优惠',
      ],
      'appid' => 'wx324345hgfhfghfg',
      'hall_id' => '233455656',
      'store_id' => '233554655',
      'code_display_mode' => 'BARCODE',
    ],
    'display_pattern_info' => [
      'description' => 'xxx门店可用',
      'merchant_logo_url' => 'https://qpic.cn/xxx',
      'merchant_name' => '微信支付',
      'background_color' => 'Color020',
      'coupon_image_url' => 'https://qpic.cn/xxx',
      'finder_info' => [
        'finder_id' => 'sph6Rngt2T4RlUf',
        'finder_video_id' => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_code_mode' => 'WECHATPAY_MODE',
    'notify_config' => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required}| string | 批次号
| create_time {data-required}| string | 创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_1.shtml)
