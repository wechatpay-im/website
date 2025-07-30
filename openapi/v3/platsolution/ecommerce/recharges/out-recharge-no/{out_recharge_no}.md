---
title: 查询二级商户充值结果
description: 提交充值申请后，可调用该接口查询充值状态。充值到账存在延迟： 1、扫码充值：3分钟内到账 2、银行转账：一般可在10分钟内到账。受央行大额系统工作时间限制，周一至周四17:15-20:30，周五17:15-24:00，节假日全天会延迟到账
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_recharge_no {data-required} | string | 商户充值单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->recharges->outRechargeNo->_out_recharge_no_->getAsync([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}')->getAsync([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}']->getAsync([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->recharges->outRechargeNo->_out_recharge_no_->get([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}')->get([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}']->get([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 平台商户号
| sub_mchid {data-required} | string | 二级商户号
| recharge_id {data-required} | string | 微信支付充值单号
| out_recharge_no {data-required} | string | 商户充值单号
| recharge_channel | string | 充值渠道<br/>`BANK_TRANSFER` \| `QR_RECHARGE` \| `ONLINE_BANK` 枚举值之一
| account_type {data-required} | string | 充值入账账户<br/>`DEPOSIT` \| `OPERATION` 枚举值之一
| recharge_state {data-required} | string | 充值状态<br/>`SUCCESS` \| `RECHARGING` \| `CLOSED` 枚举值之一
| recharge_scene {data-required} | string | 充值场景<br/>`ECOMMERCE_DEPOSIT` \| `ECOMMERCE_PAYMENT` 枚举值之一
| recharge_state_desc | string | 充值状态描述
| recharge_amount {data-required} | object {data-tooltip="对应PHP的array"} | 充值金额
| amount {data-indent=1} | number | 总金额
| currency {data-indent=1} | string | 货币类型
| bank_transfer_info | object {data-tooltip="对应PHP的array"} | 转账充值的付款信息
| bill_no {data-indent=1} | string | 转入的银行流水单号
| memo {data-indent=1} | string | 转账充值附言
| return_time {data-indent=1} | string | 银行转账退回时间
| return_reason {data-indent=1} | string | 银行转账退回原因
| bank_name {data-indent=1} | string | 开户银行名称
| bank_card_tail {data-indent=1} | string | 银行卡号后四位
| bank_account_name {data-indent=1} | string | 银行账户名称
| qr_recharge_info | object {data-tooltip="对应PHP的array"} | 扫码充值的付款信息
| openid {data-indent=1} | string | 用户OpenID
| employee_type {data-indent=1} | string | 员工类型<br/>`ADMIN` \| `STAFF` 枚举值之一
| online_bank_recharge_info | object {data-tooltip="对应PHP的array"} | 网银充值的付款信息
| bill_no {data-indent=1} | string | 银行交易订单号
| return_time {data-indent=1} | string | 网银充值退回时间
| return_reason {data-indent=1} | string | 网银充值退回原因
| bank_name {data-indent=1} | string | 开户银行名称
| online_bank_type {data-indent=1} | string | 网银类型<br/>`ONLINE_BANK_TYPE_CORPORATE` \| `ONLINE_BANK_TYPE_PERSONAL` 枚举值之一
| bank_card_tail {data-indent=1} | string | 银行卡号后四位
| bank_account_name {data-indent=1} | string | 银行账户名称
| accept_time | string | 受理充值时间
| success_time | string | 充值成功时间
| close_time | string | 关闭充值时间
| available_recharge_channels | string[] | 可用充值渠道列表<br/>`BANK_TRANSFER` \| `QR_RECHARGE` \| `ONLINE_BANK` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012762874)
