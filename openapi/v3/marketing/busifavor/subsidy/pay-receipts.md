# 营销补差付款 {#post}

给核销了商家券的商户做营销资金补差

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| stock_id {data-indent=1} | string | 商家券批次号
| coupon_code {data-indent=1} | string | 商家券Code
| transaction_id {data-indent=1} | string | 微信支付订单号
| payer_merchant {data-indent=1} | string | 营销补差扣款商户号
| payee_merchant {data-indent=1} | string | 营销补差入账商户号
| amount {data-indent=1} | integer | 补差付款金额
| description {data-indent=1} | string | 补差付款描述
| out_subsidy_no {data-indent=1} | string | 业务请求唯一单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->subsidy->payReceipts->postAsync([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/subsidy/pay-receipts')->postAsync([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/subsidy/pay-receipts']->postAsync([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->subsidy->payReceipts->post([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/subsidy/pay-receipts')->post([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/subsidy/pay-receipts']->post([
  'json' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'transaction_id' => '4200000913202101152566792388',
    'payer_merchant' => '1900000001',
    'payee_merchant' => '1900000002',
    'amount' => 100,
    'description' => '20210115DESCRIPTION',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| subsidy_receipt_id | string | 补差付款单号
| stock_id | string | 商家券批次号
| coupon_code | string | 商家券Code
| transaction_id | string | 微信支付订单号
| payer_merchant | string | 营销补差扣款商户号
| payee_merchant | string | 营销补差入账商户号
| amount | integer | 补差付款金额
| description | string | 补差付款描述
| status | string | 补差付款单据状态
| fail_reason | string | 补差付款失败原因
| success_time | string | 补差付款完成时间
| out_subsidy_no | string | 业务请求唯一单号
| create_time | string | 补差付款发起时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_16.shtml)

# 查询营销补差付款单列表 {#get}

查询商家券营销补差付款单列表

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| stock_id {data-indent=1} | string | 商家券批次号
| coupon_code {data-indent=1} | string | 商家券Code
| out_subsidy_no {data-indent=1} | string | 补差付款请求单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->subsidy->payReceipts->getAsync([
  'query' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/subsidy/pay-receipts')->getAsync([
  'query' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/subsidy/pay-receipts']->getAsync([
  'query' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->subsidy->payReceipts->get([
  'query' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/subsidy/pay-receipts')->get([
  'query' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/subsidy/pay-receipts']->get([
  'query' => [
    'stock_id' => '128888000000001',
    'coupon_code' => 'ABCD12345678',
    'out_subsidy_no' => 'subsidy-abcd-12345678',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pay_receipt_list | object[] | 补差付款单据列表
| subsidy_receipt_id {data-indent=1} | string | 补差付款单号
| stock_id {data-indent=1} | string | 商家券批次号
| coupon_code {data-indent=1} | string | 商家券Code
| transaction_id {data-indent=1} | string | 微信支付订单号
| payer_merchant {data-indent=1} | string | 营销补差扣款商户号
| payee_merchant {data-indent=1} | string | 营销补差入账商户号
| amount {data-indent=1} | integer | 补差付款金额
| description {data-indent=1} | string | 补差付款描述
| status {data-indent=1} | string | 补差付款单据状态
| fail_reason {data-indent=1} | string | 补差付款失败原因
| success_time {data-indent=1} | string | 补差付款完成时间
| out_subsidy_no {data-indent=1} | string | 业务请求唯一单号
| create_time {data-indent=1} | string | 补差付款发起时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_19.shtml)
