---
title: 查询预约还款结果
description: 查询预约还款记录
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_record_id {data-required} | string | 商户侧预约还款单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| contract_id {data-required data-indent=1} | string | 还款协议ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->scheduleRecords->_out_record_id_->getAsync([
  'out_record_id' => '1234567abcde',
  'query' => [
    'contract_id' => '20251105000000123456789',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/schedule-records/{out_record_id}')->getAsync([
  'out_record_id' => '1234567abcde',
  'query' => [
    'contract_id' => '20251105000000123456789',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/schedule-records/{out_record_id}']->getAsync([
  'out_record_id' => '1234567abcde',
  'query' => [
    'contract_id' => '20251105000000123456789',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->scheduleRecords->_out_record_id_->get([
  'out_record_id' => '1234567abcde',
  'query' => [
    'contract_id' => '20251105000000123456789',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/schedule-records/{out_record_id}')->get([
  'out_record_id' => '1234567abcde',
  'query' => [
    'contract_id' => '20251105000000123456789',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/schedule-records/{out_record_id}']->get([
  'out_record_id' => '1234567abcde',
  'query' => [
    'contract_id' => '20251105000000123456789',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_record_id {data-required} | string | 商户侧预约还款单号
| appid {data-required} | string | 商户AppID
| sub_appid {data-required} | string | 子商户AppID
| contract_id | string | 还款协议ID
| repayment_amount {data-required} | string | 应还款金额
| min_repayment_amount {data-required} | string | 最低还款金额
| repayment_date {data-required} | string | 还款日期
| description {data-required} | string | 产品描述
| attach | string | 商户数据包
| openid {data-required} | string | 用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016779463)
