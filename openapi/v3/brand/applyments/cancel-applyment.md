---
title: 撤销申请
description: 平台服务商提交申请后需要进行撤销操作时，可调用该撤销申请接口，仅当申请状态为初始化、未提交、待主体意愿确认、审核中、已驳回时才允许撤销。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| applyment_id {data-indent=1} | string | 微信支付申请单号
| business_code {data-indent=1} | string | 业务申请编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->applyments->cancelApplyment->postAsync([
  'json' => [
    'applyment_id'  => '2000002124775691',
    'business_code' => '190001351110000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/applyments/cancel-applyment')->postAsync([
  'json' => [
    'applyment_id'  => '2000002124775691',
    'business_code' => '190001351110000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/applyments/cancel-applyment']->postAsync([
  'json' => [
    'applyment_id'  => '2000002124775691',
    'business_code' => '190001351110000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->applyments->cancelApplyment->post([
  'json' => [
    'applyment_id'  => '2000002124775691',
    'business_code' => '190001351110000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/applyments/cancel-applyment')->post([
  'json' => [
    'applyment_id'  => '2000002124775691',
    'business_code' => '190001351110000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/applyments/cancel-applyment']->post([
  'json' => [
    'applyment_id'  => '2000002124775691',
    'business_code' => '190001351110000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id {data-required} | string | 微信支付申请单号
| business_code {data-required} | string | 业务申请编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016257700)
