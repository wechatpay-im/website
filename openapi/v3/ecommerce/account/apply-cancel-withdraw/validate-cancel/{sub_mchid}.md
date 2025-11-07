---
title: 商户注销资格校验
description: 电商平台发起注销提现申请前，可通过该接口判断商户是否满足注销条件
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 申请注销的二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->applyCancelWithdraw->validateCancel->_sub_mchid_->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/account/apply-cancel-withdraw/validate-cancel/{sub_mchid}')->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/account/apply-cancel-withdraw/validate-cancel/{sub_mchid}']->getAsync([
  'sub_mchid' => '1900000109',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->account->applyCancelWithdraw->validateCancel->_sub_mchid_->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/apply-cancel-withdraw/validate-cancel/{sub_mchid}')->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/apply-cancel-withdraw/validate-cancel/{sub_mchid}']->get([
  'sub_mchid' => '1900000109',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required} | string | 注销检查的二级商户号
| merchant_state {data-required} | string | 注销提现申请单状态<br/>`NORMAL` \| `HAS_BEEN_CANCELLED` 枚举值之一
| validate_result {data-required} | string | 注销资格检查结果<br/>`ALLOW_CANCEL_WITHDRAW` \| `NOT_ALLOW_CANCEL_WITHDRAW` 枚举值之一
| account_info {data-required} | object[] {data-tooltip="对应PHP的array"} | 账户信息
| out_account_type {data-required data-indent=1} | string | 商户资金账户余额<br/>`BASIC_ACCOUNT` \| `OPERATE_ACCOUNT` \| `MARGIN_ACCOUNT` \| `TRADE_FEE_ACCOUNT` 枚举值之一
| amount {data-required data-indent=1} | integer | 账户金额
| block_reasons | object[] {data-tooltip="对应PHP的array"} | 不可发起注销原因
| type {data-indent=1} | string | 二级商户号的出款子账户类型<br/>`CONSUMER_COMPLAINT_UNPROCESSED` \| `HAS_BLOCKING_CONTROL` \| `FUNDS_PENDING_PROCESSING` \| `OTHER_REASON` 枚举值之一
| description {data-indent=1} | string | 原因描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016420099)
