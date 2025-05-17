---
title: 查询绑定多笔立减活动的代金券详情
description: 通过此接口可查询绑定多笔立减活动的代金券信息，包括代金券的基础信息、状态等。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识ID
| coupon_id {data-required} | string | 代金券ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->bankFavor->users->_openid_->coupons->_coupon_id_->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'coupon_id' => '9856888',
  'query' => [
    'appid' => 'wx57849631bb367f52',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/bank-favor/users/{openid}/coupons/{coupon_id}')->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'coupon_id' => '9856888',
  'query' => [
    'appid' => 'wx57849631bb367f52',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/bank-favor/users/{openid}/coupons/{coupon_id}']->getAsync([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'coupon_id' => '9856888',
  'query' => [
    'appid' => 'wx57849631bb367f52',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->bankFavor->users->_openid_->coupons->_coupon_id_->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'coupon_id' => '9856888',
  'query' => [
    'appid' => 'wx57849631bb367f52',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/bank-favor/users/{openid}/coupons/{coupon_id}')->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'coupon_id' => '9856888',
  'query' => [
    'appid' => 'wx57849631bb367f52',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/bank-favor/users/{openid}/coupons/{coupon_id}']->get([
  'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
  'coupon_id' => '9856888',
  'query' => [
    'appid' => 'wx57849631bb367f52',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_creator_mchid {data-required} | string | 创建批次的商户号
| stock_id {data-required} | string | 批次号
| coupon_id {data-required} | string | 代金券id
| coupon_name {data-required} | string | 代金券名称
| coupon_state {data-required} | string | 券状态<br/>`COUPON_STATE_UNKNOW` \| `COUPON_STATE_SEND` \| `COUPON_STATE_USED` \| `COUPON_STATE_EXPIRED` 枚举值之一
| receive_time {data-required} | string | 领券时间
| available_begin_time {data-required} | string | 可用开始时间
| available_end_time {data-required} | string | 可用结束时间
| activity_id {data-required} | string | 活动ID
| max_use_number {data-required} | number | 最大使用次数
| available_number {data-required} | number | 可用次数
| used_number {data-required} | number | 已使用次数
| use_amount_list | object {data-tooltip="对应PHP的array"} | 已用金额列表
| used_amounts {data-indent=1} | string[] | 已用金额
| openid | string | 用户标识ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4014569864)
