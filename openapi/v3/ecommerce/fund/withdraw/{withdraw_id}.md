---
title: 微信支付提现单号查询
description: 电商平台通过该接口查询其提现结果
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| withdraw_id | string | 微信支付提现单号
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->fund->withdraw->_withdraw_id_->getAsync([
  'withdraw_id' => '1232193719823791273913279173',
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
$instance->chain('v3/ecommerce/fund/withdraw/{withdraw_id}')->getAsync([
  'withdraw_id' => '1232193719823791273913279173',
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
$instance['v3/ecommerce/fund/withdraw/{withdraw_id}']->getAsync([
  'withdraw_id' => '1232193719823791273913279173',
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
$response = $instance->v3->ecommerce->fund->withdraw->_withdraw_id_->get([
  'withdraw_id' => '1232193719823791273913279173',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/fund/withdraw/{withdraw_id}')->get([
  'withdraw_id' => '1232193719823791273913279173',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/fund/withdraw/{withdraw_id}']->get([
  'withdraw_id' => '1232193719823791273913279173',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| sp_mchid | string | 电商平台商户号
| status | string | 提现单状态
| withdraw_id | string | 微信支付提现单号
| out_request_no | string | 商户提现单号
| amount | integer | 提现金额
| create_time | string | 发起提现时间
| update_time | string | 提现状态更新时间
| reason | string | 失败原因
| remark | string | 提现备注
| bank_memo | string | 银行备注
| account_type | string | 出款账户类型
| account_number | string | 入账银行账号后四位
| account_bank | string | 入账银行
| bank_name | string | 入账银行全称（含支行）

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter4_1_23.shtml) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/fund/chapter3_3.shtml)
