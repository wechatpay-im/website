---
title: 获取核身结果
description: 按商户拉起核身时预下单的单号获取该次微工卡核身的结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authenticate_number {data-required} | string | 商家核身单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->authentications->_authenticate_number_->getAsync([
  'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
  'query' => [
    'sub_mchid' => '1111111',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payroll-card/authentications/{authenticate_number}')->getAsync([
  'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
  'query' => [
    'sub_mchid' => '1111111',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payroll-card/authentications/{authenticate_number}']->getAsync([
  'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
  'query' => [
    'sub_mchid' => '1111111',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payrollCard->authentications->_authenticate_number_->get([
  'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
  'query' => [
    'sub_mchid' => '1111111',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/authentications/{authenticate_number}')->get([
  'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
  'query' => [
    'sub_mchid' => '1111111',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/authentications/{authenticate_number}']->get([
  'authenticate_number' => 'mcdhehfgisdhfjghed39384564i83',
  'query' => [
    'sub_mchid' => '1111111',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required}| string | 商户号
| sub_mchid {data-required}| string | 子商户号
| openid {data-required}| string | 用户标识
| authenticate_scene {data-required}| string | 核身渠道
| authenticate_source {data-required}| string | 核身渠道标识
| project_name {data-required}| string | 项目名称
| employer_name {data-required}| string | 单位名称
| authenticate_state {data-required}| string | 核身状态<br/>`AUTHENTICATE_PROCESSING` \| `AUTHENTICATE_SUCCESS` \| `AUTHENTICATE_FAILED` 枚举值之一
| authenticate_time {data-required}| string | 核身时间
| authenticate_number {data-required}| string | 商家核身单号
| authenticate_failed_reason | string | 核身失败原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_4.shtml)
