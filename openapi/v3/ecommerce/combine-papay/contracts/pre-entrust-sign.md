---
title: APP方式预签约
description: 电商服务商从外部App拉起微信客户端发起签约前，需先后台调用预签约接口完成预签约，获取pre_entrustweb_id，再拉起微信客户端；用户完成签约授权后，再返回App。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 商户APPID
| plan_id {data-required data-indent=1} | integer | 委托代扣协议模板Id
| out_contract_code {data-required data-indent=1} | string | 商户签约协议号
| contract_display_account {data-required data-indent=1} | string | 用户账户展示名称
| notify_url {data-required data-indent=1} | string | 回调通知地址
| return_app {data-indent=1} | boolean | 返回app标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->combinePapay->contracts->preEntrustSign->postAsync([
  'json' => [
    'appid'                    => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'notify_url'               => 'https://yourapp.com/notify',
    'return_app'               => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/combine-papay/contracts/pre-entrust-sign')->postAsync([
  'json' => [
    'appid'                    => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'notify_url'               => 'https://yourapp.com/notify',
    'return_app'               => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/combine-papay/contracts/pre-entrust-sign']->postAsync([
  'json' => [
    'appid'                    => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'notify_url'               => 'https://yourapp.com/notify',
    'return_app'               => true,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->combinePapay->contracts->preEntrustSign->post([
  'json' => [
    'appid'                    => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'notify_url'               => 'https://yourapp.com/notify',
    'return_app'               => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/combine-papay/contracts/pre-entrust-sign')->post([
  'json' => [
    'appid'                    => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'notify_url'               => 'https://yourapp.com/notify',
    'return_app'               => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/combine-papay/contracts/pre-entrust-sign']->post([
  'json' => [
    'appid'                    => 'wxd678efh567hg6787',
    'plan_id'                  => 12535,
    'out_contract_code'        => 'wxwtdk20200910100000',
    'contract_display_account' => '微信代扣用户A',
    'notify_url'               => 'https://yourapp.com/notify',
    'return_app'               => true,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pre_entrustweb_id {data-required} | string | 预签约Id
| mchid {data-required} | string | 商户号
| plan_id {data-required} | integer | 委托代扣协议模板Id
| out_contract_code {data-required} | string | 商户签约协议号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012881608)
