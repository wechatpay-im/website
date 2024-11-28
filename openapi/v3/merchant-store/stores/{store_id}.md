# 查询门店 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | integer | 微信支付商户门店ID
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 特约商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantStore->stores->_store_id_->getAsync([
  'store_id' => '20488000',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-store/stores/{store_id}')->getAsync([
  'store_id' => '20488000',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-store/stores/{store_id}']->getAsync([
  'store_id' => '20488000',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantStore->stores->_store_id_->get([
  'store_id' => '20488000',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-store/stores/{store_id}')->get([
  'store_id' => '20488000',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-store/stores/{store_id}']->get([
  'store_id' => '20488000',
  'query' => [
    'sub_mchid' => '1900000109',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_basics | object {data-tooltip="对应PHP的array"} | 门店基础信息
| store_reference_id {data-indent=1} | string | 商家门店编号
| brand_name {data-required data-indent=1} | string | 品牌名称
| store_name {data-required data-indent=1} | string | 门店名称
| branch_name {data-indent=1} | string | 分店名称
| store_address {data-required} | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-indent=1} | string | 门店省市编码
| address_detail {data-required data-indent=1} | string | 门店地址
| address_complements {data-indent=1} | string | 门店地址辅助描述
| longitude {data-indent=1} | string | 门店经度
| latitude {data-indent=1} | string | 门店纬度
| store_business {data-required} | object {data-tooltip="对应PHP的array"} | 门店经营信息
| service_phone {data-indent=1} | string | 门店服务电话
| business_hours {data-indent=1} | string | 门店经营时间
| store_recipient {data-required} | object[] {data-tooltip="对应PHP的array"} | 门店收款信息
| mchid {data-required data-indent=1} | string | 门店收款商户号
| company_name {data-indent=1} | string | 门店收款主体

{.im-table #response}

# 修改门店 {#patch}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | integer | 微信支付商户门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-required data-indent=1} | string | 子商户号
| store_basics {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店基础信息
| store_reference_id {data-indent=2} | string | 商家门店编号
| brand_name {data-required data-indent=2} | string | 品牌名称
| store_name {data-required data-indent=2} | string | 门店名称
| store_business {data-indent=2} | string | 分店名称
| store_address {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-indent=2} | string | 门店省市编码
| address_detail {data-required data-indent=2} | string | 门店地址
| address_complements {data-indent=2} | string | 门店地址辅助描述
| longitude {data-indent=2} | string | 门店经度
| latitude {data-indent=2} | string | 门店纬度
| store_business {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店经营信息
| service_phone {data-indent=2} | string | 门店服务电话
| business_hours {data-indent=2} | string | 门店经营时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantStore->stores->_store_id_->patchAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'      => '1900000109',
    'store_basics'   => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'store_business'     => '',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-store/stores/{store_id}')->patchAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'      => '1900000109',
    'store_basics'   => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'store_business'     => '',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-store/stores/{store_id}']->patchAsync([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'      => '1900000109',
    'store_basics'   => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'store_business'     => '',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantStore->stores->_store_id_->patch([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'      => '1900000109',
    'store_basics'   => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'store_business'     => '',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-store/stores/{store_id}')->patch([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'      => '1900000109',
    'store_basics'   => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'store_business'     => '',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/merchant-store/stores/{store_id}']->patch([
  'store_id' => '20488000',
  'json' => [
    'sub_mchid'      => '1900000109',
    'store_basics'   => [
      'store_reference_id' => '',
      'brand_name'         => '',
      'store_name'         => '',
      'store_business'     => '',
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '',
      'address_complements' => '',
      'longitude'           => '',
      'latitude'            => '',
    ],
    'store_business' => [
      'service_phone'  => '0755-86013388',
      'business_hours' => '周一至周五 09:00-20:00|周六至周日 10:00-22:00',
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}
