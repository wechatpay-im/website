---
title: 校验核身结果
description: 校验按商户拉起核身时预下单的token值对应的微工卡核身结果是否成功
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| sub_mchid {data-indent=1} | string | 特约商户商户号
| token {data-indent=1} | string | token值
| user_name {data-indent=1} | string | 用户姓名
| id_card_number {data-indent=1} | string | 用户身份证号
| authenticate_type {data-indent=1} | string | 核身类型
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->wesure->tokenValidations->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'token' => 'abcdefghijklmn',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'authenticate_type' => 'NORMAL',
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
$instance->chain('v3/payroll-card/wesure/token-validations')->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'token' => 'abcdefghijklmn',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'authenticate_type' => 'NORMAL',
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
$instance['v3/payroll-card/wesure/token-validations']->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'token' => 'abcdefghijklmn',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'authenticate_type' => 'NORMAL',
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
$response = $instance->v3->payrollCard->wesure->tokenValidations->post([
  'json' => [
    'sp_mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'token' => 'abcdefghijklmn',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'authenticate_type' => 'NORMAL',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/wesure/token-validations')->post([
  'json' => [
    'sp_mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'token' => 'abcdefghijklmn',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'authenticate_type' => 'NORMAL',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/wesure/token-validations']->post([
  'json' => [
    'sp_mchid' => '1900000109',
    'sub_mchid' => '1900000109',
    'token' => 'abcdefghijklmn',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'authenticate_type' => 'NORMAL',
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
| result | string | 校验结果
| authenticate_success_time | string | 核身成功时间
| openid | string | 用户标识
| fail_reason | string | 校验不通过原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_31.shtml)