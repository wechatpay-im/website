---
title: 通过签约号查询用户状态
description: 通过调用该接口可查询用户的协议状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 充电授权扣费协议号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ebike->charge->contracts->_contract_id_->getAsync([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ebike/charge/contracts/{contract_id}')->getAsync([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ebike/charge/contracts/{contract_id}']->getAsync([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ebike->charge->contracts->_contract_id_->get([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ebike/charge/contracts/{contract_id}')->get([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ebike/charge/contracts/{contract_id}']->get([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 服务商商户号
| openid | string | 用户标识
| sub_mchid | string | 特约商户号
| contract_id | string | 充电授权扣费协议号
| contract_state | string | 协议状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/vehicle/ebike/chapter3_2.shtml)
