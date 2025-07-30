---
title: 请求保险理赔预下单
description: 商户可调用该接口进行赔付预下单，并锁定商户资金。若赔付订单状态已经为终态（成功或关闭），接口将返回错误码。在预下单成功后，商户需携带接口返回的跳转参数，引导用户至微信内进行确认，用户确认后执行赔付。若预下单后超过24小时没有赔付成功，系统将自动关闭订单。订单赔付成功或者关闭时，系统将通过接口指定的商户回调地址通知赔付结果。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| receiver {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 收款方信息
| type {data-indent=2} | string | 转账接收方类型<br/>`MERCHANT` \| `TRANSACTION_USER` 枚举值之一
| transaction_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方订单信息
| transaction_id {data-required data-indent=3} | string | 交易订单号
| type {data-indent=3} | string | 转账接收方订单类型<br/>`WXPAY` \| `WXVALUE` 枚举值之一
| out_bill_no {data-required data-indent=1} | string | 商户单号
| amount {data-indent=1} | number | 赔付金额
| transfer_remark {data-required data-indent=1} | string | 赔付原因
| notify_url {data-indent=1} | string | 商户回调地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->insuranceClaimBills->preTransfer->postAsync([
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
    'notify_url'      => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/pre-transfer')->postAsync([
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
    'notify_url'      => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/pre-transfer']->postAsync([
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
    'notify_url'      => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->insuranceClaimBills->preTransfer->post([
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
    'notify_url'      => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/pre-transfer')->post([
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
    'notify_url'      => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/insurance-claim-bills/pre-transfer']->post([
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
    'notify_url'      => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| out_bill_no {data-required} | string | 商户单号
| bill_id {data-required} | string | 微信支付转账单号
| accept_time {data-required} | string | 受理时间
| package_info {data-required} | string | 跳转领取页面的package信息

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504185)
