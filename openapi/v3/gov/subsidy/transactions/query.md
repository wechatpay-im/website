---
title: 交易信息查询
description: 交易信息查询
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码
| order_number_list {data-required data-indent=1} | string[] | 商户订单号数组

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->transactions->query->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'order_number_list'         => ['vmall_250120131959_993_4494'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/transactions/query')->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'order_number_list'         => ['vmall_250120131959_993_4494'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/transactions/query']->postAsync([
  'json' => [
    'qualification_region_code' => 310100,
    'order_number_list'         => ['vmall_250120131959_993_4494'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->transactions->query->post([
  'json' => [
    'qualification_region_code' => 310100,
    'order_number_list'         => ['vmall_250120131959_993_4494'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/transactions/query')->post([
  'json' => [
    'qualification_region_code' => 310100,
    'order_number_list'         => ['vmall_250120131959_993_4494'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/transactions/query']->post([
  'json' => [
    'qualification_region_code' => 310100,
    'order_number_list'         => ['vmall_250120131959_993_4494'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code {data-required} | string | 响应码
| message {data-required} | string | 响应描述
| shop_order_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 订单状态数组
| shop_order_number {data-indent=1} | string | 单号
| collect_state {data-indent=1} | string | 归集状态枚举<br/>`COLLECT_STATE_NOT_COLLECT` \| `COLLECT_STATE_COLLECTED` \| `COLLECT_STATE_COLLECTION_FAILED` 枚举值之一
| cate_state {data-indent=1} | string | 品类状态<br/>`CATE_STATE_REDEEM` \| `CATE_STATE_REFUND` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
