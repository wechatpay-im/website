# 查询及修改商家券详情信息 {#mix}

## 查询商家券详情 {#get}

商户可通过该接口查询已创建的商家券批次详情信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->getAsync([
  'stock_id' => '1212',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}')->getAsync([
  'stock_id' => '1212',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}']->getAsync([
  'stock_id' => '1212',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->get([
  'stock_id' => '1212',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}')->get([
  'stock_id' => '1212',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}']->get([
  'stock_id' => '1212',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_name {data-required} | string | 商家券批次名称
| belong_merchant {data-required} | string | 批次归属商户号
| comment | string | 批次备注
| goods_name {data-required} | string | 适用商品范围
| stock_type {data-required} | string | 批次类型
| coupon_use_rule {data-required} | object {data-tooltip="对应PHP的array"} | 核销规则
| coupon_available_time {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=2} | string | 开始时间
| available_end_time {data-required data-indent=2} | string | 结束时间
| available_day_after_receive {data-indent=2} | integer | 生效后N天内有效
| available_week {data-indent=2} | object {data-tooltip="对应PHP的array"} | 固定周期有效时间段
| week_day {data-indent=3} | string[] | 可用星期数
| available_day_time {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-indent=4} | integer | 当天可用开始时间
| end_time {data-indent=4} | integer | 当天可用结束时间
| irregulary_avaliable_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 无规律的有效时间段
| begin_time {data-indent=3} | string | 开始时间
| end_time {data-indent=3} | string | 结束时间
| wait_days_after_receive {data-indent=2} | integer | 领取后N天开始生效
| fixed_normal_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| discount_amount {data-required data-indent=2} | integer | 优惠金额
| transaction_minimum {data-required data-indent=2} | integer | 消费门槛
| discount_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| discount_percent {data-required data-indent=2} | integer | 折扣比例
| transaction_minimum {data-required data-indent=2} | integer | 消费门槛
| exchange_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 换购券使用规则
| exchange_price {data-required data-indent=2} | integer | 单品换购价
| transaction_minimum {data-required data-indent=2} | integer | 消费门槛
| use_method {data-required data-indent=1} | string | 核销方式
| mini_programs_appid {data-indent=1} | string | 小程序appid
| mini_programs_path {data-indent=1} | string | 小程序path
| stock_send_rule {data-required} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_amount {data-required data-indent=1} | integer | 批次总预算
| max_coupons {data-indent=1} | integer | 批次最大发放个数
| max_coupons_per_user {data-required data-indent=1} | integer | 用户最大可领个数
| max_amount_by_day {data-indent=1} | integer | 单天发放上限金额
| max_coupons_by_day {data-indent=1} | integer | 单天发放上限个数
| natural_person_limit {data-indent=1} | boolean | 是否开启自然人限制
| prevent_api_abuse {data-indent=1} | boolean | 可疑账号拦截
| transferable {data-indent=1} | boolean | 是否允许转赠
| shareable {data-indent=1} | boolean | 是否允许分享链接
| custom_entrance | object {data-tooltip="对应PHP的array"} | 自定义入口
| mini_programs_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 小程序入口
| mini_programs_appid {data-required data-indent=2} | string | 商家小程序appid
| mini_programs_path {data-required data-indent=2} | string | 商家小程序path
| entrance_words {data-required data-indent=2} | string | 入口文案
| guiding_words {data-indent=2} | string | 引导文案
| appid {data-indent=1} | string | 商户公众号appid
| hall_id {data-indent=1} | string | 营销馆id
| store_id {data-indent=1} | string | 可用门店id
| code_display_mode {data-indent=1} | string | code展示模式
| display_pattern_info | object {data-tooltip="对应PHP的array"} | 样式信息
| description {data-indent=1} | string | 使用须知
| merchant_logo_url {data-indent=1} | string | 商户logo
| merchant_name {data-indent=1} | string | 商户名称
| background_color {data-indent=1} | string | 背景颜色
| coupon_image_url {data-indent=1} | string | 券详情图片
| finder_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 视频号相关信息
| finder_id {data-required data-indent=2} | string | 视频号ID
| finder_video_id {data-required data-indent=2} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=2} | string | 视频号封面图
| stock_state {data-required} | string | 批次状态
| coupon_code_mode {data-required} | string | 券code模式
| stock_id {data-required} | string | 批次号
| coupon_code_count | object {data-tooltip="对应PHP的array"} | 券code数量
| total_count {data-required data-indent=1} | integer | 该批次总共已上传的code总数
| available_count {data-required data-indent=1} | integer | 该批次当前可用的code数
| notify_config | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=1} | string | 事件通知appid
| send_count_information | object {data-tooltip="对应PHP的array"} | 批次发放情况
| total_send_num {data-indent=1} | integer | 已发放券张数
| total_send_amount {data-indent=1} | integer | 已发放券金额
| today_send_num {data-indent=1} | integer | 单天已发放券张数
| today_send_amount {data-indent=1} | integer | 单天已发放券金额
| subsidy | boolean | 是否允许营销补差

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_2.shtml)

