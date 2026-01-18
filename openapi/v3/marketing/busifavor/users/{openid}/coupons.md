---
title: 根据过滤条件查询用户券
description: 服务商自定义筛选条件（如创建商户号、归属商户号、发放商户号等），查询指定微信用户卡包中满足对应条件的所有商家券信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_id {data-indent=1} | string | 批次号
| coupon_state {data-indent=1} | string | 券状态<br/>`SENDED` \| `USED` \| `EXPIRED` 枚举值之一
| creator_merchant {data-indent=1} | string | 创建批次的商户号
| belong_merchant {data-indent=1} | string | 批次归属商户号
| sender_merchant {data-indent=1} | string | 批次发放商户号
| offset {data-indent=1} | number | 分页页码
| limit {data-indent=1} | number | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->users->_openid_->coupons->getAsync([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/users/{openid}/coupons')->getAsync([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/users/{openid}/coupons']->getAsync([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->users->_openid_->coupons->get([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/users/{openid}/coupons')->get([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/users/{openid}/coupons']->get([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | number | 总数量
| offset {data-required} | number | 分页页码
| limit {data-required} | number | 分页大小
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 结果集
| stock_name {data-required data-indent=1} | string | 商家券批次名称
| belong_merchant {data-required data-indent=1} | string | 批次归属商户号
| comment {data-indent=1} | string | 批次备注
| goods_name {data-required data-indent=1} | string | 适用商品范围
| stock_type {data-required data-indent=1} | string | 批次类型(NORMAL：固定面额满减券批次 DISCOUNT：折扣券批次 EXCHANGE：换购券批次)<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| coupon_use_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 核销规则
| coupon_available_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-indent=3} | string | 开始时间
| available_end_time {data-indent=3} | string | 结束时间
| available_day_after_receive {data-indent=3} | integer | 领取后N天内有效
| available_week {data-indent=2} | object {data-tooltip="对应PHP的array"} | 固定周期有效时间段
| week_day {data-indent=3} | integer[] | 可用星期数(0代表周日，1代表周一，以此类推)<br/>`0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6` 枚举值之一
| available_day_time {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-indent=4} | integer | 当天可用开始时间
| end_time {data-indent=4} | integer | 当天可用结束时间
| irregulary_avaliable_time {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 无规律的有效时间段
| begin_time {data-indent=3} | string | 开始时间
| end_time {data-indent=3} | string | 结束时间
| fixed_normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| discount_amount {data-indent=3} | integer | 优惠金额
| transaction_minimum {data-indent=3} | integer | 消费门槛
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| discount_percent {data-indent=3} | integer | 折扣比例
| transaction_minimum {data-indent=3} | integer | 消费门槛
| exchange_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 换购券使用规则
| exchange_price {data-indent=3} | integer | 单品换购价
| transaction_minimum {data-indent=3} | integer | 消费门槛
| use_method {data-required data-indent=2} | string | 核销方式(OFF_LINE：线下滴码 MINI_PROGRAMS：线上小程序 PAYMENT_CODE：微信支付付款码 SELF_CONSUME：用户自助)<br/>`OFF_LINE` \| `MINI_PROGRAMS` \| `PAYMENT_CODE` \| `SELF_CONSUME` 枚举值之一
| mini_programs_appid {data-indent=2} | string | 小程序appid
| mini_programs_path {data-indent=2} | string | 小程序path
| custom_entrance {data-indent=1} | object {data-tooltip="对应PHP的array"} | 自定义入口
| mini_programs_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小程序入口
| mini_programs_appid {data-required data-indent=3} | string | 商家小程序appid
| mini_programs_path {data-required data-indent=3} | string | 商家小程序path
| entrance_words {data-required data-indent=3} | string | 入口文案
| guiding_words {data-indent=3} | string | 引导文案
| appid {data-indent=2} | string | 商户公众号appid
| hall_id {data-indent=2} | string | 更多优惠入口；[营销馆创建地址](https://pay.weixin.qq.com/index.php/xphp/cfav_market/hall#/pages/list/list)
| store_id {data-indent=2} | string | 可用门店id
| code_display_mode {data-indent=2} | string | code展示模式
| display_pattern_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 样式信息
| description {data-indent=2} | string | 使用须知
| merchant_logo_url {data-indent=2} | string | 商户logo
| merchant_name {data-indent=2} | string | 商户名称
| background_color {data-indent=2} | string | 背景颜色<br/>`Color010` \| `Color020` \| `Color030` \| `Color040` \| `Color050` \| `Color060` \| `Color070` \| `Color080` \| `Color090` \| `Color100` 枚举值之一
| coupon_image_url {data-indent=2} | string | 券详情图片
| finder_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 视频号相关信息
| finder_id {data-required data-indent=3} | string | 视频号ID
| finder_video_id {data-required data-indent=3} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=3} | string | 视频号封面图
| coupon_code {data-indent=1} | string | 券code
| coupon_state {data-indent=1} | string | 券状态<br/>`SENDED` \| `USED` \| `EXPIRED` 枚举值之一
| stock_id {data-indent=1} | string | 批次号
| transferable {data-indent=1} | boolean | 是否允许转赠
| shareable {data-indent=1} | boolean | 是否允许分享链接
| send_request_no {data-required data-indent=1} | string | 发券请求单号
| use_request_no {data-indent=1} | string | 核销请求单号
| available_start_time {data-required data-indent=1} | string | 券可使用开始时间
| expire_time {data-required data-indent=1} | string | 券过期时间
| receive_time {data-required data-indent=1} | string | 券领券时间
| use_time {data-indent=1} | string | 券核销时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534963) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012693087) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4015715918) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4015717400)
