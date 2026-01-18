# 发放及查询用户代金券信息 {#mix}

## 发放代金券 {#post}

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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012463767) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012463807)

## 根据商户号查用户的券 {#get}

可通过该接口查询用户在某商户号可用的全部券，可用于商户的小程序/H5中，用户"我的代金券"或"提交订单页"展示优惠信息。无法查询到微信支付立减金。本接口查不到用户的微信支付立减金（又称“全平台通用券”），即在所有商户都可以使用的券，例如：摇摇乐红包

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户openid
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_id {data-indent=1} | string | 批次号
| status {data-indent=1} | string | 券或消费金状态<br/>`SENDED` \| `USED` 枚举值之一
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
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 结果集
| stock_creator_mchid {data-indent=1} | string | 创建批次的商户号
| stock_id {data-indent=1} | string | 批次号
| coupon_id {data-indent=1} | string | 代金券id
| coupon_name {data-indent=1} | string | 代金券名称
| status {data-indent=1} | string | 代金券状态<br/>`SENDED` \| `USED` \| `EXPIRED` \| `RECOVER` 枚举值之一
| description {data-indent=1} | string | 使用说明
| create_time {data-indent=1} | string | 领券时间
| coupon_type {data-indent=1} | string | 券类型<br/>`NORMAL` \| `CUT_TO` 枚举值之一
| start_time {data-indent=1} | string | 激活批次的时间
| stop_time {data-indent=1} | string | 终止批次的时间
| singleitem {data-indent=1} | boolean | 是否单品优惠
| cut_to_message {data-indent=1} | object {data-tooltip="对应PHP的array"} | 减至批次特定信息
| single_price_max {data-indent=2} | integer | 可用优惠的商品最高单价
| cut_to_price {data-indent=2} | integer | 减至后的优惠单价
| available_begin_time {data-indent=1} | string | 可用开始时间
| available_end_time {data-indent=1} | string | 可用结束时间
| normal_coupon_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| coupon_amount {data-required data-indent=2} | integer | 面额
| transaction_minimum {data-required data-indent=2} | integer | 门槛
| consume_information {data-indent=1} | object {data-tooltip="对应PHP的array"} | 已实扣代金券核销信息
| consume_time {data-indent=2} | string | 核销时间
| consume_mchid {data-indent=2} | string | 核销商户号
| transaction_id {data-indent=2} | string | 核销商户号
| goods_detail {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品信息
| goods_id {data-indent=3} | string | 商品编码
| quantity {data-indent=3} | integer | 商品数量
| price {data-indent=3} | integer | 商品价格
| discount_amount {data-indent=3} | integer | 商品优惠金额
| available_balance {data-indent=1} | number | 剩余金额
| business_type {data-indent=1} | string | 业务类型<br/>`MULTIUSE` 枚举值

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012534690) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012494237)
