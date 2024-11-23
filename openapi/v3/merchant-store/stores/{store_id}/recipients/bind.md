---
title: 绑定门店收款信息
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | integer | 微信支付商户门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户号
| store_recipient {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 收款门店信息
| mchid {data-required data-indent=2} | string | 门店收款商户号
| company_name {data-indent=2} | string | 门店收款主体

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantStore->stores->_store_id_->recipients->bind->postAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid' => '1900000109',
    'store_recipient' => [[
      'mchid' => '',
      'company_name' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-store/stores/{store_id}/recipients/bind')->postAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid' => '1900000109',
    'store_recipient' => [[
      'mchid' => '',
      'company_name' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-store/stores/{store_id}/recipients/bind']->postAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid' => '1900000109',
    'store_recipient' => [[
      'mchid' => '',
      'company_name' => '',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantStore->stores->_store_id_->recipients->bind->post([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid' => '1900000109',
    'store_recipient' => [[
      'mchid' => '',
      'company_name' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-store/stores/{store_id}/recipients/bind')->post([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid' => '1900000109',
    'store_recipient' => [[
      'mchid' => '',
      'company_name' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-store/stores/{store_id}/recipients/bind']->post([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid' => '1900000109',
    'store_recipient' => [[
      'mchid' => '',
      'company_name' => '',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| failed_store_recipient | object[] {data-tooltip="对应PHP的array"} | 收款门店信息
| mchid {data-indent=1} | string | 门店收款商户号
| failed_reason {data-indent=1} | string | 绑定当前收款信息失败的原因

{.im-table #response}

参阅 。
