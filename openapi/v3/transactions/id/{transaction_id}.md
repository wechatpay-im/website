---
title: 查询订单(微信支付订单号)
description: 该接口提供所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| transaction_id | string | 微信支付订单号
| query | object | 声明请求的查询参数
| mchid {data-indent=1} | string | 商户号
| sub_mchid {data-indent=1} | string | 子商户号
| sp_mchid {data-indent=1} | string | 机构商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->transactions->id->_transaction_id_->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'transaction_id' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/transactions/id/{transaction_id}')->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'transaction_id' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/transactions/id/{transaction_id}']->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'transaction_id' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->transactions->id->_transaction_id_->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'transaction_id' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/transactions/id/{transaction_id}')->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'transaction_id' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/transactions/id/{transaction_id}']->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'transaction_id' => '1217752501201407033233368018',
  'query' => [
    'mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'sp_mchid' => '1900000100',
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
| out_trade_no | string | 商户订单号
| id | string | 微信支付订单号
| attach | string | 商户数据
| trade_type | string | 交易类型
| bank_type | string | 付款银行
| success_time | string | 支付完成时间
| trade_state | string | 交易状态
| trade_state_desc | string | 交易状态描述
| payer | object | 支付者
| openid {data-indent=1} | string | 用户标识
| sp_openid {data-indent=1} | string | 机构用户标识
| sub_openid {data-indent=1} | string | 子商户用户标识
| amount | object | 订单金额
| total {data-indent=1} | integer | 订单金额
| payer_total {data-indent=1} | integer | 用户支付金额
| currency {data-indent=1} | string | 订单标价币种
| payer_currency {data-indent=1} | string | 用户支付币种
| exchange_rate {data-indent=1} | object | 汇率信息
| type {data-indent=2} | string | 汇率类型
| rate {data-indent=2} | integer | 汇率值
| promotion_detail | object[] | 优惠功能
| promotion_id {data-indent=1} | string | 券ID
| name {data-indent=1} | string | 优惠名称
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-indent=1} | integer | 优惠券面额
| currency {data-indent=1} | string | 优惠币种
| activity_id {data-indent=1} | string | 活动ID
| wxpay_contribute_amount {data-indent=1} | integer | 微信出资
| merchant_contribute_amount {data-indent=1} | integer | 商户出资
| other_contribute_amount {data-indent=1} | integer | 其他出资
| goods_detail {data-indent=1} | object[] | 单品列表
| goods_id {data-indent=2} | string | 商品编码
| goods_remark {data-indent=2} | string | 商品备注
| discount_amount {data-indent=2} | integer | 商品优惠金额
| quantity {data-indent=2} | integer | 商品数量
| price {data-indent=2} | integer | 商品价格

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/fusion_wallet_ch/QuickPay/chapter8_1.shtml)