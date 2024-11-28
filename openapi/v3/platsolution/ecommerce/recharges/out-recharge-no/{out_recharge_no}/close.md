---
title: 关闭二级商户充值
description: 以下情况可调用关单接口：1、商家操作超出规定时间限制，为防止重复处理。2、系统主动终止服务不再接受新的请求
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_recharge_no {data-required} | string | 商户充值单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->recharges->outRechargeNo->_out_recharge_no_->close->postAsync([
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
$instance->chain('v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close')->postAsync([
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
$instance['v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close']->postAsync([
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
$response = $instance->v3->platsolution->ecommerce->recharges->outRechargeNo->_out_recharge_no_->close->post([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close')->post([
  'out_recharge_no' => 'cz2020042013',
  'query' => [
    'sub_mchid' => '1900001121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/recharges/out-recharge-no/{out_recharge_no}/close']->post([
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
| recharge_channel | string | 充值渠道<br/>`BANK_TRANSFER` \| `QR_RECHARGE` 枚举值之一
| account_type {data-required} | string | 充值入账账户<br/>`DEPOSIT` \| `BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| recharge_state {data-required} | string | 充值状态<br/>`SUCCESS` \| `RECHARGING` \| `CLOSED` 枚举值之一
| recharge_scene {data-required} | string | 充值场景<br/>`ECOMMERCE_DEPOSIT` \| `ECOMMERCE_BANK_TRANSFER` \| `NORMAL_BANK_TRANSFER` 枚举值之一
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
| qr_recharge_info | object {data-tooltip="对应PHP的array"} | 扫码充值的付款信息
| openid {data-indent=1} | string | 用户OpenID
| employee_type {data-indent=1} | string | 员工类型<br/>`ADMIN` \| `STAFF` 枚举值之一
| accept_time | string | 受理充值时间
| success_time | string | 充值成功时间
| close_time | string | 关闭充值时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/close.html)
