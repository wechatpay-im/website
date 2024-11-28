---
title: 根据过滤条件查询用户券
description: 服务商自定义筛选条件（如创建商户号、归属商户号、发放商户号等），查询指定微信用户卡包中满足对应条件的所有商家券信息。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| openid {data-required} | string | 用户标识
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 公众账号ID
| stock_id {data-indent=1} | string | 批次号
| coupon_state {data-indent=1} | string | 券状态<br/>`SENDED` \| `USED` \| `EXPIRED` 枚举值之一
| creator_merchant {data-indent=1} | string | 创建批次的商户号
| belong_merchant {data-indent=1} | string | 批次归属商户号
| sender_merchant {data-indent=1} | string | 批次发放商户号
| offset {data-indent=1} | number | 分页页码
| limit {data-indent=1} | number | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->users->_openid_->coupons->getAsync([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/users/{openid}/coupons')->getAsync([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/users/{openid}/coupons']->getAsync([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->users->_openid_->coupons->get([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/users/{openid}/coupons')->get([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/users/{openid}/coupons']->get([
  'openid' => '2323dfsdf342342',
  'query' => [
    'appid'            => 'wx233544546545989',
    'stock_id'         => '9865000',
    'coupon_state'     => 'SENDED',
    'creator_merchant' => '1000000001',
    'belong_merchant'  => '1000000002',
    'sender_merchant'  => '1000000003',
    'offset'           => 0,
    'limit'            => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | number | 总数量
| offset {data-required} | number | 分页页码
| limit {data-required} | number | 分页大小

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_2_4.shtml)
