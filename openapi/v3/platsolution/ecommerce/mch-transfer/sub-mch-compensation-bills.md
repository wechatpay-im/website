---
title: 请求赔付
description: 商户可调用该接口从运营账户赔付给二级商户。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| receiver {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 赔付商户信息
| type {data-required data-indent=2} | string | 赔付接收方类型<br/>`MERCHANT` 枚举值
| mch_info {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 赔付接收方商户信息
| mchid {data-required data-indent=3} | string | 商户号
| out_bill_no {data-required data-indent=1} | string | 商户单号
| amount {data-required data-indent=1} | number | 赔付金额
| transfer_remark {data-required data-indent=1} | string | 赔付原因
| sponsor_mchid {data-indent=1} | string | 出资商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->subMchCompensationBills->postAsync([
  'json' => [
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mchid' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'sponsor_mchid'   => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/sub-mch-compensation-bills')->postAsync([
  'json' => [
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mchid' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'sponsor_mchid'   => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/sub-mch-compensation-bills']->postAsync([
  'json' => [
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mchid' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'sponsor_mchid'   => '1900001109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->subMchCompensationBills->post([
  'json' => [
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mchid' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'sponsor_mchid'   => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/sub-mch-compensation-bills')->post([
  'json' => [
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mchid' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'sponsor_mchid'   => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/sub-mch-compensation-bills']->post([
  'json' => [
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mchid' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'sponsor_mchid'   => '1900001109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| receiver_detail {data-required} | object {data-tooltip="对应PHP的array"} | 赔付接收方信息
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 赔付接收者信息
| type {data-indent=2} | string | 赔付接收方类型<br/>`MERCHANT` 枚举值
| mch_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 赔付接收方商户信息
| mchid {data-required data-indent=3} | string | 商户号
| out_bill_no {data-required} | string | 商户单号
| amount {data-required} | number | 赔付金额
| transfer_remark {data-required} | string | 赔付原因
| bill_id {data-required} | string | 微信支付转账单号
| state {data-required} | string | 赔付状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSED` 枚举值之一
| accept_time {data-required} | string | 受理时间
| success_time | string | 成功时间
| sponsor_mchid | string | 出资商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016777363)
