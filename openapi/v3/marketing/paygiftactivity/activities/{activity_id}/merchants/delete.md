---
title: 删除活动发券商户号
description: 商户创建活动后，可以通过该接口删除支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| merchant_id_list {data-indent=1} | string[] | 删除的发券商户号
| delete_request_no {data-indent=1} | string | 商户请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->delete->postAsync([
  'activity_id' => '',
  'json' => [
    'merchant_id_list'  => ['100123456'],
    'delete_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete')->postAsync([
  'activity_id' => '',
  'json' => [
    'merchant_id_list'  => ['100123456'],
    'delete_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete']->postAsync([
  'activity_id' => '',
  'json' => [
    'merchant_id_list'  => ['100123456'],
    'delete_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->delete->post([
  'activity_id' => '',
  'json' => [
    'merchant_id_list'  => ['100123456'],
    'delete_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete')->post([
  'activity_id' => '',
  'json' => [
    'merchant_id_list'  => ['100123456'],
    'delete_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants/delete']->post([
  'activity_id' => '',
  'json' => [
    'merchant_id_list'  => ['100123456'],
    'delete_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 活动id
| delete_time | string | 删除时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012466787) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466827)
