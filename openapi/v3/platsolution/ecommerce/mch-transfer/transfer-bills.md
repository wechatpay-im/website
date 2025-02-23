---
title: 保证金赔付
description: 商户可调用该接口付款给商户。注：接口频率限制为100次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| sp_appid {data-indent=1} | string | 公众账号ID
| business_type {data-required data-indent=1} | string | 业务类型<br/>`DEPOSIT_COMPENSATION` \| `PLATFORM_AFTER_SALES_COMPENSATION` \| `INSURANCE_CLAIM` \| `DEPOSIT_AFTER_SALES_COMPENSATION` 枚举值之一
| receiver {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 收款方信息
| type {data-indent=2} | string | 转账接收方类型<br/>`MERCHANT` \| `TRANSACTION_USER` 枚举值之一
| mch_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方商户信息
| mch_id {data-indent=3} | string | 商户号
| out_bill_no {data-required data-indent=1} | string | 商户单号
| amount {data-indent=1} | number | 赔付金额
| transfer_remark {data-required data-indent=1} | string | 赔付原因
| receiver_remark {data-indent=1} | string | 收款方备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->transferBills->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'sp_appid'        => 'wx8888888888888888',
    'business_type'   => 'DEPOSIT_COMPENSATION',
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mch_id' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'receiver_remark' => '小店XXXX直播违规扣罚',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/transfer-bills')->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'sp_appid'        => 'wx8888888888888888',
    'business_type'   => 'DEPOSIT_COMPENSATION',
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mch_id' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'receiver_remark' => '小店XXXX直播违规扣罚',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/transfer-bills']->postAsync([
  'json' => [
    'sub_mchid'       => '1900000109',
    'sp_appid'        => 'wx8888888888888888',
    'business_type'   => 'DEPOSIT_COMPENSATION',
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mch_id' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'receiver_remark' => '小店XXXX直播违规扣罚',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->transferBills->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'sp_appid'        => 'wx8888888888888888',
    'business_type'   => 'DEPOSIT_COMPENSATION',
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mch_id' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'receiver_remark' => '小店XXXX直播违规扣罚',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/transfer-bills')->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'sp_appid'        => 'wx8888888888888888',
    'business_type'   => 'DEPOSIT_COMPENSATION',
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mch_id' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'receiver_remark' => '小店XXXX直播违规扣罚',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/transfer-bills']->post([
  'json' => [
    'sub_mchid'       => '1900000109',
    'sp_appid'        => 'wx8888888888888888',
    'business_type'   => 'DEPOSIT_COMPENSATION',
    'receiver'        => [
      'type'     => 'MERCHANT',
      'mch_info' => [
        'mch_id' => '1900001108',
      ],
    ],
    'out_bill_no'     => 'plfk2020042013',
    'amount'          => 10000,
    'transfer_remark' => '直播违规扣罚',
    'receiver_remark' => '小店XXXX直播违规扣罚',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| sub_mchid | string | 二级商户号
| sub_appid | string | 二级商户AppID
| business_type | string | 业务类型<br/>`DEPOSIT_COMPENSATION` \| `PLATFORM_AFTER_SALES_COMPENSATION` \| `INSURANCE_CLAIM` \| `DEPOSIT_AFTER_SALES_COMPENSATION` 枚举值之一
| receiver_detail {data-required} | object {data-tooltip="对应PHP的array"} | 转账接收方信息
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 转账接收者信息
| type {data-indent=2} | string | 转账接收方类型<br/>`MERCHANT` \| `TRANSACTION_USER` 枚举值之一
| mch_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方商户信息
| mch_id {data-indent=3} | string | 商户号
| out_bill_no {data-required} | string | 商户单号
| amount | number | 赔付金额
| transfer_remark {data-required} | string | 赔付原因
| receiver_remark | string | 收款方备注
| bill_id {data-required} | string | 微信支付转账单号
| state {data-required} | string | 赔付状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSED` \| `WAIT_USER_CONFIRM` \| `CANCELING` \| `CANCELLED` 枚举值之一
| accept_time {data-required} | string | 受理时间
| success_time | string | 成功时间
| sponsor_mchid | string | 出资商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504198)
