---
title: 获取邀请商户开通服务商电子发票能力
description: 服务商通过填写发票模式，发票开通能力等信息，获取邀请商户开通服务商电子发票能力的链接，展示给商户，进行授权开通服务商电子发票能力。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| operation_type {data-required data-indent=1} | string | 操作类型<br/>`AUTH_BINDING` 枚举值
| fapiao_mode {data-required data-indent=1} | string | 开票模式<br/>`THIRD_OR_SELF_FAPIAO` \| `TENCENT_DIGITAL_TAX` 枚举值之一
| fapiao_ability_type_list {data-indent=1} | string[] | 发票能力类型<br/>`BASE_ABILITY` \| `REAL_ESTATE_ABILITY` 枚举值之一
| invite_channel {data-indent=1} | string | 服务商邀请渠道
| operate_user {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 操作人员
| invite_code {data-required data-indent=1} | string | 服务商邀请code
| sub_mchid {data-indent=1} | string | 子商户号
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaomerchant->getspinviteurl->getAsync([
  'query' => [
    'operation_type'           => 'AUTH_BINDING',
    'fapiao_mode'              => 'THIRD_OR_SELF_FAPIAO',
    'fapiao_ability_type_list' => 'BASE_ABILITY',
    'invite_channel'           => 'miniprogram',
    'operate_user'             => 'mI7HGEJ4Q2B91IGjHZu/Gthm',
    'invite_code'              => 'code_20200101_123',
    'sub_mchid'                => '1900000109',
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
$instance->chain('v3/new-tax-control-fapiao/fapiaomerchant/getspinviteurl')->getAsync([
  'query' => [
    'operation_type'           => 'AUTH_BINDING',
    'fapiao_mode'              => 'THIRD_OR_SELF_FAPIAO',
    'fapiao_ability_type_list' => 'BASE_ABILITY',
    'invite_channel'           => 'miniprogram',
    'operate_user'             => 'mI7HGEJ4Q2B91IGjHZu/Gthm',
    'invite_code'              => 'code_20200101_123',
    'sub_mchid'                => '1900000109',
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
$instance['v3/new-tax-control-fapiao/fapiaomerchant/getspinviteurl']->getAsync([
  'query' => [
    'operation_type'           => 'AUTH_BINDING',
    'fapiao_mode'              => 'THIRD_OR_SELF_FAPIAO',
    'fapiao_ability_type_list' => 'BASE_ABILITY',
    'invite_channel'           => 'miniprogram',
    'operate_user'             => 'mI7HGEJ4Q2B91IGjHZu/Gthm',
    'invite_code'              => 'code_20200101_123',
    'sub_mchid'                => '1900000109',
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
$response = $instance->v3->newTaxControlFapiao->fapiaomerchant->getspinviteurl->get([
  'query' => [
    'operation_type'           => 'AUTH_BINDING',
    'fapiao_mode'              => 'THIRD_OR_SELF_FAPIAO',
    'fapiao_ability_type_list' => 'BASE_ABILITY',
    'invite_channel'           => 'miniprogram',
    'operate_user'             => 'mI7HGEJ4Q2B91IGjHZu/Gthm',
    'invite_code'              => 'code_20200101_123',
    'sub_mchid'                => '1900000109',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiaomerchant/getspinviteurl')->get([
  'query' => [
    'operation_type'           => 'AUTH_BINDING',
    'fapiao_mode'              => 'THIRD_OR_SELF_FAPIAO',
    'fapiao_ability_type_list' => 'BASE_ABILITY',
    'invite_channel'           => 'miniprogram',
    'operate_user'             => 'mI7HGEJ4Q2B91IGjHZu/Gthm',
    'invite_code'              => 'code_20200101_123',
    'sub_mchid'                => '1900000109',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiaomerchant/getspinviteurl']->get([
  'query' => [
    'operation_type'           => 'AUTH_BINDING',
    'fapiao_mode'              => 'THIRD_OR_SELF_FAPIAO',
    'fapiao_ability_type_list' => 'BASE_ABILITY',
    'invite_channel'           => 'miniprogram',
    'operate_user'             => 'mI7HGEJ4Q2B91IGjHZu/Gthm',
    'invite_code'              => 'code_20200101_123',
    'sub_mchid'                => '1900000109',
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
| invite_url {data-required} | string | 邀请开通二维码链接
| miniprogram_appid {data-required} | string | 开通小程序AppID
| miniprogram_path {data-required} | string | 开通小程序跳转路径

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015941495)
