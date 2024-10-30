---
title: 退款申请
description: 当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家，微信支付将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退到买家帐号上。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| sp_appid {data-indent=1} | string | 电商平台APPID
| sub_appid {data-indent=1} | string | 二级商户APPID
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-indent=1} | string | 商户订单号
| out_refund_no {data-indent=1} | string | 商户退款单号
| reason {data-indent=1} | string | 退款原因
| amount {data-indent=1} | object | 订单金额
| refund {data-indent=2} | integer | 退款金额
| from {data-indent=2} | object[] | 退款出资账户及金额
| account {data-indent=3} | string | 出资账户类型
| amount {data-indent=3} | number | 出资金额
| total {data-indent=2} | integer | 原订单金额
| currency {data-indent=2} | string | 退款币种
| notify_url {data-indent=1} | string | 退款结果回调url
| refund_account {data-indent=1} | string | 退款出资商户
| funds_account {data-indent=1} | string | 资金账户

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->refunds->apply->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'sp_appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'reason' => '商品已售完',
    'amount' => [
      'refund' => 888,
      'from' => [[
        'account' => 'AVAILABLE',
        'amount' => 444,
      ],],
      'total' => 888,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://weixin.qq.com',
    'refund_account' => 'REFUND_SOURCE_SUB_MERCHANT',
    'funds_account' => 'AVAILABLE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/refunds/apply')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'sp_appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'reason' => '商品已售完',
    'amount' => [
      'refund' => 888,
      'from' => [[
        'account' => 'AVAILABLE',
        'amount' => 444,
      ],],
      'total' => 888,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://weixin.qq.com',
    'refund_account' => 'REFUND_SOURCE_SUB_MERCHANT',
    'funds_account' => 'AVAILABLE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/refunds/apply']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'sp_appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'reason' => '商品已售完',
    'amount' => [
      'refund' => 888,
      'from' => [[
        'account' => 'AVAILABLE',
        'amount' => 444,
      ],],
      'total' => 888,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://weixin.qq.com',
    'refund_account' => 'REFUND_SOURCE_SUB_MERCHANT',
    'funds_account' => 'AVAILABLE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->refunds->apply->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'sp_appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'reason' => '商品已售完',
    'amount' => [
      'refund' => 888,
      'from' => [[
        'account' => 'AVAILABLE',
        'amount' => 444,
      ],],
      'total' => 888,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://weixin.qq.com',
    'refund_account' => 'REFUND_SOURCE_SUB_MERCHANT',
    'funds_account' => 'AVAILABLE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/refunds/apply')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'sp_appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'reason' => '商品已售完',
    'amount' => [
      'refund' => 888,
      'from' => [[
        'account' => 'AVAILABLE',
        'amount' => 444,
      ],],
      'total' => 888,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://weixin.qq.com',
    'refund_account' => 'REFUND_SOURCE_SUB_MERCHANT',
    'funds_account' => 'AVAILABLE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/refunds/apply']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'sp_appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no' => '1217752501201407033233368018',
    'out_refund_no' => '1217752501201407033233368018',
    'reason' => '商品已售完',
    'amount' => [
      'refund' => 888,
      'from' => [[
        'account' => 'AVAILABLE',
        'amount' => 444,
      ],],
      'total' => 888,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://weixin.qq.com',
    'refund_account' => 'REFUND_SOURCE_SUB_MERCHANT',
    'funds_account' => 'AVAILABLE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id | string | 微信退款单号
| out_refund_no | string | 商户退款单号
| create_time | string | 退款创建时间
| amount | object | 订单金额
| refund {data-indent=1} | integer | 退款金额
| from {data-indent=1} | object[] | 退款出资账户及金额
| account {data-indent=2} | string | 出资账户类型
| amount {data-indent=2} | number | 出资金额
| payer_refund {data-indent=1} | integer | 用户退款金额
| discount_refund {data-indent=1} | integer | 优惠退款金额
| currency {data-indent=1} | string | 退款币种
| advance {data-indent=1} | number | 垫付金额
| promotion_detail | object[] | 优惠退款详情
| promotion_id {data-indent=1} | string | 券ID
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-indent=1} | integer | 优惠券面额
| refund_amount {data-indent=1} | integer | 优惠退款金额
| refund_account | string | 退款出资商户

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/refunds/chapter3_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-refund/refunds/create-refund.html)
