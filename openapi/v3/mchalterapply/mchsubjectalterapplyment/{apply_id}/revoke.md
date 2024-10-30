---
title: 撤销资料变更申请单
description: 当申请单状态为编辑中/审核中/已驳回时，才支持撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_id | string | 微信支付申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->mchsubjectalterapplyment->_apply_id_->revoke->postAsync([
  'apply_id' => '20220617143306000013906025001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke')->postAsync([
  'apply_id' => '20220617143306000013906025001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke']->postAsync([
  'apply_id' => '20220617143306000013906025001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchalterapply->mchsubjectalterapplyment->_apply_id_->revoke->post([
  'apply_id' => '20220617143306000013906025001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke')->post([
  'apply_id' => '20220617143306000013906025001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/mchsubjectalterapplyment/{apply_id}/revoke']->post([
  'apply_id' => '20220617143306000013906025001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| result | string | 撤销状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter11_3_4.shtml)