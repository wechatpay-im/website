---
title: 查询用户服务可用信息
description: 在商户生成乘车码前，商户请求查询用户服务可用信息接口，查询 用户服务可用信息，通过用户服务可用信息中的服务可用状态，来判断是否可以正常使用公共出行代扣服务
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id {data-required} | string | 签约成功后，微信返回代扣签约ID
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-indent=1} | string | 商户在微信申请公众号或移动应用成功后分配的账号ID
| sub_appid {data-indent=1} | string | 子公众账号ID
| sub_mchid {data-indent=1} | string | 微信支付分配的子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->qrcode->userServices->contractId->_contract_id_->getAsync([
  'contract_id' => 'Wx15463511252015071056489715',
  'query' => [
    'appid'     => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/qrcode/user-services/contract-id/{contract_id}')->getAsync([
  'contract_id' => 'Wx15463511252015071056489715',
  'query' => [
    'appid'     => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/qrcode/user-services/contract-id/{contract_id}']->getAsync([
  'contract_id' => 'Wx15463511252015071056489715',
  'query' => [
    'appid'     => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->qrcode->userServices->contractId->_contract_id_->get([
  'contract_id' => 'Wx15463511252015071056489715',
  'query' => [
    'appid'     => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/qrcode/user-services/contract-id/{contract_id}')->get([
  'contract_id' => 'Wx15463511252015071056489715',
  'query' => [
    'appid'     => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/qrcode/user-services/contract-id/{contract_id}']->get([
  'contract_id' => 'Wx15463511252015071056489715',
  'query' => [
    'appid'     => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165486',
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| contract_id | string | 签约成功后，微信返回代扣签约ID
| user_service_state | string | `NORMAL` \| `BLOCKED` 枚举值之一
| block_reason | string | 原因

{.im-table #response}
