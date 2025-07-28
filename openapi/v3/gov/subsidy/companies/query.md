---
title: 企业信息查询
description: 企业信息查询
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| license_number {data-required data-indent=1} | string | 统一社会信息代码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->companies->query->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'license_number'            => '91110108397173806M',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/companies/query')->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'license_number'            => '91110108397173806M',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/companies/query']->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'license_number'            => '91110108397173806M',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->companies->query->post([
  'json' => [
    'qualification_region_code' => 310100,
    'license_number'            => '91110108397173806M',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/companies/query')->post([
  'json' => [
    'qualification_region_code' => 310100,
    'license_number'            => '91110108397173806M',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/companies/query']->post([
  'json' => [
    'qualification_region_code' => 310100,
    'license_number'            => '91110108397173806M',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| company_name | string | 企业名称
| collect_state | string | 归集状态枚举<br/>`COLLECT_STATE_NOT_COLLECT` \| `COLLECT_STATE_COLLECTED` \| `COLLECT_STATE_COLLECTION_FAILED` 枚举值之一
| code {data-required} | string | 响应码
| message {data-required} | string | 响应描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
