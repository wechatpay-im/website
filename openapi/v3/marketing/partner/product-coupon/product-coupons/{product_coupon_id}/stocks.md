# 添加及列表查询商品券批次 {#mix}

## 添加商品券批次 {#post}

品牌方可以通过该接口为已有的商品券添加更多批次，多个批次可以实现品牌方多样化的投放需求。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| out_request_no {data-required data-indent=1} | string | 创建请求单号
| stock {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 批次信息
| remark {data-indent=2} | string | 备注
| coupon_code_mode {data-required data-indent=2} | string | 券Code分配模式<br/>`WECHATPAY` \| `UPLOAD` \| `API_ASSIGN` 枚举值之一
| stock_send_rule {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_count {data-required data-indent=3} | integer | 发放次数总上限
| max_count_per_day {data-indent=3} | integer | 每日发放次数上限
| max_count_per_user {data-indent=3} | integer | 每个用户领取次数上限
| single_usage_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 单券使用规则
| coupon_available_period {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=4} | string | 开始时间
| available_end_time {data-required data-indent=4} | string | 结束时间
| available_days {data-indent=4} | integer | 生效后N天内有效
| wait_days_after_receive {data-indent=4} | integer | 领取后N天开始生效
| weekly_available_period {data-indent=4} | object {data-tooltip="对应PHP的array"} | 每周固定可用时间
| day_list {data-indent=5} | string[] | 每周可用星期数<br/>`MONDAY` \| `TUESDAY` \| `WEDNESDAY` \| `THURSDAY` \| `FRIDAY` \| `SATURDAY` \| `SUNDAY` 枚举值之一
| day_period_list {data-indent=5} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-required data-indent=6} | integer | 当天可用开始时间
| end_time {data-required data-indent=6} | integer | 当天可用结束时间
| irregular_available_period_list {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 无规律的可用时间段
| begin_time {data-required data-indent=5} | string | 开始时间
| end_time {data-required data-indent=5} | string | 结束时间
| normal_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| discount_amount {data-required data-indent=4} | integer | 固定减免金额
| discount_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| percent_off {data-required data-indent=4} | integer | 固定减免百分比
| exchange_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 兑换券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| exchange_price {data-required data-indent=4} | integer | 固定兑换价格
| sequential_usage_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 多次优惠使用规则
| coupon_available_period {data-required data-indent=3} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=4} | string | 开始时间
| available_end_time {data-required data-indent=4} | string | 结束时间
| wait_days_after_receive {data-indent=4} | integer | 领取后N天开始生效
| weekly_available_period {data-indent=4} | object {data-tooltip="对应PHP的array"} | 每周固定可用时间
| day_list {data-indent=5} | string[] | 每周可用星期数<br/>`MONDAY` \| `TUESDAY` \| `WEDNESDAY` \| `THURSDAY` \| `FRIDAY` \| `SATURDAY` \| `SUNDAY` 枚举值之一
| day_period_list {data-indent=5} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-required data-indent=6} | integer | 当天可用开始时间
| end_time {data-required data-indent=6} | integer | 当天可用结束时间
| irregular_available_period_list {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 无规律的可用时间段
| begin_time {data-required data-indent=5} | string | 开始时间
| end_time {data-required data-indent=5} | string | 结束时间
| normal_coupon_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| discount_amount {data-required data-indent=4} | integer | 固定减免金额
| discount_coupon_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 折扣券使用规则列表
| threshold {data-required data-indent=4} | integer | 门槛金额
| percent_off {data-required data-indent=4} | integer | 固定减免百分比
| exchange_coupon_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 兑换券使用规则列表
| threshold {data-required data-indent=4} | integer | 门槛金额
| exchange_price {data-required data-indent=4} | integer | 固定兑换价格
| special_first {data-indent=3} | boolean | 多次优惠是否提供首笔特惠
| usage_rule_display_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券使用规则展示信息
| coupon_usage_method_list {data-required data-indent=3} | string[] | 券使用方式列表<br/>`OFFLINE` \| `MINI_PROGRAM` \| `APP` \| `PAYMENT_CODE` 枚举值之一
| mini_program_appid {data-indent=3} | string | 小程序AppID
| mini_program_path {data-indent=3} | string | 小程序跳转路径
| app_path {data-indent=3} | string | APP跳转路径
| usage_description {data-required data-indent=3} | string | 券使用说明
| coupon_available_store_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 券可用门店信息
| description {data-required data-indent=4} | string | 券可用门店描述
| mini_program_appid {data-indent=4} | string | 小程序AppID
| mini_program_path {data-indent=4} | string | 小程序跳转路径
| coupon_display_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 用户商品券展示信息
| code_display_mode {data-indent=3} | string | 用户商品券Code展示模式<br/>`INVISIBLE` \| `BARCODE` \| `QRCODE` 枚举值之一
| background_color {data-indent=3} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| entrance_mini_program {data-indent=3} | object {data-tooltip="对应PHP的array"} | 小程序入口
| appid {data-required data-indent=4} | string | 小程序appid
| path {data-required data-indent=4} | string | 小程序跳转路径
| entrance_wording {data-required data-indent=4} | string | 入口文案
| guidance_wording {data-indent=4} | string | 引导文案
| entrance_official_account {data-indent=3} | object {data-tooltip="对应PHP的array"} | 公众号入口
| appid {data-required data-indent=4} | string | 公众号AppID
| entrance_finder {data-indent=3} | object {data-tooltip="对应PHP的array"} | 视频号入口
| finder_id {data-required data-indent=4} | string | 视频号ID
| finder_video_id {data-required data-indent=4} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=4} | string | 视频号封面图
| notify_config {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=3} | string | 事件通知appid
| store_scope {data-required data-indent=2} | string | 可用门店范围<br/>`NONE` \| `ALL` \| `SPECIFIC` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->postAsync([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'stock'          => [
      'remark'                  => '疯狂星期四项目专用',
      'coupon_code_mode'        => 'WECHATPAY',
      'stock_send_rule'         => [
        'max_count'          => 100000,
        'max_count_per_day'  => 100000000,
        'max_count_per_user' => 5,
      ],
      'single_usage_rule'       => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'available_days'                  => 30,
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon'           => [
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],
        'discount_coupon'         => [
          'threshold'   => 10000,
          'percent_off' => 20,
        ],
        'exchange_coupon'         => [
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],
      ],
      'sequential_usage_rule'   => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon_list'      => [[
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],],
        'discount_coupon_list'    => [[
          'threshold'   => 10000,
          'percent_off' => 20,
        ],],
        'exchange_coupon_list'    => [[
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],],
        'special_first'           => true,
      ],
      'usage_rule_display_info' => [
        'coupon_usage_method_list'    => ['OFFLINE'],
        'mini_program_appid'          => 'wx1234567890',
        'mini_program_path'           => '/pages/index/product',
        'app_path'                    => '',
        'usage_description'           => '工作日可用',
        'coupon_available_store_info' => [
          'description'        => '所有门店可用，可使用小程序查看门店列表',
          'mini_program_appid' => 'wx1234567890',
          'mini_program_path'  => '/pages/index/product',
        ],
      ],
      'coupon_display_info'     => [
        'code_display_mode'         => 'QRCODE',
        'background_color'          => 'Color020',
        'entrance_mini_program'     => [
          'appid'            => 'wx234545656765876',
          'path'             => '/path/index/index',
          'entrance_wording' => '欢迎选购',
          'guidance_wording' => '获取更多优惠',
        ],
        'entrance_official_account' => [
          'appid' => 'wx1234567890',
        ],
        'entrance_finder'           => [
          'finder_id'                    => 'gh_12345678',
          'finder_video_id'              => 'UDFsdf24df34dD456Hdf34',
          'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
        ],
      ],
      'notify_config'           => [
        'notify_appid' => 'wx23232232323',
      ],
      'store_scope'             => 'NONE',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks')->postAsync([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'stock'          => [
      'remark'                  => '疯狂星期四项目专用',
      'coupon_code_mode'        => 'WECHATPAY',
      'stock_send_rule'         => [
        'max_count'          => 100000,
        'max_count_per_day'  => 100000000,
        'max_count_per_user' => 5,
      ],
      'single_usage_rule'       => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'available_days'                  => 30,
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon'           => [
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],
        'discount_coupon'         => [
          'threshold'   => 10000,
          'percent_off' => 20,
        ],
        'exchange_coupon'         => [
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],
      ],
      'sequential_usage_rule'   => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon_list'      => [[
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],],
        'discount_coupon_list'    => [[
          'threshold'   => 10000,
          'percent_off' => 20,
        ],],
        'exchange_coupon_list'    => [[
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],],
        'special_first'           => true,
      ],
      'usage_rule_display_info' => [
        'coupon_usage_method_list'    => ['OFFLINE'],
        'mini_program_appid'          => 'wx1234567890',
        'mini_program_path'           => '/pages/index/product',
        'app_path'                    => '',
        'usage_description'           => '工作日可用',
        'coupon_available_store_info' => [
          'description'        => '所有门店可用，可使用小程序查看门店列表',
          'mini_program_appid' => 'wx1234567890',
          'mini_program_path'  => '/pages/index/product',
        ],
      ],
      'coupon_display_info'     => [
        'code_display_mode'         => 'QRCODE',
        'background_color'          => 'Color020',
        'entrance_mini_program'     => [
          'appid'            => 'wx234545656765876',
          'path'             => '/path/index/index',
          'entrance_wording' => '欢迎选购',
          'guidance_wording' => '获取更多优惠',
        ],
        'entrance_official_account' => [
          'appid' => 'wx1234567890',
        ],
        'entrance_finder'           => [
          'finder_id'                    => 'gh_12345678',
          'finder_video_id'              => 'UDFsdf24df34dD456Hdf34',
          'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
        ],
      ],
      'notify_config'           => [
        'notify_appid' => 'wx23232232323',
      ],
      'store_scope'             => 'NONE',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks']->postAsync([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'stock'          => [
      'remark'                  => '疯狂星期四项目专用',
      'coupon_code_mode'        => 'WECHATPAY',
      'stock_send_rule'         => [
        'max_count'          => 100000,
        'max_count_per_day'  => 100000000,
        'max_count_per_user' => 5,
      ],
      'single_usage_rule'       => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'available_days'                  => 30,
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon'           => [
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],
        'discount_coupon'         => [
          'threshold'   => 10000,
          'percent_off' => 20,
        ],
        'exchange_coupon'         => [
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],
      ],
      'sequential_usage_rule'   => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon_list'      => [[
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],],
        'discount_coupon_list'    => [[
          'threshold'   => 10000,
          'percent_off' => 20,
        ],],
        'exchange_coupon_list'    => [[
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],],
        'special_first'           => true,
      ],
      'usage_rule_display_info' => [
        'coupon_usage_method_list'    => ['OFFLINE'],
        'mini_program_appid'          => 'wx1234567890',
        'mini_program_path'           => '/pages/index/product',
        'app_path'                    => '',
        'usage_description'           => '工作日可用',
        'coupon_available_store_info' => [
          'description'        => '所有门店可用，可使用小程序查看门店列表',
          'mini_program_appid' => 'wx1234567890',
          'mini_program_path'  => '/pages/index/product',
        ],
      ],
      'coupon_display_info'     => [
        'code_display_mode'         => 'QRCODE',
        'background_color'          => 'Color020',
        'entrance_mini_program'     => [
          'appid'            => 'wx234545656765876',
          'path'             => '/path/index/index',
          'entrance_wording' => '欢迎选购',
          'guidance_wording' => '获取更多优惠',
        ],
        'entrance_official_account' => [
          'appid' => 'wx1234567890',
        ],
        'entrance_finder'           => [
          'finder_id'                    => 'gh_12345678',
          'finder_video_id'              => 'UDFsdf24df34dD456Hdf34',
          'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
        ],
      ],
      'notify_config'           => [
        'notify_appid' => 'wx23232232323',
      ],
      'store_scope'             => 'NONE',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->post([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'stock'          => [
      'remark'                  => '疯狂星期四项目专用',
      'coupon_code_mode'        => 'WECHATPAY',
      'stock_send_rule'         => [
        'max_count'          => 100000,
        'max_count_per_day'  => 100000000,
        'max_count_per_user' => 5,
      ],
      'single_usage_rule'       => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'available_days'                  => 30,
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon'           => [
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],
        'discount_coupon'         => [
          'threshold'   => 10000,
          'percent_off' => 20,
        ],
        'exchange_coupon'         => [
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],
      ],
      'sequential_usage_rule'   => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon_list'      => [[
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],],
        'discount_coupon_list'    => [[
          'threshold'   => 10000,
          'percent_off' => 20,
        ],],
        'exchange_coupon_list'    => [[
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],],
        'special_first'           => true,
      ],
      'usage_rule_display_info' => [
        'coupon_usage_method_list'    => ['OFFLINE'],
        'mini_program_appid'          => 'wx1234567890',
        'mini_program_path'           => '/pages/index/product',
        'app_path'                    => '',
        'usage_description'           => '工作日可用',
        'coupon_available_store_info' => [
          'description'        => '所有门店可用，可使用小程序查看门店列表',
          'mini_program_appid' => 'wx1234567890',
          'mini_program_path'  => '/pages/index/product',
        ],
      ],
      'coupon_display_info'     => [
        'code_display_mode'         => 'QRCODE',
        'background_color'          => 'Color020',
        'entrance_mini_program'     => [
          'appid'            => 'wx234545656765876',
          'path'             => '/path/index/index',
          'entrance_wording' => '欢迎选购',
          'guidance_wording' => '获取更多优惠',
        ],
        'entrance_official_account' => [
          'appid' => 'wx1234567890',
        ],
        'entrance_finder'           => [
          'finder_id'                    => 'gh_12345678',
          'finder_video_id'              => 'UDFsdf24df34dD456Hdf34',
          'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
        ],
      ],
      'notify_config'           => [
        'notify_appid' => 'wx23232232323',
      ],
      'store_scope'             => 'NONE',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks')->post([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'stock'          => [
      'remark'                  => '疯狂星期四项目专用',
      'coupon_code_mode'        => 'WECHATPAY',
      'stock_send_rule'         => [
        'max_count'          => 100000,
        'max_count_per_day'  => 100000000,
        'max_count_per_user' => 5,
      ],
      'single_usage_rule'       => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'available_days'                  => 30,
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon'           => [
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],
        'discount_coupon'         => [
          'threshold'   => 10000,
          'percent_off' => 20,
        ],
        'exchange_coupon'         => [
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],
      ],
      'sequential_usage_rule'   => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon_list'      => [[
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],],
        'discount_coupon_list'    => [[
          'threshold'   => 10000,
          'percent_off' => 20,
        ],],
        'exchange_coupon_list'    => [[
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],],
        'special_first'           => true,
      ],
      'usage_rule_display_info' => [
        'coupon_usage_method_list'    => ['OFFLINE'],
        'mini_program_appid'          => 'wx1234567890',
        'mini_program_path'           => '/pages/index/product',
        'app_path'                    => '',
        'usage_description'           => '工作日可用',
        'coupon_available_store_info' => [
          'description'        => '所有门店可用，可使用小程序查看门店列表',
          'mini_program_appid' => 'wx1234567890',
          'mini_program_path'  => '/pages/index/product',
        ],
      ],
      'coupon_display_info'     => [
        'code_display_mode'         => 'QRCODE',
        'background_color'          => 'Color020',
        'entrance_mini_program'     => [
          'appid'            => 'wx234545656765876',
          'path'             => '/path/index/index',
          'entrance_wording' => '欢迎选购',
          'guidance_wording' => '获取更多优惠',
        ],
        'entrance_official_account' => [
          'appid' => 'wx1234567890',
        ],
        'entrance_finder'           => [
          'finder_id'                    => 'gh_12345678',
          'finder_video_id'              => 'UDFsdf24df34dD456Hdf34',
          'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
        ],
      ],
      'notify_config'           => [
        'notify_appid' => 'wx23232232323',
      ],
      'store_scope'             => 'NONE',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks']->post([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'stock'          => [
      'remark'                  => '疯狂星期四项目专用',
      'coupon_code_mode'        => 'WECHATPAY',
      'stock_send_rule'         => [
        'max_count'          => 100000,
        'max_count_per_day'  => 100000000,
        'max_count_per_user' => 5,
      ],
      'single_usage_rule'       => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'available_days'                  => 30,
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon'           => [
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],
        'discount_coupon'         => [
          'threshold'   => 10000,
          'percent_off' => 20,
        ],
        'exchange_coupon'         => [
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],
      ],
      'sequential_usage_rule'   => [
        'coupon_available_period' => [
          'available_begin_time'            => '2025-08-01T00:00:00+08:00',
          'available_end_time'              => '2025-08-31T23:59:59+08:00',
          'wait_days_after_receive'         => 1,
          'weekly_available_period'         => [
            'day_list'        => ['MONDAY'],
            'day_period_list' => [[
              'begin_time' => 60,
              'end_time'   => 86399,
            ],],
          ],
          'irregular_available_period_list' => [[
            'begin_time' => '2025-08-01T00:00:00+08:00',
            'end_time'   => '2025-08-31T23:59:59+08:00',
          ],],
        ],
        'normal_coupon_list'      => [[
          'threshold'       => 10000,
          'discount_amount' => 1,
        ],],
        'discount_coupon_list'    => [[
          'threshold'   => 10000,
          'percent_off' => 20,
        ],],
        'exchange_coupon_list'    => [[
          'threshold'      => 10000,
          'exchange_price' => 20,
        ],],
        'special_first'           => true,
      ],
      'usage_rule_display_info' => [
        'coupon_usage_method_list'    => ['OFFLINE'],
        'mini_program_appid'          => 'wx1234567890',
        'mini_program_path'           => '/pages/index/product',
        'app_path'                    => '',
        'usage_description'           => '工作日可用',
        'coupon_available_store_info' => [
          'description'        => '所有门店可用，可使用小程序查看门店列表',
          'mini_program_appid' => 'wx1234567890',
          'mini_program_path'  => '/pages/index/product',
        ],
      ],
      'coupon_display_info'     => [
        'code_display_mode'         => 'QRCODE',
        'background_color'          => 'Color020',
        'entrance_mini_program'     => [
          'appid'            => 'wx234545656765876',
          'path'             => '/path/index/index',
          'entrance_wording' => '欢迎选购',
          'guidance_wording' => '获取更多优惠',
        ],
        'entrance_official_account' => [
          'appid' => 'wx1234567890',
        ],
        'entrance_finder'           => [
          'finder_id'                    => 'gh_12345678',
          'finder_video_id'              => 'UDFsdf24df34dD456Hdf34',
          'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
        ],
      ],
      'notify_config'           => [
        'notify_appid' => 'wx23232232323',
      ],
      'store_scope'             => 'NONE',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| stock_id {data-required} | string | 批次ID
