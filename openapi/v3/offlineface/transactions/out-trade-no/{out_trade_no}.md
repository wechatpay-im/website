---
title: 查单接口
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 子商户商户号
| business_product_id {data-required data-indent=1} | string | 平台产品ID<br/>`2` \| `11` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'            => '198798777',
    'sub_mchid'           => '3233122121',
    'business_product_id' => '2',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'            => '198798777',
    'sub_mchid'           => '3233122121',
    'business_product_id' => '2',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'            => '198798777',
    'sub_mchid'           => '3233122121',
    'business_product_id' => '2',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'            => '198798777',
    'sub_mchid'           => '3233122121',
    'business_product_id' => '2',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'            => '198798777',
    'sub_mchid'           => '3233122121',
    'business_product_id' => '2',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'            => '198798777',
    'sub_mchid'           => '3233122121',
    'business_product_id' => '2',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_appid {data-required} | string | 服务商公众号appid
| sp_mchid {data-required} | string | 服务商商户号
| sub_appid | string | 子商户公众号appid
| sub_mchid {data-required} | string | 子商户商户号
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
| trade_state {data-required} | string | 交易状态
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

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
