---
title: 查询sn码状态
description: 查询sn码是否被使用了，可以在支付后，3c商品出库前查询，当然不查询直接调用后面的sn锁定也可以。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sn_code_list {data-required data-indent=1} | string[] | S/N码集合
| qualification_region_code {data-required data-indent=1} | number | 使用的资格的地区编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->sncode->query->postAsync([
  'json' => [
    'sn_code_list'              => ['9CC0AC186027'],
    'qualification_region_code' => 310100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/sncode/query')->postAsync([
  'json' => [
    'sn_code_list'              => ['9CC0AC186027'],
    'qualification_region_code' => 310100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/sncode/query']->postAsync([
  'json' => [
    'sn_code_list'              => ['9CC0AC186027'],
    'qualification_region_code' => 310100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->sncode->query->post([
  'json' => [
    'sn_code_list'              => ['9CC0AC186027'],
    'qualification_region_code' => 310100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/sncode/query')->post([
  'json' => [
    'sn_code_list'              => ['9CC0AC186027'],
    'qualification_region_code' => 310100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/sncode/query']->post([
  'json' => [
    'sn_code_list'              => ['9CC0AC186027'],
    'qualification_region_code' => 310100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| goods_sn_list {data-required} | object[] {data-tooltip="对应PHP的array"} | sn码状态数组
| sn_code {data-required data-indent=1} | string | S/N码
| state {data-required data-indent=1} | string | 状态<br/>`SNCODE_STATE_UNKNOWN` \| `SNCODE_STATE_SELLABLE` \| `SNCODE_STATE_NOT_SELLABLE` 枚举值之一
| not_sellable_reason {data-indent=1} | string | 不可售的原因<br/>`NOT_SELLABLE_REASON_USED` \| `NOT_SELLABLE_REASON_NOT_FOUND` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989543)