## 修改商家券基本信息 {#patch}

商户可以通过该接口修改商家券基本信息

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| custom_entrance {data-indent=1} | object {data-tooltip="对应PHP的array"} | 自定义入口
| mini_programs_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小程序入口
| mini_programs_appid {data-required data-indent=3} | string | 商家小程序appid
| mini_programs_path {data-required data-indent=3} | string | 商家小程序path
| entrance_words {data-required data-indent=3} | string | 入口文案
| guiding_words {data-indent=3} | string | 引导文案
| appid {data-indent=2} | string | 商户公众号appid
| hall_id {data-indent=2} | string | 营销馆id
| code_display_mode {data-indent=2} | string | code展示模式
| stock_name {data-indent=1} | string | 批次名称
| comment {data-indent=1} | string | 批次备注
| goods_name {data-indent=1} | string | 适用商品范围
| out_request_no {data-required data-indent=1} | string | 商户请求单号
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
| coupon_use_rule {data-indent=1} | object {data-tooltip="对应PHP的array"} | 核销规则
| use_method {data-indent=2} | string | 核销方式
| mini_programs_appid {data-indent=2} | string | 小程序appid
| mini_programs_path {data-indent=2} | string | 小程序path
| stock_send_rule {data-indent=1} | object {data-tooltip="对应PHP的array"} | 发放规则
| natural_person_limit {data-indent=2} | boolean | 是否开启自然人限领
| prevent_api_abuse {data-indent=2} | boolean | 可疑账号拦截
| notify_config {data-indent=1} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=2} | string | 事件通知appid
| subsidy {data-indent=1} | boolean | 是否允许营销补差

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->patchAsync([
  'stock_id' => '101156451224',
  'json' => [
    'custom_entrance'      => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path'  => '/path/index/index',
        'entrance_words'      => '欢迎选购',
        'guiding_words'       => '获取更多优惠',
      ],
      'appid'              => 'wx324345hgfhfghfg',
      'hall_id'            => '233455656',
      'code_display_mode'  => 'BARCODE',
    ],
    'stock_name'           => '8月1日活动券',
    'comment'              => '活动使用',
    'goods_name'           => 'xxx商品使用',
    'out_request_no'       => '6122352020010133287985742',
    'display_pattern_info' => [
      'description'       => 'xxx门店可用',
      'merchant_logo_url' => 'https://xxx',
      'merchant_name'     => '微信支付',
      'background_color'  => 'Color020',
      'coupon_image_url'  => 'https://qpic.cn/xxx',
      'finder_info'       => [
        'finder_id'                    => 'sph6Rngt2T4RlUf',
        'finder_video_id'              => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_use_rule'      => [
      'use_method'          => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path'  => '/path/index/index',
    ],
    'stock_send_rule'      => [
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'notify_config'        => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy'              => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}')->patchAsync([
  'stock_id' => '101156451224',
  'json' => [
    'custom_entrance'      => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path'  => '/path/index/index',
        'entrance_words'      => '欢迎选购',
        'guiding_words'       => '获取更多优惠',
      ],
      'appid'              => 'wx324345hgfhfghfg',
      'hall_id'            => '233455656',
      'code_display_mode'  => 'BARCODE',
    ],
    'stock_name'           => '8月1日活动券',
    'comment'              => '活动使用',
    'goods_name'           => 'xxx商品使用',
    'out_request_no'       => '6122352020010133287985742',
    'display_pattern_info' => [
      'description'       => 'xxx门店可用',
      'merchant_logo_url' => 'https://xxx',
      'merchant_name'     => '微信支付',
      'background_color'  => 'Color020',
      'coupon_image_url'  => 'https://qpic.cn/xxx',
      'finder_info'       => [
        'finder_id'                    => 'sph6Rngt2T4RlUf',
        'finder_video_id'              => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_use_rule'      => [
      'use_method'          => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path'  => '/path/index/index',
    ],
    'stock_send_rule'      => [
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'notify_config'        => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy'              => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}']->patchAsync([
  'stock_id' => '101156451224',
  'json' => [
    'custom_entrance'      => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path'  => '/path/index/index',
        'entrance_words'      => '欢迎选购',
        'guiding_words'       => '获取更多优惠',
      ],
      'appid'              => 'wx324345hgfhfghfg',
      'hall_id'            => '233455656',
      'code_display_mode'  => 'BARCODE',
    ],
    'stock_name'           => '8月1日活动券',
    'comment'              => '活动使用',
    'goods_name'           => 'xxx商品使用',
    'out_request_no'       => '6122352020010133287985742',
    'display_pattern_info' => [
      'description'       => 'xxx门店可用',
      'merchant_logo_url' => 'https://xxx',
      'merchant_name'     => '微信支付',
      'background_color'  => 'Color020',
      'coupon_image_url'  => 'https://qpic.cn/xxx',
      'finder_info'       => [
        'finder_id'                    => 'sph6Rngt2T4RlUf',
        'finder_video_id'              => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_use_rule'      => [
      'use_method'          => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path'  => '/path/index/index',
    ],
    'stock_send_rule'      => [
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'notify_config'        => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy'              => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->patch([
  'stock_id' => '101156451224',
  'json' => [
    'custom_entrance'      => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path'  => '/path/index/index',
        'entrance_words'      => '欢迎选购',
        'guiding_words'       => '获取更多优惠',
      ],
      'appid'              => 'wx324345hgfhfghfg',
      'hall_id'            => '233455656',
      'code_display_mode'  => 'BARCODE',
    ],
    'stock_name'           => '8月1日活动券',
    'comment'              => '活动使用',
    'goods_name'           => 'xxx商品使用',
    'out_request_no'       => '6122352020010133287985742',
    'display_pattern_info' => [
      'description'       => 'xxx门店可用',
      'merchant_logo_url' => 'https://xxx',
      'merchant_name'     => '微信支付',
      'background_color'  => 'Color020',
      'coupon_image_url'  => 'https://qpic.cn/xxx',
      'finder_info'       => [
        'finder_id'                    => 'sph6Rngt2T4RlUf',
        'finder_video_id'              => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_use_rule'      => [
      'use_method'          => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path'  => '/path/index/index',
    ],
    'stock_send_rule'      => [
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'notify_config'        => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy'              => true,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}')->patch([
  'stock_id' => '101156451224',
  'json' => [
    'custom_entrance'      => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path'  => '/path/index/index',
        'entrance_words'      => '欢迎选购',
        'guiding_words'       => '获取更多优惠',
      ],
      'appid'              => 'wx324345hgfhfghfg',
      'hall_id'            => '233455656',
      'code_display_mode'  => 'BARCODE',
    ],
    'stock_name'           => '8月1日活动券',
    'comment'              => '活动使用',
    'goods_name'           => 'xxx商品使用',
    'out_request_no'       => '6122352020010133287985742',
    'display_pattern_info' => [
      'description'       => 'xxx门店可用',
      'merchant_logo_url' => 'https://xxx',
      'merchant_name'     => '微信支付',
      'background_color'  => 'Color020',
      'coupon_image_url'  => 'https://qpic.cn/xxx',
      'finder_info'       => [
        'finder_id'                    => 'sph6Rngt2T4RlUf',
        'finder_video_id'              => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_use_rule'      => [
      'use_method'          => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path'  => '/path/index/index',
    ],
    'stock_send_rule'      => [
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'notify_config'        => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy'              => true,
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}']->patch([
  'stock_id' => '101156451224',
  'json' => [
    'custom_entrance'      => [
      'mini_programs_info' => [
        'mini_programs_appid' => 'wx234545656765876',
        'mini_programs_path'  => '/path/index/index',
        'entrance_words'      => '欢迎选购',
        'guiding_words'       => '获取更多优惠',
      ],
      'appid'              => 'wx324345hgfhfghfg',
      'hall_id'            => '233455656',
      'code_display_mode'  => 'BARCODE',
    ],
    'stock_name'           => '8月1日活动券',
    'comment'              => '活动使用',
    'goods_name'           => 'xxx商品使用',
    'out_request_no'       => '6122352020010133287985742',
    'display_pattern_info' => [
      'description'       => 'xxx门店可用',
      'merchant_logo_url' => 'https://xxx',
      'merchant_name'     => '微信支付',
      'background_color'  => 'Color020',
      'coupon_image_url'  => 'https://qpic.cn/xxx',
      'finder_info'       => [
        'finder_id'                    => 'sph6Rngt2T4RlUf',
        'finder_video_id'              => 'sph6Rngt2T4RlUf',
        'finder_video_cover_image_url' => 'https://wxpaylogo.qpic.cn/xxx',
      ],
    ],
    'coupon_use_rule'      => [
      'use_method'          => 'OFF_LINE',
      'mini_programs_appid' => 'wx23232232323',
      'mini_programs_path'  => '/path/index/index',
    ],
    'stock_send_rule'      => [
      'natural_person_limit' => true,
      'prevent_api_abuse'    => true,
    ],
    'notify_config'        => [
      'notify_appid' => 'wx23232232323',
    ],
    'subsidy'              => true,
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012696764)
