---
title: 获取支付有礼活动列表
description: 商户根据一定过滤条件，查询已创建的支付有礼活动。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小
| activity_name {data-indent=1} | string | 活动名称
| activity_status {data-indent=1} | string | 活动状态
| award_type {data-indent=1} | string | 奖品类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->paygiftactivity->activities->getAsync([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'activity_name' => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type' => 'BUSIFAVOR',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/paygiftactivity/activities')->getAsync([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'activity_name' => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type' => 'BUSIFAVOR',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/paygiftactivity/activities']->getAsync([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'activity_name' => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type' => 'BUSIFAVOR',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->paygiftactivity->activities->get([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'activity_name' => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type' => 'BUSIFAVOR',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/paygiftactivity/activities')->get([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'activity_name' => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type' => 'BUSIFAVOR',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/paygiftactivity/activities']->get([
  'query' => [
    'offset' => 0,
    'limit' => 0,
    'activity_name' => '',
    'activity_status' => 'CREATE_ACT_STATUS',
    'award_type' => 'BUSIFAVOR',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset | integer | 
| limit | integer | 
| total_count | integer | 
| activity_id | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/paygiftactivity/chapter3_9.shtml)
