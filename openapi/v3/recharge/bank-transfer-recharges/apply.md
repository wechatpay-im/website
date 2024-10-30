---
title: 申请银行转账充值
description: 商户系统须通过调用此接口获取银行转账账号，随后发起充值流程
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| out_recharge_no {data-indent=1} | string | 商户充值单号
| recharge_scene {data-indent=1} | string | 充值场景
| account_type {data-indent=1} | string | 充值入账账户
| recharge_amount {data-indent=1} | object | 充值金额
| amount {data-indent=2} | number | 总金额
| currency {data-indent=2} | string | 货币类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->recharge->bankTransferRecharges->apply->postAsync([
  'json' => [
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'NORMAL_BANK_TRANSFER',
    'account_type' => 'BASIC',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/recharge/bank-transfer-recharges/apply')->postAsync([
  'json' => [
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'NORMAL_BANK_TRANSFER',
    'account_type' => 'BASIC',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/recharge/bank-transfer-recharges/apply']->postAsync([
  'json' => [
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'NORMAL_BANK_TRANSFER',
    'account_type' => 'BASIC',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->recharge->bankTransferRecharges->apply->post([
  'json' => [
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'NORMAL_BANK_TRANSFER',
    'account_type' => 'BASIC',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/recharge/bank-transfer-recharges/apply')->post([
  'json' => [
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'NORMAL_BANK_TRANSFER',
    'account_type' => 'BASIC',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/recharge/bank-transfer-recharges/apply']->post([
  'json' => [
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'NORMAL_BANK_TRANSFER',
    'account_type' => 'BASIC',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| recharge_id | string | 微信支付充值单号
| out_recharge_no | string | 商户充值单号
| transfer_in_account | object | 银行账户
| bank_name {data-indent=1} | string | 开户银行名称
| bank_address_code {data-indent=1} | string | 开户银行省市编码
| bank_code {data-indent=1} | string | 开户银行行号
| bank_account_name {data-indent=1} | string | 银行账户名称
| bank_account_no {data-indent=1} | string | 银行账号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/mch-recharge/bank-recharge/bank-transfer-recharge-apply.html)
