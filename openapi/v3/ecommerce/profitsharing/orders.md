# 请求分账 {#post}

微信订单支付成功后，由电商平台发起分账请求，将结算后的资金分给分账接收方。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分账单号
| receivers {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表
| type {data-required data-indent=2} | string | 分账接收方类型
| receiver_account {data-required data-indent=2} | string | 分账接收方账号
| amount {data-required data-indent=2} | integer | 分账金额
| description {data-required data-indent=2} | string | 分账描述
| finish {data-required data-indent=1} | boolean | 是否分账完成

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->profitsharing->orders->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'receiver_account' => '1900000109',
      'amount' => 190,
      'description' => '分给商户1900000109',
    ],],
    'finish' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/profitsharing/orders')->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'receiver_account' => '1900000109',
      'amount' => 190,
      'description' => '分给商户1900000109',
    ],],
    'finish' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/profitsharing/orders']->postAsync([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'receiver_account' => '1900000109',
      'amount' => 190,
      'description' => '分给商户1900000109',
    ],],
    'finish' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->profitsharing->orders->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'receiver_account' => '1900000109',
      'amount' => 190,
      'description' => '分给商户1900000109',
    ],],
    'finish' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/profitsharing/orders')->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'receiver_account' => '1900000109',
      'amount' => 190,
      'description' => '分给商户1900000109',
    ],],
    'finish' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/profitsharing/orders']->post([
  'json' => [
    'appid' => 'wx8888888888888888',
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'receiver_account' => '1900000109',
      'amount' => 190,
      'description' => '分给商户1900000109',
    ],],
    'finish' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required}| string | 二级商户号
| transaction_id {data-required}| string | 微信订单号
| out_order_no {data-required}| string | 商户分账单号
| order_id {data-required}| string | 微信分账单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_1.shtml)

# 查询分账结果 {#get}

发起分账请求后，可调用此接口查询分账结果 ;发起分账完结请求后，可调用此接口查询分账完结的结果。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分账单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->profitsharing->orders->getAsync([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
    'out_order_no' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/profitsharing/orders')->getAsync([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
    'out_order_no' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/profitsharing/orders']->getAsync([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
    'out_order_no' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->profitsharing->orders->get([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
    'out_order_no' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/profitsharing/orders')->get([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
    'out_order_no' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/profitsharing/orders']->get([
  'query' => [
    'sub_mchid' => '',
    'transaction_id' => '',
    'out_order_no' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid {data-required}| string | 二级商户号
| transaction_id {data-required}| string | 微信订单号
| out_order_no {data-required}| string | 商户分账单号
| order_id {data-required}| string | 微信分账单号
| status | string | 分账单状态
| receivers | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表
| receiver_mchid {data-required data-indent=1} | string | 分账接收商户号
| amount {data-required data-indent=1} | integer | 分账金额
| description {data-required data-indent=1} | string | 分账描述
| result {data-indent=1} | string | 分账结果
| finish_time {data-required data-indent=1} | string | 完成时间
| fail_reason {data-indent=1} | string | 分账失败原因
| type {data-required data-indent=1} | string | 分账接收方类型
| receiver_account {data-required data-indent=1} | string | 分账接收方账号
| close_reason | string | 关单原因描述，当分账单状态status为CLOSED（处理失败，已关单）时，返回该字段。
| finish_amount | integer | 分账完结的分账金额，单位为分， 仅当查询分账完结的执行结果时，存在本字段。
| finish_description | string | 分账完结的原因描述，仅当查询分账完结的执行结果时，存在本字段。

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/profitsharing/chapter3_2.shtml)
