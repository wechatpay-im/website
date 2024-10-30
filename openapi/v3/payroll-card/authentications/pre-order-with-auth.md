---
title: 微工卡核身预下单（流程中完成授权）
description: 本接口适用于用户需同步完成服务开通、授权及身份核验的场景。在拉起微工卡前端服务为用户核身前，需调用本接口预下单，下单成功后才能进行核身。如此时用户未开通微工卡服务或未完成对商户的授权，则先完成开通、授权，同步完成身份核验，并提供可信的核验结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| openid {data-indent=1} | string | 用户标识
| appid {data-indent=1} | string | 应用ID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| authenticate_number {data-indent=1} | string | 商家核身单号
| project_name {data-indent=1} | string | 项目名称
| employer_name {data-indent=1} | string | 用工单位名称
| user_name {data-indent=1} | string | 用户实名
| id_card_number {data-indent=1} | string | 用户证件号
| employment_type {data-indent=1} | string | 用工类型
| authenticate_type {data-indent=1} | string | 核身类型
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->authentications->preOrderWithAuth->postAsync([
  'json' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name' => '某项目',
    'employer_name' => '某用工企业',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'authenticate_type' => 'SIGN_IN',
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
$instance->chain('v3/payroll-card/authentications/pre-order-with-auth')->postAsync([
  'json' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name' => '某项目',
    'employer_name' => '某用工企业',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'authenticate_type' => 'SIGN_IN',
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
$instance['v3/payroll-card/authentications/pre-order-with-auth']->postAsync([
  'json' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name' => '某项目',
    'employer_name' => '某用工企业',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'authenticate_type' => 'SIGN_IN',
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
$response = $instance->v3->payrollCard->authentications->preOrderWithAuth->post([
  'json' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name' => '某项目',
    'employer_name' => '某用工企业',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'authenticate_type' => 'SIGN_IN',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/authentications/pre-order-with-auth')->post([
  'json' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name' => '某项目',
    'employer_name' => '某用工企业',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'authenticate_type' => 'SIGN_IN',
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/authentications/pre-order-with-auth']->post([
  'json' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'sub_appid' => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name' => '某项目',
    'employer_name' => '某用工企业',
    'user_name' => 'LP7bT4hQXUsOZCEvK2YrSiqFsnP0oRMfeoLN0vBg',
    'id_card_number' => '7FzH5XksJG3a8HLLsaaUV6K54y1OnPMY5',
    'employment_type' => 'LONG_TERM_EMPLOYMENT',
    'authenticate_type' => 'SIGN_IN',
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
| authenticate_number | string | 商家核身单号
| openid | string | 用户标识
| mchid | string | 商户号
| sub_mchid | string | 子商户号
| token | string | token值
| expires_in | integer | token有效时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_29.shtml)