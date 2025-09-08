# 向用户发放及按券状态列表查询用户的商品券 {#mix}

## 向用户发放商品券 {#post}

品牌方可以通过本接口向用户发放指定商品券批次，能否发放受限于商品券批次的发放限额：1. 商品券批次总预算 2. 商品券批次每日预算（如果有）3. 商品券批次每人限领（如果有）前置条件：已创建商品券批次，商品券批次处于 SENDING 状态

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户OpenID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_id {data-required data-indent=1} | string | 批次ID
| coupon_code {data-indent=1} | string | 用户商品券Code
| appid {data-required data-indent=1} | string | 公众账号AppID
| send_request_no {data-required data-indent=1} | string | 发券请求单号
| attach {data-indent=1} | string | 自定义附加信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->users->_openid_->coupons->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/users/{openid}/coupons')->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/users/{openid}/coupons']->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->users->_openid_->coupons->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/users/{openid}/coupons')->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/users/{openid}/coupons']->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'coupon_code'       => '123446565767',
    'appid'             => 'wx233544546545989',
    'send_request_no'   => '34657_20250101_123456',
    'attach'            => 'example_attach',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| coupon_code {data-required} | string | 用户商品券Code
| coupon_state {data-required} | string | 用户商品券状态<br/>`CONFIRMING` \| `PENDING` \| `EFFECTIVE` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| valid_begin_time {data-required} | string | 有效期开始时间
| valid_end_time {data-required} | string | 有效期结束时间
| receive_time {data-required} | string | 领券时间
| send_request_no {data-required} | string | 发券请求单号
| send_channel {data-required} | string | 发券渠道<br/>`API` \| `BRAND_MANAGE` \| `MERCHANT_CARD` \| `MEMBER` \| `SMALL_ACTIVITY` 枚举值之一
| confirm_request_no | string | 确认请求单号
| confirm_time | string | 确认发放时间
| deactivate_request_no | string | 失效请求单号
| deactivate_time | string | 失效时间
| deactivate_reason | string | 失效原因
| single_usage_detail | object {data-tooltip="对应PHP的array"} | 单券使用详情
| use_request_no {data-indent=1} | string | 券核销请求单号
| use_time {data-indent=1} | string | 核销时间
| associated_order_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 关联微信支付订单信息
| transaction_id {data-indent=2} | string | 微信支付单号
| out_trade_no {data-indent=2} | string | 商户订单号
| mchid {data-indent=2} | string | 商户号
| sub_mchid {data-indent=2} | string | 子商户号
| return_request_no {data-indent=1} | string | 退券请求单号
| return_time {data-indent=1} | string | 退券时间
| sequential_usage_detail | object {data-tooltip="对应PHP的array"} | 多次优惠使用详情
| total_count {data-indent=1} | integer | 总可使用次数
| used_count {data-indent=1} | integer | 已使用次数
| detail_item_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 轮次使用详情列表
| detail_state {data-indent=2} | string | 轮次使用详情状态<br/>`PENDING` \| `EFFECTIVE` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| valid_begin_time {data-indent=2} | string | 有效期开始时间
| valid_end_time {data-indent=2} | string | 有效期结束时间
| use_request_no {data-indent=2} | string | 核销请求单号
| use_time {data-indent=2} | string | 核销时间
| associated_order_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 关联微信支付订单信息
| transaction_id {data-indent=3} | string | 微信支付单号
| out_trade_no {data-indent=3} | string | 商户订单号
| mchid {data-indent=3} | string | 商户号
| sub_mchid {data-indent=3} | string | 子商户号
| return_request_no {data-indent=2} | string | 退券请求单号
| return_time {data-indent=2} | string | 退券时间
| delete_time {data-indent=2} | string | 删除时间
| product_coupon {data-required} | object {data-tooltip="对应PHP的array"} | 商品券信息
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| state {data-required data-indent=1} | string | 商品券状态<br/>`AUDITING` \| `EFFECTIVE` \| `DEACTIVATED` 枚举值之一
| brand_id {data-required data-indent=1} | string | 品牌ID
| scope {data-required data-indent=1} | string | 优惠范围<br/>`ALL` \| `SINGLE` 枚举值之一
| type {data-required data-indent=1} | string | 商品券类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| usage_mode {data-required data-indent=1} | string | 使用模式<br/>`SINGLE` \| `SEQUENTIAL` 枚举值之一
| single_usage_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 单券模式信息
| normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| discount_amount {data-required data-indent=3} | integer | 固定减免金额
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=3} | integer | 门槛金额
| percent_off {data-required data-indent=3} | integer | 固定减免百分比
| sequential_usage_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 多次优惠模式信息
| type {data-required data-indent=2} | string | 多次优惠规则类型<br/>`INCREMENTAL` \| `EQUAL` 枚举值之一
| count {data-required data-indent=2} | integer | 可使用次数
| available_days {data-required data-indent=2} | integer | 多次优惠有效天数
| interval_days {data-indent=2} | integer | 多次优惠使用间隔天数
| display_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 展示信息
| name {data-required data-indent=2} | string | 商品券名称
| image_url {data-required data-indent=2} | string | 商品券图片
| background_url {data-required data-indent=2} | string | 商品券背景图
| detail_image_url_list {data-indent=2} | string[] | 商品券详情图列表
| original_price {data-indent=2} | integer | 商品原价
| combo_package_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 套餐组合
| name {data-required data-indent=3} | string | 套餐名
| pick_count {data-required data-indent=3} | integer | 可选单品数量
| choice_list {data-required data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| name {data-required data-indent=4} | string | 单品名称
| price {data-required data-indent=4} | integer | 单品价格
| count {data-required data-indent=4} | integer | 单品数量
| image_url {data-indent=4} | string | 单品图片
| mini_program_appid {data-indent=4} | string | 单品跳转小程序AppID
| mini_program_path {data-indent=4} | string | 单品跳转小程序路径
| out_product_no {data-indent=1} | string | 外部商品ID
| deactivate_request_no {data-indent=1} | string | 失效请求单号
| deactivate_time {data-indent=1} | string | 失效时间
| deactivate_reason {data-indent=1} | string | 失效原因
| stock {data-required} | object {data-tooltip="对应PHP的array"} | 批次信息
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
| guidance_wording {data-required data-indent=3} | string | 引导文案
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
| attach | string | 自定义附加信息
| channel_custom_info | string | 渠道自定义信息
| brand_id {data-required} | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781605)

