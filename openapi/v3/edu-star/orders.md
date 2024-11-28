# 创建核销订单 {#post}

用户完成充值后，合作方必须调用该接口创建核销记录，并确保得到明确应答。 若调用失败，必须间隔一定时间后重试，否则会导致用户在集星光小程序中看到权益的使用状态与实际不符，进而引发用户投诉。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | appid
| wechat_openid {data-indent=1} | string | 用户在appid下的唯一标识
| qq {data-indent=1} | string | 用户QQ账号
| right_id {data-required data-indent=1} | string | 权益ID
| create_time {data-required data-indent=1} | string | 权益核销时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduStar->orders->postAsync([
  'json' => [
    'appid'         => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq'            => '',
    'right_id'      => 'qw3Da21QRCNt',
    'create_time'   => '2018-05-23T12:13:50+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-star/orders')->postAsync([
  'json' => [
    'appid'         => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq'            => '',
    'right_id'      => 'qw3Da21QRCNt',
    'create_time'   => '2018-05-23T12:13:50+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-star/orders']->postAsync([
  'json' => [
    'appid'         => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq'            => '',
    'right_id'      => 'qw3Da21QRCNt',
    'create_time'   => '2018-05-23T12:13:50+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduStar->orders->post([
  'json' => [
    'appid'         => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq'            => '',
    'right_id'      => 'qw3Da21QRCNt',
    'create_time'   => '2018-05-23T12:13:50+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-star/orders')->post([
  'json' => [
    'appid'         => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq'            => '',
    'right_id'      => 'qw3Da21QRCNt',
    'create_time'   => '2018-05-23T12:13:50+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-star/orders']->post([
  'json' => [
    'appid'         => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq'            => '',
    'right_id'      => 'qw3Da21QRCNt',
    'create_time'   => '2018-05-23T12:13:50+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | appid
| wechat_openid {data-required} | string | 用户在appid下的唯一标识
| qq | string | 用户QQ账号
| right_id {data-required} | string | 权益ID
| create_time {data-required} | string | 权益核销时间
| order_state {data-required} | string | 订单状态
| order_id {data-required} | string | 订单号

{.im-table #response}

参阅 [官方流程图](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/assets/img/common/edu/edu-star/chapter2_3.png)

# 通过QQ账号查询核销订单列表 {#get}

合作方通过调用该接口可获取核销订单信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | appid
| wechat_openid {data-indent=1} | string | 用户在appid下的唯一标识
| qq {data-indent=1} | string | 用户QQ账号
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->eduStar->orders->getAsync([
  'query' => [
    'appid' => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq' => '',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/edu-star/orders')->getAsync([
  'query' => [
    'appid' => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq' => '',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/edu-star/orders']->getAsync([
  'query' => [
    'appid' => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq' => '',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->eduStar->orders->get([
  'query' => [
    'appid' => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq' => '',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/edu-star/orders')->get([
  'query' => [
    'appid' => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq' => '',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/edu-star/orders']->get([
  'query' => [
    'appid' => 'wx998877665544wx',
    'wechat_openid' => 'oUpF8uMuAJOM2pxb1Q',
    'qq' => '',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 结果集
| appid {data-required data-indent=1} | string | appid
| wechat_openid {data-required data-indent=1} | string | 用户在appid下的唯一标识
| qq {data-indent=1} | string | 用户QQ账号
| right_id {data-required data-indent=1} | string | 权益ID
| create_time {data-required data-indent=1} | string | 权益核销时间
| order_state {data-required data-indent=1} | string | 订单状态
| order_id {data-required data-indent=1} | string | 订单号
| total_count {data-required} | integer | 总数量
| offset | integer | 分页页码
| limit | integer | 分页大小

{.im-table #response}

参阅 [官方流程图](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/assets/img/common/edu/edu-star/chapter2_3.png)
