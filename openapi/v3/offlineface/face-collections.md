---
title: 查询重采用户列表
description: 离线刷脸业务中，偶尔会出现前期采集头像质量不高，导致算法升级后，旧的头像无法生成有效的人脸特征，影响用户使用刷脸服务。因此，需要对用户的头像进行重采。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| organization_id {data-required data-indent=1} | string | 机构ID
| offset {data-indent=1} | integer | 列表偏移
| limit {data-indent=1} | integer | 资源个数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->faceCollections->getAsync([
  'query' => [
    'organization_id' => 'Ofewewfwefweewf',
    'offset' => 30,
    'limit' => 20,
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
    'organization_id' => 'Ofewewfwefweewf',
    'offset' => 30,
    'limit' => 20,
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
    'organization_id' => 'Ofewewfwefweewf',
    'offset' => 30,
    'limit' => 20,
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
    'organization_id' => 'Ofewewfwefweewf',
    'offset' => 30,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/face-collections')->get([
  'query' => [
    'organization_id' => 'Ofewewfwefweewf',
    'offset' => 30,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/face-collections']->get([
  'query' => [
    'organization_id' => 'Ofewewfwefweewf',
    'offset' => 30,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| face_collections {data-required}| object[] {data-tooltip="对应PHP的array"} | 重采对象
| collection_id {data-required data-indent=1} | string | 重采ID
| use_id {data-required data-indent=1} | string | 用户ID
| organization_id {data-required data-indent=1} | string | 机构ID
| collection_state {data-required data-indent=1} | string | 重采状态<br/>`COLLECTION_REQUIRED` \| `PHOTO_UPLOADED` \| `COMPLETE` 枚举值之一
| register_photo_upload_time {data-indent=1} | string | 注册照上传时间
| confirm_time {data-indent=1} | string | 支付用户确认时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
