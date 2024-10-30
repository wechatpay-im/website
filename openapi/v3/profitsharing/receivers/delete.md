---
title: 删除分账接收方
description: 服务商发起删除分账接收方请求。删除后，不支持将分账方商户结算后的资金，分到该分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| type {data-indent=1} | string | 分账接收方类型
| account {data-indent=1} | string | 分账接收方账号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->receivers->delete->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/profitsharing/receivers/delete')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/profitsharing/receivers/delete']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->profitsharing->receivers->delete->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/receivers/delete')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/receivers/delete']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| type | string | 分账接收方类型
| account | string | 分账接收方账号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_9.shtml)
