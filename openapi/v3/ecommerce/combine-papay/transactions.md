---
title: 电商合单委托代扣支付
description: 商户可以通过该接口发起免密的合单支付
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| combine_appid {data-required data-indent=1} | string | 合单商户appid
| combine_mchid {data-required data-indent=1} | string | 合单商户号
| combine_out_trade_no {data-required data-indent=1} | string | 合单商户订单号
| contract_id {data-required data-indent=1} | string | 委托代扣协议ID
| sub_orders {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 子单信息
| mchid {data-required data-indent=2} | string | 子单商户号
| attach {data-indent=2} | string | 附加数据
| amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=3} | integer | 标价金额
| currency {data-required data-indent=3} | string | 标价币种
| out_trade_no {data-required data-indent=2} | string | 子单商户订单号
| sub_mchid {data-required data-indent=2} | string | 二级商户号
| sub_appid {data-indent=2} | string | 二级商户appid
| description {data-required data-indent=2} | string | 商品描述
| settle_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 结算信息
| profit_sharing {data-indent=3} | boolean | 是否指定分账
| subsidy_amount {data-indent=3} | integer | 补差金额

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->combinePapay->transactions->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'contract_id'          => '123124412412423431',
    'sub_orders'           => [[
      'mchid'        => '1900000109',
      'attach'       => '深圳分店',
      'amount'       => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
      'sub_appid'    => 'wxd678efh567hg6787',
      'description'  => '腾讯充值中心-QQ会员充值',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/combine-papay/transactions')->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'contract_id'          => '123124412412423431',
    'sub_orders'           => [[
      'mchid'        => '1900000109',
      'attach'       => '深圳分店',
      'amount'       => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
      'sub_appid'    => 'wxd678efh567hg6787',
      'description'  => '腾讯充值中心-QQ会员充值',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/combine-papay/transactions']->postAsync([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'contract_id'          => '123124412412423431',
    'sub_orders'           => [[
      'mchid'        => '1900000109',
      'attach'       => '深圳分店',
      'amount'       => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
      'sub_appid'    => 'wxd678efh567hg6787',
      'description'  => '腾讯充值中心-QQ会员充值',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->combinePapay->transactions->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'contract_id'          => '123124412412423431',
    'sub_orders'           => [[
      'mchid'        => '1900000109',
      'attach'       => '深圳分店',
      'amount'       => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
      'sub_appid'    => 'wxd678efh567hg6787',
      'description'  => '腾讯充值中心-QQ会员充值',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/combine-papay/transactions')->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'contract_id'          => '123124412412423431',
    'sub_orders'           => [[
      'mchid'        => '1900000109',
      'attach'       => '深圳分店',
      'amount'       => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
      'sub_appid'    => 'wxd678efh567hg6787',
      'description'  => '腾讯充值中心-QQ会员充值',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/combine-papay/transactions']->post([
  'json' => [
    'combine_appid'        => 'wxd678efh567hg6787',
    'combine_mchid'        => '1900000109',
    'combine_out_trade_no' => 'P20150806125346',
    'contract_id'          => '123124412412423431',
    'sub_orders'           => [[
      'mchid'        => '1900000109',
      'attach'       => '深圳分店',
      'amount'       => [
        'total_amount' => 100,
        'currency'     => 'CNY',
      ],
      'out_trade_no' => '20150806125346',
      'sub_mchid'    => '1900000109',
      'sub_appid'    => 'wxd678efh567hg6787',
      'description'  => '腾讯充值中心-QQ会员充值',
      'settle_info'  => [
        'profit_sharing' => true,
        'subsidy_amount' => 10,
      ],
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| combine_appid {data-required} | string | 合单商户APPID
| combine_mchid {data-required} | string | 合单商户号
| combine_out_trade_no {data-required} | string | 合单商户订单号
| sub_orders | object[] {data-tooltip="对应PHP的array"} | 子单信息
| mchid {data-required data-indent=1} | string | 子单商户号
| trade_type {data-required data-indent=1} | string | 交易类型
| trade_state {data-required data-indent=1} | string | 交易状态
| bank_type {data-indent=1} | string | 付款银行
| attach {data-indent=1} | string | 附加数据
| success_time {data-indent=1} | string | 支付完成时间
| transaction_id {data-required data-indent=1} | string | 子单微信订单号
| out_trade_no {data-required data-indent=1} | string | 子单商户订单号
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| sub_appid {data-indent=1} | string | 二级商户appid
| amount {data-indent=1} | object {data-tooltip="对应PHP的array"} | 订单金额
| total_amount {data-required data-indent=2} | integer | 标价金额
| currency {data-required data-indent=2} | string | 标价币种
| payer_amount {data-indent=2} | integer | 现金支付金额
| payer_currency {data-indent=2} | string | 现金支付币种
| combine_payer_info | object {data-tooltip="对应PHP的array"} | 支付者
| openid {data-required data-indent=1} | string | 用户标识

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012884121)
