---
title: 提交保单授权信息
description: 保险代扣预签约时，商户通过此接口预先请求用户授权，在签约完成后微信支付将授权信息转为待授权，用户在微信支付客户端内完成授权操作后，以允许微信支付平台获取并展示该笔保单的详细信息 。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_insurance_no {data-required data-indent=1} | string | 商户保险编号
| appid {data-required data-indent=1} | string | 商户APPID
| plan_id {data-required data-indent=1} | string | 保险代扣模板ID
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| insurance_name {data-required data-indent=1} | string | 保险名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->inspolicymgr->deduct->authorizations->postAsync([
  'json' => [
    'out_insurance_no'  => 'Auisihsiahishishi4hihsid123418id',
    'appid'             => 'wxd678efh567hg6787',
    'plan_id'           => '12535',
    'out_contract_code' => 'wxwtdk20200910100000',
    'insurance_name'    => '微医保·百万医疗险',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/inspolicymgr/deduct/authorizations')->postAsync([
  'json' => [
    'out_insurance_no'  => 'Auisihsiahishishi4hihsid123418id',
    'appid'             => 'wxd678efh567hg6787',
    'plan_id'           => '12535',
    'out_contract_code' => 'wxwtdk20200910100000',
    'insurance_name'    => '微医保·百万医疗险',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/inspolicymgr/deduct/authorizations']->postAsync([
  'json' => [
    'out_insurance_no'  => 'Auisihsiahishishi4hihsid123418id',
    'appid'             => 'wxd678efh567hg6787',
    'plan_id'           => '12535',
    'out_contract_code' => 'wxwtdk20200910100000',
    'insurance_name'    => '微医保·百万医疗险',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->inspolicymgr->deduct->authorizations->post([
  'json' => [
    'out_insurance_no'  => 'Auisihsiahishishi4hihsid123418id',
    'appid'             => 'wxd678efh567hg6787',
    'plan_id'           => '12535',
    'out_contract_code' => 'wxwtdk20200910100000',
    'insurance_name'    => '微医保·百万医疗险',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/inspolicymgr/deduct/authorizations')->post([
  'json' => [
    'out_insurance_no'  => 'Auisihsiahishishi4hihsid123418id',
    'appid'             => 'wxd678efh567hg6787',
    'plan_id'           => '12535',
    'out_contract_code' => 'wxwtdk20200910100000',
    'insurance_name'    => '微医保·百万医疗险',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/inspolicymgr/deduct/authorizations']->post([
  'json' => [
    'out_insurance_no'  => 'Auisihsiahishishi4hihsid123418id',
    'appid'             => 'wxd678efh567hg6787',
    'plan_id'           => '12535',
    'out_contract_code' => 'wxwtdk20200910100000',
    'insurance_name'    => '微医保·百万医疗险',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_insurance_no {data-required} | string | 商户保险编号
| appid | string | 商户APPID
| plan_id {data-required} | string | 保险代扣模板ID
| out_contract_code {data-required} | string | 商户签约协议号
| insurance_name {data-required} | string | 保险名称
| auth_state {data-required} | string | 授权状态<br/>`AUTH_STATE_INIT` \| `AUTH_STATE_PENDING` \| `AUTH_STATE_GRANTED` \| `AUTH_STATE_DENIED` \| `AUTH_STATE_EXPIRED` 枚举值之一
| user_auth_time | string | 用户授权时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4016617408)
