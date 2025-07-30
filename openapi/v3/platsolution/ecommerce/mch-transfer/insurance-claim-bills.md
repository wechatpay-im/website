---
title: 请求保险理赔
description: 商户可调用该接口赔付给用户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| receiver {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 赔付用户信息
| type {data-indent=2} | string | 转账接收方类型<br/>`MERCHANT` \| `TRANSACTION_USER` 枚举值之一
| transaction_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方订单信息
| transaction_id {data-required data-indent=3} | string | 交易订单号
| type {data-indent=3} | string | 转账接收方订单类型<br/>`WXPAY` \| `WXVALUE` 枚举值之一
| out_bill_no {data-required data-indent=1} | string | 商户单号
| amount {data-indent=1} | number | 赔付金额
| transfer_remark {data-required data-indent=1} | string | 赔付原因

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->insuranceClaimBills->postAsync([
  'json' => [
    'sub_mchid'       => '1900001109',
    'receiver'        => [
      'type'             => 'MERCHANT',
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills')->postAsync([
  'json' => [
    'sub_mchid'       => '1900001109',
    'receiver'        => [
      'type'             => 'MERCHANT',
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills']->postAsync([
  'json' => [
    'sub_mchid'       => '1900001109',
    'receiver'        => [
      'type'             => 'MERCHANT',
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->insuranceClaimBills->post([
  'json' => [
    'sub_mchid'       => '1900001109',
    'receiver'        => [
      'type'             => 'MERCHANT',
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills')->post([
  'json' => [
    'sub_mchid'       => '1900001109',
    'receiver'        => [
      'type'             => 'MERCHANT',
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills']->post([
  'json' => [
    'sub_mchid'       => '1900001109',
    'receiver'        => [
      'type'             => 'MERCHANT',
      'transaction_info' => [
        'transaction_id' => '1217752501201407033233368018',
        'type'           => 'WXPAY',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid | string | 二级商户号
| receiver_detail {data-required} | object {data-tooltip="对应PHP的array"} | 转账接收方信息
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 转账接收者信息
| type {data-indent=2} | string | 转账接收方类型<br/>`MERCHANT` \| `TRANSACTION_USER` 枚举值之一
| transaction_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方订单信息
| transaction_id {data-required data-indent=3} | string | 交易订单号
| type {data-indent=3} | string | 转账接收方订单类型<br/>`WXPAY` \| `WXVALUE` 枚举值之一
| out_bill_no {data-required} | string | 商户单号
| amount {data-required} | number | 赔付金额
| transfer_remark | string | 赔付原因
| bill_id {data-required} | string | 微信支付转账单号
| state {data-required} | string | 赔付状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSED` \| `WAIT_USER_CONFIRM` \| `CANCELING` \| `CANCELLED` 枚举值之一
| accept_time {data-required} | string | 受理时间
| success_time | string | 成功时间
| sponsor_mchid | string | 出资商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504184)
