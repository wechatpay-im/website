---
title: 查询活动指定商品列表
description: 商户创建活动后，可以通过该接口查询支付有礼的活动指定商品，用于管理活动。
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
$instance->v3->marketing->paygiftactivity->activities->_activity_id_->goods->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 1,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/goods')->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 1,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities/{activity_id}/goods']->getAsync([
  'activity_id' => '',
  'query' => [
    'offset' => 1,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->_activity_id_->goods->get([
  'activity_id' => '',
  'query' => [
    'offset' => 1,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities/{activity_id}/goods')->get([
  'activity_id' => '',
  'query' => [
    'offset' => 1,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities/{activity_id}/goods']->get([
  'activity_id' => '',
  'query' => [
    'offset' => 1,
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
| goods_id {data-indent=1} | string | 指定商品
| create_time {data-indent=1} | string | 创建时间
| update_time {data-indent=1} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_6.shtml)
