---
title: 查询零售小店活动业务代理
description: 该接口为服务商或商户给零售小店活动查询业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 零售小店活动ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-required data-indent=1} | number | 分页页码
| limit {data-required data-indent=1} | number | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_activity_id_->representatives->getAsync([
  'activity_id' => '3118550000000004',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives')->getAsync([
  'activity_id' => '3118550000000004',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives']->getAsync([
  'activity_id' => '3118550000000004',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_activity_id_->representatives->get([
  'activity_id' => '3118550000000004',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives')->get([
  'activity_id' => '3118550000000004',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representatives']->get([
  'activity_id' => '3118550000000004',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count | number | 小店活动业代总数
| data | object[] {data-tooltip="对应PHP的array"} | 小店活动业代集合
| openid {data-required data-indent=1} | string | 业务代理的OpenID
| offset {data-required} | number | 分页页码
| limit {data-required} | number | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/list-representative.html)
