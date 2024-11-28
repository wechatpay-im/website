---
title: 查询重采请求详情
description: 离线刷脸业务中，偶尔会出现前期采集头像质量不高，导致算法升级后，旧的头像无法生成有效的人脸特征，影响用户使用刷脸服务。因此，需要对用户的头像进行重采。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| collection_id {data-required} | string | 重采ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->faceCollections->_collection_id_->getAsync([
  'collection_id' => 'FC2353ZJIHOJKHOIIOIJ',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/face-collections/{collection_id}')->getAsync([
  'collection_id' => 'FC2353ZJIHOJKHOIIOIJ',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/face-collections/{collection_id}']->getAsync([
  'collection_id' => 'FC2353ZJIHOJKHOIIOIJ',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->faceCollections->_collection_id_->get([
  'collection_id' => 'FC2353ZJIHOJKHOIIOIJ',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/face-collections/{collection_id}')->get([
  'collection_id' => 'FC2353ZJIHOJKHOIIOIJ',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/face-collections/{collection_id}']->get([
  'collection_id' => 'FC2353ZJIHOJKHOIIOIJ',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| collection_id {data-required} | string | 重采ID
| use_id {data-required} | string | 用户ID
| organization_id {data-required} | string | 机构ID
| collection_state {data-required} | string | 重采状态<br/>`COLLECTION_REQUIRED` \| `PHOTO_UPLOADED` \| `COMPLETE` 枚举值之一
| register_photo_upload_time | string | 注册照上传时间
| confirm_time | string | 支付用户确认时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
