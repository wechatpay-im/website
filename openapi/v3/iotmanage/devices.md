---
title: 智能设备列表
description: 商户可以通过该接口分页拉取到自己拥有的设备的列表。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| limit {data-indent=1} | integer | 最大资源条数
| offset {data-indent=1} | integer | 请求资源起始位置

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->iotmanage->devices->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/iotmanage/devices')->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/iotmanage/devices']->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->iotmanage->devices->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/iotmanage/devices')->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/iotmanage/devices']->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] | 
| device_sn {data-indent=1} | string | 
| camera_sn {data-indent=1} | string | 
| device_category_code {data-indent=1} | string | 
| device_category {data-indent=1} | string | 
| device_class_code {data-indent=1} | string | 
| device_class {data-indent=1} | string | 
| device_model {data-indent=1} | string | 
| app_scene_code {data-indent=1} | string | 
| app_scene {data-indent=1} | string | 
| operating_system {data-indent=1} | string | 
| activation_status {data-indent=1} | string | `ACTIVATED` \| `INACTIVATED` 枚举值之一
| activation_time {data-indent=1} | string | 
| mchid {data-indent=1} | string | 
| merchant_shortname {data-indent=1} | string | 
| sub_mchid {data-indent=1} | string | 
| sub_merchant_shortname {data-indent=1} | string | 
| offset | integer | 
| limit | integer | 
| total_count | integer | 
| links | object | 
| next {data-indent=1} | string | 
| prev {data-indent=1} | string | 
| self {data-indent=1} | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/point/iotmanage-devices.html)
