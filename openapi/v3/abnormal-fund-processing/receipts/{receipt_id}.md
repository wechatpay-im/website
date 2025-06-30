---
title: 查询在途异常资金付款结果
description: 资金交易异常未能及时完成时，可通过该接口快速查询在途异常资金付款流程状态，支持查看付款金额、入账账户、处理进度等信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| receipt_id {data-required} | string | 微信支付在途异常资金付款单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->abnormalFundProcessing->receipts->_receipt_id_->getAsync([
  'receipt_id' => '0100011742874700562078230000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/abnormal-fund-processing/receipts/{receipt_id}')->getAsync([
  'receipt_id' => '0100011742874700562078230000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/abnormal-fund-processing/receipts/{receipt_id}']->getAsync([
  'receipt_id' => '0100011742874700562078230000',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->abnormalFundProcessing->receipts->_receipt_id_->get([
  'receipt_id' => '0100011742874700562078230000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/abnormal-fund-processing/receipts/{receipt_id}')->get([
  'receipt_id' => '0100011742874700562078230000',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/abnormal-fund-processing/receipts/{receipt_id}']->get([
  'receipt_id' => '0100011742874700562078230000',
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
| transfer_mode {data-required data-indent=1} | string | 付款方式<br/>`TRANSFER_TO_ORIGINAL_RECEIVE_USER` 枚举值
| success_time {data-indent=1} | string | 入账成功时间
| appid {data-required data-indent=1} | string[] | 商户AppID
| notify_url {data-required data-indent=1} | string | 回调通知地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015408031)
