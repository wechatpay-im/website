---
title: 处置结果回传
description: 从业机构/服务商/渠道商/商户查询订单风险后，调用该接口回传对风险订单/风险商户的调查、处置信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| acquiring_bank_id {data-indent=1} | string | 从业机构商户号
| channel_id {data-indent=1} | string | 渠道号
| sub_mchid {data-indent=1} | string | 子商户号
| out_trade_no {data-indent=1} | string | 商户订单号
| risk_type {data-indent=1} | string | 风险类型<br/>`OTHER_RISK` \| `INDUCE_PAYMENT` \| `FRAUD` \| `GAMBLING` \| `CYBERSEX` 枚举值之一
| punish_type {data-required data-indent=1} | string | 处置手段<br/>`OTHER_PUNISH` \| `DISABLE_PAYMENT` \| `SUSPEND_SETTLEMENT` \| `DISABLE_WITHDRAW` \| `REMOVE_MERCHANTS` \| `ADD_MERCHANTS_BLACKLIST` \| `REFUND` \| `FREEZING_FUND_BY_TRANSACTION` \| `FREEZING_FUND_BY_MERCHANTS` \| `BLOCKED_USER` 枚举值之一
| additional_punish_type {data-indent=1} | string | 处置手段补充
| complaints_information {data-indent=1} | string | 投诉信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantRiskManage->tradeRiskResult->postAsync([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'risk_type'              => 'OTHER_RISK',
    'punish_type'            => 'OTHER_PUNISH',
    'additional_punish_type' => 'SUSPEND_SETTLEMENT_NDAYS:10',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-risk-manage/trade-risk-result')->postAsync([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'risk_type'              => 'OTHER_RISK',
    'punish_type'            => 'OTHER_PUNISH',
    'additional_punish_type' => 'SUSPEND_SETTLEMENT_NDAYS:10',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-risk-manage/trade-risk-result']->postAsync([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'risk_type'              => 'OTHER_RISK',
    'punish_type'            => 'OTHER_PUNISH',
    'additional_punish_type' => 'SUSPEND_SETTLEMENT_NDAYS:10',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantRiskManage->tradeRiskResult->post([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'risk_type'              => 'OTHER_RISK',
    'punish_type'            => 'OTHER_PUNISH',
    'additional_punish_type' => 'SUSPEND_SETTLEMENT_NDAYS:10',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-risk-manage/trade-risk-result')->post([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'risk_type'              => 'OTHER_RISK',
    'punish_type'            => 'OTHER_PUNISH',
    'additional_punish_type' => 'SUSPEND_SETTLEMENT_NDAYS:10',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-risk-manage/trade-risk-result']->post([
  'json' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'risk_type'              => 'OTHER_RISK',
    'punish_type'            => 'OTHER_PUNISH',
    'additional_punish_type' => 'SUSPEND_SETTLEMENT_NDAYS:10',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid | string | 服务商商户号
| acquiring_bank_id | string | 从业机构商户号
| channel_id | string | 渠道号
| sub_mchid | string | 子商户号
| out_trade_no | string | 商户订单号
| risk_type | string | 风险类型<br/>`OTHER_RISK` \| `INDUCE_PAYMENT` \| `FRAUD` \| `GAMBLING` \| `CYBERSEX` 枚举值之一
| punish_type {data-required} | string | 处置手段<br/>`OTHER_PUNISH` \| `DISABLE_PAYMENT` \| `SUSPEND_SETTLEMENT` \| `DISABLE_WITHDRAW` \| `REMOVE_MERCHANTS` \| `ADD_MERCHANTS_BLACKLIST` \| `REFUND` \| `FREEZING_FUND_BY_TRANSACTION` \| `FREEZING_FUND_BY_MERCHANTS` \| `BLOCKED_USER` 枚举值之一
| additional_punish_type | string | 处置手段补充
| punish_description | string | 处置手段描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk-result/create-trade-risk-result.html)
