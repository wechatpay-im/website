---
title: 撤销申请单-使用申请单号
description: 平台服务商提交申请单后需要进行撤销操作时，可调用该撤销申请单接口，仅当申请单状态为资料校验中、待账户验证、审核中、已驳回、待签约、已冻结时才允许撤销。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id {data-required} | integer | 微信支付申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->applyments->_applyment_id_->revoke->postAsync([
  'applyment_id' => '2000002124775691',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/applyments/{applyment_id}/revoke')->postAsync([
  'applyment_id' => '2000002124775691',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/applyments/{applyment_id}/revoke']->postAsync([
  'applyment_id' => '2000002124775691',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->applyments->_applyment_id_->revoke->post([
  'applyment_id' => '2000002124775691',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/applyments/{applyment_id}/revoke')->post([
  'applyment_id' => '2000002124775691',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/applyments/{applyment_id}/revoke']->post([
  'applyment_id' => '2000002124775691',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id {data-required} | integer | 微信支付申请单号
| out_request_no {data-required} | string | 业务申请编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015616720)
