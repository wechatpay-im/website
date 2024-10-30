---
title: 上传文件
description: 部分微信支付境外业务指定商户需要上传文件资料，可使用本API来提交资料，获取其他业务API所需的FileID值。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance->v3->global->merchantStorage->file->upload->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance->chain('v3/global/merchant-storage/file/upload')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$instance['v3/global/merchant-storage/file/upload']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance->v3->global->merchantStorage->file->upload->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance->chain('v3/global/merchant-storage/file/upload')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/image.jpg');

$response = $instance['v3/global/merchant-storage/file/upload']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| file_id | string | 文件标识ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_11.shtml)
