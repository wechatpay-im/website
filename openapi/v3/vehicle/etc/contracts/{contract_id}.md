---
title: 通过商户ETC绑定号查询签约状态
description: 通过商户etc绑定号查询签约状态。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 商户etc绑定号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->vehicle->etc->contracts->_contract_id_->getAsync([
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
$instance->chain('v3/vehicle/etc/contracts/{contract_id}')->getAsync([
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
$instance['v3/vehicle/etc/contracts/{contract_id}']->getAsync([
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
$response = $instance->v3->vehicle->etc->contracts->_contract_id_->get([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/vehicle/etc/contracts/{contract_id}')->get([
  'contract_id' => 'aAfixCs13LsdKPpfZfDkk2189ssXjfx',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/vehicle/etc/contracts/{contract_id}']->get([
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
| appid {data-required} | string | 发起签约的appid
| sp_mchid {data-required} | string | 服务商商户号
| sp_openid {data-required} | string | 用户在发起签约APP的标识
| sub_appid | string | 子商户appid
| sub_mchid | string | 特约商户号
| contract_id {data-required} | string | ETC扣费授权协议号
| bind_state {data-required} | string | ETC绑定状态
| plate_number {data-required} | string | 绑定的车牌号
| sub_openid | string | 用户在发起签约子APP的标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/etc-authorization/contracts/get-by.html)
