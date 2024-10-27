---
title: 付款码支付
description: 收银员使用扫码设备读取微信用户付款码以后，二维码或条码信息会传送至商户收银台，由商户收银台或者商户后台调用该接口发起支付。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 应用AppID
| mchid {data-indent=1} | string | 直连商户号
| description {data-indent=1} | string | 商品描述
| out_trade_no {data-indent=1} | string | 商户订单号
| attach {data-indent=1} | string | 附加数据
| goods_tag {data-indent=1} | string | 订单优惠标记
| support_fapiao {data-indent=1} | boolean | 电子发票入口开放标识
| payer {data-indent=1} | object | 支付者
| auth_code {data-indent=2} | string | 授权码
| amount {data-indent=1} | object | 订单金额
| total {data-indent=2} | number | 总金额
| currency {data-indent=2} | string | 货币类型
| scene_info {data-indent=1} | object | 场景信息
| device_id {data-indent=2} | string | 商户端设备号
| device_ip {data-indent=2} | string | 商户端设备 IP
| store_info {data-indent=2} | object | 商户门店信息
| id {data-indent=3} | string | 门店编号
| out_id {data-indent=3} | string | 商家自定义编码
| detail {data-indent=1} | object | 优惠功能
| cost_price {data-indent=2} | number | 订单原价
| invoice_id {data-indent=2} | string | 商品小票ID
| goods_detail {data-indent=2} | object[] | 单品列表
| merchant_goods_id {data-indent=3} | string | 商品编码
| wxpay_goods_id {data-indent=3} | string | 微信支付商品编码
| goods_name {data-indent=3} | string | 商品名称
| quantity {data-indent=3} | number | 商品数量
| unit_price {data-indent=3} | number | 商品单价
| settle_info {data-indent=1} | object | 结算信息
| profit_sharing {data-indent=2} | boolean | 是否指定分账

{.im-table #request}


::: code-group
```php [异步纯链式]
$instance->v3->pay->transactions->codepay->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'attach' => '自定义数据说明',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'payer' => [
      'auth_code' => '130061098828009406',
    ],
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
      'store_info' => [
        'id' => '0001',
        'out_id' => 'A1111',
      ],
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wxpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/transactions/codepay')->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'attach' => '自定义数据说明',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'payer' => [
      'auth_code' => '130061098828009406',
    ],
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
      'store_info' => [
        'id' => '0001',
        'out_id' => 'A1111',
      ],
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wxpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/transactions/codepay']->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'attach' => '自定义数据说明',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'payer' => [
      'auth_code' => '130061098828009406',
    ],
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
      'store_info' => [
        'id' => '0001',
        'out_id' => 'A1111',
      ],
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wxpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->transactions->codepay->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'attach' => '自定义数据说明',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'payer' => [
      'auth_code' => '130061098828009406',
    ],
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
      'store_info' => [
        'id' => '0001',
        'out_id' => 'A1111',
      ],
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wxpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/transactions/codepay')->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'attach' => '自定义数据说明',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'payer' => [
      'auth_code' => '130061098828009406',
    ],
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
      'store_info' => [
        'id' => '0001',
        'out_id' => 'A1111',
      ],
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wxpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/transactions/codepay']->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'mchid' => '1230000109',
    'description' => 'Image形象店-深圳腾大-QQ公仔',
    'out_trade_no' => '1217752501201407033233368018',
    'attach' => '自定义数据说明',
    'goods_tag' => 'WXG',
    'support_fapiao' => true,
    'payer' => [
      'auth_code' => '130061098828009406',
    ],
    'amount' => [
      'total' => 100,
      'currency' => 'CNY',
    ],
    'scene_info' => [
      'device_id' => '013467007045764',
      'device_ip' => '128.0.0.1',
      'store_info' => [
        'id' => '0001',
        'out_id' => 'A1111',
      ],
    ],
    'detail' => [
      'cost_price' => 608800,
      'invoice_id' => '微信123',
      'goods_detail' => [[
        'merchant_goods_id' => '1246464644',
        'wxpay_goods_id' => '1001',
        'goods_name' => 'iPhoneX 256G',
        'quantity' => 1,
        'unit_price' => 528800,
      ],],
    ],
    'settle_info' => [
      'profit_sharing' => true,
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 应用AppID
| mchid | string | 直连商户号
| out_trade_no | string | 商户订单号
| transaction_id | string | 微信支付订单号
| trade_type | string | 交易类型
| bank_type | string | 银行类型
| success_time | string | 支付完成时间
| trade_state | string | 交易状态
| trade_state_desc | string | 交易状态描述
| attach | string | 附加数据
| payer | object | 支付者
| openid {data-indent=1} | string | 用户标识
| amount | object | 订单金额
| total {data-indent=1} | number | 订单金额
| payer_total {data-indent=1} | number | 用户支付金额
| currency {data-indent=1} | string | 订单金额货币类型
| payer_currency {data-indent=1} | string | 用户支付货币类型
| promotion_detail | object[] | 优惠信息
| coupon_id {data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-indent=1} | number | 优惠券面额
| stock_id {data-indent=1} | string | 活动ID
| wechatpay_contribute {data-indent=1} | number | 微信出资
| merchant_contribute {data-indent=1} | number | 商户出资
| other_contribute {data-indent=1} | number | 其他出资
| currency {data-indent=1} | string | 优惠货币类型
| goods_detail {data-indent=1} | object[] | 单品列表
| goods_id {data-indent=2} | string | 商品编码
| quantity {data-indent=2} | number | 商品数量
| unit_price {data-indent=2} | number | 商品单价
| discount_amount {data-indent=2} | number | 商品优惠金额
| goods_remark {data-indent=2} | string | 商品备注

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/code-payment-v3/direct/code-pay.html)
