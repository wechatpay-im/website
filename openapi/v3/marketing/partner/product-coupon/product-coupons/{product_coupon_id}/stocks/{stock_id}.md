# 修改及查询商品券指定批次 {#mix}

## 修改商品券指定批次 {#patch}

品牌方可以通过该接口修改商品券批次的基本信息，包括展示信息、通知配置。展示信息修改不会影响已经发放的用户商品券。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| stock_id {data-required} | string | 批次ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| out_request_no {data-required data-indent=1} | string | 修改请求单号
| remark {data-indent=1} | string | 备注
| usage_rule_display_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 券使用规则展示信息
| coupon_usage_method_list {data-required data-indent=2} | string[] | 券使用方式列表<br/>`OFFLINE` \| `MINI_PROGRAM` \| `APP` \| `PAYMENT_CODE` 枚举值之一
| mini_program_appid {data-indent=2} | string | 小程序AppID
| mini_program_path {data-indent=2} | string | 小程序跳转路径
| app_path {data-indent=2} | string | APP跳转路径
| usage_description {data-required data-indent=2} | string | 券使用说明
| coupon_available_store_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可用门店信息
| description {data-required data-indent=3} | string | 券可用门店描述
| mini_program_appid {data-indent=3} | string | 小程序AppID
| mini_program_path {data-indent=3} | string | 小程序跳转路径
| coupon_display_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户商品券展示信息
| code_display_mode {data-indent=2} | string | 用户商品券Code展示模式<br/>`INVISIBLE` \| `BARCODE` \| `QRCODE` 枚举值之一
| background_color {data-indent=2} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| entrance_mini_program {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小程序入口
| appid {data-required data-indent=3} | string | 小程序appid
| path {data-required data-indent=3} | string | 小程序跳转路径
| entrance_wording {data-required data-indent=3} | string | 入口文案
| guidance_wording {data-required data-indent=3} | string | 引导文案
| entrance_official_account {data-indent=2} | object {data-tooltip="对应PHP的array"} | 公众号入口
| appid {data-required data-indent=3} | string | 公众号AppID
| entrance_finder {data-indent=2} | object {data-tooltip="对应PHP的array"} | 视频号入口
| finder_id {data-required data-indent=3} | string | 视频号ID
| finder_video_id {data-required data-indent=3} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=3} | string | 视频号封面图
| notify_config {data-indent=1} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=2} | string | 事件通知appid
| store_scope {data-indent=1} | string | 可用门店范围<br/>`NONE` \| `ALL` \| `SPECIFIC` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->patchAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'                => '120344',
    'out_request_no'          => '34657_20250101_123456',
    'remark'                  => '疯狂星期四项目专用',
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
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}')->patchAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'                => '120344',
    'out_request_no'          => '34657_20250101_123456',
    'remark'                  => '疯狂星期四项目专用',
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
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}']->patchAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'                => '120344',
    'out_request_no'          => '34657_20250101_123456',
    'remark'                  => '疯狂星期四项目专用',
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
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->patch([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'                => '120344',
    'out_request_no'          => '34657_20250101_123456',
    'remark'                  => '疯狂星期四项目专用',
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
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}')->patch([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'                => '120344',
    'out_request_no'          => '34657_20250101_123456',
    'remark'                  => '疯狂星期四项目专用',
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
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}']->patch([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'json' => [
    'brand_id'                => '120344',
    'out_request_no'          => '34657_20250101_123456',
    'remark'                  => '疯狂星期四项目专用',
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
| guidance_wording {data-required data-indent=2} | string | 引导文案
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781556)

## 查询商品券指定批次 {#get}

品牌方可以通过该接口查询某个商品券批次的详情。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| stock_id {data-required} | string | 批次ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->getAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}')->getAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}']->getAsync([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->stocks->_stock_id_->get([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}')->get([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}/stocks/{stock_id}']->get([
  'product_coupon_id' => '1000000013',
  'stock_id' => '1000000013001',
  'query' => [
    'brand_id' => '120344',
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
| guidance_wording {data-required data-indent=2} | string | 引导文案
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781542) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016434649)
