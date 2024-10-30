---
title: 生成投保结果
description: 生成投保结果
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| wesure_order_no {data-indent=1} | string | 特约商户商户号
| token {data-indent=1} | string | 微保保单号
| insurance_company_order_no {data-indent=1} | string | 保司保单号
| openid {data-indent=1} | string | 用户标识
| insure_state {data-indent=1} | string | 投保状态
| insure_effect_time {data-indent=1} | string | 保障生效时间
| insure_invalid_time {data-indent=1} | string | 保障失效时间
| insurance_company_name {data-indent=1} | string | 保障的保险公司名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->wesure->insurance->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'wesure_order_no' => '1900000109',
    'token' => '5fds5345dfd',
    'insurance_company_order_no' => '5fds5345dfd',
    'openid' => '111111',
    'insure_state' => 'INSURE_SUCCESS',
    'insure_effect_time' => '2018-06-08T10:34:56+08:00',
    'insure_invalid_time' => '2018-06-08T10:34:56+08:00',
    'insurance_company_name' => '平安',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payroll-card/wesure/insurance')->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'wesure_order_no' => '1900000109',
    'token' => '5fds5345dfd',
    'insurance_company_order_no' => '5fds5345dfd',
    'openid' => '111111',
    'insure_state' => 'INSURE_SUCCESS',
    'insure_effect_time' => '2018-06-08T10:34:56+08:00',
    'insure_invalid_time' => '2018-06-08T10:34:56+08:00',
    'insurance_company_name' => '平安',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/payroll-card/wesure/insurance']->postAsync([
  'json' => [
    'sp_mchid' => '1900000109',
    'wesure_order_no' => '1900000109',
    'token' => '5fds5345dfd',
    'insurance_company_order_no' => '5fds5345dfd',
    'openid' => '111111',
    'insure_state' => 'INSURE_SUCCESS',
    'insure_effect_time' => '2018-06-08T10:34:56+08:00',
    'insure_invalid_time' => '2018-06-08T10:34:56+08:00',
    'insurance_company_name' => '平安',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payrollCard->wesure->insurance->post([
  'json' => [
    'sp_mchid' => '1900000109',
    'wesure_order_no' => '1900000109',
    'token' => '5fds5345dfd',
    'insurance_company_order_no' => '5fds5345dfd',
    'openid' => '111111',
    'insure_state' => 'INSURE_SUCCESS',
    'insure_effect_time' => '2018-06-08T10:34:56+08:00',
    'insure_invalid_time' => '2018-06-08T10:34:56+08:00',
    'insurance_company_name' => '平安',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/wesure/insurance')->post([
  'json' => [
    'sp_mchid' => '1900000109',
    'wesure_order_no' => '1900000109',
    'token' => '5fds5345dfd',
    'insurance_company_order_no' => '5fds5345dfd',
    'openid' => '111111',
    'insure_state' => 'INSURE_SUCCESS',
    'insure_effect_time' => '2018-06-08T10:34:56+08:00',
    'insure_invalid_time' => '2018-06-08T10:34:56+08:00',
    'insurance_company_name' => '平安',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/payroll-card/wesure/insurance']->post([
  'json' => [
    'sp_mchid' => '1900000109',
    'wesure_order_no' => '1900000109',
    'token' => '5fds5345dfd',
    'insurance_company_order_no' => '5fds5345dfd',
    'openid' => '111111',
    'insure_state' => 'INSURE_SUCCESS',
    'insure_effect_time' => '2018-06-08T10:34:56+08:00',
    'insure_invalid_time' => '2018-06-08T10:34:56+08:00',
    'insurance_company_name' => '平安',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_32.shtml)
