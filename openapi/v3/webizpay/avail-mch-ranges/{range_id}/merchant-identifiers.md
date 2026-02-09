# 添加及列表查询商户标识 {#mix}

## 添加商户标识 {#post}

添加商户标识。该接口允许服务商向已存在的可用商户范围中添加商户标识。根据商户标识类型，可以添加统一社会信用代码或微信支付订单号，用于精确控制额度卡的可用范围。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| range_id {data-required} | string | 可用商户范围id
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| merchant_identifier {data-required data-indent=1} | string | 商户标识值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->availMchRanges->_range_id_->merchantIdentifiers->postAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'json' => [
    'sp_mchid'            => '12341234',
    'merchant_identifier' => '91110000710926094P',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers')->postAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'json' => [
    'sp_mchid'            => '12341234',
    'merchant_identifier' => '91110000710926094P',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers']->postAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'json' => [
    'sp_mchid'            => '12341234',
    'merchant_identifier' => '91110000710926094P',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->availMchRanges->_range_id_->merchantIdentifiers->post([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'json' => [
    'sp_mchid'            => '12341234',
    'merchant_identifier' => '91110000710926094P',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers')->post([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'json' => [
    'sp_mchid'            => '12341234',
    'merchant_identifier' => '91110000710926094P',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers']->post([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'json' => [
    'sp_mchid'            => '12341234',
    'merchant_identifier' => '91110000710926094P',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| range_id {data-required} | string | 可用商户范围id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017205631)

## 查询商户标识列表 {#get}

查询商户标识列表。该接口允许服务商查询指定可用商户范围内的所有商户标识。支持分页查询，便于管理大量的商户数据，了解范围内包含的具体商户信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| range_id {data-required} | string | 可用商户范围id
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| offset {data-required data-indent=1} | integer | 分页开始位置
| limit {data-required data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->availMchRanges->_range_id_->merchantIdentifiers->getAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'query' => [
    'sp_mchid' => '12341234',
    'offset'   => 0,
    'limit'    => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers')->getAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'query' => [
    'sp_mchid' => '12341234',
    'offset'   => 0,
    'limit'    => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers']->getAsync([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'query' => [
    'sp_mchid' => '12341234',
    'offset'   => 0,
    'limit'    => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->availMchRanges->_range_id_->merchantIdentifiers->get([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'query' => [
    'sp_mchid' => '12341234',
    'offset'   => 0,
    'limit'    => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers')->get([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'query' => [
    'sp_mchid' => '12341234',
    'offset'   => 0,
    'limit'    => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/avail-mch-ranges/{range_id}/merchant-identifiers']->get([
  'range_id' => '89f5123e-5ad4-4e0e-89b1-63ced0c798c5',
  'query' => [
    'sp_mchid' => '12341234',
    'offset'   => 0,
    'limit'    => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| offset {data-required} | integer | 分页开始位置
| limit {data-required} | integer | 分页大小
| count {data-required} | integer | 实际返回数量
| total_count {data-required} | integer | 总数量
| data {data-required} | string[] | 商户标识列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017205633)
