# 创建智慧零售订单 {#post}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| service_id {data-required data-indent=1} | string | 服务ID
| service_start_time {data-indent=1} | string | 实际服务开始时间
| service_end_time {data-indent=1} | string | 服务结束时间
| service_start_location {data-indent=1} | string | 开始使用服务的地点
| service_end_location {data-indent=1} | string | 预计服务结束的地点
| service_introduction {data-indent=1} | string | 服务信息，用于介绍本订单所提供的服务
| fees {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费，描述付费项目列表
| fee_name {data-indent=2} | string | 付费项目名称
| fee_count {data-indent=2} | integer | 付费项目数量
| fee_amount {data-indent=2} | integer | 付费项目总金额
| fee_desc {data-indent=2} | string | 描述计费规则
| discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户优惠，最多包含5条商户优惠
| discount_name {data-indent=2} | string | 优惠名称
| discount_desc {data-indent=2} | string | 优惠说明
| risk_amount {data-indent=1} | integer | 订单风险金额
| attach {data-indent=1} | string | 商户自定义说明,可存放本订单所需信息
| need_user_confirm {data-indent=1} | boolean | 使用需用户确认订单类型
| openid {data-indent=1} | string | 微信用户在商户对应appid下的唯一标识

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->smartretailOrders->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'out_order_no'           => '1234323JKHDFE1243252',
    'service_id'             => '500001',
    'service_start_time'     => '',
    'service_end_time'       => '',
    'service_start_location' => '',
    'service_end_location'   => '',
    'service_introduction'   => '',
    'fees'                   => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'              => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount'            => 0,
    'attach'                 => '',
    'need_user_confirm'      => true,
    'openid'                 => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/smartretail-orders')->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'out_order_no'           => '1234323JKHDFE1243252',
    'service_id'             => '500001',
    'service_start_time'     => '',
    'service_end_time'       => '',
    'service_start_location' => '',
    'service_end_location'   => '',
    'service_introduction'   => '',
    'fees'                   => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'              => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount'            => 0,
    'attach'                 => '',
    'need_user_confirm'      => true,
    'openid'                 => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/smartretail-orders']->postAsync([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'out_order_no'           => '1234323JKHDFE1243252',
    'service_id'             => '500001',
    'service_start_time'     => '',
    'service_end_time'       => '',
    'service_start_location' => '',
    'service_end_location'   => '',
    'service_introduction'   => '',
    'fees'                   => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'              => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount'            => 0,
    'attach'                 => '',
    'need_user_confirm'      => true,
    'openid'                 => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->smartretailOrders->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'out_order_no'           => '1234323JKHDFE1243252',
    'service_id'             => '500001',
    'service_start_time'     => '',
    'service_end_time'       => '',
    'service_start_location' => '',
    'service_end_location'   => '',
    'service_introduction'   => '',
    'fees'                   => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'              => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount'            => 0,
    'attach'                 => '',
    'need_user_confirm'      => true,
    'openid'                 => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/smartretail-orders')->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'out_order_no'           => '1234323JKHDFE1243252',
    'service_id'             => '500001',
    'service_start_time'     => '',
    'service_end_time'       => '',
    'service_start_location' => '',
    'service_end_location'   => '',
    'service_introduction'   => '',
    'fees'                   => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'              => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount'            => 0,
    'attach'                 => '',
    'need_user_confirm'      => true,
    'openid'                 => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/smartretail-orders']->post([
  'json' => [
    'appid'                  => 'wxd678efh567hg6787',
    'out_order_no'           => '1234323JKHDFE1243252',
    'service_id'             => '500001',
    'service_start_time'     => '',
    'service_end_time'       => '',
    'service_start_location' => '',
    'service_end_location'   => '',
    'service_introduction'   => '',
    'fees'                   => [[
      'fee_name'   => '',
      'fee_count'  => 0,
      'fee_amount' => 0,
      'fee_desc'   => '',
    ],],
    'discounts'              => [[
      'discount_name' => '满20减1元',
      'discount_desc' => '不与其他优惠叠加',
    ],],
    'risk_amount'            => 0,
    'attach'                 => '',
    'need_user_confirm'      => true,
    'openid'                 => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 公众账号ID
| mchid | string | 商户号
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| order_id | string | 微信支付服务订单号
| miniprogram_businesstype | string | 小程序跳转businessType
| miniprogram_appid | string | 小程序跳转appid，在商户小程序跳转到微信侧小程序流程需要用到
| miniprogram_path | string | 小程序跳转路径
| miniprogram_username | string | 小程序跳转username，在商户APP跳转微信侧小程序流程需要用到
| package | string | 用于跳转到微信侧小程序订单数据,跳转到微信侧小程序传入

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_1&index=3)

# 查询智慧零售订单 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| service_id {data-indent=1} | string | 服务ID
| out_order_no {data-indent=1} | string | 商户服务订单号
| query_id {data-indent=1} | string | 回跳查询ID
| appid {data-indent=1} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->smartretailOrders->getAsync([
  'query' => [
    'service_id'   => '',
    'out_order_no' => '',
    'query_id'     => '',
    'appid'        => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/smartretail-orders')->getAsync([
  'query' => [
    'service_id'   => '',
    'out_order_no' => '',
    'query_id'     => '',
    'appid'        => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/smartretail-orders']->getAsync([
  'query' => [
    'service_id'   => '',
    'out_order_no' => '',
    'query_id'     => '',
    'appid'        => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->smartretailOrders->get([
  'query' => [
    'service_id'   => '',
    'out_order_no' => '',
    'query_id'     => '',
    'appid'        => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/smartretail-orders')->get([
  'query' => [
    'service_id'   => '',
    'out_order_no' => '',
    'query_id'     => '',
    'appid'        => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/smartretail-orders']->get([
  'query' => [
    'service_id'   => '',
    'out_order_no' => '',
    'query_id'     => '',
    'appid'        => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid | string | 公众账号ID
| mchid | string | 商户号
| out_order_no | string | 商户服务订单号
| service_id | string | 服务ID
| state | string | `CREATED` \| `USER_ACCEPTED` \| `FINISHED` \| `USER_PAID` \| `REVOKED` \| `EXPIRED` 枚举值之一
| finish_type | integer | 标识用户订单使用情况<br/>`1` \| `2` 枚举值之一
| service_start_time | string | 服务开始时间
| service_end_time | string | 服务结束时间
| real_service_start_time | string | 实际服务开始时间
| real_service_end_time | string | 实际服务结束时间
| pay_succ_time | string | 支付完成时间
| service_start_location | string | 开始使用服务的地点
| service_end_location | string | 预计服务结束的地点
| real_service_start_location | string | 开始使用服务的地点
| real_service_end_location | string | 预计服务结束的地点
| service_introduction | string | 服务信息，用于介绍本订单所提供的服务
| fees | object[] {data-tooltip="对应PHP的array"} | 后付费，描述付费项目列表
| fee_name {data-indent=1} | string | 付费项目名称
| fee_count {data-indent=1} | integer | 付费项目数量
| fee_amount {data-indent=1} | integer | 付费项目总金额
| fee_desc {data-indent=1} | string | 描述计费规则
| discounts | object[] {data-tooltip="对应PHP的array"} | 商户优惠，最多包含5条商户优惠
| discount_name {data-indent=1} | string | 优惠名称
| discount_amount {data-indent=1} | integer | 商品优惠金额
| discount_desc {data-indent=1} | string | 优惠说明
| risk_amount | integer | 订单风险金额
| total_amount | integer | 总金额(大于等于0的数字，单位为分)
| attach | string | 商户自定义说明,可存放本订单所需信息
| finish_ticket | string | 用于完结订单时传入,确保订单完结时数据完整
| finish_transaction_id | string | 结单交易单号
| pay_type | string | 支付方式<br/>`MchChannelPayType` 枚举值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/payscore.php?chapter=14_2&index=4)
