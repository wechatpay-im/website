---
title: 设置投放计划回调地址
description: 投放计划创建后，如果设置了回调地址，当投放计划的状态 `plan_state` 或者审批状态 `audit_state` 发生变更时，会回调给品牌方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| notify_url {data-required data-indent=1} | string | 通知url地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->deliveryPlan->_sp_mchid_->notifyUrl->postAsync([
  'sp_mchid' => '298689900',
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/delivery-plan/{sp_mchid}/notify-url')->postAsync([
  'sp_mchid' => '298689900',
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/delivery-plan/{sp_mchid}/notify-url']->postAsync([
  'sp_mchid' => '298689900',
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->deliveryPlan->_sp_mchid_->notifyUrl->post([
  'sp_mchid' => '298689900',
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/delivery-plan/{sp_mchid}/notify-url')->post([
  'sp_mchid' => '298689900',
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/delivery-plan/{sp_mchid}/notify-url']->post([
  'sp_mchid' => '298689900',
  'json' => [
    'notify_url' => 'https://pay.weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| notify_url {data-required} | string | 通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016184598)