## 指定券状态查询用户商品券列表 {#get}

品牌方可以通过本接口查询已经发放给用户的特定状态的商品券。前置条件：已经给用户发券成功

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户OpenID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| product_coupon_id {data-indent=1} | string | 商品券ID
| stock_id {data-indent=1} | string | 批次ID
| appid {data-required data-indent=1} | string | 公众账号AppID
| coupon_state {data-indent=1} | string | 用户商品券状态<br/>`CONFIRMING` \| `PENDING` \| `EFFECTIVE` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| page_size {data-indent=1} | integer | 分页大小
| page_token {data-indent=1} | string | 分页Token
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->users->_openid_->coupons->getAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'query' => [
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'appid'             => 'wx233544546545989',
    'coupon_state'      => 'CONFIRMING',
    'page_size'         => 20,
    'page_token'        => 'MTIzMjUK',
    'brand_id'          => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/users/{openid}/coupons')->getAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'query' => [
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'appid'             => 'wx233544546545989',
    'coupon_state'      => 'CONFIRMING',
    'page_size'         => 20,
    'page_token'        => 'MTIzMjUK',
    'brand_id'          => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/users/{openid}/coupons']->getAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'query' => [
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'appid'             => 'wx233544546545989',
    'coupon_state'      => 'CONFIRMING',
    'page_size'         => 20,
    'page_token'        => 'MTIzMjUK',
    'brand_id'          => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->users->_openid_->coupons->get([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'query' => [
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'appid'             => 'wx233544546545989',
    'coupon_state'      => 'CONFIRMING',
    'page_size'         => 20,
    'page_token'        => 'MTIzMjUK',
    'brand_id'          => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/users/{openid}/coupons')->get([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'query' => [
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'appid'             => 'wx233544546545989',
    'coupon_state'      => 'CONFIRMING',
    'page_size'         => 20,
    'page_token'        => 'MTIzMjUK',
    'brand_id'          => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/users/{openid}/coupons']->get([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'query' => [
    'product_coupon_id' => '1000000013',
    'stock_id'          => '1000000013001',
    'appid'             => 'wx233544546545989',
    'coupon_state'      => 'CONFIRMING',
    'page_size'         => 20,
    'page_token'        => 'MTIzMjUK',
    'brand_id'          => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总个数
| next_page_token | string | 下一页Token
| user_coupon_list | object[] {data-tooltip="对应PHP的array"} | 用户商品券列表
| coupon_code {data-required data-indent=1} | string | 用户商品券Code
| coupon_state {data-required data-indent=1} | string | 用户商品券状态<br/>`CONFIRMING` \| `PENDING` \| `EFFECTIVE` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| valid_begin_time {data-required data-indent=1} | string | 有效期开始时间
| valid_end_time {data-required data-indent=1} | string | 有效期结束时间
| receive_time {data-required data-indent=1} | string | 领券时间
| send_request_no {data-required data-indent=1} | string | 发券请求单号
| send_channel {data-required data-indent=1} | string | 发券渠道<br/>`API` \| `BRAND_MANAGE` \| `MERCHANT_CARD` \| `MEMBER` \| `SMALL_ACTIVITY` 枚举值之一
| confirm_request_no {data-indent=1} | string | 确认请求单号
| confirm_time {data-indent=1} | string | 确认发放时间
| deactivate_request_no {data-indent=1} | string | 失效请求单号
| deactivate_time {data-indent=1} | string | 失效时间
| deactivate_reason {data-indent=1} | string | 失效原因
| single_usage_detail {data-indent=1} | object {data-tooltip="对应PHP的array"} | 单券使用详情
| use_request_no {data-indent=2} | string | 券核销请求单号
| use_time {data-indent=2} | string | 核销时间
| associated_order_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 关联微信支付订单信息
| transaction_id {data-indent=3} | string | 微信支付单号
| out_trade_no {data-indent=3} | string | 商户订单号
| mchid {data-indent=3} | string | 商户号
| sub_mchid {data-indent=3} | string | 子商户号
| return_request_no {data-indent=2} | string | 退券请求单号
| return_time {data-indent=2} | string | 退券时间
| sequential_usage_detail {data-indent=1} | object {data-tooltip="对应PHP的array"} | 多次优惠使用详情
| total_count {data-indent=2} | integer | 总可使用次数
| used_count {data-indent=2} | integer | 已使用次数
| detail_item_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 轮次使用详情列表
| detail_state {data-indent=3} | string | 轮次使用详情状态<br/>`PENDING` \| `EFFECTIVE` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| valid_begin_time {data-indent=3} | string | 有效期开始时间
| valid_end_time {data-indent=3} | string | 有效期结束时间
| use_request_no {data-indent=3} | string | 核销请求单号
| use_time {data-indent=3} | string | 核销时间
| associated_order_info {data-indent=3} | object {data-tooltip="对应PHP的array"} | 关联微信支付订单信息
| transaction_id {data-indent=4} | string | 微信支付单号
| out_trade_no {data-indent=4} | string | 商户订单号
| mchid {data-indent=4} | string | 商户号
| sub_mchid {data-indent=4} | string | 子商户号
| return_request_no {data-indent=3} | string | 退券请求单号
| return_time {data-indent=3} | string | 退券时间
| delete_time {data-indent=3} | string | 删除时间
| product_coupon {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 商品券信息
| product_coupon_id {data-required data-indent=2} | string | 商品券ID
| state {data-required data-indent=2} | string | 商品券状态<br/>`AUDITING` \| `EFFECTIVE` \| `DEACTIVATED` 枚举值之一
| brand_id {data-required data-indent=2} | string | 品牌ID
| scope {data-required data-indent=2} | string | 优惠范围<br/>`ALL` \| `SINGLE` 枚举值之一
| type {data-required data-indent=2} | string | 商品券类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| usage_mode {data-required data-indent=2} | string | 使用模式<br/>`SINGLE` \| `SEQUENTIAL` 枚举值之一
| single_usage_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 单券模式信息
| normal_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| discount_amount {data-required data-indent=4} | integer | 固定减免金额
| discount_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| percent_off {data-required data-indent=4} | integer | 固定减免百分比
| sequential_usage_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 多次优惠模式信息
| type {data-required data-indent=3} | string | 多次优惠规则类型<br/>`INCREMENTAL` \| `EQUAL` 枚举值之一
| count {data-required data-indent=3} | integer | 可使用次数
| available_days {data-required data-indent=3} | integer | 多次优惠有效天数
| interval_days {data-indent=3} | integer | 多次优惠使用间隔天数
| display_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 展示信息
| name {data-required data-indent=3} | string | 商品券名称
| image_url {data-required data-indent=3} | string | 商品券图片
| background_url {data-required data-indent=3} | string | 商品券背景图
| detail_image_url_list {data-indent=3} | string[] | 商品券详情图列表
| original_price {data-indent=3} | integer | 商品原价
| combo_package_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 套餐组合
| name {data-required data-indent=4} | string | 套餐名
| pick_count {data-required data-indent=4} | integer | 可选单品数量
| choice_list {data-required data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| name {data-required data-indent=5} | string | 单品名称
| price {data-required data-indent=5} | integer | 单品价格
| count {data-required data-indent=5} | integer | 单品数量
| image_url {data-indent=5} | string | 单品图片
| mini_program_appid {data-indent=5} | string | 单品跳转小程序AppID
| mini_program_path {data-indent=5} | string | 单品跳转小程序路径
| out_product_no {data-indent=2} | string | 外部商品ID
| deactivate_request_no {data-indent=2} | string | 失效请求单号
| deactivate_time {data-indent=2} | string | 失效时间
| deactivate_reason {data-indent=2} | string | 失效原因
| stock {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 批次信息
| product_coupon_id {data-required data-indent=2} | string | 商品券ID
| stock_id {data-required data-indent=2} | string | 批次ID
| remark {data-indent=2} | string | 备注
| coupon_code_mode {data-required data-indent=2} | string | 券Code分配模式<br/>`WECHATPAY` \| `UPLOAD` \| `API_ASSIGN` 枚举值之一
| coupon_code_count_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 品牌方预上传的券Code数量信息
| total_count {data-required data-indent=3} | integer | 已上传的Code总数
| available_count {data-required data-indent=3} | integer | 当前可用的Code
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
| guidance_wording {data-required data-indent=4} | string | 引导文案
| entrance_official_account {data-indent=3} | object {data-tooltip="对应PHP的array"} | 公众号入口
| appid {data-required data-indent=4} | string | 公众号AppID
| entrance_finder {data-indent=3} | object {data-tooltip="对应PHP的array"} | 视频号入口
| finder_id {data-required data-indent=4} | string | 视频号ID
| finder_video_id {data-required data-indent=4} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=4} | string | 视频号封面图
| notify_config {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 事件通知配置
| notify_appid {data-indent=3} | string | 事件通知appid
| store_scope {data-required data-indent=2} | string | 可用门店范围<br/>`NONE` \| `ALL` \| `SPECIFIC` 枚举值之一
| sent_count_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 已发放次数
| total_count {data-required data-indent=3} | integer | 已发放总次数
| today_count {data-required data-indent=3} | integer | 当天已发放次数
| state {data-required data-indent=2} | string | 批次状态<br/>`AUDITING` \| `SENDING` \| `PAUSED` \| `STOPPED` \| `DEACTIVATED` 枚举值之一
| deactivate_request_no {data-indent=2} | string | 失效请求单号
| deactivate_time {data-indent=2} | string | 失效时间
| deactivate_reason {data-indent=2} | string | 失效原因
| brand_id {data-required data-indent=2} | string | 品牌ID
| attach {data-indent=1} | string | 自定义附加信息
| channel_custom_info {data-indent=1} | string | 渠道自定义信息
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781590)
