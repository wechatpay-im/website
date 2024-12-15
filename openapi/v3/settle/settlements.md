---
title: 查询结算资金明细
description: 商户在交易完结之后，可按结算日期查询已结算资金明细（sette_state为SETTLED），也可以查询未结算资金明细（sette_state为UNSETTLE）。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://api.mch.weixin.qq.com/hk/`(国内接入)
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| settle_state {data-required data-indent=1} | string | 结算状态<br/>`SETTLED` \| `UNSETTLE` 枚举值之一
| settle_start_date {data-indent=1} | string | 结算开始日期
| settle_end_date {data-indent=1} | string | 结算结束日期
| limit {data-required data-indent=1} | integer | 最大记录条数
| offset {data-required data-indent=1} | integer | 记录起始位置

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->settle->settlements->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'query' => [
    'sub_mchid'         => '1900000101',
    'settle_state'      => 'SETTLED',
    'settle_start_date' => '20091225',
    'settle_end_date'   => '20091226',
    'limit'             => 5,
    'offset'            => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/settle/settlements')->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'query' => [
    'sub_mchid'         => '1900000101',
    'settle_state'      => 'SETTLED',
    'settle_start_date' => '20091225',
    'settle_end_date'   => '20091226',
    'limit'             => 5,
    'offset'            => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/settle/settlements']->getAsync([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'query' => [
    'sub_mchid'         => '1900000101',
    'settle_state'      => 'SETTLED',
    'settle_start_date' => '20091225',
    'settle_end_date'   => '20091226',
    'limit'             => 5,
    'offset'            => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->settle->settlements->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'query' => [
    'sub_mchid'         => '1900000101',
    'settle_state'      => 'SETTLED',
    'settle_start_date' => '20091225',
    'settle_end_date'   => '20091226',
    'limit'             => 5,
    'offset'            => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/settle/settlements')->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'query' => [
    'sub_mchid'         => '1900000101',
    'settle_state'      => 'SETTLED',
    'settle_start_date' => '20091225',
    'settle_end_date'   => '20091226',
    'limit'             => 5,
    'offset'            => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/settle/settlements']->get([
  'base_uri' => 'https://api.mch.weixin.qq.com/hk/', // 接入点(国内接入)
  'query' => [
    'sub_mchid'         => '1900000101',
    'settle_state'      => 'SETTLED',
    'settle_start_date' => '20091225',
    'settle_end_date'   => '20091226',
    'limit'             => 5,
    'offset'            => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 结算信息列表
| batch_id {data-required data-indent=1} | string | 付款批次号
| settlement_date {data-required data-indent=1} | string | 结算日期
| trade_start_date {data-required data-indent=1} | string | 交易开始日期
| trade_end_date {data-required data-indent=1} | string | 交易结束日期
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 金额
| settled {data-required data-indent=2} | integer | 已结算金额
| unsettle {data-required data-indent=2} | integer | 未结算金额
| currency {data-required data-indent=2} | string | 结算币种
| pay {data-required data-indent=2} | integer | 支付金额
| refund {data-required data-indent=2} | integer | 退款金额
| net {data-required data-indent=2} | integer | 支付净额
| fee {data-required data-indent=2} | integer | 手续费金额
| wallet_region {data-indent=1} | string | 钱包主体<br/>`CHINA_MAINLAND` \| `CHINA_HONGKONG` 枚举值之一
| total_count {data-required} | integer | 总记录条数
| offset {data-required} | integer | 记录起始位置
| limit {data-required} | integer | 本次返回条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/fusion_wallet_ch/QuickPay/chapter8_10.shtml)
