---
title: 查询二级商户按日终余额预约提现状态
description: 查询二级商户按日终余额预约提现状态。可查询90日内发起的预约提现单据，发起时间以微信支付预约提现单创建时间为准。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商户提现单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->withdraw->dayEndBalanceWithdraw->outRequestNo->_out_request_no_->getAsync([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw/out-request-no/{out_request_no}')->getAsync([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw/out-request-no/{out_request_no}']->getAsync([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->withdraw->dayEndBalanceWithdraw->outRequestNo->_out_request_no_->get([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw/out-request-no/{out_request_no}')->get([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw/out-request-no/{out_request_no}']->get([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 收付通平台商户号
| sub_mchid {data-required} | string | 特约商户号
| status {data-required} | string | 单据状态<br/>`CREATED` \| `PROCESSING` \| `FINISHED` \| `ABNORMAL` 枚举值之一
| withdraw_id {data-required} | string | 微信支付提现单号
| out_request_no {data-required} | string | 商户提现单号
| total_amount {data-required} | integer | 提现金额
| success_amount | integer | 提现成功金额
| fail_amount | integer | 提现失败金额
| refund_amount | integer | 提现退票金额
| create_time {data-required} | string | 发起提现时间
| update_time {data-required} | string | 提现状态更新时间
| reason | string | 失败原因
| remark | string | 提现备注
| bank_memo | string | 银行附言
| account_type {data-required} | string | 出款账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| account_number {data-required} | string | 入账银行账号后四位
| account_bank {data-required} | string | 入账银行
| bank_name | string | 入账银行全称（含支行）

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013328163)
