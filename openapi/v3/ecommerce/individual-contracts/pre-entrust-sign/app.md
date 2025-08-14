---
title: APP场景预签约
description: 商户可调用本接口预先指定签约，生成预签约会话及对应的预签约ID，再携带预签约ID（pre_entrustweb_id）参数，通过微信SDK拉起微信支付客户端的签约页面。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-indent=1} | string | 签约和付款的AppID
| out_contract_code {data-indent=1} | string | 业务申请单号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->ecommerce->individualContracts->preEntrustSign->app->postAsync([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/ecommerce/individual-contracts/pre-entrust-sign/app')->postAsync([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/ecommerce/individual-contracts/pre-entrust-sign/app']->postAsync([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->ecommerce->individualContracts->preEntrustSign->app->post([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/ecommerce/individual-contracts/pre-entrust-sign/app')->post([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/ecommerce/individual-contracts/pre-entrust-sign/app']->post([
  'json' => [
    'appid'             => 'wxd678efh567h23787',
    'out_contract_code' => 'APPLYMENT_00000000001',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pre_entrustweb_id {data-required} | string | 预签约id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015851472)
