---
title: 使用商户卡号查询企业支付额度卡
description: 企业商户查询企业支付额度卡。该接口允许服务商使用商户卡号查询指定员工的企业支付额度卡详情，包括卡片金额、可用金额、有效期、使用记录等信息。企业可通过此接口了解额度卡的使用情况，进行费用追踪和报销管理。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| employee_id {data-required} | string | 微信授权关系ID
| out_card_no {data-required} | string | 企业支付额度卡商户卡号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->employees->_employee_id_->outQuotaCards->_out_card_no_->getAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'out_card_no' => 'out_card_123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/employees/{employee_id}/out-quota-cards/{out_card_no}')->getAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'out_card_no' => 'out_card_123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/employees/{employee_id}/out-quota-cards/{out_card_no}']->getAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'out_card_no' => 'out_card_123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->employees->_employee_id_->outQuotaCards->_out_card_no_->get([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'out_card_no' => 'out_card_123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/employees/{employee_id}/out-quota-cards/{out_card_no}')->get([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'out_card_no' => 'out_card_123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/employees/{employee_id}/out-quota-cards/{out_card_no}']->get([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'out_card_no' => 'out_card_123456',
  'query' => [
    'sp_mchid'  => '12341234',
    'sub_mchid' => '43214321',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid {data-required} | string | 出资子商户号
| card_no {data-required} | string | 企业支付额度卡卡号
| out_card_no {data-required} | string | 商户卡号
| employee_id {data-required} | string | 微信授权关系ID
| card_template_id {data-required} | string | 企业支付卡模板ID
| card_rule {data-required} | string | 使用规则<br/>`SINGLE` \| `MULTIPLE` 枚举值之一
| refund_rule {data-required} | string | 退款规则<br/>`RETURN` \| `NOT_RETURN` 枚举值之一
| amount {data-required} | number | 卡片总金额
| remain_amount {data-required} | number | 卡片可用金额
| effective_end_time {data-required} | string | 卡片有效期
| effective_begin_time {data-required} | string | 卡片生效时间
| card_state {data-required} | string | 卡片状态<br/>`ACTIVE` \| `DISABLED` 枚举值之一
| card_name {data-required} | string | 卡片名称
| reason | string | 失效原因
| card_usage_time | string | 卡片使用时间
| transaction_id | string | 卡片关联微信支付订单号
| card_disabled_time | string | 卡片失效时间
| card_remark | string | 卡片备注

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015001625)
