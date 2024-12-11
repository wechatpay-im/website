# 添加、删除及查询小店活动门店信息 {#mix}

## 添加小店活动门店 {#post}

该接口为服务商或商户给零售小店活动添加门店专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 请求业务单据
| add_time {data-required data-indent=1} | string | 添加时间
| stores {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 待新增的小店活动门店列表
| store_code {data-indent=2} | string | 门店编码
| store_name {data-indent=2} | string | 门店名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->postAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'add_time'       => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores')->postAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'add_time'       => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores']->postAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'add_time'       => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->post([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'add_time'       => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores')->post([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'add_time'       => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores']->post([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'add_time'       => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| add_time | string | 添加时间
| failed_stores | object[] {data-tooltip="对应PHP的array"} | 添加失败的小店活动门店列表
| store_code {data-indent=1} | string | 门店编码
| store_name {data-indent=1} | string | 门店名称

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/add-stores.html)

## 删除小店活动门店 {#delete}

该接口为服务商或商户给零售小店活动删除门店专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 请求业务单据
| delete_time {data-required data-indent=1} | string | 删除时间
| stores {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 待删除的小店活动门店列表
| store_code {data-indent=2} | string | 门店编码
| store_name {data-indent=2} | string | 门店名称

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->deleteAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'delete_time'    => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores')->deleteAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'delete_time'    => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores']->deleteAsync([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'delete_time'    => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->delete([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'delete_time'    => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores')->delete([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'delete_time'    => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores']->delete([
  'brand_id' => '1001',
  'json' => [
    'out_request_no' => '1002600620019090123143254436',
    'delete_time'    => '2015-05-20T13:29:35+08:00',
    'stores'         => [[
      'store_code' => 'abc_001',
      'store_name' => '幸福小店',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| delete_time | string | 删除时间
| failed_stores | object[] {data-tooltip="对应PHP的array"} | 删除失败的小店活动门店列表
| store_code {data-indent=1} | string | 门店编码
| store_name {data-indent=1} | string | 门店名称

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/delete-stores.html)

## 查询小店活动门店列表 {#get}

该接口为服务商或商户给零售小店活动查询门店列表专用接口。 使用对象：品牌的品牌主商户号或品牌服务商。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 品牌ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| offset {data-required data-indent=1} | number | 分页页码
| limit {data-required data-indent=1} | number | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->getAsync([
  'brand_id' => '1001',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores')->getAsync([
  'brand_id' => '1001',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores']->getAsync([
  'brand_id' => '1001',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_brand_id_->stores->get([
  'brand_id' => '1001',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores')->get([
  'brand_id' => '1001',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{brand_id}/stores']->get([
  'brand_id' => '1001',
  'query' => [
    'offset' => 0,
    'limit'  => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count | number | 小店活动门店总数
| data | object[] {data-tooltip="对应PHP的array"} | 小店活动门店集合
| store_code {data-indent=1} | string | 门店编码
| store_name {data-indent=1} | string | 门店名称
| offset | number | 分页页码
| limit | number | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/list-store.html)
