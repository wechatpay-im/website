---
title: APP预签约自动还款协议
description: APP预签约
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户AppID
| plan_id {data-required data-indent=1} | string | 模板ID
| out_contract_code {data-required data-indent=1} | string | 服务商签约协议号
| display_name {data-required data-indent=1} | string | 用户展示名称
| contract_notify_url {data-required data-indent=1} | string | 签约结果通知地址
| repayment_day {data-required data-indent=1} | integer | 还款日
| repayment_amount_limit {data-required data-indent=1} | string | 还款金额上限
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户AppID
| real_identity {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 用户实名信息
| identity_type {data-required data-indent=2} | string | 实名验证类型<br/>`REAL_IDENTITY_TYPE_INVALID` \| `REAL_IDENTITY_TYPE_ID_CARD` 枚举值之一
| identity_id {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人证件号码
| real_name {data-required data-indent=2} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 自然人姓名
| trade_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 交易信息
| out_trade_no {data-required data-indent=2} | string | 商户侧交易单号
| deduct_amount {data-required data-indent=2} | integer | 还款金额
| description {data-indent=2} | string | 产品描述
| attach {data-indent=2} | string | 商户数据包
| notify_url {data-indent=2} | string | 商户回调地址
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->contracts->appPresign->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_mchid'              => '1000000109',
    'sub_appid'              => 'example_sub_appid',
    'real_identity'          => [
      'identity_type' => 'REAL_IDENTITY_TYPE_INVALID',
      'identity_id'   => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'real_name'     => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
    ],
    'trade_info'             => [
      'out_trade_no'  => '1217752501201407033233368018',
      'deduct_amount' => 10000,
      'description'   => '信贷还款',
      'attach'        => '备注信息',
      'notify_url'    => 'https://www.test.com',
    ],
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
$instance->chain('v3/credit-repayment/partner/contracts/app-presign')->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_mchid'              => '1000000109',
    'sub_appid'              => 'example_sub_appid',
    'real_identity'          => [
      'identity_type' => 'REAL_IDENTITY_TYPE_INVALID',
      'identity_id'   => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'real_name'     => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
    ],
    'trade_info'             => [
      'out_trade_no'  => '1217752501201407033233368018',
      'deduct_amount' => 10000,
      'description'   => '信贷还款',
      'attach'        => '备注信息',
      'notify_url'    => 'https://www.test.com',
    ],
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
$instance['v3/credit-repayment/partner/contracts/app-presign']->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_mchid'              => '1000000109',
    'sub_appid'              => 'example_sub_appid',
    'real_identity'          => [
      'identity_type' => 'REAL_IDENTITY_TYPE_INVALID',
      'identity_id'   => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'real_name'     => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
    ],
    'trade_info'             => [
      'out_trade_no'  => '1217752501201407033233368018',
      'deduct_amount' => 10000,
      'description'   => '信贷还款',
      'attach'        => '备注信息',
      'notify_url'    => 'https://www.test.com',
    ],
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
$response = $instance->v3->creditRepayment->partner->contracts->appPresign->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_mchid'              => '1000000109',
    'sub_appid'              => 'example_sub_appid',
    'real_identity'          => [
      'identity_type' => 'REAL_IDENTITY_TYPE_INVALID',
      'identity_id'   => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'real_name'     => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
    ],
    'trade_info'             => [
      'out_trade_no'  => '1217752501201407033233368018',
      'deduct_amount' => 10000,
      'description'   => '信贷还款',
      'attach'        => '备注信息',
      'notify_url'    => 'https://www.test.com',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/contracts/app-presign')->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_mchid'              => '1000000109',
    'sub_appid'              => 'example_sub_appid',
    'real_identity'          => [
      'identity_type' => 'REAL_IDENTITY_TYPE_INVALID',
      'identity_id'   => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'real_name'     => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
    ],
    'trade_info'             => [
      'out_trade_no'  => '1217752501201407033233368018',
      'deduct_amount' => 10000,
      'description'   => '信贷还款',
      'attach'        => '备注信息',
      'notify_url'    => 'https://www.test.com',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/contracts/app-presign']->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_mchid'              => '1000000109',
    'sub_appid'              => 'example_sub_appid',
    'real_identity'          => [
      'identity_type' => 'REAL_IDENTITY_TYPE_INVALID',
      'identity_id'   => '1axtI9EZUr0343c89xQznxau+cRWPKP4YhVAoj==',
      'real_name'     => 'OEimkKuua8igpd+0YDgqF2Z61leeGD7x87j3Ph==',
    ],
    'trade_info'             => [
      'out_trade_no'  => '1217752501201407033233368018',
      'deduct_amount' => 10000,
      'description'   => '信贷还款',
      'attach'        => '备注信息',
      'notify_url'    => 'https://www.test.com',
    ],
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
| presign_token {data-required} | string | 预签约码
| redirect_service | string | 跳转到的签约服务提供方

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016125804)
