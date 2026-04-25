---
title: 小程序场景预签约（需要实名验证）
description: 商户可调用本接口预先指定签约，生成预签约会话及对应的预签约ID，再携带预签约ID（pre_entrustweb_id）参数，通过微信SDK拉起微信支付客户端的签约页面。通过本接口预签约时，商户需具备实名验证产品权限，要求用户在签约时完成实名验证授权，仅当用户的微信支付实名信息与商户预留一致时才能完成签约。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 签约和付款的AppID
| out_contract_code {data-required data-indent=1} | string | 业务申请单号
| openid {data-required data-indent=1} | string | 个人收款方的OpenID
| real_name {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 真实姓名
| cred_type {data-required data-indent=1} | string | 证件类型<br/>`ID_CARD` 枚举值
| cred_id {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 件号码
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->individualContracts->preEntrustSignWithRealNameIdentity->miniProgram->postAsync([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'         => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tP',
    'cred_type'         => 'ID_CARD',
    'cred_id'           => 'MZnwEx6zotwIz6ctW2/iQL5z9',
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
$instance->chain('v3/ecommerce/individual-contracts/pre-entrust-sign-with-real-name-identity/mini-program')->postAsync([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'         => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tP',
    'cred_type'         => 'ID_CARD',
    'cred_id'           => 'MZnwEx6zotwIz6ctW2/iQL5z9',
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
$instance['v3/ecommerce/individual-contracts/pre-entrust-sign-with-real-name-identity/mini-program']->postAsync([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'         => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tP',
    'cred_type'         => 'ID_CARD',
    'cred_id'           => 'MZnwEx6zotwIz6ctW2/iQL5z9',
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
$response = $instance->v3->ecommerce->individualContracts->preEntrustSignWithRealNameIdentity->miniProgram->post([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'         => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tP',
    'cred_type'         => 'ID_CARD',
    'cred_id'           => 'MZnwEx6zotwIz6ctW2/iQL5z9',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/individual-contracts/pre-entrust-sign-with-real-name-identity/mini-program')->post([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'         => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tP',
    'cred_type'         => 'ID_CARD',
    'cred_id'           => 'MZnwEx6zotwIz6ctW2/iQL5z9',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/individual-contracts/pre-entrust-sign-with-real-name-identity/mini-program']->post([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
    'openid'            => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'real_name'         => 'pVd1HJ6zyvPedzGaV+X3qtmrq9bb9tP',
    'cred_type'         => 'ID_CARD',
    'cred_id'           => 'MZnwEx6zotwIz6ctW2/iQL5z9',
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
| pre_entrustweb_id {data-required} | string | 预签约id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4020023723)
