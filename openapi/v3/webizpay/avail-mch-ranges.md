# 创建及列表查询可用商户范围 {#mix}

## 创建可用商户范围 {#post}

创建可用商户范围。该接口允许服务商创建新的可用商户范围，用于限制额度卡的可用商户范围。服务商可以根据业务需要创建基于统一社会信用代码或微信支付订单号的商户范围，便于管理不同场景下的额度卡使用限制。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sp_mchid {data-required data-indent=1} | string | 服务商商户号
| identifier_type {data-required data-indent=1} | string | 商户标识类型<br/>`ORGANIZATION_CODE` \| `TRANSACTION_ID` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->availMchRanges->postAsync([
  'json' => [
    'sp_mchid'        => '12341234',
    'identifier_type' => 'ORGANIZATION_CODE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/avail-mch-ranges')->postAsync([
  'json' => [
    'sp_mchid'        => '12341234',
    'identifier_type' => 'ORGANIZATION_CODE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/avail-mch-ranges']->postAsync([
  'json' => [
    'sp_mchid'        => '12341234',
    'identifier_type' => 'ORGANIZATION_CODE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->availMchRanges->post([
  'json' => [
    'sp_mchid'        => '12341234',
    'identifier_type' => 'ORGANIZATION_CODE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/avail-mch-ranges')->post([
  'json' => [
    'sp_mchid'        => '12341234',
    'identifier_type' => 'ORGANIZATION_CODE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/avail-mch-ranges']->post([
  'json' => [
    'sp_mchid'        => '12341234',
    'identifier_type' => 'ORGANIZATION_CODE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| range_id {data-required} | string | 可用商户范围id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017205621)

## 查询可用商户范围列表 {#get}

查询可用商户范围列表。该接口允许服务商查询已创建的所有可用商户范围ID列表。通过此接口可以获取服务商下所有的可用商户范围，便于后续的范围管理和额度卡配置。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sp_mchid {data-required data-indent=1} | string | 服务商商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->webizpay->availMchRanges->getAsync([
  'query' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/webizpay/avail-mch-ranges')->getAsync([
  'query' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/webizpay/avail-mch-ranges']->getAsync([
  'query' => [
    'sp_mchid' => '12341234',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->webizpay->availMchRanges->get([
  'query' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/webizpay/avail-mch-ranges')->get([
  'query' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/webizpay/avail-mch-ranges']->get([
  'query' => [
    'sp_mchid' => '12341234',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sp_mchid {data-required} | string | 服务商商户号
| range_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 可用商户范围列表
| range_id {data-indent=1} | string | 可用商户范围id
| identifier_type {data-indent=1} | string | 商户标识类型<br/>`ORGANIZATION_CODE` \| `TRANSACTION_ID` 枚举值之一

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017205627)
