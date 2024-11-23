---
title: 获取商户开户意愿确认状态
description: 当服务商需要确认微信支付子商户号是否完成确认时，如果调用此接口提到”已授权“状态，则说明该商户号已完成开户意愿确认。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->apply4subject->applyment->merchants->_sub_mchid_->state->getAsync([
  'sub_mchid' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/apply4subject/applyment/merchants/{sub_mchid}/state')->getAsync([
  'sub_mchid' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/apply4subject/applyment/merchants/{sub_mchid}/state']->getAsync([
  'sub_mchid' => '',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->apply4subject->applyment->merchants->_sub_mchid_->state->get([
  'sub_mchid' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/apply4subject/applyment/merchants/{sub_mchid}/state')->get([
  'sub_mchid' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/apply4subject/applyment/merchants/{sub_mchid}/state']->get([
  'sub_mchid' => '',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| authorize_state {data-required}| string | 授权状态<br/>`AUTHORIZE_STATE_UNAUTHORIZED` \| `AUTHORIZE_STATE_AUTHORIZED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/applysubject/chapter5_4.shtml)
