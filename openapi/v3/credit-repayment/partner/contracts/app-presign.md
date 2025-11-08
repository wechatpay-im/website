---
title: APP预签约自动还款协议
description: APP预签约
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户AppID
| plan_id {data-required data-indent=1} | string | 模板ID
| out_contract_code {data-required data-indent=1} | string | 服务商签约协议号
| display_name {data-required data-indent=1} | string | 用户展示名称
| contract_notify_url {data-required data-indent=1} | string | 签约结果通知地址
| repayment_day {data-required data-indent=1} | integer | 还款日
| repayment_amount_limit {data-required data-indent=1} | string | 还款金额上限
| sub_merchant_code {data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户AppID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->creditRepayment->partner->contracts->appPresign->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_merchant_code'      => 'example_sub_merchant_code',
    'sub_appid'              => 'example_sub_appid',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/credit-repayment/partner/contracts/app-presign')->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_merchant_code'      => 'example_sub_merchant_code',
    'sub_appid'              => 'example_sub_appid',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/credit-repayment/partner/contracts/app-presign']->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_merchant_code'      => 'example_sub_merchant_code',
    'sub_appid'              => 'example_sub_appid',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->creditRepayment->partner->contracts->appPresign->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_merchant_code'      => 'example_sub_merchant_code',
    'sub_appid'              => 'example_sub_appid',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/credit-repayment/partner/contracts/app-presign')->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_merchant_code'      => 'example_sub_merchant_code',
    'sub_appid'              => 'example_sub_appid',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/credit-repayment/partner/contracts/app-presign']->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'plan_id'                => '123',
    'out_contract_code'      => '100001256',
    'display_name'           => '*明',
    'contract_notify_url'    => 'https://pay.weixin.qq.com',
    'repayment_day'          => 1,
    'repayment_amount_limit' => '10000',
    'sub_merchant_code'      => 'example_sub_merchant_code',
    'sub_appid'              => 'example_sub_appid',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| presign_token {data-required} | string | 预签约码
| redirect_service | string | 跳转到的签约服务提供方

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016125804)
