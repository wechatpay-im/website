---
title: 生成授权token 
description: 生成授权token信息
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| openid {data-indent=1} | string | 用户标识
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mchid {data-indent=1} | string | 子商户号
| user_name {data-indent=1} | string | 用户实名
| id_card_number {data-indent=1} | string | 用户证件号
| employment_type {data-indent=1} | string | 用工类型
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->tokens->postAsync([
  'json' => [
    'openid' => '9x111111',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payroll-card/tokens')->postAsync([
  'json' => [
    'openid' => '9x111111',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payroll-card/tokens']->postAsync([
  'json' => [
    'openid' => '9x111111',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payrollCard->tokens->post([
  'json' => [
    'openid' => '9x111111',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/tokens')->post([
  'json' => [
    'openid' => '9x111111',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/tokens']->post([
  'json' => [
    'openid' => '9x111111',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid | string | 用户标识
| mchid | string | 服务商商户号
| sub_mchid | string | 子商户号
| token | string | 授权token
| expires_in | integer | token有效时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_1.shtml)