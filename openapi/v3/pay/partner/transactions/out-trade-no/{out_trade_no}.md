---
title: 商户订单号查询
description: 商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。查询订单状态可通过微信支付订单号或商户订单号两种方式查询
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_trade_no {data-required} | string | 商户订单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->pay->partner->transactions->outTradeNo->_out_trade_no_->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'  => '1230000109',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/pay/partner/transactions/out-trade-no/{out_trade_no}')->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'  => '1230000109',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/pay/partner/transactions/out-trade-no/{out_trade_no}']->getAsync([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'  => '1230000109',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->pay->partner->transactions->outTradeNo->_out_trade_no_->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'  => '1230000109',
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/pay/partner/transactions/out-trade-no/{out_trade_no}')->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'  => '1230000109',
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/pay/partner/transactions/out-trade-no/{out_trade_no}']->get([
  'out_trade_no' => '1217752501201407033233368018',
  'query' => [
    'sp_mchid'  => '1230000109',
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_appid {data-required} | string | 服务商公众号ID
| sp_mchid {data-required} | string | 服务商户号
| sub_appid | string | 子商户公众号ID
| sub_mchid {data-required} | string | 子商户号
| settle_info | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=1} | boolean | 是否指定分账
| subsidy_amount {data-indent=1} | integer | 补差金额
| transaction_id | string | 微信支付订单号
| trade_type | string | 交易类型
| trade_state | string | 交易状态
| trade_state_desc | string | 交易状态描述
| bank_type | string | 付款银行
| success_time | string | 支付完成时间
| description {data-required} | string | 商品描述
| attach | string | 附加数据
| out_trade_no {data-required} | string | 商户订单号
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=1} | integer | 总金额
| currency {data-indent=1} | string | 货币类型
| time_expire | string | 交易结束时间
| notify_url {data-required} | string | 通知地址
| goods_tag | string | 订单优惠标记
| limit_pay | string[] | 指定支付方式<br/>`no_balance` \| `no_credit` \| `no_debit` \| `balance_only` 枚举值之一
| support_fapiao | boolean | 电子发票入口开放标识
| detail | object {data-tooltip="对应PHP的array"} | 优惠功能
| cost_price {data-indent=1} | integer | 订单原价
| invoice_id {data-indent=1} | string | 商品小票ID
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| merchant_goods_id {data-required data-indent=2} | string | 商户侧商品编码
| wechatpay_goods_id {data-indent=2} | string | 微信侧商品编码
| goods_name {data-indent=2} | string | 商品名称
| quantity {data-required data-indent=2} | integer | 商品数量
| unit_price {data-required data-indent=2} | integer | 商品单价
| scene_info | object {data-tooltip="对应PHP的array"} | 场景信息
| payer_client_ip {data-indent=1} | string | 用户终端IP
| device_id {data-indent=1} | string | 商户端设备号
| store_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 商户门店信息
| id {data-indent=2} | string | 门店编号
| name {data-required data-indent=2} | string | 门店名称
| area_code {data-required data-indent=2} | string | 地区编码
| address {data-required data-indent=2} | string | 详细地址
| payer | object {data-tooltip="对应PHP的array"} | 支付者
| sp_openid {data-required data-indent=1} | string | 用户服务标识
| sub_openid {data-indent=1} | string | 用户子标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012526944)
