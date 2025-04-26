---
title: 发放指定批次的消费金
description: 商户平台/API完成制券/消费金后，可使用发放代金券接口发券/消费金。通过调用此接口可发放指定批次给指定用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户OpenID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_id {data-required data-indent=1} | string | 批次号
| out_request_no {data-required data-indent=1} | string | 商户单据号
| user_name {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 用户姓名
| id_card_number {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 身份证号码
| amount {data-indent=1} | number | 发放面额
| appid {data-required data-indent=1} | string | 公众账号ID
| card_type {data-required data-indent=1} | string | 证件类型<br/>`ID_CARD` 枚举值
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->multiuse->users->_openid_->coupons->postAsync([
  'openid' => '',
  'json' => [
    'stock_id'       => '9856000',
    'out_request_no' => '8956000202407191254642',
    'user_name'      => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'id_card_number' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'amount'         => 10000,
    'appid'          => 'wx233544546545989',
    'card_type'      => 'ID_CARD',
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
$instance->chain('v3/multiuse/users/{openid}/coupons')->postAsync([
  'openid' => '',
  'json' => [
    'stock_id'       => '9856000',
    'out_request_no' => '8956000202407191254642',
    'user_name'      => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'id_card_number' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'amount'         => 10000,
    'appid'          => 'wx233544546545989',
    'card_type'      => 'ID_CARD',
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
$instance['v3/multiuse/users/{openid}/coupons']->postAsync([
  'openid' => '',
  'json' => [
    'stock_id'       => '9856000',
    'out_request_no' => '8956000202407191254642',
    'user_name'      => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'id_card_number' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'amount'         => 10000,
    'appid'          => 'wx233544546545989',
    'card_type'      => 'ID_CARD',
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
$response = $instance->v3->multiuse->users->_openid_->coupons->post([
  'openid' => '',
  'json' => [
    'stock_id'       => '9856000',
    'out_request_no' => '8956000202407191254642',
    'user_name'      => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'id_card_number' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'amount'         => 10000,
    'appid'          => 'wx233544546545989',
    'card_type'      => 'ID_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/multiuse/users/{openid}/coupons')->post([
  'openid' => '',
  'json' => [
    'stock_id'       => '9856000',
    'out_request_no' => '8956000202407191254642',
    'user_name'      => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'id_card_number' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'amount'         => 10000,
    'appid'          => 'wx233544546545989',
    'card_type'      => 'ID_CARD',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/multiuse/users/{openid}/coupons']->post([
  'openid' => '',
  'json' => [
    'stock_id'       => '9856000',
    'out_request_no' => '8956000202407191254642',
    'user_name'      => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'id_card_number' => '757b340b45ebef5467rter35gf464344v3542sdf4t6re4tb4f54ty45t4yyry45',
    'amount'         => 10000,
    'appid'          => 'wx233544546545989',
    'card_type'      => 'ID_CARD',
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
| coupon_id {data-required} | string | 消费金ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012539766)
