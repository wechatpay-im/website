# 请求售后服务分账 {#post}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| transaction_id {data-indent=1} | string | 微信订单号
| amount {data-indent=1} | integer | 回退金额
| type {data-indent=1} | string | 类型
| scene {data-indent=1} | string | 场景
| refund_id {data-indent=1} | string | 微信退款单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->profitsharing->afterSalesOrders->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '3008450740201411110007820472',
    'amount' => 10,
    'type' => 'SERVICE_FEE_INCOME',
    'scene' => 'REFUND_TICKET',
    'refund_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/profitsharing/after-sales-orders')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '3008450740201411110007820472',
    'amount' => 10,
    'type' => 'SERVICE_FEE_INCOME',
    'scene' => 'REFUND_TICKET',
    'refund_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/profitsharing/after-sales-orders']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '3008450740201411110007820472',
    'amount' => 10,
    'type' => 'SERVICE_FEE_INCOME',
    'scene' => 'REFUND_TICKET',
    'refund_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->profitsharing->afterSalesOrders->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '3008450740201411110007820472',
    'amount' => 10,
    'type' => 'SERVICE_FEE_INCOME',
    'scene' => 'REFUND_TICKET',
    'refund_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/profitsharing/after-sales-orders')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '3008450740201411110007820472',
    'amount' => 10,
    'type' => 'SERVICE_FEE_INCOME',
    'scene' => 'REFUND_TICKET',
    'refund_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/profitsharing/after-sales-orders']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '3008450740201411110007820472',
    'amount' => 10,
    'type' => 'SERVICE_FEE_INCOME',
    'scene' => 'REFUND_TICKET',
    'refund_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| transaction_id | string | 微信订单号
| amount | integer | 分账金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html)

# 查询售后服务分账结果 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 二级商户号
| transaction_id {data-indent=1} | string | 微信订单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->profitsharing->afterSalesOrders->getAsync([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/profitsharing/after-sales-orders')->getAsync([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/profitsharing/after-sales-orders']->getAsync([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->profitsharing->afterSalesOrders->get([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/profitsharing/after-sales-orders')->get([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/profitsharing/after-sales-orders']->get([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 二级商户号
| transaction_id | string | 微信分账单号
| amount | integer | 分账金额
| result | string | 分账结果
| fail_reason | string | 分账失败原因
| finish_time | string | 分账完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/products/ecommerce/introduction.html)