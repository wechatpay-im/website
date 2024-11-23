---
title: 删除分账接收方
description: 电商平台发起删除分账接收方请求。删除后，不支持将电商平台下二级商户结算后的资金，分到该分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| type {data-required data-indent=1} | string | 接收方类型
| account {data-required data-indent=1} | string | 接收方账号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->profitsharing->receivers->delete->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'type' => 'MERCHANT_ID',
    'account' => '190001001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/profitsharing/receivers/delete')->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'type' => 'MERCHANT_ID',
    'account' => '190001001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/profitsharing/receivers/delete']->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'type' => 'MERCHANT_ID',
    'account' => '190001001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->profitsharing->receivers->delete->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'type' => 'MERCHANT_ID',
    'account' => '190001001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/profitsharing/receivers/delete')->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'type' => 'MERCHANT_ID',
    'account' => '190001001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/profitsharing/receivers/delete']->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'type' => 'MERCHANT_ID',
    'account' => '190001001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| type {data-required}| string | 接收方类型
| account {data-required}| string | 接收方账号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_8.shtml)
