---
title: 失效用户商品券组
description: 服务商可以通过本接口将用户商品券组内的所有商品券同步失效。前置条件：已经给用户发券成功，且商品券的 usage_mode 为 PROGRESSIVE_BUNDLE
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户OpenID
| user_coupon_bundle_id {data-required} | string | 用户券组ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_bundle_id {data-required data-indent=1} | string | 批次组ID
| appid {data-required data-indent=1} | string | 公众账号AppID
| out_request_no {data-required data-indent=1} | string | 失效请求单号
| deactivate_reason {data-required data-indent=1} | string | 失效原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->users->_openid_->couponBundles->_user_coupon_bundle_id_->deactivate->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'user_coupon_bundle_id' => '123446565767',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_bundle_id'   => '100232301',
    'appid'             => 'wx233544546545989',
    'out_request_no'    => '34657_20250101_123456',
    'deactivate_reason' => '商品已下线，使用户商品券失效',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/users/{openid}/coupon-bundles/{user_coupon_bundle_id}/deactivate')->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'user_coupon_bundle_id' => '123446565767',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_bundle_id'   => '100232301',
    'appid'             => 'wx233544546545989',
    'out_request_no'    => '34657_20250101_123456',
    'deactivate_reason' => '商品已下线，使用户商品券失效',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/users/{openid}/coupon-bundles/{user_coupon_bundle_id}/deactivate']->postAsync([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'user_coupon_bundle_id' => '123446565767',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_bundle_id'   => '100232301',
    'appid'             => 'wx233544546545989',
    'out_request_no'    => '34657_20250101_123456',
    'deactivate_reason' => '商品已下线，使用户商品券失效',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->users->_openid_->couponBundles->_user_coupon_bundle_id_->deactivate->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'user_coupon_bundle_id' => '123446565767',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_bundle_id'   => '100232301',
    'appid'             => 'wx233544546545989',
    'out_request_no'    => '34657_20250101_123456',
    'deactivate_reason' => '商品已下线，使用户商品券失效',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/users/{openid}/coupon-bundles/{user_coupon_bundle_id}/deactivate')->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'user_coupon_bundle_id' => '123446565767',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_bundle_id'   => '100232301',
    'appid'             => 'wx233544546545989',
    'out_request_no'    => '34657_20250101_123456',
    'deactivate_reason' => '商品已下线，使用户商品券失效',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/users/{openid}/coupon-bundles/{user_coupon_bundle_id}/deactivate']->post([
  'openid' => 'oh-394z-6CGkNoJrsDLTTUKiAnp4',
  'user_coupon_bundle_id' => '123446565767',
  'json' => [
    'brand_id'          => '120344',
    'product_coupon_id' => '1000000013',
    'stock_bundle_id'   => '100232301',
    'appid'             => 'wx233544546545989',
    'out_request_no'    => '34657_20250101_123456',
    'deactivate_reason' => '商品已下线，使用户商品券失效',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| user_coupon_bundle_id {data-required} | string | 用户券组ID
| user_product_coupon_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 用户商品券列表
| coupon_code {data-required data-indent=1} | string | 用户商品券Code
| coupon_state {data-required data-indent=1} | string | 用户商品券状态<br/>`CONFIRMING` \| `PENDING` \| `EFFECTIVE` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| valid_begin_time {data-required data-indent=1} | string | 有效期开始时间
| valid_end_time {data-required data-indent=1} | string | 有效期结束时间
| receive_time {data-required data-indent=1} | string | 领券时间
| send_request_no {data-required data-indent=1} | string | 发券请求单号
| send_channel {data-required data-indent=1} | string | 发券渠道<br/>`API` \| `BRAND_MANAGE` \| `RECEIVE_COMPONENT` 枚举值之一
| confirm_request_no {data-indent=1} | string | 确认请求单号
| confirm_time {data-indent=1} | string | 确认发放时间
| deactivate_request_no {data-indent=1} | string | 失效请求单号
| deactivate_time {data-indent=1} | string | 失效时间
| deactivate_reason {data-indent=1} | string | 失效原因
| progressive_bundle_usage_detail {data-indent=1} | object {data-tooltip="对应PHP的array"} | 多次优惠使用详情
| use_request_no {data-indent=2} | string | 券核销请求单号
| use_time {data-indent=2} | string | 核销时间
| associated_order_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 关联微信支付订单信息
| transaction_id {data-indent=3} | string | 微信支付单号
| out_trade_no {data-indent=3} | string | 商户订单号
| mchid {data-indent=3} | string | 商户号
| sub_mchid {data-indent=3} | string | 子商户号
| return_request_no {data-indent=2} | string | 退券请求单号
| return_time {data-indent=2} | string | 退券时间
| user_product_coupon_bundle_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户券组信息
| user_coupon_bundle_id {data-required data-indent=2} | string | 用户券组ID
| user_coupon_bundle_index {data-required data-indent=2} | integer | 用户券组内索引
| total_count {data-required data-indent=2} | integer | 总可使用次数
| used_count {data-required data-indent=2} | integer | 已使用次数
| product_coupon {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 商品券信息
| product_coupon_id {data-required data-indent=2} | string | 商品券ID
| state {data-required data-indent=2} | string | 商品券状态<br/>`AUDITING` \| `EFFECTIVE` \| `DEACTIVATED` 枚举值之一
| brand_id {data-required data-indent=2} | string | 品牌ID
| scope {data-required data-indent=2} | string | 优惠范围<br/>`ALL` \| `SINGLE` 枚举值之一
| type {data-required data-indent=2} | string | 商品券类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| usage_mode {data-required data-indent=2} | string | 使用模式<br/>`SINGLE` \| `PROGRESSIVE_BUNDLE` 枚举值之一
| single_usage_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 单券模式信息
| normal_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| discount_amount {data-required data-indent=4} | integer | 固定减免金额
| discount_coupon {data-indent=3} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=4} | integer | 门槛金额
| percent_off {data-required data-indent=4} | integer | 固定减免百分比
| progressive_bundle_usage_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 多次优惠模式信息
| count {data-required data-indent=3} | integer | 可使用次数
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
| coupon_code_mode {data-required data-indent=2} | string | 券Code分配模式<br/>`WECHATPAY` \| `UPLOAD` 枚举值之一
| coupon_code_count_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 品牌方预上传的券Code数量信息
| total_count {data-required data-indent=3} | integer | 已上传的Code总数
| available_count {data-required data-indent=3} | integer | 当前可用的Code
| stock_send_rule {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 发放规则
| max_count {data-required data-indent=3} | integer | 发放次数总上限
| max_count_per_day {data-indent=3} | integer | 每日发放次数上限
| max_count_per_user {data-required data-indent=3} | integer | 每个用户领取次数上限
| progressive_bundle_usage_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 多次优惠使用规则
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
| stock_bundle_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 批次组信息
| stock_bundle_id {data-required data-indent=3} | string | 批次组ID
| stock_bundle_index {data-required data-indent=3} | integer | 批次在批次组内的次序
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
| coupon_tag_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户商品券标签信息
| coupon_tag_list {data-indent=2} | string[] | 用户商品券标签列表<br/>`MEMBER` 枚举值
| member_tag_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 会员标签信息
| member_card_id {data-required data-indent=3} | string | 会员卡模板ID
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016280658)
