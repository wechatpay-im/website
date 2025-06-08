---
title: 企业商户获取指定额度卡支付链接
description: 企业商户获取指定额度卡支付链接。该接口允许服务商获取指定额度卡的支付链接，员工可通过该链接使用额度卡进行支付，链接有效期较短，请在有效期内使用。企业可通过此接口为员工生成便捷的支付入口，简化支付流程。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| employee_id {data-required} | string | 微信授权关系ID
| card_no {data-required} | string | 企业支付额度卡卡号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sub_mchid {data-required data-indent=1} | string | 出资子商户号
| application_type {data-required data-indent=1} | string | 拉起付款码页面的企业应用类型<br/>`H5` \| `MINIPROGRAM` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->employees->_employee_id_->quotaCards->_card_no_->paymentUrl->getAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'query' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/payment-url')->getAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'query' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/payment-url']->getAsync([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'query' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->employees->_employee_id_->quotaCards->_card_no_->paymentUrl->get([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'query' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/payment-url')->get([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'query' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/employees/{employee_id}/quota-cards/{card_no}/payment-url']->get([
  'employee_id' => 'WeBizPay_a968402a-73bb-43e2-9e1a-8371b0ca3d7c',
  'card_no' => '1068019671702503425',
  'query' => [
    'sp_mchid'         => '12341234',
    'sub_mchid'        => '43214321',
    'application_type' => 'H5',
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
| expire_time {data-required} | string | 链接失效时间
| payment_url {data-required} | string | 跳转链接
| application_type | string | 拉起付款码页面的企业应用类型<br/>`H5` \| `MINIPROGRAM` 枚举值之一
| mp_query | string | 小程序查询参数
| mp_business_type | string | 小程序业务类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4014507160)
