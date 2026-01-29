---
title: 发起在途异常资金付款指令
description: 商户有在途异常资金时，可以通过该接口发起在途异常资金付款，转付给符合条件的接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| receipt_id {data-required} | string | 微信支付在途异常资金付款单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_instruction_no {data-required data-indent=1} | string | 商户侧指令编号
| transfer_mode {data-required data-indent=1} | string | 付款方式<br/>`TRANSFER_TO_ORIGINAL_RECEIVE_USER` \| `TRANSFER_MODE_TO_ORIGINAL_RECEIVE_MERCHANT` \| `TRANSFER_MODE_TO_SPECIFIED_RECEIVE_MERCHANT` 枚举值之一
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 收款方
| mchid {data-indent=2} | string | 入账商户号
| notify_url {data-indent=1} | string | 回调通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->abnormalFundProcessing->receipts->_receipt_id_->transferInstructions->postAsync([
  'receipt_id' => '0100011742874700562078230000',
  'json' => [
    'out_instruction_no' => '1200002',
    'transfer_mode'      => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'receiver'           => [
      'mchid' => '1900001108',
    ],
    'notify_url'         => 'https://weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions')->postAsync([
  'receipt_id' => '0100011742874700562078230000',
  'json' => [
    'out_instruction_no' => '1200002',
    'transfer_mode'      => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'receiver'           => [
      'mchid' => '1900001108',
    ],
    'notify_url'         => 'https://weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions']->postAsync([
  'receipt_id' => '0100011742874700562078230000',
  'json' => [
    'out_instruction_no' => '1200002',
    'transfer_mode'      => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'receiver'           => [
      'mchid' => '1900001108',
    ],
    'notify_url'         => 'https://weixin.qq.com',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->abnormalFundProcessing->receipts->_receipt_id_->transferInstructions->post([
  'receipt_id' => '0100011742874700562078230000',
  'json' => [
    'out_instruction_no' => '1200002',
    'transfer_mode'      => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'receiver'           => [
      'mchid' => '1900001108',
    ],
    'notify_url'         => 'https://weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions')->post([
  'receipt_id' => '0100011742874700562078230000',
  'json' => [
    'out_instruction_no' => '1200002',
    'transfer_mode'      => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'receiver'           => [
      'mchid' => '1900001108',
    ],
    'notify_url'         => 'https://weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions']->post([
  'receipt_id' => '0100011742874700562078230000',
  'json' => [
    'out_instruction_no' => '1200002',
    'transfer_mode'      => 'TRANSFER_TO_ORIGINAL_RECEIVE_USER',
    'receiver'           => [
      'mchid' => '1900001108',
    ],
    'notify_url'         => 'https://weixin.qq.com',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_name {data-required} | string | 产品名称<br/>`C2C` 枚举值
| receipt_id {data-required} | string | 微信支付在途异常资金付款单号
| transfer_amount {data-required} | object {data-tooltip="对应PHP的array"} | 付款金额信息
| total {data-required data-indent=1} | integer | 总金额
| currency {data-required data-indent=1} | string | 货币类型<br/>`CNY` 枚举值
| receipt_state {data-required} | string | 在途异常资金付款状态<br/>`RECEIPT_STATE_PENDING` \| `RECEIPT_STATE_PROGRESS` \| `RECEIPT_STATE_COMPLETED` 枚举值之一
| create_time | string | 在途异常资金付款单据创建时间
| last_update_time | string | 在途异常资金付款单据更新时间
| instruction | object {data-tooltip="对应PHP的array"} | 在途异常资金付款指令信息
| out_instruction_no {data-required data-indent=1} | string | 商户侧指令编号
| commander {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 在途异常资金付款指令的发起方
| operator {data-required data-indent=2} | string | 发起在途异常资金付款请求的角色<br/>`MERCHANT` 枚举值
| mchid {data-required data-indent=2} | string | 微信支付商户号
| transfer_mode {data-required data-indent=1} | string | 付款方式<br/>`TRANSFER_TO_ORIGINAL_RECEIVE_USER` \| `TRANSFER_MODE_TO_ORIGINAL_RECEIVE_MERCHANT` \| `TRANSFER_MODE_TO_SPECIFIED_RECEIVE_MERCHANT` 枚举值之一
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 收款方
| mchid {data-indent=2} | string | 入账商户号
| instruction_state {data-indent=1} | string | 在途异常资金付款指令状态<br/>`INSTRUCTION_STATE_PENDING` \| `INSTRUCTION_STATE_IN_PROGRESS` \| `INSTRUCTION_STATE_CLOSED` \| `INSTRUCTION_STATE_SUCCESS` 枚举值之一
| create_time {data-indent=1} | string | 在途异常资金付款单据创建时间
| success_time {data-indent=1} | string | 入账成功时间
| notify_url {data-required data-indent=1} | string | 回调通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015408022)
