# 创建先享后付订单 {#post}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| service_id {data-required data-indent=1} | string | 服务ID
| service_start_time {data-indent=1} | string | 
| service_end_time {data-indent=1} | string | 
| service_start_location {data-indent=1} | string | 
| service_end_location {data-indent=1} | string | 
| service_introduction {data-indent=1} | string | 
| fees {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 
| fee_name {data-indent=2} | string | 
| fee_count {data-indent=2} | integer | 
| fee_amount {data-indent=2} | integer | 
| fee_desc {data-indent=2} | string | 
| discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 
| discount_name {data-indent=2} | string | 优惠名称
| discount_desc {data-indent=2} | string | 优惠说明
| risk_amount {data-indent=1} | integer | 
| attach {data-indent=1} | string | 
| need_user_confirm {data-indent=1} | boolean | 
| openid {data-indent=1} | string | 
| name {data-indent=1} | string | 
| phone {data-indent=1} | string | 
| userid {data-indent=1} | string | 
| address {data-indent=1} | string | 
| headers | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->payafterOrders->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '500001',
    'service_start_time' => '',
    'service_end_time' => '',
    'service_start_location' => '',
    'service_end_location' => '',
    'service_introduction' => '',
    'fees' => [[
      'fee_name' => '',
      'fee_count' => 0,
      'fee_amount' => 0,
      'fee_desc' => '',
    ],],
    'discounts' => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount' => 0,
    'attach' => '',
    'need_user_confirm' => true,
    'openid' => '',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/payafter-orders')->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '500001',
    'service_start_time' => '',
    'service_end_time' => '',
    'service_start_location' => '',
    'service_end_location' => '',
    'service_introduction' => '',
    'fees' => [[
      'fee_name' => '',
      'fee_count' => 0,
      'fee_amount' => 0,
      'fee_desc' => '',
    ],],
    'discounts' => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount' => 0,
    'attach' => '',
    'need_user_confirm' => true,
    'openid' => '',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/payafter-orders']->postAsync([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '500001',
    'service_start_time' => '',
    'service_end_time' => '',
    'service_start_location' => '',
    'service_end_location' => '',
    'service_introduction' => '',
    'fees' => [[
      'fee_name' => '',
      'fee_count' => 0,
      'fee_amount' => 0,
      'fee_desc' => '',
    ],],
    'discounts' => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount' => 0,
    'attach' => '',
    'need_user_confirm' => true,
    'openid' => '',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->payafterOrders->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '500001',
    'service_start_time' => '',
    'service_end_time' => '',
    'service_start_location' => '',
    'service_end_location' => '',
    'service_introduction' => '',
    'fees' => [[
      'fee_name' => '',
      'fee_count' => 0,
      'fee_amount' => 0,
      'fee_desc' => '',
    ],],
    'discounts' => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount' => 0,
    'attach' => '',
    'need_user_confirm' => true,
    'openid' => '',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/payafter-orders')->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '500001',
    'service_start_time' => '',
    'service_end_time' => '',
    'service_start_location' => '',
    'service_end_location' => '',
    'service_introduction' => '',
    'fees' => [[
      'fee_name' => '',
      'fee_count' => 0,
      'fee_amount' => 0,
      'fee_desc' => '',
    ],],
    'discounts' => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount' => 0,
    'attach' => '',
    'need_user_confirm' => true,
    'openid' => '',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/payafter-orders']->post([
  'json' => [
    'appid' => 'wxd678efh567hg6787',
    'out_order_no' => '1234323JKHDFE1243252',
    'service_id' => '500001',
    'service_start_time' => '',
    'service_end_time' => '',
    'service_start_location' => '',
    'service_end_location' => '',
    'service_introduction' => '',
    'fees' => [[
      'fee_name' => '',
      'fee_count' => 0,
      'fee_amount' => 0,
      'fee_desc' => '',
    ],],
    'discounts' => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount' => 0,
    'attach' => '',
    'need_user_confirm' => true,
    'openid' => '',
    'name' => '',
    'phone' => '',
    'userid' => '',
    'address' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 公众账号ID
| mchid | string | 
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| order_id | string | 
| miniprogram_businesstype | string | 
| miniprogram_appid | string | 
| miniprogram_path | string | 
| miniprogram_username | string | 
| package | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_1&index=3)

# 查询先享后付订单 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| service_id {data-indent=1} | string | 
| out_order_no {data-indent=1} | string | 
| query_id {data-indent=1} | string | 
| appid {data-indent=1} | string | 

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->payafterOrders->getAsync([
  'query' => [
    'service_id' => '',
    'out_order_no' => '',
    'query_id' => '',
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/payafter-orders')->getAsync([
  'query' => [
    'service_id' => '',
    'out_order_no' => '',
    'query_id' => '',
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/payafter-orders']->getAsync([
  'query' => [
    'service_id' => '',
    'out_order_no' => '',
    'query_id' => '',
    'appid' => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->payafterOrders->get([
  'query' => [
    'service_id' => '',
    'out_order_no' => '',
    'query_id' => '',
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/payafter-orders')->get([
  'query' => [
    'service_id' => '',
    'out_order_no' => '',
    'query_id' => '',
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/payafter-orders']->get([
  'query' => [
    'service_id' => '',
    'out_order_no' => '',
    'query_id' => '',
    'appid' => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 公众账号ID
| mchid | string | 
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| state | string | `CREATED` \| `USER_ACCEPTED` \| `FINISHED` \| `USER_PAID` \| `REVOKED` \| `EXPIRED` 枚举值之一
| finish_type | integer | 
| service_start_time | string | 
| service_end_time | string | 
| real_service_start_time | string | 
| real_service_end_time | string | 
| pay_succ_time | string | 
| service_start_location | string | 
| service_end_location | string | 
| real_service_start_location | string | 
| real_service_end_location | string | 
| service_introduction | string | 
| fees | object[] {data-tooltip="对应PHP的array"} | 
| fee_name {data-indent=1} | string | 
| fee_count {data-indent=1} | integer | 
| fee_amount {data-indent=1} | integer | 
| fee_desc {data-indent=1} | string | 
| discounts | object[] {data-tooltip="对应PHP的array"} | 
| discount_name {data-indent=1} | string | 优惠名称
| discount_amount {data-indent=1} | integer | 
| discount_desc {data-indent=1} | string | 优惠说明
| risk_amount | integer | 
| total_amount | integer | 
| attach | string | 
| finish_ticket | string | 
| finish_transaction_id | string | 
| pay_type | string | 

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=17_2&index=4)
