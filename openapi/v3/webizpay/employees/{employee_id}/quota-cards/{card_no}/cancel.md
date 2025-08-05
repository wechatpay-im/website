---
title: 企业商户作废员工企业支付额度卡
description: 企业商户作废员工企业支付额度卡。该接口允许服务商作废已下发给员工的企业支付额度卡，作废后该额度卡将无法继续使用，可指定作废原因。当额度卡使用错误、发放错误或需要提前回收额度时，企业可通过此接口作废额度卡。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| employee_id {data-required} | string | 微信授权关系ID
| card_no {data-required} | string | 企业支付额度卡卡号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号
| reason {data-required data-indent=1} | string | 作废原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->employees->_employee_id_->quotaCards->_card_no_->cancel->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'reason'    => '商户主动作废',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/cancel')->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'reason'    => '商户主动作废',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/cancel']->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'reason'    => '商户主动作废',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->employees->_employee_id_->quotaCards->_card_no_->cancel->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'reason'    => '商户主动作废',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/cancel')->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'reason'    => '商户主动作废',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/cancel']->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'json' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
    'reason'    => '商户主动作废',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid {data-required} | string | 出资子商户号
| employee_id {data-required} | string | 微信授权关系ID
| card_no {data-required} | string | 企业支付额度卡卡号
| card_state {data-required} | string | 卡片状态<br/>`ACTIVE` \| `DISABLED` 枚举值之一
| card_disabled_time | string | 卡片失效时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507127)
