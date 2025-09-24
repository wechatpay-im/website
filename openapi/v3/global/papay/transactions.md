---
title: 支付扣款
description: 可应用于定期扣款或需事后扣款以期提高效率的场景。例如：水电煤缴费、话费、充电宝租借等场景。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 机构APPID
| sp_appid {data-indent=1} | string | 机构appid
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| description {data-required data-indent=1} | string | 商品描述
| attach {data-indent=1} | string | 商户数据
| notify_url {data-required data-indent=1} | string | 通知地址
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| goods_tag {data-indent=1} | string | 商品标记
| merchant_category_code {data-required data-indent=1} | string | MCC码
| contract_id {data-required data-indent=1} | string | 委托代扣协议ID
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=2} | integer | 总金额
| currency {data-indent=2} | string | 货币类型
| scene_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| device_ip {data-indent=2} | string | 商户端设备IP

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->papay->transactions->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'sp_appid'               => 'wx8888888888888888',
    'sub_mchid'              => '1230000109',
    'sub_appid'              => 'wxcbda96de0b165484',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id'            => '100005698',
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/papay/transactions')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'sp_appid'               => 'wx8888888888888888',
    'sub_mchid'              => '1230000109',
    'sub_appid'              => 'wxcbda96de0b165484',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id'            => '100005698',
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/papay/transactions']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'sp_appid'               => 'wx8888888888888888',
    'sub_mchid'              => '1230000109',
    'sub_appid'              => 'wxcbda96de0b165484',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id'            => '100005698',
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->papay->transactions->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'sp_appid'               => 'wx8888888888888888',
    'sub_mchid'              => '1230000109',
    'sub_appid'              => 'wxcbda96de0b165484',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id'            => '100005698',
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/papay/transactions')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'sp_appid'               => 'wx8888888888888888',
    'sub_mchid'              => '1230000109',
    'sub_appid'              => 'wxcbda96de0b165484',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id'            => '100005698',
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/papay/transactions']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'sp_appid'               => 'wx8888888888888888',
    'sub_mchid'              => '1230000109',
    'sub_appid'              => 'wxcbda96de0b165484',
    'description'            => 'image形象店-深圳腾大- QQ公仔',
    'attach'                 => '自定义数据',
    'notify_url'             => 'https://www.weixin.qq.com/wxpay/pay.php',
    'out_trade_no'           => '1217752501201407033233368018',
    'goods_tag'              => 'WXG',
    'merchant_category_code' => '1011',
    'contract_id'            => '100005698',
    'amount'                 => [
      'total'    => 888,
      'currency' => 'HKD',
    ],
    'scene_info'             => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 商户号
| appid | string | APPID
| sp_mchid | string | 机构商户号
| sub_mchid | string | 子商户号
| sp_appid | string | 机构APPID
| sub_appid | string | 子商户APPID
| out_trade_no {data-required} | string | 商户订单号
| transaction_id {data-required} | string | 微信支付订单号
| attach | string | 商户数据
| trade_type {data-required} | string | 交易类型<br/>`AUTH` 枚举值
| bank_type {data-required} | string | 付款银行
| success_time {data-required} | string | 支付完成时间
| trade_state {data-required} | string | 交易状态<br/>`SUCCESS` \| `REFUND` \| `NOTPAY` \| `CLOSED` \| `PAYERROR` \| `USERPAYING` 枚举值之一
| trade_state_desc {data-required} | string | 交易状态描述
| payer {data-required} | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-indent=1} | string | 用户标识
| sp_openid {data-indent=1} | string | 机构用户标识
| sub_openid {data-indent=1} | string | 子商户用户标识
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=1} | integer | 订单金额
| payer_total {data-required data-indent=1} | integer | 用户支付金额
| currency {data-required data-indent=1} | string | 订单标价币种
| payer_currency {data-required data-indent=1} | string | 用户支付币种
| exchange_rate {data-indent=1} | object {data-tooltip="对应PHP的array"} | 汇率信息
| type {data-indent=2} | string | 汇率类型<br/>`SETTLEMENT_RATE` \| `USERPAYMENT_RATE` 枚举值之一
| rate {data-indent=2} | integer | 汇率值
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠功能
| promotion_id {data-required data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=1} | string | 优惠类型<br/>`COUPON` \| `DISCOUNT` 枚举值之一
| amount {data-required data-indent=1} | integer | 优惠券面额
| currency {data-required data-indent=1} | string | 优惠币种
| activity_id {data-indent=1} | string | 活动ID
| wxpay_contribute_amount {data-indent=1} | integer | 微信出资
| merchant_contribute_amount {data-indent=1} | integer | 商户出资
| other_contribute_amount {data-indent=1} | integer | 其他出资
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=2} | string | 商品编码
| goods_remark {data-indent=2} | string | 商品备注
| discount_amount {data-required data-indent=2} | integer | 商品优惠金额
| quantity {data-required data-indent=2} | integer | 商品数量
| price {data-required data-indent=2} | integer | 商品价格

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/global/v3/zh/4013015482)
