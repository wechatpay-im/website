---
title: 合单查单
description: 所有微信支付订单的查询，商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。**合单查单api只能使用合单单号combine_out_trade_no来查询，如果要使用子订单号查询，请使用公众api中的查单接口。**
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :closed_lock_with_key: {.im-privated}

本接口服务已于 `2021.09.01` (北京时间)停止开放，文档仅做留存参考。

:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| combine_appid {data-required data-indent=1} | string | 合单appid
| combine_mch_id {data-required data-indent=1} | string | 合单商户号
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| combine_out_trade_no {data-required data-indent=1} | string | 合单商户订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->querycombinedorder->postAsync([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/querycombinedorder')->postAsync([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/querycombinedorder']->postAsync([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->querycombinedorder->post([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/querycombinedorder')->post([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/querycombinedorder']->post([
  'xml' => [
    'combine_appid'        => 'wx8888888888888888',
    'combine_mch_id'       => '1900000109',
    'sign_type'            => 'HMAC-SHA256',
    'combine_out_trade_no' => '1217752501201407033233368018',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| combine_appid {data-required} | string | 合单appid
| combine_mch_id {data-required} | string | 合单商户号
| nonce_str {data-required} | string | 随机字符串
| device_info | string | 设备号
| combine_openid | string | 合单用户标识
| combine_out_trade_no {data-required} | string | 合单商户订单号
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| result_msg {data-required} | string | 业务结果描述
| trade_state | string | 交易状态<br/>`SUCCESS` \| `REFUND` \| `NOTPAY` \| `CLOSED` \| `REVOKED` \| `USERPAYING` \| `PAYERROR` \| `ACCEPT` 枚举值之一
| trade_state_desc | string | 交易状态描述
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| sub_order_list {data-required} | string | 子单信息`JSON`格式字符串
| {colspan=3 .im-table-line}
| order_num {data-required data-indent=1} | number | 子订单数
| order_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 子订单信息
| mchid {data-required data-indent=2} | string | 子单商户号
| trade_type {data-required data-indent=2} | string | 交易类型<br/>`NATIVE` \| `JSAPI` \| `APP` \| `MWEB` 枚举值之一
| attach {data-required data-indent=2} | string | 附加数据
| amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=3} | number | 标价金额
| currency {data-indent=3} | string | 标价币种
| transaction_id {data-indent=2} | string | 微信订单号
| out_trade_no {data-required data-indent=2} | string | 子单商户订单号
| goods_tag {data-indent=2} | string | 订单优惠标记
| description {data-required data-indent=2} | string | 商品描述
| promotion_detail {data-indent=2} | object {data-tooltip="对应PHP的array"} | 营销详情
| promotion_id {data-required data-indent=3} | string | 券ID
| name {data-indent=3} | string | 优惠名称
| scope {data-indent=3} | string | 优惠范围<br/>`GLOBAL` \| `SINGLE` 枚举值之一
| type {data-indent=3} | string | 优惠类型<br/>`COUPON` \| `DISCOUNT` 枚举值之一
| amount {data-required data-indent=3} | string | 优惠券面额
| activity_id {data-required data-indent=3} | string | 活动ID
| wxpay_contribute {data-indent=3} | string | 微信出资
| merchant_contribute {data-indent=3} | string | 商户出资
| other_contribute {data-indent=3} | string | 其他出资
| goods_detail {data-required data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-indent=4} | string | 商品编码
| wxpay_goods_id {data-indent=4} | string | 微信支付商品编码
| goods_name {data-indent=4} | string | 商品名称
| quantity {data-required data-indent=4} | number | 商品数量
| price {data-required data-indent=4} | number | 商品单价

{.im-table #response}

参阅 [官方合单支付文档](https://pay.weixin.qq.com/wiki/doc/api/combine.php?chapter=24_3&index=4)
