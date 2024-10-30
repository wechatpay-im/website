# 添加零售小店活动业务代理 {#put}

该接口为服务商或商户给零售小店活动添加业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 零售小店活动ID
| json | object | 声明请求的`JSON`数据结构
| representative_info_list {data-indent=1} | object[] | 业务代理信息列表
| openid {data-indent=2} | string | 业务代理的OpenID
| out_request_no {data-indent=1} | string | 请求业务单据号
| add_time {data-indent=1} | string | 添加时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_activity_id_->representative->putAsync([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'add_time' => '2015-05-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative')->putAsync([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'add_time' => '2015-05-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative']->putAsync([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'add_time' => '2015-05-20T13:29:35+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_activity_id_->representative->put([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'add_time' => '2015-05-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative')->put([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'add_time' => '2015-05-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative']->put([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'add_time' => '2015-05-20T13:29:35+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 零售小店活动ID
| failed_representative_info_list | object[] | 添加失败业务代理信息列表
| openid {data-indent=1} | string | 业务代理的OpenID
| add_time | string | 添加时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-stores/add-representative.html)

# 删除零售小店活动业务代理 {#delete}

该接口为服务商或商户给零售小店活动删除业务代理的专用接口。 使用对象：活动创建方商户号、活动归属品牌的品牌主商户号或品牌经营商户号。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 零售小店活动ID
| json | object | 声明请求的`JSON`数据结构
| representative_info_list {data-indent=1} | object[] | 业务代理信息列表
| openid {data-indent=2} | string | 业务代理的OpenID
| out_request_no {data-indent=1} | string | 请求业务单据号
| delete_time {data-indent=1} | string | 删除时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_activity_id_->representative->deleteAsync([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'delete_time' => '2015-05-20T13:29:35.120+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative')->deleteAsync([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'delete_time' => '2015-05-20T13:29:35.120+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative']->deleteAsync([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'delete_time' => '2015-05-20T13:29:35.120+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->goodsSubsidyActivity->retailStoreAct->_activity_id_->representative->delete([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'delete_time' => '2015-05-20T13:29:35.120+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative')->delete([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'delete_time' => '2015-05-20T13:29:35.120+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/goods-subsidy-activity/retail-store-act/{activity_id}/representative']->delete([
  'activity_id' => '3118550000000004',
  'json' => [
    'representative_info_list' => [[
      'openid' => 'oK7fFt8zzEZ909XH-LE2#',
    ],],
    'out_request_no' => '1002600620019090123143254436',
    'delete_time' => '2015-05-20T13:29:35.120+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id | string | 零售小店活动ID
| failed_representative_info_list | object[] | 删除失败业务代理信息列表
| openid {data-indent=1} | string | 业务代理的OpenID
| delete_time | string | 删除时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/retail-store/retail-store-act/delete-representative.html)
