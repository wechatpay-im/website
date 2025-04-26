---
title: 商户通过商户协议号查询协议
description: 通过商户协议号查询协议。 直连商户、普通服务商、从业机构服务商、电商收付通服务商均可以通过该接口发起签约协议的查询。 前置条件：商户已经成功获取过免密支付的签约协议。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_contract_code {data-required} | string | 商户签约协议号
| service_id {data-required} | number | 免密支付服务ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->passwordExemptContract->contracts->serviceId->_service_id_->outContractCode->_out_contract_code_->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'service_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}')->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'service_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}']->getAsync([
  'out_contract_code' => 'wxwtdk20200910100000',
  'service_id' => '12535',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->passwordExemptContract->contracts->serviceId->_service_id_->outContractCode->_out_contract_code_->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'service_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}')->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'service_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/password-exempt-contract/contracts/service-id/{service_id}/out-contract-code/{out_contract_code}']->get([
  'out_contract_code' => 'wxwtdk20200910100000',
  'service_id' => '12535',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid {data-required} | string | 商户号
| contract_id {data-required} | string | 免密支付协议ID
| appid {data-required} | string | 商户AppID
| openid {data-required} | string | 用户标识
| sub_appid | string | 子商户AppID
| sub_openid | string | 用户标识
| service_id {data-required} | number | 免密支付服务ID
| out_contract_code {data-required} | string | 商户签约协议号
| contract_display_account | string | 用户账户展示名称
| contract_state {data-required} | string | 委托代扣协议状态
| contract_signed_time {data-required} | string | 协议签署时间
| contract_terminate_info | object {data-tooltip="对应PHP的array"} | 协议解约信息
| contract_termination_mode {data-required data-indent=1} | string | 协议解约方式
| contract_terminated_time {data-indent=1} | string | 协议解约时间
| contract_termination_remark {data-indent=1} | string | 解约备注

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012472855) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012715321)
