---
title: 查询在途异常资金付款指令执行结果
description: 发起在途异常资金付款后，可通过该接口快速查询相关指令单的流程状态。注：接口限频100次/秒。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| receipt_id {data-required} | string | 微信支付在途异常资金付款单号
| out_instruction_no {data-required} | string | 商户侧指令编号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->abnormalFundProcessing->receipts->_receipt_id_->transferInstructions->_out_instruction_no_->getAsync([
  'receipt_id' => '0100011742874700562078230000',
  'out_instruction_no' => '1200002',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions/{out_instruction_no}')->getAsync([
  'receipt_id' => '0100011742874700562078230000',
  'out_instruction_no' => '1200002',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions/{out_instruction_no}']->getAsync([
  'receipt_id' => '0100011742874700562078230000',
  'out_instruction_no' => '1200002',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->abnormalFundProcessing->receipts->_receipt_id_->transferInstructions->_out_instruction_no_->get([
  'receipt_id' => '0100011742874700562078230000',
  'out_instruction_no' => '1200002',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions/{out_instruction_no}')->get([
  'receipt_id' => '0100011742874700562078230000',
  'out_instruction_no' => '1200002',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/abnormal-fund-processing/receipts/{receipt_id}/transfer-instructions/{out_instruction_no}']->get([
  'receipt_id' => '0100011742874700562078230000',
  'out_instruction_no' => '1200002',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_instruction_no {data-required} | string | 商户侧指令编号
| commander {data-required} | object {data-tooltip="对应PHP的array"} | 在途异常资金付款指令的发起方
| operator {data-required data-indent=1} | string | 发起在途异常资金付款请求的角色<br/>`MERCHANT` 枚举值
| mchid {data-indent=1} | string | 微信支付商户号
| transfer_mode {data-required} | string | 付款方式<br/>`TRANSFER_TO_ORIGINAL_RECEIVE_USER` \| `TRANSFER_MODE_TO_ORIGINAL_RECEIVE_MERCHANT` \| `TRANSFER_MODE_TO_SPECIFIED_RECEIVE_MERCHANT` 枚举值之一
| receiver | object {data-tooltip="对应PHP的array"} | 收款方
| account_type {data-indent=1} | string | 入账账户类型
| openid {data-indent=1} | string | 入账用户OpenID
| appid {data-indent=1} | string | 商户AppID
| mchid {data-indent=1} | string | 入账商户号
| instruction_state {data-required} | string | 在途异常资金付款指令状态<br/>`INSTRUCTION_STATE_PENDING` \| `INSTRUCTION_STATE_IN_PROGRESS` \| `INSTRUCTION_STATE_CLOSED` \| `INSTRUCTION_STATE_SUCCESS` 枚举值之一
| create_time | string | 在途异常资金付款指令创建时间
| success_time | string | 入账成功时间
| close_time | string | 在途异常资金付款指令关闭时间
| notify_url {data-required} | string | 回调通知地址
| instruction_instance_id | string | 微信支付在途异常资金付款指令执行流水号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016636882)
