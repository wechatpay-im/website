---
title: 微工卡核身预下单
description: 服务商在拉起微工卡前端服务给用户做微工卡核身前，需要先调用本接口预下单，下单成功后才能进行核身
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| openid {data-required data-indent=1} | string | 用户标识
| appid {data-indent=1} | string | 应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| authenticate_number {data-required data-indent=1} | string | 商家核身单号
| project_name {data-required data-indent=1} | string | 项目名称
| employer_name {data-required data-indent=1} | string | 单位名称
| authenticate_type {data-required data-indent=1} | string | 核身类型<br/>`SIGN_IN` \| `INSURANCE` \| `CONTRACT` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->authentications->preOrder->postAsync([
  'json' => [
    'openid'              => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid'               => 'wxa1111111',
    'sub_mchid'           => '1111111',
    'sub_appid'           => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name'        => '某项目',
    'employer_name'       => '某单位名称',
    'authenticate_type'   => 'SIGN_IN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payroll-card/authentications/pre-order')->postAsync([
  'json' => [
    'openid'              => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid'               => 'wxa1111111',
    'sub_mchid'           => '1111111',
    'sub_appid'           => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name'        => '某项目',
    'employer_name'       => '某单位名称',
    'authenticate_type'   => 'SIGN_IN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payroll-card/authentications/pre-order']->postAsync([
  'json' => [
    'openid'              => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid'               => 'wxa1111111',
    'sub_mchid'           => '1111111',
    'sub_appid'           => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name'        => '某项目',
    'employer_name'       => '某单位名称',
    'authenticate_type'   => 'SIGN_IN',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payrollCard->authentications->preOrder->post([
  'json' => [
    'openid'              => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid'               => 'wxa1111111',
    'sub_mchid'           => '1111111',
    'sub_appid'           => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name'        => '某项目',
    'employer_name'       => '某单位名称',
    'authenticate_type'   => 'SIGN_IN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/authentications/pre-order')->post([
  'json' => [
    'openid'              => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid'               => 'wxa1111111',
    'sub_mchid'           => '1111111',
    'sub_appid'           => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name'        => '某项目',
    'employer_name'       => '某单位名称',
    'authenticate_type'   => 'SIGN_IN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/authentications/pre-order']->post([
  'json' => [
    'openid'              => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid'               => 'wxa1111111',
    'sub_mchid'           => '1111111',
    'sub_appid'           => 'wxa1111111',
    'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
    'project_name'        => '某项目',
    'employer_name'       => '某单位名称',
    'authenticate_type'   => 'SIGN_IN',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authenticate_number {data-required} | string | 商家核身单号
| openid {data-required} | string | 用户标识
| mchid {data-required} | string | 商户号
| sub_mchid {data-required} | string | 子商户号
| token {data-required} | string | token值
| expires_in {data-required} | integer | token有效时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012923362)
