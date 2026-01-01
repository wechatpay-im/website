---
title: 预约还款
description: 商户在发起还款前，需要调用该接口进行预约还款
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| contract_id {data-required data-indent=1} | string | 还款协议ID
| appid {data-required data-indent=1} | string | 商户AppID
| openid {data-required data-indent=1} | string | 用户标识
| schedule_items {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 预约还款项列表
| out_record_id {data-required data-indent=2} | string | 商户侧预约还款单号
| sub_mchid {data-required data-indent=2} | string | 子商户号
| sub_appid {data-required data-indent=2} | string | 子商户AppID
| repayment_amount {data-required data-indent=2} | string | 应还款金额
| min_repayment_amount {data-required data-indent=2} | string | 最低还款金额
| repayment_date {data-required data-indent=2} | string | 还款日期
| description {data-required data-indent=2} | string | 产品描述
| attach {data-indent=2} | string | 商户数据包

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->scheduleRecords->batchCreate->postAsync([
  'json' => [
    'contract_id'    => '20251105000000123456789',
    'appid'          => 'wxd678efh567hg6787',
    'openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'schedule_items' => [[
      'out_record_id'        => '1234567abcde',
      'sub_mchid'            => '1900000109',
      'sub_appid'            => 'wxcbda96de0b165489',
      'repayment_amount'     => '10000',
      'min_repayment_amount' => '2000',
      'repayment_date'       => '2025-11-18',
      'description'          => '信贷还款',
      'attach'               => '备注信息',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/schedule-records/batch-create')->postAsync([
  'json' => [
    'contract_id'    => '20251105000000123456789',
    'appid'          => 'wxd678efh567hg6787',
    'openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'schedule_items' => [[
      'out_record_id'        => '1234567abcde',
      'sub_mchid'            => '1900000109',
      'sub_appid'            => 'wxcbda96de0b165489',
      'repayment_amount'     => '10000',
      'min_repayment_amount' => '2000',
      'repayment_date'       => '2025-11-18',
      'description'          => '信贷还款',
      'attach'               => '备注信息',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/schedule-records/batch-create']->postAsync([
  'json' => [
    'contract_id'    => '20251105000000123456789',
    'appid'          => 'wxd678efh567hg6787',
    'openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'schedule_items' => [[
      'out_record_id'        => '1234567abcde',
      'sub_mchid'            => '1900000109',
      'sub_appid'            => 'wxcbda96de0b165489',
      'repayment_amount'     => '10000',
      'min_repayment_amount' => '2000',
      'repayment_date'       => '2025-11-18',
      'description'          => '信贷还款',
      'attach'               => '备注信息',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->scheduleRecords->batchCreate->post([
  'json' => [
    'contract_id'    => '20251105000000123456789',
    'appid'          => 'wxd678efh567hg6787',
    'openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'schedule_items' => [[
      'out_record_id'        => '1234567abcde',
      'sub_mchid'            => '1900000109',
      'sub_appid'            => 'wxcbda96de0b165489',
      'repayment_amount'     => '10000',
      'min_repayment_amount' => '2000',
      'repayment_date'       => '2025-11-18',
      'description'          => '信贷还款',
      'attach'               => '备注信息',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/schedule-records/batch-create')->post([
  'json' => [
    'contract_id'    => '20251105000000123456789',
    'appid'          => 'wxd678efh567hg6787',
    'openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'schedule_items' => [[
      'out_record_id'        => '1234567abcde',
      'sub_mchid'            => '1900000109',
      'sub_appid'            => 'wxcbda96de0b165489',
      'repayment_amount'     => '10000',
      'min_repayment_amount' => '2000',
      'repayment_date'       => '2025-11-18',
      'description'          => '信贷还款',
      'attach'               => '备注信息',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/schedule-records/batch-create']->post([
  'json' => [
    'contract_id'    => '20251105000000123456789',
    'appid'          => 'wxd678efh567hg6787',
    'openid'         => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'schedule_items' => [[
      'out_record_id'        => '1234567abcde',
      'sub_mchid'            => '1900000109',
      'sub_appid'            => 'wxcbda96de0b165489',
      'repayment_amount'     => '10000',
      'min_repayment_amount' => '2000',
      'repayment_date'       => '2025-11-18',
      'description'          => '信贷还款',
      'attach'               => '备注信息',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| schedule_records | object[] {data-tooltip="对应PHP的array"} | 预约还款记录列表
| out_record_id {data-required data-indent=1} | string | 商户侧预约还款单号
| appid {data-required data-indent=1} | string | 商户AppID
| sub_appid {data-required data-indent=1} | string | 子商户AppID
| contract_id {data-indent=1} | string | 还款协议ID
| repayment_amount {data-required data-indent=1} | string | 应还款金额
| min_repayment_amount {data-required data-indent=1} | string | 最低还款金额
| repayment_date {data-required data-indent=1} | string | 还款日期
| description {data-required data-indent=1} | string | 产品描述
| attach {data-indent=1} | string | 商户数据包
| openid {data-required data-indent=1} | string | 用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016779459)
