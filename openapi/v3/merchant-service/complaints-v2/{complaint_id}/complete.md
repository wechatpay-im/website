---
title: 反馈处理完成
description: 商户可通过调用此接口，反馈投诉单已处理完成。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id {data-required} | string | 投诉单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| complainted_mchid {data-required data-indent=1} | string | 被诉商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->complete->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/complete')->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints-v2/{complaint_id}/complete']->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintsV2->_complaint_id_->complete->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/complete')->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/complete']->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012467255) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012467217)
