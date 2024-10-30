---
title: 直连商户预扣费通知
description: 如：若需要在3号扣费，则需要在1号将通知下发给用户，2号为用户的扣费等待期，用户可以选择等待扣费或关闭扣费服务，3号商户可正常发起扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 委托代扣协议ID
| json | object | 声明请求的`JSON`数据结构
| mchid {data-indent=1} | string | 直连商户号
| appid {data-indent=1} | string | 公众号ID
| deduct_duration {data-indent=1} | object | 扣费持续时间
| count {data-indent=2} | integer | 扣费持续时间数
| unit {data-indent=2} | string | 单位
| estimated_amount {data-indent=1} | object | 预计扣费金额信息
| amount {data-indent=2} | number | 预计扣费金额
| currency {data-indent=2} | string | 预计扣费货币类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->contracts->_contract_id_->notify->postAsync([
  'contract_id' => '',
  'json' => [
    'mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'deduct_duration' => [
      'count' => 1,
      'unit' => 'DAY',
    ],
    'estimated_amount' => [
      'amount' => 1,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/contracts/{contract_id}/notify')->postAsync([
  'contract_id' => '',
  'json' => [
    'mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'deduct_duration' => [
      'count' => 1,
      'unit' => 'DAY',
    ],
    'estimated_amount' => [
      'amount' => 1,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/contracts/{contract_id}/notify']->postAsync([
  'contract_id' => '',
  'json' => [
    'mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'deduct_duration' => [
      'count' => 1,
      'unit' => 'DAY',
    ],
    'estimated_amount' => [
      'amount' => 1,
      'currency' => 'CNY',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->contracts->_contract_id_->notify->post([
  'contract_id' => '',
  'json' => [
    'mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'deduct_duration' => [
      'count' => 1,
      'unit' => 'DAY',
    ],
    'estimated_amount' => [
      'amount' => 1,
      'currency' => 'CNY',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/papay/contracts/{contract_id}/notify')->post([
  'contract_id' => '',
  'json' => [
    'mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'deduct_duration' => [
      'count' => 1,
      'unit' => 'DAY',
    ],
    'estimated_amount' => [
      'amount' => 1,
      'currency' => 'CNY',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/papay/contracts/{contract_id}/notify']->post([
  'contract_id' => '',
  'json' => [
    'mchid' => '1230000109',
    'appid' => 'wxd678efh567hg6787',
    'deduct_duration' => [
      'count' => 1,
      'unit' => 'DAY',
    ],
    'estimated_amount' => [
      'amount' => 1,
      'currency' => 'CNY',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/json/deduct-notify.html)
