# 为用户发银行提现免费券 {#post}

为用户发银行提现免费券

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 银行提现免费券批次创建方商户号
| stock_id {data-required data-indent=1} | string | 银行提现免费券批次ID
| appid {data-required data-indent=1} | string | 应用ID
| send_request_no {data-required data-indent=1} | string | 商户单据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->withdrawFavor->users->_openid_->coupons->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'mchid'           => '1230000109',
    'stock_id'        => '1304490000000059',
    'appid'           => 'wxd678efh567hg6787',
    'send_request_no' => '89560002019101000121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/withdraw-favor/users/{openid}/coupons')->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'mchid'           => '1230000109',
    'stock_id'        => '1304490000000059',
    'appid'           => 'wxd678efh567hg6787',
    'send_request_no' => '89560002019101000121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/withdraw-favor/users/{openid}/coupons']->postAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'mchid'           => '1230000109',
    'stock_id'        => '1304490000000059',
    'appid'           => 'wxd678efh567hg6787',
    'send_request_no' => '89560002019101000121',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->withdrawFavor->users->_openid_->coupons->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'mchid'           => '1230000109',
    'stock_id'        => '1304490000000059',
    'appid'           => 'wxd678efh567hg6787',
    'send_request_no' => '89560002019101000121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/withdraw-favor/users/{openid}/coupons')->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'mchid'           => '1230000109',
    'stock_id'        => '1304490000000059',
    'appid'           => 'wxd678efh567hg6787',
    'send_request_no' => '89560002019101000121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/withdraw-favor/users/{openid}/coupons']->post([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'json' => [
    'mchid'           => '1230000109',
    'stock_id'        => '1304490000000059',
    'appid'           => 'wxd678efh567hg6787',
    'send_request_no' => '89560002019101000121',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| coupon_id | string | 银行提现免费券ID
| expire_time | string | 银行提现免费券过期时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter3_2_1.shtml)

# 查询批次下用户银行提现免费券列表 {#get}

查询批次下用户银行提现免费券列表

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| mchid {data-required data-indent=1} | string | 银行提现免费券批次创建方商户号
| stock_id {data-required data-indent=1} | string | 银行提现免费券批次ID
| appid {data-required data-indent=1} | string | 应用ID
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->withdrawFavor->users->_openid_->coupons->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'mchid'    => '1230000109',
    'stock_id' => '1304490000000059',
    'appid'    => 'wxd678efh567hg6787',
    'offset'   => 1,
    'limit'    => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/withdraw-favor/users/{openid}/coupons')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'mchid'    => '1230000109',
    'stock_id' => '1304490000000059',
    'appid'    => 'wxd678efh567hg6787',
    'offset'   => 1,
    'limit'    => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/withdraw-favor/users/{openid}/coupons']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'mchid'    => '1230000109',
    'stock_id' => '1304490000000059',
    'appid'    => 'wxd678efh567hg6787',
    'offset'   => 1,
    'limit'    => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->withdrawFavor->users->_openid_->coupons->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'mchid'    => '1230000109',
    'stock_id' => '1304490000000059',
    'appid'    => 'wxd678efh567hg6787',
    'offset'   => 1,
    'limit'    => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/withdraw-favor/users/{openid}/coupons')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'mchid'    => '1230000109',
    'stock_id' => '1304490000000059',
    'appid'    => 'wxd678efh567hg6787',
    'offset'   => 1,
    'limit'    => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/withdraw-favor/users/{openid}/coupons']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'query' => [
    'mchid'    => '1230000109',
    'stock_id' => '1304490000000059',
    'appid'    => 'wxd678efh567hg6787',
    'offset'   => 1,
    'limit'    => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 银行提现免费券列表
| send_time {data-indent=1} | string | 发放时间
| send_quota {data-indent=1} | integer | 发放额度
| coupon_id {data-indent=1} | string | 银行提现免费券的券ID
| use_quota {data-indent=1} | integer | 使用额度
| coupon_state {data-indent=1} | string | 银行提现免费券券状态
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小
| total_count {data-required} | integer | 查询结果总数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/Offline/apis/chapter3_2_2.shtml)
