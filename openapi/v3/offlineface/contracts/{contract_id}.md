---
title: 签约查询接口
description: 根据签约id查询签约信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 
| query | object | 声明请求的查询参数
| appid {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->offlineface->contracts->_contract_id_->getAsync([
  'contract_id' => '',
  'query' => [
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/offlineface/contracts/{contract_id}')->getAsync([
  'contract_id' => '',
  'query' => [
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/offlineface/contracts/{contract_id}']->getAsync([
  'contract_id' => '',
  'query' => [
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->offlineface->contracts->_contract_id_->get([
  'contract_id' => '',
  'query' => [
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/offlineface/contracts/{contract_id}')->get([
  'contract_id' => '',
  'query' => [
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/offlineface/contracts/{contract_id}']->get([
  'contract_id' => '',
  'query' => [
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 
| mchid | string | 
| organization_id | string | 
| use_id | string | 
| openid | string | 
| contract_state | string | 
| contract_signed_time | string | 
| contract_terminated_time | string | 
| contract_mode | string | 
| contract_bank_card_from | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/wxfacepay/develop/k12-development-guidelines.html)
