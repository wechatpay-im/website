---
title: 发起公益捐赠
description: 服务商商户可通过此接口发起公益捐赠 接口返回的HTTP状态码及错误码，仅代表本次请求的结果，不能代表订单状态。接口返回的HTTP状态码为200，且状态为ACCEPT时，可认为发起公益捐赠。接口返回的HTTP状态码不为200时，请商户务必不要立即更换商户订单单号重试。注：单个商户的接口频率限制为100次/s
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_budget_no {data-required data-indent=1} | string | 商户预算单号
| out_transfer_no {data-required data-indent=1} | string | 商户公益捐赠单号
| transaction_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 关联的交易单号
| transaction_type {data-required data-indent=2} | string | 订单类型<br/>`WXPAY` 枚举值
| transaction_id {data-required data-indent=2} | string | 订单号
| sponsor_mchid {data-required data-indent=1} | string | 出资商户号
| receive_mchid {data-required data-indent=1} | string | 收款商户号
| amount {data-required data-indent=1} | number | 预算总金额
| transfer_remark {data-required data-indent=1} | string | 捐赠备注

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->charityTransferBills->postAsync([
  'json' => [
    'out_budget_no'    => 'budget202506300102',
    'out_transfer_no'  => 'trans202506300102',
    'transaction_info' => [
      'transaction_type' => 'WXPAY',
      'transaction_id'   => '4217752501201407033233368018',
    ],
    'sponsor_mchid'    => '1900001109',
    'receive_mchid'    => '1900001109',
    'amount'           => 20000000,
    'transfer_remark'  => '帮助受助群体爱心捐款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/charity-transfer-bills')->postAsync([
  'json' => [
    'out_budget_no'    => 'budget202506300102',
    'out_transfer_no'  => 'trans202506300102',
    'transaction_info' => [
      'transaction_type' => 'WXPAY',
      'transaction_id'   => '4217752501201407033233368018',
    ],
    'sponsor_mchid'    => '1900001109',
    'receive_mchid'    => '1900001109',
    'amount'           => 20000000,
    'transfer_remark'  => '帮助受助群体爱心捐款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/charity-transfer-bills']->postAsync([
  'json' => [
    'out_budget_no'    => 'budget202506300102',
    'out_transfer_no'  => 'trans202506300102',
    'transaction_info' => [
      'transaction_type' => 'WXPAY',
      'transaction_id'   => '4217752501201407033233368018',
    ],
    'sponsor_mchid'    => '1900001109',
    'receive_mchid'    => '1900001109',
    'amount'           => 20000000,
    'transfer_remark'  => '帮助受助群体爱心捐款',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->charityTransferBills->post([
  'json' => [
    'out_budget_no'    => 'budget202506300102',
    'out_transfer_no'  => 'trans202506300102',
    'transaction_info' => [
      'transaction_type' => 'WXPAY',
      'transaction_id'   => '4217752501201407033233368018',
    ],
    'sponsor_mchid'    => '1900001109',
    'receive_mchid'    => '1900001109',
    'amount'           => 20000000,
    'transfer_remark'  => '帮助受助群体爱心捐款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/charity-transfer-bills')->post([
  'json' => [
    'out_budget_no'    => 'budget202506300102',
    'out_transfer_no'  => 'trans202506300102',
    'transaction_info' => [
      'transaction_type' => 'WXPAY',
      'transaction_id'   => '4217752501201407033233368018',
    ],
    'sponsor_mchid'    => '1900001109',
    'receive_mchid'    => '1900001109',
    'amount'           => 20000000,
    'transfer_remark'  => '帮助受助群体爱心捐款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/charity-transfer-bills']->post([
  'json' => [
    'out_budget_no'    => 'budget202506300102',
    'out_transfer_no'  => 'trans202506300102',
    'transaction_info' => [
      'transaction_type' => 'WXPAY',
      'transaction_id'   => '4217752501201407033233368018',
    ],
    'sponsor_mchid'    => '1900001109',
    'receive_mchid'    => '1900001109',
    'amount'           => 20000000,
    'transfer_remark'  => '帮助受助群体爱心捐款',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| budget_id {data-required} | string | 微信支付预算单号
| out_transfer_no {data-required} | string | 商户公益捐赠单号
| transfer_id {data-required} | string | 微信支付公益捐赠单号
| amount {data-required} | number | 预算总金额
| transfer_remark {data-required} | string | 捐赠备注
| receive_mchid {data-required} | string | 收款商户号
| state {data-required} | string | 捐赠状态<br/>`ACCEPTED` \| `SUCCESS` \| `CLOSE` 枚举值之一
| create_time {data-required} | string | 捐赠单创建时间
| success_time | string | 捐赠完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015554841)
