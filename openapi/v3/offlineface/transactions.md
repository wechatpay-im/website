---
title: 申请扣款接口
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| auth_code {data-required data-indent=1} | string | 支付凭证
| sp_appid {data-indent=1} | string | 服务商公众号appid
| sp_mchid {data-indent=1} | string | 服务商商户号
| sub_appid {data-indent=1} | string | 子商户公众号appid
| sub_mchid {data-indent=1} | string | 子商户商户号
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 金额信息
| total {data-required data-indent=2} | integer | 总金额
| currency {data-required data-indent=2} | string | 货币类型<br/>`CNY` 枚举值
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 支付场景信息
| device_ip {data-required data-indent=2} | string | 设备IP
| goods_tag {data-indent=1} | string | 优惠标记
| description {data-indent=1} | string | 商品信息
| attach {data-indent=1} | string | 商户附加信息
| settle_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=2} | boolean | 是否支持分账
| out_trade_no {data-indent=1} | string | 商户订单号
| business {data-indent=1} | object {data-tooltip="对应PHP的array"} | 业务信息
| business_product_id {data-required data-indent=2} | integer | 平台产品ID<br/>`2` \| `11` 枚举值之一
| business_scene_id {data-required data-indent=2} | integer | 平台场景ID<br/>`3` \| `4` \| `5` \| `6` \| `124` \| `125` \| `126` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->transactions->postAsync([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/transactions')->postAsync([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/transactions']->postAsync([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->transactions->post([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/transactions')->post([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/transactions']->post([
  'json' => [
    'auth_code' => '',
    'sp_appid' => '',
    'sp_mchid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'amount' => [
      'total' => 0,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_ip' => '',
    ],
    'goods_tag' => '',
    'description' => '',
    'attach' => '',
    'settle_info' => [
      'profit_sharing' => true,
    ],
    'out_trade_no' => '',
    'business' => [
      'business_product_id' => 0,
      'business_scene_id' => 0,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_appid {data-required}| string | 服务商公众号appid
| sp_mchid {data-required}| string | 服务商商户号
| sub_appid | string | 子商户公众号appid
| sub_mchid {data-required}| string | 子商户商户号
| payer | object {data-tooltip="对应PHP的array"} | 支付用户信息
| sp_openid {data-indent=1} | string | 公众下的openid
| sub_openid {data-indent=1} | string | 子公众下的openid
| amount | object {data-tooltip="对应PHP的array"} | 金额信息
| total {data-required data-indent=1} | integer | 总金额
| currency {data-required data-indent=1} | string | 货币类型<br/>`CNY` 枚举值
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠信息
| scene_info | object {data-tooltip="对应PHP的array"} | 支付场景信息
| device_ip {data-indent=1} | string | 设备IP
| bank_type | string | 付款银行
| trade_type | string | 交易类型<br/>`NATIVE` \| `JSAPI` \| `APP` \| `MWEB` \| `AUTH` 枚举值之一
| trade_state | string | 交易状态
| trade_state_description | string | 交易描述
| debt_state | string | 欠款状态
| description | string | 商品信息
| attach | string | 商户附加信息
| success_time | string | 支付成功时间
| transaction_id | string | 微信订单号
| repayment_transaction_id | string | 还款微信订单号
| out_trade_no | string | 商户订单号
| error_type | string | 错误分类

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
