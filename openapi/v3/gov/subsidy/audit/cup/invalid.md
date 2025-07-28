---
title: 查询审核结果
description: 查询审核结果
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| org_no {data-required data-indent=1} | string | 分公司机构代码
| mchnt_order_id {data-required data-indent=1} | string | 商户订单号
| upload_time {data-required data-indent=1} | string | 审核记录上传时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->audit->cup->invalid->postAsync([
  'json' => [
    'org_no'         => '',
    'mchnt_order_id' => '',
    'upload_time'    => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/audit/cup/invalid')->postAsync([
  'json' => [
    'org_no'         => '',
    'mchnt_order_id' => '',
    'upload_time'    => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/audit/cup/invalid']->postAsync([
  'json' => [
    'org_no'         => '',
    'mchnt_order_id' => '',
    'upload_time'    => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->audit->cup->invalid->post([
  'json' => [
    'org_no'         => '',
    'mchnt_order_id' => '',
    'upload_time'    => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/audit/cup/invalid')->post([
  'json' => [
    'org_no'         => '',
    'mchnt_order_id' => '',
    'upload_time'    => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/audit/cup/invalid']->post([
  'json' => [
    'org_no'         => '',
    'mchnt_order_id' => '',
    'upload_time'    => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code {data-required} | string | 响应码
| msg {data-required} | string | 响应描述
| sub_code | string | 详细应答码
| sub_msg | string | 详细应答码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989535)
