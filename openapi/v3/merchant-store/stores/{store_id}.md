# 管理连锁品牌门店信息 {#mix}

## 查询门店 {#get}

查询品牌门店

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
| brand_name {data-indent=1} | string | 品牌名称
| store_name {data-required data-indent=1} | string | 门店名称
| branch_name {data-indent=1} | string | 分店名称
| brand_id {data-indent=1} | number | 品牌ID
| store_address | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-required data-indent=1} | string | 门店省市编码
| address_detail {data-required data-indent=1} | string | 门店地址
| address_complements {data-indent=1} | string | 门店地址辅助描述
| longitude {data-indent=1} | string | 门店经度
| latitude {data-indent=1} | string | 门店纬度
| store_business | object {data-tooltip="对应PHP的array"} | 门店经营信息
| service_phone {data-indent=1} | string | 门店服务电话
| business_hours {data-indent=1} | string | 门店经营时间
| store_recipient | object[] {data-tooltip="对应PHP的array"} | 门店收款信息
| mchid {data-required data-indent=1} | string | 门店收款商户号
| company_name {data-indent=1} | string | 门店收款主体
| store_state | object {data-tooltip="对应PHP的array"} | 门店状态
| store_state_message {data-indent=1} | string | 门店状态描述
| address_failed_reason {data-indent=1} | string | 地址核实失败原因
| store_state_value {data-indent=1} | string | STORE_STATE_VALID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013948577)

## 修改门店 {#patch}

更新品牌门店信息

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| store_id {data-required} | integer | 微信支付商户门店ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| store_basics {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店基础信息
| store_reference_id {data-indent=2} | string | 商家门店编号
| brand_name {data-indent=2} | string | 品牌名称
| store_name {data-required data-indent=2} | string | 门店名称
| branch_name {data-indent=2} | string | 分店名称
| brand_id {data-indent=2} | number | 品牌ID
| store_address {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店地址信息
| address_code {data-required data-indent=2} | string | 门店省市编码
| address_detail {data-required data-indent=2} | string | 门店地址
| address_complements {data-indent=2} | string | 门店地址辅助描述
| longitude {data-indent=2} | string | 门店经度
| latitude {data-indent=2} | string | 门店纬度
| store_business {data-indent=1} | object {data-tooltip="对应PHP的array"} | 门店经营信息
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
      'store_reference_id' => 'MDL001',
      'brand_name'         => '麦当劳',
      'store_name'         => '麦当劳',
      'branch_name'        => '海岸城店',
      'brand_id'           => 1001,
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
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
      'store_reference_id' => 'MDL001',
      'brand_name'         => '麦当劳',
      'store_name'         => '麦当劳',
      'branch_name'        => '海岸城店',
      'brand_id'           => 1001,
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
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
      'store_reference_id' => 'MDL001',
      'brand_name'         => '麦当劳',
      'store_name'         => '麦当劳',
      'branch_name'        => '海岸城店',
      'brand_id'           => 1001,
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
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
      'store_reference_id' => 'MDL001',
      'brand_name'         => '麦当劳',
      'store_name'         => '麦当劳',
      'branch_name'        => '海岸城店',
      'brand_id'           => 1001,
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
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
      'store_reference_id' => 'MDL001',
      'brand_name'         => '麦当劳',
      'store_name'         => '麦当劳',
      'branch_name'        => '海岸城店',
      'brand_id'           => 1001,
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
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
      'store_reference_id' => 'MDL001',
      'brand_name'         => '麦当劳',
      'store_name'         => '麦当劳',
      'branch_name'        => '海岸城店',
      'brand_id'           => 1001,
    ],
    'store_address'  => [
      'address_code'        => '440305',
      'address_detail'      => '深南大道10000号腾讯大厦1楼',
      'address_complements' => '地铁A口右侧100米',
      'longitude'           => '112.63484',
      'latitude'            => '37.75464',
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013948551)
