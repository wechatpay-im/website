---
title: 终止活动
description: 将活动终止，不会再被曝光
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardActivity->activities->_activity_id_->terminate->postAsync([
  'activity_id' => '371067',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-activity/activities/{activity_id}/terminate')->postAsync([
  'activity_id' => '371067',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-activity/activities/{activity_id}/terminate']->postAsync([
  'activity_id' => '371067',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardActivity->activities->_activity_id_->terminate->post([
  'activity_id' => '371067',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-activity/activities/{activity_id}/terminate')->post([
  'activity_id' => '371067',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-activity/activities/{activity_id}/terminate']->post([
  'activity_id' => '371067',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required}| string | 活动ID
| terminate_time | string | 终止时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/membercard_open/chapter8_2.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/membership-card/member-gift/terminating-activity.html)
