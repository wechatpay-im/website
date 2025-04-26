---
title: 查询活动发券商户号
description: 商户创建活动后，可以通过该接口查询支付有礼的发券商户号，用于管理活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动id
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants')->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants']->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->_activity_id_->merchants->get([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/merchants')->get([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities/{activity_id}/merchants']->get([
  'activity_id' => '',
  'query' => [
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset | integer | 分页页码
| limit | integer | 分页大小
| total_count | integer | 总数
| activity_id | string | 活动id
| data | object[] {data-tooltip="对应PHP的array"} | 结果集
| mchid {data-indent=1} | string | 商户号
| merchant_name {data-indent=1} | string | 商户名称
| create_time {data-indent=1} | string | 创建时间
| update_time {data-indent=1} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012466149) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466191)
