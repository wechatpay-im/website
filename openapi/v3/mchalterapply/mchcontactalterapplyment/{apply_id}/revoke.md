---
title: 撤销超管变更申请单
description: 当申请单状态为编辑中/审核中/已驳回时，才支持撤销
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_id {data-required} | string | 微信支付申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->mchalterapply->mchcontactalterapplyment->_apply_id_->revoke->postAsync([
  'apply_id' => '20220617143306000013906025001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/mchalterapply/mchcontactalterapplyment/{apply_id}/revoke')->postAsync([
  'apply_id' => '20220617143306000013906025001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/mchalterapply/mchcontactalterapplyment/{apply_id}/revoke']->postAsync([
  'apply_id' => '20220617143306000013906025001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->mchalterapply->mchcontactalterapplyment->_apply_id_->revoke->post([
  'apply_id' => '20220617143306000013906025001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/mchalterapply/mchcontactalterapplyment/{apply_id}/revoke')->post([
  'apply_id' => '20220617143306000013906025001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/mchalterapply/mchcontactalterapplyment/{apply_id}/revoke']->post([
  'apply_id' => '20220617143306000013906025001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| apply_id | string | 申请单号
| state | string | 申请单状态<br/>`APPLYMENT_STATE_AUDITING` \| `APPLYMENT_STATE_REJECTED` \| `APPLYMENT_STATE_MODIFING` \| `APPLYMENT_STATE_FINISHED` \| `APPLYMENT_STATE_CANCELED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015617919)
