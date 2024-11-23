---
title: 查询机构信息接口
description: 商户可以根据face_sid查询用户UnionId，调用该接口获取授权的实名信息商户需要先申请权限。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| organization_id {data-indent=1} | string | 机构ID
| organization_name {data-indent=1} | string | 机构名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlinefacemch->organizations->getAsync([
  'query' => [
    'organization_id' => 'DBES323aeb',
    'organization_name' => '南山中兴小学部',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlinefacemch/organizations')->getAsync([
  'query' => [
    'organization_id' => 'DBES323aeb',
    'organization_name' => '南山中兴小学部',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlinefacemch/organizations']->getAsync([
  'query' => [
    'organization_id' => 'DBES323aeb',
    'organization_name' => '南山中兴小学部',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlinefacemch->organizations->get([
  'query' => [
    'organization_id' => 'DBES323aeb',
    'organization_name' => '南山中兴小学部',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlinefacemch/organizations')->get([
  'query' => [
    'organization_id' => 'DBES323aeb',
    'organization_name' => '南山中兴小学部',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlinefacemch/organizations']->get([
  'query' => [
    'organization_id' => 'DBES323aeb',
    'organization_name' => '南山中兴小学部',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| organization_id | string | 机构ID
| organization_name | string | 机构名称

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
