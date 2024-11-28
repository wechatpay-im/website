---
title: 处置结果回传
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 微信支付分配的服务商唯一标识
| acquiring_bank_id {data-indent=1} | string | 微信支付分配的从业机构唯一标识
| channel_id {data-indent=1} | string | 微信支付分配的渠道商唯一标识
| sub_mchid {data-indent=1} | string | 上报订单风险数据的商户号信息
| out_trade_no {data-indent=1} | string | 商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一
| risk_type {data-indent=1} | string | 风险类型<br/>`OTHER_RISK` \| `INDUCE_PAYMENT` \| `FRAUD` \| `GAMBLING` \| `CYBERSEX` 枚举值之一
| punish_type {data-indent=1} | string | 处置手段<br/>`OTHER_PUNISH` \| `DISABLE_PAYMENT` \| `SUSPEND_SETTLEMENT` \| `DISABLE_WITHDRAW` \| `REMOVE_MERCHANTS` \| `ADD_MERCHANTS_BLACKLIST` \| `REFUND` \| `FREEZING_FUND_BY_TRANSACTION` \| `FREEZING_FUND_BY_MERCHANTS` \| `BLOCKED_USER` 枚举值之一
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

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk-result/create-trade-risk-result.html)
