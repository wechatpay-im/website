# 创建及列表查询品牌会员发券活动 {#mix}

## 创建品牌会员发券活动 {#post}

通过此接口可以创建一个品牌会员发券活动，创建成功将获得活动ID。该接口需要配合品牌会员组件使用，创建活动的中的券，将会在品牌会员组件调用时展示。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡ID
| activity_channel {data-required data-indent=1} | string | 活动渠道<br/>`MECHANT_APP_COMPONENT` 枚举值
| title {data-required data-indent=1} | string | 活动主标题
| sub_title {data-required data-indent=1} | string | 活动主标题
| begin_time {data-required data-indent=1} | string | 活动开始时间
| end_time {data-required data-indent=1} | string | 活动结束时间
| apply_total {data-required data-indent=1} | integer | 活动总库存
| product_coupon_stock_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商品券批次列表
| product_coupon_id {data-required data-indent=2} | string | 商品券ID
| stock_id {data-required data-indent=2} | string | 批次ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->membershipActivities->postAsync([
  'json' => [
    'out_request_no'            => '100002322019090134234sfdf',
    'brand_id'                  => '1004',
    'card_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_channel'          => 'MECHANT_APP_COMPONENT',
    'title'                     => '入会享券',
    'sub_title'                 => '5张满减券',
    'begin_time'                => '2020-01-20T13:29:35.120+08:00',
    'end_time'                  => '2020-01-29T13:29:35.120+08:00',
    'apply_total'               => 1000,
    'product_coupon_stock_list' => [[
      'product_coupon_id' => '701138812971763025610907319729',
      'stock_id'          => '98065001',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/membership-activities')->postAsync([
  'json' => [
    'out_request_no'            => '100002322019090134234sfdf',
    'brand_id'                  => '1004',
    'card_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_channel'          => 'MECHANT_APP_COMPONENT',
    'title'                     => '入会享券',
    'sub_title'                 => '5张满减券',
    'begin_time'                => '2020-01-20T13:29:35.120+08:00',
    'end_time'                  => '2020-01-29T13:29:35.120+08:00',
    'apply_total'               => 1000,
    'product_coupon_stock_list' => [[
      'product_coupon_id' => '701138812971763025610907319729',
      'stock_id'          => '98065001',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/membership-activities']->postAsync([
  'json' => [
    'out_request_no'            => '100002322019090134234sfdf',
    'brand_id'                  => '1004',
    'card_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_channel'          => 'MECHANT_APP_COMPONENT',
    'title'                     => '入会享券',
    'sub_title'                 => '5张满减券',
    'begin_time'                => '2020-01-20T13:29:35.120+08:00',
    'end_time'                  => '2020-01-29T13:29:35.120+08:00',
    'apply_total'               => 1000,
    'product_coupon_stock_list' => [[
      'product_coupon_id' => '701138812971763025610907319729',
      'stock_id'          => '98065001',
    ],],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->membershipActivities->post([
  'json' => [
    'out_request_no'            => '100002322019090134234sfdf',
    'brand_id'                  => '1004',
    'card_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_channel'          => 'MECHANT_APP_COMPONENT',
    'title'                     => '入会享券',
    'sub_title'                 => '5张满减券',
    'begin_time'                => '2020-01-20T13:29:35.120+08:00',
    'end_time'                  => '2020-01-29T13:29:35.120+08:00',
    'apply_total'               => 1000,
    'product_coupon_stock_list' => [[
      'product_coupon_id' => '701138812971763025610907319729',
      'stock_id'          => '98065001',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/membership-activities')->post([
  'json' => [
    'out_request_no'            => '100002322019090134234sfdf',
    'brand_id'                  => '1004',
    'card_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_channel'          => 'MECHANT_APP_COMPONENT',
    'title'                     => '入会享券',
    'sub_title'                 => '5张满减券',
    'begin_time'                => '2020-01-20T13:29:35.120+08:00',
    'end_time'                  => '2020-01-29T13:29:35.120+08:00',
    'apply_total'               => 1000,
    'product_coupon_stock_list' => [[
      'product_coupon_id' => '701138812971763025610907319729',
      'stock_id'          => '98065001',
    ],],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/membership-activities']->post([
  'json' => [
    'out_request_no'            => '100002322019090134234sfdf',
    'brand_id'                  => '1004',
    'card_id'                   => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_channel'          => 'MECHANT_APP_COMPONENT',
    'title'                     => '入会享券',
    'sub_title'                 => '5张满减券',
    'begin_time'                => '2020-01-20T13:29:35.120+08:00',
    'end_time'                  => '2020-01-29T13:29:35.120+08:00',
    'apply_total'               => 1000,
    'product_coupon_stock_list' => [[
      'product_coupon_id' => '701138812971763025610907319729',
      'stock_id'          => '98065001',
    ],],
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

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016464918)

## 查询品牌会员发券活动列表 {#get}

查询符合条件的品牌会员发券活动列表 接口限频：按服务商商户号维度 5次/秒

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌id
| card_id {data-indent=1} | string | 会员卡模板ID
| activity_state {data-indent=1} | string | 活动状态<br/>`MEMBERSHIP_ACTIVITY_CREATED` \| `MEMBERSHIP_ACTIVITY_EFFECTIVE` \| `MEMBERSHIP_ACTIVITY_TERMINATED` \| `MEMBERSHIP_ACTIVITY_EXPIRED` 枚举值之一
| offset {data-required data-indent=1} | integer | 请求资源起始位置
| limit {data-required data-indent=1} | integer | 最大资源条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->brand->partner->cardMember->membershipActivities->getAsync([
  'query' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_state' => 'MEMBERSHIP_ACTIVITY_CREATED',
    'offset'         => 10,
    'limit'          => 5,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/brand/partner/card-member/membership-activities')->getAsync([
  'query' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_state' => 'MEMBERSHIP_ACTIVITY_CREATED',
    'offset'         => 10,
    'limit'          => 5,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/brand/partner/card-member/membership-activities']->getAsync([
  'query' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_state' => 'MEMBERSHIP_ACTIVITY_CREATED',
    'offset'         => 10,
    'limit'          => 5,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->brand->partner->cardMember->membershipActivities->get([
  'query' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_state' => 'MEMBERSHIP_ACTIVITY_CREATED',
    'offset'         => 10,
    'limit'          => 5,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/brand/partner/card-member/membership-activities')->get([
  'query' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_state' => 'MEMBERSHIP_ACTIVITY_CREATED',
    'offset'         => 10,
    'limit'          => 5,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/brand/partner/card-member/membership-activities']->get([
  'query' => [
    'brand_id'       => '1004',
    'card_id'        => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
    'activity_state' => 'MEMBERSHIP_ACTIVITY_CREATED',
    'offset'         => 10,
    'limit'          => 5,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] {data-tooltip="对应PHP的array"} | 活动列表
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| brand_id {data-required data-indent=1} | string | 品牌ID
| card_id {data-required data-indent=1} | string | 会员卡ID
| activity_channel {data-required data-indent=1} | string | 活动渠道<br/>`MECHANT_APP_COMPONENT` 枚举值
| title {data-required data-indent=1} | string | 活动主标题
| sub_title {data-required data-indent=1} | string | 活动主标题
| begin_time {data-required data-indent=1} | string | 活动开始时间
| end_time {data-required data-indent=1} | string | 活动结束时间
| apply_total {data-required data-indent=1} | integer | 活动总库存
| apply_available {data-required data-indent=1} | integer | 活动剩余库存
| product_coupon_stock_list {data-required data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商品券批次列表
| product_coupon_id {data-required data-indent=2} | string | 商品券ID
| stock_id {data-required data-indent=2} | string | 批次ID
| activity_id {data-required data-indent=1} | string | 活动ID
| activity_state {data-required data-indent=1} | string | 活动状态<br/>`MEMBERSHIP_ACTIVITY_CREATED` \| `MEMBERSHIP_ACTIVITY_EFFECTIVE` \| `MEMBERSHIP_ACTIVITY_TERMINATED` \| `MEMBERSHIP_ACTIVITY_EXPIRED` 枚举值之一
| create_time {data-required data-indent=1} | string | 创建时间
| modify_time {data-required data-indent=1} | string | 更新时间
| offset {data-required} | integer | 请求资源起始位置
| limit {data-required} | integer | 最大资源条数
| total_count {data-required} | integer | 资源总条数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016588039)
