---
title: H5预签约自动还款协议
description: 服务商调用本接口预先指定签约信息，进行预签约。在完成预签约后，服务商会得到对应的预签约码（presign_token）。服务商H5再携带预签约码参数拉起微信客户端的签约页面，让用户完成签约。签约完成后，将返回服务商H5。若用户同意本次流程，则微信支付会通过服务商指定的回调地址通知签约结果；若用户未同意或者流程执行失败，则不通知签约结果。在发起签约后，服务商签约协议号不能再重复使用，包括签约失败的协议、签约成功后解约的协议及签约成功生效中的协议。服务商可通过查询协议接口确认服务商签约协议号是否已经使用。注意：服务商获取到的预签约码有效期为10分钟。10分钟后，预签约码失效。此时，如果再携带预签约ID跳转到微信客户端进行签约，则将报错。
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
| jump_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 跳转控制信息
| jump_appid {data-indent=2} | string | 签约完后要跳转到的应用AppID
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->contracts->h5Presign->postAsync([
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
    'jump_info'              => [
      'jump_appid' => 'example_jump_appid',
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
$instance->chain('v3/credit-repayment/partner/contracts/h5-presign')->postAsync([
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
    'jump_info'              => [
      'jump_appid' => 'example_jump_appid',
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
$instance['v3/credit-repayment/partner/contracts/h5-presign']->postAsync([
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
    'jump_info'              => [
      'jump_appid' => 'example_jump_appid',
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
$response = $instance->v3->creditRepayment->partner->contracts->h5Presign->post([
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
    'jump_info'              => [
      'jump_appid' => 'example_jump_appid',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/contracts/h5-presign')->post([
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
    'jump_info'              => [
      'jump_appid' => 'example_jump_appid',
    ],
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/contracts/h5-presign']->post([
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
    'jump_info'              => [
      'jump_appid' => 'example_jump_appid',
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
| redirect_url {data-required} | string | 拉起微信支付签约页的URL

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016779565)
