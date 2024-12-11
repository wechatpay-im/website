---
title: 查询风险信息
description: 从业机构/服务商/渠道商/商户可调用该接口，在商户订单支付完成后，进行订单风险查询，从而进行后置风险管控&生态建设。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-indent=1} | string | 服务商商户号
| acquiring_bank_id {data-indent=1} | string | 从业机构号
| channel_id {data-indent=1} | string | 渠道号
| sub_mchid {data-indent=1} | string | 子商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| complaints_information {data-indent=1} | string | 投诉信息

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantRiskManage->tradeRiskInformation->getAsync([
  'query' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-risk-manage/trade-risk-information')->getAsync([
  'query' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-risk-manage/trade-risk-information']->getAsync([
  'query' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantRiskManage->tradeRiskInformation->get([
  'query' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-risk-manage/trade-risk-information')->get([
  'query' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-risk-manage/trade-risk-information']->get([
  'query' => [
    'sp_mchid'               => '1900000109',
    'acquiring_bank_id'      => '1356485',
    'channel_id'             => '1900000108',
    'sub_mchid'              => '1900009231',
    'out_trade_no'           => '1217752501201407033233368018',
    'complaints_information' => '商家说高额返利，支付很大金额之后发现并没有返利，是骗子',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| risk_score {data-required} | number | 风险系数值
| risk_type | string | 风险类型<br/>`OTHER_RISK` \| `INDUCE_PAYMENT` \| `FRAUD` \| `GAMBLING` \| `CYBERSEX` 枚举值之一
| punish_type | string | 处置手段<br/>`OTHER_PUNISH` \| `DISABLE_PAYMENT` \| `SUSPEND_SETTLEMENT` \| `DISABLE_WITHDRAW` \| `REMOVE_MERCHANTS` \| `ADD_MERCHANTS_BLACKLIST` \| `REFUND` \| `FREEZING_FUND_BY_TRANSACTION` \| `FREEZING_FUND_BY_MERCHANTS` \| `BLOCKED_USER` 枚举值之一
| punish_description | string | 处置手段描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/risk-manage/trade-risk/query-trade-risk-information.html)
