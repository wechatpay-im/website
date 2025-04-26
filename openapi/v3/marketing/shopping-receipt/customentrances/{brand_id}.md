# 查询及更新电子小票自定义入口信息 {#mix}

## 查询自定义入口 {#get}

该接口为电子小票自定义入口查询接口，商家可以通过该接口查询品牌的自定义入口展示内容。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 自定义入口的归属品牌ID。

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->shoppingReceipt->customentrances->_brand_id_->getAsync([
  'brand_id' => '1014',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/shopping-receipt/customentrances/{brand_id}')->getAsync([
  'brand_id' => '1014',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/shopping-receipt/customentrances/{brand_id}']->getAsync([
  'brand_id' => '1014',
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->shoppingReceipt->customentrances->_brand_id_->get([
  'brand_id' => '1014',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/shopping-receipt/customentrances/{brand_id}')->get([
  'brand_id' => '1014',
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/shopping-receipt/customentrances/{brand_id}']->get([
  'brand_id' => '1014',
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| custom_entrance_type | string | 自定义入口种类<br/>`MERCHANT_ACTIVITY` \| `MERCHANT_MINI_PROGRAM` 枚举值之一
| subtitle | string | 副标题，辅助描述商家活动或商家小程序信息
| goods_thumbnail_url | string | 展示商品信息，当自定义入口种类为商家活动时，该字段必填，种类为商家小程序该字段不填
| custom_entrance_state | string | 设置自定义入口的状态，ONLINE-在线对用户展示，OFFLINE-下线对用户不展示 可选取值
| start_time | string | 自定义入口的开始时间
| end_time | string | 自定义入口的结束时间
| brand_id | string | 自定义入口的归属品牌ID
| create_time | string | 自定义入口创建的时间
| modify_time | string | 自定义入口修改的时间
| out_request_no | string | 商户创建自定义入口的凭据号（格式：商户ID+日期+流水号），商家侧需要保持唯一且递增
| jump_link | object {data-tooltip="对应PHP的array"} | 自定义入口跳转信息
| mini_programs_appid {data-indent=1} | string | 自定义入口的跳转小程序AppID
| mini_programs_path {data-indent=1} | string | 自定义入口跳转小程序的path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526406) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012698331)

## 更新自定义入口 {#patch}

该接口为电子小票自定义入口更新接口，商家可以通过该接口为品牌更新自定义入口展示内容。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| brand_id {data-required} | string | 自定义入口的归属品牌ID。
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| custom_entrance_type {data-indent=1} | string | 自定义入口种类<br/>`MERCHANT_ACTIVITY` \| `MERCHANT_MINI_PROGRAM` 枚举值之一
| subtitle {data-indent=1} | string | 副标题，辅助描述商家活动或商家小程序信息
| goods_thumbnail_url {data-indent=1} | string | 展示商品信息，当自定义入口种类为商家活动时，该字段必填，种类为商家小程序该字段不填
| custom_entrance_state {data-indent=1} | string | 设置自定义入口的状态，ONLINE-在线对用户展示，OFFLINE-下线对用户不展示 可选取值
| start_time {data-indent=1} | string | 自定义入口的开始时间
| end_time {data-indent=1} | string | 自定义入口的结束时间
| out_request_no {data-indent=1} | string | 商户创建自定义入口的凭据号（格式：商户ID+日期+流水号），商家侧需要保持唯一且递增
| jump_link {data-indent=1} | object {data-tooltip="对应PHP的array"} | 自定义入口跳转信息
| mini_programs_appid {data-indent=2} | string | 自定义入口的跳转小程序AppID
| mini_programs_path {data-indent=2} | string | 自定义入口跳转小程序的path

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->shoppingReceipt->customentrances->_brand_id_->patchAsync([
  'brand_id' => '1014',
  'json' => [
    'custom_entrance_type'  => 'MERCHANT_ACTIVITY',
    'subtitle'              => '双十一8折活动',
    'goods_thumbnail_url'   => 'https://qpic.cn/xxx',
    'custom_entrance_state' => 'ONLINE',
    'start_time'            => '2015-05-20T13:29:35+08:00',
    'end_time'              => '2019-12-31T13:29:35.120+08:00',
    'out_request_no'        => '100002322019090134234sfdf',
    'jump_link'             => [
      'mini_programs_appid' => 'wxea9c30a90fs8d3fe',
      'mini_programs_path'  => '/pages/bonus/bonus',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/shopping-receipt/customentrances/{brand_id}')->patchAsync([
  'brand_id' => '1014',
  'json' => [
    'custom_entrance_type'  => 'MERCHANT_ACTIVITY',
    'subtitle'              => '双十一8折活动',
    'goods_thumbnail_url'   => 'https://qpic.cn/xxx',
    'custom_entrance_state' => 'ONLINE',
    'start_time'            => '2015-05-20T13:29:35+08:00',
    'end_time'              => '2019-12-31T13:29:35.120+08:00',
    'out_request_no'        => '100002322019090134234sfdf',
    'jump_link'             => [
      'mini_programs_appid' => 'wxea9c30a90fs8d3fe',
      'mini_programs_path'  => '/pages/bonus/bonus',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/shopping-receipt/customentrances/{brand_id}']->patchAsync([
  'brand_id' => '1014',
  'json' => [
    'custom_entrance_type'  => 'MERCHANT_ACTIVITY',
    'subtitle'              => '双十一8折活动',
    'goods_thumbnail_url'   => 'https://qpic.cn/xxx',
    'custom_entrance_state' => 'ONLINE',
    'start_time'            => '2015-05-20T13:29:35+08:00',
    'end_time'              => '2019-12-31T13:29:35.120+08:00',
    'out_request_no'        => '100002322019090134234sfdf',
    'jump_link'             => [
      'mini_programs_appid' => 'wxea9c30a90fs8d3fe',
      'mini_programs_path'  => '/pages/bonus/bonus',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->shoppingReceipt->customentrances->_brand_id_->patch([
  'brand_id' => '1014',
  'json' => [
    'custom_entrance_type'  => 'MERCHANT_ACTIVITY',
    'subtitle'              => '双十一8折活动',
    'goods_thumbnail_url'   => 'https://qpic.cn/xxx',
    'custom_entrance_state' => 'ONLINE',
    'start_time'            => '2015-05-20T13:29:35+08:00',
    'end_time'              => '2019-12-31T13:29:35.120+08:00',
    'out_request_no'        => '100002322019090134234sfdf',
    'jump_link'             => [
      'mini_programs_appid' => 'wxea9c30a90fs8d3fe',
      'mini_programs_path'  => '/pages/bonus/bonus',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/shopping-receipt/customentrances/{brand_id}')->patch([
  'brand_id' => '1014',
  'json' => [
    'custom_entrance_type'  => 'MERCHANT_ACTIVITY',
    'subtitle'              => '双十一8折活动',
    'goods_thumbnail_url'   => 'https://qpic.cn/xxx',
    'custom_entrance_state' => 'ONLINE',
    'start_time'            => '2015-05-20T13:29:35+08:00',
    'end_time'              => '2019-12-31T13:29:35.120+08:00',
    'out_request_no'        => '100002322019090134234sfdf',
    'jump_link'             => [
      'mini_programs_appid' => 'wxea9c30a90fs8d3fe',
      'mini_programs_path'  => '/pages/bonus/bonus',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/shopping-receipt/customentrances/{brand_id}']->patch([
  'brand_id' => '1014',
  'json' => [
    'custom_entrance_type'  => 'MERCHANT_ACTIVITY',
    'subtitle'              => '双十一8折活动',
    'goods_thumbnail_url'   => 'https://qpic.cn/xxx',
    'custom_entrance_state' => 'ONLINE',
    'start_time'            => '2015-05-20T13:29:35+08:00',
    'end_time'              => '2019-12-31T13:29:35.120+08:00',
    'out_request_no'        => '100002322019090134234sfdf',
    'jump_link'             => [
      'mini_programs_appid' => 'wxea9c30a90fs8d3fe',
      'mini_programs_path'  => '/pages/bonus/bonus',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| custom_entrance_type | string | 自定义入口种类<br/>`MERCHANT_ACTIVITY` \| `MERCHANT_MINI_PROGRAM` 枚举值之一
| subtitle | string | 副标题，辅助描述商家活动或商家小程序信息
| goods_thumbnail_url | string | 展示商品信息，当自定义入口种类为商家活动时，该字段必填，种类为商家小程序该字段不填
| custom_entrance_state | string | 设置自定义入口的状态，ONLINE-在线对用户展示，OFFLINE-下线对用户不展示 可选取值
| start_time | string | 自定义入口的开始时间
| end_time | string | 自定义入口的结束时间
| brand_id | string | 自定义入口的归属品牌ID
| create_time | string | 自定义入口创建的时间
| modify_time | string | 自定义入口修改的时间
| out_request_no | string | 商户创建自定义入口的凭据号（格式：商户ID+日期+流水号），商家侧需要保持唯一且递增
| jump_link | object {data-tooltip="对应PHP的array"} | 自定义入口跳转信息
| mini_programs_appid {data-indent=1} | string | 自定义入口的跳转小程序AppID
| mini_programs_path {data-indent=1} | string | 自定义入口跳转小程序的path

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012526475) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012697769)
