---
title: 查询银行转账充值结果
description: 
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_recharge_no | string | 商户充值单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->recharge->bankTransferRecharges->outRechargeNo->_out_recharge_no_->getAsync([
  'out_recharge_no' => 'cz202407181234',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}')->getAsync([
  'out_recharge_no' => 'cz202407181234',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}']->getAsync([
  'out_recharge_no' => 'cz202407181234',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->recharge->bankTransferRecharges->outRechargeNo->_out_recharge_no_->get([
  'out_recharge_no' => 'cz202407181234',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}')->get([
  'out_recharge_no' => 'cz202407181234',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/recharge/bank-transfer-recharges/out-recharge-no/{out_recharge_no}']->get([
  'out_recharge_no' => 'cz202407181234',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| mchid | string | 充值商户号
| recharge_id | string | 微信支付充值单号
| out_recharge_no | string | 商户充值单号
| account_type | string | 充值入账账户<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| recharge_state | string | 充值状态<br/>`SUCCESS` \| `RECHARGING` \| `CLOSED` 枚举值之一
| recharge_scene | string | 充值场景<br/>`ECOMMERCE_BANK_TRANSFER` 枚举值
| recharge_state_desc | string | 充值状态描述
| recharge_amount | object | 充值金额
| amount {data-indent=1} | number | 总金额
| currency {data-indent=1} | string | 货币类型
| bank_transfer_info | object | 转账充值的付款信息
| memo {data-indent=1} | string | 转账充值附言
| return_time {data-indent=1} | string | 银行转账退回时间
| return_reason {data-indent=1} | string | 银行转账退回原因
| bank_name {data-indent=1} | string | 开户银行名称
| bank_card_tail {data-indent=1} | string | 银行卡号后四位
| accept_time | string | 受理充值时间
| success_time | string | 充值成功时间
| close_time | string | 关闭充值时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-recharge/bank-recharge/bank-transfer-recharge-get-by-out-no.html)
