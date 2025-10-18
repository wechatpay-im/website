---
title: 合单查询订单
description: 电商平台通过合单查询订单API查询订单状态，完成下一步的业务逻辑。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_out_trade_no {data-required} | string | 合单商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->combineTransactions->outTradeNo->_combine_out_trade_no_->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/combine-transactions/out-trade-no/{combine_out_trade_no}')->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/combine-transactions/out-trade-no/{combine_out_trade_no}']->getAsync([
  'combine_out_trade_no' => 'P20150806125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->combineTransactions->outTradeNo->_combine_out_trade_no_->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/combine-transactions/out-trade-no/{combine_out_trade_no}')->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/combine-transactions/out-trade-no/{combine_out_trade_no}']->get([
  'combine_out_trade_no' => 'P20150806125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_appid {data-required} | string | 合单商户appid
| combine_mchid {data-required} | string | 合单商户号
| combine_out_trade_no {data-required} | string | 合单商户订单号
| combine_transaction_id {data-required} | string | 交易单微信支付订单号
| scene_info | object {data-tooltip="对应PHP的array"} | 场景信息
| device_id {data-indent=1} | string | 商户端设备号
| sub_orders | object[] {data-tooltip="对应PHP的array"} | 子单信息
| mchid {data-required data-indent=1} | string | 子单商户号
| individual_auth_id {data-indent=1} | string | 商品单个人收款方受理授权ID
| individual_name {data-indent=1} | string | 商品单个人收款方平台昵称
| trade_type {data-indent=1} | string | 交易类型<br/>`NATIVE` \| `JSAPI` \| `APP` \| `MWEB` 枚举值之一
| trade_state {data-indent=1} | string | 交易状态<br/>`SUCCESS` \| `REFUND` \| `NOTPAY` \| `CLOSED` \| `PAYERROR` 枚举值之一
| bank_type {data-indent=1} | string | 付款银行
| attach {data-indent=1} | string | 附加数据
| success_time {data-indent=1} | string | 支付完成时间
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-required data-indent=1} | string | 子单商户订单号
| sub_mchid {data-indent=1} | string | 二级商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_openid {data-indent=1} | string | 用户子标识
| promotion_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 优惠信息列表
| coupon_id {data-indent=2} | string | 券ID
| name {data-indent=2} | string | 优惠名称
| scope {data-indent=2} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=2} | string | 优惠类型<br/>`CASH` \| `NOCASH` 枚举值之一
| amount {data-indent=2} | integer | 优惠券面额
| stock_id {data-indent=2} | string | 活动批次ID
| wechatpay_contribute {data-indent=2} | integer | 微信出资
| merchant_contribute {data-indent=2} | integer | 商户出资
| other_contribute {data-indent=2} | integer | 其他出资
| currency {data-indent=2} | string | 优惠币种
| goods_detail {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=3} | string | 商品编码
| quantity {data-required data-indent=3} | integer | 商品数量
| unit_price {data-required data-indent=3} | integer | 商品单价
| discount_amount {data-indent=3} | integer | 商品优惠金额
| goods_remark {data-indent=3} | string | 商品备注
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=2} | integer | 标价金额
| currency {data-indent=2} | string | 标价币种
| payer_amount {data-required data-indent=2} | integer | 现金支付金额
| payer_currency {data-indent=2} | string | 现金支付币种
| settlement_rate {data-indent=2} | number | 结算汇率(汇率值是汇率乘以10的8次方)
| combine_payer_info | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-required data-indent=1} | string | 用户标识
| trade_scenario | string | 交易场景<br/>`RECOMMERCE` 枚举值
| installment_info | object {data-tooltip="对应PHP的array"} | 使用的商户贴息信息(微信分付)
| use_subsidy {data-required data-indent=1} | boolean | 是否使用了商户贴息
| selected_installment_number {data-required data-indent=1} | integer | 用户实际选择分期期数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012557006) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421126) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421222) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421316) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4013421401) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012551745) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761057) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462099) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462164) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462240) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013462520) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012708988) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012602253) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012761049)
