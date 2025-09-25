---
title: 微信支付销提现申请单号查询提现申请单状态
description: 微信支付申请单号查询注销申请单状态,电商平台发起申请后, 电商平台调用此接口查询审批和出款进度
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id {data-required} | string | 微信支付付销提现申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->applyCancelWithdraw->applymentId->_applyment_id_->getAsync([
  'applyment_id' => 'X202410241010125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/account/apply-cancel-withdraw/applyment-id/{applyment_id}')->getAsync([
  'applyment_id' => 'X202410241010125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/account/apply-cancel-withdraw/applyment-id/{applyment_id}']->getAsync([
  'applyment_id' => 'X202410241010125346',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->account->applyCancelWithdraw->applymentId->_applyment_id_->get([
  'applyment_id' => 'X202410241010125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/apply-cancel-withdraw/applyment-id/{applyment_id}')->get([
  'applyment_id' => 'X202410241010125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/apply-cancel-withdraw/applyment-id/{applyment_id}']->get([
  'applyment_id' => 'X202410241010125346',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id | string | 微信支付注销提现申请单号
| out_request_no | string | 商户注销提现申请单号
| cancel_state | string | 注销提现申请单状态<br/>`ACCEPTED` \| `REVIEWING` \| `REJECTED` \| `WAITING_MERCHANT_CONFIRM` \| `REVOKED` \| `SYSTEM_PROCESSING` \| `CANCELED` \| `FUND_PROCESSING` \| `FINISH` 枚举值之一
| cancel_state_description | string | 注销提现申请单状态描述
| withdraw | string | 是否提取资金<br/>`APPLY_WITHDRAW` \| `NOT_APPLY_WITHDRAW` 枚举值之一
| withdraw_state | string | 提现状态<br/>`WITHDRAW_PROCESSING` \| `WITHDRAW_EXCEPTION` \| `WITHDRAW_SUCCEED` 枚举值之一
| account_withdraw_result | object[] {data-tooltip="对应PHP的array"} | 账户提现结果
| out_account_type {data-required data-indent=1} | string | 二级商户号的出款子账户类型<br/>`BASIC_ACCOUNT` \| `OPERATE_ACCOUNT` \| `MARGIN_ACCOUNT` \| `TRADE_FEE_ACCOUNT` 枚举值之一
| pay_state {data-required data-indent=1} | string | 付款状态<br/>`PAY_PROCESSING` \| `PAY_SUCCEED` \| `PAY_FAIL` \| `BANK_REFUNDED` 枚举值之一
| state_description {data-required data-indent=1} | string | 付款状态描述
| modify_time | string | 最后更新时间
| sub_mchid | string | 申请注销的二级商户号
| account_info | object[] {data-tooltip="对应PHP的array"} | 账户信息
| out_account_type {data-required data-indent=1} | string | 二级商户号的出款子账户类型<br/>`BASIC_ACCOUNT` \| `OPERATE_ACCOUNT` \| `MARGIN_ACCOUNT` \| `TRADE_FEE_ACCOUNT` 枚举值之一
| amount {data-indent=1} | integer | 账户金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013892765)
