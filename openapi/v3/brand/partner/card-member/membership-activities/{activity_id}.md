# 修改及查询品牌会员发券活动信息 {#mix}

## 修改品牌会员发券活动信息 {#patch}

修改品牌会员发券活动信息，包括活动标题、活动时间、活动库存等。接口限频：按服务商商户号维度 5次/秒

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| title {data-required data-indent=1} | string | 活动主标题
| sub_title {data-required data-indent=1} | string | 活动主标题
| begin_time {data-required data-indent=1} | string | 活动开始时间
| end_time {data-required data-indent=1} | string | 活动结束时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->membershipActivities->_activity_id_->patchAsync([
  'activity_id' => '371067',
  'json' => [
    'brand_id'   => '1004',
    'title'      => '入会享券',
    'sub_title'  => '5张满减券',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time'   => '2020-01-29T13:29:35.120+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/membership-activities/{activity_id}')->patchAsync([
  'activity_id' => '371067',
  'json' => [
    'brand_id'   => '1004',
    'title'      => '入会享券',
    'sub_title'  => '5张满减券',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time'   => '2020-01-29T13:29:35.120+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/membership-activities/{activity_id}']->patchAsync([
  'activity_id' => '371067',
  'json' => [
    'brand_id'   => '1004',
    'title'      => '入会享券',
    'sub_title'  => '5张满减券',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time'   => '2020-01-29T13:29:35.120+08:00',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->membershipActivities->_activity_id_->patch([
  'activity_id' => '371067',
  'json' => [
    'brand_id'   => '1004',
    'title'      => '入会享券',
    'sub_title'  => '5张满减券',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time'   => '2020-01-29T13:29:35.120+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/membership-activities/{activity_id}')->patch([
  'activity_id' => '371067',
  'json' => [
    'brand_id'   => '1004',
    'title'      => '入会享券',
    'sub_title'  => '5张满减券',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time'   => '2020-01-29T13:29:35.120+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/membership-activities/{activity_id}']->patch([
  'activity_id' => '371067',
  'json' => [
    'brand_id'   => '1004',
    'title'      => '入会享券',
    'sub_title'  => '5张满减券',
    'begin_time' => '2020-01-20T13:29:35.120+08:00',
    'end_time'   => '2020-01-29T13:29:35.120+08:00',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商户请求单号
| brand_id {data-required} | string | 品牌ID
| card_id {data-required} | string | 会员卡ID
| activity_channel {data-required} | string | 活动渠道<br/>`MECHANT_APP_COMPONENT` 枚举值
| title {data-required} | string | 活动主标题
| sub_title {data-required} | string | 活动主标题
| begin_time {data-required} | string | 活动开始时间
| end_time {data-required} | string | 活动结束时间
| apply_total {data-required} | integer | 活动总库存
| apply_available {data-required} | integer | 活动剩余库存
| product_coupon_stock_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 商品券批次列表
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_id {data-required data-indent=1} | string | 批次ID
| activity_id {data-required} | string | 活动ID
| activity_state {data-required} | string | 活动状态<br/>`MEMBERSHIP_ACTIVITY_CREATED` \| `MEMBERSHIP_ACTIVITY_EFFECTIVE` \| `MEMBERSHIP_ACTIVITY_TERMINATED` \| `MEMBERSHIP_ACTIVITY_EXPIRED` 枚举值之一
| create_time {data-required} | string | 创建时间
| modify_time {data-required} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016588044)

## 查询品牌会员发券活动 {#get}

通过此接口可查询指定品牌会员发券活动的信息。接口限频：按服务商商户号维度 5次/秒

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| activity_id {data-required} | string | 活动ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->membershipActivities->_activity_id_->getAsync([
  'activity_id' => '371067',
  'query' => [
    'brand_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/membership-activities/{activity_id}')->getAsync([
  'activity_id' => '371067',
  'query' => [
    'brand_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/membership-activities/{activity_id}']->getAsync([
  'activity_id' => '371067',
  'query' => [
    'brand_id' => '1004',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->membershipActivities->_activity_id_->get([
  'activity_id' => '371067',
  'query' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/membership-activities/{activity_id}')->get([
  'activity_id' => '371067',
  'query' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/membership-activities/{activity_id}']->get([
  'activity_id' => '371067',
  'query' => [
    'brand_id' => '1004',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_request_no {data-required} | string | 商户请求单号
| brand_id {data-required} | string | 品牌ID
| card_id {data-required} | string | 会员卡ID
| activity_channel {data-required} | string | 活动渠道<br/>`MECHANT_APP_COMPONENT` 枚举值
| title {data-required} | string | 活动主标题
| sub_title {data-required} | string | 活动主标题
| begin_time {data-required} | string | 活动开始时间
| end_time {data-required} | string | 活动结束时间
| apply_total {data-required} | integer | 活动总库存
| apply_available {data-required} | integer | 活动剩余库存
| product_coupon_stock_list {data-required} | object[] {data-tooltip="对应PHP的array"} | 商品券批次列表
| product_coupon_id {data-required data-indent=1} | string | 商品券ID
| stock_id {data-required data-indent=1} | string | 批次ID
| activity_id {data-required} | string | 活动ID
| activity_state {data-required} | string | 活动状态<br/>`MEMBERSHIP_ACTIVITY_CREATED` \| `MEMBERSHIP_ACTIVITY_EFFECTIVE` \| `MEMBERSHIP_ACTIVITY_TERMINATED` \| `MEMBERSHIP_ACTIVITY_EXPIRED` 枚举值之一
| create_time {data-required} | string | 创建时间
| modify_time {data-required} | string | 更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016588015)
