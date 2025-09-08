---
title: 绑定收款商户号
description: 给品牌门店绑定收款商户号。绑定成功后，商户号可为门店收款。一个门店目前最多只能绑定三个收款商户号。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | string | 品牌门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| mchid {data-required data-indent=1} | string | 门店收款商户号
| company_name {data-required data-indent=1} | string | 门店收款主体

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->store->brandstores->_store_id_->bindrecipient->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id'     => '123456789',
    'mchid'        => '1230000109',
    'company_name' => '腾讯科技（深圳）有限公司',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/store/brandstores/{store_id}/bindrecipient')->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id'     => '123456789',
    'mchid'        => '1230000109',
    'company_name' => '腾讯科技（深圳）有限公司',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/store/brandstores/{store_id}/bindrecipient']->postAsync([
  'store_id' => '20488000',
  'json' => [
    'brand_id'     => '123456789',
    'mchid'        => '1230000109',
    'company_name' => '腾讯科技（深圳）有限公司',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->store->brandstores->_store_id_->bindrecipient->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id'     => '123456789',
    'mchid'        => '1230000109',
    'company_name' => '腾讯科技（深圳）有限公司',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/store/brandstores/{store_id}/bindrecipient')->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id'     => '123456789',
    'mchid'        => '1230000109',
    'company_name' => '腾讯科技（深圳）有限公司',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/store/brandstores/{store_id}/bindrecipient']->post([
  'store_id' => '20488000',
  'json' => [
    'brand_id'     => '123456789',
    'mchid'        => '1230000109',
    'company_name' => '腾讯科技（深圳）有限公司',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id | string | 品牌ID
| store_id | string | 品牌门店ID
| mchid | string | 门店收款商户号
| company_name | string | 门店收款主体
| recipient_state | string | 收款绑定状态<br/>`CONFIRMED` \| `ADMIN_REJECTED` \| `CONFIRMING` \| `TIMEOUT_REJECTED` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015783177)
