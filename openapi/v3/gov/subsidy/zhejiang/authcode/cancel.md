---
title: 品类凭证码预核销撤销
description: 品类凭证码预核销撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_serial_no {data-required data-indent=1} | string | 接入方请求流水号
| cred_frozen_no {data-required data-indent=1} | string | 冻结流水号
| trans_date {data-required data-indent=1} | string | 交易日期
| trans_time {data-required data-indent=1} | string | 交易时间
| auth_code {data-required data-indent=1} | string | 品类凭证码
| req_ssn {data-required data-indent=1} | string | 请求流水号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->authcode->cancel->postAsync([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/zhejiang/authcode/cancel')->postAsync([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/zhejiang/authcode/cancel']->postAsync([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->zhejiang->authcode->cancel->post([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/authcode/cancel')->post([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/authcode/cancel']->post([
  'json' => [
    'sp_serial_no'   => '',
    'cred_frozen_no' => '',
    'trans_date'     => '',
    'trans_time'     => '',
    'auth_code'      => '',
    'req_ssn'        => '123',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| resp_code {data-required} | string | 响应码
| resp_desc {data-required} | string | 响应描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
