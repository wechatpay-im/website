---
title: 请求分账
description: 微信订单支付成功后，服务商代特约商户发起分账请求，将结算后的资金分到分账接收方
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| transaction_id {data-required data-indent=1} | string | 微信订单号
| out_order_no {data-required data-indent=1} | string | 商户分账单号
| receivers {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表
| type {data-required data-indent=2} | string | 分账接收方类型
| account {data-required data-indent=2} | string | 分账接收方帐号
| name {data-indent=2} | string | 分账个人接收方姓名
| amount {data-required data-indent=2} | integer | 分账金额
| description {data-required data-indent=2} | string | 分账描述
| unfreeze_unsplit {data-required data-indent=1} | boolean | 是否解冻剩余未分资金
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->profitsharing->orders->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/profitsharing/orders')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/profitsharing/orders']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->profitsharing->orders->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/profitsharing/orders')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/profitsharing/orders']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| transaction_id {data-required}| string | 微信订单号
| out_order_no {data-required}| string | 商户分账单号
| order_id {data-required}| string | 微信分账单号
| state {data-required}| string | 分账单状态
| receivers | object[] {data-tooltip="对应PHP的array"} | 分账接收方列表
| amount {data-required data-indent=1} | integer | 分账金额
| description {data-required data-indent=1} | string | 分账描述
| type {data-required data-indent=1} | string | 分账接收方类型
| account {data-required data-indent=1} | string | 分账接收方帐号
| result {data-required data-indent=1} | string | 分账结果
| fail_reason {data-required data-indent=1} | string | 分账失败原因
| detail_id {data-indent=1} | string | 分账明细单号
| create_time {data-required data-indent=1} | string | 分账创建时间
| finish_time {data-required data-indent=1} | string | 分账完成时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter8_1_1.shtml)
