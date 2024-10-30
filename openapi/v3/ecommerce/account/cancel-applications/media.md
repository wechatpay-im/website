---
title: 图片上传
description: 电商平台服务商调用注销申请接口时，需要先调用本接口上传相关的资料图片，获取图片ID后，再填写到注销申请请求中。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->cancelApplications->media->postAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/account/cancel-applications/media')->postAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/account/cancel-applications/media']->postAsync([])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->account->cancelApplications->media->post([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/cancel-applications/media')->post([]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/cancel-applications/media']->post([]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| media_id | string | 媒体文件标识Id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-cancel/media/upload-media.html)
