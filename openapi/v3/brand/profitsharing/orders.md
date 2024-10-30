# 请求分账 {#post}

微信订单支付成功后，由服务商发起分账请求，将结算后的资金分给分账接收方。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| brand_mchid {data-indent=1} | string | 品牌主商户号
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| transaction_id {data-indent=1} | string | 微信订单号
| out_order_no {data-indent=1} | string | 商户分账单号
| receivers {data-indent=1} | object[] | 分账接收方列表
| type {data-indent=2} | string | 分账接收方类型
| account {data-indent=2} | string | 分账接收方账号
| amount {data-indent=2} | integer | 分账金额
| description {data-indent=2} | string | 分账描述
| name {data-indent=2} | string | 分账个人接收方姓名
| finish {data-indent=1} | boolean | 是否分账完成
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 微信支付平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->profitsharing->orders->postAsync([
  'json' => [
    'brand_mchid' => '1900000108',
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '1900000109',
      'amount' => 190,
      'description' => '1900000109分给商户1900000110',
      'name' => 'hu89ohu89ohu89o',
    ],],
    'finish' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/profitsharing/orders')->postAsync([
  'json' => [
    'brand_mchid' => '1900000108',
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '1900000109',
      'amount' => 190,
      'description' => '1900000109分给商户1900000110',
      'name' => 'hu89ohu89ohu89o',
    ],],
    'finish' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/profitsharing/orders']->postAsync([
  'json' => [
    'brand_mchid' => '1900000108',
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '1900000109',
      'amount' => 190,
      'description' => '1900000109分给商户1900000110',
      'name' => 'hu89ohu89ohu89o',
    ],],
    'finish' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->profitsharing->orders->post([
  'json' => [
    'brand_mchid' => '1900000108',
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '1900000109',
      'amount' => 190,
      'description' => '1900000109分给商户1900000110',
      'name' => 'hu89ohu89ohu89o',
    ],],
    'finish' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/profitsharing/orders')->post([
  'json' => [
    'brand_mchid' => '1900000108',
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '1900000109',
      'amount' => 190,
      'description' => '1900000109分给商户1900000110',
      'name' => 'hu89ohu89ohu89o',
    ],],
    'finish' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/profitsharing/orders']->post([
  'json' => [
    'brand_mchid' => '1900000108',
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '1900000109',
      'amount' => 190,
      'description' => '1900000109分给商户1900000110',
      'name' => 'hu89ohu89ohu89o',
    ],],
    'finish' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_mchid | string | 品牌主商户号
| sub_mchid | string | 子商户号
| transaction_id | string | 微信订单号
| out_order_no | string | 商户分账单号
| order_id | string | 微信分账单号
| receivers | object[] | 分账接收方列表
| type {data-indent=1} | string | 接收方类型
| account {data-indent=1} | string | 接收方账号
| amount {data-indent=1} | number | 分账金额
| description {data-indent=1} | string | 分账描述
| result {data-indent=1} | string | 分账结果
| finish_time {data-indent=1} | string | 分账完成时间
| fail_reason {data-indent=1} | string | 分账失败原因
| detail_id {data-indent=1} | string | 分账明细单号
| status | string | 分账单状态

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_1.shtml)

# 查询分账结果 {#get}

发起分账请求后，可调用此接口查询分账结果。发起分账完结请求后，可调用此接口查询分账完结的结果。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户号
| transaction_id {data-indent=1} | string | 微信订单号
| out_order_no {data-indent=1} | string | 商户分账单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->profitsharing->orders->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/profitsharing/orders')->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/profitsharing/orders']->getAsync([
  'query' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->profitsharing->orders->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/profitsharing/orders')->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/profitsharing/orders']->get([
  'query' => [
    'sub_mchid' => '1900000109',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| transaction_id | string | 微信订单号
| out_order_no | string | 商户分账单号
| order_id | string | 微信分账单号
| status | string | 分账单状态
| receivers | object[] | 分账接收方列表
| type {data-indent=1} | string | 分账接收方类型
| account {data-indent=1} | string | 分账接收方账号
| amount {data-indent=1} | integer | 分账金额
| description {data-indent=1} | string | 分账描述
| result {data-indent=1} | string | 分账结果
| finish_time {data-indent=1} | string | 完成时间
| fail_reason {data-indent=1} | string | 分账失败原因
| detail_id {data-indent=1} | string | 分账明细单号
| finish_amount | integer | 分账完结金额
| finish_description | string | 分账完结描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/brand/chapter3_2.shtml)