---
title: 通过协议号查询签约
description: 商户通过签约协议号可查询签约信息，当合约不存在时返回NOT_FOUND错误码
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约协议号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduschoolpay->contracts->_contract_id_->getAsync([
  'contract_id' => '2045011120563805041758214605',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/eduschoolpay/contracts/{contract_id}')->getAsync([
  'contract_id' => '2045011120563805041758214605',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/eduschoolpay/contracts/{contract_id}']->getAsync([
  'contract_id' => '2045011120563805041758214605',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduschoolpay->contracts->_contract_id_->get([
  'contract_id' => '2045011120563805041758214605',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/eduschoolpay/contracts/{contract_id}')->get([
  'contract_id' => '2045011120563805041758214605',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/eduschoolpay/contracts/{contract_id}']->get([
  'contract_id' => '2045011120563805041758214605',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约协议号
| mchid {data-required} | string | 商户号
| appid {data-required} | string | 商户appid
| openid {data-required} | string | 商户appid下的用户标识
| plan_id {data-required} | string | 签约模板号
| contract_status {data-required} | string | 签约状态
| create_time {data-required} | string | 签约时间
| out_contract_code {data-required} | string | 外部签约号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012468959)
