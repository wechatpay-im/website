---
title: 获取乘客行程单列表
description: 服务商可以凭“用户openid”查询该乘客对应的“出租车行程单”，微信支付返回该“openid”下最多最近半年内的“出租车行程单”
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| limit {data-indent=1} | integer | 最大资源条数
| offset {data-indent=1} | integer | 请求资源起始位置
| openid {data-indent=1} | string | 小程序用户的微信openid
| appid {data-indent=1} | string | 小程序appid
| begin_date {data-indent=1} | string | 起始日期
| end_date {data-indent=1} | string | 结束日期
| region_id {data-indent=1} | integer | 行政区划id

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->taxiInvoice->userTaxiOrders->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'openid' => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid' => 'wxb1170446a4c0a5a2',
    'begin_date' => '20200307',
    'end_date' => '20200407',
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/taxi-invoice/user-taxi-orders')->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'openid' => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid' => 'wxb1170446a4c0a5a2',
    'begin_date' => '20200307',
    'end_date' => '20200407',
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/taxi-invoice/user-taxi-orders']->getAsync([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'openid' => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid' => 'wxb1170446a4c0a5a2',
    'begin_date' => '20200307',
    'end_date' => '20200407',
    'region_id' => 510100,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->taxiInvoice->userTaxiOrders->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'openid' => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid' => 'wxb1170446a4c0a5a2',
    'begin_date' => '20200307',
    'end_date' => '20200407',
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/taxi-invoice/user-taxi-orders')->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'openid' => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid' => 'wxb1170446a4c0a5a2',
    'begin_date' => '20200307',
    'end_date' => '20200407',
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/taxi-invoice/user-taxi-orders']->get([
  'query' => [
    'limit' => 5,
    'offset' => 10,
    'openid' => 'oUypO5fUvaUkyuc6ueOwgwDMjCiM',
    'appid' => 'wxb1170446a4c0a5a2',
    'begin_date' => '20200307',
    'end_date' => '20200407',
    'region_id' => 510100,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| data | object[] | 乘客行程单详情
| plate_number {data-indent=1} | string | 车牌号
| driver_license {data-indent=1} | string | 营运资格证号
| up_time {data-indent=1} | string | 上车时间
| offset | integer | 请求资源起始位置
| limit | integer | 最大资源条数
| total_count | integer | 资源总条数
| links | object | 相关链接
| next {data-indent=1} | string | 下一页链接
| prev {data-indent=1} | string | 上一页链接
| self {data-indent=1} | string | 当前链接

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/partner/products/taxi-fapiao/introduction.html)