| remark | string | 备注
| coupon_code_mode {data-required} | string | 券Code分配模式<br/>`WECHATPAY` \| `UPLOAD` \| `API_ASSIGN` 枚举值之一
| coupon_code_count_info | object {data-tooltip="对应PHP的array"} | 品牌方预上传的券Code数量信息
| total_count {data-required data-indent=1} | integer | 已上传的Code总数
| available_count {data-required data-indent=1} | integer | 当前可用的Code
| stock_send_rule {data-required} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_count {data-required data-indent=1} | integer | 发放次数总上限
| max_count_per_day {data-indent=1} | integer | 每日发放次数上限
| max_count_per_user {data-indent=1} | integer | 每个用户领取次数上限
| single_usage_rule | object {data-tooltip="对应PHP的array"} | 单券使用规则
| coupon_available_period {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=2} | string | 开始时间
| available_end_time {data-required data-indent=2} | string | 结束时间
| available_days {data-indent=2} | integer | 生效后N天内有效
| wait_days_after_receive {data-indent=2} | integer | 领取后N天开始生效
| weekly_available_period {data-indent=2} | object {data-tooltip="对应PHP的array"} | 每周固定可用时间
| day_list {data-indent=3} | string[] | 每周可用星期数<br/>`MONDAY` \| `TUESDAY` \| `WEDNESDAY` \| `THURSDAY` \| `FRIDAY` \| `SATURDAY` \| `SUNDAY` 枚举值之一
| day_period_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-required data-indent=4} | integer | 当天可用开始时间
| end_time {data-required data-indent=4} | integer | 当天可用结束时间
| irregular_available_period_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 无规律的可用时间段
| begin_time {data-required data-indent=3} | string | 开始时间
| end_time {data-required data-indent=3} | string | 结束时间
| normal_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| discount_amount {data-required data-indent=2} | integer | 固定减免金额
| discount_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| percent_off {data-required data-indent=2} | integer | 固定减免百分比
| exchange_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 兑换券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| exchange_price {data-required data-indent=2} | integer | 固定兑换价格
| sequential_usage_rule | object {data-tooltip="对应PHP的array"} | 多次优惠使用规则
| coupon_available_period {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=2} | string | 开始时间
| available_end_time {data-required data-indent=2} | string | 结束时间
| wait_days_after_receive {data-indent=2} | integer | 领取后N天开始生效
| weekly_available_period {data-indent=2} | object {data-tooltip="对应PHP的array"} | 每周固定可用时间
| day_list {data-indent=3} | string[] | 每周可用星期数<br/>`MONDAY` \| `TUESDAY` \| `WEDNESDAY` \| `THURSDAY` \| `FRIDAY` \| `SATURDAY` \| `SUNDAY` 枚举值之一
| day_period_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-required data-indent=4} | integer | 当天可用开始时间
| end_time {data-required data-indent=4} | integer | 当天可用结束时间
| irregular_available_period_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 无规律的可用时间段
| begin_time {data-required data-indent=3} | string | 开始时间
| end_time {data-required data-indent=3} | string | 结束时间
| normal_coupon_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| discount_amount {data-required data-indent=2} | integer | 固定减免金额
| discount_coupon_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 折扣券使用规则列表
| threshold {data-required data-indent=2} | integer | 门槛金额
| percent_off {data-required data-indent=2} | integer | 固定减免百分比
| exchange_coupon_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 兑换券使用规则列表
| threshold {data-required data-indent=2} | integer | 门槛金额
| exchange_price {data-required data-indent=2} | integer | 固定兑换价格
| special_first {data-indent=1} | boolean | 多次优惠是否提供首笔特惠
| usage_rule_display_info {data-required} | object {data-tooltip="对应PHP的array"} | 券使用规则展示信息
| coupon_usage_method_list {data-required data-indent=1} | string[] | 券使用方式列表<br/>`OFFLINE` \| `MINI_PROGRAM` \| `APP` \| `PAYMENT_CODE` 枚举值之一
| mini_program_appid {data-indent=1} | string | 小程序AppID
| mini_program_path {data-indent=1} | string | 小程序跳转路径
| app_path {data-indent=1} | string | APP跳转路径
| usage_description {data-required data-indent=1} | string | 券使用说明
| coupon_available_store_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 券可用门店信息
| description {data-required data-indent=2} | string | 券可用门店描述
| mini_program_appid {data-indent=2} | string | 小程序AppID
| mini_program_path {data-indent=2} | string | 小程序跳转路径
| coupon_display_info {data-required} | object {data-tooltip="对应PHP的array"} | 用户商品券展示信息
| code_display_mode {data-indent=1} | string | 用户商品券Code展示模式<br/>`INVISIBLE` \| `BARCODE` \| `QRCODE` 枚举值之一
| background_color {data-indent=1} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| entrance_mini_program {data-indent=1} | object {data-tooltip="对应PHP的array"} | 小程序入口
| appid {data-required data-indent=2} | string | 小程序appid
| path {data-required data-indent=2} | string | 小程序跳转路径
| entrance_wording {data-required data-indent=2} | string | 入口文案
| guidance_wording {data-indent=2} | string | 引导文案
| entrance_official_account {data-indent=1} | object {data-tooltip="对应PHP的array"} | 公众号入口
| appid {data-required data-indent=2} | string | 公众号AppID
| entrance_finder {data-indent=1} | object {data-tooltip="对应PHP的array"} | 视频号入口
| finder_id {data-required data-indent=2} | string | 视频号ID
| finder_video_id {data-required data-indent=2} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=2} | string | 视频号封面图
| notify_config {data-required} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=1} | string | 事件通知appid
| store_scope {data-required} | string | 可用门店范围<br/>`NONE` \| `ALL` \| `SPECIFIC` 枚举值之一
| sent_count_info {data-required} | object {data-tooltip="对应PHP的array"} | 已发放次数
| total_count {data-required data-indent=1} | integer | 已发放总次数
| today_count {data-required data-indent=1} | integer | 当天已发放次数
| state {data-required} | string | 批次状态<br/>`AUDITING` \| `SENDING` \| `PAUSED` \| `STOPPED` \| `DEACTIVATED` 枚举值之一
| deactivate_request_no | string | 失效请求单号
| deactivate_time | string | 失效时间
| deactivate_reason | string | 失效原因
| brand_id {data-required} | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781304)

