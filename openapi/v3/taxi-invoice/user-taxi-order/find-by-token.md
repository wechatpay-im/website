---
title: 根据凭证查询乘客行程单
description: 服务商可以凭“凭证”查询对应的“乘客行程单”。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| token {data-required data-indent=1} | string | 获取乘客行程单详情的凭证
| openid {data-required data-indent=1} | string | 用户标识
| appid {data-required data-indent=1} | string | 应用ID
| region_id {data-indent=1} | integer | 行政区划代码
| auth_mode {data-indent=1} | string | 授权模式

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->userTaxiOrder->findByToken->getAsync([
  'query' => [
    'token'     => 'ESvqG19gjw0qiiy1eeRA4VusLrOmIYQOMJ8rXX2V-ztUUuQvu_YBEZg9FAht0Y15r71mft9rcaMIjn7y6x0KSg',
    'openid'    => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid'     => 'wxb1170446a4c0a5a2',
    'region_id' => 310100,
    'auth_mode' => 'ORDER_AUTH',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/user-taxi-order/find-by-token')->getAsync([
  'query' => [
    'token'     => 'ESvqG19gjw0qiiy1eeRA4VusLrOmIYQOMJ8rXX2V-ztUUuQvu_YBEZg9FAht0Y15r71mft9rcaMIjn7y6x0KSg',
    'openid'    => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid'     => 'wxb1170446a4c0a5a2',
    'region_id' => 310100,
    'auth_mode' => 'ORDER_AUTH',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/user-taxi-order/find-by-token']->getAsync([
  'query' => [
    'token'     => 'ESvqG19gjw0qiiy1eeRA4VusLrOmIYQOMJ8rXX2V-ztUUuQvu_YBEZg9FAht0Y15r71mft9rcaMIjn7y6x0KSg',
    'openid'    => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid'     => 'wxb1170446a4c0a5a2',
    'region_id' => 310100,
    'auth_mode' => 'ORDER_AUTH',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->userTaxiOrder->findByToken->get([
  'query' => [
    'token'     => 'ESvqG19gjw0qiiy1eeRA4VusLrOmIYQOMJ8rXX2V-ztUUuQvu_YBEZg9FAht0Y15r71mft9rcaMIjn7y6x0KSg',
    'openid'    => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid'     => 'wxb1170446a4c0a5a2',
    'region_id' => 310100,
    'auth_mode' => 'ORDER_AUTH',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/user-taxi-order/find-by-token')->get([
  'query' => [
    'token'     => 'ESvqG19gjw0qiiy1eeRA4VusLrOmIYQOMJ8rXX2V-ztUUuQvu_YBEZg9FAht0Y15r71mft9rcaMIjn7y6x0KSg',
    'openid'    => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid'     => 'wxb1170446a4c0a5a2',
    'region_id' => 310100,
    'auth_mode' => 'ORDER_AUTH',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/user-taxi-order/find-by-token']->get([
  'query' => [
    'token'     => 'ESvqG19gjw0qiiy1eeRA4VusLrOmIYQOMJ8rXX2V-ztUUuQvu_YBEZg9FAht0Y15r71mft9rcaMIjn7y6x0KSg',
    'openid'    => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid'     => 'wxb1170446a4c0a5a2',
    'region_id' => 310100,
    'auth_mode' => 'ORDER_AUTH',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| plate_number {data-required} | string | 车牌号
| driver_license {data-required} | string | 营运资格证号
| up_time {data-required} | string | 上车时间
| region_id {data-required} | integer | 行政区划代码
| source {data-required} | string | 乘客行程单来源
| pay_time | string | 面对面付款时间
| pay_amount | integer | 面对面付款金额

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/apis/taxi-fapiao/user-taxi-order/query-user-taxi-order-by-token.html)
