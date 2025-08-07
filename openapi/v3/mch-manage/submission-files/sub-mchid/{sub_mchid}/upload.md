---
title: 上传商户提交资料文件
description: 商户在提交资料时，可通过本接口上传所需的文件
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 子商户号
| body {data-required} | object | `multipart/form-data` 数据结构
| submission_file {data-required data-indent=1} | object | 要上传的资料文件
| meta {data-required data-indent=1} | string {data-tooltip=使用json_encode后的字符串 data-encoded-by=json_encode} | 媒体文件元信息，使用`JSON`表示
| {colspan=3 .im-table-line}
| file_name {data-required data-indent=2} | string | 商户上传的媒体图片的名称
| file_digest {data-required data-indent=2} | string | 图片文件的`sha256`摘要
| item_id {data-required data-indent=2} | number | 资料项唯一id

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/filea.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'filea.jpg',
  'file_digest' => 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9',
  'item_id' => 56
]));

$instance->v3->mchManage->submissionFiles->subMchid->_sub_mchid_->upload->postAsync([
  'sub_mchid' => '123000110',
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/filea.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'filea.jpg',
  'file_digest' => 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9',
  'item_id' => 56
]));

$instance->chain('v3/mch-manage/submission-files/sub-mchid/{sub_mchid}/upload')->postAsync([
  'sub_mchid' => '123000110',
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/filea.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'filea.jpg',
  'file_digest' => 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9',
  'item_id' => 56
]));

$instance['v3/mch-manage/submission-files/sub-mchid/{sub_mchid}/upload']->postAsync([
  'sub_mchid' => '123000110',
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
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/filea.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'filea.jpg',
  'file_digest' => 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9',
  'item_id' => 56
]));

$response = $instance->v3->mchManage->submissionFiles->subMchid->_sub_mchid_->upload->post([
  'sub_mchid' => '123000110',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/filea.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'filea.jpg',
  'file_digest' => 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9',
  'item_id' => 56
]));

$response = $instance->chain('v3/mch-manage/submission-files/sub-mchid/{sub_mchid}/upload')->post([
  'sub_mchid' => '123000110',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/filea.jpg');
$media->setMeta(\json_encode([
  'file_name' => 'filea.jpg',
  'file_digest' => 'B94D27B9934D3E08A52E52D7DA7DABFAC484EFE37A5380EE9088F7ACE2EFCDE9',
  'item_id' => 56
]));

$response = $instance['v3/mch-manage/submission-files/sub-mchid/{sub_mchid}/upload']->post([
  'sub_mchid' => '123000110',
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
| file_id {data-required} | string | 文件标识ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014940425)
