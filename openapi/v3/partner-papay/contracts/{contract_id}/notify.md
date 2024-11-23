---
title: 服务商商户预扣费通知
description: 商户进行委托代扣扣费前需要在可通知时间段内调用「预扣费通知」的接口为用户发送扣费提醒，并设定预计扣费金额，经过扣费等待期后，在可扣费期内可发起扣费，扣款金额不能高于预计扣费金额，扣费失败可主动发起重试扣费（重试次数由其他规则限制），直到扣费成功，或者可扣费期结束。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 委托代扣协议id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| sp_appid {data-required data-indent=1} | string | 服务商应用ID
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用D
| deduct_duration {data-indent=1} | object {data-tooltip="对应PHP的array"} | 扣费持续时间
| count {data-required data-indent=2} | number | 扣费持续时间数
| unit {data-indent=2} | string | 单位
| estimated_amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 预计扣费金额信息
| amount {data-required data-indent=2} | number | 预计扣费金额
| currency {data-indent=2} | string | 预计扣费货币类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->partnerPapay->contracts->_contract_id_->notify->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
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
$instance->chain('v3/partner-papay/contracts/{contract_id}/notify')->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
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
$instance['v3/partner-papay/contracts/{contract_id}/notify']->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
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
$response = $instance->v3->partnerPapay->contracts->_contract_id_->notify->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
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
$response = $instance->chain('v3/partner-papay/contracts/{contract_id}/notify')->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
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
$response = $instance['v3/partner-papay/contracts/{contract_id}/notify']->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
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

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/entrusted-payment/json/partner-deduct-notify.html)
