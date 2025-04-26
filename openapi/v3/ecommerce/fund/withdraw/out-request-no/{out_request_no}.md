---
title: 商户提现单号查询
description: 电商平台通过查询提现状态API查询二级商户提现单的提现结果。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商户提现单号，由商户自定义生成。
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->fund->withdraw->outRequestNo->_out_request_no_->getAsync([
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
$instance->chain('v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}')->getAsync([
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
$instance['v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}']->getAsync([
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
$response = $instance->v3->ecommerce->fund->withdraw->outRequestNo->_out_request_no_->get([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}')->get([
  'out_request_no' => '20190611222222222200000000012122',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/fund/withdraw/out-request-no/{out_request_no}']->get([
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
| sub_mchid | string | 二级商户号
| sp_mchid {data-required} | string | 电商平台商户号
| status {data-required} | string | 提现单状态<br/>`CREATE_SUCCESS` \| `SUCCESS` \| `FAIL` \| `REFUND` \| `CLOSE` \| `INIT` 枚举值之一
| withdraw_id {data-required} | string | 微信支付提现单号
| out_request_no {data-required} | string | 商户提现单号
| amount {data-required} | integer | 提现金额
| create_time | string | 发起提现时间
| update_time | string | 提现状态更新时间
| reason | string | 失败原因
| remark | string | 提现备注
| bank_memo | string | 银行备注
| account_type | string | 出款账户类型<br/>`BASIC` \| `OPERATION` \| `FEES` 枚举值之一
| account_number | string | 入账银行账号后四位
| account_bank | string | 入账银行
| bank_name | string | 入账银行全称（含支行）

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476656) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012719550) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012720041) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012714699)
