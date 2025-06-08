---
title: 企业商户为员工下发企业支付额度卡
description: 企业商户为员工下发企业支付额度卡。该接口允许服务商为已授权的员工下发企业支付额度卡，设置卡片名称、额度、备注等信息，员工可使用该额度卡进行企业支付。企业可根据不同业务场景（如差旅报销、日常办公等）为员工发放不同类型的额度卡，便于费用管理和控制。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| employee_id {data-required} | string | 微信授权关系ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号
| card_template_id {data-required data-indent=1} | string | 企业支付卡模板ID
| amount {data-required data-indent=1} | number | 卡片总金额
| card_name {data-required data-indent=1} | string | 卡片名称
| out_card_no {data-required data-indent=1} | string | 商户卡号
| effective_end_time {data-required data-indent=1} | string | 卡片有效期
| card_remark {data-indent=1} | string | 卡片备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->employees->_employee_id_->quotaCards->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'           => '12341234',
    'sub_mchid'          => '43214321',
    'card_template_id'   => 'template_123',
    'amount'             => 10000,
    'card_name'          => '报销额度卡',
    'out_card_no'        => 'mch_card_123456',
    'effective_end_time' => '2023-12-31T23:59:59+08:00',
    'card_remark'        => '2023年1月差旅报销',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/employees/{employee_id}/quota-cards')->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'           => '12341234',
    'sub_mchid'          => '43214321',
    'card_template_id'   => 'template_123',
    'amount'             => 10000,
    'card_name'          => '报销额度卡',
    'out_card_no'        => 'mch_card_123456',
    'effective_end_time' => '2023-12-31T23:59:59+08:00',
    'card_remark'        => '2023年1月差旅报销',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/employees/{employee_id}/quota-cards']->postAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'           => '12341234',
    'sub_mchid'          => '43214321',
    'card_template_id'   => 'template_123',
    'amount'             => 10000,
    'card_name'          => '报销额度卡',
    'out_card_no'        => 'mch_card_123456',
    'effective_end_time' => '2023-12-31T23:59:59+08:00',
    'card_remark'        => '2023年1月差旅报销',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->employees->_employee_id_->quotaCards->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'           => '12341234',
    'sub_mchid'          => '43214321',
    'card_template_id'   => 'template_123',
    'amount'             => 10000,
    'card_name'          => '报销额度卡',
    'out_card_no'        => 'mch_card_123456',
    'effective_end_time' => '2023-12-31T23:59:59+08:00',
    'card_remark'        => '2023年1月差旅报销',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/employees/{employee_id}/quota-cards')->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'           => '12341234',
    'sub_mchid'          => '43214321',
    'card_template_id'   => 'template_123',
    'amount'             => 10000,
    'card_name'          => '报销额度卡',
    'out_card_no'        => 'mch_card_123456',
    'effective_end_time' => '2023-12-31T23:59:59+08:00',
    'card_remark'        => '2023年1月差旅报销',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/employees/{employee_id}/quota-cards']->post([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'json' => [
    'sp_mchid'           => '12341234',
    'sub_mchid'          => '43214321',
    'card_template_id'   => 'template_123',
    'amount'             => 10000,
    'card_name'          => '报销额度卡',
    'out_card_no'        => 'mch_card_123456',
    'effective_end_time' => '2023-12-31T23:59:59+08:00',
    'card_remark'        => '2023年1月差旅报销',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid {data-required} | string | 出资子商户号
| out_card_no {data-required} | string | 商户卡号
| employee_id {data-required} | string | 微信授权关系ID
| card_no {data-required} | string | 企业支付额度卡卡号
| effective_begin_time {data-required} | string | 卡片生效时间
| effective_end_time {data-required} | string | 卡片有效期

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507148)
