# 发放代金券 {#post}

商户平台/API完成制券后，可使用发放代金券接口发券。通过调用此接口可发放指定批次给指定用户，发券场景可以是小程序、H5、APP等。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户openid
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_id {data-required data-indent=1} | string | 批次号
| out_request_no {data-required data-indent=1} | string | 商户单据号
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号
| coupon_value {data-indent=1} | integer | 指定面额发券，面额
| coupon_minimum {data-indent=1} | integer | 指定面额发券，券门槛

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->users->_openid_->coupons->postAsync([
  'openid' => '',
  'json' => [
    'stock_id'            => '9856000',
    'out_request_no'      => '89560002019101000121',
    'appid'               => 'wx233544546545989',
    'stock_creator_mchid' => '8956000',
    'coupon_value'        => 100,
    'coupon_minimum'      => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/users/{openid}/coupons')->postAsync([
  'openid' => '',
  'json' => [
    'stock_id'            => '9856000',
    'out_request_no'      => '89560002019101000121',
    'appid'               => 'wx233544546545989',
    'stock_creator_mchid' => '8956000',
    'coupon_value'        => 100,
    'coupon_minimum'      => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/users/{openid}/coupons']->postAsync([
  'openid' => '',
  'json' => [
    'stock_id'            => '9856000',
    'out_request_no'      => '89560002019101000121',
    'appid'               => 'wx233544546545989',
    'stock_creator_mchid' => '8956000',
    'coupon_value'        => 100,
    'coupon_minimum'      => 100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->users->_openid_->coupons->post([
  'openid' => '',
  'json' => [
    'stock_id'            => '9856000',
    'out_request_no'      => '89560002019101000121',
    'appid'               => 'wx233544546545989',
    'stock_creator_mchid' => '8956000',
    'coupon_value'        => 100,
    'coupon_minimum'      => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/users/{openid}/coupons')->post([
  'openid' => '',
  'json' => [
    'stock_id'            => '9856000',
    'out_request_no'      => '89560002019101000121',
    'appid'               => 'wx233544546545989',
    'stock_creator_mchid' => '8956000',
    'coupon_value'        => 100,
    'coupon_minimum'      => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/users/{openid}/coupons']->post([
  'openid' => '',
  'json' => [
    'stock_id'            => '9856000',
    'out_request_no'      => '89560002019101000121',
    'appid'               => 'wx233544546545989',
    'stock_creator_mchid' => '8956000',
    'coupon_value'        => 100,
    'coupon_minimum'      => 100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| coupon_id {data-required} | string | 代金券id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/cash-coupons/coupon/list-coupons-by-filter.html) [官方文档](https://pay.weixin.qq.com/docs/partner/apis/cash-coupons/coupon/list-coupons-by-filter.html) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_2.shtml)

# 根据商户号查用户的券 {#get}

可通过该接口查询用户在某商户号可用的全部券，可用于商户的小程序/H5中，用户"我的代金券"或"提交订单页"展示优惠信息。无法查询到微信支付立减金。本接口查不到用户的微信支付立减金（又称“全平台通用券”），即在所有商户都可以使用的券，例如：摇摇乐红包

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户openid
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_id {data-indent=1} | string | 批次号
| status {data-indent=1} | string | 代金券状态<br/>`SENDED` \| `USED` \| `EXPIRED` 枚举值之一
| creator_mchid {data-indent=1} | string | 创建批次的商户号
| sender_mchid {data-indent=1} | string | 批次发放商户号
| available_mchid {data-indent=1} | string | 可用商户号
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小
| business_type {data-indent=1} | string | 业务类型<br/>`MULTIUSE` 枚举值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->users->_openid_->coupons->getAsync([
  'openid' => '',
  'query' => [
    'appid'           => '',
    'stock_id'        => '',
    'status'          => 'SENDED',
    'creator_mchid'   => '',
    'sender_mchid'    => '',
    'available_mchid' => '',
    'offset'          => 0,
    'limit'           => 20,
    'business_type'   => 'MULTIUSE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/users/{openid}/coupons')->getAsync([
  'openid' => '',
  'query' => [
    'appid'           => '',
    'stock_id'        => '',
    'status'          => 'SENDED',
    'creator_mchid'   => '',
    'sender_mchid'    => '',
    'available_mchid' => '',
    'offset'          => 0,
    'limit'           => 20,
    'business_type'   => 'MULTIUSE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/users/{openid}/coupons']->getAsync([
  'openid' => '',
  'query' => [
    'appid'           => '',
    'stock_id'        => '',
    'status'          => 'SENDED',
    'creator_mchid'   => '',
    'sender_mchid'    => '',
    'available_mchid' => '',
    'offset'          => 0,
    'limit'           => 20,
    'business_type'   => 'MULTIUSE',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->users->_openid_->coupons->get([
  'openid' => '',
  'query' => [
    'appid'           => '',
    'stock_id'        => '',
    'status'          => 'SENDED',
    'creator_mchid'   => '',
    'sender_mchid'    => '',
    'available_mchid' => '',
    'offset'          => 0,
    'limit'           => 20,
    'business_type'   => 'MULTIUSE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/users/{openid}/coupons')->get([
  'openid' => '',
  'query' => [
    'appid'           => '',
    'stock_id'        => '',
    'status'          => 'SENDED',
    'creator_mchid'   => '',
    'sender_mchid'    => '',
    'available_mchid' => '',
    'offset'          => 0,
    'limit'           => 20,
    'business_type'   => 'MULTIUSE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/users/{openid}/coupons']->get([
  'openid' => '',
  'query' => [
    'appid'           => '',
    'stock_id'        => '',
    'status'          => 'SENDED',
    'creator_mchid'   => '',
    'sender_mchid'    => '',
    'available_mchid' => '',
    'offset'          => 0,
    'limit'           => 20,
    'business_type'   => 'MULTIUSE',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总数量
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/marketing/convention/chapter3_9.shtml)
