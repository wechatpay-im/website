---
title: 商户通过商户协议号解约协议
description: 通过商户协议号解约协议。 直连商户、普通服务商、从业机构服务商、电商收付通服务商均可以通过该接口发起签约协议的解约。 前置条件：对应的签约协议是已生效状态的签约协议。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| service_id {data-required} | number | 免密支付服务ID
| out_contract_code {data-required} | string | 商户签约协议号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| contract_termination_remark {data-required data-indent=1} | string | 解约备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->passwordExemptContract->contracts->serviceId->_service_id_->outContractCode->_out_contract_code_->terminate->postAsync([
  'service_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate')->postAsync([
  'service_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate']->postAsync([
  'service_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->passwordExemptContract->contracts->serviceId->_service_id_->outContractCode->_out_contract_code_->terminate->post([
  'service_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate')->post([
  'service_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}/terminate']->post([
  'service_id' => '12535',
  'out_contract_code' => 'wxwtdk20200910100000',
  'json' => [
    'contract_termination_remark' => '用户解约',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required}| string | 商户号
| service_id {data-required}| number | 免密支付服务ID
| out_contract_code {data-required}| string | 商户签约协议号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/password-free-contract/contracts/terminate-by-code.html)
