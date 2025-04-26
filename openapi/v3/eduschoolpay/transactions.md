---
title: 扣款
description: 使用签约协议号发起扣款，本接口支持两种模式，通过参数模式（payment_mode）进行选择。 同步扣款模式会立即返回扣款结果，异步扣款模式会立即返回受理结果，最终的扣款结果会通过回调的方式通知给商户 两种模式下，若出现超时或未回调时，商户均可调用商户订单号查单接口查询订单扣款结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户appid
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户appid
| description {data-required data-indent=1} | string | 商品描述
| attach {data-indent=1} | string | 商户数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| goods_tag {data-indent=1} | string | 订单优惠标记
| notify_url {data-required data-indent=1} | string | 商户接收通知地址
| contract_id {data-required data-indent=1} | string | 签约协议号
| user_id {data-required data-indent=1} | string | 用户账号
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-required data-indent=2} | string | 货币类型
| scene_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| start_time {data-required data-indent=2} | string | 消费时间
| school_id {data-required data-indent=2} | string | 学校编号
| scene_type {data-required data-indent=2} | string | 消费场景类型
| device_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| device_id {data-indent=2} | string | 设备号
| device_ip {data-required data-indent=2} | string | 商户端设备ip
| settle_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 分账结算信息
| profit_sharing {data-indent=2} | boolean | 是否指定分账
| payment_mode {data-indent=1} | string | 扣款模式

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduschoolpay->transactions->postAsync([
  'json' => [
    'appid'        => 'wx8888888888888888',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => 'wx8888888888888888',
    'description'  => '中山大学-第二食堂-海鲜炒饭',
    'attach'       => '自定义数据',
    'out_trade_no' => '121775250124070332',
    'goods_tag'    => 'test',
    'notify_url'   => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'  => '2045011120563805041758214605',
    'user_id'      => '20200330tony',
    'amount'       => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'scene_info'   => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'school_id'  => '18260256813396',
      'scene_type' => 'CANTEEN',
    ],
    'device_info'  => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
    'settle_info'  => [
      'profit_sharing' => true,
    ],
    'payment_mode' => 'SYNC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/eduschoolpay/transactions')->postAsync([
  'json' => [
    'appid'        => 'wx8888888888888888',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => 'wx8888888888888888',
    'description'  => '中山大学-第二食堂-海鲜炒饭',
    'attach'       => '自定义数据',
    'out_trade_no' => '121775250124070332',
    'goods_tag'    => 'test',
    'notify_url'   => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'  => '2045011120563805041758214605',
    'user_id'      => '20200330tony',
    'amount'       => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'scene_info'   => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'school_id'  => '18260256813396',
      'scene_type' => 'CANTEEN',
    ],
    'device_info'  => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
    'settle_info'  => [
      'profit_sharing' => true,
    ],
    'payment_mode' => 'SYNC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/eduschoolpay/transactions']->postAsync([
  'json' => [
    'appid'        => 'wx8888888888888888',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => 'wx8888888888888888',
    'description'  => '中山大学-第二食堂-海鲜炒饭',
    'attach'       => '自定义数据',
    'out_trade_no' => '121775250124070332',
    'goods_tag'    => 'test',
    'notify_url'   => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'  => '2045011120563805041758214605',
    'user_id'      => '20200330tony',
    'amount'       => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'scene_info'   => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'school_id'  => '18260256813396',
      'scene_type' => 'CANTEEN',
    ],
    'device_info'  => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
    'settle_info'  => [
      'profit_sharing' => true,
    ],
    'payment_mode' => 'SYNC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduschoolpay->transactions->post([
  'json' => [
    'appid'        => 'wx8888888888888888',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => 'wx8888888888888888',
    'description'  => '中山大学-第二食堂-海鲜炒饭',
    'attach'       => '自定义数据',
    'out_trade_no' => '121775250124070332',
    'goods_tag'    => 'test',
    'notify_url'   => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'  => '2045011120563805041758214605',
    'user_id'      => '20200330tony',
    'amount'       => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'scene_info'   => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'school_id'  => '18260256813396',
      'scene_type' => 'CANTEEN',
    ],
    'device_info'  => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
    'settle_info'  => [
      'profit_sharing' => true,
    ],
    'payment_mode' => 'SYNC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/eduschoolpay/transactions')->post([
  'json' => [
    'appid'        => 'wx8888888888888888',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => 'wx8888888888888888',
    'description'  => '中山大学-第二食堂-海鲜炒饭',
    'attach'       => '自定义数据',
    'out_trade_no' => '121775250124070332',
    'goods_tag'    => 'test',
    'notify_url'   => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'  => '2045011120563805041758214605',
    'user_id'      => '20200330tony',
    'amount'       => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'scene_info'   => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'school_id'  => '18260256813396',
      'scene_type' => 'CANTEEN',
    ],
    'device_info'  => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
    'settle_info'  => [
      'profit_sharing' => true,
    ],
    'payment_mode' => 'SYNC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/eduschoolpay/transactions']->post([
  'json' => [
    'appid'        => 'wx8888888888888888',
    'sub_mchid'    => '1900000109',
    'sub_appid'    => 'wx8888888888888888',
    'description'  => '中山大学-第二食堂-海鲜炒饭',
    'attach'       => '自定义数据',
    'out_trade_no' => '121775250124070332',
    'goods_tag'    => 'test',
    'notify_url'   => 'https://www.weixin.qq.com/wxpay/pay',
    'contract_id'  => '2045011120563805041758214605',
    'user_id'      => '20200330tony',
    'amount'       => [
      'total'    => 888,
      'currency' => 'CNY',
    ],
    'scene_info'   => [
      'start_time' => '2017-08-26T09:43:39+08:00',
      'school_id'  => '18260256813396',
      'scene_type' => 'CANTEEN',
    ],
    'device_info'  => [
      'device_id' => '12343232',
      'device_ip' => '123.12.12.123',
    ],
    'settle_info'  => [
      'profit_sharing' => true,
    ],
    'payment_mode' => 'SYNC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| appid {data-required} | string | 商户AppID
| sub_mchid | string | 子商户号
| sub_appid | string | 子商户AppID
| out_trade_no {data-required} | string | 商户订单号
| transaction_id | string | 微信支付订单号
| trade_type | string | 交易类型
| trade_state {data-required} | string | 交易状态
| trade_state_desc | string | 交易状态描述
| bank_type | string | 付款银行
| attach | string | 商户数据
| success_time | string | 支付完成时间
| payer | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=1} | string | 商户AppID下的用户标识
| sub_openid {data-indent=1} | string | 子商户AppID下的用户标识
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=1} | number | 订单金额
| payer_total {data-indent=1} | number | 用户支付金额
| discount_total {data-indent=1} | number | 折扣
| currency {data-indent=1} | string | 货币类型
| device_info {data-required} | object {data-tooltip="对应PHP的array"} | 设备信息
| device_id {data-indent=1} | string | 设备号
| device_ip {data-required data-indent=1} | string | 商户端设备IP
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠详情
| coupon_id {data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-indent=1} | number | 优惠券面额
| stock_id {data-indent=1} | string | 活动ID
| wechatpay_contribute {data-indent=1} | number | 微信出资
| merchant_contribute {data-indent=1} | number | 商户出资
| other_contribute {data-indent=1} | number | 其他出资

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012469030)
