---
title: 解除门店收款信息绑定
description: 该API接口可用于给一个特定的门店解除收款商户号。解除成功后，商户号不能再为门店收款。目前只支持解除此前收款方拒绝的收款商户号。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | integer | 微信支付商户门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| store_recipient {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 收款门店信息
| mchid {data-required data-indent=2} | string | 门店收款商户号
| company_name {data-indent=2} | string | 门店收款主体

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantStore->stores->_store_id_->recipients->unbind->postAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_recipient' => [[
      'mchid'        => '1230000109',
      'company_name' => '腾讯科技（深圳）有限公司',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-store/stores/{store_id}/recipients/unbind')->postAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_recipient' => [[
      'mchid'        => '1230000109',
      'company_name' => '腾讯科技（深圳）有限公司',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-store/stores/{store_id}/recipients/unbind']->postAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_recipient' => [[
      'mchid'        => '1230000109',
      'company_name' => '腾讯科技（深圳）有限公司',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantStore->stores->_store_id_->recipients->unbind->post([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_recipient' => [[
      'mchid'        => '1230000109',
      'company_name' => '腾讯科技（深圳）有限公司',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-store/stores/{store_id}/recipients/unbind')->post([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_recipient' => [[
      'mchid'        => '1230000109',
      'company_name' => '腾讯科技（深圳）有限公司',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-store/stores/{store_id}/recipients/unbind']->post([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'       => '1900000109',
    'store_recipient' => [[
      'mchid'        => '1230000109',
      'company_name' => '腾讯科技（深圳）有限公司',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013948580)
