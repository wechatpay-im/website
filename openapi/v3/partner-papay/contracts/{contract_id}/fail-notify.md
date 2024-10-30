---
title: 服务商商户重试扣费通知
description: 若在可扣费期内扣费失败，商户在可通知时间段可以选择性调用「重试扣费通知」接口，提醒用户补足余额待下次扣费。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 委托代扣协议id
| json | object | 声明请求的`JSON`数据结构
| sp_mchid {data-indent=1} | string | 服务商商户号
| sp_appid {data-indent=1} | string | 服务商应用ID
| sub_mchid {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户应用D

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->partnerPapay->contracts->_contract_id_->failNotify->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/partner-papay/contracts/{contract_id}/fail-notify')->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/partner-papay/contracts/{contract_id}/fail-notify']->postAsync([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->partnerPapay->contracts->_contract_id_->failNotify->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/partner-papay/contracts/{contract_id}/fail-notify')->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/partner-papay/contracts/{contract_id}/fail-notify']->post([
  'contract_id' => '123124412412423431',
  'json' => [
    'sp_mchid' => '1230000109',
    'sp_appid' => 'wxd678efh567hg6787',
    'sub_mchid' => '12345512',
    'sub_appid' => 'wxd678efh567hg6787',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_16.shtml)
