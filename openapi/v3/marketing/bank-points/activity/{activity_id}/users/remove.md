---
title: 移除活动目标人群
description: 注：因积分资产会随时变动，为提高用户体验，银行侧可通过api剔除“已积分余额不满足要求”或“因其他原因不满足要求”的用户。预计系统应答后2-3h完成曝光剔除，因此上传的剔除名单与实际剔除成功的名单可能存在一定误差，请知悉！
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 希望剔除用户的活动id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| contract_id {data-required data-indent=1} | string[] | 希望剔除的用户对应的协议号id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->bankPoints->activity->_activity_id_->users->remove->postAsync([
  'activity_id' => 'activity_id_example',
  'json' => [
    'contract_id' => ['example_contract_id'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/bank-points/activity/{activity_id}/users/remove')->postAsync([
  'activity_id' => 'activity_id_example',
  'json' => [
    'contract_id' => ['example_contract_id'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/bank-points/activity/{activity_id}/users/remove']->postAsync([
  'activity_id' => 'activity_id_example',
  'json' => [
    'contract_id' => ['example_contract_id'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->bankPoints->activity->_activity_id_->users->remove->post([
  'activity_id' => 'activity_id_example',
  'json' => [
    'contract_id' => ['example_contract_id'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/bank-points/activity/{activity_id}/users/remove')->post([
  'activity_id' => 'activity_id_example',
  'json' => [
    'contract_id' => ['example_contract_id'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/bank-points/activity/{activity_id}/users/remove']->post([
  'activity_id' => 'activity_id_example',
  'json' => [
    'contract_id' => ['example_contract_id'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 剔除完毕的活动id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/institution/4020978687)
