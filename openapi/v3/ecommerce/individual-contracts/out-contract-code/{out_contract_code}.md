---
title: 根据业务申请单号查签约信息
description: 商户通过预签约接口生成预签约id，当用户通过微信SDK拉起微信支付客户端的签约页面并完成签约后，可以通过预签约id查询到对应的签约信息和用户openid
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_contract_code {data-required} | string | 业务申请单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 签约和付款的微信小程序AppID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->individualContracts->outContractCode->_out_contract_code_->getAsync([
  'out_contract_code' => 'APPLYMENT_00000000001',
  'query' => [
    'appid' => 'wxd678efh567h23787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/individual-contracts/out-contract-code/{out_contract_code}')->getAsync([
  'out_contract_code' => 'APPLYMENT_00000000001',
  'query' => [
    'appid' => 'wxd678efh567h23787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/individual-contracts/out-contract-code/{out_contract_code}']->getAsync([
  'out_contract_code' => 'APPLYMENT_00000000001',
  'query' => [
    'appid' => 'wxd678efh567h23787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->individualContracts->outContractCode->_out_contract_code_->get([
  'out_contract_code' => 'APPLYMENT_00000000001',
  'query' => [
    'appid' => 'wxd678efh567h23787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/individual-contracts/out-contract-code/{out_contract_code}')->get([
  'out_contract_code' => 'APPLYMENT_00000000001',
  'query' => [
    'appid' => 'wxd678efh567h23787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/individual-contracts/out-contract-code/{out_contract_code}']->get([
  'out_contract_code' => 'APPLYMENT_00000000001',
  'query' => [
    'appid' => 'wxd678efh567h23787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| individual_auth_id | string | 授权ID
| signed_time {data-required} | string | 签约时间
| auth_state {data-required} | string | 授权状态<br/>`AUTHORIZED` \| `UNAUTHORIZED` 枚举值之一
| individual_openid | string | 用户OpenID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015851492)
