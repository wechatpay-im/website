---
title: 小程序场景预约扣费类型签约的预签约
description: 商户可调用本接口预先指定签约信息，生成预签约会话及对应的预签约ID，再携带预签约ID（pre_entrustweb_id）参数，通过小程序跳转参数调用navigateToMiniProgram跳转至微信支付的页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_appid {data-required data-indent=1} | string | 应用ID
| sp_openid {data-indent=1} | string | 用户在服务商商户应用下的用户标示
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sub_appid {data-indent=1} | string | 子商户的AppID
| sub_openid {data-indent=1} | string | 子商户AppID对应的用户OpenID
| plan_id {data-required data-indent=1} | number | 委托代扣模板ID
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| contract_notify_url {data-required data-indent=1} | string | 签约结果通知地址
| out_user_code {data-indent=1} | string | 商户侧用户标识
| deduct_schedule {data-indent=1} | object {data-tooltip="对应PHP的array"} | 用于预约扣费的预约信息
| estimated_deduct_date {data-required data-indent=2} | string | 预计扣费的日期
| estimated_deduct_amount {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 预计的扣费金额
| total {data-required data-indent=3} | number | 金额
| currency {data-indent=3} | string | 货币类型
| description {data-required data-indent=2} | string | 商品描述

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->papay->scheduledDeductSign->partner->contracts->preEntrustSign->miniProgram->postAsync([
  'json' => [
    'sp_appid'                 => 'wxd678efh567hg6787',
    'sp_openid'                => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'sub_mchid'                => '1900000109',
    'sub_appid'                => 'wxd678efh567hg6787',
    'sub_openid'               => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'deduct_schedule'          => [
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
      'description'             => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program')->postAsync([
  'json' => [
    'sp_appid'                 => 'wxd678efh567hg6787',
    'sp_openid'                => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'sub_mchid'                => '1900000109',
    'sub_appid'                => 'wxd678efh567hg6787',
    'sub_openid'               => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'deduct_schedule'          => [
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
      'description'             => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program']->postAsync([
  'json' => [
    'sp_appid'                 => 'wxd678efh567hg6787',
    'sp_openid'                => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'sub_mchid'                => '1900000109',
    'sub_appid'                => 'wxd678efh567hg6787',
    'sub_openid'               => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'deduct_schedule'          => [
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
      'description'             => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->papay->scheduledDeductSign->partner->contracts->preEntrustSign->miniProgram->post([
  'json' => [
    'sp_appid'                 => 'wxd678efh567hg6787',
    'sp_openid'                => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'sub_mchid'                => '1900000109',
    'sub_appid'                => 'wxd678efh567hg6787',
    'sub_openid'               => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'deduct_schedule'          => [
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
      'description'             => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program')->post([
  'json' => [
    'sp_appid'                 => 'wxd678efh567hg6787',
    'sp_openid'                => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'sub_mchid'                => '1900000109',
    'sub_appid'                => 'wxd678efh567hg6787',
    'sub_openid'               => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'deduct_schedule'          => [
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
      'description'             => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/papay/scheduled-deduct-sign/partner/contracts/pre-entrust-sign/mini-program']->post([
  'json' => [
    'sp_appid'                 => 'wxd678efh567hg6787',
    'sp_openid'                => 'oYobu0MVnQfWpSMOYJz2AHPG_gQw',
    'sub_mchid'                => '1900000109',
    'sub_appid'                => 'wxd678efh567hg6787',
    'sub_openid'               => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'contract_notify_url'      => 'https://yourapp.com/notify',
    'out_user_code'            => '用户A',
    'deduct_schedule'          => [
      'estimated_deduct_date'   => '2019-11-22',
      'estimated_deduct_amount' => [
        'total'    => 1,
        'currency' => 'CNY',
      ],
      'description'             => '小乔-碎云皮肤（微信83区沧海之耀）',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pre_entrustweb_id {data-required} | string | 预签约ID
| redirect_appid {data-required} | string | 跳转签约小程序的AppID
| redirect_path {data-required} | string | 跳转签约小程序的路径

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012693100)
