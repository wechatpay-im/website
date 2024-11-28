---
title: 查询用户单张券详情
description: 服务商可通过该接口查询微信用户卡包中某一张商家券的详情信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| coupon_code {data-required} | string | 券code
| appid {data-required} | string | 公众账号ID
| openid {data-required} | string | 用户标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->users->_openid_->coupons->_coupon_code_->appids->_appid_->getAsync([
  'coupon_code' => '',
  'appid' => '',
  'openid' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}')->getAsync([
  'coupon_code' => '',
  'appid' => '',
  'openid' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}']->getAsync([
  'coupon_code' => '',
  'appid' => '',
  'openid' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->users->_openid_->coupons->_coupon_code_->appids->_appid_->get([
  'coupon_code' => '',
  'appid' => '',
  'openid' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}')->get([
  'coupon_code' => '',
  'appid' => '',
  'openid' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/users/{openid}/coupons/{coupon_code}/appids/{appid}']->get([
  'coupon_code' => '',
  'appid' => '',
  'openid' => '',
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
| stock_type {data-required} | string | 批次类型(NORMAL：固定面额满减券批次 DISCOUNT：折扣券批次 EXCHANGE：换购券批次)<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| coupon_use_rule {data-required} | object {data-tooltip="对应PHP的array"} | 核销规则
| coupon_available_time {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-indent=2} | string | 开始时间
| available_end_time {data-indent=2} | string | 结束时间
| available_day_after_receive {data-indent=2} | integer | 领取后N天内有效
| available_week {data-indent=1} | object {data-tooltip="对应PHP的array"} | 固定周期有效时间段
| week_day {data-indent=2} | integer[] | 可用星期数(0代表周日，1代表周一，以此类推)<br/>`0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` 枚举值之一
| available_day_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-indent=3} | integer | 当天可用开始时间
| end_time {data-indent=3} | integer | 当天可用结束时间
| irregulary_avaliable_time {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 无规律的有效时间段
| begin_time {data-indent=2} | string | 开始时间
| end_time {data-indent=2} | string | 结束时间
| fixed_normal_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| discount_amount {data-indent=2} | integer | 优惠金额
| transaction_minimum {data-indent=2} | integer | 消费门槛
| discount_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| discount_percent {data-indent=2} | integer | 折扣比例
| transaction_minimum {data-indent=2} | integer | 消费门槛
| exchange_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 换购券使用规则
| exchange_price {data-indent=2} | integer | 单品换购价
| transaction_minimum {data-indent=2} | integer | 消费门槛
| use_method {data-required data-indent=1} | string | 核销方式(OFF_LINE：线下滴码 MINI_PROGRAMS：线上小程序 PAYMENT_CODE：微信支付付款码 SELF_CONSUME：用户自助)<br/>`OFF_LINE` \| `MINI_PROGRAMS` \| `PAYMENT_CODE` \| `SELF_CONSUME` 枚举值之一
| mini_programs_appid {data-indent=1} | string | 小程序appid
| mini_programs_path {data-indent=1} | string | 小程序path
| custom_entrance | object {data-tooltip="对应PHP的array"} | 自定义入口
| mini_programs_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 小程序入口
| mini_programs_appid {data-required data-indent=2} | string | 商家小程序appid
| mini_programs_path {data-required data-indent=2} | string | 商家小程序path
| entrance_words {data-required data-indent=2} | string | 入口文案
| guiding_words {data-indent=2} | string | 引导文案
| appid {data-indent=1} | string | 商户公众号appid
| hall_id {data-indent=1} | string | 更多优惠入口；[营销馆创建地址](https://pay.weixin.qq.com/index.php/xphp/cfav_market/hall#/pages/list/list)
| store_id {data-indent=1} | string | 可用门店id
| code_display_mode {data-indent=1} | string | code展示模式
| display_pattern_info {data-required} | object {data-tooltip="对应PHP的array"} | 样式信息
| description {data-indent=1} | string | 使用须知
| merchant_logo_url {data-indent=1} | string | 商户logo
| merchant_name {data-indent=1} | string | 商户名称
| background_color {data-indent=1} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| coupon_image_url {data-indent=1} | string | 券详情图片
| finder_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 视频号相关信息
| finder_id {data-required data-indent=2} | string | 视频号ID
| finder_video_id {data-required data-indent=2} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=2} | string | 视频号封面图
| coupon_code | string | 券code
| coupon_state | string | 券状态<br/>`SENDED` \| `USED` \| `EXPIRED` 枚举值之一
| stock_id | string | 批次号
| transferable | boolean | 是否允许转赠
| shareable | boolean | 是否允许分享链接
| send_request_no {data-required} | string | 发券请求单号
| use_request_no | string | 核销请求单号
| available_start_time {data-required} | string | 券可使用开始时间
| expire_time {data-required} | string | 券过期时间
| receive_time {data-required} | string | 券领券时间
| use_time | string | 券核销时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/busifavor/chapter3_5.shtml)
