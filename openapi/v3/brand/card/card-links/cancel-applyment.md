---
title: 撤销交易连接名片配置申请
description: 接口适用场景：当服务商配置交易连接名片后，可调用该接口撤销“已发起但未生效”状态的交易连接名片申请。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| business_code {data-required data-indent=1} | string | 业务申请编号
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->card->cardLinks->cancelApplyment->postAsync([
  'json' => [
    'business_code' => '190001351110000',
    'brand_id'      => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/card/card-links/cancel-applyment')->postAsync([
  'json' => [
    'business_code' => '190001351110000',
    'brand_id'      => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/card/card-links/cancel-applyment']->postAsync([
  'json' => [
    'business_code' => '190001351110000',
    'brand_id'      => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->card->cardLinks->cancelApplyment->post([
  'json' => [
    'business_code' => '190001351110000',
    'brand_id'      => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/card/card-links/cancel-applyment')->post([
  'json' => [
    'business_code' => '190001351110000',
    'brand_id'      => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/card/card-links/cancel-applyment']->post([
  'json' => [
    'business_code' => '190001351110000',
    'brand_id'      => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| business_code {data-required} | string | 业务申请编号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016366797)
