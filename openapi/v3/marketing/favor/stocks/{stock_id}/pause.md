---
title: 暂停代金券批次
description: 通过此接口可暂停指定代金券批次。暂停后，该代金券批次暂停发放，用户无法通过任何渠道再领取该批次的券。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->_stock_id_->pause->postAsync([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks/{stock_id}/pause')->postAsync([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks/{stock_id}/pause']->postAsync([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->_stock_id_->pause->post([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}/pause')->post([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}/pause']->post([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pause_time {data-required} | string | 暂停时间
| stock_id {data-required} | string | 批次号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_13.shtml)
