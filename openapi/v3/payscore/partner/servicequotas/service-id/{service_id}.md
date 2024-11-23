---
title: 查询用户分层对应建议先享金额
description: 查询用户分层对应建议先享金额API。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required} | string | 服务ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户商户号
| appid {data-required data-indent=1} | string | 服务商的公众号ID
| sub_appid {data-indent=1} | string | 子商户的公众号ID
| risk_level_version {data-required data-indent=1} | number | 分层版本

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->partner->servicequotas->serviceId->_service_id_->getAsync([
  'service_id' => '2002000000000558128851361561536',
  'query' => [
    'sub_mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'risk_level_version' => 1,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/partner/servicequotas/service-id/{service_id}')->getAsync([
  'service_id' => '2002000000000558128851361561536',
  'query' => [
    'sub_mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'risk_level_version' => 1,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/partner/servicequotas/service-id/{service_id}']->getAsync([
  'service_id' => '2002000000000558128851361561536',
  'query' => [
    'sub_mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'risk_level_version' => 1,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->partner->servicequotas->serviceId->_service_id_->get([
  'service_id' => '2002000000000558128851361561536',
  'query' => [
    'sub_mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'risk_level_version' => 1,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/partner/servicequotas/service-id/{service_id}')->get([
  'service_id' => '2002000000000558128851361561536',
  'query' => [
    'sub_mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'risk_level_version' => 1,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/partner/servicequotas/service-id/{service_id}']->get([
  'service_id' => '2002000000000558128851361561536',
  'query' => [
    'sub_mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'sub_appid' => 'wxd678efh567hg6787',
    'risk_level_version' => 1,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required}| string | 服务ID
| mchid {data-required}| string | 商户号
| sub_mchid {data-required}| string | 子商户商户号
| appid {data-required}| string | 公众号ID
| sub_appid | string | 子商户的公众号ID
| risk_level_version {data-required}| number | 分层版本
| quotas {data-required}| object[] {data-tooltip="对应PHP的array"} | 先享金额列表
| risk_level {data-required data-indent=1} | number | 用户分层
| suggested_quota {data-required data-indent=1} | number | 建议先享金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/partner-weixin-pay-score/service-quota/get-partner-user-risk-level-quota.html)
