---
title: 查询重采请求接口
description: 离线刷脸业务中，偶尔会出现前期采集头像质量不高，导致算法升级后，旧的头像无法生成有效的人脸特征，影响用户使用刷脸服务。因此，需要对用户的头像进行重采。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| organization_id {data-indent=1} | string | 
| offset {data-indent=1} | integer | 
| limit {data-indent=1} | integer | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->faceCollections->getAsync([
  'query' => [
    'organization_id' => '',
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/face-collections')->getAsync([
  'query' => [
    'organization_id' => '',
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/face-collections']->getAsync([
  'query' => [
    'organization_id' => '',
    'offset' => 0,
    'limit' => 0,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->faceCollections->get([
  'query' => [
    'organization_id' => '',
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/face-collections')->get([
  'query' => [
    'organization_id' => '',
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/face-collections']->get([
  'query' => [
    'organization_id' => '',
    'offset' => 0,
    'limit' => 0,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| face_collections | object[] | 
| collection_id {data-indent=1} | string | 
| use_id {data-indent=1} | string | 
| organization_id {data-indent=1} | string | 
| collection_state {data-indent=1} | string | 
| register_photo_upload_time {data-indent=1} | string | 
| confirm_time {data-indent=1} | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
