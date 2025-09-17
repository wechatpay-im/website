---
title: 获取邀请开通的商户信息
description: 通过时间范围，邀请的code等参数查询服务商邀请的商户信息，支持分页查询。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| query_time_start {data-required data-indent=1} | string | 查询时间起
| query_time_end {data-required data-indent=1} | string | 查询时间止
| offset {data-required data-indent=1} | integer | 本次查询的起始位置
| limit {data-required data-indent=1} | integer | 本次查询的最大数量
| invite_code {data-indent=1} | string | 服务商邀请code
| mch_invite_status {data-required data-indent=1} | string | 商户邀请状态<br/>`MCH_INVITE_SUCC` \| `MCH_INVITE_FAILED` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->fapiaomerchant->listspinvitemchinfo->getAsync([
  'query' => [
    'query_time_start'  => '2020-07-01T12:00:00+08:00',
    'query_time_end'    => '2020-07-02T12:00:00+08:00',
    'offset'            => 10,
    'limit'             => 1,
    'invite_code'       => 'code_20200101_123',
    'mch_invite_status' => 'MCH_INVITE_SUCC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/fapiaomerchant/listspinvitemchinfo')->getAsync([
  'query' => [
    'query_time_start'  => '2020-07-01T12:00:00+08:00',
    'query_time_end'    => '2020-07-02T12:00:00+08:00',
    'offset'            => 10,
    'limit'             => 1,
    'invite_code'       => 'code_20200101_123',
    'mch_invite_status' => 'MCH_INVITE_SUCC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/fapiaomerchant/listspinvitemchinfo']->getAsync([
  'query' => [
    'query_time_start'  => '2020-07-01T12:00:00+08:00',
    'query_time_end'    => '2020-07-02T12:00:00+08:00',
    'offset'            => 10,
    'limit'             => 1,
    'invite_code'       => 'code_20200101_123',
    'mch_invite_status' => 'MCH_INVITE_SUCC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->fapiaomerchant->listspinvitemchinfo->get([
  'query' => [
    'query_time_start'  => '2020-07-01T12:00:00+08:00',
    'query_time_end'    => '2020-07-02T12:00:00+08:00',
    'offset'            => 10,
    'limit'             => 1,
    'invite_code'       => 'code_20200101_123',
    'mch_invite_status' => 'MCH_INVITE_SUCC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/fapiaomerchant/listspinvitemchinfo')->get([
  'query' => [
    'query_time_start'  => '2020-07-01T12:00:00+08:00',
    'query_time_end'    => '2020-07-02T12:00:00+08:00',
    'offset'            => 10,
    'limit'             => 1,
    'invite_code'       => 'code_20200101_123',
    'mch_invite_status' => 'MCH_INVITE_SUCC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/fapiaomerchant/listspinvitemchinfo']->get([
  'query' => [
    'query_time_start'  => '2020-07-01T12:00:00+08:00',
    'query_time_end'    => '2020-07-02T12:00:00+08:00',
    'offset'            => 10,
    'limit'             => 1,
    'invite_code'       => 'code_20200101_123',
    'mch_invite_status' => 'MCH_INVITE_SUCC',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总数
| offset {data-required} | integer | 本次查询的起始位置
| limit {data-required} | integer | 本次查询的最大数量
| links | object {data-tooltip="对应PHP的array"} | 相关链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-indent=1} | string | 当前链接
| mch_invite_result_list | object[] {data-tooltip="对应PHP的array"} | 邀请的商户结果
| sub_mchid {data-indent=1} | string | 子商户号
| mch_invite_status {data-required data-indent=1} | string | 商户邀请的状态<br/>`MCH_INVITE_SUCC` \| `MCH_INVITE_FAILED` 枚举值之一
| ep_name {data-required data-indent=1} | string | 商户名称
| tax_id {data-required data-indent=1} | string | 商户税号
| invite_code {data-required data-indent=1} | string | 服务商邀请code
| operate_time {data-required data-indent=1} | string | 商户操作时间
| invite_failed_code {data-indent=1} | string | 商户邀请失败错误码<br/>`UNKNOWN_TAX_INFO` \| `INVALID_COMPANY_INFO` \| `NOT_MEET_ACCESS_CONDITION` \| `NOT_IN_PILOT_SCOPE` \| `MISSING_TAX_AUTHORITY_CODE` \| `MERCHANT_INFO_NOT_SET` \| `UNKNOWN_ERROR` 枚举值之一
| invite_failed_reason {data-indent=1} | string | 商户邀请失败的原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015941524)
