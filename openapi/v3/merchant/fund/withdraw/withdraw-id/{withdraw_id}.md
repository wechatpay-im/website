---
title: 电商平台(微信支付提现单号)查询提现状态
description: 电商平台通过该接口查询其提现结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| withdraw_id | string | 微信支付提现单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchant->fund->withdraw->withdrawId->_withdraw_id_->getAsync([
  'withdraw_id' => '12321937198237912739132791732123',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant/fund/withdraw/withdraw-id/{withdraw_id}')->getAsync([
  'withdraw_id' => '12321937198237912739132791732123',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant/fund/withdraw/withdraw-id/{withdraw_id}']->getAsync([
  'withdraw_id' => '12321937198237912739132791732123',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchant->fund->withdraw->withdrawId->_withdraw_id_->get([
  'withdraw_id' => '12321937198237912739132791732123',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant/fund/withdraw/withdraw-id/{withdraw_id}')->get([
  'withdraw_id' => '12321937198237912739132791732123',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant/fund/withdraw/withdraw-id/{withdraw_id}']->get([
  'withdraw_id' => '12321937198237912739132791732123',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| status | string | 提现单状态
| withdraw_id | string | 微信支付提现单号
| out_request_no | string | 商户提现单号
| amount | integer | 提现金额
| create_time | string | 发起提现时间
| update_time | string | 提现状态更新时间
| reason | string | 失败原因
| remark | string | 提现备注
| bank_memo | string | 银行附言
| account_type | string | 出款账户类型
| solution | string | 提现失败解决方案

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_6.shtml)
