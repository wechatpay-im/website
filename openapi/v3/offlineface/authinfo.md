---
title: 获取authinfo接口
description: 建议authinfo每1小时内获取一次，否则当设备断网且恰好authinfo过期，则会导致设备不可用。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sp_appid {data-indent=1} | string | 
| sub_appid {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 
| device_id {data-indent=1} | string | 
| raw_data {data-indent=1} | string | 
| organization_id {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->authinfo->postAsync([
  'json' => [
    'sp_appid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'device_id' => '',
    'raw_data' => '',
    'organization_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/authinfo')->postAsync([
  'json' => [
    'sp_appid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'device_id' => '',
    'raw_data' => '',
    'organization_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/authinfo']->postAsync([
  'json' => [
    'sp_appid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'device_id' => '',
    'raw_data' => '',
    'organization_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->authinfo->post([
  'json' => [
    'sp_appid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'device_id' => '',
    'raw_data' => '',
    'organization_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/authinfo')->post([
  'json' => [
    'sp_appid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'device_id' => '',
    'raw_data' => '',
    'organization_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/authinfo']->post([
  'json' => [
    'sp_appid' => '',
    'sub_appid' => '',
    'sub_mchid' => '',
    'device_id' => '',
    'raw_data' => '',
    'organization_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authinfo | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/access-specifications.html)
