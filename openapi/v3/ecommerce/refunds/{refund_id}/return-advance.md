# 平台收付通-请求及查询垫付退款回补结果 {#mix}

## 垫付退款回补 {#post}

提交垫付退款后，发起退款方可通过该接口发起垫付退款资金回补，把退款垫付的资金从二级商户回补到电商平台账户。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信退款单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->refunds->_refund_id_->returnAdvance->postAsync([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/refunds/{refund_id}/return-advance')->postAsync([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/refunds/{refund_id}/return-advance']->postAsync([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->refunds->_refund_id_->returnAdvance->post([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/refunds/{refund_id}/return-advance')->post([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/refunds/{refund_id}/return-advance']->post([
  'refund_id' => '50000000382019052709732678859',
  'json' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信退款单号
| advance_return_id {data-required} | string | 微信回补单号
| return_amount {data-required} | integer | 垫付回补金额
| payer_mchid {data-required} | string | 出款方商户号
| payer_account {data-required} | string | 出款方账户
| payee_mchid {data-required} | string | 入账方商户号
| payee_account {data-required} | string | 入账方账户
| result {data-required} | string | 垫付回补结果
| success_time | string | 垫付回补完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012476927)

## 查询垫付回补结果 {#get}

提交垫付退款回补后，通过调用该接口查询垫付回补结果。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信退款单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->refunds->_refund_id_->returnAdvance->getAsync([
  'refund_id' => '50000000382019052709732678859',
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
$instance->chain('v3/ecommerce/refunds/{refund_id}/return-advance')->getAsync([
  'refund_id' => '50000000382019052709732678859',
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
$instance['v3/ecommerce/refunds/{refund_id}/return-advance']->getAsync([
  'refund_id' => '50000000382019052709732678859',
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
$response = $instance->v3->ecommerce->refunds->_refund_id_->returnAdvance->get([
  'refund_id' => '50000000382019052709732678859',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/refunds/{refund_id}/return-advance')->get([
  'refund_id' => '50000000382019052709732678859',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/refunds/{refund_id}/return-advance']->get([
  'refund_id' => '50000000382019052709732678859',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| refund_id {data-required} | string | 微信退款单号
| advance_return_id {data-required} | string | 微信回补单号
| return_amount {data-required} | integer | 垫付回补金额
| payer_mchid {data-required} | string | 出款方商户号
| payer_account {data-required} | string | 出款方账户
| payee_mchid {data-required} | string | 入账方商户号
| payee_account {data-required} | string | 入账方账户
| result {data-required} | string | 垫付回补结果
| success_time | string | 垫付回补完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter7_6_5.shtml) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/ecommerce-refund/refunds/query-return-advance.html)
