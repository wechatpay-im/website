---
title: 二级商户按日终余额预约提现
description: 二级商户按日终余额预约提现API帮助二级商户发起基本户提现。提现金额按前一天日终余额计算，当前余额少于前一天日终余额时退化为按当前余额计算（请求参数需额外设置该选项）。预计当日到账，具体以实际银行处理为准。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 特约商户号
| out_request_no {data-required data-indent=1} | string | 商户提现单号
| calculate_amount_type {data-required data-indent=1} | string | 计算提现金额方式<br/>`ONLY_DAY_END_BALANCE` \| `ALLOW_CURRENT_BALANCE` 枚举值之一
| remark {data-indent=1} | string | 提现备注
| bank_memo {data-indent=1} | string | 银行附言
| notify_url {data-indent=1} | string | 提现结果通知地址
| reserve_amount {data-indent=1} | integer | 留存额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->withdraw->dayEndBalanceWithdraw->postAsync([
  'json' => [
    'sub_mchid'             => '1900000109',
    'out_request_no'        => '20190611222222222200000000012122',
    'calculate_amount_type' => 'ONLY_DAY_END_BALANCE',
    'remark'                => '交易提现',
    'bank_memo'             => '微信支付提现',
    'notify_url'            => 'https://yourapp.com/notify',
    'reserve_amount'        => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw')->postAsync([
  'json' => [
    'sub_mchid'             => '1900000109',
    'out_request_no'        => '20190611222222222200000000012122',
    'calculate_amount_type' => 'ONLY_DAY_END_BALANCE',
    'remark'                => '交易提现',
    'bank_memo'             => '微信支付提现',
    'notify_url'            => 'https://yourapp.com/notify',
    'reserve_amount'        => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw']->postAsync([
  'json' => [
    'sub_mchid'             => '1900000109',
    'out_request_no'        => '20190611222222222200000000012122',
    'calculate_amount_type' => 'ONLY_DAY_END_BALANCE',
    'remark'                => '交易提现',
    'bank_memo'             => '微信支付提现',
    'notify_url'            => 'https://yourapp.com/notify',
    'reserve_amount'        => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->withdraw->dayEndBalanceWithdraw->post([
  'json' => [
    'sub_mchid'             => '1900000109',
    'out_request_no'        => '20190611222222222200000000012122',
    'calculate_amount_type' => 'ONLY_DAY_END_BALANCE',
    'remark'                => '交易提现',
    'bank_memo'             => '微信支付提现',
    'notify_url'            => 'https://yourapp.com/notify',
    'reserve_amount'        => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw')->post([
  'json' => [
    'sub_mchid'             => '1900000109',
    'out_request_no'        => '20190611222222222200000000012122',
    'calculate_amount_type' => 'ONLY_DAY_END_BALANCE',
    'remark'                => '交易提现',
    'bank_memo'             => '微信支付提现',
    'notify_url'            => 'https://yourapp.com/notify',
    'reserve_amount'        => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/withdraw/day-end-balance-withdraw']->post([
  'json' => [
    'sub_mchid'             => '1900000109',
    'out_request_no'        => '20190611222222222200000000012122',
    'calculate_amount_type' => 'ONLY_DAY_END_BALANCE',
    'remark'                => '交易提现',
    'bank_memo'             => '微信支付提现',
    'notify_url'            => 'https://yourapp.com/notify',
    'reserve_amount'        => 100,
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013328143)
