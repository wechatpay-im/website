---
title: 发起异常退款
description: 提交退款申请后，查询退款确认状态为退款异常，可调用此接口发起异常退款处理。支持退款至用户、退款至交易商户银行账户两种处理方式。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信退款单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| individual_auth_id {data-indent=1} | string | 个人收款方受理授权ID
| out_refund_no {data-required data-indent=1} | string | 商户退款单号
| type {data-required data-indent=1} | string | 异常退款处理方式<br/>`USER_BANK_CARD` \| `MERCHANT_BANK_CARD` 枚举值之一
| bank_type {data-indent=1} | string | 开户银行<br/>`CMB_DEBIT` \| `COMM_DEBIT` \| `ABC_DEBIT` \| `CCB_DEBIT` \| `ICBC_DEBIT` \| `BOC_DEBIT` \| `PAB_DEBIT` \| `SPDB_DEBIT` \| `CITIC_DEBIT` \| `CEB_DEBIT` \| `CMBC_DEBIT` \| `CIB_DEBIT` \| `GDB_DEBIT` \| `PSBC_DEBIT` \| `NBCB_DEBIT` 枚举值之一
| bank_account {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款银行卡号
| real_name {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 收款用户姓名
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->refunds->_refund_id_->applyAbnormalRefund->postAsync([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid'          => '1900000109',
    'individual_auth_id' => '1900000109',
    'out_refund_no'      => '1217752501201407033233368018',
    'type'               => 'USER_BANK_CARD',
    'bank_type'          => 'ICBC_DEBIT',
    'bank_account'       => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    'real_name'          => 'UPgQcZSdq3zOayJwZ5XLrHY2dZU1W2Cd',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund')->postAsync([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid'          => '1900000109',
    'individual_auth_id' => '1900000109',
    'out_refund_no'      => '1217752501201407033233368018',
    'type'               => 'USER_BANK_CARD',
    'bank_type'          => 'ICBC_DEBIT',
    'bank_account'       => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    'real_name'          => 'UPgQcZSdq3zOayJwZ5XLrHY2dZU1W2Cd',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund']->postAsync([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid'          => '1900000109',
    'individual_auth_id' => '1900000109',
    'out_refund_no'      => '1217752501201407033233368018',
    'type'               => 'USER_BANK_CARD',
    'bank_type'          => 'ICBC_DEBIT',
    'bank_account'       => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    'real_name'          => 'UPgQcZSdq3zOayJwZ5XLrHY2dZU1W2Cd',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->refunds->_refund_id_->applyAbnormalRefund->post([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid'          => '1900000109',
    'individual_auth_id' => '1900000109',
    'out_refund_no'      => '1217752501201407033233368018',
    'type'               => 'USER_BANK_CARD',
    'bank_type'          => 'ICBC_DEBIT',
    'bank_account'       => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    'real_name'          => 'UPgQcZSdq3zOayJwZ5XLrHY2dZU1W2Cd',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund')->post([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid'          => '1900000109',
    'individual_auth_id' => '1900000109',
    'out_refund_no'      => '1217752501201407033233368018',
    'type'               => 'USER_BANK_CARD',
    'bank_type'          => 'ICBC_DEBIT',
    'bank_account'       => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    'real_name'          => 'UPgQcZSdq3zOayJwZ5XLrHY2dZU1W2Cd',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/refunds/{refund_id}/apply-abnormal-refund']->post([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid'          => '1900000109',
    'individual_auth_id' => '1900000109',
    'out_refund_no'      => '1217752501201407033233368018',
    'type'               => 'USER_BANK_CARD',
    'bank_type'          => 'ICBC_DEBIT',
    'bank_account'       => 'd+xT+MQCvrLHUVDWv/8MR/dB7TkXLVfSrUxMPZy6jWWYzpRrEEaYQE8ZRGYoeorwC+w==',
    'real_name'          => 'UPgQcZSdq3zOayJwZ5XLrHY2dZU1W2Cd',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信支付退款号
| out_refund_no {data-required} | string | 商户退款单号
| transaction_id {data-required} | string | 微信支付订单号
| out_trade_no {data-required} | string | 商户订单号
| channel | string | 退款渠道
| user_received_account | string | 退款入账账户
| success_time | string | 退款成功时间
| create_time {data-required} | string | 退款创建时间
| status {data-required} | string | 退款状态
| funds_account | string | 资金账户<br/>`AVAILABLE` \| `UNSETTLED` 枚举值之一
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 金额信息
| refund {data-required data-indent=1} | number | 退款金额
| from {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 退款出资账户及金额
| account {data-required data-indent=2} | string | 出资账户类型
| amount {data-required data-indent=2} | number | 出资金额
| payer_refund {data-required data-indent=1} | number | 用户退款金额
| discount_refund {data-required data-indent=1} | number | 优惠退款金额
| currency {data-required data-indent=1} | string | 退款币种
| refund_fee {data-indent=1} | number | 手续费退款金额
| promotion_detail | object[] {data-tooltip="对应PHP的array"} | 优惠退款信息
| promotion_id {data-required data-indent=1} | string | 券ID
| scope {data-required data-indent=1} | string | 优惠范围
| type {data-required data-indent=1} | string | 优惠类型
| amount {data-required data-indent=1} | number | 优惠券面额
| refund_amount {data-required data-indent=1} | number | 优惠退款金额
| goods_detail {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商品列表
| merchant_goods_id {data-required data-indent=2} | string | 商户侧商品编码
| wechatpay_goods_id {data-indent=2} | string | 微信侧商品编码
| goods_name {data-indent=2} | string | 商品名称
| unit_price {data-required data-indent=2} | number | 商品单价
| refund_amount {data-required data-indent=2} | number | 商品退款金额
| refund_quantity {data-required data-indent=2} | number | 商品退货数量
| refund_account | string | 退款出资商户<br/>`REFUND_SOURCE_PARTNER_ADVANCE` \| `REFUND_SOURCE_SUB_MERCHANT` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012649274)
