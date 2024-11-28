---
title: 查询微工卡授权关系
description: 查询商户和微信支付用户的微工卡授权关系
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->relations->_openid_->getAsync([
  'openid' => '9x111111',
  'query' => [
    'sub_mchid' => '1111111',
    'appid'     => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payroll-card/relations/{openid}')->getAsync([
  'openid' => '9x111111',
  'query' => [
    'sub_mchid' => '1111111',
    'appid'     => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payroll-card/relations/{openid}']->getAsync([
  'openid' => '9x111111',
  'query' => [
    'sub_mchid' => '1111111',
    'appid'     => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payrollCard->relations->_openid_->get([
  'openid' => '9x111111',
  'query' => [
    'sub_mchid' => '1111111',
    'appid'     => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/relations/{openid}')->get([
  'openid' => '9x111111',
  'query' => [
    'sub_mchid' => '1111111',
    'appid'     => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/relations/{openid}']->get([
  'openid' => '9x111111',
  'query' => [
    'sub_mchid' => '1111111',
    'appid'     => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| mchid {data-required} | string | 商户号
| sub_mchid {data-required} | string | 子商户号
| authorize_state {data-required} | string | 授权状态<br/>`UNAUTHORIZED` \| `AUTHORIZED` \| `DEAUTHORIZED` 枚举值之一
| authorize_time | string | 授权时间
| deauthorize_time | string | 取消授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_2.shtml)
