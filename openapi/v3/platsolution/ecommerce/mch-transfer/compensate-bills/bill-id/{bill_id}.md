---
title: 查询赔付结果（按微信支付赔付单号）
description: 微信支付单号查询赔付记录。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| bill_id {data-required} | string | 微信支付单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->mchTransfer->compensateBills->billId->_bill_id_->getAsync([
  'bill_id' => '1330000071100999991182020050700019480001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/mch-transfer/compensate-bills/bill-id/{bill_id}')->getAsync([
  'bill_id' => '1330000071100999991182020050700019480001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/mch-transfer/compensate-bills/bill-id/{bill_id}']->getAsync([
  'bill_id' => '1330000071100999991182020050700019480001',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->mchTransfer->compensateBills->billId->_bill_id_->get([
  'bill_id' => '1330000071100999991182020050700019480001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/mch-transfer/compensate-bills/bill-id/{bill_id}')->get([
  'bill_id' => '1330000071100999991182020050700019480001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/mch-transfer/compensate-bills/bill-id/{bill_id}']->get([
  'bill_id' => '1330000071100999991182020050700019480001',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| receiver_detail {data-required} | object {data-tooltip="对应PHP的array"} | 转账接收方信息
| receiver {data-indent=1} | object {data-tooltip="对应PHP的array"} | 转账接收者信息
| type {data-indent=2} | string | 转账接收方类型<br/>`MERCHANT` \| `TRANSACTION_USER` 枚举值之一
| transaction_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 转账接收方订单信息
| transaction_id {data-required data-indent=3} | string | 交易订单号
| out_bill_no {data-required} | string | 商户单号
| amount | number | 赔付金额
| transfer_remark | string | 赔付原因
| bill_id {data-required} | string | 微信支付转账单号
| state {data-required} | string | 赔付状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSED` \| `WAIT_USER_CONFIRM` \| `CANCELING` \| `CANCELLED` 枚举值之一
| accept_time {data-required} | string | 受理时间
| success_time | string | 成功时间
| close_info | object {data-tooltip="对应PHP的array"} | 关单信息
| close_time {data-indent=1} | string | 关单时间
| close_reason {data-indent=1} | string | 关单原因
| sponsor_mchid | string | 出资商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013504179)
