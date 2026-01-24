---
title: 查询保单授权信息
description: 商户通过商户保险编号查询该笔保单的授权信息。通过此接口，商户可以获知用户是否已完成授权、授权的具体时间，以及当前的授权状态等。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_insurance_no {data-required} | string | 商户保险编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->inspolicymgr->deduct->authorizations->_out_insurance_no_->getAsync([
  'out_insurance_no' => 'Auisihsiahishishi4hihsid123418id',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/inspolicymgr/deduct/authorizations/{out_insurance_no}')->getAsync([
  'out_insurance_no' => 'Auisihsiahishishi4hihsid123418id',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/inspolicymgr/deduct/authorizations/{out_insurance_no}']->getAsync([
  'out_insurance_no' => 'Auisihsiahishishi4hihsid123418id',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->inspolicymgr->deduct->authorizations->_out_insurance_no_->get([
  'out_insurance_no' => 'Auisihsiahishishi4hihsid123418id',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/inspolicymgr/deduct/authorizations/{out_insurance_no}')->get([
  'out_insurance_no' => 'Auisihsiahishishi4hihsid123418id',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/inspolicymgr/deduct/authorizations/{out_insurance_no}']->get([
  'out_insurance_no' => 'Auisihsiahishishi4hihsid123418id',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_insurance_no {data-required} | string | 商户保险编号
| appid {data-required} | string | 公众账号ID
| plan_id {data-required} | string | 保险代扣模板ID
| out_contract_code {data-required} | string | 商户签约协议号
| insurance_name {data-required} | string | 保险名称
| auth_state {data-required} | string | 授权状态<br/>`AUTH_STATE_INIT` \| `AUTH_STATE_PENDING` \| `AUTH_STATE_GRANTED` \| `AUTH_STATE_DENIED` \| `AUTH_STATE_EXPIRED` 枚举值之一
| user_auth_time | string | 用户授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016617415)
