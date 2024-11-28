---
title: 查询核身记录
description: 查询指定用户指定日期微工卡核身记录，查询结果仅展示核身成功的记录
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| openid {data-required data-indent=1} | string | 用户标识
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| authenticate_date {data-required data-indent=1} | string | 核身日期
| authenticate_state {data-required data-indent=1} | string | 核身状态
| offset {data-indent=1} | integer | 本次查询偏移量
| limit {data-indent=1} | integer | 本次请求最大查询条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payrollCard->authentications->getAsync([
  'query' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'authenticate_date' => '2020-12-25',
    'authenticate_state' => 'AUTHENTICATE_SUCCESS',
    'offset' => 0,
    'limit' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payroll-card/authentications')->getAsync([
  'query' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'authenticate_date' => '2020-12-25',
    'authenticate_state' => 'AUTHENTICATE_SUCCESS',
    'offset' => 0,
    'limit' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payroll-card/authentications']->getAsync([
  'query' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'authenticate_date' => '2020-12-25',
    'authenticate_state' => 'AUTHENTICATE_SUCCESS',
    'offset' => 0,
    'limit' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payrollCard->authentications->get([
  'query' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'authenticate_date' => '2020-12-25',
    'authenticate_state' => 'AUTHENTICATE_SUCCESS',
    'offset' => 0,
    'limit' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payroll-card/authentications')->get([
  'query' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'authenticate_date' => '2020-12-25',
    'authenticate_state' => 'AUTHENTICATE_SUCCESS',
    'offset' => 0,
    'limit' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payroll-card/authentications']->get([
  'query' => [
    'openid' => 'onqOjjmo8wmTOOtSKwXtGjg9Gb58',
    'appid' => 'wxa1111111',
    'sub_appid' => 'wxa1111111',
    'sub_mchid' => '1111111',
    'authenticate_date' => '2020-12-25',
    'authenticate_state' => 'AUTHENTICATE_SUCCESS',
    'offset' => 0,
    'limit' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 查询结果记录列表
| mchid {data-required data-indent=1} | string | 商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| openid {data-required data-indent=1} | string | 用户标识
| authenticate_scene {data-required data-indent=1} | string | 核身渠道<br/>`FROM_MINI_APP` \| `FROM_HARDWARE` 枚举值之一
| authenticate_source {data-required data-indent=1} | string | 核身渠道标识
| project_name {data-required data-indent=1} | string | 项目名称
| employer_name {data-required data-indent=1} | string | 单位名称
| authenticate_state {data-required data-indent=1} | string | 核身状态<br/>`AUTHENTICATE_PROCESSING` \| `AUTHENTICATE_SUCCESS` \| `AUTHENTICATE_FAILED` 枚举值之一
| authenticate_time {data-required data-indent=1} | string | 核身时间
| authenticate_number {data-required data-indent=1} | string | 商家核身单号
| total_count {data-required} | integer | 总记录条数
| offset {data-required} | integer | 记录起始位置
| limit {data-required} | integer | 本次返回条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_5.shtml)
