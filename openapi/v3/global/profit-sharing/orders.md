---
title: 请求分账
description: 微信订单支付成功后，商户发起分账请求，将结算后的资金分到分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| transaction_id {data-indent=1} | string | 微信订单号
| out_order_no {data-indent=1} | string | 商户分账单号
| receivers {data-indent=1} | object[] | 分账接收方列表
| currency {data-indent=2} | string | 分账币种
| type {data-indent=2} | string | 分账接收方类型
| account {data-indent=2} | string | 分账接收方帐号
| name {data-indent=2} | string | 分账个人接收方姓名
| authorized {data-indent=2} | boolean | 是否已经获取用户实名信息授权
| amount {data-indent=2} | integer | 分账金额
| description {data-indent=2} | string | 分账描述
| unfreeze_unsplit {data-indent=1} | boolean | 是否解冻剩余未分资金

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->orders->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'currency' => 'CNY',
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'authorized' => true,
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/orders')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'currency' => 'CNY',
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'authorized' => true,
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/orders']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'currency' => 'CNY',
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'authorized' => true,
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->orders->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'currency' => 'CNY',
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'authorized' => true,
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/orders')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'currency' => 'CNY',
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'authorized' => true,
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/orders']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'transaction_id' => '4208450740201411110007820472',
    'out_order_no' => 'P20150806125346',
    'receivers' => [[
      'currency' => 'CNY',
      'type' => 'MERCHANT_ID',
      'account' => '86693852',
      'name' => 'hu89ohu89ohu89o',
      'authorized' => true,
      'amount' => 888,
      'description' => '分给商户A',
    ],],
    'unfreeze_unsplit' => true,
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
| state | string | 分账单状态
| receivers | object[] | 分账接收方列表
| currency {data-indent=1} | string | 分账币种
| amount {data-indent=1} | integer | 分账金额
| description {data-indent=1} | string | 分账描述
| type {data-indent=1} | string | 分账接收方类型
| account {data-indent=1} | string | 分账接收方帐号
| result {data-indent=1} | string | 分账结果
| fail_reason {data-indent=1} | string | 分账失败原因
| create_time {data-indent=1} | string | 分账创建时间
| finish_time {data-indent=1} | string | 分账完成时间
| detail_id {data-indent=1} | string | 分账明细单号
| detail_type {data-indent=1} | string | 分账明细类型
| settlement_currency {data-indent=1} | string | 出资方结算币种
| settlement_amount {data-indent=1} | integer | 出资方结算金额
| rate {data-indent=1} | integer | 汇率值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_2.shtml)
