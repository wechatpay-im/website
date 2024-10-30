---
title: 申请二级商户充值
description: 商户系统须通过调用此接口获取充值链接，随后发起充值流程
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 二级商户号
| out_recharge_no {data-indent=1} | string | 商户充值单号
| recharge_scene {data-indent=1} | string | 充值场景
| account_type {data-indent=1} | string | 充值入账账户
| recharge_amount {data-indent=1} | object | 充值金额
| amount {data-indent=2} | number | 总金额
| currency {data-indent=2} | string | 货币类型
| notify_url {data-indent=1} | string | 商户回调地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->platsolution->ecommerce->recharges->apply->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'ECOMMERCE_DEPOSIT',
    'account_type' => 'DEPOSIT',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/platsolution/ecommerce/recharges/apply')->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'ECOMMERCE_DEPOSIT',
    'account_type' => 'DEPOSIT',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/platsolution/ecommerce/recharges/apply']->postAsync([
  'json' => [
    'sub_mchid' => '1900001109',
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'ECOMMERCE_DEPOSIT',
    'account_type' => 'DEPOSIT',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->platsolution->ecommerce->recharges->apply->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'ECOMMERCE_DEPOSIT',
    'account_type' => 'DEPOSIT',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/platsolution/ecommerce/recharges/apply')->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'ECOMMERCE_DEPOSIT',
    'account_type' => 'DEPOSIT',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/platsolution/ecommerce/recharges/apply']->post([
  'json' => [
    'sub_mchid' => '1900001109',
    'out_recharge_no' => 'cz202407181234',
    'recharge_scene' => 'ECOMMERCE_DEPOSIT',
    'account_type' => 'DEPOSIT',
    'recharge_amount' => [
      'amount' => 500000,
      'currency' => 'CNY',
    ],
    'notify_url' => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| recharge_id | string | 微信支付充值单号
| out_recharge_no | string | 商户充值单号
| recharge_url | string | 充值链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/platsolution-mch-recharge/recharge/apply.html)