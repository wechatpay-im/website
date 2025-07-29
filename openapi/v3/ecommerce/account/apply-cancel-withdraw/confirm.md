---
title: 平台代商户确认注销
description: 电商平台发起申请后, 单据为待商户确认注销状态时，通过该接口代替商户执行确认操作
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| applyment_id {data-indent=1} | string | 微信支付注销单号
| out_request_no {data-indent=1} | string | 商户注销申请单号
| sub_mchid {data-required data-indent=1} | string | 二级商户号
| confirm_time {data-required data-indent=1} | string | 注销确认时间
| cancel_contract_version {data-required data-indent=1} | string | 注销协议版本号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->account->applyCancelWithdraw->confirm->postAsync([
  'json' => [
    'applyment_id'            => 'X202410241010125346',
    'out_request_no'          => 'P202410241010125346',
    'sub_mchid'               => '1900000109',
    'confirm_time'            => '2015-05-20T13:29:35.120+08:00',
    'cancel_contract_version' => 'V20241213',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/account/apply-cancel-withdraw/confirm')->postAsync([
  'json' => [
    'applyment_id'            => 'X202410241010125346',
    'out_request_no'          => 'P202410241010125346',
    'sub_mchid'               => '1900000109',
    'confirm_time'            => '2015-05-20T13:29:35.120+08:00',
    'cancel_contract_version' => 'V20241213',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/account/apply-cancel-withdraw/confirm']->postAsync([
  'json' => [
    'applyment_id'            => 'X202410241010125346',
    'out_request_no'          => 'P202410241010125346',
    'sub_mchid'               => '1900000109',
    'confirm_time'            => '2015-05-20T13:29:35.120+08:00',
    'cancel_contract_version' => 'V20241213',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->account->applyCancelWithdraw->confirm->post([
  'json' => [
    'applyment_id'            => 'X202410241010125346',
    'out_request_no'          => 'P202410241010125346',
    'sub_mchid'               => '1900000109',
    'confirm_time'            => '2015-05-20T13:29:35.120+08:00',
    'cancel_contract_version' => 'V20241213',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/account/apply-cancel-withdraw/confirm')->post([
  'json' => [
    'applyment_id'            => 'X202410241010125346',
    'out_request_no'          => 'P202410241010125346',
    'sub_mchid'               => '1900000109',
    'confirm_time'            => '2015-05-20T13:29:35.120+08:00',
    'cancel_contract_version' => 'V20241213',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/account/apply-cancel-withdraw/confirm']->post([
  'json' => [
    'applyment_id'            => 'X202410241010125346',
    'out_request_no'          => 'P202410241010125346',
    'sub_mchid'               => '1900000109',
    'confirm_time'            => '2015-05-20T13:29:35.120+08:00',
    'cancel_contract_version' => 'V20241213',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| applyment_id | string | 微信支付注销单号
| out_request_no | string | 商户注销申请单号
| sub_mchid | string | 二级商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013892772)
