---
title: App场景预约扣费类型签约的预签约
description: 商户可调用本接口预先指定签约信息，生成预签约会话及对应的预签约ID，再携带预签约ID（pre_entrustweb_id）参数，通过微信SDK拉起微信支付客户端的签约页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 应用ID
| openid {data-indent=1} | string | 用户在直连商户应用下的用户标示
| plan_id {data-indent=1} | number | 委托代扣模板ID
| out_contract_code {data-indent=1} | string | 商户签约协议号
| contract_display_account {data-indent=1} | string | 用户账户展示名称
| contract_notify_url {data-indent=1} | string | 签约结果通知地址
| out_user_code {data-indent=1} | string | 商户侧用户标识
| deduct_schedule {data-indent=1} | object | 用于预约扣费的预约信息
| estimated_deduct_date {data-indent=2} | string | 预计扣费的日期
| estimated_deduct_amount {data-indent=2} | object | 预计的扣费金额
| total {data-indent=3} | number | 金额
| currency {data-indent=3} | string | 货币类型
| description {data-indent=2} | string | 商品描述

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->scheduledDeductSign->contracts->preEntrustSign->app->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'openid' => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url' => 'https://yourapp.com/notify',
    'out_user_code' => '用户A',
    'deduct_schedule' => [
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
      'description' => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app')->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'openid' => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url' => 'https://yourapp.com/notify',
    'out_user_code' => '用户A',
    'deduct_schedule' => [
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
      'description' => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app']->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'openid' => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url' => 'https://yourapp.com/notify',
    'out_user_code' => '用户A',
    'deduct_schedule' => [
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
      'description' => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->scheduledDeductSign->contracts->preEntrustSign->app->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'openid' => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url' => 'https://yourapp.com/notify',
    'out_user_code' => '用户A',
    'deduct_schedule' => [
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
      'description' => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app')->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'openid' => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url' => 'https://yourapp.com/notify',
    'out_user_code' => '用户A',
    'deduct_schedule' => [
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
      'description' => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/scheduled-deduct-sign/contracts/pre-entrust-sign/app']->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'openid' => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'plan_id' => 12535,
    'out_contract_code' => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url' => 'https://yourapp.com/notify',
    'out_user_code' => '用户A',
    'deduct_schedule' => [
      'estimated_deduct_date' => '2019-11-22',
      'estimated_deduct_amount' => [
        'total' => 1,
        'currency' => 'CNY',
      ],
      'description' => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pre_entrustweb_id | string | 预签约ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/entrusted-payment/normal/normal-app-scheduled-deduct-pre-sign.html)