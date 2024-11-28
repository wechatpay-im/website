---
title: 激活代金券批次
description: 制券成功后，通过调用此接口激活批次，如果是预充值代金券，激活时会从商户账户余额中锁定本批次的营销资金。
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
$instance->v3->marketing->favor->stocks->_stock_id_->start->postAsync([
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
$instance->chain('v3/marketing/favor/stocks/{stock_id}/start')->postAsync([
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
$instance['v3/marketing/favor/stocks/{stock_id}/start']->postAsync([
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
$response = $instance->v3->marketing->favor->stocks->_stock_id_->start->post([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}/start')->post([
  'stock_id' => '',
  'json' => [
    'stock_creator_mchid' => '8956000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}/start']->post([
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
| start_time {data-required} | string | 生效时间
| stock_id {data-required} | string | 批次号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_3.shtml)
