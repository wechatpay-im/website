---
title: 删除商户标识
description: 删除商户标识。该接口允许服务商从已存在的可用商户范围中删除商户标识。当某个商户标识不再需要被包含在范围内时，可以通过此接口进行移除操作。
---

# {{ $frontmatter.title }} {#delete}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| range_id {data-required} | string | 可用商户范围id
| merchant_identifier {data-required} | string | 商户标识值
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->availMchRanges->_range_id_->merchantIdentifiers->_merchant_identifier_->deleteAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'merchant_identifier' => '91110000710926094P',
  'json' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers/{merchant_identifier}')->deleteAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'merchant_identifier' => '91110000710926094P',
  'json' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers/{merchant_identifier}']->deleteAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'merchant_identifier' => '91110000710926094P',
  'json' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->availMchRanges->_range_id_->merchantIdentifiers->_merchant_identifier_->delete([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'merchant_identifier' => '91110000710926094P',
  'json' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers/{merchant_identifier}')->delete([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'merchant_identifier' => '91110000710926094P',
  'json' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers/{merchant_identifier}']->delete([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'merchant_identifier' => '91110000710926094P',
  'json' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| range_id {data-required} | string | 可用商户范围id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017205637)