## 查询商品券批次列表 {#get}

品牌方可以通过该接口分页查询某个商品券的批次列表。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| state {data-indent=1} | string | 批次状态<br/>`AUDITING` \| `SENDING` \| `PAUSED` \| `STOPPED` \| `DEACTIVATED` 枚举值之一
| page_size {data-indent=1} | integer | 分页大小
| page_token {data-indent=1} | string | 分页Token
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->getAsync([
  'product_coupon_id' => '1000000013',
  'query' => [
    'state'      => 'AUDITING',
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks')->getAsync([
  'product_coupon_id' => '1000000013',
  'query' => [
    'state'      => 'AUDITING',
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks']->getAsync([
  'product_coupon_id' => '1000000013',
  'query' => [
    'state'      => 'AUDITING',
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->get([
  'product_coupon_id' => '1000000013',
  'query' => [
    'state'      => 'AUDITING',
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks')->get([
  'product_coupon_id' => '1000000013',
  'query' => [
    'state'      => 'AUDITING',
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks']->get([
  'product_coupon_id' => '1000000013',
  'query' => [
    'state'      => 'AUDITING',
    'page_size'  => 20,
    'page_token' => 'MTIzMjUK',
    'brand_id'   => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总个数
| next_page_token | string | 下一页Token
| stock_list | object[] {data-tooltip="对应PHP的array"} | 批次列表
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_id {data-required data-indent=1} | string | 批次ID
| remark {data-indent=1} | string | 备注
| coupon_code_mode {data-required data-indent=1} | string | 券Code分配模式<br/>`WECHATPAY` \| `UPLOAD` \| `API_ASSIGN` 枚举值之一
| coupon_code_count_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 品牌方预上传的券Code数量信息
| total_count {data-required data-indent=2} | integer | 已上传的Code总数
| available_count {data-required data-indent=2} | integer | 当前可用的Code
| stock_send_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_count {data-required data-indent=2} | integer | 发放次数总上限
| max_count_per_day {data-indent=2} | integer | 每日发放次数上限
| max_count_per_user {data-indent=2} | integer | 每个用户领取次数上限
| single_usage_rule {data-indent=1} | object {data-tooltip="对应PHP的array"} | 单券使用规则
| coupon_available_period {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=3} | string | 开始时间
| available_end_time {data-required data-indent=3} | string | 结束时间
| available_days {data-indent=3} | integer | 生效后N天内有效
| wait_days_after_receive {data-indent=3} | integer | 领取后N天开始生效
| weekly_available_period {data-indent=3} | object {data-tooltip="对应PHP的array"} | 每周固定可用时间
| day_list {data-indent=4} | string[] | 每周可用星期数<br/>`MONDAY` \| `TUESDAY` \| `WEDNESDAY` \| `THURSDAY` \| `FRIDAY` \| `SATURDAY` \| `SUNDAY` 枚举值之一
| day_period_list {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-required data-indent=5} | integer | 当天可用开始时间
| end_time {data-required data-indent=5} | integer | 当天可用结束时间
| irregular_available_period_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 无规律的可用时间段
| begin_time {data-required data-indent=4} | string | 开始时间
| end_time {data-required data-indent=4} | string | 结束时间
| normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| discount_amount {data-required data-indent=3} | integer | 固定减免金额
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| percent_off {data-required data-indent=3} | integer | 固定减免百分比
| exchange_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 兑换券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| exchange_price {data-required data-indent=3} | integer | 固定兑换价格
| sequential_usage_rule {data-indent=1} | object {data-tooltip="对应PHP的array"} | 多次优惠使用规则
| coupon_available_period {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=3} | string | 开始时间
| available_end_time {data-required data-indent=3} | string | 结束时间
| wait_days_after_receive {data-indent=3} | integer | 领取后N天开始生效
| weekly_available_period {data-indent=3} | object {data-tooltip="对应PHP的array"} | 每周固定可用时间
| day_list {data-indent=4} | string[] | 每周可用星期数<br/>`MONDAY` \| `TUESDAY` \| `WEDNESDAY` \| `THURSDAY` \| `FRIDAY` \| `SATURDAY` \| `SUNDAY` 枚举值之一
| day_period_list {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-required data-indent=5} | integer | 当天可用开始时间
| end_time {data-required data-indent=5} | integer | 当天可用结束时间
| irregular_available_period_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 无规律的可用时间段
| begin_time {data-required data-indent=4} | string | 开始时间
| end_time {data-required data-indent=4} | string | 结束时间
| normal_coupon_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| discount_amount {data-required data-indent=3} | integer | 固定减免金额
| discount_coupon_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 折扣券使用规则列表
| threshold {data-required data-indent=3} | integer | 门槛金额
| percent_off {data-required data-indent=3} | integer | 固定减免百分比
| exchange_coupon_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 兑换券使用规则列表
| threshold {data-required data-indent=3} | integer | 门槛金额
| exchange_price {data-required data-indent=3} | integer | 固定兑换价格
| special_first {data-indent=2} | boolean | 多次优惠是否提供首笔特惠
| usage_rule_display_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 券使用规则展示信息
| coupon_usage_method_list {data-required data-indent=2} | string[] | 券使用方式列表<br/>`OFFLINE` \| `MINI_PROGRAM` \| `APP` \| `PAYMENT_CODE` 枚举值之一
| mini_program_appid {data-indent=2} | string | 小程序AppID
| mini_program_path {data-indent=2} | string | 小程序跳转路径
| app_path {data-indent=2} | string | APP跳转路径
| usage_description {data-required data-indent=2} | string | 券使用说明
| coupon_available_store_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可用门店信息
| description {data-required data-indent=3} | string | 券可用门店描述
| mini_program_appid {data-indent=3} | string | 小程序AppID
| mini_program_path {data-indent=3} | string | 小程序跳转路径
| coupon_display_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户商品券展示信息
| code_display_mode {data-indent=2} | string | 用户商品券Code展示模式<br/>`INVISIBLE` \| `BARCODE` \| `QRCODE` 枚举值之一
| background_color {data-indent=2} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| entrance_mini_program {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小程序入口
| appid {data-required data-indent=3} | string | 小程序appid
| path {data-required data-indent=3} | string | 小程序跳转路径
| entrance_wording {data-required data-indent=3} | string | 入口文案
| guidance_wording {data-indent=3} | string | 引导文案
| entrance_official_account {data-indent=2} | object {data-tooltip="对应PHP的array"} | 公众号入口
| appid {data-required data-indent=3} | string | 公众号AppID
| entrance_finder {data-indent=2} | object {data-tooltip="对应PHP的array"} | 视频号入口
| finder_id {data-required data-indent=3} | string | 视频号ID
| finder_video_id {data-required data-indent=3} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=3} | string | 视频号封面图
| notify_config {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=2} | string | 事件通知appid
| store_scope {data-required data-indent=1} | string | 可用门店范围<br/>`NONE` \| `ALL` \| `SPECIFIC` 枚举值之一
| sent_count_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 已发放次数
| total_count {data-required data-indent=2} | integer | 已发放总次数
| today_count {data-required data-indent=2} | integer | 当天已发放次数
| state {data-required data-indent=1} | string | 批次状态<br/>`AUDITING` \| `SENDING` \| `PAUSED` \| `STOPPED` \| `DEACTIVATED` 枚举值之一
| deactivate_request_no {data-indent=1} | string | 失效请求单号
| deactivate_time {data-indent=1} | string | 失效时间
| deactivate_reason {data-indent=1} | string | 失效原因
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781553)
